var mixedGameData = {};
Object.entries(FIRE_RED_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(CRYSTAL_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(EMERALD_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);

var remappingsData = {};

// WarpList used by Cheat.js
var warpList = new Map();

var connectionManager;

function getMapData() {
    return mixedGameData;
}

function getRandomisationAlgorithm() {
    return simpleRandom;
}

function getRandomisationConfig() {
    let config = {};
    config.kantoLevel = document.getElementById("kantoLevel").value;
    config.jhotoLevel = document.getElementById("jhotoLevel").value;
    config.hoennLevel = document.getElementById("hoennLevel").value;
    return config;
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
    let config = getRandomisationConfig();
    let mapData = getMapData();
    remappingsData = getRandomisationAlgorithm().apply(null, [seed, mapData, config]);
    warpList = mappingToWarps(remappingsData, mapData);
}

function simpleRandom(seed, mapData, config) {
    let warpIdData = new Map(Object.entries(mapData));
    warpIdData = filterIgnored(warpIdData);
    warpIdData = filteGroupedNotMain(warpIdData);
    warpIdData = filterByConfig(warpIdData, config);

    // Attempt to add conntections data (This will need to be done manually later)
    warpIdData = attemptAddingConnectionData(warpIdData);

    connectionManager = new ConnectionManager(seed, mapData, warpIdData, ["FR,3,1,0", "FR,3,1,1", "FR,3,1,3", "FR,3,1,4"]);
    //connectionManager.mapAllWarps();
    return connectionManager.getRemappings();
}

function createAndAddPkWarpsBothWays(warpList, connection1, connection2, mapData) {
    let usedWarps = [];
    usedWarps.push(...createRemapping(warpList, connection1, connection2, mapData));
    usedWarps.push(...createRemapping(warpList, connection2, connection1, mapData))
    return usedWarps;
}

function createRemapping(warpList, connection1, connection2, mapData) {
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

// Assume every warp on the same map is accessible (except itself!)
function attemptAddingConnectionData(warpIdData) {
    return new Map([...warpIdData].map(w => {
        w[1].connections = {};
        [...warpIdData].filter(k => {
            return toMapBank(k[0]) == toMapBank(w[0]) && (k[0] != w[0]);
        }).forEach(l => {
            w[1].connections[l[0]] = true;
        });
        return w;
    }));
}

function filterIgnored(mapData) {
    return new Map([...mapData].filter(k => !k[1].ignore));
}

function filterByConfig(usabledWarps, config) {
    usabledWarps = new Map([...usabledWarps].filter(w => {
        let filterLevel = null;
        if (w[0][0] == "E") {
            filterLevel = config.hoennLevel;
        } else if (w[0][0] == "F") {
            filterLevel = config.kantoLevel;
        } else if (w[0][0] == "C") {
            filterLevel = config.jhotoLevel;
        }

        return usabledWarps.get(w[0]).level && usabledWarps.get(w[0]).level <= filterLevel;
    }));
    return usabledWarps;
}

function filteGroupedNotMain(mapData) {
    return new Map([...mapData].filter(k => k[1].groupMain || !k[1].grouped));
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


/**
 *  CONNECTION MANAGEMENT
 */

function ConnectionManager(seed, allMapData, warpsToMap, startingWarps) {
    this.rng = new RNG(getHash(seed));
    this.allMapData = allMapData;
    this.unreachableWarps = warpsToMap;
    this.reachableWarps = new Map();
    this.mappedWarpCount = 0;
    this.remappings = [];
    this.selfMappedConnections = 0;

    startingWarps.forEach(sw => {
        this.reachableWarps.set(sw, warpsToMap.get(sw));
        this.unreachableWarps.delete(sw);
    })
}

ConnectionManager.prototype.getRemappings = function() {
    return this.remappings;
}

ConnectionManager.prototype.mapAllWarps = function() {
    while (this.unreachableWarps.size > 0 || this.reachableWarps.size > 0) {
        this.createNewMapping();
    }
}

ConnectionManager.prototype.createNewMapping = function() {

    let nextWarps = this.getNextWarps();

    let allWarp1Warps = this.getGroupedWarps(nextWarps[0]);
    let allWarp2Warps = this.getGroupedWarps(nextWarps[1]);

    this.createRemappings(nextWarps[0], allWarp2Warps);
    this.createRemappings(nextWarps[1], allWarp1Warps);
}

ConnectionManager.prototype.getGroupedWarps = function(warp) {
    let groups = this.allMapData[warp[0]].grouped;
    groups = groups ? groups : [];
    groups = groups.map(w => {
        return [w, this.allMapData[w]]
    });
    return [warp, ...groups];
}

ConnectionManager.prototype.createRemappings = function (warp, mapToList) {
    mapToList.forEach(w => {
        this.remappings.push({from : warp[0], to : w[0], fromName : warp[1].name, toName: w[1].name})
    })
}

ConnectionManager.prototype.getNextWarps = function() {
    let warp1 = null;
    let warp2 = null;

    let initialReachableWarps = this.reachableWarps.size;
    let initialUnreachableWarps = this.unreachableWarps.size;

    if (initialUnreachableWarps > 0 && 0 == initialReachableWarps) {
        console.error("There are unreachable warps left after mapping all reachable. This dosn't make sense.")
    }

    if (this.getUnreachableHubs().size > 0) {
        warp1 = [...this.getUnreachableHubs()][this.rng.nextRange(0, this.getUnreachableHubs().size - 1)];
        this.unreachableWarps.delete(warp1[0]);
    } else if (this.unreachableWarps.size > 0) {
        warp1 = [...this.unreachableWarps][this.rng.nextRange(0, this.unreachableWarps.size - 1)];
        this.unreachableWarps.delete(warp1[0]);
    } else if (this.reachableWarps.size > 0) {
        warp1 = [...this.reachableWarps][this.rng.nextRange(0, this.reachableWarps.size - 1)];
        this.reachableWarps.delete(warp1[0]);
    } else {
        console.warn("Next warp was called when there were no warps left. This shouldn't happen");
    }

    if (this.reachableWarps.size > 0) {
        warp2 = [...this.reachableWarps][this.rng.nextRange(0, this.reachableWarps.size - 1)];
        this.reachableWarps.delete(warp2[0]);
    } else {
        if (this.selfMappedConnections == 0) {
            this.selfMappedConnections = 1;
            console.warn("An odd number of warps was supplied. One warp will link back to itself");
            warp2 = warp1;
        } else {
            console.error(warp1[1].name + " was mapped back to iself incorrectly. Possibly an issue in the map data?")
            warp2 = warp1;
        }
    }

    this.updateReachableWarps(warp1);
    console.log(this.reachableWarps.size + " reachable warps after " + warp1[1].name + " added");

    if (this.getUnreachableHubs().size > 0 && !(this.reachableWarps.size >= initialReachableWarps)) {
        console.error(warp1[1].name + " (a previously unreachable hub) was added but reachable warps decreased. This dosn't make sense.")
    }

    this.mappedWarpCount += 2;

    console.log("total warps: " + ((+this.reachableWarps.size)  + (+this.unreachableWarps.size)  + (+this.mappedWarpCount)))
    console.log("Reachable dead ends " + this.getReachableDeadEnds().size);

    if ((this.getUnreachableHubs().size + this.reachableWarps.size) / 2 < this.getUnreachableDeadEnds().size) [
        console.error("Mapping hubs we ended up with less warps!?")
    ] 

    return [warp1, warp2];
}

ConnectionManager.prototype.updateReachableWarps = function (warp) {

    if (!warp[1].connections) {return }

    Object.keys(warp[1].connections).forEach(c => {
        let connectionWarp = this.unreachableWarps.get(c);
        if (connectionWarp) {
            console.log("Adding " + connectionWarp.name + " to reachable");
            this.reachableWarps.set(c, connectionWarp);
            this.unreachableWarps.delete(c);
        }
    })
}

ConnectionManager.prototype.getUnreachableHubs = function () {
    return new Map([...this.unreachableWarps].filter(w => {
        return Object.keys(w[1].connections).length > 0
    }));
}

ConnectionManager.prototype.getUnreachableDeadEnds = function () {
    return new Map([...this.unreachableWarps].filter(w => {
        return Object.keys(w[1].connections).length == 0
    }));
}

ConnectionManager.prototype.getReachableDeadEnds = function () {
    return new Map([...this.reachableWarps].filter(w => {
        return Object.keys(w[1].connections).length == 0
    }));
}


/**
 *  SEEDED RNG MANAGEMENT
 */

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