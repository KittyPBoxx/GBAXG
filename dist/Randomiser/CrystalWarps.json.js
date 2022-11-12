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
    "C,0,9,3" : {
        "name": "NEW BARK TOWN - OUTSIDE - Right (Elms house) - C,D",
        "level" : "1",
        "to" : "C,1,3,0",
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
        "to" : "C,24,3,2",
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
    "C,3,33,0" : {
        "name": "ROUTE 46 - OUTSIDE - Dark Cave Enterance - 10,7",
        "to" : "C,24,7,1",
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
            "C,0,10,2": true
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
    "C,1,1,0" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (Route 46 exit) - 28,26",
        "to" : "C,3,46,1"
    },
    "C,1,1,1" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (further into cave) - 15,6",
        "to" : "C,1,3,0"
    },
    "C,24,7,0" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (Route 31 exit) - 7,14",
        "level" : "1",
        "to" : "C,0,18,0"
    },
/* ROUTE 36 - EXT */
    "C,0,23,0" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 2E,D",
        "level" : "1",
        "to" : "C,24,74,0",
        "grouped": ["C,0,23,1"],
        "groupMain" : true,
        "connections": {
            "C,0,0,3": true
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
        "to" : "C,24,96,1",
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
        "connections": {
            "C,24,86,5": true
        }
    },
    "C,24,86,7" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Center - 6,1B",
        "to" : "C,24,12,1",
        "connections": {
            "C,24,86,8": true,
            "C,24,86,9": true,
        }
    },
    "C,24,86,9" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Right (aradactyle) - 10,21",
        "to" : "C,24,93,0"
    },
    "C,24,86,5" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Center Center - 6,13",
        "to" : "C,24,12,0"
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
        }   
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
        "grouped": ["C,24,87,1"],
    },
    "C,24,87,3" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Center Left Drop - 3,10",
        "to" : "C,X,X,2",
        "grouped": ["C,24,87,4"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,4" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Center Left Drop - 4,10",
        "to" : "C,X,X,2",
        "grouped": ["C,24,87,3"],
    },
    "C,24,87,5" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Right Drop - F,18",
        "to" : "C,X,X,3",
        "grouped": ["C,24,87,6"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,6" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Right Drop - 10,18",
        "to" : "C,X,X,3",
        "grouped": ["C,24,87,5"],
    },
    "C,24,87,7" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Left Drop - 3,16",
        "to" : "C,X,X,4",
        "grouped": ["C,24,87,8"],
        "groupMain" : true,
        "connections": {
            "C,24,87,0": true,
        }   
    },
    "C,24,87,8" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Bottom Left Drop - 4,16",
        "to" : "C,X,X,4",
        "grouped": ["C,24,87,7"],
    },
    // Left Center Cave
    // Left Bottom Cave
    // Bottom Right Cave
    // Hidden Rooms
/* ROUTE 32 - EXT */
    "C,0,19,1" : {
        "name": "ROUTE 32 - OUTSIDE - PkCenter - D,4A",
        "to" : "C,2,90,0",
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
    "C,2,20,0" : {
        "name": "UNION CAVE - INSIDE - F1 Top Enterance - 14,4",
        "to" : "C,3,49,2",
        "level" : "2",
        "connections": {
            "C,2,20,2": true,
            "C,2,20,1": true,
            "C,2,20,3": false
        }   
    },
    "C,2,20,1" : {
        "name": "UNION CAVE - INSIDE - F1 Bottom Enterance - 14,20",
        "to" : "C,3,52,0",
        "level" : "2",
        "connections": {
            "C,2,20,0": true
        }   
    },
    "C,2,20,2" : {
        "name": "UNION CAVE - INSIDE - F1 Middle Lader - 8,14",
        "to" : "C,2,19,2",
        "level" : "2",
        "connections": {
            "C,2,20,0": true
        }   
    },
    "C,2,20,3" : {
        "name": "UNION CAVE - INSIDE - Bottom Lader - 6, 22",
        "to" : "C,2,19,4",
        "connections": {
            "C,2,20,0": false // surf locked
        }   
    },
//F2
    "C,2,19,0" : {
        "name": "UNION CAVE - INSIDE - F2 Bottom Right Lader - 11,2A",
        "to" : "C,1,86,1",
        "connections": {
            "C,2,19,4": false // surf locked
        }   
    },
    "C,2,19,1" : {
        "name": "UNION CAVE - INSIDE - F2 Top Enterance - 3,3",
        "to" : "C,2,14,9",
        "connections": {
            "C,2,19,3": true,
            "C,2,19,2": false // surf locked
        }   
    },
    "C,2,19,2" : {
        "name": "UNION CAVE - INSIDE - F2 Middle Ladder - 7,13",
        "to" : "C,2,20,2",
        "level": "2",
        "connections": {
            "C,2,19,3": false,// surf locked
            "C,2,19,1": false // surf locked
        }   
    },
    "C,2,19,3" : {
        "name": "UNION CAVE - INSIDE - F2 Lower Enterance - 3,B",
        "to" : "C,2,14,7",
        "connections": {
            "C,2,19,1": true
        }   
    },
    "C,2,19,4" : {
        "name": "UNION CAVE - INSIDE - F2 Bottom Left Ladder - 2,2C",
        "to" : "C,2,20,3",
        "connections": {
            "C,2,19,0": false // surf locked
        }   
    },
// F3
    "C,1,86,1" : {
        "name": "UNION CAVE - INSIDE - F3 Ladder - 5,3",
        "to" : "C,2,19,0"
    },
/* ROUTE 33 - EXT */
    "C,3,52,0" : {
        "name": "ROUTE 33 - OUTSIDE - Union Cave Enterance - B,9",
        "to" : "C,2,20,1",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
/* AZALEA TOWN - EXT */ 
    "C,3,16,0" : {
        "name": "AZALEA TOWN - OUTSIDE - Slowpoke Well Enterance - 21,9",
        "to" : "C,2,101,0",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
    "C,3,16,1" : {
        "name": "AZALEA TOWN - OUTSIDE - PkCenter - 11,B",
        "to" : "C,34,1,0",
        "level": "2",
        "connections": {
            "C,3,16,0" : true,
            "C,3,16,2" : true,
            "C,3,16,3" : true,
            "C,3,16,4" : true,
            "C,3,16,5" : true,
            "C,3,16,6" : true,
        }   
    },
    "C,3,16,2" : {
        "name": "AZALEA TOWN - OUTSIDE - Bottom Right - 17,F",
        "to" : "C,36,3,0",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
    "C,3,16,3" : {
        "name": "AZALEA TOWN - OUTSIDE - Mart - 17,7",
        "to" : "C,37,4,0",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
    "C,3,16,4" : {
        "name": "AZALEA TOWN - OUTSIDE - Top Left - B,7",
        "to" : "C,1,102,0",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
    "C,3,16,5" : {
        "name": "AZALEA TOWN - OUTSIDE - Route Connector - 4,C",
        "to" : "C,1,120,2",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
    "C,3,16,6" : {
        "name": "AZALEA TOWN - OUTSIDE - GYM - D,11",
        "to" : "C,1,124,0",
        "level": "2",
        "connections": {
            "C,3,16,1": true
        }   
    },
/* AZALEA TOWN - INT */ 
    "C,34,1,0" : {
        "name": "AZALEA TOWN - INSIDE - PkCenter - 7,8",
        "to" : "C,3,16,1",
        "level": "2"
    },
    "C,37,4,0" : {
        "name": "AZALEA TOWN - INSIDE - Mart - 4,7",
        "to" : "C,3,16,3",
        "level": "2"
    },
    "C,1,102,0" : {
        "name": "AZALEA TOWN - INSIDE - Top Left - A,F",
        "to" : "C,3,16,4",
        "level": "2"
    },
    "C,36,3,0" : {
        "name": "AZALEA TOWN - INSIDE - Bottom Right - 4,8",
        "to" : "C,3,16,2",
        "level": "2"
    },
    "C,1,120,0" : {
        "name": "AZALEA TOWN - INSIDE - Route Connector Left - 7,C",
        "to" : "C,1,0,0",
        "connections": {
            "C,1,120,2": true
        }   
    },
    "C,1,120,0" : {
        "name": "AZALEA TOWN - INSIDE - Route Connector Right - 13,C",
        "to" : "C,3,16,5",
        "connections": {
            "C,1,120,0": true
        }   
    },
    "C,1,124,0" : {
        "name": "AZALEA TOWN - INSIDE - GYM - B,12",
        "to" : "C,3,16,6",
        "level": "2"
    },
/* SLOWPOKE WELL */ 
// F1
    "C,2,101,0" : {
        "name": "SLOWPOKE WELL - INSIDE - F1 Enterance Ladder - 12,10",
        "to" : "C,3,16,0",
        "level": "2",
        "connections": {
            "C,2,101,1": false // Surf locked
        }   
    },
    "C,2,101,1" : {
        "name": "SLOWPOKE WELL - INSIDE - F1 Left Ladder - 8,C",
        "to" : "C,2,54,1",
        "connections": {
            "C,2,101,0": false // Surf locked
        }   
    },
// F2    
    "C,2,54,1" : {
        "name": "SLOWPOKE WELL - INSIDE - F2 Ladder - 11,10",
        "to" : "C,2,101,1"
    },
/* ILEX FOREST */
    "C,1,0,0" : {
        "name": "ILEX FOREST - OUTSIDE - Bottom - B,34",
        "to" : "C,1,120,0",
        "level": "3",
        "connections": {
            "C,1,0,1": true
        }   
    },
    "C,1,0,2" : {
        "name": "ILEX FOREST - OUTSIDE - Top - B,12",
        "to" : "C,1,115,0",
        "level": "3",
        "connections": {
            "C,1,0,0": true
        }   
    },
/* ROUSE 34 - EXT */
    "C,3,53,0" : {
        "name": "ROUTE 34 - OUTSIDE - Route connector - 10,24",
        "to" : "C,1,115,1",
        "level": "3",
        "grouped" : ["C,3,53,3"],
        "groupMain" : true,
        "connections": {
            "C,3,53,2": true,
            "C,3,15,12": true
        }   
    },
    "C,3,53,3" : {
        "name": "ROUTE 34 - OUTSIDE - Route connector - 11,24",
        "to" : "C,1,115,1",
        "level": "3",
        "grouped" : ["C,3,53,0"]
    },
    "C,3,53,1" : {
        "name": "ROUTE 34 - OUTSIDE - Daycare Inside Fence - F,F",
        "to" : "C,5,24,1",
        "level": "3"
    },
    "C,3,53,2" : {
        "name": "ROUTE 34 - OUTSIDE - Daycare Outer Door - D,E",
        "to" : "C,5,24,0",
        "level": "3",
        "connections": {
            "C,3,53,0": true,
            "C,3,15,12": true
        }   
    },
/* ROUSE 34 - INT */
    "C,1,115,0" : {
        "name": "ROUTE 34 - INSIDE - Route connector Bottom - 7,9",
        "to" : "C,1,0,2",
        "level": "3",
        "connections": {
            "C,1,115,1": true
        }   
    },
    "C,1,115,1" : {
        "name": "ROUTE 34 - INSIDE - Route connector Top - 7,1",
        "to" : "C,3,53,0",
        "level": "3",
        "connections": {
            "C,1,115,0": true
        }   
    },
    "C,5,24,0" : {
        "name": "ROUTE 34 - INSIDE - Day Care Left - 1,6",
        "to" : "C,3,53,2",
        "level": "3",
        "connections": {
            "C,5,24,1": true
        }   
    },
    "C,5,24,1" : {
        "name": "ROUTE 34 - INSIDE - Day Care Bottom - 3,7",
        "to" : "C,3,53,1",
        "level": "3",
        "connections": {
            "C,5,24,0": true
        }   
    },
/* GOLDENROD CITY - EXT */
    "C,3,15,0" : {
        "name": "GOLDENROD CITY - OUTSIDE - Underground Top - 9,8",
        "to" : "C,1,94,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,1" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Left - 11,9",
        "to" : "C,8,4,1",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,2" : {
        "name": "GOLDENROD CITY - OUTSIDE - Radio Tower - 6,11",
        "to" : "C,4,36,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,3" : {
        "name": "GOLDENROD CITY - OUTSIDE - Route Connector - 15,4",
        "to" : "C,1,116,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,4" : {
        "name": "GOLDENROD CITY - OUTSIDE - GYM - 1B,9",
        "to" : "C,2,69,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,5" : {
        "name": "GOLDENROD CITY - OUTSIDE - Game Corner - F,17",
        "to" : "C,10,14,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,6" : {
        "name": "GOLDENROD CITY - OUTSIDE - Department Store - 1B,1E",
        "to" : "C,2,36,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,7" : {
        "name": "GOLDENROD CITY - OUTSIDE - Bike Shop - 20,20",
        "to" : "C,7,6,1",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,8" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Right Right - 26,B",
        "to" : "C,35,3,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,9" : {
        "name": "GOLDENROD CITY - OUTSIDE - Top Right - 23,6",
        "to" : "C,2,67,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,10" : {
        "name": "GOLDENROD CITY - OUTSIDE - Train Station - B,F",
        "to" : "C,3,93,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,11" : {
        "name": "GOLDENROD CITY - OUTSIDE - Center Left - 22,17",
        "to" : "C,2,66,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,12" : {
        "name": "GOLDENROD CITY - OUTSIDE - PkCenter - 10,1E",
        "to" : "C,6,16,0",
        "level": "3",
        "connections": {
            "C,3,15,0": true,
            "C,3,15,1": true,
            "C,3,15,2": true,
            "C,3,15,3": true,
            "C,3,15,4": true,
            "C,3,15,5": true,
            "C,3,15,6": true,
            "C,3,15,7": true,
            "C,3,15,8": true,
            "C,3,15,9": true,
            "C,3,15,10": true,
            "C,3,15,11": true,
            "C,3,15,13": true,
            "C,3,15,14": true,
            "C,3,53,2": true,
            "C,3,53,0": true
        }   
    },
    "C,3,15,13" : {
        "name": "GOLDENROD CITY - OUTSIDE - Underground Bottom - C,21",
        "to" : "C,2,63,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
    "C,3,15,14" : {
        "name": "GOLDENROD CITY - OUTSIDE - Left Bottom - 5,1E",
        "to" : "C,35,6,0",
        "level": "3",
        "connections": {
            "C,3,15,12": true
        }   
    },
/* GOLDENROD CITY - INT */ 
    "C,1,94,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Top (Enterance) - D,C",
        "to" : "C,3,15,0",
        "level": "3",
        "connections": {
            "C,1,94,1": true
        }   
    },
    "C,1,94,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Top (Stairs) - E,8",
        "to" : "C,2,95,1",
        "level": "3",
        "connections": {
            "C,1,94,0": true
        }   
    },
    "C,2,63,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Bottom (Enterance) - D,C",
        "to" : "C,3,15,13",
        "level": "3",
        "connections": {
            "C,2,63,1": true
        }   
    },
    "C,2,63,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground Bottom (Stairs) - E,8",
        "to" : "C,2,95,0",
        "level": "3",
        "connections": {
            "C,2,63,0": true
        }   
    },
    "C,8,4,1" : {
        "name": "GOLDENROD CITY - INSIDE - Top Left - 4,8",
        "to" : "C,3,15,1",
        "level": "3"
    },
    "C,2,69,0" : {
        "name": "GOLDENROD CITY - INSIDE - GYM - 9,16",
        "to" : "C,3,15,4",
        "level": "3"
    },
    "C,10,14,0" : {
        "name": "GOLDENROD CITY - INSIDE - Game Corner - 2,C",
        "to" : "C,3,15,5",
        "level": "3"
    },
    "C,7,6,0" : {
        "name": "GOLDENROD CITY - INSIDE - Bike Shop - 5,8",
        "to" : "C,3,15,7",
        "level": "3"
    },
    "C,35,3,0" : {
        "name": "GOLDENROD CITY - INSIDE - Top Left Left - 4,8",
        "to" : "C,3,15,8",
        "level": "3"
    },
    "C,2,67,0" : {
        "name": "GOLDENROD CITY - INSIDE - Top Left - A,C",
        "to" : "C,3,15,9",
        "level": "3"
    },
    "C,3,93,0" : {
        "name": "GOLDENROD CITY - INSIDE - Train Station - 4,8",
        "to" : "C,3,15,10",
        "level": "3"
    },
    "C,2,66,0" : {
        "name": "GOLDENROD CITY - INSIDE - Center Right - 4,",
        "to" : "C,3,15,11",
        "level": "3"
    },
    "C,6,16,0" : {
        "name": "GOLDENROD CITY - INSIDE - PkCenter - 7,8",
        "to" : "C,3,15,12",
        "level": "3"
    },
    "C,35,6,0" : {
        "name": "GOLDENROD CITY - INSIDE - Left Bottom - 4,8",
        "to" : "C,3,15,14",
        "level": "3"
    },
// Underground F1
    "C,2,95,0" : {
        "name": "GOLDENROD CITY - INSIDE - Underground F1 Bottom - 3,21",
        "to" : "C,2,63,1",
        "level": "3",
        "connections": {
            "C,2,95,1": true
        }   
    },
    "C,2,95,1" : {
        "name": "GOLDENROD CITY - INSIDE - Underground F1 Top - 2,3",
        "to" : "C,1,94,1",
        "level": "3",
        "connections": {
            "C,2,95,0": true
        }   
    },
    "C,2,95,2" : {
        "name": "GOLDENROD CITY - INSIDE - Rocket Base Underground Enterance - D,A",
        "to" : "C,2,84,0",
        "connections": {
            "C,2,95,0": true,
            "C,2,95,1": true
        }   
    },
/* ROCKET BASE */
/* RADIO TOWER */
// F1
    "C,4,36,0" : {
        "name": "RADIO TOWER - INSIDE - F1 Door - 9,A",
        "to" : "C,3,15,2",
        "level": "3",
        "connections": {
            "C,4,36,1": true
        }   
    },
    "C,4,36,1" : {
        "name": "RADIO TOWER - INSIDE - F1 Stairs - 16,5",
        "to" : "C,4,41,1",
        "level": "3",
        "connections": {
            "C,4,36,0": true
        }   
    },
// F2
    "C,4,41,0" : {
        "name": "RADIO TOWER - INSIDE - F2 Left Stairs - 7,5",
        "to" : "C,4,92,2"
    },
    "C,4,41,1" : {
        "name": "RADIO TOWER - INSIDE - F2 Right Stairs - 17,5",
        "to" : "C,4,36,1",
        "level": "3"
    },
// F3    
    "C,4,92,0" : {
        "name": "RADIO TOWER - INSIDE - F3 Left Stairs - 9,5",
        "to" : "C,4,41,0",
        "connections": {
            "C,4,92,2": true
        }   
    },
    "C,4,92,1" : {
        "name": "RADIO TOWER - INSIDE - F3 Left Stairs - 9,5",
        "to" : "C,2,82,2"
    },
    "C,4,92,2" : {
        "name": "RADIO TOWER - INSIDE - F3 Middle Stairs - 10,5",
        "to" : "C,2,82,1",
        "connections": {
            "C,4,92,0": true
        }   
    },
// F4
    "C,2,82,0" : {
        "name": "RADIO TOWER - INSIDE - F4 Left Side Left Stairs - 7,5",
        "to" : "C,2,83,0",
        "connections": {
            "C,2,82,1": true
        }   
    },
    "C,2,82,1" : {
        "name": "RADIO TOWER - INSIDE - F4 Left Side Right Stairs - F,5",
        "to" : "C,4,92,0",
        "connections": {
            "C,2,82,0": true
        }   
    },
    "C,2,82,2" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Left Stairs - 14,5",
        "to" : "C,4,92,1",
        "connections": {
            "C,2,82,3": true
        }   
    },
    "C,2,82,3" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Right Stairs - 16,5",
        "to" : "C,2,83,1",
        "connections": {
            "C,2,82,2": true
        }   
    },
// F5
    "C,2,83,0" : {
        "name": "RADIO TOWER- INSIDE - F4 Left Side Stairs - 9,5",
        "to" : "C,2,82,0"
    },
    "C,2,83,1" : {
        "name": "RADIO TOWER - INSIDE - F4 Right Side Stairs - 15,5",
        "to" : "C,2,82,3"
    },
/* GOLDENROD DEPARTMENT STORE */
//F1
    "C,2,36,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F1 Enterance - 10,B",
        "to" : "C,3,15,6",
        "level": "3",
        "connections": {
            "C,2,36,1": true,
            "C,2,37,1": true,
            "C,2,38,1": true,
            "C,2,39,1": true,
            "C,2,40,1": true,
            "C,2,41,1": true
        }   
    },
    "C,2,36,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F1 Stairs - 16,5",
        "to" : "C,2,37,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true
        }   
    },
//F2
    "C,2,37,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F2 Stairs Right - 18,5",
        "to" : "C,2,36,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,37,2": true
        }   
    },
    "C,2,37,2" : {
        "name": "GOLDENROD DEPT - INSIDE - F2 Stairs Left - 11,5",
        "to" : "C,2,38,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,37,1": true
        }   
    },
//F3
    "C,2,38,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F3 Stairs Left - 16,5",
        "to" : "C,2,37,2",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,38,0": true
        }   
    },
    "C,2,38,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F3 Stairs Right - 18,5",
        "to" : "C,2,39,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,38,1": true
        }   
    },
//F4
    "C,2,39,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F4 Stairs Right - 18,5",
        "to" : "C,2,38,0",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,39,2": true
        }   
    },
    "C,2,39,2" : {
        "name": "GOLDENROD DEPT - INSIDE - F4 Stairs Left - 11,5",
        "to" : "C,2,40,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,39,1": true
        }   
    },
//F5
    "C,2,40,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F5 Stairs Left - 16,5",
        "to" : "C,2,39,2",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,40,0": true
        }   
    },
    "C,2,40,0" : {
        "name": "GOLDENROD DEPT - INSIDE - F5 Stairs Right - 18,5",
        "to" : "C,2,41,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,40,1": true
        }   
    },
//F6
    "C,2,41,1" : {
        "name": "GOLDENROD DEPT - INSIDE - F6 Stairs Right - 18,5",
        "to" : "C,2,40,0",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,41,2": true
        }   
    },
    "C,2,41,2" : {
        "name": "GOLDENROD DEPT - INSIDE - F6 Stairs Left - 11,5",
        "to" : "C,2,42,1",
        "level": "3",
        "connections": {
            "C,2,36,0": true,
            "C,2,41,1": true
        }   
    },
// ROOF
    "C,2,42,1" : {
        "name": "GOLDENROD DEPT - INSIDE - Roof Stairs - 16,5",
        "to" : "C,2,41,2",
        "level": "3"
    },

}