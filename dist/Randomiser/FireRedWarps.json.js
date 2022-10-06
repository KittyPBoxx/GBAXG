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
        "to": "FR,5,4,1"
    },
    "FR,3,1,1" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Top - 19,B",
        "level": "1", 
        "to" : "FR,5,0,1"
    },
    "FR,3,1,2" : {
        "name": "VIRIDIAN CITY - OUTSIDE - GYM - 24,A",
        "to" : "FR,5,1,1"
    },
    "FR,3,1,3" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Bottom (School) - 19,12",
        "level": "1", 
        "to" : "FR,5,2,1"
    },
    "FR,3,1,4" : {
        "name": "VIRIDIAN CITY - OUTSIDE - Mart - 24,13",
        "level": "1", 
        "to" : "FR,5,3,1"
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
        "groupMain" : true
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
        "to" : "FR,5,5,0"
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
        "to": "FR,6,0,1"
    },
    "FR,3,2,1" : {
        // MUSEUM BACK
        "name": "PEWTER CITY - OUTSIDE - Museum (Back) - 19,4",
        "level": "1", 
        "to" : "E6,0,3"
    },
    "FR,3,2,2" : {
        // GYM
        "name": "PEWTER CITY - OUTSIDE - Gym - F,10",
        "level": "1", 
        "to" : "E6,2,1"
    },
    "FR,3,2,3" : {
        // MART
        "name": "PEWTER CITY - OUTSIDE - Mart - 1C,12",
        "level": "1", 
        "to" : "E6,3,1"
    },
    "FR,3,2,4" : {
        "name": "PEWTER CITY - OUTSIDE - Top Right - 21,B",
        "level": "1", 
        "to" : "E6,4,1"
    },
    "FR,3,2,5" : {
        // PK
        "name": "PEWTER CITY - OUTSIDE - PkCenter - 11,19",
        "level": "1", 
        "to" : "E6,5,1"
    },
    "FR,3,2,6" : {
        "name": "PEWTER CITY - OUTSIDE - Bottom Left - 9,1E",
        "level": "1", 
        "to" : "E6,7,1"
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
        "groupMain" : true
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
        "to": "FR,6,1,0"
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
        "groupMain" : true
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
        "to" : "FR,6,6,0"
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
        "to" : "FR,28,0,2"
    },
/* ROUTE 22 - INT */ 
    "FR,28,0,0" : {
        "name": "ROUTE 22 - INSIDE - League Front Gate (Guard Door) - 7,1",
        "level": "1", 
        "to" : "FR,3,42,2"
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
        "groupMain" : true
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
        "groupMain" : true
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
        "groupMain" : true
    },
    "FR,3,20,9" : {
        "name": "ROUTE 2 - OUTSIDE - Left Route Connector (VIRIDIAN side) - 6,33",
        "level": "1", 
        "to" : "FR,15,0,1",
        "grouped" : ["FR,3,20,2"]
    },
    "FR,3,20,4" : {
        "name": "ROUTE 2 - OUTSIDE - House (abra, mr mime trade) - 11,16",
        "to" : "FR,15,1,1"
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
        "to" : "FR,1,36,1"
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
        "groupMain" : true
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
        "to" : "FR,1,0,0"
    },
    "FR,15,1,0" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 3,7",
        "to" : "FR,3,20,4",
        "grouped" : ["FR,15,1,1", "FR,15,1,2"]
    },
    "FR,15,1,1" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 4,7",
        "to" : "FR,3,20,4",
        "grouped" : ["FR,15,1,0", "FR,15,1,2"],
        "groupMain" : true
    },
    "FR,15,1,2" : {
        "name": "ROUTE 2 - INSIDE - House (abra, mr mime trade) - 5,7",
        "to" : "FR,3,20,4",
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
        "groupMain" : true
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
        "to" : "FR,3,20,0"
    },
/* VIRIDIAN FOREST */
    "FR,1,0,5" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - PEWTER CITY SIDE (Exit) - 4,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,3"],
    },
    "FR,1,0,2" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - PEWTER CITY SIDE (Exit) - 5,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,5", "FR,1,0,3"],
        "groupMain" : true
    },
    "FR,1,0,3" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - PEWTER CITY SIDE (Exit) - 6,9",
        "level": "1", 
        "to" : "FR,15,3,1",
        "grouped" : ["FR,1,0,2", "FR,1,0,5"],
    },
    "FR,1,0,1" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1C,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,4"],
    },
    "FR,1,0,0" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1D,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,1", "FR,1,0,4"],
        "groupMain" : true
    },
    "FR,1,0,4" : {
        "name": "VIRIDIAN WOODS - OUTSIDE - VIRIDIAN SIDE (Enterance) - 1E,3E",
        "level": "1", 
        "to" : "FR,15,0,3",
        "grouped" : ["FR,1,0,0", "FR,1,0,1"],
    },
}

