var warpList = new Map();

function mapWarps(seed) {
    let usableEmeraldWarps = Object.keys(EMERALD_WARPS).filter(k => !EMERALD_WARPS[k].ignore).filter(k => (EMERALD_WARPS[k].grouped && !EMERALD_WARPS[k].groupMain) || !EMERALD_WARPS[k].grouped);
    let usableFireRedWarps = Object.keys(FIRE_RED_WARPS).filter(k => !FIRE_RED_WARPS[k].ignore).filter(k => (FIRE_RED_WARPS[k].grouped && !FIRE_RED_WARPS[k].groupMain) || !FIRE_RED_WARPS[k].grouped);
    let usableCrystalWarps = Object.keys(CRYSTAL_WARPS).filter(k => !CRYSTAL_WARPS[k].ignore).filter(k => (CRYSTAL_WARPS[k].grouped && !CRYSTAL_WARPS[k].groupMain) || !CRYSTAL_WARPS[k].grouped);

    let warpPool = [];
    warpPool.push(...usableEmeraldWarps);
    warpPool.push(...usableFireRedWarps);
    warpPool.push(...usableCrystalWarps);

    let predictedGroups = new Map([...groupBy(usableEmeraldWarps, toMapBank), ...groupBy(usableFireRedWarps, toMapBank), ...groupBy(usableCrystalWarps, toMapBank)]);

    let deadEnds = [];
    let hubs = [];

    for (let k of predictedGroups.keys()) {
        let values = predictedGroups.get(k);
        if (values.length == 1) {
            deadEnds.push(...values);
        } else {
            hubs.push(...values);
        }
    }

    // Have an initial set of warps,
    // select a random warp in the set, link it to a new value from hubs (removing it from both and adding new values into the set)

    // Set up initial set of accessable warps removing those values from hubs
    let openWarps = ["FR,3,1,0", "FR,3,1,1",  "FR,3,1,2", "FR,3,1,3", "FR,3,1,4"];
    openWarps.forEach(i => {
        let index = hubs.indexOf(i);
        hubs.splice(index, 1);
    });

    warpList = new Map();
    var rng = new RNG(getHash(seed))

    while (hubs.length > 0) {

        let hubIndex = rng.nextRange(0, hubs.length - 1);
        let openWarpsIndex = rng.nextRange(0, openWarps.length - 1);

        let hubConnection = hubs[hubIndex];
        createAndAddPkWarpsBothWays(warpList, hubConnection, openWarps[openWarpsIndex]);
        
        hubs.splice(hubIndex, 1);
        openWarps.splice(openWarpsIndex, 1);

        let groupKey = hubConnection.slice(0, hubConnection.lastIndexOf(","));
        predictedGroups.get(groupKey).forEach(c => {
            let index = hubs.indexOf(c);
            hubs.splice(index, 1);

            openWarps.push(c)
        });

    }

    while (deadEnds.length > 0) {
        let deadEndIndex = rng.nextRange(0, deadEnds.length -1);
        let openWarpsIndex = rng.nextRange(0, openWarps.length - 1);

        let deadEndConnection = deadEnds[deadEndIndex];
        createAndAddPkWarpsBothWays(warpList, deadEndConnection, openWarps[openWarpsIndex]);
        
        deadEnds.splice(deadEndIndex, 1);
        openWarps.splice(openWarpsIndex, 1);
    }


    while (openWarps.length > 1) {
        let firstIndex = rng.nextRange(0, openWarps.length - 1);
        let first = openWarps[firstIndex];
        openWarps.splice(firstIndex, 1);

        let secondIndex = rng.nextRange(0, openWarps.length - 1);
        let second = openWarps[secondIndex];
        openWarps.splice(secondIndex, 1);

        createAndAddPkWarpsBothWays(warpList, first, second);
    }
}

function createAndAddPkWarpsBothWays(warpList, connection1, connection2) {
    createAndAddPKWarps(warpList, connection1, connection2);
    createAndAddPKWarps(warpList, connection2, connection1)
}

function createAndAddPKWarps(warpList, connection1, connection2) {

    // Get all the warps at connection 1, i.e a double door might have two
    // Then get the unique set of locations they warp to, i.e a double door might warp to a single door or another double door
    let connection1Data = getConnectionObject(connection1);
    let triggerSet = new Set();
    triggerSet.add(connection1Data.to);
    let grouped = typeof connection1Data.grouped == 'string' ? [connection1Data.grouped] : connection1Data.grouped;

    if (grouped) {
        grouped.forEach(g => { 
            triggerSet.add(getConnectionObject(g).to) 
        });
    }

    triggerSet.forEach(w => {
        let toData = connection2.split(",");
        let pkWarp = new PKWarp(w, toData[0], toData[1], toData[2], toData[3]);
        warpList.set(w, pkWarp);
    })
    
}

function getConnectionObject(connection) {
    if (connection[0] == "E") return EMERALD_WARPS[connection];
    if (connection[0] == "F") return FIRE_RED_WARPS[connection];
    if (connection[0] == "C") return CRYSTAL_WARPS[connection];
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