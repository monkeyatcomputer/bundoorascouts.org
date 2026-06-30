const https = require('https');
const fs = require('fs');
const path = require('path');

// ─── CONFIGURATION ──────────────────────────────────────────────────────────

const tripDir = process.argv[2] || 'uluru-2026';
const DATA_DIR = path.join(__dirname, '..', '_data', tripDir);
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
    const url = `https://router.project-osrm.org/route/v1/driving/${p1.lng},${p1.lat};${p2.lng},${p2.lat}?overview=full&geometries=geojson&annotations=duration`;
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.routes && json.routes[0]) {
                        const route = json.routes[0];
                        const coords = route.geometry.coordinates.map(c => [c[1], c[0]]);
                        // Extract durations between coordinate pairs
                        let durations = null;
                        if (route.legs && route.legs[0] && route.legs[0].annotation && route.legs[0].annotation.duration) {
                            durations = route.legs[0].annotation.duration;
                        }

                        if (coords.length > 0) {
                            coords[0] = [p1.lat, p1.lng];
                            coords[coords.length - 1] = [p2.lat, p2.lng];
                        }
                        resolve({ points: coords, durations: durations });
                    } else {
                        resolve({ points: [[p1.lat, p1.lng], [p2.lat, p2.lng]], durations: null });
                    }
                } catch (e) {
                    resolve({ points: [[p1.lat, p1.lng], [p2.lat, p2.lng]], durations: null });
                }
            });
        }).on('error', (e) => {
            resolve({ points: [[p1.lat, p1.lng], [p2.lat, p2.lng]], durations: null });
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

            let groups = null;
            const groupMatch = eb.match(/group:\s*\[([^\]]+)\]/) || eb.match(/bus:\s*\[([^\]]+)\]/); // Support both during migration
            if (groupMatch) {
                groups = groupMatch[1].split(',').map(b => b.trim().replace(/^'|'$/g, ''));
            }

            if (dateMatch || timeMatch) {
                const dateStr = dateMatch ? dateMatch[1] : timeMatch[1];
                const tzMatch = dateStr.match(/[+-]\d{2}:\d{2}$/);
                const tz = tzMatch ? tzMatch[0] : '+10:00';
                
                const type = typeMatch ? typeMatch[1] : '';
                const defaultDwell = ['depart', 'arrive', 'travel'].includes(type) ? 0 : 1.0;
                const event = {
                    dateStr: dateStr,
                    type: type,
                    label: labelMatch ? labelMatch[1].trim().replace(/^'|'$/g, '') : '',
                    dwell: dwellMatch ? parseFloat(dwellMatch[1]) : defaultDwell,
                    lat: locMatch ? parseFloat(locMatch[1]) : null,
                    lng: locMatch ? parseFloat(locMatch[2]) : null,
                    group: groups,
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

function getAllGroups(days) {
    const groups = new Set();
    days.forEach(day => {
        day.events.forEach(ev => {
            if (ev.group) {
                ev.group.forEach(g => groups.add(g));
            }
        });
    });
    if (groups.size === 0) {
        return ['1', '2', '3']; // Default fallback
    }
    return Array.from(groups);
}

// ─── MAIN EXECUTION ──────────────────────────────────────────────────────────

async function run() {
    console.log(`Reading itinerary from ${ITINERARY_PATH}...`);
    if (!fs.existsSync(ITINERARY_PATH)) {
        console.error(`File not found: ${ITINERARY_PATH}`);
        process.exit(1);
    }
    const itineraryContent = fs.readFileSync(ITINERARY_PATH, 'utf8');
    const itineraryText = getSection(itineraryContent, 'itinerary');

    if (!itineraryText) {
        console.error("Could not find 'itinerary:' section in " + ITINERARY_PATH);
        process.exit(1);
    }

    const days = parseItinerary(itineraryText);
    const allGroups = getAllGroups(days);
    console.log(`Identified groups: ${allGroups.join(', ')}`);
    
    // Fill in missing locations from previous events
    days.forEach(day => {
        let lastLocGroup = {}; // Track {lat, lng} per group
        day.events.forEach(ev => {
            const groups = ev.group || allGroups;
            if (ev.lat !== null && ev.lng !== null) {
                groups.forEach(g => {
                    lastLocGroup[g] = { lat: ev.lat, lng: ev.lng };
                });
            } else {
                let inheritedLoc = null;
                for (const g of groups) {
                    if (lastLocGroup[g]) {
                        inheritedLoc = lastLocGroup[g];
                        break;
                    }
                }
                if (inheritedLoc) {
                    ev.lat = inheritedLoc.lat;
                    ev.lng = inheritedLoc.lng;
                    groups.forEach(g => {
                        lastLocGroup[g] = inheritedLoc;
                    });
                }
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
    let lastPosGroup = {};
    allGroups.forEach(g => lastPosGroup[g] = startPos);

    for (const day of days) {
        const dayEntry = { day: day.day, segments: [] };
        const wpGroups = {};

        for (const groupId of allGroups) {
            const waypoints = [lastPosGroup[groupId]];
            day.events.forEach(e => {
                if (e.lat !== null && e.lng !== null && (!e.group || e.group.includes(groupId))) {
                    const last = waypoints[waypoints.length - 1];
                    if (last.lat !== e.lat || last.lng !== e.lng) {
                        waypoints.push({ lat: e.lat, lng: e.lng });
                    }
                }
            });
            const key = JSON.stringify(waypoints);
            if (!wpGroups[key]) wpGroups[key] = { groups: [], waypoints };
            wpGroups[key].groups.push(groupId);
        }

        for (const key in wpGroups) {
            const group = wpGroups[key];
            const waypoints = group.waypoints;
            const groups = group.groups;

            let segmentPoints = [];
            let segmentDurations = [];
            if (waypoints.length > 1) {
                console.log(`Day ${day.day} Group ${groups.join('+')}: Fetching ${waypoints.length - 1} legs...`);
                for (let j = 0; j < waypoints.length - 1; j++) {
                    const leg = await fetchLeg(waypoints[j], waypoints[j + 1]);
                    if (segmentPoints.length > 0 && leg.points.length > 0) {
                        segmentPoints = segmentPoints.concat(leg.points.slice(1));
                        if (leg.durations) segmentDurations = segmentDurations.concat(leg.durations);
                    } else {
                        segmentPoints = segmentPoints.concat(leg.points);
                        if (leg.durations) segmentDurations = segmentDurations.concat(leg.durations);
                    }
                }
            } else {
                segmentPoints = [[waypoints[0].lat, waypoints[0].lng]];
            }

            const finalPos = { lat: segmentPoints[segmentPoints.length - 1][0], lng: segmentPoints[segmentPoints.length - 1][1] };
            groups.forEach(gid => lastPosGroup[gid] = finalPos);

            dayEntry.segments.push({
                group: groups.length === allGroups.length ? null : groups,
                points: segmentPoints,
                durations: segmentDurations.length > 0 ? segmentDurations : null,
                waypoints: waypoints // Keep for sampling later
            });
        }
        routeData.push(dayEntry);
    }

    // 2. TELEMETRY COMPUTATION
    console.log("Computing telemetry paths...");
    const groupPaths = {};
    days.forEach(day => {
        const dayRoute = routeData.find(r => r.day === day.day);
        if (!dayRoute) return;
        groupPaths[day.day] = {};

        allGroups.forEach(groupId => {
            let groupPoints = [];
            let groupDurations = [];
            dayRoute.segments.forEach(seg => {
                if (!seg.group || seg.group.includes(groupId)) {
                    const startIdx = groupPoints.length;
                    if (startIdx > 0) {
                        // Concatenate, skipping duplicate point
                        groupPoints = groupPoints.concat(seg.points.slice(1));
                    } else {
                        groupPoints = groupPoints.concat(seg.points);
                    }
                    if (seg.durations) groupDurations = groupDurations.concat(seg.durations);
                }
            });
            if (groupPoints.length === 0) return;

            // Compute cumulative time/distance for interpolation
            const hasDurations = groupDurations.length === (groupPoints.length - 1);
            const cumMetrics = [0];
            for (let i = 1; i < groupPoints.length; i++) {
                const step = hasDurations ? groupDurations[i-1] : getDistance(groupPoints[i - 1], groupPoints[i]);
                cumMetrics.push(cumMetrics[cumMetrics.length - 1] + step);
            }

            const anchors = [];
            let lastKnownLoc = null;
            let currentSearchIdx = 0;
            day.events.forEach(e => {
                const currentLoc = (e.lat !== null && e.lng !== null) ? { lat: e.lat, lng: e.lng } : lastKnownLoc;
                if (currentLoc && (!e.group || e.group.includes(groupId))) {
                    const idx = findClosestIndex(groupPoints, currentLoc.lat, currentLoc.lng, currentSearchIdx);
                    const time = new Date(e.dateStr);
                    anchors.push({ time, idx, type: e.type, label: e.label, dwell: e.dwell, tz: e.tz });
                    lastKnownLoc = currentLoc;
                    currentSearchIdx = idx;
                }
            });
            if (anchors.length === 0) return;
            anchors.sort((a, b) => a.time - b.time);

            const pathWithTimes = [];

            for (let i = 0; i < anchors.length; i++) {
                const a1 = anchors[i];
                const dwellEnd = new Date(a1.time.getTime() + a1.dwell * 3600000);
                pathWithTimes.push({ time: a1.time, pos: groupPoints[a1.idx], type: a1.type, label: a1.label, tz: a1.tz });
                if (a1.dwell > 0) {
                    const isLast = (i === anchors.length - 1);
                    const nextAnchor = anchors.slice(i + 1).find(a => a.time > dwellEnd);
                    const nextIsElsewhere = nextAnchor && nextAnchor.idx > a1.idx;
                    pathWithTimes.push({ 
                        time: dwellEnd, 
                        pos: groupPoints[a1.idx], 
                        type: isLast || !nextIsElsewhere ? 'stationary' : 'travel',
                        label: isLast || !nextIsElsewhere ? a1.label : 'Moving',
                        tz: a1.tz 
                    });
                }
                if (i < anchors.length - 1) {
                    const a2 = anchors[i + 1];
                    if (a2.time > dwellEnd && a2.idx > a1.idx) {
                        const subTotal = cumMetrics[a2.idx] - cumMetrics[a1.idx];
                        const travelDuration = a2.time.getTime() - dwellEnd.getTime();
                        for (let pIdx = a1.idx + 1; pIdx < a2.idx; pIdx++) {
                            const pMetric = cumMetrics[pIdx] - cumMetrics[a1.idx];
                            const pTime = new Date(dwellEnd.getTime() + travelDuration * (pMetric / subTotal));
                            pathWithTimes.push({ time: pTime, pos: groupPoints[pIdx], type: 'travel', label: 'Moving', tz: a1.tz });
                        }
                    }
                }
            }

            groupPaths[day.day][groupId] = pathWithTimes;
        });
    });

    console.log("Sampling telemetry ticks...");
    const telemetryGrouped = [];
    const lastGroupStates = {};
    allGroups.forEach(g => lastGroupStates[g] = null);

    days.forEach(day => {
        const dayTz = day.tz;
        let currentTick = new Date(`${day.date}T06:00:00${dayTz}`);
        const endTick = new Date(`${day.date}T22:00:00${dayTz}`);

        while (currentTick <= endTick) {
            const tickStates = {};
            allGroups.forEach(gid => {
                const path = groupPaths[day.day] ? groupPaths[day.day][gid] : null;
                if (!path) return;
                const p1 = [...path].reverse().find(p => p.time <= currentTick);
                const p2 = path.find(p => p.time > currentTick);
                if (p1 && p2) {
                    const ratio = (currentTick - p1.time) / (p2.time - p1.time);
                    const lat = Number((p1.pos[0] + (p2.pos[0] - p1.pos[0]) * ratio).toFixed(6));
                    const lng = Number((p1.pos[1] + (p2.pos[1] - p1.pos[1]) * ratio).toFixed(6));
                    tickStates[gid] = { lat, lng, type: p1.type, label: p1.label, tz: p1.tz };
                } else if (p1) {
                    tickStates[gid] = { lat: Number(p1.pos[0].toFixed(6)), lng: Number(p1.pos[1].toFixed(6)), type: p1.type, label: p1.label, tz: p1.tz };
                }
            });

            const groups = {};
            Object.entries(tickStates).forEach(([gid, state]) => {
                const key = `${state.lat},${state.lng},${state.type},${state.label}`;
                if (!groups[key]) groups[key] = { state, gids: [] };
                groups[key].gids.push(gid);
            });

            Object.values(groups).forEach(group => {
                const { state, gids } = group;
                const latChg = gids.some(gid => !lastGroupStates[gid] || lastGroupStates[gid].lat !== state.lat);
                const lngChg = gids.some(gid => !lastGroupStates[gid] || lastGroupStates[gid].lng !== state.lng);
                const typeChg = gids.some(gid => !lastGroupStates[gid] || lastGroupStates[gid].type !== state.type);
                const labelChg = gids.some(gid => !lastGroupStates[gid] || lastGroupStates[gid].label !== state.label);

                if (latChg || lngChg || typeChg || labelChg) {
                    const tOffset = state.tz;
                    const offsetParts = tOffset.match(/([\+\-])(\d{2}):(\d{2})/);
                    const sign = offsetParts[1] === '+' ? 1 : -1;
                    const offMs = sign * (parseInt(offsetParts[2]) * 3600000 + parseInt(offsetParts[3]) * 60000);
                    const localTick = new Date(currentTick.getTime() + offMs);
                    const tIso = localTick.toISOString().split('.')[0] + tOffset;
                    
                    const outputGroups = gids.length === allGroups.length ? [] : gids.map(id => isNaN(parseInt(id)) ? id : parseInt(id));
                    telemetryGrouped.push([
                        day.day,
                        tIso,
                        outputGroups,
                        latChg ? state.lat : null,
                        lngChg ? state.lng : null,
                        typeChg ? state.type : null,
                        labelChg ? state.label : null
                    ]);
                    gids.forEach(gid => lastGroupStates[gid] = state);
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
            const segGroups = seg.group || [];
            routeYaml += `      - group: [${segGroups.map(g => isNaN(parseInt(g)) ? `'${g}'` : g).join(', ')}]\n`;
            
            let pointsToSave = seg.points;
            if (pointsToSave.length > 500) {
                const sampleRate = Math.max(1, Math.floor(pointsToSave.length / 500));
                const protectedPoints = new Set((seg.waypoints || []).map(p => `${p.lat.toFixed(7)},${p.lng.toFixed(7)}`));
                pointsToSave = pointsToSave.filter((p, idx) => {
                    const isWaypoint = protectedPoints.has(`${p[0].toFixed(7)},${p[1].toFixed(7)}`);
                    return isWaypoint || idx % sampleRate === 0 || idx === pointsToSave.length - 1;
                });
            }

            const flat = [].concat(...pointsToSave);
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
