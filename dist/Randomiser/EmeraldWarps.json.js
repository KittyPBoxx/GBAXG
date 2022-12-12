var EMERALD_WARPS = 
{
/* PETALBURG CITY - EXT */
    "E,0,0,0" : {
        "name": "PETALBURG CITY - OUTSIDE - Left - A,13",
        "level": "1", 
        "to": "E,8,2,0",
        "connections" : {
            "E,0,0,3": true,
        }
    },
    "E,0,0,1" : {
        "name": "PETALBURG CITY - OUTSIDE - Wally House - 7,5",
        "level": "1", 
        "to": "E,8,0,0",
        "connections" : {
            "E,0,0,3": true,
            "E,0,19,0": true,
            "E,0,19,4": true,
        }
    },
    "E,0,0,2" : {
        // GYM
        "name": "PETALBURG CITY - OUTSIDE - GYM - F,8",
        "level": "1", 
        "to": "E,8,1,0",
        "connections" : {
            "E,0,0,3": true,
        }
    },
    "E,0,0,3" : {
        // PK
        "name": "PETALBURG CITY - OUTSIDE - PkCenter - 14,10",
        "level": "1", 
        "to": "E,8,4,0",
        "connections" : {
            "E,0,0,0": true,
            "E,0,0,1": "HOENN_CATCH_TUTORIAL",
            "E,0,0,2": true,
            "E,0,0,4": true,
            "E,0,0,5": true,
            "E,0,10,2": true
        }
    },
    "E,0,0,4" : {
        "name": "PETALBURG CITY - OUTSIDE - Right - 14,18",
        "level": "1", 
        "to": "E,8,3,0",
        "connections" : {
            "E,0,0,3": true
        }
    },
    "E,0,0,5" : {
        // MART
        "name": "PETALBURG CITY - OUTSIDE - Mart - 19,C",
        "level": "1", 
        "to": "E,8,6,0",
        "connections" : {
            "E,0,0,3": true,
        }
    },
/* PETALBURG CITY - INT */
    "E,8,0,0" : {
        "name": "PETALBURG CITY - INSIDE - Wally House - 3,7",
        "level": "1", 
        "to": "E,0,0,1",
        "grouped": ["E,8,0,1"],
        "groupMain" : true
    },
    "E,8,0,1" : {
        "name": "PETALBURG CITY - INSIDE - Wally House - 4,7",
        "level": "1", 
        "to": "E,0,0,1",
        "grouped": ["E,8,0,0"]
    },
    "E,8,1,0": {
        // GYM
        "name": "PETALBURG CITY - INSIDE - GYM - 4,6F",
        "level": "1", 
        "to": "E,0,0,2",
        "grouped": ["E,8,1,1"],
        "groupMain" : true
    },
    "E,8,1,1": {
        // GYM
        "name": "PETALBURG CITY - INSIDE - GYM - 5,6F",
        "level": "1", 
        "to": "E,0,0,2",
        "grouped": ["E,8,1,0"]
    },
    "E,8,2,0" : {
        "name": "PETALBURG CITY - INSIDE - Left - 3,8",
        "to": "E,0,0,0",
        "grouped": ["E,8,2,1"],
        "groupMain" : true
    },
    "E,8,2,1" : {
        "name": "PETALBURG CITY - INSIDE - Left - 4,8",
        "to": "E,0,0,1",
        "grouped": ["E,8,2,1"]
    },
    "E,8,3,0" : {
        "name": "PETALBURG CITY - INSIDE - Right - 3,7",
        "to": "E,0,0,4",
        "grouped": ["E,8,3,1"],
        "groupMain" : true
    },
    "E,8,3,1" : {
        "name": "PETALBURG CITY - INSIDE - Right - 4,7",
        "to": "E,0,0,4",
        "grouped": ["E,8,3,0"]
    },
    "E,8,4,0" : {
        // PK
        "name": "PETALBURG CITY - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to": "E,0,0,3",
        "grouped": ["E,8,4,1"],
        "groupMain" : true,
        "connections" : {
            "E,8,4,2": true
        }
    },
    "E,8,4,1" : {
        // PK
        "name": "PETALBURG CITY - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to": "E,0,0,3",
        "grouped": ["E,8,4,0"]
    },
    "E,8,4,2" : {
        // PK
        "name": "PETALBURG CITY - INSIDE - PkCenter (Stairs) - 6,8",
        "level": "1", 
        "to": "E,8,5,0",
        "connections" : {
            "E,8,4,0": true
        }
    },
    "E,8,5,0" : {
        // PK (upstairs)
        "name": "PETALBURG CITY - INSIDE - PkCenter Upstairs (Stairs) - 1,6",
        "level": "1", 
        "to": "E,8,4,2",
        "ignore": true
    },
    "E,8,6,0" : {
        // MART
        "name": "PETALBURG CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to": "E,0,0,5",
        "grouped": ["E,8,6,1"],
        "groupMain" : true
    },
    "E,8,6,1" : {
        // MART
        "name": "PETALBURG CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to": "E,0,0,5",
        "grouped": ["E,8,6,0"]
    },
/* SLATEPORT CITY - EXT */
    "E,0,1,0" : {
        "name" : "SLATEPORT CITY - OUTSIDE - PkCenter - 13,13",
        "to" : "E,9,11,0",
        "level" : "3",
        "connections" : {
            "E,0,24,0": true,
            "E,0,25,4": true,
            "E,0,1,1" : true,
            "E,0,1,2" : true,
            "E,0,1,3" : true,
            "E,0,1,4" : true,
            "E,0,1,6" : true,
            "E,0,1,8" : true,
        }
    },
    "E,0,1,1" : {
        // MART
        "name" : "SLATEPORT CITY - OUTSIDE - Mart - D,1A",
        "to" : "E,9,13,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,2" : {
        "name" : "SLATEPORT CITY - OUTSIDE - Shipyard - 1A,26",
        "to" : "E,9,0,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,3" : {
        // BATTLE HALL
        "name" : "SLATEPORT CITY - OUTSIDE - Battle Hall - A,C",
        "to" : "E,9,2,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,4" : {
        "name" : "SLATEPORT CITY - OUTSIDE - Fan Club - 4,1A",
        "to" : "E,9,6,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,5" : {
        // MUSEUM
        "name" : "SLATEPORT CITY - OUTSIDE - Museum - 1E,1A",
        "to" : "E,9,7,0",
        "grouped": ["E,0,1,7"],
        "groupMain" : true,
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,6" : {
        "name" : "SLATEPORT CITY - OUTSIDE - Name Changer - 5,13",
        "to" : "E,9,5,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,7" : {
        // MUSEUM
        "name" : "SLATEPORT CITY - OUTSIDE - Museum - 1F,1A",
        "to" : "E,9,7,1",
        "grouped" : "E,0,1,5",
        "level" : "3"
    },
    "E,0,1,8" : {
        "name" : "SLATEPORT CITY - OUTSIDE - Dock - 1C,C",
        "to" : "E,9,9,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,1,9" : {
        // SHIP ARRIVING?
        "to" : "E,9,9,2",
        "ignore": true
    },
    "E,0,1,10" : {
        "name" : "SLATEPORT CITY - OUTSIDE - House Bottom - 15,2C",
        "to" : "E,9,10,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
/* SLATEPORT CITY - INT */
    "E,9,0,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Shipyard F1 enterance - 2,E",
        "to": "E,0,1,2",
        "grouped": ["E,9,0,1"],
        "groupMain" : true,
        "level" : "3",
        "connections" : {
            "E,9,0,2": true
        }
    },
    "E,9,0,1" : {
        "name" : "SLATEPORT CITY - INSIDE - Shipyard F1 enterance - 3,E",
        "to": "E,0,1,2",
        "grouped": ["E,9,0,0"],
        "level" : "3",
    },
    "E,9,0,2" : {
        "name" : "SLATEPORT CITY - INSIDE - Shipyard F1 stairs - 3,1",
        "to": "E,9,1,0",
        "level" : "3",
        "connections" : {
            "E,9,0,0": true
        }
    },
    "E,9,1,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Shipyard F2 stairs - 3,1",
        "to": "E,9,0,2",
        "level" : "3",
    },
    "E,9,2,0" : {
        // BATTLE HALL
        "name" : "SLATEPORT CITY - INSIDE - Battle Hall - 6,9",
        "to": "E,0,1,3",
        "grouped": ["E,9,2,1"],
        "groupMain" : true,
        "ignore": true,
        "level" : "3",
    },
    "E,9,2,1" : {
        // BATTLE HALL
        "name" : "SLATEPORT CITY - INSIDE - Battle Hall - 7,9",
        "to": "E,0,1,3",
        "grouped": ["E,9,2,0"],
        "ignore": true,
        "level" : "3",
    },
    "E,9,5,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Name Changer - 3,7",
        "to": "E,0,1,6",
        "grouped": ["E,9,5,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,9,5,1" : {
        "name" : "SLATEPORT CITY - INSIDE - Name Changer - 4,7",
        "to": "E,0,1,6",
        "grouped": ["E,9,5,0"],
        "level" : "3",
    },
    "E,9,6,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Fan Club - 6,A",
        "to": "E,0,1,4",
        "grouped": ["E,9,6,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,9,6,1" : {
        "name" : "SLATEPORT CITY - INSIDE - Fan Club - 7,A",
        "to": "E,0,1,4",
        "grouped": ["E,9,6,0"],
        "level" : "3",
    },
    "E,9,7,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Museum Enterance - 9,8",
        "to": "E,0,1,5",
        "grouped": ["E,9,7,1"],
        "groupMain" : true,
        "level" : "3",
        "connections" : {
            "E,9,7,2": true
        }
    },
    "E,9,7,1" : {
        "name" : "SLATEPORT CITY - INSIDE - Museum Enterance - A,8",
        "to": "E,0,1,7",
        "grouped": ["E,9,7,0"],
        "level" : "3",
    },
    "E,9,7,2" : {
        "name" : "SLATEPORT CITY - INSIDE - Museum F1 Stairs - 6,1",
        "to": "E,9,8,0",
        "level" : "3",
        "connections" : {
            "E,9,7,0": true
        }
    },
    "E,9,8,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Museum F2 Stairs - 6,1",
        "to": "E,9,7,2",
        "level" : "3",
    },
    "E,9,9,0" : {
        "name" : "SLATEPORT CITY - INSIDE - Dock - B,E",
        "to": "E,0,1,8",
        "grouped": ["E,9,9,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,9,9,1" : {
        "name" : "SLATEPORT CITY - INSIDE - Dock - C,E",
        "to": "E,0,1,8",
        "grouped": ["E,9,9,0"],
        "level" : "3",
    },
    "E,9,10,0" : {
        "name" : "SLATEPORT CITY - INSIDE - House Bottom - 3,7",
        "to": "E,0,1,10",
        "grouped": ["E,9,10,0"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,9,10,1" : {
        "name" : "SLATEPORT CITY - INSIDE - House Bottom - 4,7",
        "to": "E,0,1,10",
        "grouped": ["E,9,10,1"],
        "level" : "3",
    },
    "E,9,11,0" : {
        // PK
        "name" : "SLATEPORT CITY - INSIDE - PkCenter - 7,8",
        "to": "E,0,1,0",
        "grouped": ["E,9,11,1"],
        "groupMain" : true,
        "level" : "3",
        "connections" : {
            "E,9,11,2": true
        }
    },
    "E,9,11,1" : {
        // PK
        "name" : "SLATEPORT CITY - INSIDE - PkCenter - 6,8",
        "to": "E,0,1,0",
        "grouped": ["E,9,11,0"],
        "level" : "3",
    },
    "E,9,11,2" : {
        // PK
        "name" : "SLATEPORT CITY - INSIDE - PkCenter F1 Stairs - 1,6",
        "to": "E,9,12,0",
        "level" : "3",
        "connections" : {
            "E,9,11,0": true
        }
    },
    "E,9,12,0" : {
        // PK (upstairs)
        "name" : "SLATEPORT CITY - INSIDE - PkCenter F2 Stairs - 1,6",
        "to": "E,9,11,2",
        "ignore": true,
        "level" : "3",
    },
    "E,9,13,0" : {
        // MART
        "name" : "SLATEPORT CITY - INSIDE - Mart - 3,7",
        "to": "E,0,1,1",
        "grouped": ["E,9,13,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,9,13,1" : {
        // MART
        "name" : "SLATEPORT CITY - INSIDE - Mart - 4,7",
        "to": "E,0,1,1",
        "grouped": ["E,9,13,0"],
        "level" : "3",
    },
/* MAUVILLE CITY - EXT */
    "E,0,2,0" : {
        // GYM
        "name" : "MAUVILLE CITY - OUTSIDE - GYM - 16,5",
        "to" : "E,10,0,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
    "E,0,2,1" : {
        //PK
        "name" : "MAUVILLE CITY - OUTSIDE - PkCenter - 13,E",
        "to" : "E,10,5,0",
        "level" : "3",
        "connections" : {
            "E,0,2,0": true,
            "E,0,2,2": true,
            "E,0,2,3": true,
            "E,0,2,4": true,
            "E,0,2,5": true,
            "E,0,2,6": true,
            "E,0,26,0": true,
            "E,0,26,4": true,
            "E,0,32,0": true,
            "E,0,14,2": true,
            "E,0,38,0": "HOENN_SURF"
        }
    },
    "E,0,2,2" : {
        //BIKE
        "name" : "MAUVILLE CITY - OUTSIDE - Bike Shop - 23,5",
        "to" : "E,10,1,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
    "E,0,2,3" : {
        // MART
        "name" : "MAUVILLE CITY - OUTSIDE - Mart - 17,E",
        "to" : "E,10,7,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
    "E,0,2,4" : {
        "name" : "MAUVILLE CITY - OUTSIDE - Rock Smash House - 20,E",
        "to" : "E,10,2,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
    "E,0,2,5" : {
        // GAME CORNER
        "name" : "MAUVILLE CITY - OUTSIDE - Game Corner - 8,D",
        "to" : "E,10,3,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
    "E,0,2,6" : {
        "name" : "MAUVILLE CITY - OUTSIDE - Left of Mart House - 13,E",
        "to" : "E,10,4,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true
        }
    },
/* MAUVILLE CITY - INT */
    "E,10,0,0" : {
        "name" : "MAUVILLE CITY - INSIDE - GYM - 4,14",
        "to": "E,0,2,0",
        "grouped": ["E,10,0,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,0,1" : {
        "name" : "MAUVILLE CITY - INSIDE - GYM - 5,7",
        "to": "E,0,2,0",
        "grouped": ["E,10,0,0"],
        "level" : "3",
    },
    "E,10,1,0" : {
        "name" : "MAUVILLE CITY - INSIDE - Bike Shop - 3,8",
        "to": "E,0,2,2",
        "grouped": ["E,10,1,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,1,1" : {
        "name" : "MAUVILLE CITY - INSIDE - Bike Shop - 4,8",
        "to": "E,0,2,2",
        "grouped": ["E,10,1,0"],
        "level" : "3",
    },
    "E,10,2,0" : {
        "name" : "MAUVILLE CITY - INSIDE - Rock Smash - 3,7",
        "to": "E,0,2,4",
        "grouped": ["E,10,2,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,2,1" : {
        "name" : "MAUVILLE CITY - INSIDE - Rock Smash - 4,7",
        "to": "E,0,2,4",
        "grouped": ["E,10,2,0"],
        "level" : "3",
    },
    "E,10,3,0" : {
        "name" : "MAUVILLE CITY - INSIDE - Gamer Corner - B,A",
        "to": "E,0,2,5",
        "grouped": ["E,10,3,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,3,1" : {
        "name" : "MAUVILLE CITY - INSIDE - Game Corner - C,A",
        "to": "E,0,2,5",
        "grouped": ["E,10,3,0"],
        "level" : "3",
    },
    "E,10,4,0" : {
        "name" : "MAUVILLE CITY - INSIDE - Left of mart house - 3,8",
        "to": "E,0,2,6",
        "grouped": ["E,10,4,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,4,1" : {
        "name" : "MAUVILLE CITY - INSIDE - Left of mart house - 4,8",
        "to": "E,0,2,6",
        "grouped": ["E,10,4,0"],
        "level" : "3",
    },
    "E,10,5,0" : {
        "name" : "MAUVILLE CITY - INSIDE - PkCenter Enterance - 7,8",
        "to": "E,0,2,1",
        "grouped": ["E,10,5,1"],
        "groupMain" : true,
        "level" : "3",
        "connections" : {
            "E,10,5,2": true
        }
    },
    "E,10,5,1" : {
        "name" : "MAUVILLE CITY - INSIDE - PkCenter Enterance - 6,8",
        "to": "E,0,2,1",
        "grouped": ["E,10,5,0"],
        "level" : "3",
    },
    "E,10,5,2" : {
        "name" : "MAUVILLE CITY - INSIDE - PkCenter Stairs - 1,6",
        "to": "E,10,6,0",
        "level" : "3",
        "connections" : {
            "E,10,5,0": true
        }
    },
    "E,10,6,0" : {
        "name" : "MAUVILLE CITY - INSIDE - PkCenter Upstairs - 3,7",
        "to": "E,10,5,2",
        "ignore": true,
        "level" : "3",
    },
    "E,10,7,0" : {
        "name" : "MAUVILLE CITY - INSIDE - Mart - 3,7",
        "to": "E,0,2,3",
        "grouped": ["E,10,7,1"],
        "groupMain" : true,
        "level" : "3",
    },
    "E,10,7,1" : {
        "name" : "MAUVILLE CITY - INSIDE - Rock Smash - 4,7",
        "to": "E,0,2,3",
        "grouped": ["E,10,7,0"],
        "level" : "3",
    },
/* RUSTBORO CITY - EXT */
    "E,0,3,0" : {
        // GYM
        "name": "RUSTBORO CITY - OUTSIDE - GYM - 1B,13",
        "level": "1", 
        "to" : "E,11,3,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,1" : {
        "name": "RUSTBORO CITY - OUTSIDE - Wanda House (PC Boxart) - D,1E",
        "level": "1", 
        "to" : "E,11,8,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,2" : {
        // MART
        "name": "RUSTBORO CITY - OUTSIDE - Mart - 10,2D",
        "level": "1", 
        "to" : "E,11,7,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,3" : {
        // PK
        "name": "RUSTBORO CITY - OUTSIDE - Pkcenter - 10,26",
        "level": "1", 
        "to" : "E,11,5,0",
        "connections": {
            "E,0,3,0": true,
            "E,0,3,1": true,
            "E,0,3,2": true,
            "E,0,3,4": true,
            "E,0,3,5": true,
            "E,0,3,7": true,
            "E,0,3,8": true,
            "E,0,3,9": true,
            "E,0,3,10": true,
            "E,0,3,11": true,
            "E,0,19,1": true,
            "E,0,19,2": true,
            "E,0,31,0": true,
            "E,0,31,1": true,
            "E,0,30,0":"HOENN_SURF"
        }
    },
    "E,0,3,4" : {
        // SCHOOL
        "name": "RUSTBORO CITY - OUTSIDE - School - 1B,22",
        "level": "1", 
        "to" : "E,11,4,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,5" : {
        "name": "RUSTBORO CITY - OUTSIDE - Devon Corp - B,F",
        "level": "1", 
        "to" : "E,11,0,0",
        "grouped": ["E,0,3,6"],
        "groupMain" : true,
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,6" : {
        "name": "RUSTBORO CITY - OUTSIDE - Devon Corp - C,F",
        "level": "1", 
        "to" : "E,11,0,1",
        "grouped": ["E,0,3,5"]
    },
    "E,0,3,7" : {
        "name": "RUSTBORO CITY - OUTSIDE - Right of Gym (seedot/ralts trade) - 21,13",
        "level": "1", 
        "to" : "E,11,10,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,8" : {
        "name": "RUSTBORO CITY - OUTSIDE - Cut Masters House - 9,26",
        "level": "1", 
        "to" : "E,11,11,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,9" : {
        "name": "RUSTBORO CITY - OUTSIDE - Above School - 1E,1C",
        "level": "1", 
        "to" : "E,11,12,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,10" : {
        "name": "RUSTBORO CITY - OUTSIDE - Bottom Left Appartments - 5,33",
        "level": "1", 
        "to" : "E,11,13,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,3,11" : {
        "name": "RUSTBORO CITY - OUTSIDE - Bottom Right - 1A,2E",
        "level": "1", 
        "to" : "E,11,16,0",
        "connections": {
            "E,0,3,3": true
        }
    },
/* RUSTBORO CITY - INT */
    "E,11,0,0" : {
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F1 (enterance) - 5,8",
        "level": "1", 
        "to" : "E,0,3,5",
        "grouped": ["E,11,0,1"],
        "groupMain" : true,
        "connections": {
            "E,11,0,2": true
        }
    },
    "E,11,0,1" : {
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F1 (enterance) - 6,8",
        "level": "1", 
        "to" : "E,0,3,6",
        "grouped" : ["E,11,0,0"]
    },
    "E,11,0,2" : {
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F1 (stairs) - E,1",
        "level": "1", 
        "to" : "E,11,1,0",
        "connections": {
            "E,11,0,0": true
        }
    },
    "E,11,1,0" : {
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F2 (Right) - E,1",
        "level": "1", 
        "to" : "E,11,0,2",
        "connections": {
            "E,11,1,1": true
        }
    },
    "E,11,1,1" : {
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F2 (Left) - 2,1",
        "level": "1", 
        "to" : "E,11,2,0",
        "connections": {
            "E,11,1,0": true
        }
    },
    "E,11,2,0" : {
        // DIRECTOR GUY
        "name": "RUSTBORO CITY - INSIDE - Devon Corp F3 (President office) - 2,1",
        "level": "1", 
        "to" : "E,11,1,1"
    },
    "E,11,3,0" : {
        // GYM
        "name": "RUSTBORO CITY - INSIDE - Gym - 5,13",
        "level": "1", 
        "to" : "E,0,3,0",
        "grouped" : ["E,11,3,1"],
        "groupMain" : true
    },
    "E,11,3,1" : {
        // GYM
        "name": "RUSTBORO CITY - INSIDE - Gym - 6,13",
        "level": "1", 
        "to" : "E,0,3,0",
        "grouped" : ["E,11,3,0"]
    },
    "E,11,4,0" : {
        // SCHOOL
        "name": "RUSTBORO CITY - INSIDE - School - 5,A",
        "level": "1", 
        "to" : "E,0,3,4",
        "grouped" : ["E,11,4,1"],
        "groupMain" : true
    },
    "E,11,4,1" : {
        // SCHOOL
        "name": "RUSTBORO CITY - INSIDE - School - 6,A",
        "level": "1", 
        "to" : "E,0,3,4",
        "grouped" : ["E,11,4,0"]
    },
    "E,11,5,0" : {
        // PK
        "name": "RUSTBORO CITY - INSIDE - PkCenter (enterance) - 7,8",
        "level": "1", 
        "to" : "E,0,3,3",
        "grouped" : ["E,11,5,1"],
        "groupMain" : true,
        "connections": {
            "E,11,5,2": true
        }
    },
    "E,11,5,1" : {
        // PK
        "name": "RUSTBORO CITY - INSIDE - PkCenter (enterance) - 8,8",
        "level": "1", 
        "to" : "E,0,3,3",
        "grouped" : ["E,11,5,0"]
    },
    "E,11,5,2" : {
        // PK
        "name": "RUSTBORO CITY - INSIDE - PkCenter (stairs) - 1,6",
        "level": "1", 
        "to" : "E,11,6,0",
        "connections": {
            "E,11,5,0": true
        }
    },
    "E,11,6,0" : {
        "name": "RUSTBORO CITY - INSIDE - PkCenter Upstairs (stairs) - 1,6",
        "level": "1", 
        "to" : "E,11,5,2",
        "ignore" : true
    },
    "E,11,7,0" : {
        // MART
        "name": "RUSTBORO CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to" : "E,0,3,2",
        "grouped" : ["E,11,7,1"],
        "groupMain" : true
    },
    "E,11,7,1" : {
        // MART
        "name": "RUSTBORO CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to" : "E,0,3,2",
        "grouped" : ["E,11,7,0"]
    },
    "E,11,8,0" : {
        "name": "RUSTBORO CITY - INSIDE - Wanda House (PC Boxart) F1 Enterance - 6,7",
        "level": "1", 
        "to" : "E,0,3,1",
        "grouped" : ["E,11,8,1"],
        "groupMain" : true,
        "connections": {
            "E,11,8,2": true
        }
    },
    "E,11,8,1" : {
        "name": "RUSTBORO CITY - INSIDE - Wanda House (PC Boxart) F1 Enterance - 7,7",
        "level": "1", 
        "to" : "E,0,3,1",
        "grouped" : ["E,11,8,0"]
    },
    "E,11,8,2" : {
        "name": "RUSTBORO CITY - INSIDE - Wanda House (PC Boxart) F1 Stairs - 2,1",
        "level": "1", 
        "to" : "E,11,9,0",
        "connections": {
            "E,11,8,0": true
        }
    },
    "E,11,9,0" : {
        "name": "RUSTBORO CITY - INSIDE - Wanda House (PC Boxart) F2 Stairs - 2,1",
        "level": "1", 
        "to" : "E,11,8,2"
    },
    "E,11,10,0" : {
        "name": "RUSTBORO CITY - INSIDE - Right of Gym (seedot/ralts trade) - 5,7",
        "level": "1", 
        "to" : "E,0,3,7",
        "grouped" : ["E,11,10,1"],
        "groupMain" : true
    },
    "E,11,10,1" : {
        "name": "RUSTBORO CITY - INSIDE - Right of Gym (seedot/ralts trade) - 6,7",
        "level": "1", 
        "to" : "E,0,3,7",
        "grouped" : ["E,11,10,0"]
    },
    "E,11,11,0" : {
        "name": "RUSTBORO CITY - INSIDE - Cut Masters House - 5,8",
        "level": "1", 
        "to" : "E,0,3,8",
        "grouped" : ["E,11,11,1"],
        "groupMain" : true
    },
    "E,11,11,1" : {
        "name": "RUSTBORO CITY - INSIDE - Cut Masters House - 6,8",
        "level": "1", 
        "to" : "E,0,3,8",
        "grouped" : ["E,11,11,0"]
    },
    "E,11,12,0" : {
        "name": "RUSTBORO CITY - INSIDE - Above School - 5,8",
        "level": "1", 
        "to" : "E,0,3,9",
        "grouped" : ["E,11,12,1"],
        "groupMain" : true
    },
    "E,11,12,1" : {
        "name": "RUSTBORO CITY - INSIDE - Above School - 6,8",
        "level": "1", 
        "to" : "E,0,3,9",
        "grouped" : ["E,11,12,0"]
    },
    "E,11,13,0" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F1 (Enterance) - 2,8",
        "level": "1", 
        "to" : "E,0,3,10",
        "grouped" : ["E,11,13,1"],
        "groupMain" : true,
        "connections": {
            "E,11,13,2": true
        }
    },
    "E,11,13,1" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F1 (Enterance) - 3,8",
        "level": "1", 
        "to" : "E,0,3,10",
        "grouped" : ["E,11,13,0"]
    },
    "E,11,13,2" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F1 (stairs) - 3,1",
        "level": "1", 
        "to" : "E,11,14,0",
        "connections": {
            "E,11,13,0": true
        }
    },
    "E,11,14,0" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F2 Right (stairs) - 3,1",
        "level": "1", 
        "to" : "E,11,13,2",
        "connections": {
            "E,11,14,1": true
        }
    },
    "E,11,14,1" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F2 Right (stairs) - 1,1",
        "level": "1", 
        "to" : "E,11,15,0",
        "connections": {
            "E,11,14,0": true
        }
    },
    "E,11,15,0" : {
        "name": "RUSTBORO CITY - INSIDE - Bottom Left Appartments F3 (stairs) - 1,1",
        "level": "1", 
        "to" : "E,11,14,1"
    },
    "E,11,16,0" : {
        "name": "RUSTBORO CITY - OUTSIDE - Bottom Right - 5,8",
        "level": "1", 
        "to" : "E,0,3,11",
        "grouped" : ["E,11,16,1"],
        "groupMain" : true
    },
    "E,11,16,1" : {
        "name": "RUSTBORO CITY - OUTSIDE - Bottom Right - 6,8",
        "level": "1", 
        "to" : "E,0,3,11",
        "grouped" : ["E,11,16,0"]
    },
/* FORTREE CITY - EXT */
    "E,0,4,0" : {
        // PK
        "name": "FORTREE CITY - OUTSIDE - PkCenter - 5,6",
        "to" : "E,12,2,0",
        "level": "6", 
        "connections": {
            "E,0,35,0": true,
            "E,0,4,1": true,
            "E,0,4,2": true,
            "E,0,4,3": true,
            "E,0,4,4": true,
            "E,0,4,5": true,
            "E,0,4,6": true,
            "E,0,4,7": true,
            "E,0,4,8": true,
            "E,0,35,1": "HOENN_SURF"
        }
    },
    "E,0,4,1" : {
        "name": "FORTREE CITY - OUTSIDE - Top Next To PkCenter - A,3",
        "to" : "E,12,0,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,2" : {
        // GYM
        "name": "FORTREE CITY - OUTSIDE - Gym - 16,B",
        "to" : "E,12,1,0",
        "level": "6",
        "connections": {
            "E,0,4,0": "DEVON_SCOPE",
        }
    },
    "E,0,4,3" : {
        // MART
        "name": "FORTREE CITY - OUTSIDE - Mart - 4,E",
        "to" : "E,12,4,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,4" : {
        "name": "FORTREE CITY - OUTSIDE - Left Above Gym - 11,3",
        "to" : "E,12,5,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,5" : {
        "name": "FORTREE CITY - OUTSIDE - Right Above Gym - 19,3",
        "to" : "E,12,6,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,6" : {
        "name": "FORTREE CITY - OUTSIDE - Right Side Top - 20,2",
        "to" : "E,12,7,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,7" : {
        "name": "FORTREE CITY - OUTSIDE - Bottom Left - C,D",
        "to" : "E,12,8,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
    "E,0,4,8" : {
        "name": "FORTREE CITY - OUTSIDE - Bottom Right - 25,D",
        "to" : "E,12,9,0",
        "level": "6", 
        "connections": {
            "E,0,4,0": true,
        }
    },
/* FORTREE CITY - INT */ 
    "E,12,0,0" : {
        "name" : "FORTREE CITY - INSIDE - Top Next To PkCenter - 3,5",
        "to" : "E,0,4,1",
        "level" : "6",
        "grouped": ["E,12,0,1"],
        "groupMain" : true,
    },
    "E,12,0,1" : {
        "name" : "FORTREE CITY - INSIDE - Top Next To PkCenter - 4,5",
        "to" : "E,0,4,1",
        "level" : "6",
        "grouped": ["E,12,0,0"]
    },
    "E,12,1,0" : {
        "name" : "FORTREE CITY - INSIDE - Gym - F,18",
        "to" : "E,0,4,2",
        "level" : "6",
        "grouped": ["E,12,1,1"],
        "groupMain" : true,
    },
    "E,12,1,1" : {
        "name" : "FORTREE CITY - INSIDE - Gym - 10,18",
        "to" : "E,0,4,2",
        "level" : "6",
        "grouped": ["E,12,1,0"]
    },
    "E,12,2,0" : {
        "name" : "FORTREE CITY - INSIDE - PkCenter Enterance- 7,8",
        "to" : "E,0,4,0",
        "level" : "6",
        "grouped": ["E,12,2,1"],
        "groupMain" : true,
        "connections": {
            "E,12,2,2": true,
        }
    },
    "E,12,2,1" : {
        "name" : "FORTREE CITY - INSIDE - PkCenter Enterance - 6,8",
        "to" : "E,0,4,0",
        "level" : "6",
        "grouped": ["E,12,2,0"],
    },
    "E,12,2,2" : {
        "name" : "FORTREE CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "E,12,3,0",
        "level" : "6",
        "connections": {
            "E,12,2,0": true,
        }
    },
    "E,12,3,0" : {
        "name" : "FORTREE CITY - INSIDE - PkCenter Upstairs - 1,6",
        "to" : "E,12,2,2",
        "ignore" : "true",
        "level" : "6",
    },
    "E,12,4,0" : {
        "name" : "FORTREE CITY - INSIDE - Mart - 3,7",
        "to" : "E,0,4,3",
        "level" : "6",
        "grouped": ["E,12,4,1"],
        "groupMain" : true,
    },
    "E,12,4,1" : {
        "name" : "FORTREE CITY - INSIDE - Mart - 4,7",
        "to" : "E,0,4,3",
        "level" : "6",
        "grouped": ["E,12,4,0"],
    },
    "E,12,5,0" : {
        "name" : "FORTREE CITY - INSIDE - Left Above GYM - 3,5",
        "to" : "E,0,4,4",
        "level" : "6",
        "grouped": ["E,12,5,1"],
        "groupMain" : true,
    },
    "E,12,5,1" : {
        "name" : "FORTREE CITY - INSIDE - Left Above GYM - 4,5",
        "to" : "E,0,4,4",
        "level" : "6",
        "grouped": ["E,12,5,0"],
    },
    "E,12,6,0" : {
        "name" : "FORTREE CITY - INSIDE - Right Above GYM - 3,5",
        "to" : "E,0,4,5",
        "level" : "6",
        "grouped": ["E,12,6,1"],
        "groupMain" : true,
    },
    "E,12,6,1" : {
        "name" : "FORTREE CITY - INSIDE - Right Above GYM - 4,5",
        "to" : "E,0,4,5",
        "level" : "6",
        "grouped": ["E,12,6,0"],
    },
    "E,12,7,0" : {
        "name" : "FORTREE CITY - INSIDE - Right Side Top - 3,5",
        "to" : "E,0,4,6",
        "level" : "6",
        "grouped": ["E,12,7,1"],
        "groupMain" : true,
    },
    "E,12,7,1" : {
        "name" : "FORTREE CITY - INSIDE - Right Side Top - 4,5",
        "to" : "E,0,4,6",
        "level" : "6",
        "grouped": ["E,12,7,0"],
    },
    "E,12,8,0" : {
        "name" : "FORTREE CITY - INSIDE - Bottom Left - 3,5",
        "to" : "E,0,4,7",
        "level" : "6",
        "grouped": ["E,12,8,1"],
        "groupMain" : true,
    },
    "E,12,8,1" : {
        "name" : "FORTREE CITY - INSIDE - Bottom Left - 4,5",
        "to" : "E,0,4,7",
        "level" : "6",
        "grouped": ["E,12,8,0"],
    },
    "E,12,9,0" : {
        "name" : "FORTREE CITY - INSIDE - Bottom Right - 3,5",
        "to" : "E,0,4,8",
        "level" : "6",
        "grouped": ["E,12,9,1"],
        "groupMain" : true,
    },
    "E,12,9,1" : {
        "name" : "FORTREE CITY - INSIDE - Bottom Right - 4,5",
        "to" : "E,0,4,8",
        "level" : "6",
        "grouped": ["E,12,9,0"],
    },
/* LILYCOVE CITY - EXT */
    "E,0,5,0" : {
        // DEPT
        "name" : "LILYCOVE CITY - OUTSIDE - Department Store - 1B,6",
        "level" : "7",
        "to" : "E,13,16,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,1" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Club House - 25,18",
        "level" : "7",
        "to" : "E,13,0,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,2" : {
        // PK 
        "name" : "LILYCOVE CITY - OUTSIDE - PkCenter - 1B,6",
        "level" : "7",
        "to" : "E,13,6,0",
        "connections" : {
            "E,0,36,0": true,
            "E,0,5,0": true,
            "E,0,5,1": true,
            "E,0,5,3": true,
            "E,0,5,4": true,
            "E,0,5,5": true,
            "E,0,5,7": true,
            "E,0,5,8": true,
            "E,0,5,9": true,
            "E,0,5,10": true,
            "E,0,5,11": true,
            "E,0,5,12": true,
            "E,0,5,13": true,
            "E,0,5,6": "HOENN_SURF" 
        }
    },
    "E,0,5,3" : {
        // MUSEUM
        "name" : "LILYCOVE CITY - OUTSIDE - Museum - 1B,6",
        "level" : "7",
        "to" : "E,13,2,0",
        "grouped" : ["E,0,5,13"],
        "groupMain" : true,
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,4" : {
        // CONTEST HALL
        "name" : "LILYCOVE CITY - OUTSIDE - Contest Hall - 1B,6",
        "level" : "7",
        "to" : "E,13,4,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,5" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Above Club House - 27,E",
        "level" : "7",
        "to" : "E,13,9,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,6" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Aqua Hideout - 46,5",
        "level" : "7",
        "to" : "E,24,23,0",
        "connections" : {
            "E,0,5,2": true,
            "E,0,40,0": true,
            "E,0,6,2": true,
            "E,0,46,0": true,
            "E,0,15,0": true,
            "E,0,1,0": true,
            "E,0,39,0": true,
            "E,0,8,1": "HOENN_WATERFALL"
        }
    },
    "E,0,5,7" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Right of Department Store - 24,6",
        "level" : "7",
        "to" : "E,13,11,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,8" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Top Right - 2A,6",
        "level" : "7",
        "to" : "E,13,12,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,9" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Center Right (Ledge) - 37,F",
        "level" : "7",
        "to" : "E,13,13,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,10" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Left Of Contest Hall - B,16",
        "level" : "7",
        "to" : "E,13,14,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,11" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Left of PkCenter - C,E",
        "level" : "7",
        "to" : "E,13,15,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,12" : {
        "name" : "LILYCOVE CITY - OUTSIDE - Dock - C,20",
        "level" : "7",
        "to" : "E,13,10,0",
        "connections" : {
            "E,0,5,2": true
        }
    },
    "E,0,5,13" : {
        // MUSEUM
        "name" : "LILYCOVE CITY - OUTSIDE - Museum - C,5",
        "level" : "7",
        "to" : "E,13,2,1",
        "grouped": ["E,0,5,3"]
    },
/* LILYCOVE CITY - INT */
    "E,13,0,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Club House Door - 5,6",
        "to" : "E,0,5,1",
        "level" : "7",
        "grouped": ["E,13,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,13,0,2": true
        }
    },
    "E,13,0,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Club House Door - 6,8",
        "to" : "E,0,4,8",
        "level" : "7",
        "grouped": ["E,13,0,0"],
    },
    "E,13,0,2" : {
        "name" : "LILYCOVE CITY - INSIDE - Club House Stairs - 2,1",
        "to" : "E,13,1,0",
        "level" : "7",
        "connections" : {
            "E,13,0,0": true
        }
    },
    "E,13,0,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Club House Upstairs - 2,1",
        "to" : "E,13,10,2",
        "level" : "7"
    },
    "E,13,2,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Museum Door - 9,D",
        "to" : "E,0,5,1",
        "ignore": true,
        "level" : "7",
        "grouped": ["E,13,2,1"],
        "groupMain" : true,
        "connections" : {
            "E,13,2,2": true
        }
    },
    "E,13,2,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Museum Door - 10,D",
        "to" : "E,0,4,8",
        "ignore": true,
        "level" : "7",
        "grouped": ["E,13,2,0"],
    },
    "E,13,2,2" : {
        "name" : "LILYCOVE CITY - INSIDE - Museum Stairs - 10,1",
        "to" : "E,13,1,0",
        "ignore": true,
        "level" : "7",
        "connections" : {
            "E,13,2,0": true
        }
    },
    "E,13,3,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Museum Upstairs - D,1",
        "to" : "E,13,2,2",
        "level" : "7",
        "ignore": true,
    },
    "E,13,4,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Hall Door - E,B",
        "to" : "E,0,5,4",
        "level" : "7",
        "grouped": ["E,13,4,1"],
        "groupMain" : true,
        "connections" : {
            "E,13,4,2": true,
            "E,13,4,3": true
        }
    },
    "E,13,4,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Hall Door - E,B",
        "to" : "E,0,5,4",
        "level" : "7",
        "grouped": ["E,13,4,0"],
    },
    "E,13,4,2" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Hall Left - 15,1",
        "to" : "E,13,5,0",
        "level" : "7",
        "connections" : {
            "E,13,4,0": true,
            "E,13,4,3": true
        }
    },
    "E,13,4,3" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Hall Left - 15,1",
        "to" : "E,13,5,1",
        "level" : "7",
        "connections" : {
            "E,13,4,2": true,
            "E,13,4,0": true
        }
    },
    "E,13,5,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Room Left - 13,20",
        "to" : "E,13,4,2",
        "level" : "7",
        "grouped": ["E,13,5,2"],
        "groupMain" : true,
        "connections" : {
            "E,13,5,1": true
        }
    },
    "E,13,5,2" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Room Left - 14,20",
        "to" : "E,13,4,2",
        "level" : "7",
        "grouped": ["E,13,5,0"],
    },
    "E,13,5,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Room Right - 1E,20",
        "to" : "E,13,4,3",
        "level" : "7",
        "grouped": ["E,13,5,3"],
        "groupMain" : true,
        "connections" : {
            "E,13,5,0": true
        }
    },
    "E,13,5,3" : {
        "name" : "LILYCOVE CITY - INSIDE - Contest Room Left - 1F,20",
        "to" : "E,13,4,3",
        "level" : "7",
        "grouped": ["E,13,5,1"],
    },
    "E,13,6,0" : {
        "name" : "LILYCOVE CITY - INSIDE - PkCenter Door - 7,8",
        "to" : "E,0,5,2",
        "level" : "7",
        "grouped": ["E,13,6,1"],
        "groupMain" : true,
        "connections" : {
            "E,13,6,2": true
        }
    },
    "E,13,6,1" : {
        "name" : "LILYCOVE CITY - INSIDE - PkCenter Door - 6,8",
        "to" : "E,0,5,2",
        "level" : "7",
        "grouped": ["E,13,6,0"],
    },
    "E,13,6,2" : {
        "name" : "LILYCOVE CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "E,13,7,0",
        "level" : "7",
        "connections" : {
            "E,13,6,0": true
        }
    },
    "E,13,7,0" : {
        "name" : "LILYCOVE CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "E,13,6,2",
        "level" : "7",
        "ignore" : true
    },
    "E,13,9,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Right of PkCenter - 5,D",
        "to" : "E,0,5,5",
        "level" : "7",
        "grouped": ["E,13,9,1"],
        "groupMain" : true,
    },
    "E,13,9,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Right of PkCenter - 5,D",
        "to" : "E,0,5,5",
        "level" : "7",
        "grouped": ["E,13,9,0"],
    },
    "E,13,10,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dock - B,E",
        "to" : "E,0,5,12",
        "level" : "7",
        "grouped": ["E,13,10,1"],
        "groupMain" : true,
    },
    "E,13,10,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dock - C,E",
        "to" : "E,0,5,12",
        "level" : "7",
        "grouped": ["E,13,10,0"],
    },
    "E,13,11,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Right of Dept - 3,7",
        "to" : "E,0,5,7",
        "level" : "7",
        "grouped": ["E,13,11,1"],
        "groupMain" : true,
    },
    "E,13,11,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Right of Dept - 4,7",
        "to" : "E,0,5,7",
        "level" : "7",
        "grouped": ["E,13,11,0"],
    },
    "E,13,12,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Top Right - 3,8",
        "to" : "E,0,5,8",
        "level" : "7",
        "grouped": ["E,13,12,1"],
        "groupMain" : true,
    },
    "E,13,12,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Top Right - 4,8",
        "to" : "E,0,5,8",
        "level" : "7",
        "grouped": ["E,13,12,0"],
    },
    "E,13,13,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Center Right (ledge) - 3,8",
        "to" : "E,0,5,9",
        "level" : "7",
        "grouped": ["E,13,13,1"],
        "groupMain" : true,
    },
    "E,13,13,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Center Right (ledge) - 4,8",
        "to" : "E,0,5,9",
        "level" : "7",
        "grouped": ["E,13,13,0"],
    },
    "E,13,14,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Left of contest Hall - 3,8",
        "to" : "E,0,5,10",
        "level" : "7",
        "grouped": ["E,13,14,1"],
        "groupMain" : true,
    },
    "E,13,14,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Left of contest Hall - 4,8",
        "to" : "E,0,5,10",
        "level" : "7",
        "grouped": ["E,13,14,0"],
    },
    "E,13,15,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Left of PkCenter - 3,8",
        "to" : "E,0,5,11",
        "level" : "7",
        "grouped": ["E,13,15,1"],
        "groupMain" : true,
    },
    "E,13,15,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Left of PkCenter - 4,8",
        "to" : "E,0,5,11",
        "level" : "7",
        "grouped": ["E,13,15,0"],
    },
    "E,13,16,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F1 Door - 8,7",
        "to" : "E,0,5,0",
        "level" : "7",
        "grouped": ["E,13,16,1"],
        "groupMain" : true,
        "connections" : {
            "E,13,16,2": true,
            "E,13,17,0": true,
            "E,13,18,0": true,
            "E,13,19,0": true,
            "E,13,20,0": true
        }
    },
    "E,13,16,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F1 Door - 9,7",
        "to" : "E,0,5,0",
        "level" : "7",
        "grouped": ["E,13,16,0"],
    },
    "E,13,16,2" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F1 Stairs - 10,1",
        "to" : "E,13,17,0",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true
        }
    },
    "E,13,17,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F2 Right - 10,1",
        "to" : "E,13,16,2",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,17,1": true
        }
    },
    "E,13,17,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F2 Left - D,1",
        "to" : "E,13,18,0",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,17,0": true
        }
    },
    "E,13,18,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F3 Left - D,1",
        "to" : "E,13,17,1",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,18,1": true
        }
    },
    "E,13,18,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F3 Right - 10,1",
        "to" : "E,13,19,0",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,18,0": true
        }
    },
    "E,13,19,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F4 Right - 10,1",
        "to" : "E,13,18,1",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,19,1": true
        }
    },
    "E,13,19,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F4 Left - D,1",
        "to" : "E,13,20,0",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,19,0": true
        }
    },
    "E,13,20,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F5 Left - D,1",
        "to" : "E,13,19,1",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,20,1": true
        }
    },
    "E,13,20,1" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store F5 Right - 10,1",
        "to" : "E,13,19,0",
        "level" : "7",
        "connections" : {
            "E,13,16,0": true,
            "E,13,20,0": true
        }
    },
    "E,13,21,0" : {
        "name" : "LILYCOVE CITY - INSIDE - Dept Store Roof - D,3",
        "to" : "E,13,20,0",
        "level" : "7",
    },
/* MOSSDEEP CITY - EXT */
    "E,0,6,0" : {
        "name" : "MOSSDEEP CITY - OUTSIDE - Above PkCenter - 1C,9",
        "level" : "7",
        "to" : "E,14,1,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,1" : {
        // GYM
        "name" : "MOSSDEEP CITY - OUTSIDE - GYM - 26,9",
        "level" : "7",
        "to" : "E,14,0,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,2" : {
        // PK
        "name" : "MOSSDEEP CITY - OUTSIDE - PkCenter - 1C,10",
        "level" : "7",
        "to" : "E,14,3,0",
        "connections" : {
            "E,0,6,0": true,
            "E,0,6,1": true,
            "E,0,6,3": true,
            "E,0,6,4": true,
            "E,0,6,5": true,
            "E,0,6,6": true,
            "E,0,6,7": true,
            "E,0,6,8": true,
            "E,0,6,9": true,
            "E,0,5,6": "HOENN_SURF" 
        }
    },
    "E,0,6,3" : {
        "name" : "MOSSDEEP CITY - OUTSIDE - Bellow Space Center - 43,19",
        "level" : "7",
        "to" : "E,14,2,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,4" : {
        // MART
        "name" : "MOSSDEEP CITY - OUTSIDE - Mart - 25,12",
        "level" : "7",
        "to" : "E,14,5,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,5" : {
        "name" : "MOSSDEEP CITY - OUTSIDE - Left of Space Center - 31,6",
        "level" : "7",
        "to" : "E,14,6,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,6" : {
        // STEVENS HOUSE
        "name" : "MOSSDEEP CITY - OUTSIDE - Top Left (Steven) - 13,A",
        "level" : "7",
        "to" : "E,14,7,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,7" : {
        "name" : "MOSSDEEP CITY - OUTSIDE - Left of PkCenter - 12,10",
        "level" : "7",
        "to" : "E,14,8,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,8" : {
        // SPACE
        "name" : "MOSSDEEP CITY - OUTSIDE - Space Center - 40,F",
        "level" : "7",
        "to" : "E,14,9,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
    "E,0,6,9" : {
        // MINI GAME PLACE
        "name" : "MOSSDEEP CITY - OUTSIDE - Bellow Mart - 40,F",
        "level" : "7",
        "to" : "E,14,11,0",
        "connections" : {
            "E,0,6,2": true
        }
    },
/* MOSSDEEP CITY - INT */    
    "E,14,0,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Gym - 6,23",
        "level": "7", 
        "to": "E,0,6,1",
        "grouped": ["E,14,0,1"],
        "groupMain" : true
    },
    "E,14,0,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Gym - 7,23",
        "level": "7", 
        "to": "E,0,6,1",
        "grouped": ["E,14,0,0"],
    },
    "E,14,1,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Above PkCenter - 3,7",
        "level": "7", 
        "to": "E,0,6,0",
        "grouped": ["E,14,1,1"],
        "groupMain" : true
    },
    "E,14,1,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Above PkCenter - 4,7",
        "level": "7", 
        "to": "E,0,6,0",
        "grouped": ["E,14,1,0"],
    },
    "E,14,2,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Bellow Space Center - 3,7",
        "level": "7", 
        "to": "E,0,6,3",
        "grouped": ["E,14,2,1"],
        "groupMain" : true
    },
    "E,14,2,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Bellow Space Center - 4,7",
        "level": "7", 
        "to": "E,0,6,3",
        "grouped": ["E,14,2,0"],
    },
    "E,14,3,0" : {
        "name": "MOSSDEEP CITY - INSIDE - PkCenter Door - 7,8",
        "level": "7", 
        "to": "E,0,6,2",
        "grouped": ["E,14,3,1"],
        "groupMain" : true,
        "connections" : {
            "E,14,3,2": true
        }
    },
    "E,14,3,1" : {
        "name": "MOSSDEEP CITY - INSIDE - PkCenter Door - 6,8",
        "level": "7", 
        "to": "E,0,6,2",
        "grouped": ["E,14,3,0"],
    },
    "E,14,3,2" : {
        "name": "MOSSDEEP CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "7", 
        "to": "E,14,4,0",
        "connections" : {
            "E,14,3,0": true
        }
    },
    "E,14,4,0" : {
        "name": "MOSSDEEP CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "7", 
        "to": "E,2,14,3",
        "ignore" : true
    },
    "E,14,5,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Mart - 3,7",
        "level": "7", 
        "to": "E,0,6,4",
        "grouped": ["E,14,5,1"],
        "groupMain" : true
    },
    "E,14,5,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Mart - 4,7",
        "level": "7", 
        "to": "E,0,6,4",
        "grouped": ["E,14,5,0"],
    },
    "E,14,6,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Left of Space Center - 3,7",
        "level": "7", 
        "to": "E,0,6,5",
        "grouped": ["E,14,6,1"],
        "groupMain" : true
    },
    "E,14,6,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Left of Space Center - 4,7",
        "level": "7", 
        "to": "E,0,6,5",
        "grouped": ["E,14,6,0"],
    },
    "E,14,7,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Top Left (Steven) - 3,7",
        "level": "7", 
        "to": "E,0,6,6",
        "grouped": ["E,14,7,1"],
        "groupMain" : true
    },
    "E,14,7,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Top Left (Steven) - 4,7",
        "level": "7", 
        "to": "E,0,6,6",
        "grouped": ["E,14,7,0"],
    },
    "E,14,8,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Left of PkCenter - 3,7",
        "level": "7", 
        "to": "E,0,6,7",
        "grouped": ["E,14,8,1"],
        "groupMain" : true
    },
    "E,14,8,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Left of PkCenter - 4,7",
        "level": "7", 
        "to": "E,0,6,7",
        "grouped": ["E,14,8,0"],
    },
    "E,14,9,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Space Center F1 Door - 7,9",
        "level": "7", 
        "to": "E,0,6,8",
        "grouped": ["E,14,9,1"],
        "groupMain" : true,
        "connections" : {
            "E,14,9,2": true
        }
    },
    "E,14,9,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Space Center F1 Door - 8,9",
        "level": "7", 
        "to": "E,0,6,8",
        "grouped": ["E,14,9,0"],
    },
    "E,14,9,2" : {
        "name": "MOSSDEEP CITY - INSIDE - Space Center F1 Stairs - D,1",
        "level": "7", 
        "to": "E,14,10,0",
        "connections" : {
            "E,14,9,0": true
        }
    },
    "E,14,10,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Space Center F2 Stairs - D,1",
        "level": "7", 
        "to": "E,14,9,2",
    },
    "E,14,11,0" : {
        "name": "MOSSDEEP CITY - INSIDE - Bellow Mart - 5,9",
        "level": "7", 
        "to": "E,0,6,9",
        "grouped": ["E,14,11,1"],
        "groupMain" : true
    },
    "E,14,11,1" : {
        "name": "MOSSDEEP CITY - INSIDE - Bellow Mart - 6,9",
        "level": "7", 
        "to": "E,0,6,9",
        "grouped": ["E,14,11,0"],
    },
/* SOOTOPOLIS CITY - EXT */
    "E,0,7,0"  : {
        // PK
        "name": "SOOTOPOLIS CITY - OUTSIDE - PkCenter - 2B,1F",
        "level" : "8",
        "to" : "E,15,2,0",
        "connections" : {
            "E,0,7,12": true,
            "E,0,7,9": true,
            "E,0,7,11": true,
            "E,0,7,7": true,
            "E,0,7,5": true,
        }
    },
    "E,0,7,1"  : {
        // MART
        "name": "SOOTOPOLIS CITY - OUTSIDE - Mart - 11,1D",
        "level" : "8",
        "to" : "E,15,4,0",
        "connections" : {
            "E,0,7,10": true,
            "E,0,7,8": true,
            "E,0,7,6": true,
            "E,0,7,4": true,
        }
    },
    "E,0,7,2"  : {
        // GYM
        "name": "SOOTOPOLIS CITY - OUTSIDE - Gym - 1F,20",
        "level" : "8",
        "to" : "E,15,0,0"
    },
    "E,0,7,3"  : {
        // CAVE OF ORIGIN
        "name": "SOOTOPOLIS CITY - OUTSIDE - Cave Of Origin - 1F,10",
        "level" : "8",
        "to" : "E,24,37,0"
    },
    "E,0,7,4"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Left Side Top - 9,6",
        "level" : "8",
        "to" : "E,15,5,0",
        "connections" : {
            "E,0,7,1": true,
        }
    },
    "E,0,7,5"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Right Side Top - 2B,6",
        "level" : "8",
        "to" : "E,15,6,0",
        "connections" : {
            "E,0,7,0": true,
        }
    },
    "E,0,7,6"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Left Side Middle Top - 9,11",
        "level" : "8",
        "to" : "E,15,7,0",
        "connections" : {
            "E,0,7,1": true,
        }
    },
    "E,0,7,7"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Right Side Middle Top - 2C,11",
        "level" : "8",
        "to" : "E,15,8,0",
        "connections" : {
            "E,0,7,0": true,
        }
    },
    "E,0,7,8"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Left Side Middle Bottom - 9,1A",
        "level" : "8",
        "to" : "E,15,9,0",
        "connections" : {
            "E,0,7,1": true,
        }
    },
    "E,0,7,9"  : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Right Side Middle Right - 35,1C",
        "level" : "8",
        "to" : "E,15,10,0",
        "connections" : {
            "E,0,7,0": true,
        }
    },
    "E,0,7,10" : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Left Side Bottom - 8,23",
        "level" : "8",
        "to" : "E,15,11,0",
        "connections" : {
            "E,0,7,1": true,
        }
    },
    "E,0,7,11" : {
        "name": "SOOTOPOLIS CITY - OUTSIDE - Right Side Middle Left - 30,19",
        "level" : "8",
        "to" : "E,15,12,0",
        "connections" : {
            "E,0,7,0": true,
        }
    },
    "E,0,7,12" : {
        // E-READER HOUSE
        "name": "SOOTOPOLIS CITY - OUTSIDE - Right Side Bottom - 33,24",
        "level" : "8",
        "to" : "E,15,13,0",
        "connections" : {
            "E,0,7,0": true,
        }
    },
/* SOOTOPOLIS CITY - INT */
    "E,15,0,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - GYM - 8,19",
        "level": "8", 
        "to": "E,0,7,2",
        "grouped": ["E,15,0,1"],
        "groupMain" : true,
    },
    "E,15,0,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - GYM - 9,19",
        "level": "8", 
        "to": "E,0,7,2",
        "grouped": ["E,15,0,0"]
    },
    "E,15,2,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - PkCenter Door - 7,8",
        "level": "8", 
        "to": "E,0,7,0",
        "grouped": ["E,15,2,1"],
        "groupMain" : true,
        "connections" : {
            "E,15,2,2": true,
        }
    },
    "E,15,2,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - PkCenter Door - 6,8",
        "level": "8", 
        "to": "E,0,7,0",
        "grouped": ["E,15,2,0"]
    },
    "E,15,2,2" : {
        "name": "SOOTOPOLIS CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "8", 
        "to": "E,15,3,0",
        "connections" : {
            "E,15,2,0": true,
        }
    },
    "E,15,3,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "8",
        "ignore": "true", 
        "to": "E,15,2,2",
    },
    "E,15,5,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side top - 3,6",
        "level": "8", 
        "to": "E,0,7,4",
        "grouped": ["E,15,5,1"],
        "groupMain" : true,
    },
    "E,15,5,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side top - 4,6",
        "level": "8", 
        "to": "E,0,7,4",
        "grouped": ["E,15,5,0"]
    },
    "E,15,6,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side top - 3,6",
        "level": "8", 
        "to": "E,0,7,5",
        "grouped": ["E,15,6,1"],
        "groupMain" : true,
    },
    "E,15,6,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right side top - 4,6",
        "level": "8", 
        "to": "E,0,7,5",
        "grouped": ["E,15,6,0"]
    },
    "E,15,7,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side Middle top - 3,6",
        "level": "8", 
        "to": "E,0,7,6",
        "grouped": ["E,15,7,1"],
        "groupMain" : true,
    },
    "E,15,7,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side Middle top - 4,6",
        "level": "8", 
        "to": "E,0,7,6",
        "grouped": ["E,15,7,0"]
    },
    "E,15,8,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right side middle top - 3,6",
        "level": "8", 
        "to": "E,0,7,7",
        "grouped": ["E,15,8,1"],
        "groupMain" : true,
    },
    "E,15,8,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right side middle top - 4,6",
        "level": "8", 
        "to": "E,0,7,7",
        "grouped": ["E,15,8,0"]
    },
    "E,15,9,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side middle bottom - 3,6",
        "level": "8", 
        "to": "E,0,7,8",
        "grouped": ["E,15,9,1"],
        "groupMain" : true,
    },
    "E,15,9,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side middle bottom - 4,6",
        "level": "8", 
        "to": "E,0,7,8",
        "grouped": ["E,15,9,0"]
    },
    "E,15,10,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right side Middle Right - 3,6",
        "level": "8", 
        "to": "E,0,7,9",
        "grouped": ["E,15,10,1"],
        "groupMain" : true,
    },
    "E,15,10,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right side middle Right - 4,6",
        "level": "8", 
        "to": "E,0,7,9",
        "grouped": ["E,15,10,0"]
    },
    "E,15,11,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side bottom - 3,6",
        "level": "8", 
        "to": "E,0,7,10",
        "grouped": ["E,15,11,1"],
        "groupMain" : true,
    },
    "E,15,11,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Left side bottom - 4,6",
        "level": "8", 
        "to": "E,0,7,10",
        "grouped": ["E,15,11,0"]
    },
    "E,15,12,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right Side Middle Left- 3,6",
        "level": "8", 
        "to": "E,0,7,11",
        "grouped": ["E,15,12,1"],
        "groupMain" : true,
    },
    "E,15,12,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right Side Middle Left - 4,6",
        "level": "8", 
        "to": "E,0,7,11",
        "grouped": ["E,15,12,0"]
    },
    "E,15,13,0" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right Side Bottom - 3,6",
        "level": "8", 
        "to": "E,0,7,12",
        "grouped": ["E,15,13,1"],
        "groupMain" : true,
    },
    "E,15,13,1" : {
        "name": "SOOTOPOLIS CITY - INSIDE - Right Side Bottom - 4,6",
        "level": "8", 
        "to": "E,0,7,12",
        "grouped": ["E,15,13,0"]
    },
/* EVER GRANDE CITY - EXT */
    "E,0,8,0" : {
        // E4 Entrance way
        "name": "EVER GRANDE CITY - OUTSIDE - E4 Enterance - 12,5",
        "level": "9", 
        "to" : "E,16,10,0",
        "connections" : {
            "E,0,8,3": true
        }
    },
    "E,0,8,1" : {
        // PK
        "name": "EVER GRANDE CITY - OUTSIDE - PkCenter - 1B,30",
        "level": "9", 
        "to" : "E,16,12,0",
        "connections" : {
            "E,0,8,2": true,
            "E,0,5,6": "HOENN_SURF" 
        }
    },
    "E,0,8,2" : {
        //VICTORY ROAD Enterance
        "name": "EVER GRANDE CITY - OUTSIDE - Victory Road Enterance - 12,29",
        "level": "9", 
        "to" : "E,24,43,0",
        "connections" : {
            "E,0,8,1": true
        }
    },
    "E,0,8,3" : {
        //VICTORY ROAD Exit
        "name": "EVER GRANDE CITY - OUTSIDE - Victory Road Exit - 12,1B",
        "level": "9", 
        "to" : "E,24,43,1",
        "connections" : {
            "E,0,8,0": true
        }
    },
/* EVER GRANDE CITY - INT */
    "E,16,12,0" : {
        "name": "EVER GRANDE CITY - INSIDE - PkCenter Door - 7,8",
        "level": "9", 
        "to": "E,0,8,1",
        "grouped": ["E,16,12,1"],
        "groupMain" : true,
        "connections" : {
            "E,16,12,2": true,
        }
    },
    "E,16,12,1" : {
        "name": "EVER GRANDE CITY - INSIDE - PkCenter Door - 6,8",
        "level": "9", 
        "to": "E,0,8,1",
        "grouped": ["E,16,12,0"]
    },
    "E,16,12,2" : {
        "name": "EVER GRANDE CITY- INSIDE - PkCenter Stairs - 1,6",
        "level": "9", 
        "to": "E,16,13,0",
        "connections" : {
            "E,16,12,0": true,
        }
    },
    "E,16,13,0" : {
        "name": "EVER GRANDE CITY - INSIDE - PkCenter Upstairs - 1,6",
        "level": "9", 
        "to": "E,16,12,2",
    },
    "E,16,10,0" : {
        "name": "EVER GRANDE CITY - INSIDE - E4 Door - 7,8",
        "level": "9", 
        "to": "E,0,8,0",
        "grouped": ["E,16,10,1"],
        "groupMain" : true,
        "connections" : {
            "E,16,10,4": true,
        }
    },
    "E,16,10,1" : {
        "name": "EVER GRANDE CITY - INSIDE - E4 Door - 6,8",
        "level": "9", 
        "to": "E,0,8,0",
        "grouped": ["E,16,10,0"]
    },
    "E,16,10,4" : {
        "name": "EVER GRANDE CITY- INSIDE - E4 Stairs - 1,6",
        "level": "9", 
        "to": "E,16,14,0",
        "connections" : {
            "E,16,10,0": true,
        }
    },
    "E,16,14,0" : {
        "name": "EVER GRANDE CITY - INSIDE - E4 Upstairs - 1,6",
        "level": "9", 
        "to": "E,16,10,2",
    },
    "E,16,10,2" : {
        "name": "EVER GRANDE CITY - INSIDE - E4 Badge Door - 9,1",
        "level": "9", 
        "to": "E,16,9,0",
        "grouped": ["E,16,10,3"],
        "groupMain" : true,
    },
    "E,16,10,3" : {
        "name": "EVER GRANDE CITY - INSIDE -  E4 Badge Door - A,1",
        "level": "9", 
        "to": "E,16,9,0",
        "grouped": ["E,16,10,2"]
    },
// E4
    "E,16,0,0" : {
        "name": "E4 - INSIDE - Battle 1 Bottom - 6,D",
        "level": "9", 
        "to" : "E,16,9,1",
        "connections" : {
            "E,16,0,1": true
        }
    },
    "E,16,0,1" : {
        "name": "E4 - INSIDE - Battle 1 Top - 6,2",
        "level": "9", 
        "to" : "E,16,5,0",
    },
    "E,16,1,0" : {
        "name": "E4 - INSIDE - Battle 2 Bottom - 6,D",
        "level": "9", 
        "to" : "E,16,5,1",
        "connections" : {
            "E,16,1,1": true
        }
    },
    "E,16,1,1" : {
        "name": "E4 - INSIDE - Battle 2 Top - 6,2",
        "level": "9", 
        "to" : "E,16,6,0",
    },
    "E,16,2,0" : {
        "name": "E4 - INSIDE - Battle 3 Bottom - 6,D",
        "level": "9", 
        "to" : "E,16,6,1",
        "connections" : {
            "E,16,2,1": true
        }
    },
    "E,16,2,1" : {
        "name": "E4 - INSIDE - Battle 3 Top - 6,2",
        "level": "9", 
        "to" : "E,16,7,0",
    },
    "E,16,3,0" : {
        "name": "E4 - INSIDE - Battle 4 Bottom - 6,D",
        "level": "9", 
        "to" : "E,16,7,1",
        "connections" : {
            "E,16,3,1": true
        }
    },
    "E,16,3,1" : {
        "name": "E4 - INSIDE - Battle 4 Top - 6,2",
        "level": "9", 
        "to" : "E,16,8,0",
    },
    "E,16,4,0" : {
        "name": "E4 - INSIDE - Champ - 6,2",
        "level": "9", 
        "to" : "E,16,8,1",
    },
/* LITTLE ROOT TOWN - EXT */
    "E,0,9,0" : {
        // GIRL HOUSE
        "name": "LITTLEROOT TOWN - OUTSIDE - Girl House - E,8",
        "level": "1", 
        "to" : "E,1,2,1",
        "connections" : {
            "E,0,9,2": true
        }
    },
    "E,0,9,1" : {
        // BOY HOUSE
        "name": "LITTLEROOT TOWN - OUTSIDE - Boy House - 5,8",
        "level": "1", 
        "to" : "E,1,0,1",
        "connections" : {
            "E,0,9,2": true
        }
    },
    "E,0,9,2" : {
        // ELMS LAB
        "name": "LITTLEROOT TOWN - OUTSIDE - Birch Lab - 7,10",
        "level": "1", 
        "to" : "E,1,4,0",
        "connections" : {
            "E,0,10,2": true,
            "E,0,9,0": true,
            "E,0,9,1": true
        }
    },
/* LITTLE ROOT TOWN - INT */
    "E,1,0,0" : {
        "name": "LITTLEROOT TOWN - INSIDE - Boy House (downstairs) - 8,8",
        "level": "1", 
        "to": "E,0,9,1",
        "grouped": ["E,1,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,1,0,2": true
        }
    },
    "E,1,0,1" : {
        "name": "LITTLEROOT TOWN - INSIDE - Boy House (downstairs) - 9,8",
        "level": "1", 
        "to": "E,0,9,1",
        "grouped": ["E,1,0,0"]
    },
    "E,1,0,2" : {
        "name": "LITTLEROOT TOWN - INSIDE - Boy House (downstairs) (stairs) - 8,2",
        "level": "1", 
        "to": "E,1,1,0",
        "connections" : {
            "E,1,0,0": true
        }
    },
    "E,1,1,0" : {
        "name": "LITTLEROOT TOWN - INSIDE - Boy House (upstairs) (stairs) - 7,1",
        "level": "1", 
        "to": "E,1,0,2"
    },
    "E,1,2,0" : {
        "name": "LITTLEROOT TOWN - INSIDE - Girl House (downstairs) - 1,8",
        "level": "1", 
        "to": "E,0,9,0",
        "grouped": ["E,1,2,1"],
        "groupMain" : true,
        "connections" : {
            "E,1,2,2": true
        }
    },
    "E,1,2,1" : {
        "name": "LITTLEROOT TOWN - INSIDE - Girl House (downstairs) - 2,8",
        "level": "1", 
        "to": "E,0,9,0",
        "grouped": ["E,1,2,0"]
    },
    "E,1,2,2" : {
        "name": "LITTLEROOT TOWN - INSIDE - Girl House (downstairs) (stairs) - 2,2",
        "level": "1", 
        "to": "E,1,3,0",
        "connections" : {
            "E,1,2,0": true
        }
    },
    "E,1,3,0" : {
        "name": "LITTLEROOT TOWN - INSIDE - Girl House (upstairs) (stairs) - 1,1",
        "level": "1", 
        "to": "E,1,2,2"
    },
    "E,1,4,0" : {
        "name": "LITTLEROOT TOWN - INSIDE - Birch Lab - 6,C",
        "level": "1", 
        "to": "E,0,9,2",
        "grouped": ["E,1,4,1"],
        "groupMain" : true
    },
    "E,1,4,1" : {
        "name": "LITTLEROOT TOWN - INSIDE - Birch Lab - 7,C",
        "level": "1", 
        "to": "E,0,9,2",
        "grouped": ["E,1,4,0"]
    },
/* OLDALE TOWN - EXT */
    "E,0,10,0" : { 
        "name": "OLDALE TOWN - OUTSIDE - Left - 5,7",
        "level": "1", 
        "to" : "E,2,0,0",
        "connections" : {
            "E,0,10,2": true,
        }
    },
    "E,0,10,1" : { 
        "name": "OLDALE TOWN - OUTSIDE - Right - F,10",
        "level": "1", 
        "to" : "E,2,1,0",
        "connections" : {
            "E,0,10,2": true
        }
    },
    "E,0,10,2" : { 
        // PK
        "name": "OLDALE TOWN - OUTSIDE - PkCenter - 6,10",
        "level": "1", 
        "to" : "E,2,2,0",
        "connections" : {
            "E,0,0,3": false,
            "E,0,9,2": true,
            "E,0,10,0": true,
            "E,0,10,1": true,
            "E,0,10,3": true,
            "E,0,25,1": "HOENN_SURF",
            "E,0,0,3": "HOENN_POKEDEX",
        }
    },
    "E,0,10,3" : { 
        // MART
        "name": "OLDALE TOWN - OUTSIDE - Mart - E,6",
        "level": "1", 
        "to" : "E,2,4,0",
        "connections" : {
            "E,0,10,2": true,
        }
    },
/* OLDALE TOWN - INT */
    "E,2,0,0" : {
        "name": "OLDALE TOWN - INSIDE - Left - 3,8",
        "level": "1", 
        "to": "E,0,10,1",
        "grouped": ["E,2,0,1"],
        "groupMain" : true
    },
    "E,2,0,1" : {
        "name": "OLDALE TOWN - INSIDE - Left - 4,8",
        "level": "1", 
        "to": "E,0,10,0",
        "grouped": ["E,2,0,0"]
    },
    "E,2,1,0" : {
        "name": "OLDALE TOWN - INSIDE - Right - 3,7",
        "level": "1", 
        "to": "E,0,10,1",
        "grouped": ["E,2,1,1"],
        "groupMain" : true
    },
    "E,2,1,1" : {
        "name": "OLDALE TOWN - INSIDE - Right - 4,7",
        "level": "1", 
        "to": "E,0,10,1",
        "grouped": ["E,2,1,0"]
    },
    "E,2,2,0" : {
        // PK
        "name": "OLDALE TOWN - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to": "E,0,10,2",
        "grouped": ["E,2,2,1"],
        "groupMain" : true,
        "connections" : {
            "E,2,2,2": true
        }
    },
    "E,2,2,1" : {
        // PK
        "name": "OLDALE TOWN - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to": "E,0,10,2",
        "grouped": ["E,2,2,0"]
    },
    "E,2,2,2" : {
        // PK
        "name": "OLDALE TOWN - INSIDE - PkCenter (stairs) - 1,6",
        "level": "1", 
        "to": "E,2,3,0",
        "connections" : {
            "E,2,2,0": true
        }
    },
    "E,2,3,0" : {
        // PK (upstairs)
        "name": "OLDALE TOWN - INSIDE - PkCenter (upstairs) (stairs) - 1,6",
        "level": "1", 
        "to": "E,2,2,2",
        "ignore": true
    },
    "E,2,4,0" : {
        // MART
        "name": "OLDALE TOWN - INSIDE - Mart - 3,7",
        "level": "1", 
        "to": "E,0,10,3",
        "grouped": ["E,2,4,1"],
        "groupMain" : true
    },
    "E,2,4,1" : {
        // MART
        "name": "OLDALE TOWN - INSIDE - Mart - 4,7",
        "level": "1", 
        "to": "E,0,10,3",
        "grouped": ["E,2,4,0"]
    },
/* DEWFORD CITY - EXT */
    "E,0,11,0" : {
        "name": "DEWFORD TOWN - OUTSIDE - Fanclub (top left) - 3,3",
        "level": "2", 
        "to" : "E,3,4,0",
        "connections" : {
            "E,0,11,1": true
        }
    },
    "E,0,11,1" : {
        // PK
        "name": "DEWFORD TOWN - OUTSIDE - PkCenter - 2,A",
        "level": "2", 
        "to" : "E,3,1,0",
        "connections" : {
            "E,0,11,0": true,
            "E,0,11,2": true,
            "E,0,11,3": true,
            "E,0,11,4": true,
            "E,0,21,0": true,
            "E,0,19,0": "HOENN_SURF",
            "E,0,23,0": "HOENN_SURF",
            "E,0,24,0": "HOENN_SURF"
        }
    },
    "E,0,11,2" : {
        // GYM
        "name": "DEWFORD TOWN - OUTSIDE - GYM - 8,11",
        "level": "2", 
        "to" : "E,3,3,0",
        "connections" : {
            "E,0,11,1": true
        }
    },
    "E,0,11,3" : {
        "name": "DEWFORD TOWN - OUTSIDE - Fishing House (center) - 8,8",
        "level": "2", 
        "to" : "E,3,0,0",
        "connections" : {
            "E,0,11,1": true
        }
    },
    "E,0,11,4" : {
        "name": "DEWFORD TOWN - OUTSIDE - Bottom Right - 11,E",
        "level": "2", 
        "to" : "E,3,5,0",
        "connections" : {
            "E,0,11,1": true
        }
    },
/* DEWFORD CITY - INT */
    "E,3,0,0" : {
        "name": "DEWFORD TOWN - INSIDE - Bottom Right - 3,7",
        "level": "2", 
        "to" : "E,0,11,3",
        "grouped": ["E,3,0,1"],
        "groupMain" : true
    },
    "E,3,0,1" : {
        "name": "DEWFORD TOWN - INSIDE - Bottom Right - 4,7",
        "level": "2", 
        "to" : "E,0,11,3",
        "grouped": ["E,3,0,0"]
    },
    "E,3,1,0" : {
        "name": "DEWFORD TOWN - INSIDE - PkCenter - 7,8",
        "level": "2", 
        "to" : "E,0,11,1",
        "grouped": ["E,3,1,1"],
        "groupMain" : true,
        "connections" : {
            "E,3,1,2": true
        }
    },
    "E,3,1,1" : {
        "name": "DEWFORD TOWN - INSIDE - PkCenter - 6,8",
        "level": "2", 
        "to" : "E,0,11,1",
        "grouped": ["E,3,1,0"]
    },
    "E,3,1,2" : {
        "name": "DEWFORD TOWN - INSIDE - PkCenter (Stairs) - 7,8",
        "level": "2", 
        "to" : "E,3,2,0",
        "connections" : {
            "E,3,1,0": true
        }
    },
    "E,3,2,0" : {
        "name": "DEWFORD TOWN - INSIDE - PkCenter (upStairs) - 1,6",
        "level": "2", 
        "to" : "E,3,1,2",
        "ignore": true
    },
    "E,3,3,0" : {
        "name": "DEWFORD TOWN - INSIDE - GYM - 5,1B",
        "level": "2", 
        "to" : "E,0,11,2",
        "grouped": ["E,3,3,1"],
        "groupMain" : true
    },
    "E,3,3,1" : {
        "name": "DEWFORD TOWN - INSIDE - GYM - 6,1B",
        "level": "2", 
        "to" : "E,0,11,2",
        "grouped": ["E,3,3,0"]
    },
    "E,3,4,0" : {
        "name": "DEWFORD TOWN - INSIDE - Fanclub (top left)  - 5,8",
        "level": "2", 
        "to" : "E,0,11,0",
        "grouped": ["E,3,4,1"],
        "groupMain" : true
    },
    "E,3,4,1" : {
        "name": "DEWFORD TOWN - INSIDE - Fanclub (top left) - 6,8",
        "level": "2", 
        "to" : "E,0,11,0",
        "grouped": ["E,3,4,0"]
    },
    "E,3,5,0" : {
        "name": "DEWFORD TOWN - INSIDE - Fishing House (center) - 3,8",
        "level": "2", 
        "to" : "E,0,11,4",
        "grouped": ["E,3,5,1"],
        "groupMain" : true
    },
    "E,3,5,1" : {
        "name": "DEWFORD TOWN - INSIDE - Fishing House (center) - 4,8",
        "level": "2", 
        "to" : "E,0,11,4",
        "grouped": ["E,3,5,0"]
    },
/* LAVARIDGE TOWN - EXT */
    "E,0,12,0" : {
        // HERB SHOP
        "name": "LAVARIDGE TOWN - OUTSIDE - Herb Shop - C,F",
        "level": "4", 
        "to" : "E,4,0,0",
        "connections" : {
            "E,0,12,3": true
        }
    },
    "E,0,12,1" : {
        // GYM
        "name": "LAVARIDGE TOWN - OUTSIDE - GYM - C,F",
        "level": "4", 
        "to" : "E,4,1,0",
        "connections" : {
            "E,0,12,3": true
        }
    },
    "E,0,12,2" : {
        // MART
        "name": "LAVARIDGE TOWN - OUTSIDE - MART - F,5",
        "level": "4", 
        "to" : "E,4,4,0",
        "connections" : {
            "E,0,12,3": true
        }
    },
    "E,0,12,3" : {
        // PK
        "name": "LAVARIDGE TOWN - OUTSIDE - PkCenter - 9,6",
        "level": "4", 
        "to" : "E,4,5,0",
        "connections" : {
            "E,0,12,0": true,
            "E,0,12,1": true,
            "E,0,12,2": true,
            "E,0,12,4": true,
            "E,0,27,2": true
        }
    },
    "E,0,12,4" : {
        "name": "LAVARIDGE TOWN - OUTSIDE - Bottom Right - 10,F",
        "level": "4", 
        "to" : "E,4,3,0",
        "connections" : {
            "E,0,12,3": true
        }
    },
    "E,0,12,5" : {
        // PK (back)
        "name": "LAVARIDGE TOWN - OUTSIDE - PkCenter Back - 9,2",
        "level": "4", 
        "to" : "E,4,5,3"
    },
/* LAVARIDGE TOWN - INT */
    "E,4,0,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - Flower Shop - 3,7",
        "level": "4", 
        "to" : "E,0,12,0",
        "grouped": ["E,4,0,1"],
        "groupMain" : true
    },
    "E,4,0,1" : {
        "name": "LAVARIDGE TOWN - INSIDE - Flower Shop - 4,7",
        "level": "4", 
        "to" : "E,0,12,0",
        "grouped": ["E,4,0,0"]
    },
    "E,4,1,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - GYM - D,12",
        "level": "4", 
        "to" : "E,0,12,1",
        "grouped": ["E,4,1,1"],
        "groupMain" : true
    },
    "E,4,1,1" : {
        "name": "LAVARIDGE TOWN - INSIDE - GYM - E,12",
        "level": "4", 
        "to" : "E,0,12,1",
        "grouped": ["E,4,1,0"]
    },
    "E,4,3,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - Bottom Right - 3,7",
        "level": "4", 
        "to" : "E,0,12,4",
        "grouped": ["E,4,3,1"],
        "groupMain" : true
    },
    "E,4,3,1" : {
        "name": "LAVARIDGE TOWN - INSIDE - Bottom Right - 4,7",
        "level": "4", 
        "to" : "E,0,12,4",
        "grouped": ["E,4,3,0"]
    },
    "E,4,4,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - Mart - 3,7",
        "level": "4", 
        "to" : "E,0,12,2",
        "grouped": ["E,4,4,1"],
        "groupMain" : true
    },
    "E,4,4,1" : {
        "name": "LAVARIDGE TOWN - INSIDE - Mart - 4,7",
        "level": "4", 
        "to" : "E,0,12,2",
        "grouped": ["E,4,4,0"]
    },
    "E,4,5,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "4", 
        "to" : "E,0,12,3",
        "grouped": ["E,4,5,1"],
        "groupMain" : true,
        "connections" : {
            "E,4,5,2": true,
            "E,4,5,3": true,
        }
    },
    "E,4,5,1" : {
        "name": "LAVARIDGE TOWN - INSIDE - PkCenter Enterance - 6,8",
        "level": "4", 
        "to" : "E,0,12,3",
        "grouped": ["E,4,5,0"]
    },
    "E,4,5,2" : {
        "name": "LAVARIDGE TOWN - INSIDE - PkCenter Stairs - 1,6",
        "level": "4", 
        "to" : "E,4,6,0",
        "connections" : {
            "E,4,5,0": true,
            "E,4,5,3": true,
        }
    },
    "E,4,5,3" : {
        "name": "LAVARIDGE TOWN - INSIDE - PkCenter Back - 2,1",
        "level": "4", 
        "to" : "E,0,12,5",
        "connections" : {
            "E,4,5,0": true,
            "E,4,5,2": true,
        }
    },
    "E,4,6,0" : {
        "name": "LAVARIDGE TOWN - INSIDE - PkCenter Upstairs - 1,6",
        "level": "4", 
        "ignore": "true",
        "to" : "E,4,5,2"
    },
/* FALLARBOR TOWN - EXT */
    "E,0,13,0" : {
        // MART
        "name": "FALLARBOR TOWN - OUTSIDE - MART - F,F",
        "level": "4", 
        "to" : "E,5,0,0",
        "connections" : {
            "E,0,13,2": true
        }
    },
    "E,0,13,1" : {
        // BATTLE HALL
        "name": "FALLARBOR TOWN - OUTSIDE - Battle Hall - 8,7",
        "level": "4", 
        "to" : "E,5,1,0",
        "connections" : {
            "E,0,13,2": true
        }
    },
    "E,0,13,2" : {
        // PK
        "name": "FALLARBOR TOWN - OUTSIDE - PkCenter - E,7",
        "level": "4", 
        "to" : "E,5,4,0",
        "connections" : {
            "E,0,13,0": true,
            "E,0,13,1": true,
            "E,0,13,3": true,
            "E,0,13,4": true,
            "E,0,28,0": true,
            "E,0,26,2": true,
            "E,0,27,5": true,
            "E,0,29,0": true,
            "E,0,29,1": true,
            "E,0,29,2": true
        }
    },
    "E,0,13,3" : {
        "name": "FALLARBOR TOWN - OUTSIDE - Bottom House - 6,11",
        "level": "4", 
        "to" : "E,5,6,0",
        "connections" : {
            "E,0,13,2": true
        }
    },
    "E,0,13,4" : {
        "name": "FALLARBOR TOWN - OUTSIDE - Move Relearner - 1,6",
        "level": "4", 
        "to" : "E,5,7,0",
        "connections" : {
            "E,0,13,2": true
        }
    },
/* FALLARBOR TOWN - INT */
    "E,5,0,0" : {
        "name": "FALLARBOR TOWN - INSIDE - Mart - 3,7",
        "level": "4", 
        "to": "E,0,13,0",
        "grouped": ["E,5,0,1"],
        "groupMain" : true
    },
    "E,5,0,1" : {
        "name": "FALLARBOR TOWN - INSIDE - Mart - 3,7",
        "level": "4", 
        "to": "E,0,13,0",
        "grouped": ["E,5,0,0"]
    },
    "E,5,1,0" : {
        "name": "FALLARBOR TOWN - INSIDE - Battle Hall - 6,9",
        "level": "4",
        "ignore": true,
        "to": "E,0,13,1",
        "grouped": ["E,5,1,1"],
        "groupMain" : true
    },
    "E,5,1,1" : {
        "name": "FALLARBOR TOWN - INSIDE - Battle Hall - 7,9",
        "level": "4", 
        "ignore": true,
        "to": "E,0,13,1",
        "grouped": ["E,5,1,0"]
    },
    "E,5,4,0" : {
        "name": "FALLARBOR TOWN - INSIDE - PkCenter Enterance - 6,8",
        "level": "4",
        "to": "E,0,13,2",
        "grouped": ["E,5,4,1"],
        "groupMain" : true,
        "connections" : {
            "E,5,4,2": true
        }
    },
    "E,5,4,1" : {
        "name": "FALLARBOR TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "4", 
        "to": "E,0,13,2",
        "grouped": ["E,5,4,0"]
    },
    "E,5,4,2" : {
        "name": "FALLARBOR TOWN - INSIDE - PkCenter Stairs - 1,6",
        "level": "4", 
        "to": "E,5,5,0",
        "connections" : {
            "E,5,4,0": true
        }
    },
    "E,5,4,0" : {
        "name": "FALLARBOR TOWN - INSIDE - PkCenter Upstairs Stairs - 1,6",
        "level": "4",
        "ignore": true, 
        "to": "E,5,4,2"
    },
    "E,5,6,0" : {
        "name": "FALLARBOR TOWN - INSIDE - Bottom House - 3,7",
        "level": "4", 
        "to": "E,0,13,3",
        "grouped": ["E,5,6,1"],
        "groupMain" : true
    },
    "E,5,6,1" : {
        "name": "FALLARBOR TOWN - INSIDE - Bottom House - 4,7",
        "level": "4", 
        "to": "E,0,13,3",
        "grouped": ["E,5,6,0"]
    },
    "E,5,7,0" : {
        "name": "FALLARBOR TOWN - INSIDE - Move Relearner - 3,7",
        "level": "4", 
        "to": "E,0,13,4",
        "grouped": ["E,5,7,1"],
        "groupMain" : true
    },
    "E,5,7,1" : {
        "name": "FALLARBOR TOWN - INSIDE - Move Relearner  - 4,7",
        "level": "4", 
        "to": "E,0,13,4",
        "grouped": ["E,5,7,0"]
    },
/* VERDANTURF TOWN - EXT */
    "E,0,14,0" : {
        // BATTLE HALL
        "name": "VERDANTURF TOWN - OUTSIDE - Battle Hall - 3,7",
        "to" : "E,6,0,0",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
    "E,0,14,1" : {
        // MART
        "name": "VERDANTURF TOWN - OUTSIDE - Mart - C,3",
        "to" : "E,6,3,0",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
    "E,0,14,2" : {
        // PK
        "name": "VERDANTURF TOWN - OUTSIDE - PkCenter - 10,3",
        "to" : "E,6,4,0",
        "level": "3", 
        "connections" : {
            "E,0,14,0": true,
            "E,0,14,1": true,
            "E,0,14,3": true,
            "E,0,14,4": true,
            "E,0,14,5": true,
            "E,0,14,6": true,
            "E,0,32,0": true,
            "E,2,0,1": true
        }
    },
    "E,0,14,3" : {
        "name": "VERDANTURF TOWN - OUTSIDE - Center House - A,E",
        "to" : "E,6,6,0",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
    "E,0,14,4" : {
        //RUSTURF TUNNEL (left exit)
        "name": "VERDANTURF TOWN - OUTSIDE - Rusturf Tunnel Exit - 8,1",
        "to" : "E,24,4,1",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
    "E,0,14,5" : {
        "name": "VERDANTURF TOWN - OUTSIDE - Left House - 1,E",
        "to" : "E,6,7,0",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
    "E,0,14,6" : {
        "name": "VERDANTURF TOWN - OUTSIDE - Right House - 11,F",
        "to" : "E,6,8,0",
        "level": "3", 
        "connections" : {
            "E,0,14,2": true
        }
    },
/* VERDANTURF TOWN - INT */
    "E,6,0,0" : {
        "name": "VERDANTURF TOWN - INSIDE - Battle Hall - 6,9",
        "level": "3", 
        "to" : "E,0,14,0",
        "ignore": true,
        "grouped": ["E,6,0,1"],
        "groupMain" : true
    },
    "E,6,0,1" : {
        "name": "VERDANTURF TOWN - INSIDE - Battle Hall - 7,9",
        "level": "3", 
        "ignore": true,
        "to" : "E,0,14,0",
        "grouped": ["E,6,0,0"]
    },
    "E,6,3,0" : {
        "name": "VERDANTURF TOWN - INSIDE - Mart - 3,7",
        "level": "3", 
        "to" : "E,0,14,1",
        "grouped": ["E,6,3,1"],
        "groupMain" : true
    },
    "E,6,3,1" : {
        "name": "VERDANTURF TOWN - INSIDE - Mart - 4,7",
        "level": "3", 
        "to" : "E,0,14,1",
        "grouped": ["E,6,3,0"]
    },
    "E,6,4,0" : {
        "name": "VERDANTURF TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "3", 
        "to" : "E,0,14,2",
        "grouped": ["E,6,4,1"],
        "groupMain" : true,
        "connections" : {
            "E,6,4,2": true
        }
    },
    "E,6,4,1" : {
        "name": "VERDANTURF TOWN - INSIDE - PkCenter Enterance - 8,8",
        "level": "3", 
        "to" : "E,0,14,2",
        "grouped": ["E,6,4,0"]
    },
    "E,6,4,2" : {
        "name": "VERDANTURF TOWN - INSIDE - PkCenter Stairs - 1,6",
        "level": "3", 
        "to" : "E,6,5,0",
        "connections" : {
            "E,6,4,0": true
        }
    },
    "E,6,5,0" : {
        "name": "VERDANTURF TOWN - INSIDE - PkCenter Upstairs - 1,6",
        "level": "3", 
        "ignore": true,
        "to" : "E,6,4,2",
    },
    "E,6,6,0" : {
        "name": "VERDANTURF TOWN - INSIDE - Center House - 7,7",
        "level": "3", 
        "to" : "E,0,14,3",
        "grouped": ["E,6,6,1"],
        "groupMain" : true
    },
    "E,6,6,1" : {
        "name": "VERDANTURF TOWN - INSIDE - Center House - 8,7",
        "level": "3", 
        "to" : "E,0,14,3",
        "grouped": ["E,6,6,0"]
    },
    "E,6,7,0" : {
        "name": "VERDANTURF TOWN - INSIDE - Left House - 3,7",
        "level": "3", 
        "to" : "E,0,14,5",
        "grouped": ["E,6,7,1"],
        "groupMain" : true
    },
    "E,6,7,1" : {
        "name": "VERDANTURF TOWN - INSIDE - Left House - 4,7",
        "level": "3", 
        "to" : "E,0,14,5",
        "grouped": ["E,6,7,0"]
    },
    "E,6,8,0" : {
        "name": "VERDANTURF TOWN - INSIDE - Right House - 3,8",
        "level": "3", 
        "to" : "E,0,14,6",
        "grouped": ["E,6,8,1"],
        "groupMain" : true
    },
    "E,6,8,1" : {
        "name": "VERDANTURF TOWN - INSIDE - Right House - 4,8",
        "level": "3", 
        "to" : "E,0,14,6",
        "grouped": ["E,6,8,0"]
    },
/* PACIFIDLOG TOWN - EXT */
    "E,0,15,0" : {
        // PK
        "name": "PACIFIDLOG TOWN - OUTSIDE - PkCenter - 8,F",
        "level": "8", 
        "to" : "E,7,0,0",
        "connections": {
            "E,0,15,1": true,
            "E,0,15,2": true,
            "E,0,15,3": true,
            "E,0,15,4": true,
            "E,0,15,5": true,
            "E,0,5,6": "HOENN_SURF",
            "E,0,1,0": "HOENN_SURF"
        }
    },
    "E,0,15,1" : {
        "name": "PACIFIDLOG TOWN - OUTSIDE - Top Right - 10,D",
        "level": "8", 
        "to" : "E,7,2,0",
        "connections": {
            "E,0,15,0": true,
        }
    },
    "E,0,15,2" : {
        "name": "PACIFIDLOG TOWN - OUTSIDE - Bottom Left - 3,16",
        "level": "8", 
        "to" : "E,7,3,0",
        "connections": {
            "E,0,15,0": true,
        }
    },
    "E,0,15,3" : {
        "name": "PACIFIDLOG TOWN - OUTSIDE - Bottom - C,18",
        "level": "8", 
        "to" : "E,7,4,0",
        "connections": {
            "E,0,15,0": true,
        }
    },
    "E,0,15,4" : {
        "name": "PACIFIDLOG TOWN - OUTSIDE - Top Left - 2,C",
        "level": "8", 
        "to" : "E,7,5,0",
        "connections": {
            "E,0,15,0": true,
        }
    },
    "E,0,15,5" : {
        "name": "PACIFIDLOG TOWN - OUTSIDE - Bottom Right - 11,15",
        "level": "8", 
        "to" : "E,7,6,0",
        "connections": {
            "E,0,15,0": true,
        }
    },
/* PACIFIDLOG TOWN - INT */
    "E,7,0,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "8", 
        "to" : "E,0,15,0",
        "grouped": ["E,7,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,7,0,2": true
        }
    },
    "E,7,0,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - PkCenter Enterance - 7,8",
        "level": "8", 
        "to" : "E,0,15,0",
        "grouped": ["E,7,0,0"]
    },
    "E,7,0,2" : {
        "name": "PACIFIDLOG TOWN - INSIDE - PkCenter Stairs - 1,6",
        "level": "8", 
        "to" : "E,7,1,0",
        "connections" : {
            "E,7,0,0": true
        }
    },
    "E,7,1,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - PkCenter Upstairs - 1,6",
        "level": "8", 
        "to" : "E,7,0,2",
    },
    "E,7,2,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Top Right - 4,8",
        "level": "8", 
        "to" : "E,0,15,1",
        "grouped": ["E,7,2,1"],
        "groupMain" : true,
    },
    "E,7,2,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Top Right - 5,8",
        "level": "8", 
        "to" : "E,0,15,1",
        "grouped": ["E,7,2,0"]
    },
    "E,7,3,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom Left - 4,8",
        "level": "8", 
        "to" : "E,0,15,2",
        "grouped": ["E,7,3,1"],
        "groupMain" : true,
    },
    "E,7,3,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom Left - 5,8",
        "level": "8", 
        "to" : "E,0,15,2",
        "grouped": ["E,7,3,0"]
    },
    "E,7,4,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom - 4,8",
        "level": "8", 
        "to" : "E,0,15,3",
        "grouped": ["E,7,4,1"],
        "groupMain" : true,
    },
    "E,7,4,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom - 5,8",
        "level": "8", 
        "to" : "E,0,15,3",
        "grouped": ["E,7,4,0"]
    },
    "E,7,5,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Top Left - 4,8",
        "level": "8", 
        "to" : "E,0,15,4",
        "grouped": ["E,7,5,1"],
        "groupMain" : true,
    },
    "E,7,5,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Top Left - 5,8",
        "level": "8", 
        "to" : "E,0,15,4",
        "grouped": ["E,7,5,0"]
    },
    "E,7,6,0" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom Right - 4,8",
        "level": "8", 
        "to" : "E,0,15,5",
        "grouped": ["E,7,6,1"],
        "groupMain" : true,
    },
    "E,7,6,1" : {
        "name": "PACIFIDLOG TOWN - INSIDE - Bottom Right - 5,8",
        "level": "8", 
        "to" : "E,0,15,5",
        "grouped": ["E,7,6,0"]
    },
/* ROUTE 104 - OUSIDE */ 
    "E,0,19,0" : {
        "name": "ROUTE 104 - OUSIDE - MR BRINEYS (boat guy) - 11,32",
        "level" : "1",
        "to" : "E,17,0,0",
        "connections" : {
            "E,0,0,1": true,
            "E,0,0,3": true,
            "E,0,19,4": true,
            "E,0,11,1": "HOENN_SURF"
        }
    },
    "E,0,19,1" : {
        "name": "ROUTE 104 - OUSIDE - Flower Shop - 5,12",
        "level" : "1",
        "to" : "E,17,1,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,19,2" : {
        "name": "ROUTE 104 - OUSIDE - Woods (RUSTBORO side) - A,1E",
        "level" : "1",
        "to" : "E,24,11,0",
        "grouped" : ["E,0,19,3"],
        "groupMain" : true,
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,19,3" : {
        "name": "ROUTE 104 - OUSIDE - Woods (RUSTBORO side) - B,1E",
        "level" : "1",
        "to" : "E,24,11,1",
        "grouped" : ["E,0,19,2"]
    },
    "E,0,19,4" : {
        "name": "ROUTE 104 - OUSIDE - Woods (PETALBURG side) - A,26",
        "level" : "1",
        "to" : "E,24,11,2",
        "grouped" : ["E,0,19,5"],
        "groupMain" : true,
        "connections" : {
            "E,0,0,1": true,
            "E,0,0,3": true,
            "E,0,19,0": true
        }
    },
    "E,0,19,5" : {
        "name": "ROUTE 104 - OUSIDE - Woods (PETALBURG side) - B,26",
        "level" : "1",
        "to" : "E,24,11,3",
        "grouped" : ["E,0,19,4"]
    },
    "E,0,19,6" : {
        "name": "ROUTE 104 - OUSIDE - Woods (PETALBURG side) (Up ledge) - 20,2A",
        "level" : "1",
        "to" : "E,24,11,4",
        "grouped" : ["E,0,19,7"],
        "groupMain" : true,
        "connections" : {
            "E,0,0,1": true,
            "E,0,0,3": true,
            "E,0,19,0": true,
            "E,0,19,4": true,
        }
    },
    "E,0,19,7" : {
        "name": "ROUTE 104 - OUSIDE - Woods (PETALBURG side) (Up ledge) - 21,2A",
        "level" : "1",
        "to" : "E,24,11,5",
        "grouped" : ["E,0,19,6"]
    },
/* ROUTE 104 - INSIDE */ 
    "E,17,0,0" : {
        "name": "ROUTE 104 - INSIDE - MR BRINEYS (boat guy) - 5,8",
        "level" : "1",
        "to" : "E,0,19,0",
        "grouped" : ["E,17,0,1"],
        "groupMain" : true
    },
    "E,17,0,1" : {
        "name": "ROUTE 104 - INSIDE - MR BRINEYS (boat guy) - 6,8",
        "level" : "1",
        "to" : "E,0,19,0",
        "grouped" : ["E,17,0,0"]
    },
    "E,17,1,0" : {
        "name": "ROUTE 104 - INSIDE - Flower Shop - 2,8",
        "level" : "1",
        "to" : "E,0,19,1",
        "grouped" : ["E,17,1,1"],
        "groupMain" : true
    },
    "E,17,1,1" : {
        "name": "ROUTE 104 - INSIDE - Flower Shop - 3,8",
        "level" : "1",
        "to" : "E,0,19,1",
        "grouped" : ["E,17,1,0"],
    },
/* PETALBUG WOODS */
    "E,24,11,0" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (RUSTBORO side) - E,5",
        "level" : "1",
        "to" : "E,0,19,2",
        "grouped" : ["E,24,11,1"],
        "groupMain" : true,
        "connections": {
            "E,24,11,4": true,
            "E,24,11,2": true
        }
    },
    "E,24,11,1" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (RUSTBORO side) - F,5",
        "level" : "1",
        "to" : "E,0,19,3",
        "grouped" : ["E,24,11,0"]
    },
    "E,24,11,2" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (PETALBURG side) - 10,26",
        "level" : "1",
        "to" : "E,0,19,4",
        "grouped" : ["E,24,11,3"],
        "groupMain" : true,
        "connections": {
            "E,24,11,0": true,
            "E,24,11,4": true
        }
    },
    "E,24,11,3" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (PETALBURG side) - 11,26",
        "level" : "1",
        "to" : "E,0,19,5",
        "grouped" : ["E,24,11,2"]
    },
    "E,24,11,4" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (PETALBURG side) (right) - 24,26",
        "level" : "1",
        "to" : "E,0,19,6",
        "grouped" : ["E,24,11,5"],
        "groupMain" : true,
        "connections": {
            "E,24,11,0": true,
            "E,24,11,2": true
        }
    },
    "E,24,11,5" : {
        "name": "PETALBUG WOODS - OUSIDE - Woods (PETALBURG side) (right) - 25,26",
        "level" : "1",
        "to" : "E,0,19,7",
        "grouped" : ["E,24,11,4"]
    },
/* ROUTE 116 - OUTSIDE */
    "E,0,31,0" : {
        "name": "ROUTE 116 - OUTSIDE - Rusturf tunnel enterance (right) - 2f,8",
        "level" : "1",
        "to" : "E,24,4,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,31,1" : {
        "name": "ROUTE 116 - OUTSIDE - Tunnelers Rest House - 26,8",
        "level" : "1",
        "to" : "E,21,0,0",
        "connections": {
            "E,0,3,3": true
        }
    },
    "E,0,31,2" : {
        "name": "ROUTE 116 - OUTSIDE - Rusturf tunnel enterance (center) - 41,A",
        "to" : "E,24,4,2",
        "level" : "3"
    },
    "E,0,31,3" : {
        // TERRA CAVE
        "name": "ROUTE 116 - OUTSIDE - TERRA Cave 1",
        "to" : "E,24,104,0",
        "ignore": true
    },
    "E,0,31,4" : {
        // TERRA CAVE
        "name": "ROUTE 116 - OUTSIDE - TERRA Cave 2",
        "to" : "E,24,104,0",
        "ignore": true
    },
/* ROUTE 116 - INSIDE */
    "E,21,0,0" : {
        "name": "ROUTE 116 - INSIDE - Tunnelers Rest House - 4,8",
        "level" : "1",
        "to" : "E,0,31,1",
        "grouped" : ["E,21,0,1"],
        "groupMain" : true
    },
    "E,21,0,1" : {
        "name": "ROUTE 116 - INSIDE - Tunnelers Rest House - 5,8",
        "level" : "1",
        "to" : "E,0,31,1",
        "grouped" : ["E,21,0,0"]
    },
/* RUSTURF TUNNEL */    
    "E,24,4,0" : {
        "name": "RUSTURF TUNNEL - INSIDE - Left - 4,A",
        "level" : "1",
        "to": "E,0,31,0",
        "connections": {
            "E,24,4,1": "HOENN_ROCK_SMASH"
        }
    },
    "E,24,4,1" : {
        "name": "RUSTURF TUNNEL - INSIDE - Right - 1D,10",
        "to": "E,0,14,4",
        "level" : "3",
        "connections": {
            "E,24,4,2": true,
            "E,24,4,0": "HOENN_ROCK_SMASH"
        }
    },
    "E,24,4,2" : {
        "name": "RUSTURF TUNNEL - INSIDE - Centre - 12,14",
        "to": "E,0,31,2",
        "level" : "3",
        "connections": {
            "E,24,4,1": true
        }
    },
/* ROUTE 103 */ 
    "E,0,18,0" : {
        "name": "RUSTURF TUNNEL - OUTSIDE - Altering Cave - 2D,6",
        "to" : "E,24,106,0"
        // Connects surf to oldale  normally to trick master
    },
/* ALTERING CAVE */
    "E,24,106,0" : {
        "name" : "ALTERING CAVE - INSIDE - Enterance - 12,16",
        "to" : "E,0,18,0"
    },
/* ROUTE 105 */
    "E,0,20,0" : {
        "name" : "ROUTE 105 - OUTSIDE - Island Cave Enterance - 9,14",
        "to" : "E,24,67,0"
    },
/* ISLAND CAVE */
    "E,24,67,0" : {
        "name": "ISLAND CAVE - INSIDE - Enterance - 8,1D",
        "to" : "E,0,20,0",
        "level": "6"
    },
    "E,24,67,1" : {
        "name": "ISLAND CAVE - INSIDE - Walk round left / stand still door - 8,14",
        "to" : "E,24,67,2",
        "level": "6"
    },
    "E,24,67,2" : {
        "name": "ISLAND CAVE - INSIDE - Regie Ice - 8,B",
        "to" : "E,24,67,1",
        "level": "6" 
    },
/* ROUTE 106 */         
    "E,0,21,0" : {
        "name" : "ROUTE 106 - OUTSIDE - Granite Cave - 30,10",
        "to" : "E,24,7,0",
        "level": "2", 
        "connections" : {
            "E,0,0,3": true,
        }
    },
/* GRANITE CAVE */  // MORE BIKE LOCKED CONNECTIONS
//F1
    "E,24,7,0" : {
        "name" : "GRANITE CAVE - INSIDE - F1 Enterance - 25,C",
        "to" : "E,0,21,0",
        "level": "2", 
        "connections" : {
            "E,24,7,2": true
        }
    },
    "E,24,7,1" : {
        "name" : "GRANITE CAVE - INSIDE - F1 Right Ladder - 23,3",
        "to" : "E,24,8,0",
        "level": "2", 
        "connections" : {
            "E,24,7,0": true,
            "E,24,7,3": true
        }
    },
    "E,24,7,2" : {
        "name" : "GRANITE CAVE - INSIDE - F1 Left Ladder - 11,B",
        "to" : "E,24,8,1",
        "level": "2", 
        "connections" : {
            "E,24,7,0": true
        }
    },
    "E,24,7,3" : {
        "name" : "GRANITE CAVE - INSIDE - F1 To Steven - 11,B",
        "to" : "E,24,10,0",
        "level": "2", 
        "connections" : {
            "E,24,7,0": true,
            "E,24,7,1": true
        }
    },
// F2
    "E,24,8,0" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Middle Left ladder - 19,D",
        "to" : "E,24,7,1",
        "level" : "2",
        "connections" : {
            "E,24,8,2": true
        }
    },
    "E,24,8,1" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Bottom Left Ladder - 4,15",
        "to" : "E,24,7,2",
        "level" : "2",
        "connections" : {
            "E,24,8,3": true,
            "E,24,8,4": "BIKE"
        }
    },
    "E,24,8,2" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Middle Right Ladder - 1D,D",
        "to" : "E,24,7,3",
        "level" : "2",
        "connections" : {
            "E,24,8,0": true
        }
    },
    "E,24,8,3" : {
        "name" : "GRANITE CAVE - INSIDE - F2 - Bottom Right Ladder - 1C,15",
        "to" : "E,24,9,1",
        "level" : "2",
        "connections" : {
            "E,24,8,1": true
        }
    },
    "E,24,8,4" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Top Left Ladder - 8,5",
        "to" : "E,24,9,2",
        "level" : "2",
        "connections" : {
            "E,24,8,1": true,
            "E,24,9,2": true,
            "E,24,8,5": "BIKE",
            "E,24,8,6": "BIKE"
        }
    },
    "E,24,8,5" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Top Center Ladder - C,3",
        "to" : "E,24,9,3",
        "level" : "2",
        "connections" : {
            "E,24,9,3": true,
            "E,24,8,4": "BIKE"
        }
    },
    "E,24,8,6" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Top Right Ladder - 1D,2",
        "to" : "E,24,9,4",
        "level" : "2",
        "connections" : {
            "E,24,9,3": true,
            "E,24,8,4": "BIKE"
        }
    },
// F3
    "E,24,9,0" : {
        "name" : "GRANITE CAVE - INSIDE - F3 Bottom Section Higher- 1D,D",
        "to" : "E,24,8,2",
        "level" : "2",
        "connections" : {
            "E,24,9,1": true
        }
    },
    "E,24,9,1" : {
        "name" : "GRANITE CAVE - INSIDE - F3 Bottom Section Lower- 1C,15",
        "to" : "E,24,8,3",
        "level" : "2",
        "connections" : {
            "E,24,9,0": true
        }
    },
    "E,24,9,2" : {
        "name" : "GRANITE CAVE - INSIDE - F3 Top Section Left - 8,5",
        "to" : "E,24,8,4",
        "level" : "2"
    },
    "E,24,9,3" : {
        "name" : "GRANITE CAVE - INSIDE - F3 Top Section Middle - C,3",
        "to" : "E,24,8,5",
        "level" : "2",
        "connections" : {
            "E,24,9,2": true
        }
    },
    "E,24,9,4" : {
        "name" : "GRANITE CAVE - INSIDE - F3 Top Section Right - 1D,2",
        "to" : "E,24,8,6",
        "level" : "2"
    },
// F4  
    "E,24,10,0" : {
        "name" : "GRANITE CAVE - INSIDE - F4 Steven Room - 7,3",
        "to" : "E,24,7,3",
        "level" : "2"
    },
/* ROUTE 108 */
    "E,0,23,0" : {
        "name" : "ROUTE 108 - OUTSIDE - Abandoned Ship enterance - 1D,6",
        "to" : "E,24,54,0"
    },
/* ROUTE 109 - EXT */
    "E,0,24,0" : {
        "name" : "ROUTE 109 - OUTSIDE - Beach Hut - C,5",
        "to" : "E,28,0,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true,
            "E,0,11,1": "HOENN_SURF"
        }
    },
/* ROUTE 109 - INT */
    "E,28,0,0" : {
        "name" : "ROUTE 109 - INSIDE - Beach Hut - 6,9",
        "to" : "E,0,24,0",
        "grouped": ["E,28,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,29,0,2": true
        }
    },
    "E,28,0,1" : {
        "name" : "ROUTE 109 - INSIDE - Beach Hut - 7,9",
        "to" : "E,0,24,0",
        "grouped": ["E,28,0,0"]
    },
/* Route 110 - EXT */
    "E,0,25,0" : {
        "name" : "ROUTE 110 - OUTSIDE - New Mauville - 23,18",
        "level" : "6",
        "to" : "E,24,52,0",
        "connections" : {
            "E,0,25,2": "HOENN_SURF"
        }
    },
    "E,0,25,1" : {
        "name" : "ROUTE 110 - OUTSIDE - Trick House - B,42",
        "to" : "E,29,0,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true,
            "E,0,25,2": true
        }
    },
    "E,0,25,2" : {
        "name" : "ROUTE 110 - OUTSIDE - Cycle Road Top left - F,10",
        "to" : "E,29,12,0",
        "level" : "3",
        "connections" : {
            "E,0,2,1": true,
            "E,0,25,0": "HOENN_SURF"
        }
    },
    "E,0,25,3" : {
        "name" : "ROUTE 110 - OUTSIDE - Cycle Road Top Right - 12,10",
        "to" : "E,29,12,2",
        "level" : "3",
        "connections" : {
            "E,0,25,5": true
        }
    },
    "E,0,25,4" : {
        "name" : "ROUTE 110 - OUTSIDE - Cycle Road Bottom Left - 10,58",
        "to" : "E,29,11,0",
        "level" : "3",
        "connections" : {
            "E,0,1,0": true
        }
    },
    "E,0,25,5" : {
        "name" : "ROUTE 110 - OUTSIDE - Cycle Road Bottom Right - 13,58",
        "to" : "E,29,11,2",
        "level" : "3",
        "connections" : {
            "E,0,25,3": true
        }
    },
/* Route 110 - INT */    
    "E,29,0,0" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Enterance - 5,7",
        "to" : "E,0,25,1",
        "ignore": true,
        "grouped": ["E,29,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,29,0,2": true
        }
    },
    "E,29,0,1" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Enterance - 6,7",
        "to" : "E,0,25,1",
        "ignore": true,
        "grouped": ["E,29,0,0"]
    },
    "E,29,0,2" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Challenge Door - 5,2",
        "to" : "E,29,3,0",
        "ignore": true,
        "connections" : {
            "E,29,0,0": true
        }
    },
    "E,29,1,0" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Completed Right - A,1",
        "to" : "E,29,3,2",
        "level" : "3",
        "connections" : {
            "E,29,1,1": true
        }
    },
    "E,29,1,1" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Completed Left - 2,1",
        "to" : "E,29,2,0",
        "level" : "3",
        "connections" : {
            "E,29,1,0": true
        }
    },
    "E,29,2,0" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Hall Top - D,3",
        "to" : "E,29,1,1",
        "level" : "3",
        "grouped": ["E,29,2,1"],
        "groupMain" : true,
        "connections" : {
            "E,29,2,2": true
        }
    },
    "E,29,2,1" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Hall Top - E,3",
        "to" : "E,29,1,1",
        "level" : "3",
        "grouped": ["E,29,2,0"]
    },
    "E,29,2,2" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Hall Bottom - 4,17",
        "to" : "E,29,0,2",
        "level" : "3",
        "grouped": ["E,29,2,3"],
        "groupMain" : true,
        "connections" : {
            "E,29,2,0": true
        }
    },
    "E,29,2,3" : {
        "name" : "ROUTE 110 - INSIDE - Trick House Hall Bottom - 5,17",
        "to" : "E,29,0,2",
        "level" : "3",
        "grouped": ["E,29,2,2"]
    },
    "E,29,11,0" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Bottom Left - 1,5",
        "to" : "E,0,25,4",
        "level" : "3",
        "grouped": ["E,29,11,1"],
        "groupMain" : true,
        "connections" : {
            "E,29,11,2": "BIKE"
        }
    },
    "E,29,11,1" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Bottom Left- 2,5",
        "to" : "E,0,25,4",
        "level" : "3",
        "grouped": ["E,29,11,0"]
    },
    "E,29,11,2" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Bottom Right - C,5",
        "to" : "E,0,25,5",
        "level" : "3",
        "grouped": ["E,29,11,3"],
        "groupMain" : true,
        "connections" : {
            "E,29,11,0": true
        }
    },
    "E,29,11,3" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Bottom Right - D,5",
        "to" : "E,0,25,5",
        "level" : "3",
        "grouped": ["E,29,11,2"]
    },
    "E,29,12,0" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Top Left - 1,5",
        "to" : "E,0,25,2",
        "level" : "3",
        "grouped": ["E,29,12,1"],
        "groupMain" : true,
        "connections" : {
            "E,29,12,2": "BIKE"
        }
    },
    "E,29,12,1" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Top Left- 2,5",
        "to" : "E,0,25,2",
        "level" : "3",
        "grouped": ["E,29,12,0"]
    },
    "E,29,12,2" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Top Right - C,5",
        "to" : "E,0,25,3",
        "level" : "3",
        "grouped": ["E,29,12,3"],
        "groupMain" : true,
        "connections" : {
            "E,29,12,0": true
        }
    },
    "E,29,12,3" : {
        "name" : "ROUTE 110 - INSIDE - Bike Path Top Right - D,5",
        "to" : "E,0,25,3",
        "level" : "3",
        "grouped": ["E,29,12,2"]
    },
/* Route 111 - EXT */ 
    "E,0,26,0" : {
        "name" : "ROUTE 111 - OUTSIDE - Battle House - D,71",
        "to" : "E,18,0,0",
        "level" : "3",
        "connections" : {
            "E,0,26,4": true,
            "E,0,2,1": true
        }
    },
    "E,0,26,1" : {
        "name" : "ROUTE 111 - OUTSIDE - Desert Ruins - 1D,57",
        "to" : "E,24,6,0",
        "level" : "5",
        "connections" : {
            "E,0,26,0": true,
            "E,0,26,2": true,
            "E,0,26,3": true
        }
    },
    "E,0,26,2" : {
        "name" : "ROUTE 111 - OUTSIDE - Rest Gandma House - 1A,12",
        "to" : "E,18,1,0",
        "level" : "4",
        "connections" : {
            "E,0,13,2": true,
            "E,0,27,5": true,
            "E,0,28,0": true,
        }
    },
    "E,0,26,3" : {
        "name" : "ROUTE 111 - OUTSIDE - Mirrage Tower - 13,3A",
        "to" : "E,24,94,0",
        "level" : "5",
        "connections" : {
            "E,0,26,0": true,
            "E,0,26,1": true,
            "E,0,26,2": true,
        }
    },
    "E,0,26,4" : {
        "name" : "ROUTE 111 - OUTSIDE - Trainer Hill - 1F,71",
        "to" : "E,26,60,0",
        "level" : "3",
        "connections" : {
            "E,0,26,0": true,
            "E,0,2,1": true,
            "E,0,27,4": "HOENN_ROCK_SMASH"
        }
    },
/* Route 111 - INT */
    "E,18,0,0" : {
        "name" : "ROUTE 111 - INSIDE - Battle House - 3,7",
        "to" : "E,0,26,0",
        "level" : "3",
        "grouped": ["E,18,0,1"],
        "groupMain" : true
    },
    "E,18,0,1" : {
        "name" : "ROUTE 111 - INSIDE - Battle House - 4,7",
        "to" : "E,0,26,0",
        "level" : "3",
        "grouped": ["E,18,0,0"]
    },
    "E,18,1,0" : {
        "name" : "ROUTE 111 - INSIDE - Rest Gandma House - 3,7",
        "to" : "E,0,26,2",
        "level" : "4",
        "grouped": ["E,18,1,1"],
        "groupMain" : true
    },
    "E,18,1,1" : {
        "name" : "ROUTE 111 - INSIDE - Rest Gandma House - 4,7",
        "to" : "E,0,26,2",
        "level" : "4",
        "grouped": ["E,18,1,0"]
    },
    "E,26,60,0" : {
        "name" : "ROUTE 111 - INSIDE - Trainer Hill - 9,10",
        "to" : "E,0,26,4",
        "level" : "3",
        "grouped": ["E,26,60,1"],
        "groupMain" : true
    },
    "E,26,60,1" : {
        "name" : "ROUTE 111 - INSIDE - Trainer Hill - 11,10",
        "to" : "E,0,26,4",
        "level" : "3",
        "grouped": ["E,26,60,0"]
    },
    "E,24,6,0" : {
        "name" : "ROUTE 111 - INSIDE - Desert Ruins - 8,1D",
        "to" : "E,0,26,1",
        "level" : "5",
        "connections" : {
            "E,24,6,1": true
        }
    },
    "E,24,6,1" : {
        "name" : "ROUTE 111 - INSIDE - Desert Ruins - 8,14",
        "to" : "E,24,6,2",
        "level" : "5",
        "connections" : {
            "E,24,6,0": true
        }
    },
    "E,24,6,2" : {
        "name" : "ROUTE 111 - INSIDE - Desert Ruins - 8,B",
        "to" : "E,24,6,1",
        "level" : "5",
    },
/* Mirage Tower */
    "E,24,94,0" : {
        "name" : "MIRAGE TOWER - INSIDE - F1 Enterance - A,E",
        "to" : "E,0,26,3",
        "level" : "5",
        "connections" : {
            "E,24,94,1": true
        }
    },
    "E,24,94,1" : {
        "name" : "MIRAGE TOWER - INSIDE - F1 Ladder - F,2",
        "to" : "E,24,95,1",
        "level" : "5",
        "connections" : {
            "E,24,94,0": true
        }
    },
    "E,24,95,0" : {
        "name" : "MIRAGE TOWER - INSIDE - F2 Top - F,2",
        "to" : "E,24,94,1",
        "level" : "5",
        "connections" : {
            "E,24,94,0": true,
            "E,24,95,1": "BIKE"
        }
    },
    "E,24,95,1" : {
        "name" : "MIRAGE TOWER - INSIDE - F2 Bottom - F,2",
        "to" : "E,24,96,0",
        "level" : "5",
        "connections" : {
            "E,24,94,0": true,
            "E,24,95,0": "BIKE"
        }
    },
    "E,24,96,0" : {
        "name" : "MIRAGE TOWER - INSIDE - F3 Bottom - 12,C",
        "to" : "E,24,95,0",
        "level" : "5",
        "connections" : {
            "E,24,95,1": true,
            "E,24,96,1": "HOENN_ROCK_SMASH"
        }
    },
    "E,24,96,1" : {
        "name" : "MIRAGE TOWER - INSIDE - F3 Top - 2,4",
        "to" : "E,24,97,0",
        "level" : "5",
        "connections" : {
            "E,24,96,0": "HOENN_ROCK_SMASH"
        }
    },
    "E,24,97,0" : {
        "name" : "MIRAGE TOWER - INSIDE - F4 (Fossils) - 1,4",
        "to" : "E,24,96,1",
        "level" : "5",
    },
/* Route 117 - EXT */     
    "E,0,32,0" : {
        "name" : "ROUTE 117 - OUTSIDE - Day Care - 33,5",
        "to" : "E,22,0,0",
        "level": "3",
        "connections" : {
            "E,0,2,1": true,
            "E,0,14,2": true
        }
    },
/* Route 117 - INT */         
    "E,22,0,0" : {
        "name" : "ROUTE 117 - INSIDE - Day Care - 2,8",
        "to" : "E,0,32,0",
        "level" : "3",
        "grouped": ["E,22,0,1"],
        "groupMain" : true
    },
    "E,22,0,1" : {
        "name" : "ROUTE 117 - INSIDE - Day Care - 3,8",
        "to" : "E,0,32,0",
        "level" : "3",
        "grouped": ["E,22,0,0"]
    },
/* Route 112 - EXT */
    "E,0,27,0" : {
        "name" : "ROUTE 112 - OUTSIDE - LIFT - 1C,1B",
        "to" : "E,19,0,0",
        "level" : "4",
        "grouped": ["E,0,27,1"],
        "groupMain" : true
    },
    "E,0,27,1" : {
        "name" : "ROUTE 112 - OUTSIDE - LIFT - 1D,1B",
        "to" : "E,19,0,1",
        "level" : "4",
        "grouped": ["E,0,27,0"]
    },
    "E,0,27,2" : {
        "name" : "ROUTE 112 - OUTSIDE - Jagged Pass Enterance - 6,2E",
        "to" : "E,24,13,0",
        "level" : "4",
        "grouped": ["E,0,27,3"],
        "groupMain" : true,
        "connections" : {
            "E,0,27,4": true,
            "E,0,12,3": true
        }
    },
    "E,0,27,3" : {
        "name" : "ROUTE 112 - OUTSIDE - Jagged Pass Enterance  - 7,2E",
        "to" : "E,24,13,1",
        "level" : "4",
        "grouped": ["E,0,27,2"]
    },
    "E,0,27,4" : {
        "name" : "ROUTE 112 - OUTSIDE - Fiery Path Bottom  - B,24",
        "to" : "E,24,14,0",
        "level" : "4",
        "connections" : {
            "E,0,27,5": "GO_GOGGLES",
            "E,0,26,3": "GO_GOGGLES",
            "E,0,26,4": "HOENN_ROCK_SMASH"

        }
    },
    "E,0,27,5" : {
        "name" : "ROUTE 112 - OUTSIDE - Fiery Path Top  - 16,A",
        "to" : "E,24,14,1",
        "level" : "4",
        "connections" : {
            "E,0,26,2": true,
            "E,0,27,4": "GO_GOGGLES"
        }
    },
/* Route 112 - INT */
    "E,19,0,0" : {
        "name" : "ROUTE 112 - INSIDE - LIFT - 6,B",
        "to" : "E,0,27,0",
        "level" : "4",
        "grouped": ["E,19,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,19,1,0": true
        }
    },
    "E,19,0,1" : {
        "name" : "ROUTE 112 - OUTSIDE - LIFT - 7,B",
        "to" : "E,0,27,1",
        "level" : "4",
        "grouped": ["E,19,0,0"]
    },
    "E,19,1,0" : {
        "name" : "MT CHIMNEY - INSIDE - LIFT - 6,B",
        "to" : "E,24,12,0",
        "level" : "4",
        "grouped": ["E,19,1,1"],
        "groupMain" : true,
        "connections" : {
            "E,19,0,0": true
        }
    },
    "E,19,1,1" : {
        "name" : "MT CHIMNEY - OUTSIDE - LIFT - 7,B",
        "to" : "E,24,12,1",
        "level" : "4",
        "grouped": ["E,19,1,0"]
    },
/* FIERY PATH */
    "E,24,14,0" : {
        "name" : "FIREY PATH - INSIDE - Bottom - 1A,24",
        "to" : "E,0,27,4",
        "level" : "4",
        "connections" : {
            "E,24,14,1": true
        }
    },
    "E,24,14,1" : {
        "name" : "FIREY PATH - INSIDE - Top - 1A,4",
        "to" : "E,0,27,5",
        "level" : "4",
        "connections" : {
            "E,24,14,0": true
        }
    },
/* JAGGED PASS */
    "E,24,13,0" : {
        "name" : "JAGGED PASS - INSIDE - Bottom - E,28",
        "to" : "E,0,27,2",
        "level" : "4",
        "grouped": ["E,24,13,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,13,2": "BIKE"
        }
    },
    "E,24,13,1" : {
        "name" : "JAGGED PASS - INSIDE - Bottom - F,28",
        "to" : "E,0,27,3",
        "level" : "4",
        "grouped": ["E,24,13,0"]
    },
    "E,24,13,2" : {
        "name" : "JAGGED PASS - INSIDE - Top - E,28",
        "to" : "E,24,12,2",
        "level" : "4",
        "grouped": ["E,24,13,3"],
        "groupMain" : true,
        "connections" : {
            "E,24,13,0": true
        }
    },
    "E,24,13,3" : {
        "name" : "JAGGED PASS - INSIDE - Top - F,28",
        "to" : "E,24,12,3",
        "level" : "4",
        "grouped": ["E,24,13,2"]
    },
    "E,24,13,5" : {
        "name" : "JAGGED PASS - INSIDE - Magma hideout enterance - 10,12",
        "to" : "E,24,86,0",
        "connections" : {
            "E,24,13,0": true
        }
    },
/* Route 113 - EXT */
    "E,0,28,0" : {
        "name" : "ROUTE 113 - OUTSIDE - Flute House - 21,5",
        "to" : "E,30,0,0",
        "level" : "4",
        "connections" : {
            "E,0,26,2": true,
            "E,0,13,2": true
        }
    },
/* Route 113 - INT */
    "E,30,0,0" : {
        "name" : "ROUTE 113 - INSIDE - Flute House - 3,8",
        "to" : "E,0,28,0",
        "level" : "4",
        "grouped": ["E,30,0,1"],
        "groupMain" : true
    },
    "E,30,0,1" : {
        "name" : "ROUTE 113 - INSIDE - Flute House - 4,8",
        "to" : "E,0,28,0",
        "level" : "4",
        "grouped": ["E,30,0,0"]
    },
/* Route 114 - EXT */
    "E,0,29,0" : {
        "name" : "ROUTE 114 - OUTSIDE - Meteor Falls Enterance - 8,3F",
        "to" : "E,24,0,0",
        "level" : "4",
        "connections" : {
            "E,0,29,2": true
        }
    },
    "E,0,29,1" : {
        "name" : "ROUTE 114 - OUTSIDE - Fossil House - 1D,5",
        "to" : "E,20,0,0",
        "level" : "4",
        "connections" : {
            "E,0,13,2": true,
            "E,0,29,0": true
        }
    },
    "E,0,29,2" : {
        "name" : "ROUTE 114 - OUTSIDE - Lannets House - 8,3F",
        "to" : "E,20,2,0",
        "level" : "4",
        "connections" : {
            "E,0,29,0": true,
            "E,0,29,1": true
        }
    },
/* Route 114 - INT */
    "E,20,0,0" : {
        "name" : "ROUTE 114 - INSIDE - Fossil House Enterance - 4,7",
        "to" : "E,0,29,1",
        "level" : "4",
        "grouped": ["E,20,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,20,0,2": true
        }
    },
    "E,20,0,1" : {
        "name" : "ROUTE 114 - INSIDE - Fossil House Enterance - 5,7",
        "to" : "E,0,29,1",
        "level" : "4",
        "grouped": ["E,20,0,0"]
    },
    "E,20,0,2" : {
        "name" : "ROUTE 114 - INSIDE - Fossil House Hole in wall- 4,1",
        "to" : "E,20,1,0",
        "level" : "4",
        "connections" : {
            "E,20,0,0": true
        }
    },
    "E,20,1,0" : {
        "name" : "ROUTE 114 - INSIDE - Fossil House Cave Door - 6,19",
        "to" : "E,20,0,2",
        "level" : "4",
        "grouped": ["E,20,1,1"],
        "groupMain" : true
    },
    "E,20,1,1" : {
        "name" : "ROUTE 114 - INSIDE - Fossil Cave Door - 7,19",
        "to" : "E,20,0,2",
        "level" : "4",
        "grouped": ["E,20,1,0"]
    },
    "E,20,1,2" : {
        "name" : "ROUTE 114 - INSIDE - Fossil Cave Desert Pass - 6,2",
        "to" : "E,24,98,0",
        "connections" : {
            "E,20,1,0": true
        }
    },
    "E,20,2,0" : {
        "name" : "ROUTE 114 - INSIDE - Lanettes House - 5,7",
        "to" : "E,0,29,2",
        "level" : "4",
        "grouped": ["E,20,2,1"],
        "groupMain" : true
    },
    "E,20,2,1" : {
        "name" : "ROUTE 114 - INSIDE - Lanettes House - 6,7",
        "to" : "E,0,29,2",
        "level" : "4",
        "grouped": ["E,20,2,0"]
    },
/* DESSERT PASS */
    "E,24,98,0" : {
        "name" : "DESSERT PASS - INSIDE - Door - A,C",
        "to" : "E,20,1,2",
    },
/* METEOR FALLS */
// F1
    "E,24,0,0" : {
        "name" : "METEOR FALLS - INSIDE - F1 Route 114 Enterance - 1B,12",
        "to" : "E,0,29,0",
        "level" : "4",
        "connections" : {
            "E,24,0,1": true,
            "E,24,0,2": "HOENN_WATERFALL"
        }
    },
    "E,24,0,1" : {
        "name" : "METEOR FALLS - INSIDE - F1 Route 115 Enterance - 6,27",
        "to" : "E,0,30,0",
        "level" : "4",
        "connections" : {
            "E,24,0,0": true
        }
    },
    "E,24,0,2" : {
        "name" : "METEOR FALLS - INSIDE - F1 Above Waterfall - A,3",
        "to" : "E,24,1,0",
        "level" : "9",
        "connections" : {
            "E,24,0,0": "HOENN_SURF"
        }
    },
    "E,24,0,3" : {
        "name" : "METEOR FALLS - INSIDE - F1 Top Left Ladder - 5,4",
        "to" : "E,24,2,4",
        "level" : "9",
    },
    "E,24,0,4" : {
        "name" : "METEOR FALLS - INSIDE - F1 Bottom Right - 1A,C",
        "to" : "E,24,2,5",
        "level" : "9",
    },
    "E,24,0,5" : {
        "name" : "METEOR FALLS - INSIDE - F1 Top Left Door - 4,2",
        "to" : "E,24,107,0",
        "level" : "9",
    },
// F2
    "E,24,1,0" : {
        "name" : "METEOR FALLS - INSIDE - F2 Door - A,1D",
        "to" : "E,24,0,2",
        "level" : "9",
        "connections" : {
            "E,24,1,3": true
        }
    },
    "E,24,1,1" : {
        "name" : "METEOR FALLS - INSIDE - F2 Ladder By Couple - 4,E",
        "to" : "E,24,2,0",
        "level" : "9",
        "connections" : {
            "E,24,0,0": true,
            "E,24,0,2": true,
            "E,24,0,3": true
        }
    },
    "E,24,1,2" : {
        "name" : "METEOR FALLS - INSIDE - F2 Ladder By Water - 7,14",
        "to" : "E,24,2,1",
        "level" : "9",
        "connections" : {
            "E,24,0,0": true,
            "E,24,0,3": true
        }
    },
    "E,24,1,3" : {
        "name" : "METEOR FALLS - INSIDE - F2 Ladder Right - 15,17",
        "to" : "E,24,2,2",
        "level" : "9",
        "connections" : {
            "E,24,1,0": true
        }
    },
// F3
    "E,24,2,0" : {
        "name" : "METEOR FALLS - INSIDE - F3 Ladder Top Left - 5,6",
        "to" : "E,24,1,1",
        "level" : "9",
        "connections" : {
            "E,24,2,2": true,
            "E,24,2,4": true
        }
    },
    "E,24,2,1" : {
        "name" : "METEOR FALLS - INSIDE - F3 Ladder Center Left - 7,B",
        "to" : "E,24,1,2",
        "level" : "9",
        "connections" : {
            "E,24,2,5": "HOENN_SURF",
        }
    },
    "E,24,2,2" : {
        "name" : "METEOR FALLS - INSIDE - F3 Ladder Center - 12,F",
        "to" : "E,24,1,3",
        "level" : "9",
        "connections" : {
            "E,24,2,0": true,
            "E,24,2,4": true
        }
    },
    "E,24,2,3" : {
        "name" : "METEOR FALLS - INSIDE - F3 Top Door - 11,3",
        "to" : "E,24,3,0",
        "level" : "9",
        "connections" : {
            "E,24,2,5": "HOENN_SURF",
        }
    },
    "E,24,2,4" : {
        "name" : "METEOR FALLS - INSIDE - F3 Bottom Left - 3,17",
        "to" : "E,24,0,3",
        "level" : "9",
        "connections" : {
            "E,24,2,0": true,
            "E,24,2,2": true
        }
    },
    "E,24,2,5" : {
        "name" : "METEOR FALLS - INSIDE - F3 Bottom Door - 14,24",
        "to" : "E,24,0,4",
        "level" : "9",
        "connections" : {
            "E,24,2,1": "HOENN_SURF",
            "E,24,2,3": "HOENN_SURF",
        }
    },
// F4 (Bagon Room)
    "E,24,3,0" : {
        "name" : "METEOR FALLS - INSIDE - F4 Bagon Room - 5,F",
        "to" : "E,24,2,3",
        "level" : "9",
    },
// F5 (Steven Room)
    "E,24,107,0" : {
        "name" : "METEOR FALLS - INSIDE - F5 Steven Room Door - A,1D",
        "to" : "E,24,0,5",
        "level" : "9",
    },
/* MT CHIMNEY */
    "E,24,12,0" : {
        "name" : "MT CHIMNEY - OUTSIDE - LIFT - 11,24",
        "to" : "E,19,1,0",
        "level" : "4",
        "grouped": ["E,24,12,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,13,2": true
        }
    },
    "E,24,12,1" : {
        "name" : "MT CHIMNEY - OUTSIDE - LIFT - 12,24",
        "to" : "E,19,1,1",
        "level" : "4",
        "grouped": ["E,24,12,0"]
    },
    "E,24,12,2" : {
        "name" : "MT CHIMNEY - OUTSIDE - Jagged Pass Enterance - 15,29",
        "to" : "E,24,13,2",
        "level" : "4",
        "grouped": ["E,24,12,3"],
        "groupMain" : true
    },
    "E,24,12,3" : {
        "name" : "MT CHIMNEY - OUTSIDE - Jagged Pass Enterance - 16,29",
        "to" : "E,24,13,3",
        "level" : "4",
        "grouped": ["E,24,12,2"]
    },
/* ABANDONED SHIP - EXT */
    "E,24,54,0" : {
        "name" : "ABANDONED SHIP - OUTSIDE - Enterance - D,F",
        "to" : "E,0,23,0",
        "level" : "6",
        "grouped": ["E,24,54,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,54,2": true
        }
    },
    "E,24,54,1" : {
        "name" : "MT CHIMNEY - OUTSIDE - Enterance - E,F",
        "to" : "E,0,23,0",
        "level" : "6",
        "grouped": ["E,24,54,0"]
    },
    "E,24,54,2" : {
        "name" : "ABANDONED SHIP - OUTSIDE - Center - D,9",
        "to" : "E,24,55,1",
        "level" : "6",
        "connections" : {
            "E,24,54,0": true
        }
    },
    "E,24,54,3" : {
        "name" : "ABANDONED SHIP - OUTSIDE - Left - 8,9",
        "to" : "E,24,55,2",
        "level" : "6",
        "connections" : {
            "E,24,54,4": true
        }
    },
    "E,24,55,4" : {
        "name" : "ABANDONED SHIP - OUTSIDE - Top - C,5",
        "to" : "E,24,63,0",
        "level" : "6",
        "connections" : {
            "E,24,54,3": true
        }
    },
/* ABANDONED SHIP - INT */
// F1
    "E,24,55,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Bottom - 9,B",
        "to" : "E,24,54,2",
        "level" : "6",
        "grouped": ["E,24,55,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,55,4": true,
            "E,24,55,5": true,
            "E,24,55,6": true,
            "E,24,55,7": true,
            "E,24,55,9": true
        }
    },
    "E,24,55,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Bottom - 8,B",
        "to" : "E,24,54,2",
        "level" : "6",
        "grouped": ["E,24,55,0"]
    },
    "E,24,55,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Left Side Bottom - 0,B",
        "to" : "E,24,54,3",
        "level" : "6",
        "grouped": ["E,24,55,3"],
        "groupMain" : true,
        "connections" : {
            "E,24,55,8": true,
            "E,24,55,11": true,
            "E,24,55,10": true,
        }
    },
    "E,24,55,3" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Left Side Bottom - 1,B",
        "to" : "E,24,54,3",
        "level" : "6",
        "grouped": ["E,24,55,2"]
    },
    "E,24,55,4" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Center Bottom Left - B,9",
        "to" : "E,24,56,0",
        "level" : "6",
        "connections" : {
            "E,24,55,0": true
        }
    },
    "E,24,55,5" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Center Bottom Right - E,9",
        "to" : "E,24,56,3",
        "level" : "6",
        "connections" : {
            "E,24,55,0": true
        }
    },
    "E,24,55,6" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Center Top Left - B,3",
        "to" : "E,24,56,2",
        "level" : "6",
        "connections" : {
            "E,24,55,0": true
        }
    },
    "E,24,55,7" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Center Top Right - E,3",
        "to" : "E,24,56,4",
        "level" : "6",
        "connections" : {
            "E,24,55,0": true
        }
    },
    "E,24,55,9" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Right Side Top Stairs - 3,9",
        "to" : "E,24,57,7",
        "level" : "6",
        "connections" : {
            "E,24,55,0": true
        }
    },
    "E,24,55,8" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Left Side Center Bottom - 3,9",
        "to" : "E,24,62,0",
        "level" : "6",
        "connections" : {
            "E,24,55,2": true
        }
    },
    "E,24,55,10" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Left Side Top Stairs - 5,2",
        "to" : "E,24,57,6",
        "level" : "6",
        "connections" : {
            "E,24,55,2": true
        }
    },
    "E,24,55,11" : {
        "name" : "ABANDONED SHIP - INSIDE - F1 Left Side Center Top - 3,3",
        "to" : "E,24,62,2",
        "level" : "6",
        "connections" : {
            "E,24,55,2": true
        }
    },
// F2
    "E,24,56,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Left Side Bottom - 4,10",
        "to" : "E,24,55,4",
        "level" : "6",
        "grouped": ["E,24,56,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,56,3": true,
            "E,24,56,4": true
        }
    },
    "E,24,56,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Left Side Bottom - 5,10",
        "to" : "E,24,55,4",
        "level" : "6",
        "grouped": ["E,24,56,0"]
    },
    "E,24,56,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Left Side Top- 4,1",
        "to" : "E,24,55,6",
        "level" : "6",
    },
    "E,24,56,3" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Right Side Bottom - D,10",
        "to" : "E,24,55,5",
        "level" : "6",
        "grouped": ["E,24,56,5"],
        "groupMain" : true,
        "connections" : {
            "E,24,56,0": true,
            "E,24,56,4": true
        }
    },
    "E,24,56,5" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Right Side Bottom - E,10",
        "to" : "E,24,55,5",
        "level" : "6",
        "grouped": ["E,24,56,3"]
    },
    "E,24,56,4" : {
        "name" : "ABANDONED SHIP - INSIDE - F2 Right Side Top - D,1",
        "to" : "E,24,55,7",
        "level" : "6",
        "connections" : {
            "E,24,56,0": true,
            "E,24,56,3": true
        }
    },
// F3
    "E,24,57,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Center Door - 6,4",
        "to" : "E,24,59,2",
        "level" : "6",
        "connections" : {
            "E,24,57,1": true,
            "E,24,57,2": true,
            "E,24,57,3": true,
            "E,24,57,4": true,
            "E,24,57,6": true,
            "E,24,57,7": true,
        }
    },
    "E,24,57,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Center Left Door - 3,4",
        "to" : "E,24,59,0",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Bottom Left Door - 5,7",
        "to" : "E,24,58,0",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,3" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Center Center Door - 8,7",
        "to" : "E,24,58,1",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,4" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Center Right Door - B,7",
        "to" : "E,24,58,2",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,5" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Locked Door - B,4",
        "to" : "E,24,61,0",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,6" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Left Stairs - 0,2",
        "to" : "E,24,55,10",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
    "E,24,57,7" : {
        "name" : "ABANDONED SHIP - INSIDE - F3 Right Stairs - 8,2",
        "to" : "E,24,55,9",
        "level" : "6",
        "connections" : {
            "E,24,57,0": true,
        }
    },
// F4
    "E,24,58,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F4 Left - 4,1",
        "to" : "E,24,57,2",
        "level" : "6"
    },
    "E,24,58,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F4 Center - D,1",
        "to" : "E,24,57,3",
        "level" : "6"
    },
    "E,24,58,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F4 Right - 16,1",
        "to" : "E,24,57,4",
        "level" : "6"
    },
// F5
    "E,24,59,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F5 Left Side - 4,7",
        "to" : "E,24,57,1",
        "level" : "6",
        "grouped": ["E,24,59,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,59,2": true,
        }
    },
    "E,24,59,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F5 Left Side - 5,7",
        "to" : "E,24,57,1",
        "level" : "6",
        "grouped": ["E,24,59,0"]
    },
    "E,24,59,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F5 Right Side - D,7",
        "to" : "E,24,57,0",
        "level" : "6",
        "grouped": ["E,24,59,3"],
        "groupMain" : true,
        "connections" : {
            "E,24,59,0": true,
        }
    },
    "E,24,59,3" : {
        "name" : "ABANDONED SHIP - INSIDE - F5 Right Side - E,7",
        "to" : "E,24,57,0",
        "level" : "6",
        "grouped": ["E,24,59,2"]
    },
// F6
    "E,24,60,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F6 Door - 3,7",
        "to" : "E,24,64,0",
        "level" : "6",
        "grouped": ["E,24,60,1"],
        "groupMain" : true
    },
    "E,24,60,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F6 Door - 4,7",
        "to" : "E,24,64,0",
        "level" : "6",
        "grouped": ["E,24,60,0"]
    },
// F7
    "E,24,61,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F7 Door - 3,7",
        "to" : "E,24,57,5",
        "level" : "6",
        "grouped": ["E,24,61,1"],
        "groupMain" : true
    },
    "E,24,61,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F7 Door - 4,7",
        "to" : "E,24,57,5",
        "level" : "6",
        "grouped": ["E,24,61,0"]
    },
// F8
    "E,24,62,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F8 Bottom - 4,10",
        "to" : "E,24,55,8",
        "level" : "6",
        "grouped": ["E,24,62,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,62,2": true,
        }
    },
    "E,24,62,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F8 Bottom - 5,10",
        "to" : "E,24,55,6",
        "level" : "6",
        "grouped": ["E,24,62,0"]
    },
    "E,24,62,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F8 Top - 4,1",
        "to" : "E,24,55,11",
        "level" : "6",
        "connections" : {
            "E,24,62,0": true,
        }
    },
// F9
    "E,24,63,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F9 Door - 7,6",
        "to" : "E,24,54,4",
        "level" : "6",
        "grouped": ["E,24,63,1"],
        "groupMain" : true
    },
    "E,24,63,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F9 Door - 8,6",
        "to" : "E,24,54,4",
        "level" : "6",
        "grouped": ["E,24,63,0"]
    },
// F10
    "E,24,64,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F10 Door - 3,1",
        "to" : "E,24,60,0",
        "level" : "6"
    },
// F11
    "E,24,65,0" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Bottom Left Door - 3,8",
        "to" : "E,24,66,0",
        "level" : "6",
        "ignore" : "true",
        "connections" : {
            "E,24,65,2": true,
            "E,24,65,4": true,
        }
    },
    "E,24,65,1" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Bottom Center Door - 6,8",
        "to" : "E,24,66,2",
        "level" : "6",
        "ignore" : "true",
        "connections" : {
            "E,24,65,2": true,
            "E,24,65,4": true,
        }
    },
    "E,24,65,2" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Bottom Right Door - 9,8",
        "to" : "E,24,66,4",
        "level" : "6",
        "connections" : {
            "E,24,65,4": true,
        }
    },
    "E,24,65,3" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Top Left Door - 3,3",
        "to" : "E,24,66,6",
        "level" : "6",
        "ignore" : "true",
        "connections" : {
            "E,24,65,2": true,
            "E,24,65,4": true,
        }
    },
    "E,24,65,4" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Top Center Door - 6,3",
        "to" : "E,24,66,7",
        "level" : "6",
        "connections" : {
            "E,24,65,2": true,
        }
    },
    "E,24,65,5" : {
        "name" : "ABANDONED SHIP - INSIDE - F11 Top Right Door - 9,3",
        "to" : "E,24,66,8",
        "ignore" : "true",
        "level" : "6",
        "connections" : {
            "E,24,65,2": true,
            "E,24,65,4": true,
        }
    },
// F12 TODO: Re add warps once conditional connections are done
    "E,24,66,0" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Left Door - 6,E",
        "to" : "E,24,65,0",
        "level" : "6",
        "grouped": ["E,24,66,1"],
        "groupMain" : true
    },
    "E,24,66,1" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Left Door - 7,E",
        "to" : "E,24,65,0",
        "level" : "6",
        "grouped": ["E,24,66,0"]
    },
    "E,24,66,2" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Center Door - 15,E",
        "to" : "E,24,65,1",
        "level" : "6",
        "grouped": ["E,24,66,3"],
        "groupMain" : true
    },
    "E,24,66,3" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Center Door - 16,E",
        "to" : "E,24,65,1",
        "level" : "6",
        "grouped": ["E,24,66,2"]
    },
    "E,24,66,4" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Right Door - 24,E",
        "to" : "E,24,65,2",
        "level" : "6",
        "grouped": ["E,24,66,5"],
        "groupMain" : true
    },
    "E,24,66,5" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Bottom Right Door - 25,E",
        "to" : "E,24,65,2",
        "level" : "6",
        "grouped": ["E,24,66,4"]
    },
    "E,24,66,6" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Top Left Door - 6,1",
        "to" : "E,24,65,3",
        "level" : "6",
    },
    "E,24,66,7" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Top Center Door - 15,1",
        "to" : "E,24,65,4",
        "level" : "6",
    },
    "E,24,66,8" : {
        "ignore" : "true",
        "name" : "ABANDONED SHIP - INSIDE - F12 Top Right Door - 24,1",
        "to" : "E,24,65,5",
        "level" : "6",
    },
/* New Mauville */
// Enterance
    "E,24,52,0" : {
        "name" : "NEW MAUVILLE - INSIDE - Enterance Bottom - 4,1",
        "to" : "E,0,25,40",
        "level" : "6",
        "connections" : {
            "E,24,52,1": true,
        }
    },
    "E,24,52,1" : {
        "name" : "NEW MAUVILLE - INSIDE - Enterance Top - 4,6",
        "to" : "E,24,53,0",
        "level" : "6",
        "connections" : {
            "E,24,52,0": true,
        }
    },
// Powerplant
    "E,24,53,0" : {
        "name" : "NEW MAUVILLE - INSIDE - Powerplant Door - 20,21",
        "to" : "E,24,52,1",
        "level" : "6",
    },
/* ROUTE 123 - EXT */
    "E,0,38,0" : {
        "name" : "ROUTE 123 - OUTSIDE - Berry Masters House - 16,6",
        "to" : "E,31,0,0",
        "level" : "6",
        "connections" : {
            "E,0,34,0": true,
            "E,0,34,1": true,
        }
    },
/* ROUTE 123 - INT */
    "E,31,0,0" : {
        "name" : "ROUTE 123 - INSIDE - Berry Masters House - 3,7",
        "to" : "E,0,38,0",
        "level" : "6",
        "grouped": ["E,31,0,1"],
        "groupMain" : true
    },
    "E,31,0,1" : {
        "name" : "ROUTE 123 - INSIDE - Berry Masters House - 4,7",
        "to" : "E,0,38,0",
        "level" : "6",
        "grouped": ["E,31,0,0"]
    },
/* ROUTE 119 - EXT */
    "E,0,34,0" : {
        "name" : "ROUTE 119 - OUTSIDE - Weather Institute - 6,20",
        "to" : "E,32,0,0",
        "level" : "6",
        "connections" : {
            "E,0,38,0": true,
            "E,0,34,1": true,
        }
    },
    "E,0,34,1" : {
        "name" : "ROUTE 119 - OUTSIDE - Wingull House - 21,6D",
        "to" : "E,32,2,0",
        "level" : "6",
        "connections" : {
            "E,0,38,0": true,
            "E,0,34,0": true,
        }
    },
/* ROUTE 119 - INT */
    "E,32,0,0" : {
        "name" : "ROUTE 123 - INSIDE - Weather Institute F1 Door - 9,C",
        "to" : "E,0,34,0",
        "level" : "6",
        "grouped": ["E,32,0,1"],
        "groupMain" : true,
        "connections" : {
            "E,32,0,2": true,
        }
    },
    "E,32,0,1" : {
        "name" : "ROUTE 123 - INSIDE - Weather Institute F1 Door - A,C",
        "to" : "E,0,34,0",
        "level" : "6",
        "grouped": ["E,32,0,0"]
    },
    "E,32,0,2" : {
        "name" : "ROUTE 123 - INSIDE - Weather Institute F1 Stairs - 11,1",
        "to" : "E,32,1,0",
        "level" : "6",
        "connections" : {
            "E,32,0,0": true,
        }
    },
    "E,32,1,0" : {
        "name" : "ROUTE 123 - INSIDE - Weather Institute F2 Stairs - 11,1",
        "to" : "E,32,0,2",
        "level" : "6"
    },
    "E,32,2,0" : {
        "name" : "ROUTE 119 - INSIDE - Wingull House - 3,8",
        "to" : "E,0,34,1",
        "level" : "6",
        "grouped": ["E,32,2,1"],
        "groupMain" : true,
    },
    "E,32,2,1" : {
        "name" : "ROUTE 119 - INSIDE - Wingull House - 3,8",
        "to" : "E,0,34,1",
        "level" : "6",
        "grouped": ["E,32,2,0"]
    },
/* ROUTE 120 - EXT */
    "E,0,35,0" : {
        "name" : "ROUTE 120 - OUTSIDE - Ancient Tomb Enterance - 7,37",
        "to" : "E,24,68,0",
        "level": "7",
        "connections" : {
            "E,0,36,0": true,
            "E,0,5,2": true,
            "E,0,4,0": true,
        }
    },
    "E,0,35,1" : {
        "name" : "ROUTE 120 - OUTSIDE - Scorched Slab Enterance - 13,17",
        "to" : "E,24,73,0",
        "level": "6",
        "connections": {
            "E,0,4,0": "DEVON_SCOPE",
        }
    },
/* ROUTE 120 - INT */
    "E,24,73,0" : {
        "name" : "ROUTE 120 - INSIDE - Scorched Slab - 7,10",
        "to" : "E,0,35,1",
        "level": "6",
    },
    "E,24,68,0" : {
        "name" : "ROUTE 120 - INSIDE - Ancient Tomb Bottom - 8,1D",
        "to" : "E,0,35,0",
        "level": "7",
        "connections" : {
            "E,24,68,1": true,
        }
    },
    "E,24,68,1" : {
        "name" : "ROUTE 120 - INSIDE - Ancient Tomb Top - 8,14",
        "to" : "E,24,68,2",
        "level": "7",
        "connections" : {
            "E,24,68,0": true,
        }
    },
    "E,24,68,2" : {
        "name" : "ROUTE 120 - INSIDE - Ancient Tomb Regie Steel - 8,B",
        "to" : "E,24,68,1",
        "level": "7"
    },
////// LEVEL 7
/* Route 121 - EXT */
    "E,0,36,0" : {
        "name" : "ROUTE 121 - OUTSIDE - Safari Zone - 25,5",
        "to" : "E,23,0,2",
        "level": "7",
        "connections" : {
            "E,0,35,0": true,
            "E,0,5,2": true,
            "E,0,38,0": "HOENN_SURF"
        }
    },
/* Route 121 - INT */
    "E,23,0,2" : {
        "name" : "ROUTE 121 - INSIDE - Safari Zone Enterance - E,D",
        "to" : "E,0,36,0",
        "level" : "7",
        "grouped": ["E,23,0,3"],
        "groupMain" : true,
    },
    "E,23,0,3" : {
        "name" : "ROUTE 121 - INSIDE - Safari Zone Enterance - F,D",
        "to" : "E,0,36,0",
        "level" : "7",
        "grouped": ["E,23,0,2"]
    },
/* Route 122 - EXT */
    "E,0,37,0" : {
        "name" : "ROUTE 122 - OUTSIDE - Mt Pyre - 16,1D",
        "to" : "E,24,15,0",
        "level": "7",
        "connections" : {
            "E,0,38,0": "HOENN_SURF",
            "E,0,36,0": "HOENN_SURF",
        }
    },
/* Mt Pyre - INT */
// F1
    "E,24,15,0" : {
        "name" : "Mt Pyre - INSIDE - F1 Bottom Enterance - 11,12",
        "to" : "E,0,37,0",
        "level" : "7",
        "grouped": ["E,24,15,2"],
        "groupMain" : true,
        "connections" : {
            "E,24,15,1": true,
            "E,24,15,4": true,
        }
    },
    "E,24,15,2" : {
        "name" : "Mt Pyre - INSIDE - F1 Bottom Enterance - 12,12",
        "to" : "E,0,37,0",
        "level" : "7",
        "grouped": ["E,24,15,0"]
    },
    "E,24,15,1" : {
        "name" : "Mt Pyre - INSIDE - F1 Left Enterance - 3,6",
        "to" : "E,24,21,0",
        "level" : "7",
        "grouped": ["E,24,15,3"],
        "groupMain" : true,
        "connections" : {
            "E,24,15,0": true,
            "E,24,15,4": true,
        }
    },
    "E,24,15,3" : {
        "name" : "Mt Pyre - INSIDE - F1 Left Enterance - 4,6",
        "to" : "E,24,21,0",
        "level" : "7",
        "grouped": ["E,24,15,1"]
    },
    "E,24,15,4" : {
        "name" : "Mt Pyre - INSIDE - F1 Top - B,1",
        "to" : "E,24,16,0",
        "level" : "7",
        "connections" : {
            "E,24,15,0": true,
            "E,24,15,1": true,
        }
    },
    "E,24,15,5" : {
        "name" : "Mt Pyre - INSIDE - F1 Drop - 14,9",
        "to" : "E,24,16,4",
        "level" : "7",
        "connections" : {
            "E,24,15,0": true,
            "E,24,15,1": true,
        }
    },
// F2    
    "E,24,16,0" : {
        "name" : "Mt Pyre - INSIDE - F2 Top Left - 2,1",
        "to" : "E,24,15,4",
        "level" : "7",
        "connections" : {
            "E,24,16,1": true,
            "E,24,16,4": true,
        }
    },
    "E,24,16,1" : {
        "name" : "Mt Pyre - INSIDE - F2 Top Right - A,1",
        "to" : "E,24,17,0",
        "level" : "7",
        "connections" : {
            "E,24,16,0": true,
        }
    },
    "E,24,16,2" : {
        "name" : "Mt Pyre - INSIDE - F2 Bottom Right Drop - A,C",
        "to" : "E,24,17,4",
        "level" : "7",
        "connections" : {
            "E,24,16,0": true,
        }
    },
    "E,24,16,3" : {
        "name" : "Mt Pyre - INSIDE - F2 Bottom Left Drop - 6,C",
        "to" : "E,24,17,5",
        "level" : "7",
        "connections" : {
            "E,24,16,0": true,
        }
    },
    "E,24,16,4" : {
        "name" : "Mt Pyre - INSIDE - F2 Hole - B,9",
        "to" : "E,24,15,5",
        "level" : "7",
        "connections" : {
            "E,24,16,0": true,
        }
    },
// F3
    "E,24,17,0" : {
        "name" : "Mt Pyre - INSIDE - F3 Top Right - A,1",
        "to" : "E,24,16,1",
        "level" : "7",
        "connections" : {
            "E,24,17,1": true,
            "E,24,17,4": true,
        }
    },
    "E,24,17,1" : {
        "name" : "Mt Pyre - INSIDE - F3 Top Left - 2,1",
        "to" : "E,24,18,1",
        "level" : "7",
        "connections" : {
            "E,24,17,0": true,
        }
    },
    "E,24,17,2" : {
        "name" : "Mt Pyre - INSIDE - F3 Right Drop - 9,A",
        "to" : "E,24,18,4",
        "level" : "7",
        "connections" : {
            "E,24,17,0": true,
        }
    },
    "E,24,17,3" : {
        "name" : "Mt Pyre - INSIDE - F3 Left Drop - 1,C",
        "to" : "E,24,18,5",
        "level" : "7",
        "connections" : {
            "E,24,17,5": true,
        }
    },
    "E,24,17,4" : {
        "name" : "Mt Pyre - INSIDE - F3 Right Hole - A,C",
        "to" : "E,24,16,2",
        "level" : "7",
        "connections" : {
            "E,24,17,0": true,
        }
    },
    "E,24,17,5" : {
        "name" : "Mt Pyre - INSIDE - F3 Left Hole - A,C",
        "to" : "E,24,16,3",
        "level" : "7"
    },
// F4
    "E,24,18,0" : {
        "name" : "Mt Pyre - INSIDE - F4 Top Right - A,1",
        "to" : "E,24,19,1",
        "level" : "7",
        "connections" : {
            "E,24,18,4": true,
            "E,24,18,1": true,
        }
    },
    "E,24,18,1" : {
        "name" : "Mt Pyre - INSIDE - F4 Top Right - 2,5",
        "to" : "E,24,17,1",
        "level" : "7",
        "connections" : {
            "E,24,18,0": true
        }
    },
    "E,24,18,2" : {
        "name" : "Mt Pyre - INSIDE - F4 Center Right Drop - C,A",
        "to" : "E,24,19,3",
        "level" : "7",
        "connections" : {
            "E,24,18,0": true
        }
    },
    "E,24,18,3" : {
        "name" : "Mt Pyre - INSIDE - F4 Bottom Right Drop - C,C",
        "to" : "E,24,19,4",
        "level" : "7",
        "connections" : {
            "E,24,18,5": true
        }
    },
    "E,24,18,4" : {
        "name" : "Mt Pyre - INSIDE - F4 Center Hole - 9,A",
        "to" : "E,24,17,2",
        "level" : "7",
        "connections" : {
            "E,24,18,0": true
        }
    },
    "E,24,18,5" : {
        "name" : "Mt Pyre - INSIDE - F4 Left Hole - 2,C",
        "to" : "E,24,17,3",
        "level" : "7",
    },
// F5
    "E,24,19,0" : {
        "name" : "Mt Pyre - INSIDE - F5 Top Left - 2,1",
        "to" : "E,24,20,0",
        "level" : "7",
        "connections" : {
            "E,24,19,1": true
        }
    },
    "E,24,19,1" : {
        "name" : "Mt Pyre - INSIDE - F5 Top Right - A,5",
        "to" : "E,24,18,0",
        "level" : "7",
        "connections" : {
            "E,24,19,0": true
        }
    },
    "E,24,19,2" : {
        "name" : "Mt Pyre - INSIDE - F5 Left Drop - 1,A",
        "to" : "E,24,20,1",
        "level" : "7",
        "connections" : {
            "E,24,19,3": true,
            "E,24,19,4": true,
        }
    },
    "E,24,19,3" : {
        "name" : "Mt Pyre - INSIDE - F5 Top Hole - C,A",
        "to" : "E,24,18,2",
        "level" : "7",
        "connections" : {
            "E,24,19,4": true,
        }
    },
    "E,24,19,4" : {
        "name" : "Mt Pyre - INSIDE - F5 Bottom Hole - C,C",
        "to" : "E,24,18,3",
        "level" : "7",
        "connections" : {
            "E,24,19,3": true,
        }
    },
// F6
    "E,24,20,0" : {
        "name" : "Mt Pyre - INSIDE - F6 Top - 2,1",
        "to" : "E,24,19,0",
        "level" : "7",
        "connections" : {
            "E,24,20,1": true,
        }
    },
    "E,24,20,1" : {
        "name" : "Mt Pyre - INSIDE - F6 Top - 1,A",
        "to" : "E,24,19,2",
        "level" : "7",
        "connections" : {
            "E,24,20,0": true,
        }
    },
/* Mt Pyre - EXT */
// Exterior
    "E,24,21,0" : {
        "name" : "Mt Pyre - OUTSIDE - Exterior Bottom - A,2A",
        "to" : "E,24,15,1",
        "level" : "7",
        "connections" : {
            "E,24,21,1": true,
        }
    },
    "E,24,21,1" : {
        "name" : "Mt Pyre - OUTSIDE - Exterior Top - 13,A",
        "to" : "E,24,22,1",
        "level" : "7",
        "grouped": ["E,24,21,2"],
        "groupMain" : true,
        "connections" : {
            "E,24,21,0": true,
        }
    },
    "E,24,21,2" : {
        "name" : "Mt Pyre - OUTSIDE - Exterior Top - 14,A",
        "to" : "E,24,22,1",
        "level" : "7",
        "grouped": ["E,24,21,1"]
    },
// Summit 
    "E,24,22,1" : {
        "name" : "Mt Pyre - OUTSIDE - Summit - 17,1F",
        "to" : "E,24,21,1",
        "level" : "7",
        "grouped": ["E,24,22,0", "E,24,22,2"],
        "groupMain" : true
    },
    "E,24,22,0" : {
        "name" : "Mt Pyre - OUTSIDE - Summit - 16,1F",
        "to" : "E,24,22,1",
        "level" : "7",
        "grouped": ["E,24,22,1", "E,24,22,2"],
    },
    "E,24,22,2" : {
        "name" : "Mt Pyre - OUTSIDE - Summit - 18,1F",
        "to" : "E,24,22,1",
        "level" : "7",
        "grouped": ["E,24,22,1", "E,24,22,0"],
    },
/* Route 124 - EXT */
    "E,0,39,0" : {
        "name" : "ROUTE 124 - OUTSIDE - House - 46,30",
        "to" : "E,33,0,0",
        "level" : "7",
        "connections" : {
            "E,0,5,6": "HOENN_SURF" 
        }
    },
/* Route 124 - INT */
    "E,33,0,0" : {
        "name" : "ROUTE 124 - INSIDE - House - 3,8",
        "to" : "E,0,39,0",
        "level" : "7",
        "grouped": ["E,33,0,0"],
        "groupMain" : true,
    },
    "E,33,0,1" : {
        "name" : "ROUTE 124 - INSIDE - House - 4,8",
        "to" : "E,0,39,0",
        "level" : "7",
        "grouped": ["E,33,0,0"]
    },
/* Route 125 - EXT */
    "E,0,40,0" : {
        "name" : "ROUTE 125 - OUTSIDE - Shoal Cave - 16,13",
        "to" : "E,24,46,0",
        "level" : "7",
        "connections" : {
            "E,0,5,6": "HOENN_SURF" 
        }
    },
/* Route 125 - INT */
// TODO: Shoal Cave
/* Aqua Hideout */
// F1
    "E,24,23,0" : {
        "name" : "AQUA HIDEOUT - INSIDE - F1 Enterance - D,1B",
        "to" : "E,0,5,6",
        "level" : "7",
        "grouped": ["E,24,23,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,23,2": true,
        }
    },
    "E,24,23,1" : {
        "name" : "AQUA HIDEOUT - INSIDE - F1 Enterance - E,1B",
        "to" : "E,0,5,6",
        "level" : "7",
        "grouped": ["E,24,23,0"]
    },
    "E,24,23,2" : {
        "name" : "AQUA HIDEOUT - INSIDE - F1 Stairs - 16,1",
        "to" : "E,24,24,0",
        "level" : "7",
    },
// F2
    "E,24,24,0" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Right Top - 1D,1",
        "to" : "E,24,23,2",
        "level" : "7",
        "connections" : {
            "E,24,24,5": true,
            "E,24,24,4": true,
        }
    },
    "E,24,24,1" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Center Top - 12,1",
        "to" : "E,24,25,0",
        "level" : "7",
        "connections" : {
            "E,24,24,6": true,
        }
    },
    "E,24,24,2" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Left Right - C,1",
        "to" : "E,24,25,1",
        "level" : "7",
        "connections" : {
            "E,24,25,2": true,
        }
    },
    "E,24,24,4" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Right Right - 1F,4",
        "to" : "E,24,24,7",
        "level" : "7",
        "connections" : {
            "E,24,24,0": true,
            "E,24,24,5": true,
        }
    },
    "E,24,24,5" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Right Right - 1B,4",
        "to" : "E,24,24,8",
        "level" : "7",
        "connections" : {
            "E,24,24,0": true,
            "E,24,24,4": true,
        }
    },
    "E,24,24,6" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Top Center Bottom - 14,4",
        "to" : "E,24,24,10",
        "level" : "7",
        "connections" : {
            "E,24,24,1": true,
        }
    },
    "E,24,24,7" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Center Right - 1B,C",
        "to" : "E,24,24,4",
        "level" : "7",
    },
    "E,24,24,8" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Bottom Left Top - 3,F",
        "to" : "E,24,24,5",
        "level" : "7",
        "connections" : {
            "E,24,24,9": true,
            "E,24,24,10": true,
        }
    },
    "E,24,24,9" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Bottom Left Bottom - 3,14",
        "to" : "E,24,24,12",
        "level" : "7",
        "connections" : {
            "E,24,24,8": true,
            "E,24,24,10": true,
        }
    },
    "E,24,24,10" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Bottom Left Right - 20,13",
        "to" : "E,24,24,6",
        "level" : "7",
        "connections" : {
            "E,24,24,9": true,
            "E,24,24,8": true,
        }
    },
    "E,24,24,11" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Left Side Center (MasterBall) - 17,A",
        "to" : "E,24,24,22",
        "level" : "7"
    },
    "E,24,24,12" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top Top - 2D,3",
        "to" : "E,24,24,9",
        "level" : "7",
        "connections" : {
            "E,24,24,13": true,
            "E,24,24,14": true,
            "E,24,24,15": true,
        }
    },
    "E,24,24,13" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top Left - 2A,5",
        "to" : "E,24,24,18",
        "level" : "7",
        "connections" : {
            "E,24,24,12": true,
            "E,24,24,14": true,
            "E,24,24,15": true,
        }
    },
    "E,24,24,14" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top Center - 2D,5",
        "to" : "E,24,24,12",
        "level" : "7",
        "connections" : {
            "E,24,24,12": true,
            "E,24,24,13": true,
            "E,24,24,15": true,
        }
    },
    "E,24,24,15" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top Right - 30,5",
        "to" : "E,24,24,16",
        "level" : "7",
        "connections" : {
            "E,24,24,12": true,
            "E,24,24,13": true,
            "E,24,24,14": true,
        }
    },
    "E,24,24,16" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top-middle Left - 2A,9",
        "to" : "E,24,24,15",
        "level" : "7",
        "connections" : {
            "E,24,24,17": true,
            "E,24,24,18": true,
        }
    },
    "E,24,24,17" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top-middle Center - 2D,9",
        "to" : "E,24,24,20",
        "level" : "7",
        "connections" : {
            "E,24,24,16": true,
            "E,24,24,18": true,
        }
    },
    "E,24,24,18" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Top-middle Right - 30,9",
        "to" : "E,24,24,13",
        "level" : "7",
        "connections" : {
            "E,24,24,17": true,
            "E,24,24,16": true,
        }
    },
    "E,24,24,19" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom-middle Left - 2A,D",
        "to" : "E,24,24,24",
        "level" : "7",
        "connections" : {
            "E,24,24,20": true,
            "E,24,24,21": true,
        }
    },
    "E,24,24,20" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom-middle Center - 2D,D",
        "to" : "E,24,24,17",
        "level" : "7",
        "connections" : {
            "E,24,24,19": true,
            "E,24,24,21": true,
        }
    },
    "E,24,24,21" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom-middle Right - 30,D",
        "to" : "E,24,24,12",
        "level" : "7",
        "connections" : {
            "E,24,24,19": true,
            "E,24,24,20": true,
        }
    },
    "E,24,24,22" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom Left - 2A,11",
        "to" : "E,24,24,11",
        "level" : "7",
        "connections" : {
            "E,24,24,23": true,
            "E,24,24,24": true,
        }
    },
    "E,24,24,23" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom Center - 2D,11",
        "to" : "E,24,24,50",
        "level" : "7",
        "connections" : {
            "E,24,24,22": true,
            "E,24,24,24": true,
        }
    },
    "E,24,24,24" : {
        "name" : "AQUA HIDEOUT - INSIDE - F2 Right Side Bottom Right - 30,11",
        "to" : "E,24,24,19",
        "level" : "7",
        "connections" : {
            "E,24,24,22": true,
            "E,24,24,23": true,
        }
    },
// F3
    "E,24,25,0" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Right Top Room Top - 12,1",
        "to" : "E,24,24,1",
        "level" : "7",
        "connections" : {
            "E,24,25,6": true,
            "E,24,25,3": true,
        }
    },
    "E,24,25,1" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Center Top Room Top - C,1",
        "to" : "E,24,24,2",
        "level" : "7",
        "connections" : {
            "E,24,25,4": true
        }
    },
    "E,24,25,2" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Left Top Room Top - 3,3",
        "to" : "E,24,24,3",
        "level" : "7",
        "connections" : {
            "E,24,25,3": true
        }
    },
    "E,24,25,3" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Right Top Room Right - 1F,8",
        "to" : "E,24,25,5",
        "level" : "7",
        "connections" : {
            "E,24,25,0": true,
            "E,24,25,6": true
        }
    },
    "E,24,25,4" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Center Top Room Bottom - 8,8",
        "to" : "E,24,25,8",
        "level" : "7",
        "connections" : {
            "E,24,25,1": true,
        }
    },
    "E,24,25,5" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Left Top Room Bottom - 5,8",
        "to" : "E,24,25,3",
        "level" : "7",
        "connections" : {
            "E,24,25,2": true,
        }
    },
    "E,24,25,6" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Right Top Room Bottom - 12,D",
        "to" : "E,24,25,7",
        "level" : "7",
        "connections" : {
            "E,24,25,0": true,
            "E,24,25,3": true,
        }
    },
    "E,24,25,7" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Center Left Room - C,D",
        "to" : "E,24,25,6",
        "level" : "7",
    },
    "E,24,25,8" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Bottom Room Top - 1F,11",
        "to" : "E,24,25,4",
        "level" : "7",
        "connections" : {
            "E,24,25,9": true,
        }
    },
    "E,24,25,9" : {
        "name" : "AQUA HIDEOUT - INSIDE - F3 Bottom Room Bottom - 20,14",
        "to" : "E,24,24,4",
        "level" : "7",
        "connections" : {
            "E,24,25,8": true,
        }
    },
/* Magma Hideout */
// F1
    "E,24,86,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F1 Bottom Left - A,22",
        "to" : "E,24,13,4",
        "level" : "7",
    },
    "E,24,86,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F1 Bottom Right - 19,22",
        "to" : "E,24,87,1",
        "level" : "7",
    },
    "E,24,86,2" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F1 Top Right - 1F,3",
        "to" : "E,24,88,1",
        "level" : "7"
    },
    "E,24,86,3" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F1 Center - 14,16",
        "to" : "E,24,93,0",
        "level" : "7",
        "connections" : {
            "E,24,86,1": true,
        }
    },
 // F2
    "E,24,87,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F2 Center - B,17",
        "to" : "E,24,88,0",
        "level" : "7",
        "connections" : {
            "E,24,87,1": true,
            "E,24,87,2": true,
        }
    },
    "E,24,87,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F2 Top - 8,2",
        "to" : "E,24,86,1",
        "level" : "7",
        "connections" : {
            "E,24,87,0": true,
            "E,24,87,2": true,
        }
    },
    "E,24,87,2" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F2 Bottom - 11,21",
        "to" : "E,24,89,0",
        "level" : "7",
        "connections" : {
            "E,24,87,0": true,
            "E,24,87,1": true,
        }
    },
// F3
    "E,24,88,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F3 Bottom - A,16",
        "to" : "E,24,87,0",
        "level" : "7",
        "connections" : {
            "E,24,88,1": true,
        }
    },
    "E,24,88,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F3 Top - 24,4",
        "to" : "E,24,86,2",
        "level" : "7",
        "connections" : {
            "E,24,88,0": true,
        }
    },
// F4
    "E,24,89,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F4 Bottom - 7,15",
        "to" : "E,24,91,0",
        "level" : "7",
        "connections" : {
            "E,24,89,1": true,
            "E,24,89,2": true,
        }
    },
    "E,24,89,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F4 Center - 15,9",
        "to" : "E,24,90,0",
        "level" : "7",
        "connections" : {
            "E,24,89,0": true,
            "E,24,89,2": true,
        }
    },
    "E,24,89,2" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F4 Top - 17,3",
        "to" : "E,24,87,2",
        "level" : "7",
        "connections" : {
            "E,24,89,0": true,
            "E,24,89,1": true,
        }
    },
// F5
    "E,24,90,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F5 Door - C,F",
        "to" : "E,24,89,1",
        "level" : "7",
    },
// F6
    "E,24,91,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F6 Top - 2E,7",
        "to" : "E,24,89,0",
        "level" : "7",
        "connections" : {
            "E,24,91,1": true,
        }
    },
    "E,24,91,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F6 Bottom - 14,15",
        "to" : "E,24,92,1",
        "level" : "7",
        "connections" : {
            "E,24,91,0": true,
        }
    },
// F7
    "E,24,92,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F7 Top - 10,1",
        "to" : "E,24,93,1",
        "level" : "7",
        "connections" : {
            "E,24,92,1": true,
        }
    },
    "E,24,92,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F7 Bottom - 10,15",
        "to" : "E,24,91,1",
        "level" : "7",
        "connections" : {
            "E,24,92,0": true,
        }
    },
// F8
    "E,24,93,0" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F8 Top - 10,1",
        "to" : "E,24,86,3",
        "level" : "7",
        "connections" : {
            "E,24,93,1": true,
        }
    },
    "E,24,93,1" : {
        "name" : "MAGMA HIDEOUT - INSIDE - F8 Bottom - 10,D",
        "to" : "E,24,92,0",
        "level" : "7",
        "connections" : {
            "E,24,93,0": true,
        }
    },
////// LEVEL 8
/* Route 131 */
    "E,0,46,0" : {
        "name" : "ROUTE 131 - Outside - Sky Pillar Enterance - 24,6",
        "to" : "E,24,77,0",
        "level" : "8",
        "connections" : {
            "E,0,5,6": "HOENN_SURF" 
        }
    },
/* Underwater */
    "E,0,51,0" : {
        "name" : "UNDERWATER - Outside - Sootopolis Enterance - 2D,41",
        "to" : "E,24,5,0",
        "level" : "8"
    },
    "E,0,53,0" : {
        "name" : "UNDERWATER - Outside - Outside Submarine Cave - 26,1A",
        "to" : "E,24,26,0",
        "level" : "8"
    },
    "E,24,5,0" : {
        "name" : "UNDERWATER - Outside - Inside Sootopolis - 9,8",
        "to" : "E,0,51,0",
        "level" : "8"
    },
    "E,24,26,0" : {
        "name" : "UNDERWATER - Outside - Submarine - 6,7",
        "to" : "E,0,53,0",
        "level" : "8"
    },
/* Seafloor cavern */
// TODO - add in ignored once more connections are done
// F1
    "E,24,27,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F1 Door - A,1",
        "to" : "E,24,28,0",
        "level" : "8"
    },
// F2
    "E,24,28,0" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F2 Bottom - 5,12",
        "to" : "E,24,27,1",
        "level" : "8",
        "connections" : {
            "E,24,28,2": "HOENN_STRENGTH",
        }
    },
    "E,24,28,1" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F2 Right - 11,D",
        "to" : "E,24,32,0",
        "level" : "8",
        "connections" : {
            "E,24,28,2": true,
        }
    },
    "E,24,28,2" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F2 Top - 6,2",
        "to" : "E,24,29,0",
        "level" : "8",
        "connections" : {
            "E,24,28,1": true,
            "E,24,28,0": "HOENN_STRENGTH",
        }
    },
// F3
    "E,24,29,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F3 Bottom Right - A,7",
        "to" : "E,24,28,2",
        "level" : "8",
        "connections" : {
            "E,24,29,1": "HOENN_STRENGTH",
            "E,24,29,2": "HOENN_STRENGTH",
            "E,24,29,3": "HOENN_STRENGTH",
        }
    },
    "E,24,29,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F3 Bottom Left - 4,A",
        "to" : "E,24,31,0",
        "level" : "8",
        "connections" : {
            "E,24,29,1": "HOENN_STRENGTH",
        }
    },
    "E,24,29,2" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F3 Top Left - 6,11",
        "to" : "E,24,33,0",
        "level" : "8",
        "connections" : {
            "E,24,29,1": "HOENN_STRENGTH",
        }
    },
    "E,24,29,3" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F3 Top Right - B,1",
        "to" : "E,24,34,0",
        "level" : "8",
        "connections" : {
            "E,24,29,1": "HOENN_STRENGTH",
        }
    },
// F4
    "E,24,30,0" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F4 Top - 8,1",
        "to" : "E,24,35,1",
        "level" : "8",
        "connections" : {
            "E,24,30,1": true,
            "E,24,30,2": true,
        }
    },
    "E,24,30,1" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F4 Bottom Right - 9,D",
        "to" : "E,24,34,1",
        "level" : "8",
        "connections" : {
            "E,24,30,0": true,
            "E,24,30,2": true,
        }
    },
    "E,24,30,2" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F4 Bottom Left - 4,F",
        "to" : "E,24,33,1",
        "level" : "8",
        "connections" : {
            "E,24,30,0": true,
            "E,24,30,1": true,
        }
    },
// F5
    "E,24,31,0" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F5 Top Right - D,1",
        "to" : "E,24,29,1",
        "level" : "8",
        "connections" : {
            "E,24,31,2": true,
            "E,24,31,3": true,
        }
    },
    "E,24,31,1" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F5 Top Left - 4,1",
        "to" : "E,24,32,1",
        "level" : "8",
        "connections" : {
            "E,24,31,0": true,
            "E,24,31,2": true,
            "E,24,31,3": true,
        }
    },
    "E,24,31,2" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F5 Center - 9,A",
        "to" : "E,24,32,2",
        "level" : "8",
        "connections" : {
            "E,24,31,0": true,
            "E,24,31,3": true,
        }
    },
    "E,24,31,3" : {
        "name" : "SEAFLOOR CAVERN - INSIDE - F5 Bottom - A,F",
        "to" : "E,24,27,50",
        "level" : "8",
    },
// F6
    "E,24,32,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F6 Top - 4,1",
        "to" : "E,24,28,1",
        "level" : "8",
        "connections" : {
            "E,24,32,1": "HOENN_STRENGTH",
            "E,24,32,2": "HOENN_STRENGTH",
        }
    },
    "E,24,32,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F6 Bottom Right - F,C",
        "to" : "E,24,31,1",
        "level" : "8",
        "connections" : {
            "E,24,32,0": "HOENN_STRENGTH",
        }
    },
    "E,24,32,2" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F6 Bottom Left - 7,11",
        "to" : "E,24,31,2",
        "level" : "8",
        "connections" : {
            "E,24,32,0": "HOENN_STRENGTH",
        }
    },
// F7
    "E,24,33,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F7 Bottom - B,15",
        "to" : "E,24,29,2",
        "level" : "8",
    },
    "E,24,33,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F7 Top - 4,1",
        "to" : "E,24,30,2",
        "level" : "8",
    },
    "E,24,33,2" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F7 Center - E,8",
        "to" : "E,24,27,1",
        "level" : "8",
    },
// F8
    "E,24,34,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F8 Bottom - 3,7",
        "to" : "E,24,29,3",
        "level" : "8",
    },
    "E,24,34,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F8 Top - 5,1",
        "to" : "E,24,30,1",
        "level" : "8",
    },
// F9
    "E,24,35,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F9 Top - 5,2",
        "to" : "E,24,36,0",
        "level" : "8",
        "connections" : {
            "E,24,35,1": "HOENN_STRENGTH",
        }
    },
    "E,24,35,1" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F9 Bottom - 5,C",
        "to" : "E,24,30,0",
        "level" : "8",
        "connections" : {
            "E,24,35,0": "HOENN_STRENGTH",
        }
    },
// F10
    "E,24,36,0" : {
        "ignore" : "true",
        "name" : "SEAFLOOR CAVERN - INSIDE - F10 Door - 5,4",
        "to" : "E,24,35,0",
        "level" : "8",
    },
/* cave of origin */
// F1
    "E,24,37,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F1 Bottom - 9,14",
        "to" : "E,0,7,3",
        "level" : "8",
        "connections" : {
            "E,24,37,1": true,
        }
    },
    "E,24,37,1" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F1 Top - 9,5",
        "to" : "E,24,38,0",
        "level" : "8",
        "connections" : {
            "E,24,37,0": true,
        }
    },
// F2
    "E,24,38,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F2 Bottom - B,11",
        "to" : "E,24,37,1",
        "level" : "8",
        "connections" : {
            "E,24,38,1": true,
        }
    },
    "E,24,38,1" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F2 Top - E,5",
        "to" : "E,24,42,0",
        "level" : "8",
        "connections" : {
            "E,24,38,0": true,
        }
    },
// F3
    "E,24,39,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F3 Top - D,5",
        "to" : "E,24,38,1",
        "level" : "8",
        "connections" : {
            "E,24,39,1": true,
        }
    },
    "E,24,39,1" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F3 Bottom - 5,B",
        "to" : "E,24,40,0",
        "level" : "8",
        "connections" : {
            "E,24,39,0": true,
        }
    },
// F4
    "E,24,40,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F4 Top - 5,A",
        "to" : "E,24,39,1",
        "level" : "8",
        "connections" : {
            "E,24,40,1": true,
        }
    },
    "E,24,40,1" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F4 Bottom - 8,E",
        "to" : "E,24,41,0",
        "level" : "8",
        "connections" : {
            "E,24,40,0": true,
        }
    },
// F5
    "E,24,41,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F5 Bottom - 7,E",
        "to" : "E,24,40,1",
        "level" : "8",
        "connections" : {
            "E,24,41,1": true,
        }
    },
    "E,24,41,1" : {
        "name" : "CAVE OF ORIGIN - INSIDE - F5 Top - C,6",
        "to" : "E,24,42,0",
        "level" : "8",
        "connections" : {
            "E,24,41,0": true,
        }
    },
// F6
    "E,24,42,0" : {
        "name" : "CAVE OF ORIGIN - INSIDE - Wallice Cave - 9,3",
        "to" : "E,24,38,1",
        "level" : "8",
    },
/* Sky pillar */
// F1
    "E,24,77,0" : {
        "name" : "SKY PILLAR - INSIDE - F1 Bottom - 6,10",
        "to" : "E,0,46,0",
        "level" : "8",
        "connections" : {
            "E,24,77,1": true,
        }
    },
    "E,24,77,1" : {
        "name" : "SKY PILLAR - INSIDE - F1 Top - E,4",
        "to" : "E,24,78,0",
        "level" : "8",
        "connections" : {
            "E,24,77,0": true,
        }
    },
// F2
    "E,24,78,0" : {
        "name" : "SKY PILLAR - INSIDE - F2 Bottom - 11,D",
        "to" : "E,24,77,1",
        "level" : "8",
    },
    "E,24,78,1" : {
        "name" : "SKY PILLAR - INSIDE - F2 Top - E,5",
        "to" : "E,24,79,0",
        "level" : "8",
        "connections" : {
            "E,24,78,0": true,
        }
    },
// F3
    "E,24,79,0" : {
        "name": "SKY PILLAR - INSIDE - F3 Door - 6,D",
        "level": "8", 
        "to" : "E,24,78,1",
        "grouped": ["E,24,79,1"],
        "groupMain" : true,
        "connections" : {
            "E,24,79,2": true,
        }
    },
    "E,24,79,1" : {
        "name": "SKY PILLAR - INSIDE - F3 Door - 7,D",
        "level": "8", 
        "to" : "E,24,78,1",
        "grouped": ["E,24,79,0"]
    },
    "E,24,79,2" : {
        "name" : "SKY PILLAR - INSIDE - F3 Stairs - 6,D",
        "to" : "E,24,80,0",
        "level" : "8",
        "connections" : {
            "E,24,79,0": true,
        }
    },
// F4
    "E,24,80,0" : {
        "name" : "SKY PILLAR - INSIDE - F4 Right - A,1",
        "to" : "E,24,79,2",
        "level" : "8",
        "connections" : {
            "E,24,79,0": true,
            "E,24,79,2": true,
            "E,24,80,1": "BIKE",
        }
    },
    "E,24,80,1" : {
        "name" : "SKY PILLAR - INSIDE - F4 Left - 3,1",
        "to" : "E,24,81,0",
        "level" : "8",
        "connections" : {
            "E,24,79,0": true,
            "E,24,79,2": true,
            "E,24,80,0": "BIKE",
        }
    },
// F5
    "E,24,81,0" : {
        "name" : "SKY PILLAR - INSIDE - F5 Left - 3,1",
        "to" : "E,24,80,1",
        "level" : "8",
        "connections" : {
            "E,24,81,1": true,
        }
    },
    "E,24,81,1" : {
        "name" : "SKY PILLAR - INSIDE - F5 Right - B,1",
        "to" : "E,24,82,0",
        "level" : "8",
        "connections" : {
            "E,24,82,0": true,
        }
    },
    "E,24,81,2" : {
        "name" : "SKY PILLAR - INSIDE - F5 Center - 7,1",
        "to" : "E,24,82,1",
        "level" : "8",
    },
// F6
    "E,24,82,0" : {
        "name" : "SKY PILLAR - INSIDE - F6 Right - B,1",
        "to" : "E,24,81,1",
        "level" : "8",
        "connections" : {
            "E,24,81,0": true,
            "E,24,81,2": "BIKE"
        }
    },
    "E,24,82,1" : {
        "name" : "SKY PILLAR - INSIDE - F6 Center - 3,1",
        "to" : "E,24,81,2",
        "level" : "8",
        "connections" : {
            "E,24,82,2": true,
            "E,24,81,0": true,
        }
    },
    "E,24,82,2" : {
        "name" : "SKY PILLAR - INSIDE - F6 Left - 7,1",
        "to" : "E,24,84,0",
        "level" : "8",
        "connections" : {
            "E,24,82,1": true,
            "E,24,81,0": true,
        }
    },
// F7
    "E,24,84,0" : {
        "name" : "SKY PILLAR - INSIDE - F7 Left - 3,1",
        "to" : "E,24,82,0",
        "level" : "8",
        "connections" : {
            "E,24,84,1": true,
        }
    },
    "E,24,84,1" : {
        "name" : "SKY PILLAR - INSIDE - F7 Right - A,1",
        "to" : "E,24,85,0",
        "level" : "8",
        "connections" : {
            "E,24,84,0": true,
        }
    },
// F8
    "E,24,85,0" : {
        "name" : "SKY PILLAR - INSIDE - F8 Door - 10,E",
        "to" : "E,24,84,1",
        "level" : "8",
    },
/* Marine Cave */
    "E,24,103,0" : {
        "name" : "MARINE CAVE - INSIDE - Enterance - 14,4",
        "to" : "E,24,102,0",
        "level" : "8",
    },
/* Terra Cave */
    "E,24,105,0" : {
        "name" : "TERRA CAVE - INSIDE - Enterance - 5,4",
        "to" : "E,24,104,1",
        "level" : "8",
    },
/* Sealed Chamber */ 
// TODO - Later
/* Victory Road */
// F1
    "E,24,43,0" : {
        "name" : "VICTORY ROAD - INSIDE - F1 Enterance - F,28",
        "to" : "E,0,8,2",
        "level" : "9",
        "connections" : {
            "E,24,43,4": true,
        }
    },
    "E,24,43,1" : {
        "name" : "VICTORY ROAD - INSIDE - F1 Exit - 27,5",
        "to" : "E,0,8,3",
        "level" : "9",
        "connections" : {
            "E,24,43,2": true,
        }
    },
    "E,24,43,2" : {
        "name" : "VICTORY ROAD - INSIDE - F1 Middle Ladder - 15,20",
        "to" : "E,24,44,5",
        "level" : "9",
        "connections" : {
            "E,24,43,1": true,
        }
    },
    "E,24,43,3" : {
        "name" : "VICTORY ROAD - INSIDE - F1 Bottom Right - 2A,26",
        "to" : "E,24,44,2",
        "level" : "9",
    },
    "E,24,43,4" : {
        "name" : "VICTORY ROAD - INSIDE - F1 Top Left Ladder - 9,E",
        "to" : "E,24,44,4",
        "level" : "9",
        "connections" : {
            "E,24,43,0": true,
        }
    },
// F2
    "E,24,44,0" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Bottom middle Right Ladder - 1E,19",
        "to" : "E,24,45,0",
        "level" : "9",
        "connections" : {
            "E,24,44,4": "HOENN_ROCK_SMASH",
        }
    },
    "E,24,44,1" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Bottom middle Top Ladder - 11,10",
        "to" : "E,24,45,2",
        "level" : "9",
        "connections" : {
            "E,24,44,6": true,
            "E,24,44,5": "HOENN_STRENGTH",
        }
    },
    "E,24,44,2" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Bottom Right - 2A,19",
        "to" : "E,24,43,3",
        "level" : "9",
        "connections" : {
            "E,24,44,0": true,
        }
    },
    "E,24,44,3" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Top Right - 2A,2",
        "to" : "E,24,45,1",
        "level" : "9",
    },
    "E,24,44,4" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Top Left - 8,3",
        "to" : "E,24,43,4",
        "level" : "9",
        "connections" : {
            "E,24,44,2": "HOENN_STRENGTH",
        }
    },
    "E,24,44,5" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Middle Bottom Left - 14,15",
        "to" : "E,24,43,2",
        "level" : "9",
        "connections" : {
            "E,24,44,1": "HOENN_STRENGTH",
        }
    },
    "E,24,44,6" : {
        "name" : "VICTORY ROAD - INSIDE - F2 Bottom Left - 5,1A",
        "to" : "E,24,45,3",
        "level" : "9",
        "connections" : {
            "E,24,44,1": true,
        }
    },
// F3
    "E,24,45,0" : {
        "name" : "VICTORY ROAD - INSIDE - F3 Bottom Right - 1E,19",
        "to" : "E,24,44,0",
        "level" : "9",
        "connections" : {
            "E,24,45,1": "HOENN_SURF",
        }
    },
    "E,24,45,1" : {
        "name" : "VICTORY ROAD - INSIDE - F3 Top Right - 2B,2",
        "to" : "E,24,44,3",
        "level" : "9",
        "connections" : {
            "E,24,45,0": true,
            "E,24,45,3": "HOENN_WATERFALL",
        }
    },
    "E,24,45,2" : {
        "name" : "VICTORY ROAD - INSIDE - F3 Middle - 13,C",
        "to" : "E,24,44,1",
        "level" : "9",
        "connections" : {
            "E,24,45,3": "HOENN_SURF",
        }
    },
    "E,24,45,3" : {
        "name" : "VICTORY ROAD - INSIDE - F3 Bottom Left - 5,1A",
        "to" : "E,24,44,6",
        "level" : "9",
        "connections" : {
            "E,24,45,2": "HOENN_SURF",
            "E,24,45,1": "HOENN_WATERFALL",
        }
    },
/* SOTHERN ISLAND */
    "E,26,9,0" : {
        "name" : "SOTHERN ISLAND - OUTSIDE - Trees Enterance - E,5",
        "to" : "E,26,10,0",
        "level" : "9",
        "grouped" : ["E,26,9,1"],
        "groupMain" : true
    },
    "E,26,9,1" : {
        "name" : "SOTHERN ISLAND - OUTSIDE - Trees Enterance - F,5",
        "to" : "E,26,10,1",
        "level" : "9",
        "grouped" : ["E,26,9,0"],
    },
    "E,26,10,0" : {
        "name" : "SOTHERN ISLAND - INSIDE - Trees Enterance - D,12",
        "to" : "E,26,9,0",
        "level" : "9",
        "grouped" : ["E,26,10,1"],
        "groupMain" : true
    },
    "E,26,10,1" : {
        "name" : "SOTHERN ISLAND - INSIDE - Trees Enterance - E,12",
        "to" : "E,26,9,1",
        "level" : "9",
        "grouped" : ["E,26,10,0"],
    },
/* FAR AWAY ISLAND */
    "E,26,56,0" : {
        "name" : "FAR AWAY ISLAND - OUTSIDE - Trees Enterance - 16,7",
        "to" : "E,26,57,0",
        "level" : "9",
        "grouped" : ["E,26,56,1"],
        "groupMain" : true
    },
    "E,26,56,1" : {
        "name" : "FAR AWAY ISLAND - OUTSIDE - Trees Enterance - 16,7",
        "to" : "E,26,57,1",
        "level" : "9",
        "grouped" : ["E,26,56,0"],
    },
    "E,26,57,0" : {
        "name" : "FAR AWAY ISLAND - INSIDE - Trees Enterance - C,13",
        "to" : "E,26,56,0",
        "level" : "9",
        "grouped" : ["E,26,57,1"],
        "groupMain" : true
    },
    "E,26,57,1" : {
        "name" : "FAR AWAY ISLAND - INSIDE - Trees Enterance - D,13",
        "to" : "E,26,56,1",
        "level" : "9",
        "grouped" : ["E,26,57,0"],
    },
/* BIRTH ISLAND */
    "E,26,58,0" : {
        "name" : "BIRTH ISLAND - OUTSIDE - Dock - F,18",
        "to" : "E,26,59,0",
        "level" : "9",
    },
/* NAVEL ROCK */
// 1
    "E,26,66,0" : {
        "name" : "NAVEL ROCK - OUTSIDE - Dock - A,12",
        "to" : "E,26,67,0",
        "level" : "9",
        "connections" : {
            "E,26,66,1": true,
        }
    },
    "E,26,66,1" : {
        "name" : "NAVEL ROCK - OUTSIDE - Cave - A,A",
        "to" : "E,26,68,1",
        "level" : "9",
        "connections" : {
            "E,26,66,0": true,
        }
    },
// 2
    // INSIDE DOCK
// 3
    "E,26,68,0" : {
        "name" : "NAVEL ROCK - INSIDE - F1 Top - A,5",
        "to" : "E,26,69,0",
        "level" : "9",
        "connections" : {
            "E,26,68,1": true,
        }
    },
    "E,26,68,1" : {
        "name" : "NAVEL ROCK - INSIDE - F1 Bottom - A,1A",
        "to" : "E,26,66,1",
        "level" : "9",
        "connections" : {
            "E,26,68,0": true,
        }
    },
// 4
    "E,26,69,0" : {
        "name" : "NAVEL ROCK - INSIDE - F2 Top - 4,3",
        "to" : "E,26,68,0",
        "level" : "9",
        "connections" : {
            "E,26,69,1": true,
        }
    },
    "E,26,69,1" : {
        "name" : "NAVEL ROCK - INSIDE - F2 Bottom - 12,9",
        "to" : "E,26,70,1",
        "level" : "9",
        "connections" : {
            "E,26,69,0": true,
        }
    },
// 5
    "E,26,70,0" : {
        "name" : "NAVEL ROCK - INSIDE - F3 Top Left - 4,6",
        "to" : "E,26,71,0",
        "level" : "9",
        "connections" : {
            "E,26,70,1": true,
            "E,26,70,2": true,
        }
    },
    "E,26,70,1" : {
        "name" : "NAVEL ROCK - INSIDE - F3 Bottom - B,4F",
        "to" : "E,26,69,1",
        "level" : "9",
        "connections" : {
            "E,26,70,0": true,
            "E,26,70,2": true,
        }
    },
    "E,26,70,2" : {
        "name" : "NAVEL ROCK - INSIDE - F3 Bottom - 16,6",
        "to" : "E,26,76,0",
        "level" : "9",
        "connections" : {
            "E,26,70,1": true,
            "E,26,70,0": true,
        }
    },
// 6 -- Various identical rooms
    // TODO
// 7
    // TODO
// 8
    // TODO
// 9
    // TODO
// 10
    "E,26,74,1" : {
        "name" : "NAVEL ROCK - OUTSIDE - HOHO - D,14",
        "to" : "E,26,74,1",
        "level" : "9",
    },
// 11 -- Various identical rooms
    // TODO
// 12
    // TODO
// 13
    // TODO
// 14
    // TODO
// 15
    // TODO
// 16
    // TODO
// 17
    // TODO
// 18
    // TODO
// 19
    // TODO
// 20
    // TODO
// 21
    // TODO
// 22
    "E,26,86,0" : {
        "name" : "NAVEL ROCK - OUTSIDE - LUGIA - E,13",
        "to" : "E,26,86,0",
        "level" : "9",
    },
}