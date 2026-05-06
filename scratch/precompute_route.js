const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Read the data file
const dataPath = path.join(__dirname, '..', '_data', 'uluru-2026.yml');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// Robust section extraction
function getSection(content, sectionName) {
    const lines = content.split('\n');
    let start = -1;
    let sameLineContent = '';
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith(sectionName + ':')) {
            start = i;
            sameLineContent = lines[i].substring(sectionName.length + 1).trim();
            break;
        }
    }
    if (start === -1) return null;

    let end = lines.length;
    for (let i = start + 1; i < lines.length; i++) {
        const line = lines[i];
        // Stop at new section or comment at col 0
        if (line.match(/^[a-z_]+:/) || line.startsWith('#')) {
            end = i;
            break;
        }
    }
    let sectionContent = lines.slice(start + 1, end).join('\n');
    if (sameLineContent) {
        // If content was on the same line (like "gallery: - image"), prepend it
        // but normalize it to have proper indentation if it's a list item
        if (sameLineContent.startsWith('-')) {
            sectionContent = '  ' + sameLineContent + '\n' + sectionContent;
        } else {
            sectionContent = sameLineContent + '\n' + sectionContent;
        }
    }
    return sectionContent.trimEnd();
}

const itineraryText = getSection(dataContent, 'itinerary');
const galleryText = getSection(dataContent, 'gallery');

if (!itineraryText) {
    console.error("Could not find 'itinerary:' section in uluru-2026.yml");
    process.exit(1);
}

function fetchLeg(p1, p2) {
    const url = `https://router.project-osrm.org/route/v1/driving/${p1.lng},${p1.lat};${p2.lng},${p2.lat}?overview=full&geometries=geojson`;
    
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.routes && json.routes[0]) {
                        const coords = json.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
                        // Force exact start/end points to allow "off-road" legs to the precise waypoint
                        if (coords.length > 0) {
                            coords[0] = [p1.lat, p1.lng];
                            coords[coords.length - 1] = [p2.lat, p2.lng];
                        }
                        resolve(coords);
                    } else {
                        console.warn(`  ! OSRM returned no route for ${p1.lat},${p1.lng} to ${p2.lat},${p2.lng}`);
                        resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]); // Fallback to straight line
                    }
                } catch (e) {
                    console.error("  ! JSON Parse error:", e.message);
                    resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]);
                }
            });
        }).on('error', (e) => {
            console.error("  ! Network error:", e.message);
            resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]);
        });
    });
}

function getWaypointsForBus(dayBlock, busId, lastPos) {
    const waypoints = [lastPos];
    // Split by "- " that follows significant indentation
    const events = dayBlock.split(/\n\s+-\s+/);
    
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
    // Each day starts with "  - day:"
    const dayBlocks = itineraryText.split(/\n\s*-\s*day:/).slice(1);
    
    console.log(`Processing ${dayBlocks.length} days for 3 buses from consolidated data...`);

    const routeData = [];
    let lastPosBus = {
        1: { lat: -37.7046500, lng: 145.0631543 },
        2: { lat: -37.7046500, lng: 145.0631543 },
        3: { lat: -37.7046500, lng: 145.0631543 }
    };

    for (let i = 0; i < dayBlocks.length; i++) {
        const block = dayBlocks[i];
        const dayNum = i + 1;
        const dayEntry = { day: dayNum, segments: [] };

        // Group buses by their waypoint sequences
        const wpGroups = {};
        for (let busId = 1; busId <= 3; busId++) {
            const wps = getWaypointsForBus(block, busId, lastPosBus[busId]);
            const key = JSON.stringify(wps);
            if (!wpGroups[key]) wpGroups[key] = { buses: [], waypoints: wps };
            wpGroups[key].buses.push(busId);
        }

        for (const key in wpGroups) {
            const group = wpGroups[key];
            const waypoints = group.waypoints;
            const buses = group.buses;

            let segmentPoints = [];
            if (waypoints.length > 1) {
                console.log(`Day ${dayNum} Bus ${buses.join('+')}: Fetching ${waypoints.length - 1} legs...`);
                
                for (let j = 0; j < waypoints.length - 1; j++) {
                    const leg = await fetchLeg(waypoints[j], waypoints[j+1]);
                    // Concatenate, avoiding duplicating the shared point
                    if (segmentPoints.length > 0 && leg.length > 0) {
                        segmentPoints = segmentPoints.concat(leg.slice(1));
                    } else {
                        segmentPoints = segmentPoints.concat(leg);
                    }
                }
                
                // Sample the final combined route, but PROTECT waypoints from being filtered out
                const sampleRate = Math.max(1, Math.floor(segmentPoints.length / 500));
                const protectedPoints = new Set(waypoints.map(p => `${p.lat.toFixed(7)},${p.lng.toFixed(7)}`));
                
                segmentPoints = segmentPoints.filter((p, idx) => {
                    const isWaypoint = protectedPoints.has(`${p[0].toFixed(7)},${p[1].toFixed(7)}`);
                    return isWaypoint || idx % sampleRate === 0 || idx === segmentPoints.length - 1;
                });
                
            } else {
                segmentPoints = [[waypoints[0].lat, waypoints[0].lng]];
            }

            // Update last positions for these buses
            const finalPos = { lat: segmentPoints[segmentPoints.length-1][0], lng: segmentPoints[segmentPoints.length-1][1] };
            buses.forEach(bid => lastPosBus[bid] = finalPos);

            dayEntry.segments.push({
                bus: buses.length === 3 ? null : buses,
                points: segmentPoints
            });
        }
        routeData.push(dayEntry);
    }

    // Write back to combined YAML with schema comments
    let yamlStr = `# ─── ITINERARY ────────────────────────────────────────────────────────────────
# One entry per calendar day.
# - day:      Day number (1, 2, 3...)
#   date:     ISO string (YYYY-MM-DD)
#   title:    Display title for the day
#   location: Overnight location name
#   image:    Path to thumbnail image
#   events:   List of activities/stops. Each event:
#     time:   HH:MM (24h format)
#     type:   depart | travel | activity | lunch | dinner | arrive | camp
#     label:  Short display name
#     dwell:  Optional decimal hours to stay at location (e.g. 0.5)
#     lat/lng: Coordinates for map waypoints
#     bus:    Optional array [1, 2, 3] if specific to certain buses
#     detail: Optional expanded description
itinerary:
${itineraryText}\n\n`;

    if (galleryText) {
        yamlStr += `# ─── GALLERY ──────────────────────────────────────────────────────────────────
# Images shown in the expedition media section.
# - image:   Path to image file
#   alt:     Alt text for accessibility
#   caption: Display caption
#   span:    Layout size (normal | wide | large)
gallery:
${galleryText}\n\n`;
    }
    
    yamlStr += `# ─── PRECOMPUTED ROUTE ────────────────────────────────────────────────────────
# Optimized map geometry generated by precompute_route.js.
# - day:      Day number
#   segments: List of route paths for this day.
#     bus:    Optional array [1, 2, 3]. If null, applies to all buses.
#     points: List of [lat, lng] coordinates sampled from OSRM.
route:\n`;

    routeData.forEach(day => {
        yamlStr += `  - day: ${day.day}\n`;
        yamlStr += `    segments:\n`;
        day.segments.forEach(seg => {
            if (seg.bus) {
                yamlStr += `      - bus: [${seg.bus.join(', ')}]\n`;
            } else {
                yamlStr += `      - bus:\n`;
            }
            yamlStr += `        points:\n`;
            seg.points.forEach(p => {
                yamlStr += `          - [${p[0].toFixed(7)}, ${p[1].toFixed(7)}]\n`;
            });
        });
    });

    fs.writeFileSync(dataPath, yamlStr);
    console.log(`\nSuccess! Re-synchronized ${dataPath}`);
}

run().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
