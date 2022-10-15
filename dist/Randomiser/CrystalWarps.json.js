var CRYSTAL_WARPS = 
{
/* NEW BARK - EXT */
    "C,3,0,0" : {
        "name": "NEW BARK TOWN - OUTSIDE - Left - 3,C",
        "level" : "1",
        "to" : "C,5,26,0",
        "connections": {
            "C,3,0,1": true
        }
    },
    "C,3,0,1" : {
        // Player House
        "name": "NEW BARK TOWN - OUTSIDE - Player House - E,6",
        "level" : "1",
        "to" : "C,4,0,0",
        "connections": {
            "C,3,0,0": true,
            "C,3,0,2": true,
            "C,3,0,3": true,
            "C,3,65,2": true,
            "C,3,45,0": true,
        }
    },
    "C,3,0,2" : {
        // ELM LAB
        "name": "NEW BARK TOWN - OUTSIDE - Elms Lab - 7,4",
        "level" : "1",
        "to" : "C,4,3,2",
        "connections": {
            "C,3,0,1": true
        }
    },
    "C,3,0,3" : {
        "name": "NEW BARK TOWN - OUTSIDE - Right (Elms house) - C,D",
        "level" : "1",
        "to" : "C,5,27,0",
        "connections": {
            "C,3,0,1": true
        }
    },
/* NEW BARK - INT */
    "C,5,26,0" : {
        "name": "NEW BARK TOWN - INSIDE - Left - 4,8",
        "level" : "1",
        "to" : "C,3,0,0",
    },
    "C,4,0,0" : {
        // Player house
        "name": "NEW BARK TOWN - INSIDE - Player House - 9,8",
        "level" : "1",
        "to" : "C,3,0,1",
        "connections": {
            "C,4,0,1": true
        }
    },
    "C,4,0,1" : {
        // Player house
        "name": "NEW BARK TOWN - INSIDE - Player House (stairs) - A,2",
        "level" : "1",
        "to" : "C,4,1,0",
        "connections": {
            "C,4,0,0": true
        }
    },
    "C,4,1,0" : {
        // Player room
        "name": "NEW BARK TOWN - INSIDE - Player Room - 9,2",
        "level" : "1",
        "to" : "C,4,0,1"
    },
    "C,4,3,2" : {
        "name": "NEW BARK TOWN - INSIDE - Elm Lab - E,14",
        "level" : "1",
        "to" : "C,3,0,2"
    },
    "C,5,27,0" : {
        "name": "NEW BARK TOWN - INSIDE - Right (Elm House) - 4,8",
        "level" : "1",
        "to" : "C,3,0,3"
    },
/* CHERRY GROVE - EXT */
    "C,3,65,0" : {
        // MART
        "name": "CHERRYGROVE CITY - OUTSIDE - Mart - 1C,5",
        "level" : "1",
        "to" : "C,6,3,1",
        "connections": {
            "C,3,65,2": true
        }
    },
    "C,3,65,1" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Left - 16,A",
        "level" : "1",
        "to" : "C,2,100,0",
        "connections": {
            "C,3,65,2": true
        }
    },
    "C,3,65,2" : {
        // PK
        "name": "CHERRYGROVE CITY - OUTSIDE - PkCentre - 22,5",
        "level" : "1",
        "to" : "C,33,2,0",
        "connections": {
            "C,3,0,1": true,
            "C,3,65,0": true,
            "C,3,65,1": true,
            "C,3,65,3": true,
            "C,3,65,4": true,
            "C,3,51,0": true,
            "C,3,51,1": true,
            "C,3,45,0": true,
            "C,3,47,0": true,
            "C,3,47,1": true
        }
    },
    "C,3,65,3" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Center (Guide House) - 1E,B",
        "level" : "1",
        "to" : "C,4,91,0",
        "connections": {
            "C,3,65,2": true
        }
    },
    "C,3,65,4" : {
        "name": "CHERRYGROVE CITY - OUTSIDE - Right - 24,D",
        "level" : "1",
        "to" : "C,33,1,0",
        "connections": {
            "C,3,65,2": true
        }
    },
/* CHERRY GROVE - INT */
    "C,6,3,1" : {
        // MART
        "name": "CHERRYGROVE CITY - INSIDE - Mart - 4,7",
        "level" : "1",
        "to" : "C,3,65,0"
    },
    "C,2,100,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Left - 4,8",
        "level" : "1",
        "to" : "C,3,65,1"
    },
    "C,33,2,0" : {
        // PK
        "name": "CHERRYGROVE CITY - INSIDE - PkCentre - 7,8",
        "level" : "1",
        "to" : "C,3,65,2"
    },
    "C,4,91,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Centre (Guide House) - 4,8",
        "level" : "1",
        "to" : "C,3,65,3"
    },
    "C,33,1,0" : {
        "name": "CHERRYGROVE CITY - INSIDE - Right - 4,8",
        "level" : "1",
        "to" : "C,3,65,4"
    },
/* VIOLET CITY - EXT */
    "C,3,14,0" : {
        // Rourt connector
        "name": "VIOLET CITY - OUTSIDE - Right Route Connector - 29,1A",
        "level" : "1",
        "to" : "C,5,2,1",
        "connections" : {
            "C,3,14,5": true
        }
    },
    "C,3,14,1" : {
        "name": "VIOLET CITY - OUTSIDE - Academy - 1F,13",
        "level" : "1",
        "to" : "C,35,4,1",
        "connections" : {
            "C,3,14,5": true
        }
    },
    "C,3,14,2" : {
        "name": "VIOLET CITY - OUTSIDE - Left House - 5,11",
        "level" : "1",
        "to" : "C,5,21,0",
        "connections" : {
            "C,3,14,5": true
        }
    },
    "C,3,14,3" : {
        // MART
        "name": "VIOLET CITY - OUTSIDE - Mart - B,13",
        "level" : "1",
        "to" : "C,34,3,0",
        "connections" : {
            "C,3,14,5": true
        }
    },
    "C,3,14,4" : {
        // GYM
        "name": "VIOLET CITY - OUTSIDE - Gym - 14,13",
        "level" : "1",
        "to" : "C,34,0,0",
        "connections" : {
            "C,3,14,5": true,
        }
    },
    "C,3,14,5" : {
        // PK
        "name": "VIOLET CITY - OUTSIDE - PkCenter - 21,1B",
        "level" : "1",
        "to" : "C,36,0,0",
        "connections" : {
            "C,3,14,0": true,
            "C,3,14,1": true,
            "C,3,14,2": true,
            "C,3,14,3": true,
            "C,3,14,4": true,
            "C,3,14,6": true,
            "C,3,14,7": true
        }
    },
    "C,3,14,6" : {
        "name": "VIOLET CITY - OUTSIDE - Bottom Right House (Onix, Belsprout Trade) - 17,1F",
        "level" : "1",
        "to" : "C,5,20,0",
        "connections" : {
            "C,3,14,5": true
        }
    },
    "C,3,14,7" : {
        // SPROUT TOWER
        "name": "VIOLET CITY - OUTSIDE - Sprout Tower - 19,7",
        "level" : "1",
        "to" : "C,2,99,0",
        "connections" : {
            "C,3,14,5": true,
        }
    },
/* VIOLET CITY - INT */
    "C,5,2,0" : {
        // Route connector left
        "name": "VIOLET CITY - INSIDE - Left Route Connector (Left side) - B,5",
        "level" : "1",
        "to" : "C,3,51,1",
        "connections" : {
            "C,5,2,1": true
        }
    },
    "C,5,2,1" : {
        // Route connector right
        "name": "VIOLET CITY - INSIDE - Left Route Connector (Right side) - 1,5",
        "level" : "1",
        "to" : "C,3,14,0",
        "connections" : {
            "C,5,2,0": true
        }
    },
    "C,35,4,1" : {
        // School
        "name": "VIOLET CITY - INSIDE - Academy - 4,11",
        "level" : "1",
        "to" : "C,3,14,1"
    },
    "C,5,21,0" : {
        "name": "VIOLET CITY - INSIDE - Left House - 4,9",
        "level" : "1",
        "to" : "C,3,14,2"
    },
    "C,34,3,0" : {
        // MART
        "name": "VIOLET CITY - INSIDE - Mart - 4,7",
        "level" : "1",
        "to" : "C,3,14,3"
    },
    "C,34,0,0" : {
        //GYM
        "name": "VIOLET CITY - INSIDE - Gym - 6,13",
        "level" : "1",
        "to" : "C,3,14,4"
    },
    "C,36,0,0" : {
        // PK
        "name": "VIOLET CITY - INSIDE - PkCenter - 7,8",
        "level" : "1",
        "to" : "C,3,14,5"
    },
    "C,5,20,0" : {
        "name": "VIOLET CITY - INSIDE - Bottom Right House (Onix, Belsprout Trade) - 4,9",
        "level" : "1",
        "to" : "C,3,14,6"
    },
    // SPROUT TOWER
    //F1
    "C,2,99,0" : {
        "name": "SPROUT TOWER - INSIDE - F1 Enterance - 9,E",
        "level" : "1",
        "to" : "C,3,14,7",
        "connections" : {
            "C,2,99,2": true
        }
    },
    "C,2,99,1" : {
        "name": "SPROUT TOWER - INSIDE - F1 Left Stairs - 1,5",
        "level" : "1",
        "to" : "C,2,12,1",
        "connections" : {
            "C,2,99,3": true
        }
    },
    "C,2,99,2" : {
        "name": "SPROUT TOWER - INSIDE - F1 Centre Stairs - 5,4",
        "level" : "1",
        "to" : "C,2,12,2",
        "connections" : {
            "C,2,99,0": true
        }
    },
    "C,2,99,3" : {
        "name": "SPROUT TOWER - INSIDE - F1 Right Stairs - 11,3",
        "level" : "1",
        "to" : "C,2,12,3",
        "connections" : {
            "C,2,99,1": true
        }
    },
    // F2
    "C,2,12,0" : {
        "name": "SPROUT TOWER - INSIDE - F2 Bottom Stairs - 9,D",
        "level" : "1",
        "to" : "C,2,13,0",
        "connections" : {
            "C,2,12,1": true
        }
    },
    "C,2,12,1" : {
        "name": "SPROUT TOWER - INSIDE - F2 Left Stairs - 1,5",
        "level" : "1",
        "to" : "C,2,99,1",
        "connections" : {
            "C,2,12,0": true
        }
    },
    "C,2,12,2" : {
        "name": "SPROUT TOWER - INSIDE - F2 Centre Stairs - 5,3",
        "level" : "1",
        "to" : "C,2,99,2",
        "connections" : {
            "C,2,12,3": true
        }
    },
    "C,2,12,3" : {
        "name": "SPROUT TOWER - INSIDE - F2 Right Stairs - 11,3",
        "level" : "1",
        "to" : "C,2,99,3",
        "connections" : {
            "C,2,12,2": true
        }
    },
    // F3
    "C,2,13,0" : {
        "name": "SPROUT TOWER - INSIDE - F3 - A,E",
        "level" : "1",
        "to" : "C,2,12,0"
    },
/* ROUTE 29 - EXT */
    "C,3,45,0" : {
        "name": "ROUTE 29 - OUTSIDE - Route Connector - 1B,3",
        "level" : "1",
        "to" : "C,4,2,1",
        "connections": {
            "C,3,0,1": true,
            "C,3,65,2": true,
        }
    },
/* ROUTE 29 - INT */ 
    "C,4,2,0" : {
        "name": "ROUTE 29 - INSIDE - Route Connector (top) - 7,1",
        "level" : "1",
        "to" : "C,3,46,0",
        "connections" : {
            "C,4,2,1": true
        }
    },
    "C,4,2,1" : {
        "name": "ROUTE 29 - INSIDE - Route Connector (bottom) - 7,9",
        "level" : "1",
        "to" : "C,3,45,0",
        "connections" : {
            "C,4,2,0": true
        }
    },
/* ROUTE 46 - EXT */
    "C,3,46,0" : {
        "name": "ROUTE 46 - OUTSIDE - Route Connector - 9,22",
        "level" : "1",
        "to" : "C,4,2,0",
        "grouped": ["C,3,46,2"],
        "groupMain" : true
    },
    "C,3,46,2" : {
        "name": "ROUTE 46 - OUTSIDE - Route Connector - A,22",
        "level" : "1",
        "to" : "C,4,2,0",
        "grouped": ["C,3,46,0"]
    },
    "C,3,46,1" : {
        "name": "ROUTE 46 - OUTSIDE - Dark Cave Enterance - 10,7",
        "to" : "C,4,2,0"
    },
/* ROUTE 30 - EXT */
    "C,3,47,0" : {
        "name": "ROUTE 30 - OUTSIDE - Mr Pokemons House - 11,5",
        "level" : "1",
        "to" : "C,5,0,0",
        "connections": {
            "C,3,65,2": true
        }
    },
    "C,3,47,1" : {
        "name": "ROUTE 30 - OUTSIDE - Berry Guy's House - 7,27",
        "level" : "1",
        "to" : "C,34,12,0",
        "connections": {
            "C,3,65,2": true
        }
    },
/* ROUTE 30 - INT */
    "C,5,0,0" : {
        "name": "ROUTE 30 - INSIDE - Mr Pokemons House - 5,7",
        "level" : "1",
        "to" : "C,3,47,0"
    },
    "C,34,12,0" : {
        "name": "ROUTE 30 - INSIDE - Berry Guy's Hose - 4,8",
        "level" : "1",
        "to" : "C,3,47,1"
    },
/* ROUTE 31 - EXT */
    "C,3,51,0" : {
        "name": "ROUTE 31 - OUTSIDE - Dark Cave - 22,7",
        "level" : "1",
        "to" : "C,1,1,3",
        "connections": {
            "C,3,65,2": true
        }
    },
    "C,3,51,1" : {
        "name": "ROUTE 31 - OUTSIDE - Route Connector - 4,8",
        "level" : "1",
        "to" : "C,5,2,0",
        "connections": {
            "C,3,65,2": true
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
    "C,1,1,3" : {
        "name": "ROUTE 31 - INSIDE - Dark Cave (Route 31 exit) - 7,14",
        "level" : "1",
        "to" : "C,3,51,0"
    },
/* ROUTE 36 - EXT */
    "C,3,92,0" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 2E,D",
        "level" : "1",
        "to" : "C,17,1,1",
        "grouped": ["C,3,92,2"],
        "groupMain" : true,
        "connections": {
            "C,3,14,5": true
        }
    },
    "C,3,92,2" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 2D,D",
        "level" : "1",
        "to" : "C,17,1,1",
        "grouped": ["C,3,92,0"]
    },
    "C,3,92,1" : {
        "name": "ROUTE 36 - OUTSIDE - Route Connector Right - 10,8",
        "to" : "C,1,118,2",
    },
/* ROUTE 36 - INT */
    "C,17,1,0" : {
        "name": "ROUTE 36 - INSIDE - Route Connector Bottom - 7,9",
        "to" : "C,2,14,1",
        "level" : "1",
        "connections": {
            "C,17,1,1": true
        }
    },
    "C,17,1,1" : {
        "name": "ROUTE 36 - INSIDE - Route Connector Top - 7,1",
        "to" : "C,3,92,0",
        "level" : "1",
        "connections": {
            "C,17,1,0": true
        }
    },       
/* RUINS OF ALPH - EXT */
    "C,2,14,0" : {
        "name": "RUINS OF ALPH - OUTSIDE - Bottom Left (omanite) - 3,1D",
        "to" : "C,1,52,0",
        "connections": {
            "C,2,14,8": true
        }
    },
    "C,2,14,1" : {
        "name": "RUINS OF ALPH - OUTSIDE - Top Route Connector - 7,5",
        "to" : "C,17,1,2",
        "level" : "1",
        "connections": {
            "C,2,14,3": true,
        }   
    },
    "C,2,14,2" : {
        "name": "RUINS OF ALPH - OUTSIDE - Right Route Connector - D,14",
        "to" : "C,39,0,0",
        "level" : "1",
        "connections": {
            "C,2,14,3": true,
        }   
    },  
    "C,2,14,3" : {
        "name": "RUINS OF ALPH - OUTSIDE - Lab - 11,B",
        "to" : "C,2,16,0",
        "level" : "1",
        "connections": {
            "C,2,14,5": true,
            "C,2,14,4": true,
            "C,2,14,2": true,
            "C,2,14,1": true,
        }   
    },
    "C,2,14,4" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave left of lab - B,D",
        "to" : "C,2,17,0",
        "level" : "1",
        "connections": {
            "C,2,14,3": true,
        }   
    },
    "C,2,14,5" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Above Lab (kabuto) - E,7",
        "to" : "C,2,15,0",
        "level" : "1",
        "connections": {
            "C,2,14,3": true,
        }   
    },
    "C,2,14,6" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave center left (hoho) - 2,11",
        "to" : "C,2,52,0",
        "connections": {
            "C,2,14,9": true
        }
    },
    "C,2,14,7" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Center - 6,1B",
        "to" : "C,2,19,3",
        "connections": {
            "C,2,14,8": true,
            "C,2,14,0": true
        }
    },
    "C,2,14,8" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Bottom Right (aradactyle) - 10,21",
        "to" : "C,2,51,0"
    },
    "C,2,14,9" : {
        "name": "RUINS OF ALPH - OUTSIDE - Cave Center Center - 6,13",
        "to" : "C,2,19,1"
    },
/* RUINS OF ALPH - INT */
    "C,2,15,0" : {
        "name": "RUINS OF ALPH - INSIDE - Kabuto Puzzle Enterance - 4,9",
        "to" : "C,2,14,5",
        "level" : "1",
        "connections": {
            "C,2,15,1": true,
        }   
    },
    "C,2,15,1" : {
        "name": "RUINS OF ALPH - INSIDE - Kabuto Puzzle Solved - 4,4",
        "to" : "C,4,29,1",
        "level" : "1",
        "grouped": ["C,2,15,2"],
        "groupMain": true,   
        "connections": {
            "C,2,15,0": true,
        }
    },
    "C,2,15,2" : {
        "name": "RUINS OF ALPH - INSIDE - Kabuto Puzzle Solved - 5,4",
        "to" : "C,4,29,1",
        "level" : "1",
        "grouped": ["C,2,15,1"]
    },
    "C,2,16,0" : {
        "name": "RUINS OF ALPH - INSIDE - LAB - 2,7",
        "to" : "C,2,14,3",
        "level" : "1"
    },
    "C,4,29,0" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Cave Ladder - A,10",
        "to" : "C,2,14,4",
        "groupMain": true,   
        "level" : "1"
    },
    "C,2,17,0" : {
        "name": "RUINS OF ALPH - INSIDE - Unknown Cave Ladder - A,10",
        "to" : "C,2,14,4",
        "level" : "1",
        "grouped": ["C,4,29,0"]
    },
    // "C,4,29,1": {
    //     "name": "RUINS OF ALPH - INSIDE - Kabuto Puzzle Drop - 10,4",
    //     "level" : "1",
    //     "connections": {
    //         "C,4,29,0": true,
    //     }
    // },
    // "C,4,29,3": {
    //     "name": "RUINS OF ALPH - INSIDE - Omonite Puzzle Drop - 3,16",
    //     "level" : "1",
    //     "connections": {
    //         "C,4,29,0": true,
    //     }
    // },
    // "C,4,29,2": {
    //     "name": "RUINS OF ALPH - INSIDE - Hoho Puzzle Drop - 3,16",
    //     "level" : "1",
    //     "connections": {
    //         "C,4,29,0": true,
    //     }
    // },
    // "C,4,29,4": {
    //     "name": "RUINS OF ALPH - INSIDE - Aradactyle Puzzle Drop - 10,1C",
    //     "level" : "1",
    //     "connections": {
    //         "C,4,29,0": true,
    //     }
    // }, 
    "C,2,52,0" : {
        "name": "RUINS OF ALPH - INSIDE - Hoho Puzzle Enterance - 4,9",
        "to" : "C,2,14,6",
        "connections": {
            "C,2,52,1": true,
        }   
    },
    "C,2,52,1" : {
        "name": "RUINS OF ALPH - INSIDE - Hoho Puzzle Solved - 4,4",
        "to" : "C,4,29,2",
        "grouped": ["C,2,52,2"],
        "groupMain": true,   
        "connections": {
            "C,2,52,0": true,
        }
    },
    "C,2,52,2" : {
        "name": "RUINS OF ALPH - INSIDE - Hoho Puzzle Solved - 5,4",
        "to" : "C,4,29,2",
        "grouped": ["C,2,52,1"]
    },
    "C,1,52,0" : {
        "name": "RUINS OF ALPH - INSIDE - Omonite Puzzle Enterance - 4,9",
        "to" : "C,2,14,0",
        "connections": {
            "C,2,52,1": true,
        }   
    },
    "C,1,52,1" : {
        "name": "RUINS OF ALPH - INSIDE - Omonite Puzzle Solved - 4,4",
        "to" : "C,4,29,4",
        "grouped": ["C,1,52,2"],
        "groupMain": true,   
        "connections": {
            "C,1,52,0": true,
        }
    },
    "C,1,52,2" : {
        "name": "RUINS OF ALPH - INSIDE - Omonite Puzzle Solved - 5,4",
        "to" : "C,4,29,4",
        "grouped": ["C,1,52,1"]
    },
    "C,2,51,0" : {
        "name": "RUINS OF ALPH - INSIDE - Aradactyle Puzzle Enterance - 4,9",
        "to" : "C,2,14,8",
        "connections": {
            "C,2,51,1": true,
        }   
    },
    "C,2,51,1" : {
        "name": "RUINS OF ALPH - INSIDE - Aradactyle Puzzle Solved - 4,4",
        "to" : "C,4,29,4",
        "grouped": ["C,2,51,2"],
        "groupMain": true,   
        "connections": {
            "C,2,51,0": true,
        }
    },
    "C,2,51,2" : {
        "name": "RUINS OF ALPH - INSIDE - Aradactyle Puzzle Solved - 5,4",
        "to" : "C,4,29,4",
        "grouped": ["C,2,51,1"]
    },
/* ROUTE 32 - EXT */
    "C,3,49,0" : {
        "name": "ROUTE 32 - OUTSIDE - PkCenter - D,4A",
        "to" : "C,2,90,0",
        "level" : "2",
        "connections": {
            "C,3,49,1": true,
            "C,3,49,2": true,
        }   
    },
    "C,3,49,1" : {
        "name": "ROUTE 32 - OUTSIDE - Route Connector - 8,3",
        "to" : "C,39,0,2",
        "level" : "1",
        "connections": {
            "C,3,14,5": true,
            "C,3,49,0": false, // Beat first gym
        }   
    },
    "C,3,49,2" : {
        "name": "ROUTE 32 - OUTSIDE - Union Cave - 8,50",
        "to" : "C,2,20,0",
        "level" : "2",
        "connections": {
            "C,3,49,1": true
        }   
    },
/* ROUTE 32 - INT */
    "C,39,0,0" : {
        "name": "ROUTE 32 - INSIDE - Route Connector Left - 8,C",
        "level" : "1",
        "to" : "C,2,14,2",
        "connections": {
            "C,39,0,2": true,
        }
    },
    "C,39,0,2" : {
        "name": "ROUTE 32 - INSIDE - Route Connector Right- 12,C",
        "level" : "1",
        "to" : "C,3,49,1",
        "connections": {
            "C,39,0,1": true,
        }
    },
    "C,2,90,0" : {
        "name": "ROUTE 32 - INSIDE - PkCenter - 7,8",
        "level" : "2",
        "to" : "C,3,49,0"
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
    "C,1,86,1" : {
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
    "C,34,1,0" : {
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
}