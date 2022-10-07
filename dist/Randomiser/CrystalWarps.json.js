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
        "name": "NEW BARK TOWN - INSIDE - Birch Lab - E,14",
        "level" : "1",
        "to" : "C,3,0,2"
    },
    "C,5,27,0" : {
        "name": "NEW BARK TOWN - INSIDE - Right (Birch House) - 4,8",
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
        "to" : "C,33,10",
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
        "to" : "C,5,0,0",
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
/* ROUTE 32 - EXT */
/* ROUTE 36 - EXT */
/* RUINS OF ALPH - EXT */

}