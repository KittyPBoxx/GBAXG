var FIRE_RED_WARPS = 
{
/* PALLET TOWN - EXT */
// NOT RANDOMISED

/* PALLET TOWN - INT */
// NOT RANDOMISED

/* VIRIDIAN CITY - EXT */
    "FR3,1,0" : {
        // PK
        "to": "FR5,5,1"
    },
    "FR3,1,1" : {
        "to" : "FR5,0,1"
    },
    "FR3,1,2" : {
        "to" : "FR5,1,1"
    },
    "FR3,1,3" : {
        "to" : "FR5,2,1"
    },
    "FR3,1,4" : {
        "to" : "FR5,3,1"
    },
/* VIRIDIAN CITY - INT */
    "FR5,0,0" : {
        "to" : "FR3,1,1",
        "grouped" : ["FR5,0,1", "FR5,0,2"],
        "groupMain" : true
    },
    "FR5,0,1" : {
        "to" : "FR3,1,1",
        "grouped" : ["FR5,0,0", "FR5,0,2"]
    },
    "FR5,0,2" : {
        "to" : "FR3,1,1",
        "grouped" : ["FR5,0,0", "FR5,0,1"]
    },
    "FR5,1,0" : {
        // GYM
        "to" : "FR3,1,1",
        "grouped" : ["FR5,1,1", "FR5,1,2"],
        "groupMain" : true
    },
    "FR5,1,1" : {
        // GYM
        "to" : "FR3,1,1",
        "grouped" : ["FR5,1,0", "FR5,1,2"]
    },
    "FR5,1,2" : {
        // GYM
        "to" : "FR3,1,1",
        "grouped" : ["FR5,1,0", "FR5,1,1"]
    },
    "FR5,2,0" : {
        "to" : "FR3,1,3",
        "grouped" : ["FR5,2,1", "FR5,2,2"],
        "groupMain" : true
    },
    "FR5,2,1" : {
        "to" : "FR3,1,3",
        "grouped" : ["FR5,2,0", "FR5,2,2"]
    },
    "FR5,2,2" : {
        "to" : "FR3,1,3",
        "grouped" : ["FR5,2,0", "FR5,2,1"]
    },
    "FR5,3,0" : {
        // MART
        "to" : "FR3,1,4",
        "grouped" : ["FR5,3,1", "FR5,3,2"],
        "groupMain" : true
    },
    "FR5,3,1" : {
        // MART
        "to" : "FR3,1,4",
        "grouped" : ["FR5,3,0", "FR5,3,2"]
    },
    "FR5,3,2" : {
        // MART
        "to" : "FR3,1,4",
        "grouped" : ["FR5,3,0", "FR5,3,1"]
    },
    "FR5,4,0" : {
        // PK
        "to" : "FR3,1,0",
        "grouped" : ["FR5,4,1", "FR5,4,2"],
        "groupMain" : true
    },
    "FR5,4,1" : {
        // PK
        "to" : "FR3,1,0",
        "grouped" : ["FR5,4,0", "FR5,4,2"]
    },
    "FR5,4,2" : {
        // PK
        "to" : "FR3,1,0",
        "grouped" : ["FR5,4,0", "FR5,4,1"]
    },
    "FR5,4,3" : {
        "to" : "FR5,5,0"
    },
    "FR5,5,0" : {
        // PK (upstairs)
        "to" : "FR5,5,0",
        "ignore": true
    },
/* PEWTER CITY - EXT */
    "FR3,2,0" : {
        // MUSEUM
        "to": "FR6,0,1"
    },
    "FR3,2,1" : {
        // MUSEUM BACK
        "to" : "E6,0,3"
    },
    "FR3,2,2" : {
        // GYM
        "to" : "E6,2,1"
    },
    "FR3,2,3" : {
        // MART
        "to" : "E6,3,1"
    },
    "FR3,2,4" : {
        "to" : "E6,4,1"
    },
    "FR3,2,5" : {
        // PK
        "to" : "E6,5,1"
    },
    "FR3,2,6" : {
        "to" : "E6,7,1"
    },
/* PEWTER CITY - INT */
    "FR6,0,0" : {
        "to" : "FR3,2,0",
        "grouped" : ["FR6,0,1", "FR6,0,2"],
        "groupMain" : true
    },
    "FR6,0,1" : {
        "to" : "FR3,2,0",
        "grouped" : ["FR6,0,0", "FR6,0,2"]
    },
    "FR6,0,2" : {
        "to" : "FR3,2,0",
        "grouped" : ["FR6,0,0", "FR6,0,1"]
    },
    "FR6,0,3" : {
        "to" : "FR3,2,1",
        "grouped" : "FR6,0,4",
        "groupMain" : true
    },
    "FR6,0,4" : {
        "to" : "FR3,2,1",
        "grouped" : "FR6,0,3"
    },
    "FR6,0,5" : {
        "to": "FR6,1,0"
    },
    "FR6,1,0" : {
        "to": "FR6,0,5"
    },
    "FR6,2,0" : {
        // GYM
        "to" : "FR3,2,2",
        "grouped" : ["FR6,2,1", "FR6,2,2"],
        "groupMain" : true
    },
    "FR6,2,1" : {
        // GYM
        "to" : "FR3,2,2",
        "grouped" : ["FR6,2,0", "FR6,2,2"]
    },
    "FR6,2,2" : {
        // GYM
        "to" : "FR3,2,2",
        "grouped" : ["FR6,2,0", "FR6,2,1"]
    },
    "FR6,3,0" : {
        // MART
        "to" : "FR3,2,3",
        "grouped" : ["FR6,3,1", "FR6,3,2"],
        "groupMain" : true
    },
    "FR6,3,1" : {
        // MART
        "to" : "FR3,2,3",
        "grouped" : ["FR6,3,0", "FR6,3,2"]
    },
    "FR6,3,2" : {
        // MART
        "to" : "FR3,2,3",
        "grouped" : ["FR6,3,0", "FR6,3,1"]
    },
    "FR6,04,0" : {
        "to" : "FR3,2,4",
        "grouped" : ["FR6,4,1", "FR6,4,2"],
        "groupMain" : true
    },
    "FR6,4,1" : {
        "to" : "FR3,2,4",
        "grouped" : ["FR6,4,0", "FR6,4,2"]
    },
    "FR6,4,2" : {
        "to" : "FR3,2,4",
        "grouped" : ["FR6,4,0", "FR6,4,1"]
    },
    "FR6,5,0" : {
        // PK
        "to" : "FR3,2,5",
        "grouped" : ["FR6,5,1", "FR6,5,2"],
        "groupMain" : true
    },
    "FR6,5,1" : {
        // PK
        "to" : "FR3,2,5",
        "grouped" : ["FR6,5,0", "FR6,5,2"]
    },
    "FR6,5,2" : {
        // PK
        "to" : "FR3,2,5",
        "grouped" : ["FR6,5,0", "FR6,5,1"]
    },
    "FR6,5,3" : {
        "to" : "FR6,6,0"
    },
    "FR6,6,0" : {
        "to" : "FR6,5,3",
        "ignore" : true
    },
    "FR6,7,0" : {
        "to" : "FR3,2,6",
        "grouped" : ["FR6,7,1", "FR6,7,2"],
        "groupMain" : true
    },
    "FR6,7,1" : {
        "to" : "FR3,2,6",
        "grouped" : ["FR6,7,0", "FR6,7,2"]
    },
    "FR6,7,2" : {
        "to" : "FR3,2,6",
        "grouped" : ["FR6,7,0", "FR6,7,1"]
    }
}