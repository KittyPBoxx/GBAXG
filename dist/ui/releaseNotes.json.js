var RELEASE_NOTES = {
    "0.9.24-ALPHA" : [
        "Fix confilict between new bios and instant text",
        "Fix island cave outside warp broken",
        "Remove accidently included warp"
    ],
    "0.9.23-ALPHA" : [
        "Fix various progression issues in Emerald randomisation"
    ],
    "0.9.22-ALPHA" : [
        "UI style updates for smaller screens",
        "Norman Battle available as soon as catch tutorial ends",
        "Getting Blue Flute in Emerald now gives Poke Flute in Fire Red",
        "BIOS issue fixed including sprite animations in emerald",
        "Waterfall always available and cave of origin always unlocked",
        "Fix trickmaster crashing when talking after final item",
        "Fix progression flags for gyms that need hms to complete",
        "Devon Corp F1 now always unlocked",
        "Add Crystal exclusive items to bag hacks menu",
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