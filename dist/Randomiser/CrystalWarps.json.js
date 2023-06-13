var CRYSTAL_WARPS = 
{
/* NEW BARK - EXT */
    "C,0,9,3" : {
        "name": "NEW BARK TOWN - OUTSIDE - Left - 3,C",
        "level" : "1",
        "to" : "C,1,3,0",
        "connections": {
            "C,0,9,1": true
        }
    },
    "C,0,9,1" : {
        // Player House
        "name": "NEW BARK TOWN - OUTSIDE - Player House - E,6",
        "level" : "1",
        "to" : "C,1,0,0",
        "connections": {
            "C,0,9,0": true,
            "C,0,9,2": true,
            "C,0,9,3": true,
            "C,0,16,0": true,
            "C,0,10,2": true,
            "C,0,35,0": "JOHTO_SURF"
        }
    },
    "C,0,9,2" : {
        // ELM LAB
        "name": "NEW BARK TOWN - OUTSIDE - Elms Lab - 7,4",
        "level" : "1",
        "to" : "C,1,4,0",
        "connections": {
            "C,0,9,1": true
        }
    },
    "C,0,9,0" : {
        "name": "NEW BARK TOWN - OUTSIDE - Right (Elms house) - C,D",
        "level" : "1",
        "to" : "C,1,2,0",
        "connections": {
            "C,0,9,1": true
        }
    },
/* NEW BARK - INT */
    "C,1,3,0" : {
        "name": "NEW BARK TOWN - INSIDE - Left - 4,8",
        "level" : "1",
        "to" : "C,0,9,3",
    },
    "C,1,0,0" : {
        // Player house
        "name": "NEW BARK TOWN - INSIDE - Player House - 9,8",
        "level" : "1",
        "to" : "C,0,9,1",
        "connections": {
            "C,1,0,1": true
        }
    },
    "C,1,0,1" : {
        // Player house
        "name": "NEW BARK TOWN - INSIDE - Player House (stairs) - A,2",
        "level" : "1",
        "to" : "C,1,1,0",
        "connections": {
            "C,1,0,0": true
        }
    },
    "C,1,1,0" : {
        // Player room
        "name": "NEW BARK TOWN - INSIDE - Player Room - 9,2",
        "level" : "1",
        "ignore": true, 
        "to" : "C,1,0,1"
    },
    "C,1,4,0" : {
        "name": "NEW BARK TOWN - INSIDE - Elm Lab - E,14",
        "level" : "1",
        "to" : "C,0,9,2"
    },
    "C,1,2,0" : {
        "name": "NEW BARK TOWN - INSIDE - Right (Elm House) - 4,8",
        "level" : "1",
        "to" : "C,0,9,0"
    },
/* CHERRY GROVE - EXT */
    "C,0,10,3" : {
        // MART
        "name": "CHERRYGROVE CITY - OUTSIDE - Mart - 1C,5",
        "level" : "1",
        "to" : "C,2,4,0",
        "connections": {
            "C,0,10,2": true
        }
    },
    "C,0,10,0" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Left - 16,A",
        "level" : "1",
        "to" : "C,2,0,0",
        "connections": {
            "C,0,10,2": true
        }
    },
    "C,0,10,2" : {
        // PK
        "name": "CHERRYGROVE CITY - OUTSIDE - PkCentre - 22,5",
        "level" : "1",
        "to" : "C,2,2,0",
        "connections": {
            "C,0,10,0": true,
            "C,0,10,1": true,
            "C,0,10,3": true,
            "C,0,10,4": true,
            "C,0,16,0": true,
            "C,0,9,1": true,
            "C,0,17,0": true,
            "C,0,17,1": true,
            "C,0,18,0": "SHOW_EGG_TO_ELM"
        }
    },
    "C,0,10,1" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Center (Guide House) - 1E,B",
        "level" : "1",
        "to" : "C,2,1,0",
        "connections": {
            "C,0,10,2": true
        }
    },
    "C,0,10,4" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Right - 24,D",
        "level" : "1",
        "to" : "C,2,5,0",
        "connections": {
            "C,0,10,2": true
        }
    },
/* CHERRY GROVE - INT */
    "C,2,4,0" : {
        // MART
        "name": "CHERRYGROVE CITY - INSIDE - Mart - 4,7",
        "level" : "1",
        "to" : "C,0,10,3"
    },
    "C,2,0,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Left - 4,8",
        "level" : "1",
        "to" : "C,0,10,0"
    },
    "C,2,2,0" : {
        // PK
        "name": "CHERRYGROVE CITY - INSIDE - PkCentre - 7,8",
        "level" : "1",
        "to" : "C,0,10,2",
        "connections": {
            "C,2,2,2": true
        }
    },
    "C,2,2,2" : {
        // PK
        "name": "CHERRYGROVE CITY - INSIDE - Stairs - 1,6",
        "level" : "1",
        "to" : "C,2,3,0",
        "connections": {
            "C,2,2,0": true
        }
    },
    "C,2,1,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Centre (Guide House) - 4,8",
        "level" : "1",
        "to" : "C,0,10,1"
    },
    "C,2,5,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Right - 4,8",
        "level" : "1",
        "to" : "C,0,10,4"
    },
/* VIOLET CITY - EXT */
    "C,0,0,0" : {
        // Rourt connector
        "name": "VIOLET CITY - OUTSIDE - Right Route Connector - 29,1A",
        "level" : "1",
        "to" : "C,8,7,0",
        "connections" : {
            "C,0,0,3": true
        }
    },
    "C,0,0,6" : {
        "name": "VIOLET CITY - OUTSIDE - Academy - 1F,13",
        "level" : "1",
        "to" : "C,17,1,0",
        "connections" : {
            "C,0,0,3": true
        }
    },
    "C,0,0,4" : {
        "name": "VIOLET CITY - OUTSIDE - Left House - 5,11",
        "level" : "1",
        "to" : "C,8,3,0",
        "connections" : {
            "C,0,0,3": true
        }
    },
    "C,0,0,5" : {
        // MART
        "name": "VIOLET CITY - OUTSIDE - Mart - B,13",
        "level" : "1",
        "to" : "C,8,6,0",
        "connections" : {
            "C,0,0,3": true
        }
    },
    "C,0,0,2" : {
        // GYM
        "name": "VIOLET CITY - OUTSIDE - Gym - 14,13",
        "level" : "1",
        "to" : "C,8,1,0",
        "connections" : {
            "C,0,0,3": true,
        }
    },
    "C,0,0,3" : {
        // PK
        "name": "VIOLET CITY - OUTSIDE - PkCenter - 21,1B",
        "level" : "1",
        "to" : "C,8,4,0",
        "connections" : {
            "C,0,0,0": true,
            "C,0,0,1": true,
            "C,0,0,2": true,
            "C,0,0,4": true,
            "C,0,0,5": true,
            "C,0,0,6": true,
            "C,0,0,7": true,
            "C,0,19,0": true,
            "C,0,23,0": true,
        }
    },
    "C,0,0,1" : {
        "name": "VIOLET CITY - OUTSIDE - Bottom Right House (Onix, Belsprout Trade) - 17,1F",
        "level" : "1",
        "to" : "C,8,2,0",
        "connections" : {
            "C,0,0,3": true
        }
    },
    "C,0,0,7" : {
        // SPROUT TOWER
        "name": "VIOLET CITY - OUTSIDE - Sprout Tower - 19,7",
        "level" : "1",
        "to" : "C,24,23,0",
        "connections" : {
            "C,0,0,3": true,
        }
    },
/* VIOLET CITY - INT */
    "C,17,1,0" : {
        // School
        "name": "VIOLET CITY - INSIDE - Academy - 4,11",
        "level" : "1",
        "to" : "C,0,0,6"
    },
    "C,8,3,0" : {
        "name": "VIOLET CITY - INSIDE - Left House - 4,9",
        "level" : "1",
        "to" : "C,0,0,4"
    },
    "C,8,6,0" : {
        // MART
        "name": "VIOLET CITY - INSIDE - Mart - 4,7",
        "level" : "1",
        "to" : "C,0,0,5"
    },
    "C,8,1,0" : {
        //GYM
        "name": "VIOLET CITY - INSIDE - Gym - 6,13",
        "level" : "1",
        "to" : "C,0,0,2"
    },
    "C,8,4,0" : {
        // PK
        "name": "VIOLET CITY - INSIDE - PkCenter - 7,8",
        "level" : "1",
        "to" : "C,0,0,3",
        "connections" : {
            "C,8,4,2": true,
            "C,0,0,3": true
        }
    },
    "C,8,4,2" : {
        // PK
        "name": "VIOLET CITY - INSIDE - PkCenter Stairs - 1,6",
        "level" : "1",
        "to" : "C,8,5,0",
        "connections" : {
            "C,8,4,0": true,
        }
    },
    "C,8,2,0" : {
        "name": "VIOLET CITY - INSIDE - Bottom Right House (Onix, Belsprout Trade) - 4,9",
        "level" : "1",
        "to" : "C,0,0,1"
    },
    // SPROUT TOWER
    //F1
    "C,24,23,0" : {
        "name": "SPROUT TOWER - INSIDE - F1 Enterance - 9,E",
        "level" : "1",
        "to" : "C,0,0,7",
        "connections" : {
            "C,24,23,1": true
        }
    },
    "C,24,23,3" : {
        "name": "SPROUT TOWER - INSIDE - F1 Left Stairs - 1,5",
        "level" : "1",
        "to" : "C,24,24,2",
        "connections" : {
            "C,24,23,2": true
        }
    },
    "C,24,23,1" : {
        "name": "SPROUT TOWER - INSIDE - F1 Centre Stairs - 5,4",
        "level" : "1",
        "to" : "C,24,24,0",
        "connections" : {
            "C,24,23,0": true
        }
    },
    "C,24,23,2" : {
        "name": "SPROUT TOWER - INSIDE - F1 Right Stairs - 11,3",
        "level" : "1",
        "to" : "C,24,24,1",
        "connections" : {
            "C,24,23,3": true
        }
    },
    // F2
    "C,24,24,3" : {
        "name": "SPROUT TOWER - INSIDE - F2 Bottom Stairs - 9,D",
        "level" : "1",
        "to" : "C,24,25,0",
        "connections" : {
            "C,24,24,2": true
        }
    },
    "C,24,24,2" : {
        "name": "SPROUT TOWER - INSIDE - F2 Left Stairs - 1,5",
        "level" : "1",
        "to" : "C,24,23,3",
        "connections" : {
            "C,24,24,3": true
        }
    },
    "C,24,24,0" : {
        "name": "SPROUT TOWER - INSIDE - F2 Centre Stairs - 5,3",
        "level" : "1",
        "to" : "C,24,23,1",
        "connections" : {
            "C,24,24,1": true
        }
    },
    "C,24,24,1" : {
        "name": "SPROUT TOWER - INSIDE - F2 Right Stairs - 11,3",
        "level" : "1",
        "to" : "C,24,23,2",
        "connections" : {
            "C,24,24,0": true
        }
    },
    // F3
    "C,24,25,0" : {
        "name": "SPROUT TOWER - INSIDE - F3 - A,E",
        "level" : "1",
        "to" : "C,24,24,3"
    },
/* ROUTE 29 - EXT */
    "C,0,16,0" : {
        "name": "ROUTE 29 - OUTSIDE - Route Connector - 1B,3",
        "level" : "1",
        "to" : "C,1,5,1",
        "grouped" : ["C,0,16,1"],
        "groupMain" : true,
        "connections": {
            "C,0,9,1": true,
            "C,0,10,2": true,
        }
    },
    "C,0,16,1" : {
        "name": "ROUTE 29 - OUTSIDE - Route Connector - 1C,3",
        "level" : "1",
        "to" : "C,1,5,1",
        "grouped" : ["C,0,16,0"],
    },
/* ROUTE 29 - INT */ 
    "C,1,5,0" : {
        "name": "ROUTE 29 - INSIDE - Route Connector (top) - 7,1",
        "level" : "1",
        "to" : "C,0,33,1",
        "connections" : {
            "C,1,5,1": true
        }
    },
    "C,1,5,1" : {
        "name": "ROUTE 29 - INSIDE - Route Connector (bottom) - 7,9",
        "level" : "1",
        "to" : "C,0,16,0",
        "connections" : {
            "C,1,5,0": true
        }
    },
/* ROUTE 46 - EXT */
    "C,0,33,1" : {
        "name": "ROUTE 46 - OUTSIDE - Route Connector - 9,22",
        "level" : "1",
        "to" : "C,1,5,0",
        "grouped": ["C,0,33,2"],
        "groupMain" : true
    },
    "C,0,33,2" : {
        "name": "ROUTE 46 - OUTSIDE - Route Connector - A,22",
        "level" : "1",
        "to" : "C,1,5,0",
        "grouped": ["C,0,33,1"]
    },
    "C,0,33,0" : {
        "name": "ROUTE 46 - OUTSIDE - Dark Cave Enterance - 10,7",
        "to" : "C,24,7,1",
        "level" : "8",
        "connections" : {
            "C,0,33,1": true
        }
    },
/* ROUTE 30 - EXT */
    "C,0,17,1" : {
        "name": "ROUTE 30 - OUTSIDE - Mr Pokemons House - 11,5",
        "level" : "1",
        "to" : "C,2,6,0",
        "connections": {
            "C,0,17,0": true,
            "C,0,10,2": true,
            "C,0,18,0": "JOHTO_CUT"
        }
    },
    "C,0,17,0" : {
        "name": "ROUTE 30 - OUTSIDE - Berry Guy's House - 7,27",
        "level" : "1",
        "to" : "C,4,7,0",
        "connections": {
            "C,0,10,2": true,
            "C,0,17,1": true
        }
    },
/* ROUTE 30 - INT */
    "C,2,6,0" : {
        "name": "ROUTE 30 - INSIDE - Mr Pokemons House - 5,7",
        "level" : "1",
        "to" : "C,0,17,1"
    },
    "C,4,7,0" : {
        "name": "ROUTE 30 - INSIDE - Berry Guy's Hose - 4,8",
        "level" : "1",
        "to" : "C,0,17,0"
    },
/* ROUTE 31 - EXT */
    "C,0,18,0" : {
        "name": "ROUTE 31 - OUTSIDE - Dark Cave - 22,7",
        "level" : "1",
        "to" : "C,24,7,0",
        "connections": {
            "C,0,18,1": true
        }
    },
    "C,0,18,1" : {
        "name": "ROUTE 31 - OUTSIDE - Route Connector - 4,8",
        "level" : "1",
        "to" : "C,8,7,1",
        "connections": {
            "C,0,18,0": true
        }
    },
/* ROUTE 31 - INT */
    "C,8,7,0" : {
        // Route connector left
        "name": "VIOLET CITY - INSIDE - Left Route Connector (Left side) - B,5",
        "level" : "1",
        "to" : "C,0,0,0",
        "connections" : {
            "C,8,7,1": true
        }
    },
    "C,8,7,1" : {
        // Route connector right
        "name": "VIOLET CITY - INSIDE - Left Route Connector (Right side) - 1,5",
        "level" : "1",
        "to" : "C,0,18,1",
        "connections" : {
            "C,8,7,0": true
        }
    },
/* Dark Cave */
    // F1
    "C,24,7,1" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (Route 46 exit) - 28,26",
        "to" : "C,0,33,0",
        "level" : "4",
        "connections" : {
            "C,24,7,0": "JOHTO_ROCK_SMASH",
            "C,24,7,2": "JOHTO_SURF"
        }
    },
    "C,24,7,2" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (further into cave) - 15,6",
        "to" : "C,24,8,0",
        "level" : "5",
        "connections" : {
            "C,24,7,1": "JOHTO_SURF"
        }
    },
    "C,24,7,0" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (Route 31 exit) - 7,14",
        "level" : "1",
        "to" : "C,0,18,0",
        "connections" : {
            "C,24,7,1": "JOHTO_ROCK_SMASH"
        }
    },
    // F2
    "C,24,8,0" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave F2 Bottom - 6,1C",
        "to" : "C,24,7,2",
        "level" : "8",
    },
    "C,24,8,1" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave F2 Top - 1A,6",
        "to" : "C,0,32,0",
        "level" : "8",
        "connections" : {
            "C,24,8,0": "JOHTO_SURF"
        }
    },
/* ROUTE 36 - EXT */
    "C,0,23,0" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 2E,D",
        "level" : "1",
        "to" : "C,24,74,0",
        "grouped": ["C,0,23,1"],
        "groupMain" : true,
        "connections": {
            "C,0,0,3": true,
            "C,0,23,2": "SQUIRT_BOTTLE",
            "C,0,1,0": "SQUIRT_BOTTLE"
        }
    },
    "C,0,23,1" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 2D,D",
        "level" : "1",
        "to" : "C,24,74,0",
        "grouped": ["C,0,23,0"]
    },
    "C,0,23,2" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 10,8",
        "level" : "3",
        "to" : "C,24,96,1",
        "connections": {
            "C,0,23,0": "SQUIRT_BOTTLE",
            "C,0,1,0": "SQUIRT_BOTTLE",
            "C,0,22,0": "JOHTO_CUT"
        }
    },
/* ROUTE 36 - INT */
    "C,24,74,0" : {
        "name": "ROUTE 36 - INSIDE - Route Connector Bottom - 7,9",
        "to" : "C,0,23,0",
        "level" : "1",
        "connections": {
            "C,24,74,1": true
        }
    },
    "C,24,74,1" : {
        "name": "ROUTE 36 - INSIDE - Route Connector Top - 7,1",
        "to" : "C,24,86,0",
        "level" : "1",
        "connections": {
            "C,24,74,0": true
        }
    },       
/* RUINS OF ALPH - EXT */
    "C,24,86,8" : {
        "name": "RUINS OF ALPH - OUTSIDE - Bottom Left (omanite) - 3,1D",
        "to" : "C,24,84,0",
        "level" : "5",
        "connections": {
            "C,24,86,9": true
        }
    },
    "C,24,86,0" : {
        "name": "RUINS OF ALPH - OUTSIDE - Top Route Connector - 7,5",
        "to" : "C,24,74,1",
        "level" : "1",
        "connections": {
            "C,24,86,2": true,
        }   
    },
    "C,24,86,1" : {
        "name": "RUINS OF ALPH - OUTSIDE - Right Route Connector - D,14",
        "to" : "C,17,0,0",
        "level" : "1",
        "connections": {
            "C,24,86,2": true,
        }   
    },  
    "C,24,86,2" : {
        "name": "RUINS OF ALPH - OUTSIDE - Lab - 11,B",
        "to" : "C,24,75,0",
        "level" : "1",
        "connections": {
            "C,24,86,1": true,
            "C,24,86,4": true,
            "C,24,86,3": true,
            "C,24,86,0": true,
        }   
    },
    "C,24,86,4" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave left of lab - B,D",
        "to" : "C,24,87,0",
        "level" : "1",
        "connections": {
            "C,24,86,2": true,
        }   
    },
    "C,24,86,3" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Above Lab (kabuto) - E,7",
        "to" : "C,24,88,0",
        "level" : "1",
        "connections": {
            "C,24,86,2": true,
        }   
    },
    "C,24,86,6" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave center left (hoho) - 2,11",
        "to" : "C,24,85,0",
        "level" : "5",
        "connections": {
            "C,24,86,5": true
        }
    },
    "C,24,86,7" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Center - 6,1B",
        "to" : "C,24,12,1",
        "level" : "5",
        "connections": {
            "C,24,86,8": true,
            "C,24,86,9": true,
        }
    },
    "C,24,86,9" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Right (aradactyle) - 10,21",
        "to" : "C,24,93,0",
        "level" : "5",
        "connections": {
            "C,24,86,1": "JOHTO_SURF"
        }
    },
    "C,24,86,5" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Center Center - 6,13",
        "to" : "C,24,12,0",
        "level" : "5",
    },
/* RUINS OF ALPH - INT */
    // Top Cave
    "C,24,88,0" : {
        "name": "RUINS OF ALPH - INSIDE - Top Cave Room Enterance - 4,9",
        "to" : "C,24,86,3",
        "level" : "1",
        "connections": {
            "C,24,88,1": true,
            "C,24,88,2": true,
        }   
    },
    "C,24,88,1" : {
        "name": "RUINS OF ALPH - INSIDE - Top Cave Back Room - 4,1",
        "to" : "C,24,89,0",
        "level" : "1",
        "connections": {
            "C,24,88,2": true,
            "C,24,88,0": true,
        },
        "tags": ["no_return"]
    },
    "C,24,88,2" : {
        "name": "RUINS OF ALPH - INSIDE - Top Cave Puzzle Drop - 3,4",
        "to" : "C,24,87,1",
        "level" : "1",
        "grouped": ["C,24,88,3", "C,24,88,4"],
        "groupMain" : true,
        "connections": {
            "C,24,88,1": true,
            "C,24,88,0": true,
        }   
    },
    "C,24,88,3" : {
        "name": "RUINS OF ALPH - INSIDE - Top Cave Puzzle Drop - 4,4",
        "to" : "C,24,87,1",
        "level" : "1",
        "grouped": ["C,24,88,2", "C,24,88,4"],
    },
    "C,24,88,4" : {
        "name": "RUINS OF ALPH - INSIDE - Top Cave Puzzle Drop - 5,4",
        "to" : "C,24,87,2",
        "level" : "1",
        "grouped": ["C,24,88,2", "C,24,88,3"],
    },
    // Lab
    "C,24,75,0" : {
        "name": "RUINS OF ALPH - INSIDE - Lab - 2,8",
        "to" : "C,24,86,2",
        "level" : "1",
    },
    // Unknown Cave
    "C,24,87,0" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Ladder - A,C",
        "to" : "C,24,86,4",
        "level" : "1",
    },
    "C,24,87,1" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Top Drop - F,4",
        "to" : "C,X,X,1",
        "level" : "1",
        "ignore": true,
        "grouped": ["C,24,87,2"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,2" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Top Drop - 10,4",
        "to" : "C,X,X,1",
        "level" : "1",
        "ignore": true,
        "grouped": ["C,24,87,1"],
    },
    "C,24,87,3" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Center Left Drop - 3,10",
        "to" : "C,X,X,2",
        "level" : "8",
        "ignore": true,
        "grouped": ["C,24,87,4"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,4" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Center Left Drop - 4,10",
        "to" : "C,X,X,2",
        "level" : "8",
        "ignore": true,
        "grouped": ["C,24,87,3"],
    },
    "C,24,87,5" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Right Drop - F,18",
        "to" : "C,X,X,3",
        "grouped": ["C,24,87,6"],
        "groupMain" : true,
        "level" : "8",
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,6" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Right Drop - 10,18",
        "to" : "C,X,X,3",
        "level" : "8",
        "grouped": ["C,24,87,5"],
    },
    "C,24,87,7" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Left Drop - 3,16",
        "to" : "C,X,X,4",
        "level" : "8",
        "ignore": true,
        "grouped": ["C,24,87,8"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,8" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Left Drop - 4,16",
        "to" : "C,X,X,4",
        "level" : "8",
        "ignore": true,
        "grouped": ["C,24,87,7"],
    },
    // Left Center Cave
    "C,24,85,0" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Enterance - 4,9",
        "level" : "8",
        "to" : "C,24,86,6",
        "ignore": true,
        "connections": {
            "C,24,85,2": true,
        }   
    },
    "C,24,85,2" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 3,4",
        "level" : "8",
        "to" : "C,24,87,3",
        "grouped": ["C,24,85,3", "C,24,85,4"],
        "groupMain" : true,
        "ignore": true,
        "connections": {
            "C,24,85,0": true,
        }   
    },
    "C,24,85,3" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 4,4",
        "level" : "8",
        "to" : "C,24,87,3",
        "ignore": true,
        "grouped": ["C,24,85,2", "C,24,85,4"]
    },
    "C,24,85,4" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 5,4",
        "level" : "8",
        "to" : "C,24,87,4",
        "ignore": true,
        "grouped": ["C,24,85,2", "C,24,85,3"]
    },
    // Left Bottom Cave
    "C,24,84,0" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Enterance - 4,9",
        "level" : "8",
        "to" : "C,24,86,8",
        "ignore": true,
        "connections": {
            "C,24,84,2": true,
        }   
    },
    "C,24,84,2" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 3,4",
        "level" : "8",
        "to" : "C,24,87,7",
        "grouped": ["C,24,84,3", "C,24,84,4"],
        "groupMain" : true,
        "ignore": true,
        "connections": {
            "C,24,84,0": true,
        }   
    },
    "C,24,84,3" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 4,4",
        "level" : "8",
        "to" : "C,24,87,7",
        "ignore": true,
        "grouped": ["C,24,84,2", "C,24,84,4"]
    },
    "C,24,84,4" : {
        "name": "RUINS OF ALPH - INSIDE - Left Center Drop - 5,4",
        "level" : "8",
        "to" : "C,24,87,8",
        "ignore": true,
        "grouped": ["C,24,84,2", "C,24,84,3"]
    },
    // Bottom Right Cave
    "C,24,93,0" : {
        "name": "RUINS OF ALPH - INSIDE - Bottom Right Enterance - 4,9",
        "level" : "8",
        "to" : "C,24,86,9",
        "connections": {
            "C,24,93,2": true,
            "C,24,93,1": "JOHTO_FLASH"
        }   
    },
    "C,24,93,2" : {
        "name": "RUINS OF ALPH - INSIDE - Bottom Right Drop - 3,4",
        "level" : "8",
        "to" : "C,24,87,5",
        "ignore": true,
        "grouped": ["C,24,93,3", "C,24,93,4"],
        "groupMain" : true,
        "connections": {
            "C,24,93,0": true,
        }   
    },
    "C,24,93,3" : {
        "name": "RUINS OF ALPH - INSIDE - Bottom Right Drop - 4,4",
        "level" : "8",
        "to" : "C,24,87,5",
        "grouped": ["C,24,93,2", "C,24,93,4"]
    },
    "C,24,93,4" : {
        "name": "RUINS OF ALPH - INSIDE - Bottom Right Drop - 5,4",
        "level" : "8",
        "to" : "C,24,87,6",
        "grouped": ["C,24,93,2", "C,24,93,3"]
    },
    "C,24,93,1" : {
        "name": "RUINS OF ALPH - INSIDE - Bottom Right Flash Door - 4,1",
        "level" : "8",
        "to" : "C,24,89,1",
        "connections": {
            "C,24,93,0": true,
        },
        "tags": ["no_return"]
    },
    // Hidden Room Top Left
    "C,24,89,0" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Left Enterance - 4,9",
        "level" : "8",
        "to" : "C,24,88,1",
        "connections": {
            "C,24,89,4": true,
        }   
    },
    "C,24,89,4" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Left Drop - 3,4",
        "level" : "8",
        "to" : "C,24,90,0",
        "grouped": ["C,24,89,5", "C,24,89,6"],
        "groupMain" : true,
        "connections": {
            "C,24,89,0": true,
        }   
    },
    "C,24,89,5" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Left Drop - 4,4",
        "level" : "8",
        "to" : "C,24,90,1",
        "grouped": ["C,24,89,4", "C,24,89,6"]
    },
    "C,24,89,6" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Left Drop - 5,4",
        "level" : "8",
        "to" : "C,24,90,2",
        "grouped": ["C,24,89,4", "C,24,89,5"]
    },
    // Hidden Room Top Right
    "C,24,89,1" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Right Enterance - 4,9",
        "level" : "8",
        "to" : "C,24,93,1",
        "connections": {
            "C,24,89,7": true,
        }   
    },
    "C,24,89,7" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Right Drop - 3,4",
        "level" : "8",
        "to" : "C,24,91,0",
        "grouped": ["C,24,89,8", "C,24,89,9"],
        "groupMain" : true,
        "connections": {
            "C,24,89,1": true,
        }   
    },
    "C,24,89,8" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Right Drop - 4,4",
        "level" : "8",
        "to" : "C,24,91,1",
        "grouped": ["C,24,89,7", "C,24,89,9"]
    },
    "C,24,89,9" : {
        "name": "RUINS OF ALPH - INSIDE - Hidden Top Right Drop - 5,4",
        "level" : "8",
        "to" : "C,24,91,2",
        "grouped": ["C,24,89,7", "C,24,89,8"]
    },
/* ROUTE 32 - EXT */
    "C,0,19,1" : {
        "name": "ROUTE 32 - OUTSIDE - PkCenter - D,4A",
        "to" : "C,11,5,0",
        "level" : "2",
        "connections": {
            "C,0,19,0": true,
            "C,0,19,2": true,
        }   
    },
    "C,0,19,0" : {
        "name": "ROUTE 32 - OUTSIDE - Route Connector - 8,3",
        "to" : "C,17,0,1",
        "level" : "1",
        "connections": {
            "C,0,0,3": true,
            "C,0,19,1": "VIOLET_EGG"
        }   
    },
    "C,0,19,2" : {
        "name": "ROUTE 32 - OUTSIDE - Union Cave - 8,50",
        "to" : "C,19,1,0",
        "level" : "2",
        "connections": {
            "C,0,19,1": true
        }   
    },
/* ROUTE 32 - INT */
    "C,17,0,0" : {
        "name": "ROUTE 32 - INSIDE - Route Connector Left - 8,C",
        "level" : "1",
        "to" : "C,24,86,1",
        "connections": {
            "C,17,0,1": true,
        }
    },
    "C,17,0,1" : {
        "name": "ROUTE 32 - INSIDE - Route Connector Right- 12,C",
        "level" : "1",
        "to" : "C,0,19,0",
        "connections": {
            "C,17,0,0": true,
        }
    },
    "C,11,5,0" : {
        "name": "ROUTE 32 - INSIDE - PkCenter - 7,8",
        "level" : "2",
        "to" : "C,0,19,1",
        "connections": {
            "C,11,5,1": true,
            "C,0,19,1": true
        }
    },
    "C,11,5,1" : {
        "name": "ROUTE 32 - INSIDE - PkCenter - 1,6",
        "level" : "2",
        "to" : "C,24,94,0",
        "connections": {
            "C,11,5,0": true,
        }
    },
/* UNION CAVE */
//F1
    "C,19,1,0" : {
        "name": "UNION CAVE - INSIDE - F1 Top Enterance - 14,4",
        "to" : "C,0,19,2",
        "level" : "2",
        "connections": {
            "C,19,1,1": true,
            "C,19,1,2": true,
            "C,19,1,3": "JOHTO_SURF"
        }   
    },
    "C,19,1,1" : {
        "name": "UNION CAVE - INSIDE - F1 Bottom Enterance - 14,20",
        "to" : "C,0,20,0",
        "level" : "2",
        "connections": {
            "C,19,1,0": true
        }   
    },
    "C,19,1,2" : {
        "name": "UNION CAVE - INSIDE - F1 Middle Lader - 8,14",
        "to" : "C,24,12,2",
        "level" : "2",
        "connections": {
            "C,19,1,0": true
        }   
    },
    "C,19,1,3" : {
        "name": "UNION CAVE - INSIDE - Bottom Lader - 6, 22",
        "to" : "C,24,12,3",
        "level" : "5",
        "connections": {
            "C,19,1,0": "JOHTO_SURF"
        }  
    },
//F2
    "C,24,12,4" : {
        "name": "UNION CAVE - INSIDE - F2 Bottom Right Ladder - 11,2A",
        "to" : "C,24,95,0",  
        "level" : "5",
        "connections": {
            "C,24,12,3": "JOHTO_SURF"
        }   
    },
    "C,24,12,0" : {
        "name": "UNION CAVE - INSIDE - F2 Top Enterance - 3,3",
        "to" : "C,24,86,5",
        "level" : "5",
        "connections": {
            "C,24,12,1": "JOHTO_STRENGTH",
            "C,24,12,2": "JOHTO_SURF"
        }   
    },
    "C,24,12,2" : {
        "name": "UNION CAVE - INSIDE - F2 Middle Ladder - 7,13",
        "to" : "C,19,1,2",
        "level": "2",
        "level" : "5",
        "connections": {
            "C,24,12,0": "JOHTO_SURF"
        }   
    },
    "C,24,12,1" : {
        "name": "UNION CAVE - INSIDE - F2 Lower Enterance - 3,B",
        "to" : "C,24,86,7",
        "level" : "5",
        "connections": {
            "C,24,12,0": "JOHTO_STRENGTH"
        }   
    },
    "C,24,12,3" : {
        "name": "UNION CAVE - INSIDE - F2 Bottom Left Ladder - 2,2C",
        "to" : "C,19,1,3",
        "level" : "5",
        "connections": {
            "C,24,12,4": "JOHTO_SURF"
        }   
    },
// F3
    "C,24,95,0" : {
        "name": "UNION CAVE - INSIDE - F3 Ladder - 5,3",
        "to" : "C,24,12,4",
        "level" : "5",
    },
/* ROUTE 33 - EXT */
    "C,0,20,0" : {
        "name": "ROUTE 33 - OUTSIDE - Union Cave Enterance - B,9",
        "to" : "C,19,1,1",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
/* AZALEA TOWN - EXT */ 
    "C,0,11,6" : {
        "name": "AZALEA TOWN - OUTSIDE - Slowpoke Well Enterance - 21,9",
        "to" : "C,24,4,0",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
    "C,0,11,1" : {
        "name": "AZALEA TOWN - OUTSIDE - PkCenter - 11,B",
        "to" : "C,3,1,0",
        "level": "2",
        "connections": {
            "C,0,11,0" : true,
            "C,0,11,2" : "SLOWPOKE_WELL",
            "C,0,11,3" : true,
            "C,0,11,4" : true,
            "C,0,11,5" : true,
            "C,0,11,6" : "TALK_TO_KURT",
            "C,0,20,0" : true,
        }   
    },
    "C,0,11,3" : {
        "name": "AZALEA TOWN - OUTSIDE - Bottom Right - 17,F",
        "to" : "C,3,0,0",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
    "C,0,11,4" : {
        "name": "AZALEA TOWN - OUTSIDE - Mart - 17,7",
        "to" : "C,11,7,0",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
    "C,0,11,0" : {
        "name": "AZALEA TOWN - OUTSIDE - Top Left - B,7",
        "to" : "C,3,4,0",
        "level": "2",
        "connections": {
            "C,011,1": true
        }   
    },
    "C,0,11,5" : {
        "name": "AZALEA TOWN - OUTSIDE - Route Connector - 4,C",
        "to" : "C,3,6,1",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
    "C,0,11,2" : {
        "name": "AZALEA TOWN - OUTSIDE - GYM - D,11",
        "to" : "C,3,3,0",
        "level": "2",
        "connections": {
            "C,0,11,1": true
        }   
    },
/* AZALEA TOWN - INT */ 
    "C,3,1,0" : {
        "name": "AZALEA TOWN - INSIDE - PkCenter - 7,8",
        "to" : "C,0,11,1",
        "level": "2",
        "connections": {
            "C,3,1,2": true,
            "C,0,11,1": true
        }   
    },
    "C,3,1,2" : {
        "name": "AZALEA TOWN - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,3,2,0",
        "level": "2",
        "connections": {
            "C,3,1,0": true
        }   
    },
    "C,11,7,0" : {
        "name": "AZALEA TOWN - INSIDE - Mart - 4,7",
        "to" : "C,0,11,4",
        "level": "2"
    },
    "C,3,4,0" : {
        "name": "AZALEA TOWN - INSIDE - Top Left - A,F",
        "to" : "C,0,11,0",
        "level": "2"
    },
    "C,3,0,0" : {
        "name": "AZALEA TOWN - INSIDE - Bottom Right - 4,8",
        "to" : "C,0,11,3",
        "level": "2"
    },
    "C,3,6,0" : {
        "name": "AZALEA TOWN - INSIDE - Route Connector Left - 7,C",
        "to" : "C,24,11,0",
        "level": "2",
        "connections": {
            "C,3,6,1": true
        }   
    },
    "C,3,6,1" : {
        "name": "AZALEA TOWN - INSIDE - Route Connector Right - 13,C",
        "to" : "C,0,11,5",
        "level": "2",
        "connections": {
            "C,3,6,0": true
        }   
    },
    "C,3,3,0" : {
        "name": "AZALEA TOWN - INSIDE - GYM - B,12",
        "to" : "C,0,11,2",
        "level": "2"
    },
/* SLOWPOKE WELL */ 
// F1
    "C,24,4,0" : {
        "name": "SLOWPOKE WELL - INSIDE - F1 Enterance Ladder - 12,10",
        "to" : "C,0,11,6",
        "level": "2",
        "connections": {
            "C,24,4,1": "JOHTO_SURF_AND_STRENGTH"
        }   
    },
    "C,24,4,1" : {
        "name": "SLOWPOKE WELL - INSIDE - F1 Left Ladder - 8,C",
        "to" : "C,24,9,0",
        "level": "4",
        "connections": {
            "C,24,4,0": "JOHTO_SURF_AND_STRENGTH"
        }   
    },
// F2    
    "C,24,9,0" : {
        "name": "SLOWPOKE WELL - INSIDE - F2 Ladder - 11,10",
        "to" : "C,24,4,1",
        "level": "4",
    },
/* ILEX FOREST */
    "C,24,11,0" : {
        "name": "ILEX FOREST - OUTSIDE - Bottom - B,34",
        "to" : "C,3,6,0",
        "level": "3",
        "connections": {
            "C,24,11,1": true
        }   
    },
    "C,24,11,1" : {
        "name": "ILEX FOREST - OUTSIDE - Top - B,12",
        "to" : "C,3,7,1",
        "level": "3",
        "grouped" : ["C,24,11,2"],
        "groupMain" : true,
        "connections": {
            "C,24,11,0": true
        }   
    },
    "C,24,11,2" : {
        "name": "ILEX FOREST - OUTSIDE - Top - C,12",
        "to" : "C,3,7,1",
        "level": "3",
        "grouped" : ["C,24,11,1"],
        "connections": {
            "C,24,11,1": true
        }   
    },
/* ROUSE 34 - EXT */
    "C,0,21,0" : {
        "name": "ROUTE 34 - OUTSIDE - Route connector - 10,24",
        "to" : "C,3,7,0",
        "level": "3",
        "grouped" : ["C,0,21,1"],
        "groupMain" : true,
        "connections": {
            "C,0,21,2": true,
            "C,0,3,3": true
        }   
    },
    "C,0,21,1" : {
        "name": "ROUTE 34 - OUTSIDE - Route connector - 11,24",
        "to" : "C,3,7,0",
        "level": "3",
        "grouped" : ["C,0,21,0"]
    },
    "C,0,21,3" : {
        "name": "ROUTE 34 - OUTSIDE - Daycare Inside Fence - F,F",
        "to" : "C,22,0,0",
        "ignore": true,
        "level": "3"
    },
    "C,0,21,2" : {
        "name": "ROUTE 34 - OUTSIDE - Daycare Outer Door - D,E",
        "to" : "C,22,0,1",
        "level": "3",
        "connections": {
            "C,0,21,0": true,
            "C,0,3,3": true
        }   
    },
/* ROUSE 34 - INT */
    "C,3,7,1" : {
        "name": "ROUTE 34 - INSIDE - Route connector Bottom - 7,9",
        "to" : "C,24,11,1",
        "level": "3",
        "connections": {
            "C,3,7,0": true
        }   
    },
    "C,3,7,0" : {
        "name": "ROUTE 34 - INSIDE - Route connector Top - 7,1",
        "to" : "C,0,21,0",
        "level": "3",
        "connections": {
            "C,3,7,1": true
        }   
    },
    "C,22,0,1" : {
        "name": "ROUTE 34 - INSIDE - Day Care Left - 1,6",
        "to" : "C,0,21,2",
        "level": "3"
    },
    "C,22,0,0" : {
        "name": "ROUTE 34 - INSIDE - Day Care Bottom - 3,7",
        "to" : "C,0,21,3",
        "level": "3",
        "ignore": true
    },
/* GOLDENROD CITY - EXT */
    "C,0,3,11" : {
        "name": "GOLDENROD CITY - OUTSIDE - Underground Top - 9,8",
        "to" : "C,11,16,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,8" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Left - 11,9",
        "to" : "C,11,11,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,5" : {
        "name": "GOLDENROD CITY - OUTSIDE - Radio Tower - 6,11",
        "to" : "C,24,53,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,14" : {
        "name": "GOLDENROD CITY - OUTSIDE - Route Connector - 15,4",
        "to" : "C,11,15,1",
        "level": "3",
        "grouped" : ["C,0,3,15"],
        "groupMain" : true,
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,15" : {
        "name": "GOLDENROD CITY - OUTSIDE - Route Connector - 16,4",
        "to" : "C,11,15,1",
        "level": "3",
        "grouped" : ["C,0,3,14"]
    },
    "C,0,3,0" : {
        "name": "GOLDENROD CITY - OUTSIDE - GYM - 1B,9",
        "to" : "C,11,3,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,12" : {
        "name": "GOLDENROD CITY - OUTSIDE - Game Corner - F,17",
        "to" : "C,10,3,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,2" : {
        "name": "GOLDENROD CITY - OUTSIDE - Department Store - 1B,1E",
        "to" : "C,13,16,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,4" : {
        "name": "GOLDENROD CITY - OUTSIDE - Bike Shop - 20,20",
        "to" : "C,11,4,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,10" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Right Right - 26,B",
        "to" : "C,11,13,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,9" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Right - 23,6",
        "to" : "C,11,8,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,6" : {
        "name": "GOLDENROD CITY - OUTSIDE - Train Station - B,F",
        "to" : "C,11,0,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,7" : {
        "name": "GOLDENROD CITY - OUTSIDE - Center Right - 22,17",
        "to" : "C,11,10,0",
        "level": "3",
        "connections": {
            "C,0,0,3": true
        }   
    },
    "C,0,3,3" : {
        "name": "GOLDENROD CITY - OUTSIDE - PkCenter - 10,1E",
        "to" : "C,11,2,0",
        "level": "3",
        "connections": {
            "C,0,3,11": true,
            "C,0,3,8": true,
            "C,0,3,5": true,
            "C,0,3,14": true,
            "C,0,3,15": true,
            "C,0,3,0": true,
            "C,0,3,12": true,
            "C,0,3,2": true,
            "C,0,3,4": true,
            "C,0,3,10": true,
            "C,0,3,9": true,
            "C,0,3,6": true,
            "C,0,3,7": true,
            "C,0,3,13": true,
            "C,0,3,1": true,
            "C,0,21,2": true
        }   
    },
    "C,0,3,13" : {
        "name": "GOLDENROD CITY - OUTSIDE - Underground Bottom - C,21",
        "to" : "C,11,12,0",
        "level": "3",
        "connections": {
            "C,0,3,3": true
        }   
    },
    "C,0,3,1" : {
        "name": "GOLDENROD CITY - OUTSIDE - Left Bottom - 5,1E",
        "to" : "C,8,0,0",
        "level": "3",
        "connections": {
            "C,3,3,3": true
        }   
    },
/* GOLDENROD CITY - INT */ 
    "C,11,16,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Top (Enterance) - D,C",
        "to" : "C,0,3,11",
        "level": "3",
        "connections": {
            "C,11,16,1": true
        }   
    },
    "C,11,16,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Top (Stairs) - E,8",
        "to" : "C,11,9,0",
        "level": "3",
        "connections": {
            "C,11,16,0": true
        }   
    },
    "C,11,12,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Bottom (Enterance) - D,C",
        "to" : "C,0,3,13",
        "level": "3",
        "connections": {
            "C,11,12,1": true
        }   
    },
    "C,11,12,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Bottom (Stairs) - E,8",
        "to" : "C,11,9,1",
        "level": "3",
        "connections": {
            "C,11,12,0": true
        }   
    },
    "C,11,11,0" : {
        "name": "GOLDENROD CITY - INSIDE - Top Left - 4,8",
        "to" : "C,0,3,8",
        "level": "3"
    },
    "C,11,3,0" : {
        "name": "GOLDENROD CITY - INSIDE - GYM - 9,16",
        "to" : "C,0,3,0",
        "level": "3"
    },
    "C,10,3,0" : {
        "name": "GOLDENROD CITY - INSIDE - Game Corner - 2,C",
        "to" : "C,0,3,12",
        "level": "3"
    },
    "C,11,4,0" : {
        "name": "GOLDENROD CITY - INSIDE - Bike Shop - 5,8",
        "to" : "C,0,3,4",
        "level": "3"
    },
    "C,11,13,0" : {
        "name": "GOLDENROD CITY - INSIDE - Top Right Right - 21,B",
        "to" : "C,0,3,10",
        "level": "3"
    },
    "C,11,8,0" : {
        "name": "GOLDENROD CITY - INSIDE - Top Right (Flower Shop) - A,C",
        "to" : "C,0,3,9",
        "level": "3"
    },
    "C,11,0,0" : {
        "name": "GOLDENROD CITY - INSIDE - Train Station - 4,8",
        "to" : "C,0,3,6",
        "level": "3"
    },
    "C,11,10,0" : {
        "name": "GOLDENROD CITY - INSIDE - Center Right - 4,",
        "to" : "C,0,3,7",
        "level": "3"
    },
    "C,11,2,0" : {
        "name": "GOLDENROD CITY - INSIDE - PkCenter - 7,8",
        "to" : "C,0,3,3",
        "level": "3",
        "connections": {
            "C,11,2,2": true,
            "C,11,2,1": true
        }  
    },
    "C,11,2,1" : {
        "name": "GOLDENROD CITY - INSIDE - PkCenter Back - 7,8",
        "to" : "C,11,1,0",
        "level": "3",
        "connections": {
            "C,11,2,0": true
        }  
    },
    "C,11,2,2" : {
        "name": "GOLDENROD CITY - INSIDE - PkCenter Stairs - 7,8",
        "to" : "C,11,6,0",
        "level": "3",
        "connections": {
            "C,11,2,0": true
        }  
    },
    "C,11,1,0" : {
        "name": "GOLDENROD CITY - INSIDE - PkCenter Back Room - 7,8",
        "to" : "C,11,2,1",
        "level": "3",
    },
    "C,8,0,0" : {
        "name": "GOLDENROD CITY - INSIDE - Left Bottom - 4,8",
        "to" : "C,0,3,1",
        "level": "3"
    },
// Underground F1
    "C,11,9,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground F1 Bottom - 3,21",
        "to" : "C,11,12,1",
        "level": "3",
        "connections": {
            "C,11,9,0": true
        }   
    },
    "C,11,9,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground F1 Top - 2,3",
        "to" : "C,11,16,1",
        "level": "3",
        "connections": {
            "C,11,9,0": true
        }   
    },
    "C,11,9,2" : {
        "name": "GOLDENROD CITY - INSIDE - Rocket Base Underground Enterance - D,A",
        "to" : "C,24,56,0",
        "level": "7",
        "connections": {
            "C,11,9,1": true,
            "C,11,9,0": true
        },
        "tags": ["no_return"]
    },
/* UNDERGROUND WAREHOUSE */
    // F1
    "C,24,56,0" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F1 Enterance - 6,8",
        "to" : "C,11,9,2",
        "level": "7",
        "connections": {
            "C,24,56,1": true
        }   
    },
    "C,24,56,1" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F1 Stairs - 5,4",
        "to" : "C,24,57,0",
        "level": "7",
        "connections": {
            "C,24,56,0": true
        }   
    },
    // F2
    "C,24,57,0" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F2 Top Right Stairs - 18,2",
        "to" : "C,24,56,1",
        "level": "7",
        "connections": {
            "C,24,57,1": true
        }   
    },
    "C,24,57,1" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F2 Bottom Right Stairs - 1E,B",
        "to" : "C,24,58,0",
        "level": "7",
        "connections": {
            "C,24,57,0": true
        }   
    },
    // F3
    "C,24,58,0" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F3 Bottom Left Stairs - 3,F",
        "to" : "C,24,57,1",
        "level": "7",
        "connections": {
            "C,24,58,1": true
        }   
    },
    "C,24,58,1" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F3 Top Right Stairs - 13,2",
        "to" : "C,11,14,1",
        "level": "7",
        "connections": {
            "C,2,58,0": true
        }   
    },
    // F4
    "C,11,14,1" : {
        "name": "UNDERGROUND WAREHOUSE - INSIDE - F4 Top Right Stairs - 12,2",
        "to" : "C,24,58,1",
        "level": "7",
    },
/* RADIO TOWER */
// F1
    "C,24,53,0" : {
        "name": "RADIO TOWER - INSIDE - F1 Door - 9,A",
        "to" : "C,0,3,5",
        "level": "3",
        "connections": {
            "C,24,53,1": true
        }   
    },
    "C,24,53,1" : {
        "name": "RADIO TOWER - INSIDE - F1 Stairs - 16,5",
        "to" : "C,24,53,2",
        "level": "3",
        "connections": {
            "C,24,53,0": true
        }   
    },
// F2
    "C,24,53,3" : {
        "name": "RADIO TOWER - INSIDE - F2 Left Stairs - 7,5",
        "to" : "C,24,53,4",
        "level": "7",
        "tags": ["no_return"]
    },
    "C,24,53,2" : {
        "name": "RADIO TOWER - INSIDE - F2 Right Stairs - 17,5",
        "to" : "C,24,53,1",
        "level": "3"
    },
// F3    
    "C,24,53,4" : {
        "name": "RADIO TOWER - INSIDE - F3 Left Stairs - 9,5",
        "to" : "C,24,53,3",
        "level": "7",
        "connections": {
            "C,24,53,5": true
        }   
    },
    "C,24,53,6" : {
        "name": "RADIO TOWER - INSIDE - F3 Right Stairs - 9,5",
        "to" : "C,24,53,9",
        "level": "7",
    },
    "C,24,53,5" : {
        "name": "RADIO TOWER - INSIDE - F3 Middle Stairs - 10,5",
        "to" : "C,24,53,7",
        "level": "7",
        "connections": {
            "C,24,53,4": true
        }   
    },
// F4
    "C,24,53,8" : {
        "name": "RADIO TOWER - INSIDE - F4 Left Side Left Stairs - 7,5",
        "to" : "C,24,53,11",
        "level": "7",
        "connections": {
            "C,24,53,7": true
        }   
    },
    "C,24,53,7" : {
        "name": "RADIO TOWER - INSIDE - F4 Left Side Right Stairs - F,5",
        "to" : "C,24,53,5",
        "level": "7",
        "connections": {
            "C,24,53,8": true
        }   
    },
    "C,24,53,10" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Left Stairs - 14,5",
        "to" : "C,24,53,12",
        "level": "7",
        "connections": {
            "C,24,53,9": true
        }   
    },
    "C,24,53,9" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Right Stairs - 16,5",
        "to" : "C,24,53,6",
        "level": "7",
        "connections": {
            "C,24,53,10": true
        }   
    },
// F5
    "C,24,53,11" : {
        "name": "RADIO TOWER- INSIDE - F4 Left Side Stairs - 9,5",
        "to" : "C,24,53,8",
        "level": "7",
    },
    "C,24,53,12" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Stairs - 15,5",
        "to" : "C,24,53,10",
        "level": "7",
    },
/* GOLDENROD DEPARTMENT STORE */
//F1
    "C,13,16,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F1 Enterance - 10,B",
        "to" : "C,0,3,2",
        "level": "3",
        "connections": {
            "C,13,16,2": true,
            "C,13,17,0": true,
            "C,13,18,0": true,
            "C,13,19,0": true,
            "C,13,20,0": true
        }   
    },
    "C,13,16,2" : {
        "name": "GOLDENROD DEPT - INSIDE - F1 Stairs - 16,5",
        "to" : "C,13,17,0",
        "level": "3",
        "connections": {
            "C,13,16,0": true
        }   
    },
//F2
    "C,13,17,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F2 Stairs Right - 18,5",
        "to" : "C,13,16,2",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,17,1": true
        }   
    },
    "C,13,17,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F2 Stairs Left - 11,5",
        "to" : "C,13,18,0",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,17,0": true
        }   
    },
//F3
    "C,13,18,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F3 Stairs Left - 16,5",
        "to" : "C,13,17,1",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,18,1": true
        }   
    },
    "C,13,18,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F3 Stairs Right - 18,5",
        "to" : "C,13,19,0",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,18,0": true
        }   
    },
//F4
    "C,13,19,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F4 Stairs Right - 18,5",
        "to" : "C,13,18,1",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,19,1": true
        }   
    },
    "C,13,19,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F4 Stairs Left - 11,5",
        "to" : "C,13,20,0",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,19,0": true
        }   
    },
//F5
    "C,13,20,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F5 Stairs Left - 16,5",
        "to" : "C,13,19,1",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,20,2": true
        }   
    },
    "C,13,20,2" : {
        "name": "GOLDENROD DEPT - INSIDE - F5 Stairs Right - 18,5",
        "to" : "C,3,5,1",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,13,20,0": true
        }   
    },
//F6
    "C,3,5,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F6 Stairs Left - 16,5",
        "to" : "C,13,20,2",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,3,5,0": true
        }   
    },
    "C,3,5,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F6 Stairs Right - 18,5",
        "to" : "C,13,21,0",
        "level": "3",
        "connections": {
            "C,13,16,0": true,
            "C,3,5,1": true
        }   
    },
// ROOF
    "C,13,21,0" : {
        "name": "GOLDENROD DEPT - INSIDE - Roof Stairs - 16,5",
        "to" : "C,3,5,0",
        "level": "3"// Route 36
    },
    "C,11,15,1" : {
        "name": "Route 35 - INSIDE - Route Connector Bottom (Golden Rod) - 4,9",
        "to" : "C,0,3,14",
        "level": "3",
        "connections": {
            "C,11,15,0": true,
        }   
    },
    "C,11,15,0" : {
        "name": "Route 35 - INSIDE - Route Connector Top (Golden Rod) - 4,1",
        "to" : "C,0,22,2",
        "level": "3",
        "connections": {
            "C,11,15,1": true,
        }   
    },
    "C,0,22,0" : {
        "name": "Route 35 - OUTSIDE - National Park Connector - B,5",
        "to" : "C,24,68,0",
        "level": "3",
        "grouped" : ["C,0,22,1"],
        "groupMain" : true,
        "connections": {
            "C,0,22,2": true,
            "C,0,23,2": "JOHTO_CUT"
        }   
    },
    "C,0,22,1" : {
        "name": "Route 35 - OUTSIDE - National Park Connector - C,5",
        "to" : "C,24,68,0",
        "level": "3",
        "grouped" : ["C,0,22,0"]
    },
    "C,0,22,2" : {
        "name": "Route 35 - OUTSIDE - Route Connector Bottom - 11,21",
        "to" : "C,11,15,0",
        "level": "3",
        "grouped" : ["C,0,22,3"],
        "groupMain" : true,
        "connections": {
            "C,0,22,0": true,
        }   
    },
    "C,0,22,3" : {
        "name": "Route 35 - OUTSIDE - Route Connector Bottom - 12,21",
        "to" : "C,11,15,0",
        "level": "3",
        "grouped" : ["C,0,22,3"]
    },
    "C,24,68,0" : {
        "name": "Route 35 - INSIDE - National Park Enterance Bottom - 3,8",
        "to" : "C,0,22,0",
        "level": "3",
        "connections": {
            "C,24,68,1": true,
        }   
    },
    "C,24,68,1" : {
        "name": "Route 35 - INSIDE - National Park Enterance Top - 3,1",
        "to" : "C,0,38,0",
        "level": "3",
        "connections": {
            "C,24,68,0": true,
        }   
    },
    "C,0,38,0" : {
        "name": "NATIONAL PARK - OUTSIDE - Bottom - C,2F",
        "to" : "C,24,68,1",
        "level": "3",
        "grouped" : ["C,0,38,1"],
        "groupMain" : true,
        "connections": {
            "C,0,38,2": true,
        }   
    },
    "C,0,38,1" : {
        "name": "NATIONAL PARK - OUTSIDE - Bottom - D,2F",
        "to" : "C,24,68,1",
        "level": "3",
        "grouped" : ["C,0,38,0"]
    },
    "C,0,38,2" : {
        "name": "NATIONAL PARK - OUTSIDE - Top Right - 23,12",
        "to" : "C,24,96,0",
        "level": "3",
        "connections": {
            "C,0,38,0": true,
        }   
    },
    "C,24,96,0" : {
        "name": "Route 36 - INSIDE - National Park Connector Left - 1,5",
        "to" : "C,0,38,2",
        "level": "3",
        "connections": {
            "C,24,96,1": true,
        }   
    },
    "C,24,96,1" : {
        "name": "Route 36 - INSIDE - National Park Connector Right - A,5",
        "to" : "C,0,23,2",
        "level": "3",
        "connections": {
            "C,24,96,0": true,
        }   
    },
/* ECRUTEAK CITY - EXT */
    "C,0,1,0" : {
        "name": "ECRUTEAK CITY - OUTSIDE - PkCenter - 19,1F",
        "to" : "C,9,11,0",
        "level": "4",
        "connections": {
            "C,0,1,1": true,
            "C,0,1,2": true,
            "C,0,1,4": true,
            "C,0,1,5": true,
            "C,0,1,6": true,
            "C,0,1,7": true,
            "C,0,1,8": true,
            "C,0,1,10": true,
            "C,0,1,11": true,
            "C,0,23,0": "SQUIRT_BOTTLE"
        }   
    },
    "C,0,1,1" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Mart - 20,19",
        "to" : "C,9,13,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,2" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Burned Tower Enterance - 7,9",
        "to" : "C,24,54,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,3" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Tin Tower Enterance - 27,B",
        "to" : "C,24,6,0",
        "level": "4",
        "connections": {
            "C,9,9,1": true,
        }   
    },
    "C,0,1,4" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Above PkCenter - 19,19",
        "to" : "C,9,6,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,5" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Gym - 9,1F",
        "to" : "C,12,1,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,6" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Above Gym - 7,19",
        "to" : "C,9,1,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,7" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Left Of Gym - F,1F",
        "to" : "C,9,0,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,8" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Center Top - 14,F",
        "to" : "C,9,7,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,9" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Route Connector Top - 16,6",
        "to" : "C,9,9,1",
        "level": "4",
        "connections": {
            "C,0,1,3": true,
        }   
    },
    "C,0,1,10" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Route Connector Left - 2,16",
        "to" : "C,29,11,1",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
    "C,0,1,11" : {
        "name": "ECRUTEAK CITY - OUTSIDE - Route Connector Right - 25,1E",
        "to" : "C,20,0,0",
        "level": "4",
        "connections": {
            "C,0,1,0": true,
        }   
    },
/* ECRUTEAK CITY - INT */ 
    "C,9,11,0" : {
        "name": "ECRUTEAK CITY - INSIDE - PkCenter Enterance - 7,8",
        "to" : "C,0,1,0",
        "level": "4",
        "connections": {
            "C,9,11,2": true,
            "C,0,1,0": true
        }   
    },
    "C,9,11,2" : {
        "name": "ECRUTEAK CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,9,12,0",
        "level": "4",
        "connections": {
            "C,9,11,0": true,
        }   
    },
    "C,9,13,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Mart - 4,7",
        "to" : "C,0,1,1",
        "level": "4",
    },
    "C,9,6,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Above Pk Center (Evee Sisters) - 6,E",
        "to" : "C,0,1,4",
        "level": "4",
    },
    "C,12,1,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Gym - 5,11",
        "to" : "C,0,1,5",
        "level": "4",
    },
    "C,9,1,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Above Gym - 4,7",
        "to" : "C,0,1,6",
        "level": "4",
    },
    "C,9,0,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Left Of Gym - 4,7",
        "to" : "C,0,1,7",
        "level": "4",
    },
// BURNED TOWER
    // F1
    "C,24,54,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Burned Tower F1 Enterance - 7,11",
        "to" : "C,0,1,2",
        "level": "4",
        "connections": {
            "C,24,54,2": true,
        }   
    },
    "C,24,54,1" : {
        "name": "ECRUTEAK CITY - INSIDE - Burned Tower F1 Enterance - 7,11",
        "to" : "C,24,55,0",
        "level": "4",
        "ignore": true,
        "connections": {
            "C,24,54,0": true,
            "C,24,54,2": true,
        }   
    },
    "C,24,54,2" : {
        "name": "ECRUTEAK CITY - INSIDE - Burned Tower F1 Drop - 8,B",
        "to" : "C,24,55,1",
        "level": "4",
        "ignore": true,
        "connections": {
            "C,24,54,0": true,
        }   
    },
    // F2
    "C,24,55,1" : {
        "name": "ECRUTEAK CITY - INSIDE - Burned Tower F2 Drop - A,9",
        "to" : "C,24,54,2",
        "level": "4",
        "ignore": true,
        "connections": {
            "C,24,55,0": true,
        }   
    },
    "C,24,55,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Burned Tower F2 Ladder - 7,F",
        "to" : "C,24,54,1",
        "level": "4",
        "ignore": true,
        "connections": {
            "C,24,55,1": true,
        }   
    },
// TIN TOWER
    // It looks like most of tine tower is unimplimented
// Gate House
    // F1
    "C,9,7,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Tin Tower Gatehouse F1 Enterance - 5,12",
        "to" : "C,0,1,8",
        "level": "4",
    },
    "C,9,7,1" : {
        "name": "ECRUTEAK CITY - INSIDE - Tin Tower Gatehouse F1 Stairs - 6,2",
        "to" : "C,9,8,1",
        "level": "5",
        "connections": {
            "C,9,7,0": true,
        }   
    },
    // F2
    "C,9,8,1" : {
        "name": "ECRUTEAK CITY - INSIDE - Tin Tower Gatehouse F2 Bottom Stairs - 4,10",
        "to" : "C,9,7,1",
        "level": "5",
        "connections": {
            "C,9,8,0": true,
        }   
    },
    "C,9,8,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Tin Tower Gatehouse F2 Top Stairs - 4,2",
        "to" : "C,9,9,0",
        "level": "5",
        "connections": {
            "C,9,8,1": true,
        }   
    },
    // F3
    // I think in the rom you are not supposed to be able to get through here
// TOWER    
    // F1
    "C,24,6,0" : {
        "name": "ECRUTEAK CITY - INSIDE - Tin Tower F1 Enterance - 7,10",
        "to" : "C,0,1,3",
        "level": "5",
    },
// LEVEL 5
/* ROUTE 38 - EXT */
    "C,0,25,0" : {
        "name": "ROUTE 38 - OUTSIDE - Route Connector - 23,A",
        "to" : "C,29,11,0",
        "level": "5",
        "connections": {
            "C,0,26,1": true,
        }   
    },
/* ROUTE 38 - INT */
    "C,29,11,0" : {
        "name": "ROUTE 38 - INSIDE - Route Connector Left - 1,5",
        "to" : "C,0,25,0",
        "level": "5",
        "connections": {
            "C,29,11,1": true,
        }   
    },
    "C,29,11,1" : {
        "name": "ROUTE 38 - INSIDE - Route Connector Right - B,5",
        "to" : "C,0,1,10",
        "level": "5",
        "connections": {
            "C,29,11,0": true,
        }   
    },
/* ROUTE 39 - EXT */
    "C,0,26,0" : {
        "name": "ROUTE 39 - OUTSIDE - Left House - 3,5",
        "to" : "C,18,1,0",
        "level": "5",
        "connections": {
            "C,0,26,1": true,
        }   
    },
    "C,0,26,1" : {
        "name": "ROUTE 39 - OUTSIDE - Right House - 5,5",
        "to" : "C,18,0,0",
        "level": "5",
        "connections": {
            "C,0,26,0": true,
            "C,0,25,0": true,
            "C,0,2,1": true,
        }   
    },
/* ROUTE 39 - INT */
    "C,18,1,0" : {
        "name": "ROUTE 39 - INSIDE - Left House - 3,8",
        "to" : "C,0,26,0",
        "level": "5"  
    },
    "C,18,0,0" : {
        "name": "ROUTE 39 - INSIDE - Right House - 3,7",
        "to" : "C,0,26,1",
        "level": "5"  
    },
/* OLIVINE CITY - EXT */
    "C,0,2,0" : {
        "name": "OLIVINE CITY - OUTSIDE - GYM - B,B",
        "to" : "C,10,0,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,1" : {
        "name": "OLIVINE CITY - OUTSIDE - PkCenter - D,15",
        "to" : "C,10,5,0",
        "level": "5",
        "connections": {
            "C,0,26,1": true,
            "C,0,2,0": true,
            "C,0,2,2": true,
            "C,0,2,3": true,
            "C,0,2,4": true,
            "C,0,2,5": true,
            "C,0,2,6": true,
            "C,0,2,7": true,
            "C,0,2,8": true,
            "C,0,27,0": true,
            "C,0,12,0": "JOHTO_SURF",
            "C,0,28,0": "JOHTO_WHIRLPOOL",
            "C,0,28,1": "JOHTO_WHIRLPOOL",
            "C,0,28,2": "JOHTO_WHIRLPOOL",
            "C,0,28,3": "JOHTO_WHIRLPOOL",
        }   
    },
    "C,0,2,2" : {
        "name": "OLIVINE CITY - OUTSIDE - Top Right Right - 1D,B",
        "to" : "C,10,4,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,3" : {
        "name": "OLIVINE CITY - OUTSIDE - Mart - 14,11",
        "to" : "C,10,7,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,4" : {
        "name": "OLIVINE CITY - OUTSIDE - Left of Mart - D,F",
        "to" : "C,9,5,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,5" : {
        "name": "OLIVINE CITY - OUTSIDE - Left of PkCenter - 7,15",
        "to" : "C,10,1,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,6" : {
        "name": "OLIVINE CITY - OUTSIDE - Top Right Left - 19,B",
        "to" : "C,10,2,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,7" : {
        "name": "OLIVINE CITY - OUTSIDE - LightHouse - 1D,1B",
        "to" : "C,24,46,0",
        "level": "5",
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,8" : {
        "name": "OLIVINE CITY - OUTSIDE - Docks - 13,1B",
        "to" : "C,24,1,0",
        "level": "5",
        "groupMain" : true,
        "grouped" : ["C,0,2,9"],
        "connections": {
            "C,0,2,1": true,
        }   
    },
    "C,0,2,9" : {
        "name": "OLIVINE CITY - OUTSIDE - Docks - 14,1B",
        "to" : "C,24,1,0",
        "level": "5",
        "grouped" : ["C,0,2,8"],
    },
/* OLIVINE CITY - INT */
    "C,10,0,0" : {
        "name": "OLIVINE CITY - INSIDE - GYM - B,B",
        "to" : "C,0,2,0",
        "level": "6"
    },
    "C,10,5,0" : {
        "name": "OLIVINE CITY - INSIDE - PkCenter Enterance - 7,8",
        "to" : "C,0,2,1",
        "level": "5",
        "connections": {
            "C,10,5,2": true,
            "C,0,2,1": true
        } 
    },
    "C,10,5,2" : {
        "name": "OLIVINE CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,10,6,0",
        "level": "5",
        "connections": {
            "C,10,5,0": true,
        } 
    },
    "C,10,4,0" : {
        "name": "OLIVINE CITY - INSIDE - Top Right Right - 3,7",
        "to" : "C,0,2,2",
        "level": "5"
    },
    "C,10,7,0" : {
        "name": "OLIVINE CITY - INSIDE - Mart - 4,7",
        "to" : "C,0,2,3",
        "level": "5"
    },
    "C,9,5,0" : {
        "name": "OLIVINE CITY - INSIDE - Left of Mart - 3,7",
        "to" : "C,0,2,4",
        "level": "5"
    },
    "C,10,1,0" : {
        "name": "OLIVINE CITY - INSIDE - Left of PkCenter - 2,8",
        "to" : "C,0,2,5",
        "level": "5"
    },
    "C,10,2,0" : {
        "name": "OLIVINE CITY - INSIDE - Top Right Left - 3,7",
        "to" : "C,0,2,6",
        "level": "5"
    },
// No Inside of Docks
/* Lighthouse */ // - Level 6
    // F1
    "C,24,46,0" : {
        "name": "LIGHTHOUSE - INSIDE - F1 Enterance - B,11",
        "to" : "C,0,2,7",
        "level": "6",
        "connections": {
            "C,24,46,1": true,
        } 
    },
    "C,24,46,1" : {
        "name": "LIGHTHOUSE - INSIDE - F1 Stairs - 3,A",
        "to" : "C,24,47,0",
        "level": "6",
        "connections": {
            "C,24,46,0": true,
        } 
    },
    "C,24,46,2" : {
        "name": "LIGHTHOUSE - INSIDE - F1 Drop - 10,D",
        "to" : "C,24,47,2",
        "level": "6",
        "ignore": true,
        "groupMain" : true,
        "grouped" : ["C,24,46,3"],
        "connections": {
            "C,24,46,0": true,
        } 
    },
    "C,24,46,3" : {
        "name": "LIGHTHOUSE - INSIDE - F1 Drop - 11,D",
        "to" : "C,24,47,2",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,46,2"],
    },
    // F2
    "C,24,47,0" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Bottom Stairs - 2,A",
        "to" : "C,24,46,1",
        "level": "6",
        "connections": {
            "C,24,47,1": true,
            "C,24,47,2": true
        } 
    },
    "C,24,47,1" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Top Stairs - 2,A",
        "to" : "C,24,48,0",
        "level": "6",
        "connections": {
            "C,24,47,0": true
        } 
    },
    "C,24,47,2" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Hole - 10,2",
        "to" : "C,24,46,2",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,47,3"],
        "connections": {
            "C,24,47,0": true
        } 
    },
    "C,24,47,3" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Hole - 11,2",
        "to" : "C,24,46,3",
        "level": "6",
        "grouped" : ["C,24,47,2"]
    },
    "C,24,47,4" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Drop - 10,B",
        "to" : "C,24,47,3",
        "level": "6",
        "ignore": true,
        "groupMain" : true,
        "grouped" : ["C,24,47,5"],
        "connections": {
            "C,24,47,0": true
        } 
    },
    "C,24,47,5" : {
        "name": "LIGHTHOUSE - INSIDE - F2 Drop - 11,B",
        "to" : "C,24,47,3",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,47,4"]
    },
    // F3
    "C,24,48,0" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Left Stairs - 3E,3",
        "to" : "C,24,47,1",
        "level": "6",
        "connections": {
            "C,24,48,1": true,
            "C,24,48,3": true
        } 
    },
    "C,24,48,1" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Right Stairs - E,2",
        "to" : "C,24,49,0",
        "level": "6",
        "connections": {
            "C,24,48,0": true
        } 
    },
    "C,24,48,2" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Center Stairs - 9,5",
        "to" : "C,24,49,2",
        "level": "6"
    },
    "C,24,48,3" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Hole - 10,B",
        "to" : "C,24,47,4",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,48,4"],
        "connections": {
            "C,24,48,0": true
        } 
    },
    "C,24,48,4" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Hole - 10,B",
        "to" : "C,24,47,5",
        "level": "6",
        "grouped" : ["C,24,48,3"],
        "connections": {
            "C,24,48,0": true
        } 
    },
    "C,24,48,5" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Top Drop - 8,3",
        "to" : "C,24,49,4",
        "level": "6",
        "ignore": true,
        "groupMain" : true,
        "grouped" : ["C,24,48,6"],
        "connections": {
            "C,24,48,2": true
        } 
    },
    "C,24,48,6" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Top Drop - 9,3",
        "to" : "C,24,49,4",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,48,5"]
    },
    "C,24,48,7" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Bottom Drop - 10,9",
        "to" : "C,24,49,6",
        "level": "6",
        "ignore": true,
        "groupMain" : true,
        "grouped" : ["C,24,48,8"],
        "connections": {
            "C,24,48,0": true
        } 
    },
    "C,24,48,8" : {
        "name": "LIGHTHOUSE - INSIDE - F3 Bottom Drop - 11,9",
        "to" : "C,24,49,6",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,48,7"]
    },
    // F4
    "C,24,49,0" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Top Right Stairs - D,2",
        "to" : "C,24,48,1",
        "level": "6",
        "connections": {
            "C,24,49,7": true,
            "C,24,49,4": true,
            "C,24,49,3": true
        } 
    },
    "C,24,49,2" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Center Top Stairs - 9,5",
        "to" : "C,24,48,2",
        "level": "6",
        "connections": {
            "C,24,49,1": true,
            "C,24,49,4": true
        } 
    },
    "C,24,49,1" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Center Bottom Stairs - 9,7",
        "to" : "C,24,50,0",
        "level": "6",
        "connections": {
            "C,24,49,2": true,
            "C,24,49,4": true
        } 
    },
    "C,24,49,3" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Top Left Stairs - 3,7",
        "to" : "C,24,50,2",
        "level": "6",
        "connections": {
            "C,24,49,7": true,
            "C,24,49,4": true,
            "C,24,49,0": true
        } 
    },
    "C,24,49,4" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Top Hole - 8,3",
        "to" : "C,24,48,5",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,49,5"],
        "connections": {
            "C,24,49,0": true,
            "C,24,49,2": true,
        } 
    },
    "C,24,49,5" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Top Hole - 9,3",
        "to" : "C,24,48,6",
        "level": "6",
        "grouped" : ["C,24,49,4"]
    },
    "C,24,49,6" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Bottom Hole - 10,9",
        "to" : "C,24,48,7",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,49,7"],
        "connections": {
            "C,24,49,0": true
        } 
    },
    "C,24,49,7" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Bottom Hole - 11,9",
        "to" : "C,24,48,8",
        "level": "6",
        "grouped" : ["C,24,49,6"]
    },
    "C,24,49,8" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Drop - 10,7",
        "to" : "C,24,50,3",
        "ignore": true,
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,49,9"],
        "connections": {
            "C,24,49,0": true
        } 
    },
    "C,24,49,9" : {
        "name": "LIGHTHOUSE - INSIDE - F4 Drop - 11,7",
        "to" : "C,24,50,3",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,49,8"]
    },
    // F5
    "C,24,50,0" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Center Top Stairs - 8,6",
        "to" : "C,24,49,1",
        "level": "6",
        "connections": {
            "C,24,50,1": true
        } 
    },
    "C,24,50,1" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Center Bottom Stairs - 9,E",
        "to" : "C,24,51,0",
        "level": "6",
        "connections": {
            "C,24,50,0": true
        } 
    },
    "C,24,50,2" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Top Left Stairs - 3,7",
        "to" : "C,24,49,3",
        "level": "6",
        "connections": {
            "C,24,50,3": true
        } 
    },
    "C,24,50,3" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Hole - 10,7",
        "to" : "C,24,49,8",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,50,4"],
        "connections": {
            "C,24,50,2": true
        } 
    },
    "C,24,50,4" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Hole - 11,7",
        "to" : "C,24,49,9",
        "level": "6",
        "grouped" : ["C,24,50,3"]
    },
    "C,24,50,5" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Drop - 10,5",
        "to" : "C,24,51,1",
        "level": "6",
        "groupMain" : true,
        "ignore": true,
        "grouped" : ["C,24,50,6"],
        "connections": {
            "C,24,50,3": true,
            "C,24,50,2": true
        } 
    },
    "C,24,50,6" : {
        "name": "LIGHTHOUSE - INSIDE - F5 Drop - 11,5",
        "to" : "C,24,51,1",
        "level": "6",
        "ignore": true,
        "grouped" : ["C,24,50,5"]
    },
    // F6
    "C,24,51,0" : {
        "name": "LIGHTHOUSE - INSIDE - F6 Stairs - 9,E",
        "to" : "C,24,50,1",
        "level": "6",
        "connections": {
            "C,24,51,1": true,
        } 
    },
    "C,24,51,1" : {
        "name": "LIGHTHOUSE - INSIDE - F6 Drop - 10,5",
        "to" : "C,24,50,5",
        "level": "6",
        "groupMain" : true,
        "grouped" : ["C,24,51,2"],
        "connections": {
            "C,24,51,0": true,
        } 
    },
    "C,24,51,2" : {
        "name": "LIGHTHOUSE - INSIDE - F6 Drop - 11,5",
        "to" : "C,24,50,6",
        "level": "6",
        "grouped" : ["C,24,51,1"]
    },
/* ROUTE 40 - EXT */
    "C,0,27,0" : {
        "name": "ROUTE 40 - OUTSIDE - Route Connector - A,5",
        "to" : "C,19,0,0",
        "level": "5",
        "groupMain" : true,
        "grouped" : ["C,0,27,1"],
        "connections": {
            "C,0,2,1": true,
        } 
    },
    "C,0,27,1" : {
        "name": "ROUTE 40 - OUTSIDE - Route Connector - B,5",
        "to" : "C,19,0,0",
        "grouped" : ["C,0,27,0"],
        "level": "5"
    },
/* ROUTE 40 - INT */
// No done battle tower area
/* CIANWOOD CITY - EXT */
    "C,0,12,0" : {
        "name": "CIANWOOD CITY - OUTSIDE - Center above Gym - D,1F",
        "to" : "C,4,0,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
    "C,0,12,1" : {
        "name": "CIANWOOD CITY - OUTSIDE - Gym - D,2B",
        "to" : "C,4,1,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
    "C,0,12,2" : {
        "name": "CIANWOOD CITY - OUTSIDE - Bottom Bottom House - 13,2F",
        "to" : "C,4,4,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
    "C,0,12,3" : {
        "name": "CIANWOOD CITY - OUTSIDE - PkCenter - 1C,2B",
        "to" : "C,4,5,0",
        "level": "5",
        "connections": {
            "C,0,12,0": true,
            "C,0,12,1": true,
            "C,0,12,2": true,
            "C,0,12,4": true,
            "C,0,12,5": true,
            "C,0,12,6": true,
            "C,0,2,1": "JOHTO_SURF"
        }   
    },
    "C,0,12,4" : {
        "name": "CIANWOOD CITY - OUTSIDE - Top Bottom House - 13,25",
        "to" : "C,4,3,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
    "C,0,12,5" : {
        "name": "CIANWOOD CITY - OUTSIDE - Middle Bottom House - 15,29",
        "to" : "C,4,2,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
    "C,0,12,6" : {
        "name": "CIANWOOD CITY - OUTSIDE - Top House - 9,11",
        "to" : "C,9,10,0",
        "level": "5",
        "connections": {
            "C,0,12,3": true,
        }   
    },
/* CIANWOOD CITY - INT */
    "C,4,0,0" : {
        "name": "CIANWOOD CITY - INSIDE - Center above Gym - D,1F",
        "to" : "C,0,12,0",
        "level": "5"
    },
    "C,4,1,0" : {
        "name": "CIANWOOD CITY - INSIDE - Gym - 5,12",
        "to" : "C,0,12,1",
        "level": "5"
    },
    "C,4,4,0" : {
        "name": "CIANWOOD CITY - INSIDE - Bottom Bottom House - 3,7",
        "to" : "C,0,12,2",
        "level": "5"
    },
    "C,4,5,0" : {
        "name": "CIANWOOD CITY - INSIDE - PkCenter Enterance - 7,8",
        "to" : "C,0,12,3",
        "level": "5",
        "connections": {
            "C,4,5,1": true,
            "C,0,12,3": true
        }   
    },
    "C,4,5,2" : {
        "name": "CIANWOOD CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,4,6,0",
        "level": "5",
        "connections": {
            "C,4,5,0": true,
        }   
    },
    "C,4,3,0" : {
        "name": "CIANWOOD CITY - INSIDE - Top Bottom House - 3,7",
        "to" : "C,0,12,4",
        "level": "5"
    },
    "C,4,2,0" : {
        "name": "CIANWOOD CITY - INSIDE - Middle Bottom House - 3,7",
        "to" : "C,0,12,5",
        "level": "5"
    },
    "C,9,10,0" : {
        "name": "CIANWOOD CITY - INSIDE - Top House - 3,7",
        "to" : "C,0,12,6",
        "level": "5"
    },
/* ROUTE 42 - EXT */
    "C,0,29,0" : {
        "name": "ROUTE 42 - OUTSIDE - Route Connector - 0,A",
        "to" : "C,20,0,1",
        "level": "7",
        "connections": {
            "C,0,29,1": true,
            "C,0,29,2": "JOHTO_SURF",
            "C,0,29,3": "JOHTO_SURF",
        }   
    },
    "C,0,29,1" : {
        "name": "ROUTE 42 - OUTSIDE - Left Cave - A,7",
        "to" : "C,24,15,0",
        "level": "7",
        "connections": {
            "C,0,29,0": true,
        }   
    },
    "C,0,29,2" : {
        "name": "ROUTE 42 - OUTSIDE - Middle Cave - 1C,B",
        "to" : "C,24,15,1",
        "level": "7",
        "connections": {
            "C,0,29,0": "JOHTO_SURF",
        }   
    },
    "C,0,29,3" : {
        "name": "ROUTE 42 - OUTSIDE - Right Cave - 2E,9",
        "to" : "C,24,15,2",
        "level": "7",
        "connections": {
            "C,0,13,2": true,
            "C,0,29,0": "JOHTO_SURF",
        }   
    },
/* ROUTE 42 - INT */
    "C,20,0,0" : {
        "name": "ROUTE 42 - INSIDE - Route Connector Left - 1,5",
        "to" : "C,0,1,11",
        "level": "7",
        "connections": {
            "C,20,0,1": true,
        }   
    },
    "C,20,0,1" : {
        "name": "ROUTE 42 - INSIDE - Route Connector Right - B,5",
        "to" : "C,0,29,0",
        "level": "7",
        "connections": {
            "C,20,0,0": true,
        }   
    },
/* MOUNT MORTAR */   
    // F1
    "C,24,15,0" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Bottom Left Enterance - 5,25",
        "to" : "C,0,29,1",
        "level": "7",
        "connections": {
            "C,24,15,3": true,
        }   
    },
    "C,24,15,1" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Bottom Center Enterance - 13,25",
        "to" : "C,0,29,2",
        "level": "7",
        "connections": {
            "C,24,15,8": true,
            "C,24,15,7": "JOHTO_WATERFALL"
        }   
    },
    "C,24,15,2" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Bottom Right Enterance - 27,25",
        "to" : "C,0,29,3",
        "level": "7",
        "connections": {
            "C,24,15,4": true,
        }   
    },
    "C,24,15,3" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Middle Left Door - D,18",
        "to" : "C,24,16,4",
        "level": "7",
        "connections": {
            "C,24,15,1": true,
        }   
    },
    "C,24,15,4" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Middle Right Door - 1F,18",
        "to" : "C,24,16,5",
        "level": "7",
        "connections": {
            "C,24,15,2": true,
        }   
    },
    "C,24,15,5" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Top Left Ladder - 9,10",
        "to" : "C,24,16,2",
        "level": "7"
    },
    "C,24,15,6" : {
        "name": "MOUNT MORTAR - INSIDE -F1 Top Right Ladder - 23,10",
        "to" : "C,24,16,3",
        "level": "7"
    },
    "C,24,15,7" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Top Center Door - 13,8",
        "to" : "C,24,17,1",
        "level": "7",
        "connections": {
            "C,24,15,1": "JOHTO_SURF",
        }   
    },
    "C,24,15,8" : {
        "name": "MOUNT MORTAR - INSIDE - F1 Bottom Ladder - 13,21",
        "to" : "C,24,18,1",
        "level": "7",
        "connections": {
            "C,24,15,1": true,
        }   
    },
    // F2
    "C,24,16,0" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Top Ladder Up - 9,9",
        "to" : "C,24,17,0",
        "level": "7",
        "connections": {
            "C,24,16,1": true,
            "C,24,16,2": true,
            "C,24,16,3": true
        }   
    },
    "C,24,16,1" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Top Ladder Down - 3,13",
        "to" : "C,24,18,0",
        "level": "7",
        "connections": {
            "C,24,16,0": true,
            "C,24,16,2": true,
            "C,24,16,3": true
        }   
    },
    "C,24,16,2" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Bottom Ladder Left - 5,27",
        "to" : "C,24,15,5",
        "level": "7",
        "connections": {
            "C,24,16,3": true,
            "C,24,16,4": true,
            "C,24,16,5": true
        }   
    },
    "C,24,16,3" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Bottom Ladder Right - 21,29",
        "to" : "C,24,15,6",
        "level": "7",
        "connections": {
            "C,24,16,2": true
        }   
    },
    "C,24,16,4" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Bottom Door Left - B,2F",
        "to" : "C,24,15,3",
        "level": "7",
        "connections": {
            "C,24,16,2": true
        }   
    },
    "C,24,16,5" : {
        "name": "MOUNT MORTAR - INSIDE - F2 Bottom Dorr Right - 1D,2F",
        "to" : "C,24,15,4",
        "level": "7",
        "connections": {
            "C,24,16,2": true
        }   
    },
    // F3
    "C,24,17,0" : {
        "name": "MOUNT MORTAR - INSIDE - F3 Top Ladder - 3,5",
        "to" : "C,24,16,0",
        "level": "7", 
        "connections": {
            "C,24,17,1": "JOHTO_SURF"
        }  
    },
    "C,24,17,1" : {
        "name": "MOUNT MORTAR - INSIDE - F3 Bottom Ladder - 11,21",
        "to" : "C,24,15,7",
        "level": "7", 
        "connections": {
            "C,24,17,0": "JOHTO_SURF"
        }  
    },
    // F4
    "C,24,18,0" : {
        "name": "MOUNT MORTAR - INSIDE - F4 Top Ladder - 3,3",
        "to" : "C,24,16,1",
        "level": "7", 
        "connections": {
            "C,24,18,1": "JOHTO_SURF_AND_STRENGTH"
        }  
    },
    "C,24,18,1" : {
        "name": "MOUNT MORTAR - INSIDE - F4 Bottom Ladder - 13,1D",
        "to" : "C,24,15,8",
        "level": "7", 
    },
/* MAGOGANY TOWN - EXT */
    "C,0,13,0" : {
        "name": "MAGOGANY TOWN - OUTSIDE - Center House - B,7",
        "to" : "C,5,0,0",
        "level": "7",
        "connections": {
            "C,0,13,2": true
        }   
    }, 
    "C,0,13,1" : {
        "name": "MAGOGANY TOWN - OUTSIDE - Gym - 7,D",
        "to" : "C,14,0,0",
        "level": "7",
        "connections": {
            "C,0,13,2": true
        },
        "tags": ["no_return"]
    }, 
    "C,0,13,2" : {
        "name": "MAGOGANY TOWN - OUTSIDE - PkCenter - F,D",
        "to" : "C,5,4,0",
        "level": "7",
        "connections": {
            "C,0,13,4": true,
            "C,0,13,0": true,
            "C,0,13,3": true,
            "C,0,29,3": true
        }   
    }, 
    "C,0,13,3" : {
        "name": "MAGOGANY TOWN - OUTSIDE - Right House - 11,7",
        "to" : "C,5,6,0",
        "level": "7",
        "connections": {
            "C,0,13,2": true
        }   
    },
    "C,0,13,4" : {
        "name": "MAGOGANY TOWN - OUTSIDE - Route Connector Top - 9,1",
        "to" : "C,5,7,0",
        "level": "7",
        "connections": {
            "C,0,13,2": true
        }   
    }, 
/* MAGOGANY TOWN - INT */
    "C,5,0,0" : {
        "name": "MAGOGANY TOWN - INSIDE - Center House Enterance - 3,8",
        "to" : "C,0,13,0",
        "level": "7",
        "connections": {
            "C,0,5,1": true
        }   
    }, 
    "C,5,0,1" : {
        "name": "MAGOGANY TOWN - INSIDE - Center House Secret Enterance - 5,4",
        "to" : "C,24,19,0",
        "level": "7",
        "connections": {
            "C,0,5,0": true
        },
        "tags": ["no_return"]
    }, 
    "C,14,0,0" : {
        "name": "MAGOGANY TOWN - INSIDE - Gym - 6,10",
        "to" : "C,0,13,1",
        "level": "7" 
    }, 
    "C,5,4,0" : {
        "name": "MAGOGANY TOWN - INSIDE - PkCenter Enterance - 7,8",
        "to" : "C,0,13,2",
        "level": "7",
        "connections": {
            "C,5,4,1": true,
            "C,0,13,2": true
        }   
    },
    "C,5,4,2" : {
        "name": "MAGOGANY TOWN - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,5,5,0",
        "level": "7",
        "connections": {
            "C,5,4,0": true
        }   
    },
    "C,5,6,0" : {
        "name": "MAGOGANY TOWN - INSIDE - Right House - 3,7",
        "to" : "C,0,13,3",
        "level": "7",
    },
/* ROUTE 43 - EXT */
    "C,0,30,0" : {
        "name": "ROUTE 43 - OUTSIDE - Center Route Connector Top - 15,1E",
        "to" : "C,20,1,1",
        "level": "7",
        "grouped" : ["C,0,30,1"],
        "groupMain" : true,
        "connections": {
            "C,0,30,3": true,
            "C,0,30,2": true,
            "C,0,14,1": true,
        }   
    },
    "C,0,30,1" : {
        "name": "ROUTE 43 - OUTSIDE - Center Route Connector Top - 16,1E",
        "to" : "C,20,1,1",
        "level": "7",
        "grouped" : ["C,0,30,0"]
    },
    "C,0,30,2" : {
        "name": "ROUTE 43 - OUTSIDE - Center Route Connector Bottom - 15,23",
        "to" : "C,20,1,0",
        "level": "7",
        "connections": {
            "C,0,30,0": true,
        }  
    },
    "C,0,30,3" : {
        "name": "ROUTE 43 - OUTSIDE - Bottom Route Connector - D,32",
        "to" : "C,5,7,1",
        "level": "7",
        "grouped" : ["C,0,30,4"],
        "groupMain" : true,
        "connections": {
            "C,0,30,0": true,
        }  
    },
    "C,0,30,4" : {
        "name": "ROUTE 43 - OUTSIDE - Bottom Route Connector - E,32",
        "to" : "C,5,7,1",
        "level": "7",
        "grouped" : ["C,0,30,3"]
    },
/* ROUTE 43 - INT */
    "C,5,7,0" : {
        "name": "ROUTE 43 - INSIDE - Bottom Route Connector Bottom - 4,9",
        "to" : "C,0,13,4",
        "level": "7",
        "connections": {
            "C,5,7,1": true,
        }   
    },
    "C,5,7,1" : {
        "name": "ROUTE 43 - INSIDE - Bottom Route Connector Top - 4,1",
        "to" : "C,0,30,3",
        "level": "7",
        "connections": {
            "C,5,7,0": true,
        }   
    },
    "C,20,1,0" : {
        "name": "ROUTE 43 - INSIDE - Middle Route Connector Bottom - 4,9",
        "to" : "C,0,30,2",
        "level": "7",
        "connections": {
            "C,20,1,1": true,
        }   
    },
    "C,20,1,1" : {
        "name": "ROUTE 43 - INSIDE - Middle Route Connector Top - 4,1",
        "to" : "C,0,30,0",
        "level": "7",
        "connections": {
            "C,20,1,0": true,
        }   
    },
/* LAKE OF RAGE - EXT */
    "C,0,14,1" : {
        "name": "LAKE OF RAGE - OUTSIDE - Bottom House - 1B,21",
        "to" : "C,6,8,0",
        "level": "7",
        "connections": {
            "C,0,30,0": true,
            "C,0,14,0": "JOHTO_CUT",
        }   
    },
    "C,0,14,0" : {
        "name": "LAKE OF RAGE - OUTSIDE - Top House - 7,5",
        "to" : "C,6,7,0",
        "level": "7",
        "connections": {
            "C,0,14,1": "JOHTO_CUT",
        }   
    },
/* LAKE OF RAGE - INT */
    "C,6,8,0" : {
        "name": "LAKE OF RAGE - INSIDE - Bottom House - 3,7",
        "to" : "C,0,14,1",
        "level": "7"
    },
    "C,6,7,0" : {
        "name": "LAKE OF RAGE - INSIDE - Top House - 4,8",
        "to" : "C,0,14,0",
        "level": "7"
    },
/* ROCKET HIDEOUT */
    // F1
    "C,24,19,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Top Right Stairs - 1C,2",
        "to" : "C,5,0,1",
        "level": "7",
        "connections": {
            "C,24,19,1": true,
            "C,24,19,2": true,
        }   
    },
    "C,24,19,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Bottom Left Stairs - 3,14",
        "to" : "C,24,20,3",
        "level": "7",
        "connections": {
            "C,24,19,0": true,
            "C,24,19,2": true,
        }   
    },
    "C,24,19,2" : {
        "name": "ROCKET HIDEOUT - INSIDE - F1 Bottom Left Warp - 5,14",
        "to" : "C,24,19,3",
        "level": "7",
        "connections": {
            "C,24,19,0": true,
            "C,24,19,1": true,
        }   
    },
    // F2
    "C,24,20,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Top Left Stairs - 3,2",
        "to" : "C,24,21,0",
        "level": "7",
        "connections": {
            "C,24,20,1": true,
        }   
    },
    "C,24,20,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Top Right Stairs - 1C,2",
        "to" : "C,24,21,1",
        "level": "7",
        "connections": {
            "C,24,20,0": true,
        }   
    },
    "C,24,20,2" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Middle Left Stairs - 3,7",
        "to" : "C,24,21,2",
        "level": "7",
    },
    "C,24,20,3" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Bottom Left - 3,14",
        "to" : "C,24,19,1",
        "level": "7",
        "connections": {
            "C,24,20,4": true,
        }   
    },
    "C,24,20,4" : {
        "name": "ROCKET HIDEOUT - INSIDE - F2 Bottom Right - 1C,11",
        "to" : "C,24,21,3",
        "level": "7",
        "connections": {
            "C,24,20,3": true,
        }   
    },
    // F3
    "C,24,21,0" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Top Left Top Stairs - 3,2",
        "to" : "C,24,20,0",
        "level": "7",
        "connections": {
            "C,24,21,2": true,
        }   
    },
    "C,24,21,1" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Top Right Stairs - 1E,2",
        "to" : "C,24,20,1",
        "level": "7",
        "connections": {
            "C,24,21,3": true,
        }   
    },
    "C,24,21,2" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Top Left Bottom Stairs - 3,6",
        "to" : "C,24,20,2",
        "level": "7",
        "connections": {
            "C,24,21,0": true,
        }   
    },
    "C,24,21,3" : {
        "name": "ROCKET HIDEOUT - INSIDE - F3 Bottom Right Stairs - 1D,11",
        "to" : "C,24,20,4",
        "level": "7",
        "connections": {
            "C,24,21,1": true,
        }   
    },
// Level 8

/* ROUTE 44 - EXT */
    "C,0,31,0" : {
        "name": "ROUTE 44 - OUTSIDE - Ice Path Enterance - 38,7",
        "to" : "C,20,2,0",
        "level": "8",
        "connections": {
            "C,0,13,2": true,
        }   
    },
/* ICE PATH */
    // F1
    "C,20,2,0" : {
        "name": "ICE PATH - INSIDE - F1 Left Enterance - 4,13",
        "to" : "C,0,31,0",
        "level": "8",
        "connections": {
            "C,20,2,2": true,
        }   
    },
    "C,20,2,1" : {
        "name": "ICE PATH - INSIDE - F1 Right Enterance - 24,1B",
        "to" : "C,0,5,3",
        "level": "8",
        "connections": {
            "C,20,2,3": true,
        }   
    },
    "C,20,2,2" : {
        "name": "ICE PATH - INSIDE - F1 Top Right Ladder - 25,5",
        "to" : "C,24,22,0",
        "level": "8",
        "connections": {
            "C,20,2,0": true,
        }   
    },
    "C,20,2,3" : {
        "name": "ICE PATH - INSIDE - F1 Center Right Ladder - 25,D",
        "to" : "C,24,22,2",
        "level": "8",
        "connections": {
            "C,20,2,1": true,
        }   
    },
    // F2
    "C,24,22,0" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Bottom Left - 5,11",
        "to" : "C,20,2,2",
        "level": "8",
        "connections": {
            "C,24,22,5": true,
            "C,24,22,4": true,
            "C,24,22,1": true
        }   
    },
    "C,24,22,1" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Top Right - 13,5",
        "to" : "C,24,52,0",
        "level": "8",
        "connections": {
            "C,24,22,0": true
        }   
    },
    "C,24,22,2" : {
        "name": "ICE PATH - INSIDE - F2 Bottom Side Left - 7,1D",
        "to" : "C,20,2,3",
        "level": "8",
        "connections": {
            "C,24,22,3": true
        }   
    },
    "C,24,22,3" : {
        "name": "ICE PATH - INSIDE - F2 Bottom Side Right - D,1F",
        "to" : "C,24,59,1",
        "level": "8",
        "connections": {
            "C,24,22,2": true
        }   
    },
    "C,24,22,4" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Center Top - 3,F",
        "to" : "C,24,52,2",
        "level": "8",
        "connections": {
            "C,24,22,0": true
        }   
    },
    "C,24,22,5" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Top Left - 6,9",
        "to" : "C,24,52,3",
        "level": "8",
        "connections": {
            "C,24,22,0": true
        }   
    },
    "C,24,22,6" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Bottom Left Hole - 7,E",
        "to" : "C,24,52,4",
        "level": "8",
        "connections": {
            "C,24,22,7": true
        }   
    },
    "C,24,22,7" : {
        "name": "ICE PATH - INSIDE - F2 Top Side Bottom Right Hole - E,F",
        "to" : "C,24,52,5",
        "level": "8",
        "connections": {
            "C,24,22,6": true,
            "C,24,22,4": "JOHTO_STRENGTH"
        }   
    },
    // F3
    "C,24,59,0" : {
        "name": "ICE PATH - INSIDE - F3 Top Ladder - 5,5",
        "to" : "C,24,60,1",
        "level": "8",
        "connections": {
            "C,24,59,1": true
        }   
    },
    "C,24,59,1" : {
        "name": "ICE PATH - INSIDE - F3 Bottom Ladder - 5,11",
        "to" : "C,24,22,3",
        "level": "8",
        "connections": {
            "C,24,59,0": true
        }   
    },
    // F4
    "C,24,60,0" : {
        "name": "ICE PATH - INSIDE - F4 Left - 5,8",
        "to" : "C,24,52,1",
        "level": "8",
        "connections": {
            "C,24,60,1": true
        }   
    },
    "C,24,60,1" : {
        "name": "ICE PATH - INSIDE - F4 Right - 11,7",
        "to" : "C,24,59,0",
        "level": "8",
        "connections": {
            "C,24,60,0": true
        }   
    },
    // F5
    "C,24,52,0" : {
        "name": "ICE PATH - INSIDE - F5 Top Right - 13,3",
        "to" : "C,24,22,1",
        "level": "8",
        "connections": {
            "C,24,52,1": true
        }   
    },
    "C,24,52,1" : {
        "name": "ICE PATH - INSIDE - F5 Center Ladder - B,D",
        "to" : "C,24,60,0",
        "level": "8",
        "connections": {
            "C,24,52,0": true
        }   
    },
    "C,24,52,2" : {
        "name": "ICE PATH - INSIDE - F5 Top Right Drop - D,6",
        "to" : "C,24,22,4",
        "level": "8",
        "ignore": true,
        "connections": {
            "C,24,52,1": true,
            "C,24,52,0": true
        }   
    },
    "C,24,52,3" : {
        "name": "ICE PATH - INSIDE - F5 Top Left Drop - 6,8",
        "to" : "C,24,22,5",
        "level": "8",
        "ignore": true,
        "connections": {
            "C,24,52,1": true,
            "C,24,52,0": true
        }   
    },
    "C,24,52,4" : {
        "name": "ICE PATH - INSIDE - F5 Bottom Left Drop - 6,E",
        "to" : "C,24,22,6",
        "level": "8",
        "ignore": true,
        "connections": {
            "C,24,52,1": true,
            "C,24,52,0": true
        }   
    },
    "C,24,52,5" : {
        "name": "ICE PATH - INSIDE - F5 Bottom Right Drop - E,E",
        "to" : "C,24,22,7",
        "level": "8",
        "ignore": true,
        "connections": {
            "C,24,52,1": true,
            "C,24,52,0": true
        }   
    },
/* BLACKTHORN CITY - EXT */
    "C,0,5,0" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Mart - 12,1F",
        "to" : "C,13,8,0",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,1" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Gym - 15,E",
        "to" : "C,15,0,0",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,2" : {
        "name": "BLACKTHORN CITY - OUTSIDE - PkCenter - 18,1F",
        "to" : "C,13,6,0",
        "level": "8",
        "connections": {
            "C,0,5,0": true,
            "C,0,5,1": true,
            "C,0,5,3": true,
            "C,0,5,4": true,
            "C,0,5,5": true,
            "C,0,5,6": true,
            "C,0,32,0": true,
            "C,0,33,0": true,
            "C,0,33,1": true,
        }   
    },
    "C,0,5,3" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Ice Path Enterance - 26,B",
        "to" : "C,20,2,1",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,4" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Above Mart - F,17",
        "to" : "C,13,12,0",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,5" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Right of PkCenter - 1F,19",
        "to" : "C,13,15,0",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,6" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Left of Mart - B,21",
        "to" : "C,13,11,0",
        "level": "8",
        "connections": {
            "C,0,5,2": true
        }   
    },
    "C,0,5,7" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Dragons Den Enterance - 16,3",
        "to" : "C,24,27,0",
        "level": "8",
        "tags": ["no_return"]
    },
/* BLACKTHORN CITY - INT */
    "C,13,8,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Mart - 4,7",
        "to" : "C,0,5,0",
        "level": "8", 
    },
    "C,15,0,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Gym - 6,12",
        "to" : "C,0,5,1",
        "level": "8", 
    },
    "C,13,6,0" : {
        "name": "BLACKTHORN CITY - INSIDE - PkCenter Enterance - 7,8",
        "to" : "C,0,5,2",
        "level": "8", 
        "connections": {
            "C,13,6,2": true,
            "C,0,5,2": true
        }   
    },
    "C,13,6,2" : {
        "name": "BLACKTHORN CITY - INSIDE - PkCenter Stairs - 1,6",
        "to" : "C,13,7,0",
        "level": "8", 
        "connections": {
            "C,13,6,0": true
        }   
    },
    "C,13,12,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Above Mart - 3,7",
        "to" : "C,0,5,4",
        "level": "8", 
    },
    "C,13,15,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Right of PkCenter - 3,7",
        "to" : "C,0,5,5",
        "level": "8", 
    },
    "C,13,11,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Left of Mart - 3,7",
        "to" : "C,0,5,6",
        "level": "8", 
    },
/* DRAGONS DEN - EXT */
    // CAVE
    "C,24,27,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Top Bottom Ladder - 3,5",
        "to" : "C,0,5,7",
        "level": "8", 
        "connections": {
            "C,24,27,1": true
        }   
    },
    "C,24,27,1" : {
        "name": "BLACKTHORN CITY - INSIDE - Top Top Ladder - 3,3",
        "to" : "C,24,27,2",
        "level": "8", 
        "connections": {
            "C,24,27,0": true
        }   
    },
    "C,24,27,2" : {
        "name": "BLACKTHORN CITY - INSIDE - Bottom Top Ladder - 5,D",
        "to" : "C,24,27,1",
        "level": "8", 
        "connections": {
            "C,24,27,3": true
        }   
    },
    "C,24,27,3" : {
        "name": "BLACKTHORN CITY - INSIDE - Bottom Bottom Enterance - 5,F",
        "to" : "C,24,28,0",
        "level": "8", 
        "connections": {
            "C,24,27,2": true
        }   
    },
    // Badge House
    "C,24,29,0" : {
        "name": "BLACKTHORN CITY - INSIDE - Badge House - 5,A",
        "to" : "C,24,28,1",
        "level": "8", 
    },
/* DRAGONS DEN - INT */
    "C,24,28,0" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Top Cave - 14,5",
        "to" : "C,24,27,3",
        "level": "8",
        "connections": {
            "C,24,28,1": "JOHTO_WHIRLPOOL"
        }  
    },
    "C,24,28,1" : {
        "name": "BLACKTHORN CITY - OUTSIDE - Badge House - 13,1F",
        "to" : "C,24,29,0",
        "level": "8", 
        "connections": {
            "C,24,28,0": "JOHTO_WHIRLPOOL"
        }  
    },
/* ROUTE 45 - EXT */
    "C,0,32,0" : {
        "name": "ROUTE 45 - OUTSIDE - Dark Cave Enterance - 2,5",
        "to" : "C,24,8,1",
        "level": "8", 
        "connections": {
            "C,0,5,2": true,
            "C,0,33,0": true
        }   
    },
/* ROUTE 41 - EXT */
    "C,0,28,0" : {
        "name": "ROUTE 41 - OUTSIDE - Top Left Island - C,11",
        "to" : "C,24,31,0",
        "level": "8",
        "connections": {
            "C,0,2,1": "JOHTO_WHIRLPOOL"
        }  
    },
    "C,0,28,1" : {
        "name": "ROUTE 41 - OUTSIDE - Top Right Island - 24,13",
        "to" : "C,24,30,0",
        "level": "8",
        "connections": {
            "C,0,2,1": "JOHTO_WHIRLPOOL"
        }  
    },
    "C,0,28,2" : {
        "name": "ROUTE 41 - OUTSIDE - Bottom Left Island - C,25",
        "to" : "C,24,33,0",
        "level": "8",
        "connections": {
            "C,0,2,1": "JOHTO_WHIRLPOOL"
        }  
    },
    "C,0,28,3" : {
        "name": "ROUTE 41 - OUTSIDE - Bottom Right Island - 24,2D",
        "to" : "C,24,32,0",
        "level": "8",
        "connections": {
            "C,0,2,1": "JOHTO_WHIRLPOOL"
        }  
    },
/* WHIRL ISLANDS */
    // F1 (Top Left Cave)
    "C,24,31,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F1 Top Side Bottom Door - 5,7",
        "to" : "C,0,28,0",
        "level": "8", 
        "connections": {
            "C,24,31,1": true
        }   
    },
    "C,24,31,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F1 Top Side Top Ladder - 5,3",
        "to" : "C,24,34,1",
        "level": "8", 
        "connections": {
            "C,24,31,0": true
        }   
    },
    "C,24,31,2" : {
        "name": "WHIRL ISLANDS - INSIDE - F1 Bottom Side Right Ladder - 7,11",
        "to" : "C,24,36,1",
        "level": "8", 
        "connections": {
            "C,24,31,3": true
        }   
    },
    "C,24,31,3" : {
        "name": "WHIRL ISLANDS - INSIDE - F1 Bottom Side Left Ladder - 3,11",
        "to" : "C,24,33,3",
        "level": "8", 
        "connections": {
            "C,24,31,2": true
        }   
    },
    // F2 (Top Right Cave)
    "C,24,30,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F2 Bottom Left Enterance - 3,D",
        "to" : "C,0,28,1",
        "level": "8", 
        "connections": {
            "C,24,30,1": true,
            "C,24,30,2": true
        }   
    },
    "C,24,30,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F2 Bottom Right Ladder - D,B",
        "to" : "C,24,34,2",
        "level": "8"
    },
    "C,24,30,2" : {
        "name": "WHIRL ISLANDS - INSIDE - F2 Top Right Ladder - 11,3",
        "to" : "C,24,34,0",
        "level": "8"
    },
    // F3 (Bottom Right Cave)
    "C,24,32,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F3 Bottom Enterance - 7,F",
        "to" : "C,0,28,3",
        "level": "8", 
        "connections": {
            "C,24,32,1": true
        }   
    },
    "C,24,32,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F3 Top Ladder - 24,2D",
        "to" : "C,24,34,6",
        "level": "8", 
        "connections": {
            "C,24,32,0": true
        }   
    },
    // F4 (Bottom Left Cave)
    "C,24,33,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F4 Top Side Cave Enterance - 5,7",
        "to" : "C,0,28,2",
        "level": "8", 
        "connections": {
            "C,24,33,1": true,
            "C,24,33,2": "JOHTO_SURF"
        }   
    },
    "C,24,33,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F4 Top Side Top Left - 3,3",
        "to" : "C,24,34,7",
        "level": "8", 
        "connections": {
            "C,24,33,0": true
        }   
    },
    "C,24,33,2" : {
        "name": "WHIRL ISLANDS - INSIDE - F4 Top Side Top Right - 11,3",
        "to" : "C,24,34,8",
        "level": "8",
        "connections": {
            "C,24,33,0": "JOHTO_SURF"
        }   
    },
    "C,24,33,3" : {
        "name": "WHIRL ISLANDS - INSIDE - F4 Bottom Side Left - 3,11",
        "to" : "C,24,31,3",
        "level": "8",
        "connections": {
            "C,24,33,4": "JOHTO_SURF"
        }   
    },
    "C,24,33,4" : {
        "name": "WHIRL ISLANDS - INSIDE - F4 Bottom Side Right - 11,11",
        "to" : "C,24,35,3",
        "level": "8",
        "connections": {
            "C,24,33,3": "JOHTO_SURF"
        }   
    },
    // F5
    "C,24,34,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Top Right Ladder - 23,3",
        "to" : "C,24,30,2",
        "level": "8", 
        "connections": {
            "C,24,34,4": true
        }   
    },
    "C,24,34,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Top Right Ladder - 23,3",
        "to" : "C,24,31,1",
        "level": "8", 
        "connections": {
            "C,24,34,5": true
        }   
    },
    "C,24,34,2" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Top Center Ladder - D,1C",
        "to" : "C,24,30,1",
        "level": "8", 
        "connections": {
            "C,24,34,1": true,
            "C,24,34,7": true
        }   
    },
    "C,24,34,3" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Center Cave - 11,15",
        "to" : "C,24,36,0",
        "level": "8", 
        "connections": {
            "C,24,34,7": true,
        }   
    },
    "C,24,34,4" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Center Left Ladder - 19,15",
        "to" : "C,24,35,0",
        "level": "8", 
        "connections": {
            "C,24,34,0": true,
        }   
    },
    "C,24,34,5" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Bottom Left Ladder Down - D,1B",
        "to" : "C,24,35,1",
        "level": "8", 
        "connections": {
            "C,24,34,1": true,
        }   
    },
    "C,24,34,6" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Bottom Right Ladder Down - 1F,1D",
        "to" : "C,24,32,1",
        "level": "8", 
        "connections": {
            "C,24,34,8": true,
        }   
    },
    "C,24,34,7" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Bottom Left Ladder Up - 9,1F",
        "to" : "C,24,33,1",
        "level": "8",
    },
    "C,24,34,8" : {
        "name": "WHIRL ISLANDS - INSIDE - F5 Center Bottom Ladder Up - 17,1F",
        "to" : "C,24,33,2",
        "level": "8", 
        "connections": {
            "C,24,34,6": true,
        }   
    },
    // F6
    "C,24,36,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F6 Top - 7,5",
        "to" : "C,24,34,3",
        "level": "8", 
        "connections": {
            "C,24,36,1": true
        }   
    },
    "C,24,36,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F6 Bottom - 3,D",
        "to" : "C,24,31,2",
        "level": "8", 
        "connections": {
            "C,24,36,0": true
        }   
    },
    // F7
    "C,24,35,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F7 Top Top Ladder - B,5",
        "to" : "C,24,34,4",
        "level": "8",  
        "connections": {
            "C,24,35,3": "JOHTO_SURF",
        }   
    },
    "C,24,35,1" : {
        "name": "WHIRL ISLANDS - INSIDE - F7 Top Bottom Ladder - 7,B",
        "to" : "C,24,34,5",
        "level": "8",   
    },
    "C,24,35,2" : {
        "name": "WHIRL ISLANDS - INSIDE - F7 Bottom Top Ladder - 7,19",
        "to" : "C,24,67,0",
        "level": "8",   
        "connections": {
            "C,24,35,3": "JOHTO_SURF",
        }   
    },
    "C,24,35,3" : {
        "name": "WHIRL ISLANDS - INSIDE - F7 Bottom Bottom Ladder - D,1F",
        "to" : "C,24,33,4",
        "level": "8",   
        "connections": {
            "C,24,35,0": "JOHTO_WATERFALL",
            "C,24,35,2": "JOHTO_SURF",
        }   
    },
    // F8
    "C,24,67,0" : {
        "name": "WHIRL ISLANDS - INSIDE - F8 Enterance - A,D",
        "to" : "C,24,35,2",
        "level": "8",   
    },
/* ROUTE 27 - EXT */
    "C,0,35,0" : {
        "name": "ROUTE 27 - OUTSIDE - Tohjo Enterance Left - 1A,9",
        "to" : "C,24,0,0",
        "level": "9",
        "connections": {
            "C,0,9,0": "JOHTO_SURF"
        }
    },
    "C,0,35,1" : {
        "name": "ROUTE 27 - OUTSIDE - Tohjo Enterance Right - 24,9",
        "to" : "C,24,0,1",
        "level": "9", 
        "connections": {
            "C,0,35,1": true,
            "C,0,35,2": true,
            "C,0,34,2": "JOHTO_SURF"
        }   
    },
    "C,0,35,2" : {
        "name": "ROUTE 27 - OUTSIDE - House - 21,B",
        "to" : "C,6,6,0",
        "level": "9", 
        "connections": {
            "C,0,35,1": true,
            "C,0,35,0": true
        }   
    },
/* TOHJO FALLS - INT */
    "C,24,0,0" : {
        "name": "ROUTE 27 - INSIDE - Left - D,11",
        "to" : "C,0,35,0",
        "level": "9",
        "connections": {
            "C,24,0,1": "JOHTO_WATERFALL"
        }   
    },
    "C,24,0,1" : {
        "name": "ROUTE 27 - INSIDE - Right - 19,11",
        "to" : "C,0,35,1",
        "level": "9",
        "connections": {
            "C,24,0,0": "JOHTO_WATERFALL"
        } 
    },
/* ROUTE 26 - EXT */
    "C,0,34,0" : {
        "name": "ROUTE 26 - OUTSIDE - Route 26 Top Connector - 8,5",
        "to" : "C,32,0,0",
        "level": "9", 
        "connections": {
            "C,0,34,1": true,
            "C,0,34,2": true
        }   
    },
    "C,0,34,1" : {
        "name": "ROUTE 26 - OUTSIDE - Route 26 Top House - F,39",
        "to" : "C,32,2,0",
        "level": "9", 
        "connections": {
            "C,0,34,0": true
        }   
    },
    "C,0,34,2" : {
        "name": "ROUTE 26 - OUTSIDE - Route 26 Bottom House - 5,47",
        "to" : "C,32,1,0",
        "level": "9", 
        "connections": {
            "C,0,34,1": true,
            "C,0,35,1": "JOHTO_SURF"
        }   
    },
/* ROUTE 26 - INT */
    "C,32,2,0" : {
        "name": "ROUTE 26 - INSIDE - Top House - 3,7",
        "to" : "C,0,34,1",
        "level": "9"
    },
    "C,32,1,0" : {
        "name": "ROUTE 26 - INSIDE - Bottom House - 3,7",
        "to" : "C,0,34,2",
        "level": "9"
    },
    "C,32,0,0" : {
        "name": "ROUTE 26 - INSIDE - Route Connector - A,12",
        "to" : "C,0,34,0",
        "level": "9"
    },
    "C,32,0,1" : {
        "name": "ROUTE 26 - INSIDE - Route Connector - A,1",
        "to" : "C,24,43,0",
        "level": "9",
        "connections": {
            "C,32,0,0": true
        }  
    },
/* VICTORY ROAD */
    // F1
    "C,24,43,0" : {
        "name": "VICTORY ROAD - INSIDE - F1 Bottom - B,15",
        "to" : "C,32,0,1",
        "level": "9",
        "connections": {
            "C,24,43,1": true
        }  
    },
    "C,24,43,1" : {
        "name": "VICTORY ROAD - INSIDE - F1 Top - 3,3",
        "to" : "C,24,44,3",
        "level": "9",
        "connections": {
            "C,24,43,0": true
        }  
    },
    // F2
    "C,24,44,0" : {
        "name": "VICTORY ROAD - INSIDE - F2 Top Right Drop - 2,3",
        "to" : "C,24,45,1",
        "level": "9",
        "ignore": true,
        "connections": {
            "C,24,44,1": true,
            "C,24,44,3": true
        }  
    },
    "C,24,44,1" : {
        "name": "VICTORY ROAD - INSIDE - F2 Top Center Ladder - F,7",
        "to" : "C,24,45,2",
        "level": "9",
        "connections": {
            "C,24,44,3": true
        }  
    },
    "C,24,44,2" : {
        "name": "VICTORY ROAD - INSIDE - F2 Top Right Ladder - 13,9",
        "to" : "C,24,45,3",
        "level": "9",
        "connections": {
            "C,24,44,1": true,
            "C,24,44,3": true,
        }  
    },
    "C,24,44,3" : {
        "name": "VICTORY ROAD - INSIDE - F2 Center Left Ladder - 3,B",
        "to" : "C,24,43,1",
        "level": "9",
        "connections": {
            "C,24,44,1": true,
        }  
    },
    // F3
    "C,24,45,0" : {
        "name": "VICTORY ROAD - INSIDE - F3 Top Exit - F,1",
        "to" : "C,0,8,3",
        "level": "9",
        "connections": {
            "C,24,45,1": true,
            "C,24,45,2": true,
            "C,24,45,3": true,
        }  
    },
    "C,24,45,1" : {
        "name": "VICTORY ROAD - INSIDE - F3 Left Drop - 2,7",
        "to" : "C,24,44,0",
        "level": "9",
        "connections": {
            "C,24,45,0": true
        }  
    },
    "C,24,45,2" : {
        "name": "VICTORY ROAD - INSIDE - F3 Center Ladder - F,D",
        "to" : "C,24,44,1",
        "level": "9",
        "connections": {
            "C,24,45,0": true
        }  
    },
    "C,24,45,3" : {
        "name": "VICTORY ROAD - INSIDE - F3 Bottom Right Ladder - 13,F",
        "to" : "C,24,44,2",
        "level": "9",
    },
/* INDIGO PLATEAU - EXT */
    "C,0,8,3" : {
        "name": "INDIGO PLATEAU - OUTSIDE - Victory Road Enterance - D,19",
        "to" : "C,24,45,0",
        "level": "9",
        "connections": {
            "C,0,8,0": true
        }  
    },
    "C,0,8,0" : {
        "name": "INDIGO PLATEAU - OUTSIDE - League Enterance - D,6",
        "to" : "C,16,10,0",
        "level": "9",
        "connections": {
            "C,0,8,3": true
        }  
    },
/* INDIGO PLATEAU - INT */ 
    "C,16,10,0" : {
        "name": "INDIGO PLATEAU - INSIDE - League Main Door - 6,12",
        "to" : "C,0,8,0",
        "level": "9",
        "connections": {
            "C,16,10,2": true,
            "C,16,10,1": true,
            "C,0,8,0": true
        }  
    },
    "C,16,10,1" : {
        "name": "INDIGO PLATEAU - INSIDE - League E4 Enterance - 14,1",
        "to" : "C,16,0,0",
        "level": "9",
        "connections": {
            "C,16,10,2": true,
            "C,16,10,0": true
        }  
    },
    "C,16,10,2" : {
        "name": "INDIGO PLATEAU - INSIDE - Stairs - 1,10",
        "to" : "C,16,14,0",
        "level": "9",
        "connections": {
            "C,16,10,0": true,
            "C,16,10,1": true
        }  
    },
/* E4 */
    // E4 1
    "C,16,0,0" : {
        "name": "E4 - INSIDE - E4 1 Bottom Door - 6,14",
        "to" : "C,16,10,1",
        "level": "9"
    },
    "C,16,0,1" : {
        "name": "E4 - INSIDE - E4 1 Top Door - 6,2",
        "to" : "C,16,1,0",
        "level": "9"
    },
    // E4 2
    "C,16,1,0" : {
        "name": "E4 - INSIDE - E4 2 Bottom Door - 6,14",
        "to" : "C,16,0,1",
        "level": "9"
    },
    "C,16,1,1" : {
        "name": "E4 - INSIDE - E4 2 Top Door - 6,2",
        "to" : "C,16,2,0",
        "level": "9"
    },
    // E4 3
    "C,16,2,0" : {
        "name": "E4 - INSIDE - E4 3 Bottom Door - 6,14",
        "to" : "C,16,1,1",
        "level": "9"
    },
    "C,16,2,1" : {
        "name": "E4 - INSIDE - E4 3 Top Door - 6,2",
        "to" : "C,16,3,0",
        "level": "9"
    },
    // E4 4
    "C,16,3,0" : {
        "name": "E4 - INSIDE - E4 4 Bottom Door - 6,14",
        "to" : "C,16,2,1",
        "level": "9"
    },
    "C,16,3,1" : {
        "name": "E4 - INSIDE - E4 4 Top Door - 6,2",
        "to" : "C,16,4,0",
        "level": "9"
    },
    // E4 Champ
    "C,16,4,0" : {
        "name": "E4 - INSIDE - E4 Champ Bottom Door - 6,1F",
        "to" : "C,16,3,1",
        "level": "9"
    },
}