const https = require('https');
const fs = require('fs');
const path = require('path');

// ─── CONFIGURATION ──────────────────────────────────────────────────────────

const DATA_DIR = path.join(__dirname, '..', '_data/uluru-2026');
const ITINERARY_PATH = path.join(DATA_DIR, 'itinerary.yml');
const ROUTE_PATH = path.join(DATA_DIR, 'route.yml');
const TELEMETRY_PATH = path.join(DATA_DIR, 'telemetry.yml');

const TICK_MINUTES = 15;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function getDistance(p1, p2) {
    if (!p1 || !p2) return 0;
    const lat1 = p1[0], lon1 = p1[1];
    const lat2 = p2[0], lon2 = p2[1];
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function findClosestIndex(points, lat, lng, startIndex = 0) {
    let minIndex = startIndex;
    let minDist = Infinity;
    for (let i = startIndex; i < points.length; i++) {
        const p = points[i];
        const d = getDistance([lat, lng], p);
        if (d < minDist) {
            minDist = d;
            minIndex = i;
        }
    }
    return minIndex;
}

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
        if (line.match(/^[a-z_]+:/) || line.startsWith('#')) {
            end = i;
            break;
        }
    }
    let sectionContent = lines.slice(start + 1, end).join('\n');
    if (sameLineContent) {
        if (sameLineContent.startsWith('-')) {
            sectionContent = '  ' + sameLineContent + '\n' + sectionContent;
        } else {
            sectionContent = sameLineContent + '\n' + sectionContent;
        }
    }
    return sectionContent.trimEnd();
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
                        if (coords.length > 0) {
                            coords[0] = [p1.lat, p1.lng];
                            coords[coords.length - 1] = [p2.lat, p2.lng];
                        }
                        resolve(coords);
                    } else {
                        resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]);
                    }
                } catch (e) {
                    resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]);
                }
            });
        }).on('error', (e) => {
            resolve([[p1.lat, p1.lng], [p2.lat, p2.lng]]);
        });
    });
}

// ─── PARSING ─────────────────────────────────────────────────────────────────

function parseItinerary(text) {
    const days = [];
    const blocks = ('\n' + text).split(/\n\s*-\s*day:/).slice(1);

    blocks.forEach((block, i) => {
        const dayNumMatch = block.match(/^\s*(\d+)/);
        const dayNum = dayNumMatch ? parseInt(dayNumMatch[1]) : i;

        const events = [];
        // Split by event start (either - date: or - time:)
        const eventBlocks = block.split(/\n\s+-\s+(?=date:|time:)/).slice(1);
        
        eventBlocks.forEach(eb => {
            const dateMatch = eb.match(/date:\s*'([^']+)'/) || eb.match(/date:\s*([^\s\n]+)/);
            const timeMatch = eb.match(/time:\s*'([^']+)'/) || eb.match(/time:\s*([^\s\n]+)/);
            const typeMatch = eb.match(/type:\s*(\w+)/);
            const labelMatch = eb.match(/label:\s*'([^']+)'/) || eb.match(/label:\s*([^\n\r]+)/);
            const dwellMatch = eb.match(/dwell:\s*([\d.]+)/);
            const locMatch = eb.match(/loc:\s*\[\s*(-?\d+\.\d+),\s*(-?\d+\.\d+)\s*\]/);

            let buses = null;
            const busMatch = eb.match(/bus:\s*\[([\d,\s]+)\]/);
            if (busMatch) {
                buses = busMatch[1].split(',').map(b => parseInt(b.trim()));
            }

            if (dateMatch || timeMatch) {
                const dateStr = dateMatch ? dateMatch[1] : timeMatch[1];
                const tzMatch = dateStr.match(/[+-]\d{2}:\d{2}$/);
                const tz = tzMatch ? tzMatch[0] : '+10:00';
                
                const event = {
                    dateStr: dateStr,
                    type: typeMatch ? typeMatch[1] : '',
                    label: labelMatch ? labelMatch[1].trim().replace(/^'|'$/g, '') : '',
                    dwell: dwellMatch ? parseFloat(dwellMatch[1]) : 0,
                    lat: locMatch ? parseFloat(locMatch[1]) : null,
                    lng: locMatch ? parseFloat(locMatch[2]) : null,
                    bus: buses,
                    tz: tz
                };
                
                events.push(event);
            }
        });
        
        if (events.length > 0) {
            const firstDate = events[0].dateStr.split('T')[0];
            const firstTz = events[0].tz;
            days.push({ day: dayNum, date: firstDate, events, tz: firstTz });
        }
    });
    return days;
}

// ─── MAIN EXECUTION ──────────────────────────────────────────────────────────

async function run() {
    console.log(`Reading itinerary from ${ITINERARY_PATH}...`);
    const itineraryContent = fs.readFileSync(ITINERARY_PATH, 'utf8');
    const itineraryText = getSection(itineraryContent, 'itinerary');

    if (!itineraryText) {
        console.error("Could not find 'itinerary:' section in " + ITINERARY_PATH);
        process.exit(1);
    }

    const days = parseItinerary(itineraryText);
    
    // Fill in missing locations from previous events
    days.forEach(day => {
        let lastLat = null, lastLng = null;
        day.events.forEach(ev => {
            if (ev.lat !== null && ev.lng !== null) {
                lastLat = ev.lat;
                lastLng = ev.lng;
            } else if (lastLat !== null && lastLng !== null) {
                ev.lat = lastLat;
                ev.lng = lastLng;
            }
        });
    });

    console.log(`Processing ${days.length} days for route and telemetry...`);

    // Find starting position from the first event with a location
    let startPos = null;
    for (const day of days) {
        for (const ev of day.events) {
            if (ev.lat !== null && ev.lng !== null) {
                startPos = { lat: ev.lat, lng: ev.lng };
                break;
            }
        }
        if (startPos) break;
    }
    
    if (!startPos) {
        console.error("Could not find any starting location in the itinerary.");
        process.exit(1);
    }
    console.log(`Starting position: ${startPos.lat}, ${startPos.lng}`);

    // 1. ROUTE COMPUTATION
    const routeData = [];
    let lastPosBus = { 1: startPos, 2: startPos, 3: startPos };

    for (const day of days) {
        const dayEntry = { day: day.day, segments: [] };
        const wpGroups = {};

        for (let busId = 1; busId <= 3; busId++) {
            const waypoints = [lastPosBus[busId]];
            day.events.forEach(e => {
                if (e.lat !== null && e.lng !== null && (!e.bus || e.bus.includes(busId))) {
                    const last = waypoints[waypoints.length - 1];
                    if (last.lat !== e.lat || last.lng !== e.lng) {
                        waypoints.push({ lat: e.lat, lng: e.lng });
                    }
                }
            });
            const key = JSON.stringify(waypoints);
            if (!wpGroups[key]) wpGroups[key] = { buses: [], waypoints };
            wpGroups[key].buses.push(busId);
        }

        for (const key in wpGroups) {
            const group = wpGroups[key];
            const waypoints = group.waypoints;
            const buses = group.buses;

            let segmentPoints = [];
            if (waypoints.length > 1) {
                console.log(`Day ${day.day} Bus ${buses.join('+')}: Fetching ${waypoints.length - 1} legs...`);
                for (let j = 0; j < waypoints.length - 1; j++) {
                    const leg = await fetchLeg(waypoints[j], waypoints[j + 1]);
                    if (segmentPoints.length > 0 && leg.length > 0) {
                        segmentPoints = segmentPoints.concat(leg.slice(1));
                    } else {
                        segmentPoints = segmentPoints.concat(leg);
                    }
                }

                const sampleRate = Math.max(1, Math.floor(segmentPoints.length / 500));
                const protectedPoints = new Set(waypoints.map(p => `${p.lat.toFixed(7)},${p.lng.toFixed(7)}`));
                segmentPoints = segmentPoints.filter((p, idx) => {
                    const isWaypoint = protectedPoints.has(`${p[0].toFixed(7)},${p[1].toFixed(7)}`);
                    return isWaypoint || idx % sampleRate === 0 || idx === segmentPoints.length - 1;
                });
            } else {
                segmentPoints = [[waypoints[0].lat, waypoints[0].lng]];
            }

            const finalPos = { lat: segmentPoints[segmentPoints.length - 1][0], lng: segmentPoints[segmentPoints.length - 1][1] };
            buses.forEach(bid => lastPosBus[bid] = finalPos);

            dayEntry.segments.push({
                bus: buses.length === 3 ? null : buses,
                points: segmentPoints
            });
        }
        routeData.push(dayEntry);
    }

    // 2. TELEMETRY COMPUTATION
    console.log("Computing telemetry paths...");
    const busPaths = {};
    days.forEach(day => {
        const dayRoute = routeData.find(r => r.day === day.day);
        if (!dayRoute) return;
        busPaths[day.day] = {};

        [1, 2, 3].forEach(busId => {
            let busPoints = [];
            dayRoute.segments.forEach(seg => {
                if (!seg.bus || seg.bus.includes(busId)) busPoints = busPoints.concat(seg.points);
            });
            if (busPoints.length === 0) return;

            const cumDist = [0];
            for (let i = 1; i < busPoints.length; i++) {
                cumDist.push(cumDist[cumDist.length - 1] + getDistance(busPoints[i - 1], busPoints[i]));
            }

            const anchors = [];
            let lastKnownLoc = null;
            let currentSearchIdx = 0;
            day.events.forEach(e => {
                const currentLoc = (e.lat !== null && e.lng !== null) ? { lat: e.lat, lng: e.lng } : lastKnownLoc;
                if (currentLoc && (!e.bus || e.bus.includes(busId))) {
                    const idx = findClosestIndex(busPoints, currentLoc.lat, currentLoc.lng, currentSearchIdx);
                    const time = new Date(e.dateStr);
                    anchors.push({ time, idx, type: e.type, label: e.label, dwell: e.dwell, tz: e.tz });
                    lastKnownLoc = currentLoc;
                    currentSearchIdx = idx;
                }
            });
            if (anchors.length === 0) return;
            anchors.sort((a, b) => a.time - b.time);

            const pathWithTimes = [];
            const dayTz = anchors[0].tz;

            for (let i = 0; i < anchors.length; i++) {
                const a1 = anchors[i];
                const dwellEnd = new Date(a1.time.getTime() + a1.dwell * 3600000);
                pathWithTimes.push({ time: a1.time, pos: busPoints[a1.idx], type: a1.type, label: a1.label, tz: a1.tz });
                if (a1.dwell > 0) {
                    const isLast = (i === anchors.length - 1);
                    pathWithTimes.push({ 
                        time: dwellEnd, 
                        pos: busPoints[a1.idx], 
                        type: isLast ? 'stationary' : a1.type, 
                        label: isLast ? 'Overnight' : a1.label, 
                        tz: a1.tz 
                    });
                }
                if (i < anchors.length - 1) {
                    const a2 = anchors[i + 1];
                    if (a2.time > dwellEnd && a2.idx > a1.idx) {
                        const subDistTotal = cumDist[a2.idx] - cumDist[a1.idx];
                        const travelDuration = a2.time.getTime() - dwellEnd.getTime();
                        for (let pIdx = a1.idx + 1; pIdx < a2.idx; pIdx++) {
                            const pDist = cumDist[pIdx] - cumDist[a1.idx];
                            const pTime = new Date(dwellEnd.getTime() + travelDuration * (pDist / subDistTotal));
                            pathWithTimes.push({ time: pTime, pos: busPoints[pIdx], type: 'travel', label: 'Moving', tz: a1.tz });
                        }
                    }
                }
            }

            busPaths[day.day][busId] = pathWithTimes;
        });
    });

    console.log("Sampling telemetry ticks...");
    const telemetryGrouped = [];
    const lastBusStates = { 1: null, 2: null, 3: null };

    days.forEach(day => {
        const dayTz = day.tz;
        let currentTick = new Date(`${day.date}T06:00:00${dayTz}`);
        const endTick = new Date(`${day.date}T22:00:00${dayTz}`);

        while (currentTick <= endTick) {
            const tickStates = {};
            [1, 2, 3].forEach(bid => {
                const path = busPaths[day.day] ? busPaths[day.day][bid] : null;
                if (!path) return;
                const p1 = [...path].reverse().find(p => p.time <= currentTick);
                const p2 = path.find(p => p.time > currentTick);
                if (p1 && p2) {
                    const ratio = (currentTick - p1.time) / (p2.time - p1.time);
                    const lat = Number((p1.pos[0] + (p2.pos[0] - p1.pos[0]) * ratio).toFixed(6));
                    const lng = Number((p1.pos[1] + (p2.pos[1] - p1.pos[1]) * ratio).toFixed(6));
                    tickStates[bid] = { lat, lng, type: p1.type, label: p1.label, tz: p1.tz };
                } else if (p1) {
                    tickStates[bid] = { lat: Number(p1.pos[0].toFixed(6)), lng: Number(p1.pos[1].toFixed(6)), type: p1.type, label: p1.label, tz: p1.tz };
                }
            });

            const groups = {};
            Object.entries(tickStates).forEach(([bid, state]) => {
                const key = `${state.lat},${state.lng},${state.type},${state.label}`;
                if (!groups[key]) groups[key] = { state, buses: [] };
                groups[key].buses.push(parseInt(bid));
            });

            Object.values(groups).forEach(group => {
                const { state, buses } = group;
                const latChg = buses.some(bid => !lastBusStates[bid] || lastBusStates[bid].lat !== state.lat);
                const lngChg = buses.some(bid => !lastBusStates[bid] || lastBusStates[bid].lng !== state.lng);
                const typeChg = buses.some(bid => !lastBusStates[bid] || lastBusStates[bid].type !== state.type);
                const labelChg = buses.some(bid => !lastBusStates[bid] || lastBusStates[bid].label !== state.label);

                if (latChg || lngChg || typeChg || labelChg) {
                    // Create local ISO string using the state's timezone
                    const tOffset = state.tz;
                    // Properly format local time string with offset
                    const offsetParts = tOffset.match(/([\+\-])(\d{2}):(\d{2})/);
                    const sign = offsetParts[1] === '+' ? 1 : -1;
                    const offMs = sign * (parseInt(offsetParts[2]) * 3600000 + parseInt(offsetParts[3]) * 60000);
                    const localTick = new Date(currentTick.getTime() + offMs);
                    const tIso = localTick.toISOString().split('.')[0] + tOffset;
                    
                    telemetryGrouped.push([
                        day.day,
                        tIso,
                        buses,
                        latChg ? state.lat : null,
                        lngChg ? state.lng : null,
                        typeChg ? state.type : null,
                        labelChg ? state.label : null
                    ]);
                    buses.forEach(bid => lastBusStates[bid] = state);
                }
            });
            currentTick = new Date(currentTick.getTime() + TICK_MINUTES * 60000);
        }
    });


    // 3. YAML GENERATION (Separate files)
    console.log(`Writing route data to ${ROUTE_PATH}...`);
    let routeYaml = `route:\n`;
    routeData.forEach(day => {
        routeYaml += `  - day: ${day.day}\n    segments:\n`;
        day.segments.forEach(seg => {
            routeYaml += `      - bus: [${(seg.bus || [1, 2, 3]).join(', ')}]\n`;
            const flat = [].concat(...seg.points);
            routeYaml += `        points: [${flat.map(n => n.toFixed(7)).join(', ')}]\n`;
        });
    });
    fs.writeFileSync(ROUTE_PATH, routeYaml);

    console.log(`Writing telemetry data to ${TELEMETRY_PATH}...`);
    let telemetryYaml = `telemetry:\n`;
    telemetryGrouped.forEach(row => {
        telemetryYaml += `  - ${JSON.stringify(row)}\n`;
    });
    fs.writeFileSync(TELEMETRY_PATH, telemetryYaml);

    console.log("\nSuccess! Separate data files updated.");
}

run().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
