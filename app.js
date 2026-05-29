// 1. Map Initialization
const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2,
    maxZoom: 2,
    initialZoom: -1
});
const bounds = [[0, 0], [1000, 1000]];
map.fitBounds(bounds);
L.imageOverlay('images/astraeos-map.jpg', bounds).addTo(map);

// CREATION OF THE COORDINATES PANEL (TOP RIGHT)
const coordsPanel = document.createElement('div');
coordsPanel.className = 'map-coordinates-panel';
coordsPanel.innerHTML = 'Coordinates: <br>Lat: <b>-</b> | Lon: <b>-</b>';
document.getElementById('map').appendChild(coordsPanel);

// =========================================================================
// WHEELS CONFIGURATION LISTS
// =========================================================================
const mainRegionsList = [
    "Pyranthos North East", "Pyranthos North West", "Pyranthos West",
    "Korinthos South East", "Korinthos South West", "Korinthos West", "Korinthos North West", "Korinthos East",
    "Phokintos South", "Phokintos East", "Phokintos North", "Phokintos South West",
    "Therokis North", "Therokis East", "Therokis West",
    "Lemnokis South", "Lemnokis South East", "Lemnokis East", "Pyranthos North"
];
const subDirectionsList = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

// =========================================================================
// WAYPOINTS DATABASE
// =========================================================================
const teleportWaypoints = [
    // --- 1. Pyranthos North East ---
    { id: 1, mainRegion: "Pyranthos North East", subDirection: "N", name: "Pyranthos North East - [N] Terminal", coordinates: [39.5, 48.0] },
    { id: 2, mainRegion: "Pyranthos North East", subDirection: "NE", name: "Pyranthos North East - [NE] Terminal", coordinates: [85.0, 58.0] },
    { id: 3, mainRegion: "Pyranthos North East", subDirection: "E", name: "Pyranthos North East - [E] Terminal", coordinates: [84.6, 58.6] },
    { id: 4, mainRegion: "Pyranthos North East", subDirection: "SE", name: "Pyranthos North East - [SE] Terminal", coordinates: [84.2, 59.2] },
    { id: 5, mainRegion: "Pyranthos North East", subDirection: "S", name: "Pyranthos North East - [S] Terminal", coordinates: [83.8, 59.8] },
    { id: 6, mainRegion: "Pyranthos North East", subDirection: "SW", name: "Pyranthos North East - [SW] Terminal", coordinates: [83.4, 60.4] },
    { id: 7, mainRegion: "Pyranthos North East", subDirection: "W", name: "Pyranthos North East - [W] Terminal", coordinates: [83.0, 61.0] },
    { id: 8, mainRegion: "Pyranthos North East", subDirection: "NW", name: "Pyranthos North East - [NW] Terminal", coordinates: [82.6, 61.6] },

    // --- 2. Pyranthos North West ---
    { id: 9, mainRegion: "Pyranthos North West", subDirection: "N", name: "Pyranthos North West - [N] Terminal", coordinates: [85.0, 45.0] },
    { id: 10, mainRegion: "Pyranthos North West", subDirection: "NE", name: "Pyranthos North West - [NE] Terminal", coordinates: [84.6, 45.6] },
    { id: 11, mainRegion: "Pyranthos North West", subDirection: "E", name: "Pyranthos North West - [E] Terminal", coordinates: [84.2, 46.2] },
    { id: 12, mainRegion: "Pyranthos North West", subDirection: "SE", name: "Pyranthos North West - [SE] Terminal", coordinates: [83.8, 46.8] },
    { id: 13, mainRegion: "Pyranthos North West", subDirection: "S", name: "Pyranthos North West - [S] Terminal", coordinates: [83.4, 47.4] },
    { id: 14, mainRegion: "Pyranthos North West", subDirection: "SW", name: "Pyranthos North West - [SW] Terminal", coordinates: [83.0, 48.0] },
    { id: 15, mainRegion: "Pyranthos North West", subDirection: "W", name: "Pyranthos North West - [W] Terminal", coordinates: [82.6, 48.6] },
    { id: 16, mainRegion: "Pyranthos North West", subDirection: "NW", name: "Pyranthos North West - [NW] Terminal", coordinates: [82.2, 49.2] },

    // --- 3. Pyranthos West ---
    { id: 17, mainRegion: "Pyranthos West", subDirection: "N", name: "Pyranthos West - [N] Terminal", coordinates: [70.0, 35.0] },
    { id: 18, mainRegion: "Pyranthos West", subDirection: "NE", name: "Pyranthos West - [NE] Terminal", coordinates: [69.6, 35.6] },
    { id: 19, mainRegion: "Pyranthos West", subDirection: "E", name: "Pyranthos West - [E] Terminal", coordinates: [69.2, 36.2] },
    { id: 20, mainRegion: "Pyranthos West", subDirection: "SE", name: "Pyranthos West - [SE] Terminal", coordinates: [68.8, 36.8] },
    { id: 21, mainRegion: "Pyranthos West", subDirection: "S", name: "Pyranthos West - [S] Terminal", coordinates: [68.4, 37.4] },
    { id: 22, mainRegion: "Pyranthos West", subDirection: "SW", name: "Pyranthos West - [SW] Terminal", coordinates: [68.0, 38.0] },
    { id: 23, mainRegion: "Pyranthos West", subDirection: "W", name: "Pyranthos West - [W] Terminal", coordinates: [67.6, 38.6] },
    { id: 24, mainRegion: "Pyranthos West", subDirection: "NW", name: "Pyranthos West - [NW] Terminal", coordinates: [67.2, 39.2] },

    // --- 4. Korinthos South East ---
    { id: 25, mainRegion: "Korinthos South East", subDirection: "N", name: "Korinthos South East - [N] Terminal", coordinates: [25.0, 65.0] },
    { id: 26, mainRegion: "Korinthos South East", subDirection: "NE", name: "Korinthos South East - [NE] Terminal", coordinates: [24.6, 65.6] },
    { id: 27, mainRegion: "Korinthos South East", subDirection: "E", name: "Korinthos South East - [E] Terminal", coordinates: [24.2, 66.2] },
    { id: 28, mainRegion: "Korinthos South East", subDirection: "SE", name: "Korinthos South East - [SE] Terminal", coordinates: [23.8, 66.8] },
    { id: 29, mainRegion: "Korinthos South East", subDirection: "S", name: "Korinthos South East - [S] Terminal", coordinates: [23.4, 67.4] },
    { id: 30, mainRegion: "Korinthos South East", subDirection: "SW", name: "Korinthos South East - [SW] Terminal", coordinates: [23.0, 68.0] },
    { id: 31, mainRegion: "Korinthos South East", subDirection: "W", name: "Korinthos South East - [W] Terminal", coordinates: [22.6, 68.6] },
    { id: 32, mainRegion: "Korinthos South East", subDirection: "NW", name: "Korinthos South East - [NW] Terminal", coordinates: [22.2, 69.2] },

    // --- 5. Korinthos South West ---
    { id: 33, mainRegion: "Korinthos South West", subDirection: "N", name: "Korinthos South West - [N] Terminal", coordinates: [25.0, 35.0] },
    { id: 34, mainRegion: "Korinthos South West", subDirection: "NE", name: "Korinthos South West - [NE] Terminal", coordinates: [24.6, 35.6] },
    { id: 35, mainRegion: "Korinthos South West", subDirection: "E", name: "Korinthos South West - [E] Terminal", coordinates: [24.2, 36.2] },
    { id: 36, mainRegion: "Korinthos South West", subDirection: "SE", name: "Korinthos South West - [SE] Terminal", coordinates: [23.8, 36.8] },
    { id: 37, mainRegion: "Korinthos South West", subDirection: "S", name: "Korinthos South West - [S] Terminal", coordinates: [23.4, 37.4] },
    { id: 38, mainRegion: "Korinthos South West", subDirection: "SW", name: "Korinthos South West - [SW] Terminal", coordinates: [23.0, 38.0] },
    { id: 39, mainRegion: "Korinthos South West", subDirection: "W", name: "Korinthos South West - [W] Terminal", coordinates: [22.6, 38.6] },
    { id: 40, mainRegion: "Korinthos South West", subDirection: "NW", name: "Korinthos South West - [NW] Terminal", coordinates: [22.2, 39.2] },

    // --- 6. Korinthos West ---
    { id: 41, mainRegion: "Korinthos West", subDirection: "N", name: "Korinthos West - [N] Terminal", coordinates: [49.0, 20.0] },
    { id: 42, mainRegion: "Korinthos West", subDirection: "NE", name: "Korinthos West - [NE] Terminal", coordinates: [48.6, 20.4] },
    { id: 43, mainRegion: "Korinthos West", subDirection: "E", name: "Korinthos West - [E] Terminal", coordinates: [48.2, 20.8] },
    { id: 44, mainRegion: "Korinthos West", subDirection: "SE", name: "Korinthos West - [SE] Terminal", coordinates: [47.8, 21.2] },
    { id: 45, mainRegion: "Korinthos West", subDirection: "S", name: "Korinthos West Base Outpost", coordinates: [48.0, 21.0] },
    { id: 46, mainRegion: "Korinthos West", subDirection: "SW", name: "Korinthos West - [SW] Terminal", coordinates: [47.4, 21.6] },
    { id: 47, mainRegion: "Korinthos West", subDirection: "W", name: "Korinthos West - [W] Terminal", coordinates: [47.0, 22.0] },
    { id: 48, mainRegion: "Korinthos West", subDirection: "NW", name: "Korinthos West - [NW] Terminal", coordinates: [46.6, 22.4] },

    // --- 7. Korinthos North West ---
    { id: 49, mainRegion: "Korinthos North West", subDirection: "N", name: "Korinthos North West - [N] Terminal", coordinates: [55.0, 35.0] },
    { id: 50, mainRegion: "Korinthos North West", subDirection: "NE", name: "Korinthos North West - [NE] Terminal", coordinates: [54.6, 35.6] },
    { id: 51, mainRegion: "Korinthos North West", subDirection: "E", name: "Korinthos North West - [E] Terminal", coordinates: [54.2, 36.2] },
    { id: 52, mainRegion: "Korinthos North West", subDirection: "SE", name: "Korinthos North West - [SE] Terminal", coordinates: [53.8, 36.8] },
    { id: 53, mainRegion: "Korinthos North West", subDirection: "S", name: "Korinthos North West - [S] Terminal", coordinates: [53.4, 37.4] },
    { id: 54, mainRegion: "Korinthos North West", subDirection: "SW", name: "Korinthos North West - [SW] Terminal", coordinates: [53.0, 38.0] },
    { id: 55, mainRegion: "Korinthos North West", subDirection: "W", name: "Korinthos North West - [W] Terminal", coordinates: [52.6, 38.6] },
    { id: 56, mainRegion: "Korinthos North West", subDirection: "NW", name: "Korinthos North West - [NW] Terminal", coordinates: [52.2, 39.2] },

    // --- 8. Korinthos East ---
    { id: 57, mainRegion: "Korinthos East", subDirection: "N", name: "Korinthos East - [N] Terminal", coordinates: [45.0, 65.0] },
    { id: 58, mainRegion: "Korinthos East", subDirection: "NE", name: "Korinthos East - [NE] Terminal", coordinates: [44.6, 65.6] },
    { id: 59, mainRegion: "Korinthos East", subDirection: "E", name: "Korinthos East - [E] Terminal", coordinates: [44.2, 66.2] },
    { id: 60, mainRegion: "Korinthos East", subDirection: "SE", name: "Korinthos East - [SE] Terminal", coordinates: [43.8, 66.8] },
    { id: 61, mainRegion: "Korinthos East", subDirection: "S", name: "Korinthos East - [S] Terminal", coordinates: [43.4, 67.4] },
    { id: 62, mainRegion: "Korinthos East", subDirection: "SW", name: "Korinthos East - [SW] Terminal", coordinates: [43.0, 68.0] },
    { id: 63, mainRegion: "Korinthos East", subDirection: "W", name: "Korinthos East - [W] Terminal", coordinates: [42.6, 68.6] },
    { id: 64, mainRegion: "Korinthos East", subDirection: "NW", name: "Korinthos East - [NW] Terminal", coordinates: [42.2, 69.2] },

    // --- 9. Phokintos South ---
    { id: 65, mainRegion: "Phokintos South", subDirection: "N", name: "Phokintos South - [N] Terminal", coordinates: [35.0, 50.0] },
    { id: 66, mainRegion: "Phokintos South", subDirection: "NE", name: "Phokintos South - [NE] Terminal", coordinates: [34.6, 50.6] },
    { id: 67, mainRegion: "Phokintos South", subDirection: "E", name: "Phokintos South - [E] Terminal", coordinates: [34.2, 51.2] },
    { id: 68, mainRegion: "Phokintos South", subDirection: "SE", name: "Phokintos South - [SE] Terminal", coordinates: [33.8, 51.8] },
    { id: 69, mainRegion: "Phokintos South", subDirection: "S", name: "Phokintos South - [S] Terminal", coordinates: [33.4, 52.4] },
    { id: 70, mainRegion: "Phokintos South", subDirection: "SW", name: "Phokintos South - [SW] Terminal", coordinates: [33.0, 53.0] },
    { id: 71, mainRegion: "Phokintos South", subDirection: "W", name: "Phokintos South - [W] Terminal", coordinates: [32.6, 53.6] },
    { id: 72, mainRegion: "Phokintos South", subDirection: "NW", name: "Phokintos South - [NW] Terminal", coordinates: [32.2, 54.2] },

    // --- 10. Phokintos East ---
    { id: 73, mainRegion: "Phokintos East", subDirection: "N", name: "Phokintos East - [N] Terminal", coordinates: [60.0, 60.0] },
    { id: 74, mainRegion: "Phokintos East", subDirection: "NE", name: "Phokintos East - [NE] Terminal", coordinates: [59.6, 60.6] },
    { id: 75, mainRegion: "Phokintos East", subDirection: "E", name: "Phokintos East - [E] Terminal", coordinates: [59.2, 61.2] },
    { id: 76, mainRegion: "Phokintos East", subDirection: "SE", name: "Phokintos East - [SE] Terminal", coordinates: [58.8, 61.8] },
    { id: 77, mainRegion: "Phokintos East", subDirection: "S", name: "Phokintos East - [S] Terminal", coordinates: [58.4, 62.4] },
    { id: 78, mainRegion: "Phokintos East", subDirection: "SW", name: "Phokintos East - [SW] Terminal", coordinates: [58.0, 63.0] },
    { id: 79, mainRegion: "Phokintos East", subDirection: "W", name: "Phokintos East - [W] Terminal", coordinates: [57.6, 63.6] },
    { id: 80, mainRegion: "Phokintos East", subDirection: "NW", name: "Phokintos East - [NW] Terminal", coordinates: [57.2, 64.2] },

    // --- 11. Phokintos North ---
    { id: 81, mainRegion: "Phokintos North", subDirection: "N", name: "Phokintos North - [N] Terminal", coordinates: [65.0, 50.0] },
    { id: 82, mainRegion: "Phokintos North", subDirection: "NE", name: "Phokintos North - [NE] Terminal", coordinates: [64.6, 50.6] },
    { id: 83, mainRegion: "Phokintos North", subDirection: "E", name: "Phokintos North - [E] Terminal", coordinates: [64.2, 51.2] },
    { id: 84, mainRegion: "Phokintos North", subDirection: "SE", name: "Phokintos North - [SE] Terminal", coordinates: [63.8, 51.8] },
    { id: 85, mainRegion: "Phokintos North", subDirection: "S", name: "Phokintos North - [S] Terminal", coordinates: [63.4, 52.4] },
    { id: 86, mainRegion: "Phokintos North", subDirection: "SW", name: "Phokintos North - [SW] Terminal", coordinates: [63.0, 53.0] },
    { id: 87, mainRegion: "Phokintos North", subDirection: "W", name: "Phokintos North - [W] Terminal", coordinates: [62.6, 53.6] },
    { id: 88, mainRegion: "Phokintos North", subDirection: "NW", name: "Phokintos North - [NW] Terminal", coordinates: [62.2, 54.2] },

    // --- 12. Phokintos South West ---
    { id: 89, mainRegion: "Phokintos South West", subDirection: "N", name: "Phokintos South West - [N] Terminal", coordinates: [45.0, 40.0] },
    { id: 90, mainRegion: "Phokintos South West", subDirection: "NE", name: "Phokintos South West - [NE] Terminal", coordinates: [44.6, 40.6] },
    { id: 91, mainRegion: "Phokintos South West", subDirection: "E", name: "Phokintos South West - [E] Terminal", coordinates: [44.2, 41.2] },
    { id: 92, mainRegion: "Phokintos South West", subDirection: "SE", name: "Phokintos South West - [SE] Terminal", coordinates: [43.8, 41.8] },
    { id: 93, mainRegion: "Phokintos South West", subDirection: "S", name: "Phokintos South West - [S] Terminal", coordinates: [43.4, 42.4] },
    { id: 94, mainRegion: "Phokintos South West", subDirection: "SW", name: "Phokintos South West - [SW] Terminal", coordinates: [43.0, 43.0] },
    { id: 95, mainRegion: "Phokintos South West", subDirection: "W", name: "Phokintos South West - [W] Terminal", coordinates: [42.6, 43.6] },
    { id: 96, mainRegion: "Phokintos South West", subDirection: "NW", name: "Phokintos South West - [NW] Terminal", coordinates: [42.2, 44.2] },

    // --- 13. Therokis North ---
    { id: 97, mainRegion: "Therokis North", subDirection: "N", name: "Therokis North - [N] Terminal", coordinates: [75.0, 75.0] },
    { id: 98, mainRegion: "Therokis North", subDirection: "NE", name: "Therokis North - [NE] Terminal", coordinates: [74.6, 75.6] },
    { id: 100, mainRegion: "Therokis North", subDirection: "SE", name: "Therokis North - [SE] Terminal", coordinates: [73.8, 76.8] },
    { id: 101, mainRegion: "Therokis North", subDirection: "S", name: "Therokis North - [S] Terminal", coordinates: [73.4, 77.4] },
    { id: 102, mainRegion: "Therokis North", subDirection: "SW", name: "Therokis North - [SW] Terminal", coordinates: [73.0, 78.0] },
    { id: 103, mainRegion: "Therokis North", subDirection: "W", name: "Therokis North - [W] Terminal", coordinates: [72.6, 78.6] },
    { id: 104, mainRegion: "Therokis North", subDirection: "NW", name: "Therokis North - [NW] Terminal", coordinates: [72.2, 79.2] },

    // --- 14. Therokis East ---
    { id: 105, mainRegion: "Therokis East", subDirection: "N", name: "Therokis East - [N] Terminal", coordinates: [65.0, 85.0] },
    { id: 106, mainRegion: "Therokis East", subDirection: "NE", name: "Therokis East - [NE] Terminal", coordinates: [64.6, 85.6] },
    { id: 107, mainRegion: "Therokis East", subDirection: "E", name: "Therokis East - [E] Terminal", coordinates: [64.2, 86.2] },
    { id: 108, mainRegion: "Therokis East", subDirection: "SE", name: "Therokis East - [SE] Terminal", coordinates: [63.8, 86.8] },
    { id: 109, mainRegion: "Therokis East", subDirection: "S", name: "Therokis East - [S] Terminal", coordinates: [63.4, 87.4] },
    { id: 110, mainRegion: "Therokis East", subDirection: "SW", name: "Therokis East - [SW] Terminal", coordinates: [63.0, 88.0] },
    { id: 111, mainRegion: "Therokis East", subDirection: "W", name: "Therokis East - [W] Terminal", coordinates: [62.6, 88.6] },
    { id: 112, mainRegion: "Therokis East", subDirection: "NW", name: "Therokis East - [NW] Terminal", coordinates: [62.2, 89.2] },

    // --- 15. Therokis West ---
    { id: 113, mainRegion: "Therokis West", subDirection: "N", name: "Therokis West - [N] Terminal", coordinates: [65.0, 70.0] },
    { id: 114, mainRegion: "Therokis West", subDirection: "NE", name: "Therokis West - [NE] Terminal", coordinates: [64.6, 70.6] },
    { id: 115, mainRegion: "Therokis West", subDirection: "E", name: "Therokis West - [E] Terminal", coordinates: [64.2, 71.2] },
    { id: 116, mainRegion: "Therokis West", subDirection: "SE", name: "Therokis West - [SE] Terminal", coordinates: [63.8, 71.8] },
    { id: 117, mainRegion: "Therokis West", subDirection: "S", name: "Therokis West - [S] Terminal", coordinates: [63.4, 72.4] },
    { id: 118, mainRegion: "Therokis West", subDirection: "SW", name: "Therokis West - [SW] Terminal", coordinates: [63.0, 73.0] },
    { id: 119, mainRegion: "Therokis West", subDirection: "W", name: "Therokis West - [W] Terminal", coordinates: [62.6, 73.6] },
    { id: 120, mainRegion: "Therokis West", subDirection: "NW", name: "Therokis West - [NW] Terminal", coordinates: [62.2, 74.2] },

    // --- 16. Lemnokis South ---
    { id: 121, mainRegion: "Lemnokis South", subDirection: "N", name: "Lemnokis South - [N] Terminal", coordinates: [15.0, 50.0] },
    { id: 122, mainRegion: "Lemnokis South", subDirection: "NE", name: "Lemnokis South - [NE] Terminal", coordinates: [14.6, 50.6] },
    { id: 123, mainRegion: "Lemnokis South", subDirection: "E", name: "Lemnokis South - [E] Terminal", coordinates: [14.2, 51.2] },
    { id: 124, mainRegion: "Lemnokis South", subDirection: "SE", name: "Lemnokis South - [SE] Terminal", coordinates: [13.8, 51.8] },
    { id: 125, mainRegion: "Lemnokis South", subDirection: "S", name: "Lemnokis South - [S] Terminal", coordinates: [13.4, 52.4] },
    { id: 126, mainRegion: "Lemnokis South", subDirection: "SW", name: "Lemnokis South - [SW] Terminal", coordinates: [13.0, 53.0] },
    { id: 127, mainRegion: "Lemnokis South", subDirection: "W", name: "Lemnokis South - [W] Terminal", coordinates: [12.6, 53.6] },
    { id: 128, mainRegion: "Lemnokis South", subDirection: "NW", name: "Lemnokis South - [NW] Terminal", coordinates: [12.2, 54.2] },

    // --- 17. Lemnokis South East ---
    { id: 129, mainRegion: "Lemnokis South East", subDirection: "N", name: "Lemnokis South East - [N] Terminal", coordinates: [15.0, 60.0] },
    { id: 130, mainRegion: "Lemnokis South East", subDirection: "NE", name: "Lemnokis South East - [NE] Terminal", coordinates: [14.6, 60.6] },
    { id: 131, mainRegion: "Lemnokis South East", subDirection: "E", name: "Lemnokis South East - [E] Terminal", coordinates: [14.2, 61.2] },
    { id: 132, mainRegion: "Lemnokis South East", subDirection: "SE", name: "Lemnokis South East - [SE] Terminal", coordinates: [13.8, 61.8] },
    { id: 133, mainRegion: "Lemnokis South East", subDirection: "S", name: "Lemnokis South East - [S] Terminal", coordinates: [13.4, 62.4] },
    { id: 134, mainRegion: "Lemnokis South East", subDirection: "SW", name: "Lemnokis South East - [SW] Terminal", coordinates: [13.0, 63.0] },
    { id: 135, mainRegion: "Lemnokis South East", subDirection: "W", name: "Lemnokis South East - [W] Terminal", coordinates: [12.6, 63.6] },
    { id: 136, mainRegion: "Lemnokis South East", subDirection: "NW", name: "Lemnokis South East - [NW] Terminal", coordinates: [12.2, 64.2] },

    // --- 18. Lemnokis East ---
    { id: 137, mainRegion: "Lemnokis East", subDirection: "N", name: "Lemnokis East - [N] Terminal", coordinates: [25.0, 55.0] },
    { id: 138, mainRegion: "Lemnokis East", subDirection: "NE", name: "Lemnokis East - [NE] Terminal", coordinates: [24.6, 55.6] },
    { id: 139, mainRegion: "Lemnokis East", subDirection: "E", name: "Lemnokis East - [E] Terminal", coordinates: [24.2, 56.2] },
    { id: 140, mainRegion: "Lemnokis East", subDirection: "SE", name: "Lemnokis East - [SE] Terminal", coordinates: [23.8, 56.8] },
    { id: 141, mainRegion: "Lemnokis East", subDirection: "S", name: "Lemnokis East - [S] Terminal", coordinates: [23.4, 57.4] },
    { id: 142, mainRegion: "Lemnokis East", subDirection: "SW", name: "Lemnokis East - [SW] Terminal", coordinates: [23.0, 58.0] },
    { id: 143, mainRegion: "Lemnokis East", subDirection: "W", name: "Lemnokis East - [W] Terminal", coordinates: [22.6, 58.6] },
    { id: 144, mainRegion: "Lemnokis East", subDirection: "NW", name: "Lemnokis East - [NW] Terminal", coordinates: [22.2, 59.2] },

    // --- 19. Pyranthos North ---
    { id: 145, mainRegion: "Pyranthos North", subDirection: "N", name: "Pyranthos North - [N] Terminal", coordinates: [90.0, 50.0] },
    { id: 146, mainRegion: "Pyranthos North", subDirection: "NE", name: "Pyranthos North - [NE] Terminal", coordinates: [89.6, 50.6] },
    { id: 147, mainRegion: "Pyranthos North", subDirection: "E", name: "Pyranthos North - [E] Terminal", coordinates: [89.2, 51.2] },
    { id: 148, mainRegion: "Pyranthos North", subDirection: "SE", name: "Pyranthos North - [SE] Terminal", coordinates: [88.8, 51.8] },
    { id: 149, mainRegion: "Pyranthos North", subDirection: "S", name: "Pyranthos North - [S] Terminal", coordinates: [88.4, 52.4] },
    { id: 150, mainRegion: "Pyranthos North", subDirection: "SW", name: "Pyranthos North - [SW] Terminal", coordinates: [88.0, 53.0] },
    { id: 151, mainRegion: "Pyranthos North", subDirection: "W", name: "Pyranthos North - [W] Terminal", coordinates: [87.6, 53.6] },
    { id: 152, mainRegion: "Pyranthos North", subDirection: "NW", name: "Pyranthos North - [NW] Terminal", coordinates: [87.2, 54.2] }
];

// =========================================================================
// INTERNE ENGINE LOGIK
// =========================================================================
let selectedMainRegion = null;
let selectedSubDirection = null; 
let activeWaypointId = null;     
let markerElementsMap = {};

function getLeafletPixels(lat, lon) {
    let rawX = lon * 10;
    let rawY = (100 - lat) * 10;
    return [rawY, rawX];
}

function convertCoordinates(rawY, rawX) {
    let calculatedLon = rawX / 10;
    let calculatedLat = 100 - (rawY / 10);
    return {
        lat: calculatedLat.toFixed(1),
        lon: calculatedLon.toFixed(1)
    };
}

function updateCoordsDisplay(lat, lon, isStatic = false) {
    if (isStatic) {
        coordsPanel.innerHTML = `Selected:<br>Lat: <b>${parseFloat(lat).toFixed(1)}</b> | Lon: <b>${parseFloat(lon).toFixed(1)}</b>`;
        coordsPanel.style.borderLeftColor = '#ffbc00'; 
    } else {
        coordsPanel.innerHTML = `Coordinates:<br>Lat: <b>${parseFloat(lat).toFixed(1)}</b> | Lon: <b>${parseFloat(lon).toFixed(1)}</b>`;
        coordsPanel.style.borderLeftColor = '#00d2ff'; 
    }
}

function refreshCoordsToActiveState() {
    if (activeWaypointId) {
        const match = teleportWaypoints.find(p => p.id === activeWaypointId);
        if (match) {
            updateCoordsDisplay(match.coordinates[0], match.coordinates[1], true);
            return;
        }
    }
    coordsPanel.innerHTML = 'Coordinates: <br>Lat: <b>-</b> | Lon: <b>-</b>';
    coordsPanel.style.borderLeftColor = '#00d2ff';
}

// Trigonometric Vector Layout Engine
function buildWheel(tier, targetContainerId, optionsArray, onSliceClick, activeValue = null) {
    const wheelContainer = document.getElementById(targetContainerId);
    wheelContainer.innerHTML = ""; 

    const oldLabels = wheelContainer.parentElement.querySelector(`.labels-tier-${tier}`);
    if (oldLabels) oldLabels.remove();

    const wrapper = wheelContainer.parentElement;
    const labelsContainer = document.createElement('div');
    labelsContainer.className = `wheel-labels-container labels-tier-${tier}`;
    wrapper.appendChild(labelsContainer);

    const size = 100; 
    const center = size / 2;
    
    const radius = tier === 1 ? 78 : 48;
    const innerRadius = tier === 1 ? 32 : 20; 
    
    const totalSlices = optionsArray.length;
    const anglePerSlice = (2 * Math.PI) / totalSlices;
    const baseCorrectionAngle = -Math.PI / 2 - (anglePerSlice / 2);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
    svg.setAttribute("class", "wheel-svg");

    optionsArray.forEach((optionText, i) => {
        const startAngle = i * anglePerSlice + baseCorrectionAngle;
        const endAngle = (i + 1) * anglePerSlice + baseCorrectionAngle;

        const x1 = center + radius * Math.cos(startAngle);
        const y1 = center + radius * Math.sin(startAngle);
        const x2 = center + radius * Math.cos(endAngle);
        const y2 = center + radius * Math.sin(endAngle);
        const x3 = center + innerRadius * Math.cos(endAngle);
        const y3 = center + innerRadius * Math.sin(endAngle);
        const x4 = center + innerRadius * Math.cos(startAngle);
        const y4 = center + innerRadius * Math.sin(startAngle);

        const d = `M ${x4} ${y4} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        path.setAttribute("class", "wheel-slice-path");
        if(activeValue === optionText) {
            path.classList.add("active-slice");
        }
        
        path.onclick = (e) => {
            e.stopPropagation();
            onSliceClick(optionText);
        };
        svg.appendChild(path);

        const midAngle = startAngle + anglePerSlice / 2;
        
        // REPARIERT: Zurück zum Original-PC-Koordinatensystem, das immer funktionierte.
        let labelRadius = tier === 1 ? 250 : 110;
        
        // Nur auf Mobilgeräten leicht anpassen
        if (window.innerWidth <= 768) {
            labelRadius = tier === 1 ? 115 : 75;
        }
        
        const posX = (tier === 1 ? 285 : 160) + labelRadius * Math.cos(midAngle);
        const posY = (tier === 1 ? 285 : 160) + labelRadius * Math.sin(midAngle);

        const htmlLabel = document.createElement('div');
        htmlLabel.className = "html-wheel-label";
        if (tier === 2) htmlLabel.className += " tier2-label";
        
        htmlLabel.innerHTML = optionText.replace(" ", "<br>");
        htmlLabel.style.left = `${posX}px`;
        htmlLabel.style.top = `${posY}px`;

        if(activeValue === optionText) {
            htmlLabel.classList.add("active-text");
        }

        labelsContainer.appendChild(htmlLabel);
    });

    const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    centerCircle.setAttribute("cx", center);
    centerCircle.setAttribute("cy", center);
    centerCircle.setAttribute("r", innerRadius);
    centerCircle.setAttribute("class", "wheel-center-hole");
    svg.appendChild(centerCircle);

    wheelContainer.appendChild(svg);
}

// State Engine
function initUiState() {
    buildWheel(1, "main-wheel-container", mainRegionsList, (selectedRegion) => {
        selectedMainRegion = selectedRegion;
        selectedSubDirection = null; 
        document.getElementById('current-main').innerText = selectedRegion;
        document.getElementById('arrow-separator').style.display = "inline";
        document.getElementById('current-sub').innerText = "Select Direction";
        
        clearAllMarkerHighlights();
        activeWaypointId = null;
        refreshCoordsToActiveState(); 

        document.getElementById('col-sub-wheel').classList.remove('disabled-wheel');
        buildWheel(2, "sub-wheel-container", subDirectionsList, (selectedDir) => {
            selectedSubDirection = selectedDir;
            triggerTeleport(selectedMainRegion, selectedDir);
        }, selectedSubDirection);
    }, selectedMainRegion);

    if (!selectedMainRegion) {
        document.getElementById('col-sub-wheel').classList.add('disabled-wheel');
        buildWheel(2, "sub-wheel-container", subDirectionsList, () => {});
    } else {
        document.getElementById('col-sub-wheel').classList.remove('disabled-wheel');
        buildWheel(2, "sub-wheel-container", subDirectionsList, (selectedDir) => {
            selectedSubDirection = selectedDir;
            triggerTeleport(selectedMainRegion, selectedDir);
        }, selectedSubDirection);
    }
}

function resetToDefaultMode() {
    selectedMainRegion = null;
    selectedSubDirection = null;
    activeWaypointId = null;
    
    document.getElementById('current-main').innerText = "Select Region";
    document.getElementById('arrow-separator').style.display = "none";
    document.getElementById('current-sub').innerText = "";
    
    clearAllMarkerHighlights();
    map.closePopup();
    refreshCoordsToActiveState(); 
    initUiState();
}

function triggerTeleport(mainReg, subDir) {
    document.getElementById('current-sub').innerText = subDir;
    clearAllMarkerHighlights();

    const match = teleportWaypoints.find(p => p.mainRegion === mainReg && p.subDirection === subDir);
    
    if (match) {
        activeWaypointId = match.id;
        let pixelCoords = getLeafletPixels(match.coordinates[0], match.coordinates[1]);
        map.setView(pixelCoords, 1);
        
        if(markerElementsMap[match.id]) {
            markerElementsMap[match.id]._icon.classList.add('highlighted-marker');
        }
        updateCoordsDisplay(match.coordinates[0], match.coordinates[1], true);
        initUiState();

        L.popup()
            .setLatLng(pixelCoords)
            .setContent(`<b>${match.name}</b><br>Path:<br>${mainReg} &rarr; ${subDir}`)
            .openOn(map);
    } else {
        activeWaypointId = null;
        refreshCoordsToActiveState();
        alert(`No coordinates found for:\n${mainReg} -> ${subDir}`);
    }
}

const markerGroup = L.layerGroup().addTo(map);

function loadMapMarkers() {
    markerGroup.clearLayers();
    markerElementsMap = {};

    teleportWaypoints.forEach(point => {
        const tinyDotIcon = L.divIcon({
            className: 'small-tp-marker',
            iconSize: [11, 11],     
            iconAnchor: [5.5, 5.5], 
            popupAnchor: [0, -5]    
        });

        let pixelCoords = getLeafletPixels(point.coordinates[0], point.coordinates[1]);
        const marker = L.marker(pixelCoords, { icon: tinyDotIcon }).addTo(markerGroup);
        markerElementsMap[point.id] = marker;

        marker.on('click', (e) => {
            L.DomEvent.stopPropagation(e);
            
            if (activeWaypointId === point.id) {
                resetToDefaultMode();
                return;
            }

            clearAllMarkerHighlights();
            marker._icon.classList.add('highlighted-marker');
            activeWaypointId = point.id;

            selectedMainRegion = point.mainRegion;
            selectedSubDirection = point.subDirection;
            
            document.getElementById('current-main').innerText = point.mainRegion;
            document.getElementById('arrow-separator').style.display = "inline";
            document.getElementById('current-sub').innerText = point.subDirection;

            updateCoordsDisplay(point.coordinates[0], point.coordinates[1], true);
            initUiState();
            marker.bindPopup(`<b>${point.name}</b>`).openPopup();
        });
    });
}

function clearAllMarkerHighlights() {
    Object.values(markerElementsMap).forEach(m => {
        if(m._icon && m._icon.classList) m._icon.classList.remove('highlighted-marker');
    });
}

map.on('mousemove', function(e) {
    let converted = convertCoordinates(e.latlng.lat, e.latlng.lng);
    updateCoordsDisplay(converted.lat, converted.lon, false);
});

map.on('mouseout', function() {
    refreshCoordsToActiveState();
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        resetToDefaultMode();
    }
});

window.addEventListener('resize', () => {
    initUiState();
});

initUiState();
loadMapMarkers();
