var mixedGameData = {};
Object.entries(FIRE_RED_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(CRYSTAL_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(EMERALD_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);

var remappingsData = {};

// WarpList used by Cheat.js
var warpList = new Map();

function getMapData() {
    return mixedGameData;
}

function getRandomisationAlgorithm() {
    return simpleRandom;
}

function mappingToWarps(mappingData, mapData) {
    let mappedList = new Map();

    Object.values(mappingData).forEach(mapping => {
        let from = mapping.from;
        let to = mapping.to;
        let toParts = to.split(",");
        let fromData = mapData[from];
        mappedList.set(fromData.to, new PKWarp(fromData.to, toParts[0], toParts[1], toParts[2], toParts[3]));
    });

    return mappedList;
}

function mapWarps(seed) {
    let mapData = getMapData();
    remappingsData = getRandomisationAlgorithm().apply(null, [seed, mapData, {}]);
    warpList = mappingToWarps(remappingsData, mapData);
}

function simpleRandom(seed, mapData, config) {

    let resultMappings = [];
    var rng = new RNG(getHash(seed))

    let usabledWarps = Object.keys(mapData).filter(k => !mapData[k].ignore).filter(k => (mapData[k].grouped && !mapData[k].groupMain) || !mapData[k].grouped);
    let predictedGroups = new Map([...groupBy(usabledWarps, toMapBank)]);
    let deadEnds = [];
    let hubs = [];

    /* 
    *   Any location with 2 or more warp points get's listed as a hub (this includes corridors)
    *   If there is only one warp it should be listed as a dead end
    */
    for (let k of predictedGroups.keys()) {
        let values = predictedGroups.get(k);
        if (values.length == 1) {
            deadEnds.push(...values);
        } else {
            hubs.push(...values);
        }
    }

    // Set up initial set of accessable warps removing those values from hubs
    let openWarps = ["FR,3,1,0", "FR,3,1,1",  "FR,3,1,2", "FR,3,1,3", "FR,3,1,4"];
    openWarps.forEach(i => {
        let index = hubs.indexOf(i);
        hubs.splice(index, 1);
    });

    
    // While he have hubs available we will remove them from the unsused list add them
    // We also remove any warps from the same map and add them to the list of warps we can make connections to
    while (hubs.length > 0) {
        let hubIndex = rng.nextRange(0, hubs.length - 1);
        let openWarpsIndex = rng.nextRange(0, openWarps.length - 1);

        let hubConnection = hubs[hubIndex];
        let warpsUsed = createAndAddPkWarpsBothWays(resultMappings, hubConnection, openWarps[openWarpsIndex], mapData);
        
        warpsUsed.forEach(w => {
            let indexInHubs = hubs.indexOf(w);
            if (hubs.indexOf(w) != -1) {
                hubs.splice(indexInHubs, 1);
            }
            
            let indexInOpenWarps = openWarps.indexOf(w);
            if (openWarps.indexOf(w) != -1) {
                openWarps.splice(indexInOpenWarps, 1);
            }
        })


        let groupKey = hubConnection.slice(0, hubConnection.lastIndexOf(","));
        predictedGroups.get(groupKey).forEach(c => {
            let index = hubs.indexOf(c);
            hubs.splice(index, 1);
            openWarps.push(c)
        });
    }

    // While we have dead ends add them into available slots
    while (deadEnds.length > 0) {
        let deadEndIndex = rng.nextRange(0, deadEnds.length -1);
        let openWarpsIndex = rng.nextRange(0, openWarps.length - 1);

        let deadEndConnection = deadEnds[deadEndIndex];
        let warpsUsed = createAndAddPkWarpsBothWays(resultMappings, deadEndConnection, openWarps[openWarpsIndex], mapData);

        warpsUsed.forEach(w => {
            let indexInDeadEnds = deadEnds.indexOf(w);
            if (deadEnds.indexOf(w) != -1) {
                deadEnds.splice(indexInDeadEnds, 1);
            }
            
            let indexInOpenWarps = openWarps.indexOf(w);
            if (openWarps.indexOf(w) != -1) {
                openWarps.splice(indexInOpenWarps, 1);
            }
        })
    }

    // Finally join up any connections we have left over
    while (openWarps.length > 1) {
        let firstIndex = rng.nextRange(0, openWarps.length - 1);
        let first = openWarps[firstIndex];

        // Remove immediatelly so it can warp to itself
        openWarps.splice(firstIndex, 1);
        let firstGroup = mapData[first].grouped;
        if (firstGroup && typeof firstGroup == 'string') {
            openWarps.splice(openWarps.indexOf(firstGroup), 1);
        } else if (firstGroup) {
            firstGroup.forEach(w => {
                openWarps.splice(openWarps.indexOf(w), 1);
            })
        }


        let secondIndex = rng.nextRange(0, openWarps.length - 1);
        let second = openWarps[secondIndex];

        let warpsUsed = createAndAddPkWarpsBothWays(resultMappings, first, second, mapData);

        warpsUsed.forEach(w => {
            let indexInOpenWarps1 = openWarps.indexOf(w);
            if (openWarps.indexOf(w) != -1) {
                openWarps.splice(indexInOpenWarps1, 1);
            }
            
            let indexInOpenWarps2 = openWarps.indexOf(w);
            if (openWarps.indexOf(w) != -1) {
                openWarps.splice(indexInOpenWarps2, 1);
            }
        })
    }

    return resultMappings;
}

function createAndAddPkWarpsBothWays(warpList, connection1, connection2, mapData) {
    let usedWarps = [];
    usedWarps.push(...createAndAddPKWarps(warpList, connection1, connection2, mapData));
    usedWarps.push(...createAndAddPKWarps(warpList, connection2, connection1, mapData))
    return usedWarps;
}

function createAndAddPKWarps(warpList, connection1, connection2, mapData) {
    let newConnection = {};
    newConnection.from = connection1;
    newConnection.to = connection2;
    warpList.push(newConnection);

    var usedWarps = [connection1];
    let connection1Group = mapData[connection1].grouped;
    if (connection1Group && typeof connection1Group == 'string') {
        warpList.push({ "from": connection1Group, "to": connection2 });
        usedWarps.push(connection1Group)
    } else if (connection1Group) {
        connection1Group.forEach(w => {
            warpList.push({ "from": w, "to": connection2 });
            usedWarps.push(w)
        })
    }
    return usedWarps;
}

function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

function toMapBank(s) { 
    let arr = s.split(","); 
    return arr[0] + "," + arr[1] + "," + arr[2] 
}

function getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
}

function RNG(seed) {
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;
  
    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
}
RNG.prototype.nextInt = function() {
  this.state = (this.a * this.state + this.c) % this.m;
  return this.state;
}
RNG.prototype.nextFloat = function() {
  // returns in range [0,1]
  return this.nextInt() / (this.m - 1);
}
RNG.prototype.nextRange = function(start, end) {
  // returns in range [start, end): including start, excluding end
  // can't modulu nextInt because of weak randomness in lower bits
  var rangeSize = end - start;
  var randomUnder1 = this.nextInt() / this.m;
  return Math.abs(start + Math.floor(randomUnder1 * rangeSize));
}
RNG.prototype.choice = function(array) {
  return array[this.nextRange(0, array.length)];
}