var EMERALD_WARPS = 
{
/* PETALBURG CITY - EXT */
    "E,0,0,0" : {
        "to": "E,8,2,0"
    },
    "E,0,0,1" : {
        "to": "E,8,0,0"
    },
    "E,0,0,2" : {
        // GYM
        "to": "E,8,1,0"
    },
    "E,0,0,3" : {
        // PK
        "to": "E,8,4,0"
    },
    "E,0,0,4" : {
        "to": "E,8,3,0"
    },
    "E,0,0,5" : {
        // MART
        "to": "E,8,6,0"
    },
/* PETALBURG CITY - INT */
    "E,8,0,0" : {
        "to": "E,0,0,1",
        "grouped": "E,8,0,1",
        "groupMain" : true
    },
    "E,8,0,1" : {
        "to": "E,0,0,1",
        "grouped":"E,8,0,0"
    },
    "E,8,1,0": {
        // GYM
        "to": "E,0,0,2",
        "grouped": "E,8,1,1",
        "groupMain" : true
    },
    "E,8,1,1": {
        // GYM
        "to": "E,0,0,2",
        "grouped": "E,8,1,0"
    },
    "E,8,2,0" : {
        "to": "E,0,0,0",
        "grouped": "E,8,2,1",
        "groupMain" : true
    },
    "E,8,2,1" : {
        "to": "E,0,0,1",
        "grouped":"E,8,2,1"
    },
    "E,8,3,0" : {
        "to": "E,0,0,4",
        "grouped": "E,8,3,1",
        "groupMain" : true
    },
    "E,8,3,1" : {
        "to": "E,0,0,4",
        "grouped":"E,8,3,0"
    },
    "E,8,4,0" : {
        // PK
        "to": "E,0,0,3",
        "grouped": "E,8,4,1",
        "groupMain" : true
    },
    "E,8,4,1" : {
        // PK
        "to": "E,0,0,3",
        "grouped":"E,8,4,0"
    },
    "E,8,4,2" : {
        // PK
        "to": "E,8,5,0"
    },
    "E,8,5,0" : {
        // PK (upstairs)
        "to": "E,8,4,2",
        "ignore": true
    },
    "E,8,6,0" : {
        // MART
        "to": "E,0,0,5",
        "grouped": "E,8,6,1",
        "groupMain" : true
    },
    "E,8,6,1" : {
        // MART
        "to": "E,0,0,5",
        "grouped":"E,8,6,0"
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
        "grouped": "E,0,1,7",
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
        "grouped": "E,9,0,1",
        "groupMain" : true
    },
    "E,9,0,1" : {
        "to": "E,0,1,2",
        "grouped":"E,9,0,0"
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
        "grouped": "E,9,2,1",
        "groupMain" : true,
        "ignore": true
    },
    "E,9,2,1" : {
        // BATTLE HALL
        "to": "E,0,1,3",
        "grouped":"E,9,2,0",
        "ignore": true
    },
    "E,9,5,0" : {
        "to": "E,0,1,6",
        "grouped": "E,9,5,1",
        "groupMain" : true
    },
    "E,9,5,1" : {
        "to": "E,0,1,6",
        "grouped":"E,9,5,0"
    },
    "E,9,6,0" : {
        "to": "E,0,1,4",
        "grouped": "E,9,6,1",
        "groupMain" : true
    },
    "E,9,6,1" : {
        "to": "E,0,1,4",
        "grouped":"E,9,6,0"
    },
    "E,9,7,0" : {
        "to": "E,0,1,5",
        "grouped": "E,9,7,1",
        "groupMain" : true
    },
    "E,9,7,1" : {
        "to": "E,0,1,7",
        "grouped":"E,9,7,0"
    },
    "E,9,7,2" : {
        "to": "E,9,8,0"
    },
    "E,9,8,0" : {
        "to": "E,9,7,2"
    },
    "E,9,9,0" : {
        "to": "E,0,1,8",
        "grouped": "E,9,9,1",
        "groupMain" : true
    },
    "E,9,9,1" : {
        "to": "E,0,1,8",
        "grouped":"E,9,9,0"
    },
    "E,9,10,0" : {
        "to": "E,0,1,10",
        "grouped": "E,9,10,0",
        "groupMain" : true
    },
    "E,9,10,1" : {
        "to": "E,0,1,10",
        "grouped":"E,9,10,1"
    },
    "E,9,11,0" : {
        // PK
        "to": "E,0,1,0",
        "grouped": "E,9,11,1",
        "groupMain" : true
    },
    "E,9,11,1" : {
        // PK
        "to": "E,0,1,0",
        "grouped":"E,9,11,0"
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
        "grouped": "E,9,13,1",
        "groupMain" : true
    },
    "E,9,13,1" : {
        // MART
        "to": "E,0,1,1",
        "grouped":"E,9,13,0"
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
        "to" : "E,11,3,0"
    },
    "E,0,3,1" : {
        "to" : "E,11,8,0"
    },
    "E,0,3,2" : {
        // MART
        "to" : "E,11,7,0"
    },
    "E,0,3,3" : {
        // PK
        "to" : "E,11,5,0"
    },
    "E,0,3,4" : {
        // SCHOOL
        "to" : "E,11,4,0"
    },
    "E,0,3,5" : {
        "to" : "E,11,0,0",
        "grouped": "E,0,3,6",
        "groupMain" : true
    },
    "E,0,3,6" : {
        "to" : "E,11,0,1",
        "grouped": "E,0,3,5"
    },
    "E,0,3,7" : {
        "to" : "E,11,10,0"
    },
    "E,0,3,8" : {
        "to" : "E,11,11,0"
    },
    "E,0,3,9" : {
        "to" : "E,11,12,0"
    },
    "E,0,3,10" : {
        "to" : "E,11,13,0"
    },
    "E,0,3,11" : {
        "to" : "E,11,16,0"
    },
/* RUSTBORO CITY - INT */
    "E,11,0,0" : {
        "to" : "E,0,3,5",
        "grouped": "E,11,0,1",
        "groupMain" : true
    },
    "E,11,0,1" : {
        "to" : "E,0,3,5",
        "grouped" : "E,11,0,0"
    },
    "E,11,0,2" : {
        "to" : "E,11,1,0"
    },
    "E,11,1,0" : {
        "to" : "E,11,0,2"
    },
    "E,11,1,1" : {
        "to" : "E,11,2,0"
    },
    "E,11,2,0" : {
        // DIRECTOR GUY
        "to" : "E,11,1,1"
    },
    "E,11,3,0" : {
        // GYM
        "to" : "E,0,3,0",
        "grouped" : "E,11,3,1",
        "groupMain" : true
    },
    "E,11,3,1" : {
        // GYM
        "to" : "E,0,3,0",
        "grouped" : "E,11,3,0"
    },
    "E,11,4,0" : {
        // SCHOOL
        "to" : "E,0,3,4",
        "grouped" : "E,11,4,1",
        "groupMain" : true
    },
    "E,11,4,1" : {
        // SCHOOL
        "to" : "E,0,3,4",
        "grouped" : "E,11,4,0"
    },
    "E,11,5,0" : {
        // PK
        "to" : "E,0,3,3",
        "grouped" : "E,11,5,1",
        "groupMain" : true
    },
    "E,11,5,1" : {
        // PK
        "to" : "E,0,3,3",
        "grouped" : "E,11,5,0"
    },
    "E,11,5,2" : {
        // PK
        "to" : "E,11,6,0"
    },
    "E,11,6,0" : {
        "to" : "E,,11,5,2",
        "ignore" : true
    },
    "E,11,7,0" : {
        // MART
        "to" : "E,0,3,2",
        "grouped" : "E,11,7,1",
        "groupMain" : true
    },
    "E,11,7,1" : {
        // MART
        "to" : "E,0,3,2",
        "grouped" : "E,11,7,0"
    },
    "E,11,8,0" : {
        "to" : "E,0,3,1",
        "grouped" : "E,11,8,1",
        "groupMain" : true
    },
    "E,11,8,1" : {
        "to" : "E,0,3,1",
        "grouped" : "E,11,8,0"
    },
    "E,11,8,2" : {
        "to" : "E,11,9,0"
    },
    "E,11,9,0" : {
        "to" : "E,11,8,2"
    },
    "E,11,10,0" : {
        "to" : "E,0,3,7",
        "grouped" : "E,11,10,1",
        "groupMain" : true
    },
    "E,11,10,1" : {
        "to" : "E,0,3,7",
        "grouped" : "E,11,10,0"
    },
    "E,11,11,0" : {
        "to" : "E,0,3,8",
        "grouped" : "E,11,11,1",
        "groupMain" : true
    },
    "E,11,11,1" : {
        "to" : "E,0,3,8",
        "grouped" : "E,11,11,0"
    },
    "E,11,12,0" : {
        "to" : "E,0,3,9",
        "grouped" : "E,11,12,1",
        "groupMain" : true
    },
    "E,11,12,1" : {
        "to" : "E,0,3,9",
        "grouped" : "E,11,12,0"
    },
    "E,11,13,0" : {
        "to" : "E,0,3,10",
        "grouped" : "E,11,13,1",
        "groupMain" : true
    },
    "E,11,13,1" : {
        "to" : "E,0,3,10",
        "grouped" : "E,11,13,0"
    },
    "E,11,13,2" : {
        "to" : "E,11,14,0"
    },
    "E,11,14,0" : {
        "to" : "E,11,13,2"
    },
    "E,11,14,1" : {
        "to" : "E,11,15,0"
    },
    "E,11,15,0" : {
        "to" : "E,11,14,1"
    },
    "E,11,16,0" : {
        "to" : "E,0,3,11",
        "grouped" : "E,11,16,1",
        "groupMain" : true
    },
    "E,11,16,1" : {
        "to" : "E,0,3,11",
        "grouped" : "E,11,16,0"
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
        "grouped" : "E,0,5,13",
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
        "grouped": "E,0,5,3"
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
        "to" : "E,1,2,1"
    },
    "E,0,9,1" : {
        // BOY HOUSE
        "to" : "E,1,0,1"
    },
    "E,0,9,2" : {
        // ELMS LAB
        "to" : "E,1,4,0"
    },
/* LITTLE ROOT TOWN - INT */
    "E,1,0,0" : {
        "to": "E,0,9,1",
        "grouped": "E,1,0,1",
        "groupMain" : true
    },
    "E,1,0,1" : {
        "to": "E,0,9,1",
        "grouped":"E,1,0,0"
    },
    "E,1,0,2" : {
        "to": "E,1,1,0"
    },
    "E,1,1,0" : {
        "to": "E,1,0,2"
    },
    "E,1,2,0" : {
        "to": "E,0,9,0",
        "grouped": "E,1,2,1",
        "groupMain" : true
    },
    "E,1,2,1" : {
        "to": "E,0,9,0",
        "grouped":"E,1,2,0"
    },
    "E,1,2,2" : {
        "to": "E,1,3,0"
    },
    "E,1,3,0" : {
        "to": "E,1,2,2"
    },
    "E,1,4,0" : {
        "to": "E,0,9,2",
        "grouped": "E,1,4,1",
        "groupMain" : true
    },
    "E,1,4,1" : {
        "to": "E,0,9,2",
        "grouped":"E,1,4,0"
    },
/* OLDALE TOWN - EXT */
    "E,0,10,0" : { 
        "to" : "E,2,0,0"
    },
    "E,0,10,1" : { 
        "to" : "E,2,1,0"
    },
    "E,0,10,2" : { 
        // PK
        "to" : "E,2,2,0"
    },
    "E,0,10,3" : { 
        // MART
        "to" : "E,2,4,0"
    },
/* OLDALE TOWN - INT */
    "E,2,0,0" : {
        "to": "E,0,10,1",
        "grouped": "E,2,0,1",
        "groupMain" : true
    },
    "E,2,0,1" : {
        "to": "E,0,10,0",
        "grouped":"E,2,0,0"
    },
    "E,2,1,0" : {
        "to": "E,0,10,1",
        "grouped": "E,2,1,1",
        "groupMain" : true
    },
    "E,2,1,1" : {
        "to": "E,0,10,1",
        "grouped":"E,2,1,0"
    },
    "E,2,2,0" : {
        // PK
        "to": "E,0,10,2",
        "grouped": "E,2,2,1",
        "groupMain" : true
    },
    "E,2,2,1" : {
        // PK
        "to": "E,0,10,2",
        "grouped":"E,2,2,0"
    },
    "E,2,2,2" : {
        // PK
        "to": "E,2,3,0"
    },
    "E,2,3,0" : {
        // PK (upstairs)
        "to": "E,2,2,2",
        "ignore": true
    },
    "E,2,4,0" : {
        // MART
        "to": "E,0,10,3",
        "grouped": "E,2,4,1",
        "groupMain" : true
    },
    "E,2,4,1" : {
        // MART
        "to": "E,0,10,3",
        "grouped":"E,2,4,0"
    },
/* DEWFORD CITY - EXT */
    "E,0,11,0" : {
        "to" : "E,3,4,0"
    },
    "E,0,11,1" : {
        // PK
        "to" : "E,3,1,0"
    },
    "E,0,11,2" : {
        // GYM
        "to" : "E,3,3,0"
    },
    "E,0,11,3" : {
        "to" : "E,3,0,0"
    },
    "E,0,11,4" : {
        "to" : "E,3,5,0"
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
    }
}