var RELEASE_NOTES = {
    "0.9.22-ALPHA" : [
        "UI style updates for smaller screens",
        "Norman Battle available as soon as catch tutorial ends",
        "BIOS issue fixed including sprite animations in emerald",
        "Waterfall always available and cave of origin always unlocked",
        "Fix trickmaster crashing when talking after final item",
        "Fix progression flags for gyms that need hms to complete",
        "Devon Corp F1 now always unlocked",
        "Historic Versions and release note managment"
    ],
    "0.9.21-ALPHA" : [
       "Fix default acro bike sprites in Crytal",
       "Add Keybinds for volume"
    ],                  
};

var VERSION_COMPARITOR = function(version1, version2) {
    version1 = version1.split("-")[0];
    version2 = version2.split("-")[0];
    return version1.localeCompare(version2, undefined, { numeric: true, sensitivity: 'base' })
}