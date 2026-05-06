const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Read the markdown file
const mdPath = path.join(__dirname, '..', 'trip', 'uluru-2026.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Use a regex to extract the frontmatter (itinerary)
const frontmatterMatch = mdContent.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatterMatch) {
    console.error("Could not find frontmatter");
    process.exit(1);
}

// Basic YAML parser for the itinerary part (avoiding external dependencies if possible, but let's try to be robust)
// Since I can't easily install npm packages, I'll use a more manual approach or a simple regex-based one.
// Actually, I'll just use the existing logic but improved.

function fetchRoute(points) {
    if (points.length < 2) return Promise.resolve(null);
    const coords = points.map(p => `${p.lng},${p.lat}`).join(';');
    const url = `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`;
    
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.routes && json.routes[0]) {
                        resolve(json.routes[0].geometry.coordinates.map(c => [c[1], c[0]]));
                    } else {
                        console.warn("  ! OSRM returned no route for these points.");
                        resolve(null);
                    }
                } catch (e) {
                    console.error("  ! JSON Parse error:", e.message);
                    resolve(null);
                }
            });
        }).on('error', (e) => {
            console.error("  ! Network error:", e.message);
            resolve(null);
        });
    });
}

// Helper to extract waypoints for a specific bus
function getWaypointsForBus(dayBlock, busId, lastPos) {
    const waypoints = [lastPos];
    const events = dayBlock.split('\n      -');
    
    events.forEach(event => {
        const busMatch = event.match(/bus:\s*\[([\d,\s]+)\]/);
        const latMatch = event.match(/lat:\s*(-?\d+\.\d+)/);
        const lngMatch = event.match(/lng:\s*(-?\d+\.\d+)/);
        
        if (latMatch && lngMatch) {
            let applies = true;
            if (busMatch) {
                const buses = busMatch[1].split(',').map(b => parseInt(b.trim()));
                applies = buses.includes(busId);
            }
            
            if (applies) {
                const p = { lat: parseFloat(latMatch[1]), lng: parseFloat(lngMatch[1]) };
                const last = waypoints[waypoints.length - 1];
                if (last.lat !== p.lat || last.lng !== p.lng) {
                    waypoints.push(p);
                }
            }
        }
    });
    return waypoints;
}

async function run() {
    const itineraryMatch = mdContent.match(/itinerary:([\s\S]*?)gallery:/);
    const itineraryText = itineraryMatch[1];
    const dayBlocks = itineraryText.split(/\n\s*-\s*day:/).slice(1);
    
    console.log(`Processing ${dayBlocks.length} days for 3 buses...`);

    const result = { days: {} };
    let lastPosBus = {
        1: { lat: -37.7046500, lng: 145.0631543 },
        2: { lat: -37.7046500, lng: 145.0631543 },
        3: { lat: -37.7046500, lng: 145.0631543 }
    };

    for (let i = 0; i < dayBlocks.length; i++) {
        const block = dayBlocks[i];
        const dayNum = i + 1;
        result.days[`day_${dayNum}`] = {};

        for (let busId = 1; busId <= 3; busId++) {
            const waypoints = getWaypointsForBus(block, busId, lastPosBus[busId]);
            
            if (waypoints.length > 1) {
                console.log(`Day ${dayNum} Bus ${busId}: Fetching route (${waypoints.length} wps)...`);
                const route = await fetchRoute(waypoints);
                if (route) {
                    // Increased frequency: Sample every 2nd point instead of every Nth, aiming for ~500 points per day
                    const sampleRate = Math.max(1, Math.floor(route.length / 500));
                    result.days[`day_${dayNum}`][`bus_${busId}`] = route.filter((_, idx) => idx % sampleRate === 0 || idx === route.length - 1);
                    lastPosBus[busId] = waypoints[waypoints.length - 1];
                } else {
                    result.days[`day_${dayNum}`][`bus_${busId}`] = waypoints.map(p => [p.lat, p.lng]);
                    lastPosBus[busId] = waypoints[waypoints.length - 1];
                }
            } else {
                // Stationary day or same location
                result.days[`day_${dayNum}`][`bus_${busId}`] = [[lastPosBus[busId].lat, lastPosBus[busId].lng]];
            }
        }
    }

    // Write to YAML
    let yamlStr = 'days:\n';
    for (const dayKey in result.days) {
        yamlStr += `  ${dayKey}:\n`;
        for (const busKey in result.days[dayKey]) {
            yamlStr += `    ${busKey}:\n`;
            result.days[dayKey][busKey].forEach(p => {
                yamlStr += `      - [${p[0].toFixed(7)}, ${p[1].toFixed(7)}]\n`;
            });
        }
    }

    const outPath = path.join(__dirname, '..', '_data', 'expedition_route_uluru.yml');
    fs.writeFileSync(outPath, yamlStr);
    console.log(`\nSuccess! Saved segments to ${outPath}`);
}

run().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
