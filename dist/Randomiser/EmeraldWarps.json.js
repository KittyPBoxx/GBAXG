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
            "E,0,0,1": false,
            "E,0,0,2": true,
            "E,0,0,4": true,
            "E,0,0,5": true,
            "E,0,10,2": true,
            "E,0,19,0": false,
            "E,0,19,4": false,
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
        // PK
        "to" : "E,9,11,0"
    },
    "E,0,1,1" : {
        // MART
        "to" : "E,9,13,0"
    },
    "E,0,1,2" : {
        "to" : "E,9,0,0"
    },
    "E,0,1,3" : {
        // BATTLE HALL
        "to" : "E,9,2,0"
    },
    "E,0,1,4" : {
        "to" : "E,9,6,0"
    },
    "E,0,1,5" : {
        // MUSEUM
        "to" : "E,9,7,0",
        "grouped": ["E,0,1,7"],
        "groupMain" : true
    },
    "E,0,1,6" : {
        "to" : "E,9,5,0"
    },
    "E,0,1,7" : {
        // MUSEUM
        "to" : "E,9,7,1",
        "grouped" : "E,0,1,5"
    },
    "E,0,1,8" : {
        "to" : "E,9,9,0"
    },
    "E,0,1,9" : {
        // SHIP ARRIVING?
        "to" : "E,9,9,2",
        "ignore": true
    },
    "E,0,1,10" : {
        // DUPLICATE
        "to" : "E,9,10,0",
        "ignore": true
    },
/* SLATEPORT CITY - INT */
    "E,9,0,0" : {
        "to": "E,0,1,2",
        "grouped": ["E,9,0,1"],
        "groupMain" : true
    },
    "E,9,0,1" : {
        "to": "E,0,1,2",
        "grouped": ["E,9,0,0"]
    },
    "E,9,0,2" : {
        "to": "E,9,1,0"
    },
    "E,9,1,0" : {
        "to": "E,9,0,2"
    },
    "E,9,2,0" : {
        // BATTLE HALL
        "to": "E,0,1,3",
        "grouped": ["E,9,2,1"],
        "groupMain" : true,
        "ignore": true
    },
    "E,9,2,1" : {
        // BATTLE HALL
        "to": "E,0,1,3",
        "grouped": ["E,9,2,0"],
        "ignore": true
    },
    "E,9,5,0" : {
        "to": "E,0,1,6",
        "grouped": ["E,9,5,1"],
        "groupMain" : true
    },
    "E,9,5,1" : {
        "to": "E,0,1,6",
        "grouped": ["E,9,5,0"]
    },
    "E,9,6,0" : {
        "to": "E,0,1,4",
        "grouped": ["E,9,6,1"],
        "groupMain" : true
    },
    "E,9,6,1" : {
        "to": "E,0,1,4",
        "grouped": ["E,9,6,0"]
    },
    "E,9,7,0" : {
        "to": "E,0,1,5",
        "grouped": ["E,9,7,1"],
        "groupMain" : true
    },
    "E,9,7,1" : {
        "to": "E,0,1,7",
        "grouped": ["E,9,7,0"]
    },
    "E,9,7,2" : {
        "to": "E,9,8,0"
    },
    "E,9,8,0" : {
        "to": "E,9,7,2"
    },
    "E,9,9,0" : {
        "to": "E,0,1,8",
        "grouped": ["E,9,9,1"],
        "groupMain" : true
    },
    "E,9,9,1" : {
        "to": "E,0,1,8",
        "grouped": ["E,9,9,0"]
    },
    "E,9,10,0" : {
        "to": "E,0,1,10",
        "grouped": ["E,9,10,0"],
        "groupMain" : true
    },
    "E,9,10,1" : {
        "to": "E,0,1,10",
        "grouped": ["E,9,10,1"]
    },
    "E,9,11,0" : {
        // PK
        "to": "E,0,1,0",
        "grouped": ["E,9,11,1"],
        "groupMain" : true
    },
    "E,9,11,1" : {
        // PK
        "to": "E,0,1,0",
        "grouped": ["E,9,11,0"]
    },
    "E,9,11,2" : {
        // PK
        "to": "E,9,12,0"
    },
    "E,9,12,0" : {
        // PK (upstairs)
        "to": "E,9,11,2",
        "ignore": true
    },
    "E,9,13,0" : {
        // MART
        "to": "E,0,1,1",
        "grouped": ["E,9,13,1"],
        "groupMain" : true
    },
    "E,9,13,1" : {
        // MART
        "to": "E,0,1,1",
        "grouped": ["E,9,13,0"]
    },
/* MAUVILLE CITY - EXT */
    "E,0,2,0" : {
        // GYM
        "to" : "E,10,0,0"
    },
    "E,0,2,1" : {
        //PK
        "to" : "E,10,5,0"
    },
    "E,0,2,2" : {
        //BIKE
        "to" : "E,10,1,0"
    },
    "E,0,2,3" : {
        // MART
        "to" : "E,10,7,0"
    },
    "E,0,2,4" : {
        "to" : "E,10,2,0"
    },
    "E,0,2,5" : {
        // GAME CORNER
        "to" : "E,10,3,0"
    },
    "E,0,2,6" : {
        "to" : "E,10,4,0"
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
        "to" : "E,12,2,0"
    },
    "E,0,4,1" : {
        "to" : "E,12,0,0"
    },
    "E,0,4,2" : {
        // GYM
        "to" : "E,12,1,0"
    },
    "E,0,4,3" : {
        // MART
        "to" : "E,12,4,0"
    },
    "E,0,4,4" : {
        "to" : "E,12,5,0"
    },
    "E,0,4,5" : {
        "to" : "E,12,6,0"
    },
    "E,0,4,6" : {
        "to" : "E,12,7,0"
    },
    "E,0,4,7" : {
        "to" : "E,12,8,0"
    },
    "E,0,4,8" : {
        "to" : "E,12,9,0"
    },
/* LILYCOVE CITY - EXT */
    "E,0,5,0" : {
        // DEPT
        "to" : "E,13,16,0"
    },
    "E,0,5,1" : {
        "to" : "E,13,0,0"
    },
    "E,0,5,2" : {
        // PK
        "to" : "E,13,6,0"
    },
    "E,0,5,3" : {
        // MUSEUM
        "to" : "E,13,2,0",
        "grouped" : ["E,0,5,13"],
        "groupMain" : true
    },
    "E,0,5,4" : {
        // CONTEST HALL
        "to" : "E,13,4,0"
    },
    "E,0,5,5" : {
        "to" : "E,13,9,0"
    },
    "E,0,5,6" : {
        "to" : "E,24,23,0"
    },
    "E,0,5,7" : {
        "to" : "E,13,11,0"
    },
    "E,0,5,8" : {
        "to" : "E,13,12,0"
    },
    "E,0,5,9" : {
        "to" : "E,13,13,0"
    },
    "E,0,5,10" : {
        "to" : "E,13,14,0"
    },
    "E,0,5,11" : {
        "to" : "E,13,15,0"
    },
    "E,0,5,12" : {
        "to" : "E,13,10,0"
    },
    "E,0,5,13" : {
        // MUSEUM
        "to" : "E,13,2,1",
        "grouped": ["E,0,5,3"]
    },
/* MOSSDEEP CITY - EXT */
    "E,0,6,0" : {
        "to" : "E,14,1,0"
    },
    "E,0,6,1" : {
        // GYM
        "to" : "E,14,0,0"
    },
    "E,0,6,2" : {
        // PK
        "to" : "E,14,3,0"
    },
    "E,0,6,3" : {
        "to" : "E,14,2,0"
    },
    "E,0,6,4" : {
        // MART
        "to" : "E,14,5,0"
    },
    "E,0,6,5" : {
        "to" : "E,14,6,0"
    },
    "E,0,6,6" : {
        // STEVENS HOUSE
        "to" : "E,14,7,0"
    },
    "E,0,6,7" : {
        "to" : "E,14,8,0"
    },
    "E,0,6,8" : {
        // SPACE
        "to" : "E,14,9,0"
    },
    "E,0,6,9" : {
        // MINI GAME PLACE
        "to" : "E,14,11,0"
    },
/* SOOTOPOLIS CITY - EXT */
    "E,0,7,0"  : {
        // PK
        "to" : "E,15,2,0"
    },
    "E,0,7,1"  : {
        // MART
        "to" : "E,15,4,0"
    },
    "E,0,7,2"  : {
        // GYM
        "to" : "E,15,0,0"
    },
    "E,0,7,3"  : {
        // CAVE OF ORIGIN
        "to" : "E,24,37,0"
    },
    "E,0,7,4"  : {
        "to" : "E,15,5,0"
    },
    "E,0,7,5"  : {
        "to" : "E,15,6,0"
    },
    "E,0,7,6"  : {
        "to" : "E,15,7,0"
    },
    "E,0,7,7"  : {
        "to" : "E,15,8,0"
    },
    "E,0,7,8"  : {
        "to" : "E,15,9,0"
    },
    "E,0,7,9"  : {
        "to" : "E,15,10,0"
    },
    "E,0,7,10" : {
        "to" : "E,15,11,0"
    },
    "E,0,7,11" : {
        "to" : "E,15,12,0"
    },
    "E,0,7,12" : {
        // E-READER HOUSE
        "to" : "E,15,13,0"
    },
/* EVER GRANDE CITY - EXT */
    "E,0,8,0" : {
        // E4 Entrance way
        "to" : "E,16,10,0"
    },
    "E,0,8,1" : {
        // PK
        "to" : "E,16,12,0"
    },
    "E,0,8,2" : {
        //VICTORY ROAD Enterance
        "to" : "E,24,43,0"
    },
    "E,0,8,3" : {
        //VICTORY ROAD Exit
        "to" : "E,24,43,1"
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
            "E,0,10,3": true
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
            "E,0,21,0": true
            // ADD SURF / BOAT connections
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
/* LAVARIDGE CITY - EXT */
    "E,0,12,0" : {
        // HERB SHOP
        "to" : "E,4,0,0"
    },
    "E,0,12,1" : {
        // GYM
        "to" : "E,4,1,0"
    },
    "E,0,12,2" : {
        // MART
        "to" : "E,4,4,0"
    },
    "E,0,12,3" : {
        // PK
        "to" : "E,4,5,0"
    },
    "E,0,12,4" : {
        "to" : "E,4,3,0"
    },
    "E,0,12,5" : {
        // PK (back)
        "to" : "E,4,5,3"
    },
/* FALLARBOR CITY - EXT */
    "E,0,13,0" : {
        // MART
        "to" : "E,5,0,0"
    },
    "E,0,13,1" : {
        // BATTLE HALL
        "to" : "E,5,1,0"
    },
    "E,0,13,2" : {
        // PK
        "to" : "E,5,4,0"
    },
    "E,0,13,3" : {
        "to" : "E,5,3,0"
    },
    "E,0,13,4" : {
        "to" : "E,5,7,0"
    },
/* VERDANTURF CITY - EXT */
    "E,0,14,0" : {
        // BATTLE HALL
        "to" : "E,6,0,0"
    },
    "E,0,14,1" : {
        // MART
        "to" : "E,6,3,0"
    },
    "E,0,14,2" : {
        // PK
        "to" : "E,6,4,0"
    },
    "E,0,14,3" : {
        "to" : "E,6,6,0"
    },
    "E,0,14,4" : {
        //RUSTURF TUNNEL (left exit)
        "to" : "E,24,4,1"
    },
    "E,0,14,5" : {
        "to" : "E,6,7,0"
    },
    "E,0,14,6" : {
        "to" : "E,6,8,0"
    },
/* PACIFIDLOG CITY - EXT */
    "E,0,15,0" : {
        // PK
        "to" : "E,7,0,0"
    },
    "E,0,15,1" : {
        "to" : "E,7,2,0"
    },
    "E,0,15,2" : {
        "to" : "E,7,3,0"
    },
    "E,0,15,3" : {
        "to" : "E,7,4,0"
    },
    "E,0,15,4" : {
        "to" : "E,7,5,0"
    },
    "E,0,15,5" : {
        "to" : "E,7,6,0"
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
        "to": "E,0,31,0"
    },
    "E,24,4,1" : {
        "name": "RUSTURF TUNNEL - INSIDE - Centre - 12,14",
        "to": "E,0,31,2"
    },
    "E,24,4,2" : {
        "name": "RUSTURF TUNNEL - INSIDE - Right - 1D,10",
        "to": "E,0,14,4"
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
    "E,25,67,0" : {
        "name": "ISLAND CAVE - INSIDE - Enterance - 8,1D",
        "to" : "E,0,20,0"
    },
    "E,25,67,1" : {
        "name": "ISLAND CAVE - INSIDE - Walk round left / stand still door - 8,14",
        "to" : "E,24,76,2"
    },
    "E,25,67,2" : {
        "name": "ISLAND CAVE - INSIDE - Regie Ice - 8,B",
        "to" : "E,24,76,1"
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
    "E,24,7,0" : {
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
            "E,24,8,3": true
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
            "E,24,9,2": true
        }
    },
    "E,24,8,5" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Top Center Ladder - C,3",
        "to" : "E,24,9,3",
        "level" : "2",
        "connections" : {
            "E,24,9,3": true
        }
    },
    "E,24,8,6" : {
        "name" : "GRANITE CAVE - INSIDE - F2 Top Right Ladder - 1D,2",
        "to" : "E,24,9,4",
        "level" : "2",
        "connections" : {
            "E,24,9,3": true
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
    }
}