var FIRE_RED_WARPS = 
{
/* PALLET TOWN - EXT */
// NOT RANDOMISED

/* PALLET TOWN - INT */
// NOT RANDOMISED

/* VIRIDIAN CITY - EXT */
    "FR,3,1,0" : {
        // PK
        "name": "VIRIDIAN CITY - OUTSIDE - PkCenter - 1A,1A",
        "level": "1", 
        "to": "FR,5,4,1",
        "connections" : {
            "FR,3,1,1": true,
            "FR,3,1,3": true,
            "FR,3,1,4": true,
            "FR,3,41,0": true,
            "FR,3,20,2": false
        }
    },
    "FR,3,1,1" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Top - 19,B",
        "level": "1", 
        "to" : "FR,5,0,1",
        "connections" : {
            "FR,3,1,0": true
        }
        
    },
    "FR,3,1,2" : {
        "name": "VIRIDIAN CITY - OUTSIDE - GYM - 24,A",
        "to" : "FR,5,1,1"
    },
    "FR,3,1,3" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Bottom (School) - 19,12",
        "level": "1", 
        "to" : "FR,5,2,1",
        "connections" : {
            "FR,3,1,0": true
        }
    },
    "FR,3,1,4" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Mart - 24,13",
        "level": "1", 
        "to" : "FR,5,3,1",
        "connections" : {
            "FR,3,1,0": true
        }
    },
/* VIRIDIAN CITY - INT */
    "FR,5,0,0" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 4,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,1", "FR,5,0,2"]
    },
    "FR,5,0,1" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 5,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,0", "FR,5,0,2"],
        "groupMain" : true
    },
    "FR,5,0,2" : {
        "name": "VIRIDIAN CITY - INSIDE - Top - 6,7",
        "level": "1", 
        "to" : "FR,3,1,1",
        "grouped" : ["FR,5,0,0", "FR,5,0,1"]
    },
    "FR,5,1,0" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 10,16",
        "to" : "FR,3,1,2",
        "grouped" : ["FR,5,1,1", "FR,5,1,2"]
    },
    "FR,5,1,1" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 11,16",
        "to" : "FR,3,1,2",
        "grouped" : ["FR,5,1,0", "FR,5,1,2"],
        "groupMain" : true
    },
    "FR,5,1,2" : {
        // GYM
        "name": "VIRIDIAN CITY - INSIDE - Gym - 12,16",
        "to" : "FR,3,1,2",
        "grouped" : ["FR,5,1,0", "FR,5,1,1"]
    },
    "FR,5,2,0" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 3,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,1", "FR,5,2,2"]
    },
    "FR,5,2,1" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 4,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,0", "FR,5,2,2"],
        "groupMain" : true
    },
    "FR,5,2,2" : {
        "name": "VIRIDIAN CITY - INSIDE - Bottom (School) - 5,7",
        "level": "1", 
        "to" : "FR,3,1,3",
        "grouped" : ["FR,5,2,0", "FR,5,2,1"]
    },
    "FR,5,3,0" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,1", "FR,5,3,2"]
    },
    "FR,5,3,1" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,0", "FR,5,3,2"],
        "groupMain" : true
    },
    "FR,5,3,2" : {
        // MART
        "name": "VIRIDIAN CITY - INSIDE - Mart - 5,7",
        "level": "1", 
        "to" : "FR,3,1,4",
        "grouped" : ["FR,5,3,0", "FR,5,3,1"]
    },
    "FR,5,4,0" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,1", "FR,5,4,2"]
    },
    "FR,5,4,1" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,0", "FR,5,4,2"],
        "groupMain" : true,
        "connections" : {
            "FR,5,4,3": true
        }
    },
    "FR,5,4,2" : {
        // PK
        "name": "VIRIDIAN CITY - INSIDE - PkCenter - 8,8",
        "level": "1", 
        "to" : "FR,3,1,0",
        "grouped" : ["FR,5,4,0", "FR,5,4,1"]
    },
    "FR,5,4,3" : {
        "name": "VIRIDIAN CITY - INSIDE - PkCenter (stairs) - 1,6",
        "level": "1", 
        "to" : "FR,5,5,0",
        "connections" : {
            "FR,5,4,1": true
        }
    },
    "FR,5,5,0" : {
        // PK (upstairs)
        "name": "VIRIDIAN CITY - INSIDE - PkCenter (upstairs) (stairs) - 1,6",
        "level": "1", 
        "to" : "FR,5,5,0",
        "ignore": true
    },
/* PEWTER CITY - EXT */
    "FR,3,2,0" : {
        // MUSEUM
        "name": "PEWTER CITY - OUTSIDE - Museum (Main) - 11,6",
        "level": "1", 
        "to": "FR,6,0,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,1" : {
        // MUSEUM BACK
        "name": "PEWTER CITY - OUTSIDE - Museum (Back) - 19,4",
        "level": "1", 
        "to" : "FR,6,0,3",
        "connections" : {
            "FR,3,2,5": true
        }
    },
    "FR,3,2,2" : {
        // GYM
        "name": "PEWTER CITY - OUTSIDE - Gym - F,10",
        "level": "1", 
        "to" : "FR,6,2,1",
        "connections" : {
            "FR,3,2,5": true
        }
    },
    "FR,3,2,3" : {
        // MART
        "name": "PEWTER CITY - OUTSIDE - Mart - 1C,12",
        "level": "1", 
        "to" : "FR,6,3,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,4" : {
        "name": "PEWTER CITY - OUTSIDE - Top Right - 21,B",
        "level": "1", 
        "to" : "FR,6,4,1",
        "connections" : {
            "FR,3,2,5": true,
        }
    },
    "FR,3,2,5" : {
        // PK
        "name": "PEWTER CITY - OUTSIDE - PkCenter - 11,19",
        "level": "1", 
        "to" : "FR,6,5,1",
        "connections" : {
            "FR,3,2,0": true,
            "FR,3,2,1": false,
            "FR,3,2,2": true,
            "FR,3,2,3": true,
            "FR,3,2,4": true,
            "FR,3,2,6": true,
            "FR,3,20,0": true
        }
    },
    "FR,3,2,6" : {
        "name": "PEWTER CITY - OUTSIDE - Bottom Left - 9,1E",
        "level": "1", 
        "to" : "FR,6,7,1",
        "connections" : {
            "FR,3,2,5": true
        }
    },
/* PEWTER CITY - INT */
    "FR,6,0,0" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - D,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,1", "FR,6,0,2"]
    },
    "FR,6,0,1" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - E,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,0", "FR,6,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,6,0,5": true
        }
    },
    "FR,6,0,2" : {
        "name": "PEWTER CITY - INSIDE - Museum (Main) - F,9",
        "level": "1", 
        "to" : "FR,3,2,0",
        "grouped" : ["FR,6,0,0", "FR,6,0,1"]
    },
    "FR,6,0,3" : {
        "name": "PEWTER CITY - INSIDE - Museum (Back) - 15,9",
        "level": "1", 
        "to" : "FR,3,2,1",
        "grouped" : ["FR,6,0,4"],
        "groupMain" : true
    },
    "FR,6,0,4" : {
        "name": "PEWTER CITY - INSIDE - Museum (Back) - 16,9",
        "level": "1", 
        "to" : "FR,3,2,1",
        "grouped" : ["FR,6,0,3"]
    },
    "FR,6,0,5" : {
        "name": "PEWTER CITY - INSIDE - Museum (Stairs) - 16,9",
        "level": "1", 
        "to": "FR,6,1,0",
        "connections" : {
            "FR,6,0,1": true
        }
    },
    "FR,6,1,0" : {
        "name": "PEWTER CITY - INSIDE - Museum (Upstairs) (Stairs) - B,8",
        "level": "1", 
        "to": "FR,6,0,5"
    },
    "FR,6,2,0" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 5,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,1", "FR,6,2,2"]
    },
    "FR,6,2,1" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 6,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,0", "FR,6,2,2"],
        "groupMain" : true
    },
    "FR,6,2,2" : {
        // GYM
        "name": "PEWTER CITY - INSIDE - Gym - 7,E",
        "level": "1", 
        "to" : "FR,3,2,2",
        "grouped" : ["FR,6,2,0", "FR,6,2,1"]
    },
    "FR,6,3,0" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 3,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,1", "FR,6,3,2"]
    },
    "FR,6,3,1" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 4,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,0", "FR,6,3,2"],
        "groupMain" : true
    },
    "FR,6,3,2" : {
        // MART
        "name": "PEWTER CITY - INSIDE - Mart - 5,7",
        "level": "1", 
        "to" : "FR,3,2,3",
        "grouped" : ["FR,6,3,0", "FR,6,3,1"]
    },
    "FR,6,4,0" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 3,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,1", "FR,6,4,2"]
    },
    "FR,6,4,1" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 4,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,0", "FR,6,4,2"],
        "groupMain" : true
    },
    "FR,6,4,2" : {
        "name": "PEWTER CITY - INSIDE - Top Right - 5,7",
        "level": "1", 
        "to" : "FR,3,2,4",
        "grouped" : ["FR,6,4,0", "FR,6,4,1"]
    },
    "FR,6,5,0" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 6,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,1", "FR,6,5,2"]
    },
    "FR,6,5,1" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 7,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,0", "FR,6,5,2"],
        "groupMain" : true,
        "connections" : {
            "FR,6,5,3": true
        }
    },
    "FR,6,5,2" : {
        // PK
        "name": "PEWTER CITY - INSIDE - PkCenter - 9,8",
        "level": "1", 
        "to" : "FR,3,2,5",
        "grouped" : ["FR,6,5,0", "FR,6,5,1"]
    },
    "FR,6,5,3" : {
        "name": "PEWTER CITY - INSIDE - PkCenter (Stairs) - 1,6",
        "level": "1", 
        "to" : "FR,6,6,0",
        "connections" : {
            "FR,6,5,1": true
        }
    },
    "FR,6,6,0" : {
        "name": "PEWTER CITY - INSIDE - PkCenter (Upstairs) (Stairs) - 1,6",
        "level": "1", 
        "to" : "FR,6,5,3",
        "ignore" : true
    },
    "FR,6,7,0" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 3,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,1", "FR,6,7,2"]
    },
    "FR,6,7,1" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 4,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,0", "FR,6,7,2"],
        "groupMain" : true
    },
    "FR,6,7,2" : {
        "name": "PEWTER CITY - INSIDE - Bottom Left - 5,7",
        "level": "1", 
        "to" : "FR,3,2,6",
        "grouped" : ["FR,6,7,0", "FR,6,7,1"]
    },
/* ROUTE 22 - EXT */
    "FR,3,41,0" : {
        "name": "ROUTE 22 - OUTSIDE - League Front Gate - 8,5",
        "level": "1", 
        "to" : "FR,28,0,2",
        "connections" : {
            "FR,3,1,0": true
        }
    },
/* ROUTE 22 - INT */ 
    "FR,28,0,0" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate (Guard Door) - 7,1",
        "level": "1", 
        "to" : "FR,3,42,2",
        "connections" : {
            "FR,28,0,2": true,
        }
    },   
    "FR,28,0,1" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,A",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,2", "FR,28,0,3"]
    },
    "FR,28,0,2" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,B",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,1", "FR,28,0,3"],
        "groupMain" : true,
        "connections" : {
            "FR,28,0,0": true,
        }
    },
    "FR,28,0,3" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate  - 6,C",
        "level": "1", 
        "to" : "FR,3,41,0",
        "grouped" : ["FR,28,0,1", "FR,28,0,2"]
    },
/* ROUTE 2 - EXT */
    "FR,3,20,0" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (PEWTER side) - 5,D",
        "level": "1", 
        "to" : "FR,15,3,3",
        "grouped" : ["FR,3,20,1"],
        "groupMain" : true,
        "connections" : {
            "FR,3,2,5": true
        }
    },
    "FR,3,20,1" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (PEWTER side) - 6,D",
        "level": "1", 
        "to" : "FR,15,3,3",
        "grouped" : ["FR,3,20,0"]
    },
    "FR,3,20,2" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (VIRIDIAN side) - 5,33",
        "level": "1", 
        "to" : "FR,15,0,1",
        "grouped" : ["FR,3,20,9"],
        "groupMain" : true,
        "connections" : {
            "FR,3,1,0": true
        }
    },
    "FR,3,20,9" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (VIRIDIAN side) - 6,33",
        "level": "1", 
        "to" : "FR,15,0,1",
        "grouped" : ["FR,3,20,2"]
    },
    "FR,3,20,4" : {
        "name": "ROUTE 2 - OUTSIDE - House (abra, mr mime trade) - 11,16",
        "to" : "FR,15,1,1",
        "level": "3",
    },
    "FR,3,20,5" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (VIRIDIAN Side) - 12,2E",
        "to" : "FR,15,2,1",
        "grouped" : ["FR,3,20,8"],
        "groupMain" : true
    },
    "FR,3,20,8" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (VIRIDIAN Side) - 13,2E",
        "to" : "FR,15,2,1",
        "grouped" : ["FR,3,20,5"],
    },
    "FR,3,20,6" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (PEWTER Side) - 12,29",
        "to" : "FR,15,2,3",
        "grouped" : ["FR,3,20,7"],
        "groupMain" : true
    },
    "FR,3,20,7" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector (PEWTER Side) - 13,29",
        "to" : "FR,15,2,3",
        "grouped" : ["FR,3,20,6"],
    },
    "FR,3,20,3" : {
        "name": "ROUTE 2 - OUTSIDE - Digglet Cave Enterance - 11,B",
        "to" : "FR,1,36,1",
        "level": "3",
    },    
/* ROUTE 2 - INT */
    "FR,15,0,0" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 6,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,1", "FR,15,0,2"]
    },
    "FR,15,0,1" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 7,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,0", "FR,15,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,15,0,3": true
        }
    },
    "FR,15,0,2" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) - 8,A",
        "level": "1", 
        "to" : "FR,3,20,2",
        "grouped" : ["FR,15,0,0", "FR,15,0,1"]
    },
    "FR,15,0,3" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (VIRIDIAN Side) (Woods Enterance) - 7,1",
        "level": "1", 
        "to" : "FR,1,0,0",
        "connections" : {
            "FR,15,0,1": true
        }
    },
    "FR,15,1,0" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 3,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,1", "FR,15,1,2"]
    },
    "FR,15,1,1" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 4,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,0", "FR,15,1,2"],
        "groupMain" : true
    },
    "FR,15,1,2" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 5,7",
        "to" : "FR,3,20,4",
        "level": "3",
        "grouped" : ["FR,15,1,0", "FR,15,1,1"]
    },
    "FR,15,2,0" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 6,A",
        "to" : "FR,3,20,5",
        "grouped" : ["FR,15,2,1", "FR,15,2,2"]
    },
    "FR,15,2,1" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 7,A",
        "to" : "FR,3,20,5",
        "grouped" : ["FR,15,2,0", "FR,15,2,2"],
        "groupMain" : true
    },
    "FR,15,2,2" : {
        "name": "ROUTE 2 - INSIDE - Right Route Connector - 8,A",
        "to" : "FR,3,20,5",
        "grouped" : ["FR,15,2,0", "FR,15,2,1"]
    },
    "FR,15,2,3" : {
        "name": "ROUTE 2 - OUTSIDE - Right Route Connector - 7,1",
        "to" : "FR,3,20,6"
    },
    "FR,15,3,0" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 6,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,1", "FR,15,3,2"]
    },
    "FR,15,3,1" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 7,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,0", "FR,15,3,2"],
        "groupMain" : true,
        "connections" : {
            "FR,15,3,3" : true
        }
    },
    "FR,15,3,2" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) (Woods Exit) - 8,A",
        "level": "1", 
        "to" : "FR,1,0,2",
        "grouped" : ["FR,15,3,0", "FR,15,3,1"]
    },
    "FR,15,3,3" : {
        "name": "ROUTE 2 - INSIDE - Left Route Connector (PEWTER Side) - 7,1",
        "level": "1", 
        "to" : "FR,3,20,0",
        "connections" : {
            "FR,15,3,1" : true
        }
    },
/* VIRIDIAN FOREST */
    "FR,1,0,5" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 4,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,3"],
    },
    "FR,1,0,2" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 5,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,5", "FR,1,0,3"],
        "groupMain" : true,
        "connections" : {
            "FR,1,0,0" : true
        }
    },
    "FR,1,0,3" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - PEWTER CITY SIDE (Exit) - 6,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,5"],
    },
    "FR,1,0,1" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1C,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,4"],
    },
    "FR,1,0,0" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1D,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,1", "FR,1,0,4"],
        "groupMain" : true,
        "connections" : {
            "FR,1,0,2" : true
        }
    },
    "FR,1,0,4" : {
        "name": "VIRIDIAN FOREST - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1E,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,1"],
    },
/* ROUTE 4 - EXT */
    "FR,3,22,0" : {
        "name": "ROUTE 4 - OUTSIDE - Mt Moon (Pewter Side) - 13,5",
        "level": "2", 
        "to" : "FR,1,1,3",
        "connections" : {
            "FR,3,22,2" : true
        }
    },
    "FR,3,22,1" : {
        "name": "ROUTE 4 - OUTSIDE - Mt Moon (Cerulean Side) - 20,5",
        "level": "2", 
        "to" : "FR,1,2,7",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,22,2" : {
        "name": "ROUTE 4 - OUTSIDE - PkCenter - C,5",
        "level": "2", 
        "to" : "FR,1,1,3",
        "connections" : {
            "FR,3,22,0" : true,
            "FR,3,2,5" : true
        }
    },
/* ROUTE 4 - INT */
    "FR,16,0,1" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 7,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,0", "FR,16,0,2"],
        "groupMain" : true,
        "connections" : {
            "FR,16,0,3" : true
        }
    },
    "FR,16,0,0" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 6,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,1", "FR,16,0,2"]
    },
    "FR,16,0,2" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Enterance) - 8,8",
        "level": "2", 
        "to" : "FR,3,22,2",
        "grouped" : ["FR,16,0,1", "FR,16,0,0"]
    },
    "FR,16,0,3" : {
        "name": "ROUTE 4 - INSIDE - PkCenter (Stairs) - 1,6",
        "level": "2", 
        "to" : "FR,16,1,0",
        "connections" : {
            "FR,16,0,1" : true
        }
    },
/* MT MOON */
//F1
    "FR,1,1,0" : {
        "name": "MT MOON - INSIDE - F1 TOP LEFT - 5,6",
        "level": "2", 
        "to" : "FR,1,2,0",
        "connections" : {
            "FR,1,1,1" : true,
            "FR,1,1,2" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,1" : {
        "name": "MT MOON - INSIDE - F1 TOP Center - 13,E",
        "level": "2", 
        "to" : "FR,1,2,1",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,2" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,2" : {
        "name": "MT MOON - INSIDE - F1 TOP Right - 1F,10",
        "level": "2", 
        "to" : "FR,1,2,2",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,1" : true,
            "FR,1,1,3" : true
        }
    },
    "FR,1,1,3" : {
        "name": "MT MOON - INSIDE - F1 Enterance - 12,25",
        "level": "2", 
        "to" : "FR,3,22,0",
        "connections" : {
            "FR,1,1,0" : true,
            "FR,1,1,1" : true,
            "FR,1,1,2" : true
        }
    },
// F2
    "FR,1,2,0" : {
        "name": "MT MOON - INSIDE - F2 'L' Room Top - 3,3",
        "level": "2", 
        "to" : "FR,1,1,0",
        "connections" : {
            "FR,1,2,3" : true
        }
    },
    "FR,1,2,1" : {
        "name": "MT MOON - INSIDE - F2 '-' Water Room Right - 19,4",
        "level": "2", 
        "to" : "FR,1,1,1",
        "connections" : {
            "FR,1,2,4" : true
        }
    },
    "FR,1,2,2" : {
        "name": "MT MOON - INSIDE - F2 Reverse 'L' Room Top - 2B,15",
        "level": "2", 
        "to" : "FR,1,1,2",
        "connections" : {
            "FR,1,2,5" : true
        }
    },
    "FR,1,2,3" : {
        "name": "MT MOON - INSIDE - F2 'L' Room Bottom - 16,12",
        "level": "2", 
        "to" : "FR,1,3,0",
        "connections" : {
            "FR,1,2,0" : true
        }
    },
    "FR,1,2,4" : {
        "name": "MT MOON - INSIDE - F2 '-' Water Room Left - 11,5",
        "level": "2", 
        "to" : "FR,1,3,1",
        "connections" : {
            "FR,1,2,1" : true
        }
    },
    "FR,1,2,5" : {
        "name": "MT MOON - INSIDE - F2 Reverse 'L' Room Bottom - 1A,24",
        "level": "2", 
        "to" : "FR,1,3,2",
        "connections" : {
            "FR,1,2,2" : true
        }
    },
    "FR,1,2,6" : {
        "name": "MT MOON - INSIDE - F2 '-' Rock Room Left - 27,4",
        "level": "2", 
        "to" : "FR,1,3,3",
        "connections" : {
            "FR,1,2,7" : true
        }
    },
    "FR,1,2,7" : {
        "name": "MT MOON - INSIDE - F2 '-' Rock Room Right - 2D,4",
        "level": "2", 
        "to" : "FR,3,22,1",
        "connections" : {
            "FR,1,2,6" : true
        }
    },
// F3
    "FR,1,3,0" : {
        "name": "MT MOON - INSIDE - F3 Center Ladder  - 19,15",
        "level": "2", 
        "to" : "FR,1,2,3",
        "connections" : {
            "FR,1,3,3" : true
        }
    },
    "FR,1,3,1" : {
        "name": "MT MOON - INSIDE - F3 Top Right Ladder  - 1F,B",
        "level": "2", 
        "to" : "FR,1,2,4"
    },
    "FR,1,3,2" : {
        "name": "MT MOON - INSIDE - F3 Top Bottom Left Ladder  - 11,1F",
        "level": "2", 
        "to" : "FR,1,2,5"
    },
    "FR,1,3,3" : {
        "name": "MT MOON - INSIDE - F3 Top Left Ladder  - 5,A",
        "level": "2", 
        "to" : "FR,1,2,6",
        "connections" : {
            "FR,1,3,0" : true
        }
    },
/* CERULEAN - EXT */
    "FR,3,3,0" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Left  - 19,15",
        "level": "2", 
        "to" : "FR,7,0,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,1" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Right (Robbed House)  - 1E,B",
        "to" : "FR,7,1,1",
        "level" : "3",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,2" : {
        "name": "CERULEAN CITY - OUTSIDE - Left of PkCenter  - F,11",
        "to" : "FR,7,2,1",
        "level": "2", 
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,3" : {
        "name": "CERULEAN CITY - OUTSIDE - PkCenter  - 16,13",
        "level": "2", 
        "to" : "FR,7,3,1",
        "connections" : {
            "FR,3,3,0" : true,
            "FR,3,3,1" : true,
            "FR,3,3,2" : true,
            "FR,3,3,4" : true,
            "FR,3,3,5" : true,
            "FR,3,3,6" : true,
            "FR,3,3,12" : true,
            "FR,3,3,13" : true,
            "FR,3,44,0" : true,
            "FR,3,22,1" : true

        }
    },
    "FR,3,3,4" : {
        "name": "CERULEAN CITY - OUTSIDE - GYM  - 1F,15",
        "level": "2", 
        "to" : "FR,7,5,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,5" : {
        "name": "CERULEAN CITY - OUTSIDE - Bike Shop  - D,1C",
        "level": "2", 
        "to" : "FR,7,6,1",
        "groupMain" : true,
        "grouped" : ["FR,3,3,11"],
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,11" : {
        "name": "CERULEAN CITY - OUTSIDE - Bike Shop  - E,1C",
        "level": "2", 
        "to" : "FR,7,6,1",
        "grouped" : ["FR,3,3,5"]
    },
    "FR,3,3,6" : {
        "name": "CERULEAN CITY - OUTSIDE - Mart  - 1D,1C",
        "level": "2", 
        "to" : "FR,7,7,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,7" : {
        "name": "CERULEAN CITY - OUTSIDE - Cerulean Cave Enterance  - 1,C",
        "to" : "FR,7,6,1"
    },
    "FR,3,3,8" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Left (Backdoor)  - A,8",
        "level": "2", 
        "to" : "FR,7,3,0"
    },
    "FR,3,3,9" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Right (Robbed) (Backdoor)  - 1F,8",
        "to" : "FR,7,1,3",
        "level" : "3",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,12" : {
        "name": "CERULEAN CITY - OUTSIDE - Bottom  - 17,1C",
        "level": "2", 
        "to" : "FR,7,8,0",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
    "FR,3,3,13" : {
        "name": "CERULEAN CITY - OUTSIDE - Top Center  - 11,B",
        "level": "2", 
        "to" : "FR,7,9,0",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
/* CERULEAN - INT */
    "FR,7,0,1" : {
        "name": "CERULEAN CITY - INSIDE - Top Left (Enterance)  - 3,8",
        "level": "2", 
        "to" : "FR,3,3,0",
        "connections" : {
            "FR,7,0,3" : true
        }
    },
    "FR,7,0,3" : {
        "name": "CERULEAN CITY - INSIDE - Top Left (Backdoor)  - 3,1",
        "level": "2", 
        "to" : "FR,3,3,8",
        "connections" : {
            "FR,7,0,1" : true
        }
    },
    "FR,7,1,1" : {
        "name": "CERULEAN CITY - INSIDE - Top Right (Enterance)  - 3,7",
        "to" : "FR,3,3,1",
        "level" : "3",
        "connections" : {
            "FR,7,1,3" : true
        }
    },
    "FR,7,1,3" : {
        "name": "CERULEAN CITY - INSIDE - Top Right (Bakcdoor)  - 4,1",
        "to" : "FR,3,3,9",
        "level" : "3",
        "connections" : {
            "FR,7,1,1" : true
        }
    },
    "FR,7,2,1" : {
        "name": "CERULEAN CITY - INSIDE - Center - 4,7",
        "level": "2", 
        "to" : "FR,3,3,2"
    },
    "FR,7,3,1" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (Enterance)  - 7,8",
        "to" : "FR,3,3,3",
        "level": "2", 
        "connections" : {
            "FR,7,3,3" : true
        }
    },
    "FR,7,3,3" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (Stairs)  - 1,6",
        "to" : "FR,7,4,0",
        "level": "2", 
        "connections" : {
            "FR,7,3,1" : true
        }
    },
    "FR,7,4,1" : {
        "name": "CERULEAN CITY - INSIDE - PkCenter (UpStairs)  - 1,6",
        "to" : "FR,7,3,3",
        "level": "2", 
        "ignore": true
    },
    "FR,7,5,1" : {
        "name": "CERULEAN CITY - INSIDE - GYM  - 8,12",
        "to" : "FR,3,3,4",
        "level": "2"
    },
    "FR,7,6,1" : {
        "name": "CERULEAN CITY - INSIDE - Bike Shop  - 5,8",
        "to" : "FR,3,3,5",
        "level": "2"
    },
    "FR,7,7,1" : {
        "name": "CERULEAN CITY - INSIDE - Mart  - 4,7",
        "to" : "FR,3,3,6",
        "level": "2"
    },
    "FR,7,8,0" : {
        "name": "CERULEAN CITY - INSIDE - Bottom - 4,7",
        "to" : "FR,3,3,12",
        "level": "2"
    },
    "FR,7,9,0" : {
        "name": "CERULEAN CITY - INSIDE - Top Center  - 4,7",
        "to" : "FR,3,3,13",
        "level": "2"
    },
/* ROUTE 25 - EXT */
    "FR,3,44,0" : {
        "name": "ROUTE 25 - OUTSIDE - Bill's House  - 33,4",
        "level": "2", 
        "to" : "FR,30,0,1",
        "connections" : {
            "FR,3,3,3" : true
        }
    },
/* ROUTE 25 - INT */
    "FR,30,0,1" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 7,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,0", "FR,30,0,2"],
        "groupMain" : true
    },
    "FR,30,0,0" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 6,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,1", "FR,30,0,2"],
    },
    "FR,30,0,2" : {
        "name": "ROUTE 25 - INSIDE - Bill's House - 8,9",
        "level": "2", 
        "to" : "FR,3,44,0",
        "grouped" : ["FR,30,0,0", "FR,30,0,1"]
    },
/* ROUTE 5 - EXT */   
    "FR,3,23,0" : {
        "name": "ROUTE 5 - OUTSIDE - Underground Pass - 1F,1F",
        "level": "3", 
        "to" : "FR,1,30,1",
        "connections" : {
            "FR,3,3,3" : true,
            "FR,3,23,2" : true,
            "FR,3,23,1" : true
        }
    }, 
    "FR,3,23,1" : {
        "name": "ROUTE 5 - OUTSIDE - Day Care - 17,19",
        "level": "3", 
        "to" : "FR,17,0,1",
        "connections" : {
            "FR,3,23,0": true
        }
    },
    "FR,3,23,2" : {
        "name": "ROUTE 5 - OUTSIDE - Route Connector - 18,20",
        "level": "3", 
        "to" : "FR,17,1,1",
        "grouped" : ["FR,3,23,3"],
        "groupMain" : true,
        "connections" : {
            "FR,3,23,0": true
        }
    },
    "FR,3,23,3" : {
        "name": "ROUTE 5 - OUTSIDE - Route Connector - 19,20",
        "level": "3", 
        "to" : "FR,17,1,1",
        "grouped" : ["FR,3,23,2"]
    },
/* ROUTE 5 - INT */
    "FR,17,0,1" : {
        "name": "ROUTE 5 - INSIDE - Day Care - 3,7",
        "level": "3", 
        "to" : "FR,3,23,1"
    },
    "FR,17,1,1" : {
        "name": "ROUTE 5 - INSIDE - Route Connector Top - 4,1",
        "level": "3", 
        "to" : "FR,3,23,2"
    },
    "FR,17,1,2" : {
        "name": "ROUTE 5 - INSIDE - Route Connector Bottom - 4,9",
        "level": "3", 
        "to" : "FR,3,10,9",
        "connections" : {
            "FR,17,1,1": true
        }
    },
/* Underground Path */
// Route 5 Side
    "FR,1,30,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 5 Side Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,23,0",
        "connections" : {
            "FR,1,30,3": true
        }
    },
    "FR,1,30,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 5 Side Stairs - 7,4",
        "level": "3", 
        "to" : "FR,1,31,0",
        "connections" : {
            "FR,1,30,1": true
        }
    },
// Underground Vertical   
    "FR,1,31,0" : {
        "name": "UNDERGROUND PATH - INSIDE - Vertical Top - 4,3",
        "level": "3", 
        "to" : "FR,1,30,3",
        "connections" : {
            "FR,1,31,1": true
        }
    },
    "FR,1,31,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Vertical Bottom - 3,3C",
        "level": "3", 
        "to" : "FR,1,32,3",
        "connections" : {
            "FR,1,31,0": true
        }
    },
// Route 6 Side
    "FR,1,32,1" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 6 Side Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,24,0",
        "connections" : {
            "FR,1,32,3": true
        }
    },
    "FR,1,32,3" : {
        "name": "UNDERGROUND PATH - INSIDE - Route 6 Side Stairs - 7,4",
        "level": "3", 
        "to" : "FR,1,31,1",
        "connections" : {
            "FR,1,32,1": true
        }
    },
/* ROUTE 6 - EXT */
    "FR,3,24,0" : {
        "name": "ROUTE 6 - OUTSIDE - Underground Path - 13,D",
        "level": "3", 
        "to" : "FR,1,32,1",
        "connections" : {
            "FR,3,24,1": true,
            "FR,3,5,4" : true
        }
    },
    "FR,3,24,1" : {
        "name": "ROUTE 6 - OUTSIDE - Route Connector - C,5",
        "level": "3", 
        "to" : "FR,18,0,2",
        "grouped" : ["FR,3,24,2"],
        "groupMain" : true,
        "connections" : {
            "FR,3,24,0": true,
            "FR,3,5,4" : true
        }
    },
    "FR,3,24,2" : {
        "name": "ROUTE 6 - OUTSIDE - Route Connector - D,5",
        "level": "3", 
        "to" : "FR,18,0,2",
        "grouped" : ["FR,3,24,1"]
    },
/* ROUTE 6 - INT */
    "FR,18,0,0" : {
        "name": "ROUTE 6 - INSIDE - Route Connector Top - 4,1",
        "level": "3", 
        "to" : "FR,3,10,11",
        "connections" : {
            "FR,18,0,2": true
        }
    },
    "FR,18,0,2" : {
        "name": "ROUTE 6 - INSIDE - Route Connector Bottom - 4,9",
        "level": "3", 
        "to" : "FR,3,24,1"
    },
/* VERMILION CITY - EXT */
    "FR,3,5,0" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 16,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,1", "FR,3,5,2"],
        "groupMain" : true,
        "ignore": true
    },
    "FR,3,5,1" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 17,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,0"],
        "ignore": true
    },
    "FR,3,5,2" : {
        "name": "VERMILLION CITY - OUTSIDE - S.S.Anne - 18,22",
        "level": "3", 
        "to" : "FR,1,4,1",
        "grouped" : ["FR,3,5,0"],
        "ignore": true
    },
    "FR,3,5,3" : {
        "name": "VERMILLION CITY - OUTSIDE - Top Left - 9,6",
        "level": "3", 
        "to" : "FR,9,0,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,4" : {
        "name": "VERMILLION CITY - OUTSIDE - PkCenter - F,6",
        "level": "3", 
        "to" : "FR,9,1,1",
        "connections" : {
            "FR,3,5,3": true,
            "FR,3,5,5": true,
            "FR,3,5,6": true,
            "FR,3,5,7": true,
            "FR,3,5,8": true,
            "FR,3,5,9": true,
            "FR,3,24,0": true,
            "FR,3,24,1": true,
            "FR,3,29,0": true,
            "FR,3,29,1": true
        }
    },
    "FR,3,5,5" : {
        "name": "VERMILLION CITY - OUTSIDE - Fan Club - C,11",
        "level": "3", 
        "to" : "FR,9,3,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,6" : {
        "name": "VERMILLION CITY - OUTSIDE - Center - 13,11",
        "level": "3", 
        "to" : "FR,9,4,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,7" : {
        "name": "VERMILLION CITY - OUTSIDE - Mart - 1D,11",
        "level": "3", 
        "to" : "FR,9,5,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,8" : {
        "name": "VERMILLION CITY - OUTSIDE - Bottom Right - 1C,18",
        "level": "3", 
        "to" : "FR,9,7,1",
        "connections" : {
            "FR,3,5,4": true
        }
    },
    "FR,3,5,9" : {
        "name": "VERMILLION CITY - OUTSIDE - GYM - E,19",
        "level": "3", 
        "to" : "FR,9,6,1"
    },
/* VERMILION CITY - INT */
    "FR,9,0,1" : {
        "name": "VERMILLION CITY - INSIDE - Top, Left - 3,7",
        "level": "3", 
        "to" : "FR,3,5,3"
    },
    "FR,9,1,1" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Enterance - 6,8",
        "level": "3", 
        "to" : "FR,3,5,34",
        "connections" : {
            "FR,9,1,3": true
        }
    },
    "FR,9,1,3" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Stairs - 1,6",
        "level": "3", 
        "to" : "FR,9,2,0",
        "connections" : {
            "FR,9,1,1": true
        }
    },
    "FR,9,2,0" : {
        "name": "VERMILLION CITY - INSIDE - PkCenter Upstairs Stairs - 1,6",
        "level": "3", 
        "to" : "FR,9,1,3",
        "ignore": true
    },
    "FR,9,3,1" : {
        "name": "VERMILLION CITY - INSIDE - Fan Club - 4,A",
        "level": "3", 
        "to" : "FR,3,5,5"
    },
    "FR,9,4,1" : {
        "name": "VERMILLION CITY - INSIDE - Center House - 4,7",
        "level": "3", 
        "to" : "FR,3,5,6"
    },
    "FR,9,5,1" : {
        "name": "VERMILLION CITY - INSIDE - Mart - 3,7",
        "level": "3", 
        "to" : "FR,3,5,7"
    },
    "FR,9,6,1" : {
        "name": "VERMILLION CITY - INSIDE - GYM - 4,13",
        "level": "3", 
        "to" : "FR,3,5,9"
    },
    "FR,9,7,1" : {
        "name": "VERMILLION CITY - INSIDE - Bottom Right - 4,7",
        "level": "3", 
        "to" : "FR,3,5,8"
    },
/* ROUTE 11 - EXT */
    "FR,3,29,0" : {
        "name": "ROUTE 11 - OUTSIDE - Digglet Cave Enterance - 6,7",
        "level": "3", 
        "to" : "FR,1,38,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,3,29,1": true
        }
    },
    "FR,3,29,1" : {
        "name": "ROUTE 11 - OUTSIDE - Route Connector Left - 3A,A",
        "level": "3", 
        "to" : "FR,22,0,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,3,29,0": true
        }
    },
    "FR,3,29,2" : {
        "name": "ROUTE 11 - OUTSIDE - Route Connector Right - 3A,A",
        "level": "3", 
        "to" : "FR,22,0,2"
    },
/* ROUTE 11 - INT */
    "FR,22,0,0" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Left - 1,6",
        "level": "3", 
        "to" : "FR,3,29,1",
        "connections" : {
            "FR,22,0,2": true,
            "FR,22,0,4": true
        }
    },
    "FR,22,0,2" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Right - 9,A",
        "level": "3", 
        "to" : "FR,3,29,2",
        "connections" : {
            "FR,22,0,0": true,
            "FR,22,0,4": true
        }
    },
    "FR,22,0,4" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Stairs - B,6",
        "level": "3", 
        "to" : "FR,22,1,0",
        "connections" : {
            "FR,22,0,0": true,
            "FR,22,0,2": true
        }
    },
    "FR,22,1,0" : {
        "name": "ROUTE 11 - INSIDE - Route Connector Upstairs - A,9",
        "level": "3", 
        "to" : "FR,22,0,4"
    },
/* Digglet Cave */
// Pewter Side
    "FR,1,36,0" : {
        "name": "DIGGLET CAVE - INSIDE - Pewter Side Ladder - 6,4",
        "level": "3", 
        "to" : "FR,3,37,0",
        "connections" : {
            "FR,1,36,1": true
        }
    },
    "FR,1,36,1" : {
        "name": "DIGGLET CAVE - INSIDE - Pewter Side Enterance - 6,4",
        "level": "3", 
        "to" : "FR,3,20,3",
        "connections" : {
            "FR,1,36,0": true
        }
    },
// Long Cave
    "FR,1,37,0" : {
        "name": "DIGGLET CAVE - INSIDE - Long Cave Top - 3,3",
        "level": "3", 
        "to" : "FR,1,36,0",
        "connections" : {
            "FR,1,37,1": true
        }
    },
    "FR,1,37,1" : {
        "name": "DIGGLET CAVE - INSIDE - Long Cave Bottom - 52,47",
        "level": "3", 
        "to" : "FR,1,38,1",
        "connections" : {
            "FR,1,37,0": true
        }
    },
// Pewter Side
    "FR,1,38,0" : {
        "name": "DIGGLET CAVE - INSIDE - Vermillion Side Enterance - 4,6",
        "level": "3", 
        "to" : "FR,1,37,1",
        "connections" : {
            "FR,1,38,1": true
        }
    },
    "FR,1,38,1" : {
        "name": "DIGGLET CAVE - INSIDE - Vermillion Side Ladder - 6,4",
        "level": "3", 
        "to" : "FR,2,29,0",
        "connections" : {
            "FR,1,38,0": true
        }
    },
/* S.S ANNE */
// F1
    "FR,1,5,0" : {
        "name": "S.S ANNE - INSIDE - F1 Top Right Stairs - 3,8",
        "level": "3", 
        "to" : "FR,1,6,0",
        "connections" : {
            "FR,3,5,4": true,
            "FR,1,5,1": true,
            "FR,1,5,5": true,
            "FR,1,5,6": true,
            "FR,1,5,7": true,
            "FR,1,5,8": true,
            "FR,1,5,9": true,
            "FR,1,5,10": true,
            "FR,1,5,11": true,
            "FR,1,5,12": true,
        }
    },
    "FR,1,5,1" : {
        "name": "S.S ANNE - INSIDE - F1 Kitchen Door - 2,12",
        "level": "3", 
        "to" : "FR,1,10,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,5" : {
        "name": "S.S ANNE - INSIDE - F1 Bottom Right Stairs - 1C,11",
        "level": "3", 
        "to" : "FR,1,8,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,6" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 1 - 5,A",
        "level": "3", 
        "to" : "FR,1,12,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,7" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 2 - 8,A",
        "level": "3", 
        "to" : "FR,1,13,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,8" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 3 - B,A",
        "level": "3", 
        "to" : "FR,1,14,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,9" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 4 - E,A",
        "level": "3", 
        "to" : "FR,1,15,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,10" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 5 - 11,A",
        "level": "3", 
        "to" : "FR,1,16,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,11" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 7 - 17,A",
        "level": "3", 
        "to" : "FR,1,17,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
    "FR,1,5,12" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 6 - 14,A",
        "level": "3", 
        "to" : "FR,1,29,0",
        "connections" : {
            "FR,1,5,0": true,
        }
    },
// F2
    "FR,1,6,0" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Top Left - 2,2",
        "level": "3", 
        "to" : "FR,1,5,0",
        "connections" : {
            "FR,1,6,1": true,
            "FR,1,6,2": true,
            "FR,1,6,3": true,
            "FR,1,6,4": true,
            "FR,1,6,5": true,
            "FR,1,6,6": true,
            "FR,1,6,7": true,
            "FR,1,6,8": true
        }
    },
    "FR,1,6,1" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Bottom Left - 3,C",
        "level": "3", 
        "to" : "FR,1,1,7",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,2" : {
        "name": "S.S ANNE - INSIDE - F2 Stairs Top right - 1E,2",
        "level": "3", 
        "to" : "FR,1,11,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,3" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 1 - 6,A",
        "level": "3", 
        "to" : "FR,1,18,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,4" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 2 - A,A",
        "level": "3", 
        "to" : "FR,1,19,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,5" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 3 - E,A",
        "level": "3", 
        "to" : "FR,1,20,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,6" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 4 - A,A",
        "level": "3", 
        "to" : "FR,1,21,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,7" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 5 - 16,A",
        "level": "3", 
        "to" : "FR,1,22,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
    "FR,1,6,8" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 6 - 1A,A",
        "level": "3", 
        "to" : "FR,1,23,0",
        "connections" : {
            "FR,1,6,0": true
        }
    },
// F3
    "FR,1,7,0" : {
        "name": "S.S ANNE - INSIDE - F3 (Corridor) Left door - 1,4",
        "level": "3", 
        "to" : "FR,1,9,0",
        "connections" : {
            "FR,1,7,1": true
        }
    },
    "FR,1,7,1" : {
        "name": "S.S ANNE - INSIDE - F3 (Corridor) Right stairs - 12,2",
        "level": "3", 
        "to" : "FR,1,6,1",
        "connections" : {
            "FR,1,7,0": true
        }
    },
// F4
    "FR,1,8,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Stairs - 13,3",
        "level": "3", 
        "to" : "FR,1,5,5",
        "connections" : {
            "FR,1,8,1": true,
            "FR,1,8,2": true,
            "FR,1,8,3": true,
            "FR,1,8,4": true,
            "FR,1,8,5": true
        }
    },
    "FR,1,8,1" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 1 - 2,2",
        "level": "3", 
        "to" : "FR,1,24,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,2" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 2 - 6,2",
        "level": "3", 
        "to" : "FR,1,25,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,3" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 3 - 6,2",
        "level": "3", 
        "to" : "FR,1,25,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,4" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 4 - E,2",
        "level": "3", 
        "to" : "FR,1,27,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
    "FR,1,8,5" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 5 - 12,2",
        "level": "3", 
        "to" : "FR,1,28,0",
        "connections" : {
            "FR,1,8,0": true
        }
    },
// Bow
    "FR,1,9,0" : {
        "name": "S.S ANNE - INSIDE - Bow - 10,8",
        "level": "3", 
        "to" : "FR,1,7,0",
        "grouped" : ["FR,1,9,1"],
        "groupMain" : true
    },
    "FR,1,9,1" : {
        "name": "S.S ANNE - INSIDE - Bow - 10,9",
        "level": "3", 
        "to" : "FR,1,7,0",
        "grouped" : ["FR,1,9,0"]
    },
// Kitchen
    "FR,1,10,0" : {
        "name": "S.S ANNE - INSIDE - Kitchen - 7,1",
        "level": "3", 
        "to" : "FR,1,5,1"
    },
// Rooms
    "FR,1,11,0" : {
        "name": "S.S ANNE - INSIDE - Capains Cabin (cut) - 3,7",
        "level": "3", 
        "to" : "FR,1,6,2"
    },
    "FR,1,12,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 1 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,6"
    },
    "FR,1,13,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 2 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,7"
    },
    "FR,1,14,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 3 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,8"
    },
    "FR,1,15,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 4 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,9"
    },
    "FR,1,16,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 5 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,10"
    },
    "FR,1,17,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 7 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,11"
    },
    "FR,1,29,0" : {
        "name": "S.S ANNE - INSIDE - F1 Cabin 6 - 2,1",
        "level": "3", 
        "to" : "FR,1,5,12"
    },
    "FR,1,18,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 1 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,3"
    },
    "FR,1,19,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 2 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,4"
    },
    "FR,1,20,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 3 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,5"
    },
    "FR,1,21,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 4 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,6"
    },
    "FR,1,22,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 5 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,7"
    },
    "FR,1,23,0" : {
        "name": "S.S ANNE - INSIDE - F2 Cabin 6 - 4,7",
        "level": "3", 
        "to" : "FR,1,6,8"
    },
    "FR,1,24,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 1 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,1",
        "ignore": true
    },
    "FR,1,25,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 2 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,2",
        "ignore": true
    },
    "FR,1,26,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 3 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,3",
        "ignore": true
    },
    "FR,1,27,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 4 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,4",
        "ignore": true
    },
    "FR,1,28,0" : {
        "name": "S.S ANNE - INSIDE - F4 (Bellow Deck) Cabin 5 - 4,7",
        "level": "3", 
        "to" : "FR,1,8,5",
        "ignore": true
    },
}

