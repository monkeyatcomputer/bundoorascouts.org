const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Read the markdown file
const mdPath = path.join(__dirname, '..', 'trip', 'uluru-2026.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// 2. Extract itinerary section
const itineraryMatch = mdContent.match(/itinerary:([\s\S]*?)gallery:/);
if (!itineraryMatch) {
    console.error("Could not find itinerary section");
    process.exit(1);
}
const itineraryText = itineraryMatch[1];

// Split by day entries
const dayBlocks = itineraryText.split(/\n\s*-\s*day:/).slice(1);
console.log(`Processing ${dayBlocks.length} days...`);

const dayRoutes = {};
let lastPos = { lat: -37.7081, lng: 145.0631 };

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
                        console.warn("  ! OSRM returned no route for these points:", coords);
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

async function run() {
    for (let i = 0; i < dayBlocks.length; i++) {
        const block = dayBlocks[i];
        const dayNum = i + 1;
        const waypoints = [lastPos];

        // Find all events in this block and extract lat/lng
        // Look for any line starting with lat: or lng:
        const lines = block.split('\n');
        let currentLat = null;
        lines.forEach(line => {
            const latMatch = line.match(/lat:\s*(-?\d+\.\d+)/);
            const lngMatch = line.match(/lng:\s*(-?\d+\.\d+)/);
            if (latMatch) currentLat = parseFloat(latMatch[1]);
            if (lngMatch && currentLat !== null) {
                const p = { lat: currentLat, lng: parseFloat(lngMatch[1]) };
                // De-dupe against last added point
                const last = waypoints[waypoints.length - 1];
                if (last.lat !== p.lat || last.lng !== p.lng) {
                    waypoints.push(p);
                }
                currentLat = null; // Reset for next pair
            }
        });

        if (waypoints.length > 1) {
            console.log(`Day ${dayNum}: Fetching route for ${waypoints.length} waypoints...`);
            const route = await fetchRoute(waypoints);
            if (route) {
                // Sample for performance (aim for ~100 points per day max)
                const sampleRate = Math.max(1, Math.floor(route.length / 100));
                dayRoutes[`day_${dayNum}`] = route.filter((_, idx) => idx % sampleRate === 0 || idx === route.length - 1);
                console.log(`  -> Saved ${dayRoutes[`day_${dayNum}`].length} points.`);
                lastPos = waypoints[waypoints.length - 1];
            } else {
                console.warn(`  -> Failed to fetch route for Day ${dayNum}. Using straight line.`);
                dayRoutes[`day_${dayNum}`] = waypoints.map(p => [p.lat, p.lng]);
                lastPos = waypoints[waypoints.length - 1];
            }
        } else {
            console.log(`Day ${dayNum}: No travel.`);
        }
    }

    // 3. Write to YAML
    let yaml = 'days:\n';
    let hasData = false;
    for (const key in dayRoutes) {
        hasData = true;
        yaml += `  ${key}:\n`;
        dayRoutes[key].forEach(p => {
            yaml += `    - [${p[0].toFixed(5)}, ${p[1].toFixed(5)}]\n`;
        });
    }

    if (!hasData) {
        console.error("No route data was generated!");
        process.exit(1);
    }

    const outPath = path.join(__dirname, '..', '_data', 'expedition_route_uluru.yml');
    fs.writeFileSync(outPath, yaml);
    console.log(`\nSuccess! Saved ${Object.keys(dayRoutes).length} day segments to ${outPath}`);
}

run().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
