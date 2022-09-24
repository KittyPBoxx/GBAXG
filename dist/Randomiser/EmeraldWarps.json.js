var EMERALD_WARPS = 
{
/* PETALBURG CITY - EXT */
    "E0,0,0" : {
        "to": "E8,2,0"
    },
    "E0-0-1" : {
        "to": "E8,0,0"
    },
    "E0-0-2" : {
        // GYM
        "to": "E8,1,0"
    },
    "E0-0-3" : {
        // PK
        "to": "E8,4,0"
    },
    "E0-0-4" : {
        "to": "E8,3,0"
    },
    "E0-0-5" : {
        // MART
        "to": "E8,6,0"
    },
/* PETALBURG CITY - INT */
    "E8,0,0" : {
        "to": "E0,0,1",
        "grouped": "E8,0,1",
        "groupMain" : true
    },
    "E8,0,1" : {
        "to": "E0,0,1",
        "grouped":"E8,0,0"
    },
    "E8,1,0": {
        // GYM
        "to": "E0,0,2",
        "grouped": "E8,1,1",
        "groupMain" : true
    },
    "E8,1,1": {
        // GYM
        "to": "E0,0,2",
        "grouped": "E8,1,0"
    },
    "E8,2,0" : {
        "to": "E0,0,0",
        "grouped": "E8,2,1",
        "groupMain" : true
    },
    "E8,2,1" : {
        "to": "E0,0,1",
        "grouped":"E8,2,1"
    },
    "E8,3,0" : {
        "to": "E0,0,4",
        "grouped": "E8,3,1",
        "groupMain" : true
    },
    "E8,3,1" : {
        "to": "E0,0,4",
        "grouped":"E8,3,0"
    },
    "E8,4,0" : {
        // PK
        "to": "E0,0,3",
        "grouped": "E8,4,1",
        "groupMain" : true
    },
    "E8,4,1" : {
        // PK
        "to": "E0,0,3",
        "grouped":"E8,4,0"
    },
    "E8,4,2" : {
        // PK
        "to": "E8,5,0"
    },
    "E8,5,0" : {
        // PK (upstairs)
        "to": "E8,4,2",
        "ignore": true
    },
    "E8,6,0" : {
        // MART
        "to": "E0,0,5",
        "grouped": "E8,6,1",
        "groupMain" : true
    },
    "E8,6,1" : {
        // MART
        "to": "E0,0,5",
        "grouped":"E8,6,0"
    },
/* SLATEPORT CITY - EXT */
    "E0,1,0" : {
        // PK
        "to" : "E9,11,0"
    },
    "E0,1,1" : {
        // MART
        "to" : "E9,13,0"
    },
    "E0,1,2" : {
        "to" : "E9,0,0"
    },
    "E0,1,3" : {
        // BATTLE HALL
        "to" : "E9,2,0"
    },
    "E0,1,4" : {
        "to" : "E9,6,0"
    },
    "E0,1,5" : {
        // MUSEUM
        "to" : "E9,7,0",
        "grouped": "E0,1,7",
        "groupMain" : true
    },
    "E0,1,6" : {
        "to" : "E9,5,0"
    },
    "E0,1,7" : {
        // MUSEUM
        "to" : "E9,7,1",
        "grouped" : "E0,1,5"
    },
    "E0,1,8" : {
        "to" : "E9,9,0"
    },
    "E0,1,9" : {
        // SHIP ARRIVING?
        "to" : "E9,9,2",
        "ignore": true
    },
    "E0,1,10" : {
        // DUPLICATE
        "to" : "E9,10,0",
        "ignore": true
    },
/* SLATEPORT CITY - INT */
    "E9,0,0" : {
        "to": "E0,1,2",
        "grouped": "E9,0,1",
        "groupMain" : true
    },
    "E9,0,1" : {
        "to": "E0,1,2",
        "grouped":"E9,0,0"
    },
    "E9,0,2" : {
        "to": "E9,1,0"
    },
    "E9,1,0" : {
        "to": "E9,0,2"
    },
    "E9,2,0" : {
        // BATTLE HALL
        "to": "E0,1,3",
        "grouped": "E9,2,1",
        "groupMain" : true,
        "ignore": true
    },
    "E9,2,1" : {
        // BATTLE HALL
        "to": "E0,1,3",
        "grouped":"E9,2,0",
        "ignore": true
    },
    "E9,5,0" : {
        "to": "E0,1,6",
        "grouped": "E9,5,1",
        "groupMain" : true
    },
    "E9,5,1" : {
        "to": "E0,1,6",
        "grouped":"E9,5,0"
    },
    "E9,6,0" : {
        "to": "E0,1,4",
        "grouped": "E9,6,1",
        "groupMain" : true
    },
    "E9,6,1" : {
        "to": "E0,1,4",
        "grouped":"E9,6,0"
    },
    "E9,7,0" : {
        "to": "E0,1,5",
        "grouped": "E9,7,1",
        "groupMain" : true
    },
    "E9,7,1" : {
        "to": "E0,1,7",
        "grouped":"E9,7,0"
    },
    "E9,7,2" : {
        "to": "E9,8,0"
    },
    "E9,8,0" : {
        "to": "E9,7,2"
    },
    "E9,9,0" : {
        "to": "E0,1,8",
        "grouped": "E9,9,1",
        "groupMain" : true
    },
    "E9,9,1" : {
        "to": "E0,1,8",
        "grouped":"E9,9,0"
    },
    "E9,10,0" : {
        "to": "E0,1,10",
        "grouped": "E9,10,0",
        "groupMain" : true
    },
    "E9,10,1" : {
        "to": "E0,1,10",
        "grouped":"E9,10,1"
    },
    "E9,11,0" : {
        // PK
        "to": "E0,1,0",
        "grouped": "E9,11,1",
        "groupMain" : true
    },
    "E9,11,1" : {
        // PK
        "to": "E0,1,0",
        "grouped":"E9,11,0"
    },
    "E9,11,2" : {
        // PK
        "to": "E9,12,0"
    },
    "E9,12,0" : {
        // PK (upstairs)
        "to": "E9,11,2",
        "ignore": true
    },
    "E9,13,0" : {
        // MART
        "to": "E0,1,1",
        "grouped": "E9,13,1",
        "groupMain" : true
    },
    "E9,13,1" : {
        // MART
        "to": "E0,1,1",
        "grouped":"E9,13,0"
    },
/* MAUVILLE CITY - EXT */
    "E0,2,0" : {
        // GYM
        "to" : "E10,0,0"
    },
    "E0,2,1" : {
        //PK
        "to" : "E10,5,0"
    },
    "E0,2,2" : {
        //BIKE
        "to" : "E10,1,0"
    },
    "E0,2,3" : {
        // MART
        "to" : "E10,7,0"
    },
    "E0,2,4" : {
        "to" : "E10,2,0"
    },
    "E0,2,5" : {
        // GAME CORNER
        "to" : "E10,3,0"
    },
    "E0,2,6" : {
        "to" : "E10,4,0"
    },
/* RUSTBORO CITY - EXT */
    "E0,3,0" : {
        // GYM
        "to" : "E11,3,0"
    },
    "E0,3,1" : {
        "to" : "E11,8,0"
    },
    "E0,3,2" : {
        // MART
        "to" : "E11,7,0"
    },
    "E0,3,3" : {
        // PK
        "to" : "E11,5,0"
    },
    "E0,3,4" : {
        // SCHOOL
        "to" : "E11,4,0"
    },
    "E0,3,5" : {
        "to" : "E11,0,0",
        "grouped": "E0,3,6",
        "groupMain" : true
    },
    "E0,3,6" : {
        "to" : "E11,0,1",
        "grouped": "E0,3,5"
    },
    "E0,3,7" : {
        "to" : "E11,10,0"
    },
    "E0,3,8" : {
        "to" : "E11,11,0"
    },
    "E0,3,9" : {
        "to" : "E11,12,0"
    },
    "E0,3,10" : {
        "to" : "E11,13,0"
    },
    "E0,3,11" : {
        "to" : "E11,16,0"
    },
/* RUSTBORO CITY - INT */
    "E11,0,0" : {
        "to" : "E0,3,5",
        "grouped": "E11,0,1",
        "groupMain" : true
    },
    "E11,0,1" : {
        "to" : "E0,3,5",
        "grouped" : "E11,0,0"
    },
    "E11,0,2" : {
        "to" : "E11,1,0"
    },
    "E11,1,0" : {
        "to" : "E11,0,2"
    },
    "E11,1,1" : {
        "to" : "E11,2,0"
    },
    "E11,2,0" : {
        // DIRECTOR GUY
        "to" : "E11,1,1"
    },
    "E11,3,0" : {
        // GYM
        "to" : "E0,3,0",
        "grouped" : "E11,3,1",
        "groupMain" : true
    },
    "E11,3,1" : {
        // GYM
        "to" : "E0,3,0",
        "grouped" : "E11,3,0"
    },
    "E11,4,0" : {
        // SCHOOL
        "to" : "E0,3,4",
        "grouped" : "E11,4,1",
        "groupMain" : true
    },
    "E11,4,1" : {
        // SCHOOL
        "to" : "E0,3,4",
        "grouped" : "E11,4,0"
    },
    "E11,5,0" : {
        // PK
        "to" : "E0,3,3",
        "grouped" : "E11,5,1",
        "groupMain" : true
    },
    "E11,5,1" : {
        // PK
        "to" : "E0,3,3",
        "grouped" : "E11,5,0"
    },
    "E11,5,2" : {
        // PK
        "to" : "E11,6,0"
    },
    "E11,6,0" : {
        "to" : "E,11,5,2",
        "ignore" : true
    },
    "E11,7,0" : {
        // MART
        "to" : "E0,3,2",
        "grouped" : "E11,7,1",
        "groupMain" : true
    },
    "E11,7,1" : {
        // MART
        "to" : "E0,3,2",
        "grouped" : "E11,7,0"
    },
    "E11,8,0" : {
        "to" : "E0,3,1",
        "grouped" : "E11,8,1",
        "groupMain" : true
    },
    "E11,8,1" : {
        "to" : "E0,3,1",
        "grouped" : "E11,8,0"
    },
    "E11,8,2" : {
        "to" : "E11,9,0"
    },
    "E11,9,0" : {
        "to" : "E11,8,2"
    },
    "E11,10,0" : {
        "to" : "E0,3,7",
        "grouped" : "E11,10,1",
        "groupMain" : true
    },
    "E11,10,1" : {
        "to" : "E0,3,7",
        "grouped" : "E11,10,0"
    },
    "E11,11,0" : {
        "to" : "E0,3,8",
        "grouped" : "E11,11,1",
        "groupMain" : true
    },
    "E11,11,1" : {
        "to" : "E0,3,8",
        "grouped" : "E11,11,0"
    },
    "E11,12,0" : {
        "to" : "E0,3,9",
        "grouped" : "E11,12,1",
        "groupMain" : true
    },
    "E11,12,1" : {
        "to" : "E0,3,9",
        "grouped" : "E11,12,0"
    },
    "E11,13,0" : {
        "to" : "E0,3,10",
        "grouped" : "E11,13,1",
        "groupMain" : true
    },
    "E11,13,1" : {
        "to" : "E0,3,10",
        "grouped" : "E11,13,0"
    },
    "E11,13,2" : {
        "to" : "E11,14,0"
    },
    "E11,14,0" : {
        "to" : "E11,13,2"
    },
    "E11,14,1" : {
        "to" : "E11,15,0"
    },
    "E11,15,0" : {
        "to" : "E11,14,1"
    },
    "E11,16,0" : {
        "to" : "E0,3,11",
        "grouped" : "E11,16,1",
        "groupMain" : true
    },
    "E11,16,1" : {
        "to" : "E0,3,11",
        "grouped" : "E11,16,0"
    },
/* FORTREE CITY - EXT */
    "E0,4,0" : {
        // PK
        "to" : "E12,2,0"
    },
    "E0,4,1" : {
        "to" : "E12,0,0"
    },
    "E0,4,2" : {
        // GYM
        "to" : "E12,1,0"
    },
    "E0,4,3" : {
        // MART
        "to" : "E12,4,0"
    },
    "E0,4,4" : {
        "to" : "E12,5,0"
    },
    "E0,4,5" : {
        "to" : "E12,6,0"
    },
    "E0,4,6" : {
        "to" : "E12,7,0"
    },
    "E0,4,7" : {
        "to" : "E12,8,0"
    },
    "E0,4,8" : {
        "to" : "E12,9,0"
    },
/* LILYCOVE CITY - EXT */
    "E0,5,0" : {
        // DEPT
        "to" : "E13,16,0"
    },
    "E0,5,1" : {
        "to" : "E13,0,0"
    },
    "E0,5,2" : {
        // PK
        "to" : "E13,6,0"
    },
    "E0,5,3" : {
        // MUSEUM
        "to" : "E13,2,0",
        "grouped" : "E0,5,13",
        "groupMain" : true
    },
    "E0,5,4" : {
        // CONTEST HALL
        "to" : "E13,4,0"
    },
    "E0,5,5" : {
        "to" : "E13,9,0"
    },
    "E0,5,6" : {
        "to" : "E24,23,0"
    },
    "E0,5,7" : {
        "to" : "E13,11,0"
    },
    "E0,5,8" : {
        "to" : "E13,12,0"
    },
    "E0,5,9" : {
        "to" : "E13,13,0"
    },
    "E0,5,10" : {
        "to" : "E13,14,0"
    },
    "E0,5,11" : {
        "to" : "E13,15,0"
    },
    "E0,5,12" : {
        "to" : "E13,10,0"
    },
    "E0,5,13" : {
        // MUSEUM
        "to" : "E13,2,1",
        "grouped": "E0,5,3"
    },
/* MOSSDEEP CITY - EXT */
    "E0,6,0" : {
        "to" : "E14,1,0"
    },
    "E0,6,1" : {
        // GYM
        "to" : "E14,0,0"
    },
    "E0,6,2" : {
        // PK
        "to" : "E14,3,0"
    },
    "E0,6,3" : {
        "to" : "E14,2,0"
    },
    "E0,6,4" : {
        // MART
        "to" : "E14,5,0"
    },
    "E0,6,5" : {
        "to" : "E14,6,0"
    },
    "E0,6,6" : {
        // STEVENS HOUSE
        "to" : "E14,7,0"
    },
    "E0,6,7" : {
        "to" : "E14,8,0"
    },
    "E0,6,8" : {
        // SPACE
        "to" : "E14,9,0"
    },
    "E0,6,9" : {
        // MINI GAME PLACE
        "to" : "E14,11,0"
    },
/* SOOTOPOLIS CITY - EXT */
    "E0,7,0"  : {
        // PK
        "to" : "E15,2,0"
    },
    "E0,7,1"  : {
        // MART
        "to" : "E15,4,0"
    },
    "E0,7,2"  : {
        // GYM
        "to" : "E15,0,0"
    },
    "E0,7,3"  : {
        // CAVE OF ORIGIN
        "to" : "E24,37,0"
    },
    "E0,7,4"  : {
        "to" : "E15,5,0"
    },
    "E0,7,5"  : {
        "to" : "E15,6,0"
    },
    "E0,7,6"  : {
        "to" : "E15,7,0"
    },
    "E0,7,7"  : {
        "to" : "E15,8,0"
    },
    "E0,7,8"  : {
        "to" : "E15,9,0"
    },
    "E0,7,9"  : {
        "to" : "E15,10,0"
    },
    "E0,7,10" : {
        "to" : "E15,11,0"
    },
    "E0,7,11" : {
        "to" : "E15,12,0"
    },
    "E0,7,12" : {
        // E-READER HOUSE
        "to" : "E15,13,0"
    },
/* EVER GRANDE CITY - EXT */
    "E0,8,0" : {
        // E4 Entrance way
        "to" : "E16,10,0"
    },
    "E0,8,1" : {
        // PK
        "to" : "E16,12,0"
    },
    "E0,8,2" : {
        //VICTORY ROAD Enterance
        "to" : "E24,43,0"
    },
    "E0,8,3" : {
        //VICTORY ROAD Exit
        "to" : "E24,43,1"
    },
/* LITTLE ROOT TOWN - EXT */
    "E0,9,0" : {
        // GIRL HOUSE
        "to" : "E1,2,1"
    },
    "E0,9,1" : {
        // BOY HOUSE
        "to" : "E1,0,1"
    },
    "E0,9,2" : {
        // ELMS LAB
        "to" : "E1,4,0"
    },
/* LITTLE ROOT TOWN - INT */
    "E1,0,0" : {
        "to": "E0,9,1",
        "grouped": "E1,0,1",
        "groupMain" : true
    },
    "E1,0,1" : {
        "to": "E0,9,1",
        "grouped":"E1,0,0"
    },
    "E1,0,2" : {
        "to": "E1,1,0"
    },
    "E1,1,0" : {
        "to": "E1,0,2"
    },
    "E1,2,0" : {
        "to": "E0,9,0",
        "grouped": "E1,2,1",
        "groupMain" : true
    },
    "E1,2,1" : {
        "to": "E0,9,0",
        "grouped":"E1,2,0"
    },
    "E1,2,2" : {
        "to": "E1,3,0"
    },
    "E1,3,0" : {
        "to": "E1,2,2"
    },
    "E1,4,0" : {
        "to": "E0,9,2",
        "grouped": "E1,4,1",
        "groupMain" : true
    },
    "E1,4,1" : {
        "to": "E0,9,2",
        "grouped":"E1,4,0"
    },
/* OLDALE TOWN - EXT */
    "E0,10,0" : { 
        "to" : "E2,0,0"
    },
    "E0,10,1" : { 
        "to" : "E2,1,0"
    },
    "E0,10,2" : { 
        // PK
        "to" : "E2,2,0"
    },
    "E0,10,3" : { 
        // MART
        "to" : "E2,4,0"
    },
/* OLDALE TOWN - INT */
    "E2,0,0" : {
        "to": "E0,10,1",
        "grouped": "E2,0,1",
        "groupMain" : true
    },
    "E2,0,1" : {
        "to": "E0,10,0",
        "grouped":"E2,0,0"
    },
    "E2,1,0" : {
        "to": "E0,10,1",
        "grouped": "E2,1,1",
        "groupMain" : true
    },
    "E2,1,1" : {
        "to": "E0,10,1",
        "grouped":"E2,1,0"
    },
    "E2,2,0" : {
        // PK
        "to": "E0,10,2",
        "grouped": "E2,2,1",
        "groupMain" : true
    },
    "E2,2,1" : {
        // PK
        "to": "E0,10,2",
        "grouped":"E2,2,0"
    },
    "E2,2,2" : {
        // PK
        "to": "E2,3,0"
    },
    "E2,3,0" : {
        // PK (upstairs)
        "to": "E2,2,2",
        "ignore": true
    },
    "E2,4,0" : {
        // MART
        "to": "E0,10,3",
        "grouped": "E2,4,1",
        "groupMain" : true
    },
    "E2,4,1" : {
        // MART
        "to": "E0,10,3",
        "grouped":"E2,4,0"
    },
/* DEWFORD CITY - EXT */
    "E0,11,0" : {
        "to" : "E3,4,0"
    },
    "E0,11,1" : {
        // PK
        "to" : "E3,1,0"
    },
    "E0,11,2" : {
        // GYM
        "to" : "E3,3,0"
    },
    "E0,11,3" : {
        "to" : "E3,0,0"
    },
    "E0,11,4" : {
        "to" : "E3,5,0"
    },
/* LAVARIDGE CITY - EXT */
    "E0,12,0" : {
        // HERB SHOP
        "to" : "E4,0,0"
    },
    "E0,12,1" : {
        // GYM
        "to" : "E4,1,0"
    },
    "E0,12,2" : {
        // MART
        "to" : "E4,4,0"
    },
    "E0,12,3" : {
        // PK
        "to" : "E4,5,0"
    },
    "E0,12,4" : {
        "to" : "E4,3,0"
    },
    "E0,12,5" : {
        // PK (back)
        "to" : "E4,5,3"
    },
/* FALLARBOR CITY - EXT */
    "E0,13,0" : {
        // MART
        "to" : "E5,0,0"
    },
    "E0,13,1" : {
        // BATTLE HALL
        "to" : "E5,1,0"
    },
    "E0,13,2" : {
        // PK
        "to" : "E5,4,0"
    },
    "E0,13,3" : {
        "to" : "E5,3,0"
    },
    "E0,13,4" : {
        "to" : "E5,7,0"
    },
/* VERDANTURF CITY - EXT */
    "E0,14,0" : {
        // BATTLE HALL
        "to" : "E6,0,0"
    },
    "E0,14,1" : {
        // MART
        "to" : "E6,3,0"
    },
    "E0,14,2" : {
        // PK
        "to" : "E6,4,0"
    },
    "E0,14,3" : {
        "to" : "E6,6,0"
    },
    "E0,14,4" : {
        //RUSTURF TUNNEL (left exit)
        "to" : "E24,4,1"
    },
    "E0,14,5" : {
        "to" : "E6,7,0"
    },
    "E0,14,6" : {
        "to" : "E6,8,0"
    },
/* PACIFIDLOG CITY - EXT */
    "E0,15,0" : {
        // PK
        "to" : "E7,0,0"
    },
    "E0,15,1" : {
        "to" : "E7,2,0"
    },
    "E0,15,2" : {
        "to" : "E7,3,0"
    },
    "E0,15,3" : {
        "to" : "E7,4,0"
    },
    "E0,15,4" : {
        "to" : "E7,5,0"
    },
    "E0,15,5" : {
        "to" : "E7,6,0"
    }
}