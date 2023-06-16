var mixedGameData = {};
Object.entries(FIRE_RED_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(CRYSTAL_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(EMERALD_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);

var remappingsData = {};
var isHeadless = true;

// WarpList used by EmulationCoreHacks.js
var warpList = new Map();

function getMapData() {
    return mixedGameData;
}

function getRandomisationAlgorithm() {
    return generateRandomMappings;
}

function getRandomisationConfig() {
    let config = {};
    config.kantoLevel = document.getElementById("kantoLevel").value;
    config.johtoLevel = document.getElementById("johtoLevel").value;
    config.hoennLevel = document.getElementById("hoennLevel").value;
    return config;
}

function getFlagData() {
  return FLAG_DATA;
}

function getEscapePaths() {
  return ESCAPE_PATHS;
}

function mappingToWarps(mappingData) {
    let mappedList = new Map();

    mappingData.forEach(mapping => {
        let from = mapping.trigger;
        let to = mapping.target;
        let toParts = to.split(",");
        mappedList.set(from, new PKWarp(from, toParts[0], toParts[1], toParts[2], toParts[3], mapping.source));
    });

    return mappedList;
}

var attempts = 5;

async function mapWarps(seed) {

    flagsState = {};
    unaddedConditionalEdges = {};
    attempts = 5;

    let config = getRandomisationConfig();
    let mapData = getFilteredData();
    let flagData = getFlagData();
    let escapePaths = getEscapePaths();
    getRandomisationAlgorithm().apply(null, [onRandomisationAlogrithmRun, seed, mapData, flagData, config, escapePaths]);
}

var onNewMappingCreated = () => {};
function onRandomisationAlogrithmRun(finishedData, seed, config) {
  remappingsData = finishedData;
  warpList = mappingToWarps(getAugmetedRemappingData(remappingsData));
  updateHashDisplay();
  updateProgressUI("Mapping Finished");

  if (typeof storageManager !== 'undefined') {
    storageManager.persist("RANDOM_MAPPING", new WarpListData(seed, config, warpList));
  }
  onNewMappingCreated();
}
// Async causing an issue with this seed fz3tmm
function generateRandomMappings(onFinished, seed, mapData, flagData, config, escapePaths) {
    
    let rng = new RNG(getHash(seed));
    let progressionState = initMappingGraph(mapData, isHeadless, new ProgressionState(flagData, config))

    progressionState = generateEscapeWarps(escapePaths, mapData, rng, progressionState);

    var root = getInitialWarp(config, rng);

    progressionState.unconnectedComponents = progressionState.unconnectedComponents.filter(a => !a.includes(root));

    var moreWarpsToMap = true;

    function blockingRunAlgorithm() {

      if (moreWarpsToMap) {

        try {
          moreWarpsToMap = doNextMapping(rng, root, progressionState);
          progressionState = updateProgressionState(progressionState, root);
          setTimeout(blockingRunAlgorithm, 0);
        } catch (e) {

          if (attempts > 0) {
            attempts = attempts - 1;
            generateRandomMappings(onFinished, seed + 1, mapData, flagData, config, escapePaths);

          } else {
            console.error("An error occured mapping warps " + e);
            M.toast({html: 'ERROR: Error assigning valid connections.<BR> Please try a different seed or config', displayLength:10000});
            moreWarpsToMap = false;
          }

        }
      } else {

        // Add each games bedrooms and make sure they map to house in pallet town
        cy.add(new WarpNode(['C,1,1,0' , getMapData()["C,1,1,0" ]]));
        cy.add(new WarpNode(['E,1,3,0' , getMapData()["E,1,3,0" ]]));
        cy.add(new WarpNode(['FR,4,0,2', getMapData()["FR,4,0,2"]]));

        window.cy.add(new WarpEdge('C,1,1,0', 'FR,4,0,2'));
        window.cy.add(new WarpEdge('E,1,3,0', 'FR,4,0,2'));


        onFinished(getBaseRemappingData(), seed, config);
      }
    }

    blockingRunAlgorithm();
}

function getInitialWarp(config, rng) {

  let candidates = [];

  if (config.kantoLevel > 0) {
    candidates = ["FR,3,1,0", "FR,3,1,4", "FR,3,1,3", "FR,3,1,1", "FR,3,41,0"];
  } else if (config.johtoLevel > 0) {
    candidates = ["C,0,9,3", "C,0,9,0", "C,0,16,0", "C,0,10,4", "C,0,10,1", "C,0,10,0"];
  } else if (config.hoennLevel > 0) {
    candidates = ["E,0,10,2", "E,0,10,1", "E,0,10,0", "E,0,10,3", "E,0,0,0", "E,0,0,4", "E,0,0,5", "E,0,0,3", "E,0,0,2"];
  } else {
    return KEY_LOCATION_DATA["VIRIDIAN CITY"];
  }
  
  return candidates[rng.nextRange(0, candidates.length)]
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
            filterLevel = config.johtoLevel;
        }

        return usabledWarps.get(w[0]).level && (+usabledWarps.get(w[0]).level <= +filterLevel);
    }));
    return usabledWarps;
}

function generateEscapeWarps(escapePaths, mapData, rng, progressionState) {
  let filteredWarpIds = new Set(mapData.keys());
  let escapeCandidateSet = escapePaths.map(s => s.filter(n => filteredWarpIds.has(n))).filter(s => s.length > 0);
  let randomMustLinkHomeWarps = escapeCandidateSet.flatMap(s => s[rng.nextRange(0, s.length - 1)]);
  progressionState.randomMustLinkHomeWarps = randomMustLinkHomeWarps;
  return progressionState;
}

function filteGroupedNotMain(mapData) {
    return new Map([...mapData].filter(k => k[1].groupMain || !k[1].grouped));
} 

function removeRemovableLocations(mapData) {
  return new Map([...mapData].filter(n => !(n[1].tags && n[1].tags.includes("removeable"))));
}

function toMapBank(s) { 
    let arr = s.split(","); 
    return arr[0] + "," + arr[1] + "," + arr[2] 
}

function ProgressionState(flagData, config) {
  this.remainingConditionalEdges = new Set();
  this.flags = new Set();
  this.flagData = flagData;
  this.config = config;
  // Locations that may grant further progress
  this.unmarkedLocations = new Map(Object.entries(flagData.LOCATIONS_TRIGGER));
  this.unmarkedFlags = new Map(Object.entries(flagData.COMPOSITE_FLAGS));
  // Locations that will not grant progress but should be included anyway
  this.unmarkedKeyLocations = new Map(Object.entries(flagData.KEY_LOCATIONS))
}

ProgressionState.prototype.makeFinalLocationsKey = function (config) {

  let finalLocations = [];

  switch(this.config.kantoLevel) {
    case "1": finalLocations.push(HINTABLE_LOCATIONS["BROCK"])   ; break;
    case "2": finalLocations.push(HINTABLE_LOCATIONS["MISTY"])   ; break;
    case "3": finalLocations.push(HINTABLE_LOCATIONS["LT SURGE"]); break; 
    case "4": finalLocations.push(HINTABLE_LOCATIONS["ERIKA"])   ; break;
    case "5": finalLocations.push(HINTABLE_LOCATIONS["KOGA"])    ; break;
    case "6": finalLocations.push(HINTABLE_LOCATIONS["SABRIBA"]) ; break;
    case "7": finalLocations.push(HINTABLE_LOCATIONS["BLAINE"])  ; break;
    case "8": finalLocations.push(HINTABLE_LOCATIONS["GIOVANNI"]); break;
    case "9": 
    case "0": 
    case "10":
    default: 
      // E4 and upwards are key locations not progression anyway  
      break;
  }

  switch(this.config.johtoLevel) {
    case "1": finalLocations.push(HINTABLE_LOCATIONS["FALKNER"]); break;
    case "2": finalLocations.push(HINTABLE_LOCATIONS["BUGSY"])  ; break;
    case "3": finalLocations.push(HINTABLE_LOCATIONS["WHITNEY"]); break; 
    case "4": finalLocations.push(HINTABLE_LOCATIONS["MORTY"])  ; break;
    case "5": finalLocations.push(HINTABLE_LOCATIONS["CHUCK"])  ; break;
    case "6": finalLocations.push(HINTABLE_LOCATIONS["JASMINE"]); break;
    case "7": finalLocations.push(HINTABLE_LOCATIONS["PRYCE"])  ; break;
    case "8": finalLocations.push(HINTABLE_LOCATIONS["CLAIR"])  ; break;
    case "9": 
    case "0": 
    case "10": 
    default:
      // E4 and upwards are key locations not progression anyway  
      break;
  }

  switch(this.config.hoennLevel) {
    case "1": finalLocations.push(HINTABLE_LOCATIONS["ROXANNE"])      ; break;
    case "2": finalLocations.push(HINTABLE_LOCATIONS["BRAWLY"])       ; break;
    case "3": finalLocations.push(HINTABLE_LOCATIONS["WATTSON"])      ; break; 
    case "4": finalLocations.push(HINTABLE_LOCATIONS["FLANNERY"])     ; break;
    case "5": finalLocations.push(HINTABLE_LOCATIONS["NORMAN"])       ; break;
    case "6": finalLocations.push(HINTABLE_LOCATIONS["WINONA"])       ; break;
    case "7": finalLocations.push(HINTABLE_LOCATIONS["TATE AND LIZA"]); break;
    case "8": finalLocations.push(HINTABLE_LOCATIONS["JUAN"])         ; break;
    case "9": 
    case "0": 
    case "10": 
    default:
      // E4 and upwards are key locations not progression anyway  
      break;
  }

  finalLocations.forEach(l => {
    if (this.unmarkedLocations.has(l)) {
      this.unmarkedKeyLocations.set(l, this.unmarkedLocations.get(l))
      this.unmarkedLocations.delete(l);
    }
  })

}

/** 
 *  Warp data model
 */
function WarpListData(seed, config, warpList) {
  this.warpList = Array.from(warpList.entries());
  this.seed = seed;
  this.config = config;
} 

function exportMapping() {
  storageManager.find("RANDOM_MAPPING").then(s => {
      let data = JSON.stringify(s);
      let file = new File([data], "WarpMapping.json", {type: "application/json;charset=utf-8"});
      saveAs(file);
  });
}

function importMapping() {
  let file = this.files[0];

  let reader = new FileReader();
  reader.readAsText(file,'UTF-8');

  reader.onload = readerEvent => {
      let content = readerEvent.target.result;
      let warpListData = JSON.parse(content);
      updateWarpListData(warpListData);
      storageManager.persist("RANDOM_MAPPING", warpListData);
   }
}

function updateWarpListData(warpListData) {
  document.getElementById("input_seed_text").value = warpListData.seed;

  document.getElementById("kantoLevel").value = warpListData.config.kantoLevel;
  document.getElementById("johtoLevel").value = warpListData.config.johtoLevel || warpListData.config.jhotoLevel; // needed for old seed files generated while the name was misspelt
  document.getElementById("hoennLevel").value = warpListData.config.hoennLevel;
  M.FormSelect.getInstance(document.getElementById("kantoLevel"))._handleSelectChangeBound();
  M.FormSelect.getInstance(document.getElementById("johtoLevel"))._handleSelectChangeBound();
  M.FormSelect.getInstance(document.getElementById("hoennLevel"))._handleSelectChangeBound();

  warpList = new Map(warpListData.warpList);
  updateHashDisplay();
}

function updateHashDisplay() {
  document.getElementById("hashText").innerHTML = "CHECK: " + Math.abs(getHash(JSON.stringify(Array.from(warpList)))).toString(16).toUpperCase();
}

/**
 *  Warp Script model 
 */
 function PKWarp(trigger, romCode, bank, map, warpNo, source) {
    this.trigger = trigger;
    this.toRomCode = romCode;
    this.toBank = bank;
    this.toMap = map;
    this.toWarpNo = warpNo;
    this.source = source;
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

/**
 *  GRAPHING / CONNECTION MANAGEMENT
 */

 function ReigonNode(id) {
    this.data = {};
    this.data.id = id;
    this.classes = 'reigon';
}

function AreaNode(node) {
    this.data = {};
    this.data.id = toMapBank(node[0]);
    this.data.isMap = true;
    this.data.parent = toReigon(node[0]);
    this.data.label = node[0] + " (" + node[1].name.split("-")[0] + "- " + node[1].name.split("-")[1].trim() + ")";
}

function WarpNode(data) {
    this.data = {};
    this.data.id = data[0];
    this.data.parent = toMapBank(data[0]);
    this.data.label = data[1].name ? data[0] + data[1].name.split("-")[2] : data[0] + " (Unnamed)";
    this.classes = 'outline';
    this.data.isWarp = true;
    this.data.isMapped = false;
    this.data.needsReturn = data[1].tags && data[1].tags.includes("needs_return");
    this.data.noReturn = data[1].tags && data[1].tags.includes("no_return");
    this.data.lowPriority = data[1].tags && data[1].tags.includes("low_priority");
    this.data.hasMultipleConnections = data[1].connections ? Object.values(data[1].connections).filter(n => n == true).length > 0 : false;
}

function FixedEdge(source, target) {
    this.data = {};
    this.data.id = source + "->" + target;
    this.data.source = source;
    this.data.target = target;
    this.classes = 'fixed';
}

function CondidtionalEdge(source, target, condition) {
  this.data = {};
  this.data.id = source + "->" + target;
  this.data.source = source;
  this.data.target = target;
  this.classes = 'conditional';
  this.condition = condition;
}

function WarpEdge(source, target, count) {
  this.data = {};
  this.data.id = source + "->" + target + "#" + window.cy.getElementById(source + "->" + target).length;
  this.data.source = source;
  this.data.target = target;
  this.data.isWarp = true;
  this.classes = 'warp';
}

function getAugmetedRemappingData(remappingData) {

  remappingData = addGroupedMappings(remappingData);
  remappingData = addTriggerData(remappingData);

  return remappingData;
}

function addGroupedMappings(remappingData) {
  
  let groupMappings = [];

  remappingData.forEach(m => {
    let groups = getMapData()[m.source].grouped;
    if (groups) {
      groups.forEach(g => {
        groupMappings.push({source: g, target: m.target});
      });
    }
  })

  return [...remappingData, ...groupMappings];
}

function addTriggerData(remappingData) {

  return remappingData.map(m => {
    m.trigger = getMapData()[m.source].to;
    return m;
  });

}

function getBaseRemappingData() {
  return cy.edges().filter(e => e.data().isWarp).map(e => { return {source: e.data().source, target: e.data().target} });
}

function getFilteredData() {
    let warpIdData = new Map(Object.entries(getMapData()));
    warpIdData = filterIgnored(warpIdData);
    warpIdData = filteGroupedNotMain(warpIdData);
    warpIdData = filterByConfig(warpIdData, getRandomisationConfig());

    // In future this could be config. Remove some deadends that litterally only have dialog to speed things up
    warpIdData = removeRemovableLocations(warpIdData);

    return warpIdData;
}

function toReigon(id) {
    switch(id[0]) {
        case 'F': return 'KANTO'
        case 'C': return 'JOHTO'
        case 'E': return 'HOENN'
    }
}

function findAccessibleUnmappedNodes(cy, root) {
  let nodeSet = new Set();
  cy.elements().bfs({roots: cy.getElementById(root), directed: true, visit: (v, e, u, i, depth) => {
    
    if(!v.data().isMapped) {
      nodeSet.add(v)
    }

  }});
  return nodeSet;
}

/**
 * TLDR How the mapping works
 * 
 * TERMS:
 * Components - a set of warps that could be connected. 
 *              If you can get from one door to another without going through a door then they are in the same component
 *              i.e All the warps in SLATEPORT + DEWFORD + PETALBURG e.t.c are one component because you could surf between them
 * Node       - A warp tile / warp tile group (i.e for when you have a double door)
 * Hub        - A group of nodes where the dones have at least on connection
 * Deadend    - A node where the node only has one connection
 * Connection - A path from one node to another without going through a warp
 * Conditional Connection - A path from one node to another that is only avaiable when certain game conditions have been met
 * Flag Locations - A location that, by itself or with other locations, will allow a conditional connection to be available  
 * Key Locations  - locations that are importaint but unlock any conditional connections e.g the champion battle
 * Escape Warps   - A single node (or single random node from a set of nodes) where access is directional
 *                These warps eventually have to lead back home to the root node (In Oldale)
 *                e.g   a node after a ledge hop where you can't get back.
 *                e.g.2 one of the warps in Dewford has to be an escape warp in case you whiteout to there
 * 
 * Each time we do a mapping we search the graph for the nodes that can be accessed but have not been linked to another node yet.
 * 
 * 1. Start by mapping one node from each of the components. Until we can reach at least one place in every component
 * 2. Build a list of all the warps that can access the root node without traversing conditional connections and link an escape warps to them (until there are no more escape warps)
 * 3. Randomly add flag locations to the free nodes. Each time we add a flag check if any conditional connections are now available and update available warps
 * 4. Add a node from any hubs that still can't be reached (probably only the case if there is a one way path in a component) (after this only dead ends are left)
 * 5. Randomly add all the key locations (if a key loacation is not a dead end it will have already been added)
 * 6. Randomly add the rest of the dead ends
 * 7. Link up any remaning unmapped nodes to each other (if there is an odd number we link the final warp to the ice secion in shoal cave, otherwise the cave is left out)   
 *
 * NB: Some teleport tile nodes needed to be walked over for the player to access another area / item
 *     In these special cases we have to make sure that they don't link to a one-way 
 */
function doNextMapping(rng, root, progressionState) {
    let accessibleNodes = progressionState.cachedNodes ? progressionState.cachedNodes : findAccessibleUnmappedNodes(window.cy, root);
    let inacessibleNodes = cy.nodes().not(accessibleNodes).filter(e => e.data().isWarp && !e.data().isMapped);
    let inaccesibleFlagLocations = inacessibleNodes.filter(n => progressionState.unmarkedLocations.has(n.data().id));
    let inaccesibleKeyLocations = inacessibleNodes.filter(n => progressionState.unmarkedLocations.has(n.data().id));

    let percentCompletion = " ( " + Math.floor((accessibleNodes.size / (accessibleNodes.size + inacessibleNodes.length)) * 100) + "%)"

    if(accessibleNodes.size == 0 && inacessibleNodes.length == 0) { 
      return false; 
    } else if (accessibleNodes.size == 0 && (inaccesibleFlagLocations.length > 0 || inaccesibleKeyLocations.length > 0)) {

      // M.toast({html: 'ERROR: At least 1 importaint location was detected to be inaccessible. <BR>' +  
      //                'It may be impossible to complete this seed <BR> ' +
      //                'Please try a different seed or config', displayLength:10000});
      throw new Error('Seed Failed');

    } else if (accessibleNodes.size == 0 && inacessibleNodes.filter(n => !n.data().lowPriority) > 0) {

      // console.warn("Had to leave some dead ends unimportant inaccessible");
      // M.toast({html: 'WARNING: Some checks could not be completed' + 
      //                '<BR> This seed should still be possible but is not recommended', displayLength:10000});
      throw new Error('Seed Failed');

    }

    // To make the game more playable we want to certain warps have path that lead back to the start
    if (progressionState.randomMustLinkHomeWarps.length > 0) {
      let preferedList = Array.from(accessibleNodes).filter(n => !progressionState.randomMustLinkHomeWarps.includes(n.data().id));

      // If the accessible nodes only include the ones we want for escapes there's nothing we can do otherwise we can filter them from the list
      if (preferedList.length > 0) {
        accessibleNodes = new Set(preferedList);
      } else {
        // We can't use the prefered node list so we have to clear the list
        progressionState.randomMustLinkHomeWarps = [];
      }
    }

    let warp1 = null;
    let warp2 = null;
    let shouldCacheNodes = false;
    let inacessibleHubs = inacessibleNodes.filter(e => e.degree(true) > 0);

    if (progressionState.unconnectedComponents.length > 0) {

      // Random Sorting is a hack to work around a bug where the first element was never getting connected till the end
      warp1 = [...accessibleNodes].sort(() => rng.nextRange(0, 2) - 0.5)[rng.nextRange(0, accessibleNodes.size - 1)];
      
      accessibleNodes.delete(warp1);

      // Add a node from every component of the graph (with the assumption no warps are present but all flags are met)
      // however avoid joining on 'escape' warps that would be needed to avoid self soft lock (e.g only warp after going down a ledge)
      // Techically this could cause an issue with hubs that allow flags by themself but that's only meteor falls

      let candidateUnconnectedComponentNodes = progressionState.unconnectedComponents.flat();

      let preferedcandidateUnconnectedComponentNodes = candidateUnconnectedComponentNodes.filter(n => !progressionState.randomMustLinkHomeWarps.includes(n));
      if (preferedcandidateUnconnectedComponentNodes.length > 0) {
        candidateUnconnectedComponentNodes = preferedcandidateUnconnectedComponentNodes;
      } else {
        console.warn("Clearing must link home warps even though some were not satisfied");
        progressionState.randomMustLinkHomeWarps = [];
      }

      let randomNodeIdFromComponent = selectRandomWarp(rng, candidateUnconnectedComponentNodes, warp1);

      warp2 = cy.getElementById(randomNodeIdFromComponent);
      progressionState.unconnectedComponents = progressionState.unconnectedComponents.filter(c => !c.includes(randomNodeIdFromComponent));

      console.log("HUBS")
      if (progressionState.unconnectedComponents.length > 0) {
        updateProgressUI("Main Connections Remaining: " + progressionState.unconnectedComponents.length + percentCompletion);
      } else {
        updateProgressUI("Evaluating potential softlocks..." + percentCompletion);
      }

    } else if (progressionState.randomMustLinkHomeWarps.length > 0 && accessibleNodes.size > 1) {

      let warp1Candidates = cy.nodes().filter(n => !n.data().isMapped && progressionState.randomMustLinkHomeWarps.includes(n.data().id));

      if (warp1Candidates.length > 0) {
        warp1 = [...warp1Candidates][rng.nextRange(0, warp1Candidates.length - 1)];
      } else {
        warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
        console.warn("Clearing must link home warps even though some were not satisfied");
        progressionState.randomMustLinkHomeWarps = [];
      }

      accessibleNodes.delete(warp1);
      
      // Find all the nodes that have a path back to home and make sure the escape warps link back to them 
      let preferedCandidateList = null;
      if (progressionState.homeEscapesList) {

        preferedCandidateList = progressionState.homeEscapesList;

      } else {

        let fw = cy.elements().floydWarshall({directed : true});
        progressionState.homeEscapesList = Array.from(accessibleNodes).filter(n => fw.distance(cy.getElementById(root), n) != "Infinity")
        preferedCandidateList = progressionState.homeEscapesList;

        // None of the nodes in the the randomMustLinkHomeWarps should already be mapped. 
        // However some may be in the homeEscapesList. In which case we can remove them (because they already link back home)
        progressionState.homeEscapesList.forEach(n => {
          if (progressionState.randomMustLinkHomeWarps.includes(n.data().id)) {
            progressionState.randomMustLinkHomeWarps.splice(progressionState.randomMustLinkHomeWarps.indexOf(n.data().id), 1);
          }
        })
      }

      // Don't error if we've run out of warps that link back
      preferedCandidateList = preferedCandidateList.length == 0 ? accessibleNodes : preferedCandidateList;
      warp2 = selectRandomWarp(rng, preferedCandidateList, warp1);


      accessibleNodes.delete(warp2);
      progressionState.randomMustLinkHomeWarps.splice(progressionState.randomMustLinkHomeWarps.indexOf(warp1.data().id), 1);
      progressionState.homeEscapesList = (progressionState.homeEscapesList.filter(n => n.data().id != warp2.data().id));

      console.log("HOME LINKS")
      updateProgressUI("Paths to fix: " + progressionState.randomMustLinkHomeWarps.length + percentCompletion);

    } else if (inaccesibleFlagLocations.length > 0) { 

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add inacessible dead-ends that might allow flags givinb access to new locations
      warp2 = selectRandomWarp(rng, inaccesibleFlagLocations, warp1);
      warp2.addClass("significant");

      console.log("FLAGS")
      updateProgressUI("Flag Locations Left: " + inaccesibleFlagLocations.length + percentCompletion);

    } else if (inacessibleHubs.length > 0) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add any hubs that there is still no access to... I'm not sure there would even be any left...
      inacessibleNodes = inacessibleNodes.filter(e => e.degree(true) > 0);
      warp2 = selectRandomWarp(rng, inacessibleNodes, warp1);

      console.log("MORE HUBS")
      updateProgressUI("Hubs Left: " + inacessibleHubs.length + percentCompletion);

    } else if (inaccesibleKeyLocations.length > 0) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add key inacessible locations 
      warp2 = selectRandomWarp(rng, inaccesibleKeyLocations, warp1); 
      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);
      warp2.addClass("significant");

      console.log("KEY LOCATIONS");
      updateProgressUI("Key Locations Left: " + inaccesibleKeyLocations.length + percentCompletion);

    } else if (inacessibleNodes.length > 0) {

      // Add deadends that are not tagged as lowPriority first to ensure 
      // even if there arn't enough connections we make it as nice as possible

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add other inacessible dead-ends 

      let priorityInaccessibleNodes = inacessibleNodes.filter(n => !n.data().lowPriority);

      if (priorityInaccessibleNodes.length > 0) {
        warp2 = selectRandomWarp(rng, priorityInaccessibleNodes, warp1); 
      } else {
        warp2 = selectRandomWarp(rng, inacessibleNodes, warp1); 
      }

      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);

      console.log("DEADENDS");
      updateProgressUI("Deadends Left: " + inacessibleNodes.length + percentCompletion);

    } else if (accessibleNodes.size > 1) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // map together nodes that are already accessible
      warp2 = selectRandomWarp(rng, [...accessibleNodes], warp1);
      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);

      console.log("MORE CONNECTIONS");
      updateProgressUI("Finalizing Connections: " + accessibleNodes.size + percentCompletion);

    } else {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      //console.warn("Unevenly matched warps. " + warp1.data().id + " had to map to itself");
      // warp2 = warp1
      
      // if one warp is left hanging we connect it to a random odd-one-out location
      // Shoal Cave, Frontier Mart, Sothern Island, Dessert Underpass, Sealed Chamber
      let oddOneOutLocation = 'FR,1,122,0';
      warp2 = cy.add(new WarpNode([oddOneOutLocation, getMapData()[oddOneOutLocation]]));
      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);

    }


    // TODO: CACHE IS CAUSING ISSUES WITH NEW ALGORITHM SO IT'S BEEN DISABLED FOR NOW

    // Once it's only dead ends left we can cache which nodes are accessible from the root 
    // if (shouldCacheNodes && !progressionState.cachedNodes) {
    //     progressionState.cachedNodes = accessibleNodes;
    // }

    if (!warp1) {
      
      if (accessibleNodes.size != 0) {
        console.log("Some accessible nodes were left:")
        accessibleNodes.forEach(n => {
          console.log(n.data().id)
        })
      } else {
        console.log("All accesible nodes mapped")
      }

      if (inacessibleNodes.size != 0) {
        console.log("Some inaccessible nodes were left:")
        inacessibleNodes.forEach(n => {
          console.log(n.data().id)
        })

        warp2.data().isMapped = true;
        return false;

      } else {
        console.log("All inaccesible nodes mapped")
      }

    }

    window.cy.add(new WarpEdge(warp1.data().id, warp2.data().id))

    if (warp1 != warp2) {
          window.cy.add(new WarpEdge(warp2.data().id, warp1.data().id))
    }
    

    if (warp1.data().isMapped) {
      throw new Error(warp1.data().id + " (warp1) is already mapped. We shouldn't be trying to remap it")
    }

    if (warp2.data().isMapped) {
      throw new Error(warp2.data().id + " (warp2) is already mapped. We shouldn't be trying to remap it")
    }

    warp1.data().isMapped = true;
    warp2.data().isMapped = true;

    return true;
}

function updateProgressUI(progressText) {
  let elmnt = document.getElementById("mappingProgress");
  if (!progressText) {
    elmnt.classList.add("hide");
  } else {
    elmnt.classList.remove("hide");
    elmnt.innerHTML = progressText;
  }
}

function selectRandomWarp(rng, listOfWarps, connectingWarp) {

    // Some warps do not allow bi-directional travel 
    // Some warps need to be accessible in reverse not to block map access. i.e a warp tile you have to walk over to get somewhere
    // We need to make sure those don't get matched together
    let warpNeedsReturn = connectingWarp.data().needsReturn;
    let warpNoReturn = connectingWarp.data().noReturn;

    if (warpNeedsReturn) {
      listOfWarps = listOfWarps.filter(w => {
        return typeof w === 'string' ? !cy.getElementById(w).data().noReturn : !w.data().noReturn;
      });
    } else if (warpNoReturn) {
      listOfWarps = listOfWarps.filter(w => {
        return typeof w === 'string' ? !cy.getElementById(w).data().needsReturn : !w.data().needsReturn;
      });
    }

    if (listOfWarps.length == 0) {
      M.toast({html: 'ERROR: Progression logic could not be verified.<BR> Please try a different seed', displayLength:5000});
    }

    return listOfWarps[rng.nextRange(0, listOfWarps.length - 1)];
}


function updateProgressionState(updateProgressionState, root) {

  let currentNodes = new Set();
  cy.elements().bfs({roots: cy.getElementById(root), directed: true, visit: (v, e, u, i, depth) => { 
    currentNodes.add(v.data().id) 
  }});

  updateProgressionState.unmarkedLocations.forEach((name, location) => {
    if (currentNodes.has(location)) {
      updateProgressionState.unmarkedLocations.delete(location);
      updateProgressionState.flags.add(name);
    }
  });

  updateProgressionState.unmarkedFlags.forEach(n => {
    if (n.condition.every(flag => updateProgressionState.flags.has(flag))) {
      updateProgressionState.flags.add(n.flag);
      updateProgressionState.unmarkedFlags.delete(n.flag)
    }
  });

  let conditionalEdges = updateProgressionState.remainingConditionalEdges;
  conditionalEdges.forEach(e => {
    if (updateProgressionState.flags.has(e.condition)) {
      if (cy.getElementById(e.data.target).length > 0 && cy.getElementById(e.data.source).length > 0) {
        cy.add(e);
      }
      conditionalEdges.delete(e);
    }
  });

  return updateProgressionState;
}

function initMappingGraph(mapData, isHeadless, progressionState) {

  var cy = window.cy = cytoscape({
      container: isHeadless ? null : document.getElementById('cy'),
      headless: isHeadless,
      styleEnabled: !isHeadless,
      boxSelectionEnabled: false,
      textureOnViewport: true,
    
      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center'      
          },
          style: {
            'shape' : 'roundrectangle',
          }
        },
        {
          selector: 'edge',
          css: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        },
        {
          'selector': 'node[label]',
          'style': {
            'label': 'data(label)',
            'text-valign': 'bottom',
            'text-halign': 'center'
          }
        },
        {
          selector: '.reigon',
          css: {
              'background-color': '#2f3138',
              'color' : '#C0C0C0',
              'font-size' : '5em',
              "text-valign": "top"
          },
        },
        {
          selector: '.map-F',
          css: {
              'background-color': '#ffc0c3',
              'color' : '#C0C0C0',
              'font-size' : '2em'
          }
        },
        {
          selector: '.map-C',
          css: {
              'background-color': '#c0c3ff',
              'color' : '#C0C0C0',
              'font-size' : '2em'
          }
        },
        {
          selector: '.map-E',
          css: {
              'background-color': '#262729',
              'color' : '#C0C0C0',
              'font-size' : '2em'
          }
        },
        {
          selector: '.warp',
          css: {
            'line-color': '#f92411',
            "curve-style": "straight-triangle",
          }
        },
        {
          selector: '.conditional',
          css: {
            'line-color': '#1911f9'
          }
        },
        {
          selector: '.fixed',
          css: {
            'opacity': '0.5'
          }
        },
        {
          selector: '.significant',
          css: {
            'background-color': '#FFD700',
            'shape' : 'hexagon'
          }
        },
        {
          selector: '.indoors',
          css: {
              'background-color': '#543d48',
          }
        },
        {
          selector: '.faded',
          css: {
            opacity: 0.2,
            'line-color': '#24080c'
          }
        },
      ],
    
      elements: {
        nodes: [],
        edges: []
      }
    });


    cy.add(new ReigonNode("KANTO"));
    cy.add(new ReigonNode("JOHTO"));
    cy.add(new ReigonNode("HOENN"));

    let data = [...mapData];

    // Add the nodes
    data.forEach(d => {

      if (!cy.getElementById(toMapBank(d[0])).length) {
          cy.add(new AreaNode(d)).addClass("map-" + d[0][0]);
      }

      cy.add(new WarpNode(d));
    })

    // Add fixed edges
    data.forEach(d => {

      let connections = d[1].connections ? d[1].connections : {};

      Object.entries(connections).forEach(entry => {

        if (typeof entry[1] == 'string') {

          // Conditional Connection
          progressionState.remainingConditionalEdges.add(new CondidtionalEdge(d[0], entry[0], entry[1]));

          // Temporarily add conditional edges in the graph so we can work out what areas will be connected in future
          if (cy.getElementById(entry[0]).length > 0) {
            cy.add(new CondidtionalEdge(d[0], entry[0], entry[1]))
          }

        } else {

          // Fixed Connection       

          // Only draw path if connection node is present in total list of warps
          // i.e if I'm only doing warps to first gym, don't draw a connection to a gym 2 level warp 
          if (cy.getElementById(entry[0]).length > 0) {
            cy.add(new FixedEdge(d[0], entry[0]))
          }
        }
      });
    });

    // calculate future connected areas then remove all conditional edges from the network
    progressionState.unconnectedComponents = cy.elements().components()
                                                          .filter(e => e.size() > 1)
                                                          .map(e => e.toArray().filter(n => n.group() == "nodes" && n.data().isWarp && n.data().hasMultipleConnections).map(p => p.data().id))
                                                          .filter(arr => arr.length > 0);
    progressionState.remainingConditionalEdges.forEach(node => cy.getElementById(node.data.id).remove());

    cy.nodes().forEach(function(node){
      node.css("width", 80);
      node.css("height", 80);
    });

    if (!isHeadless) {
        cy.layout({name: 'cose-bilkent', animationDuration: 1000, nodeDimensionsIncludeLabels: true}).run();
    }

    progressionState.makeFinalLocationsKey();
    return progressionState;
}

/* HINTS */
function getHint(location) {
  let mapData = new Map(Object.entries(getMapData()));
  let warp = warpList.get(mapData.get(location).to);
  if (!warp) {
    return "NOT PRESENT";
  }
  let info = mapData.get(warp.toRomCode + "," + warp.toBank + "," + warp.toMap + "," + warp.toWarpNo).name;
  let hint = warp.toRomCode == "E" ? "HOENN - " : (warp.toRomCode == "C" ? "JOHTO - " : "KANTO - ");
  return hint + info.split("-")[0].trim() + " - " + info.split("-")[1].trim();
}

var HINTABLE_LOCATIONS = {
  "BROCK"               : "FR,6,2,1"  ,
  "MISTY"               : "FR,7,5,1"  ,
  "LT SURGE"            : "FR,9,6,1"  ,
  "ERIKA"               : "FR,10,16,1",
  "KOGA"                : "FR,11,3,1" ,
  "SABRINA"             : "FR,14,3,1" ,
  "BLAINE"              : "FR,12,0,1" ,
  "GIOVANNI"            : "FR,5,1,1"  ,
  "E4 LORELEI"          : "FR,1,75,0" ,
  "E4 BRUNO (FR)"       : "FR,1,76,0" ,
  "E4 AGATHA"           : "FR,1,77,0" ,
  "E4 LANCE"            : "FR,1,78,0" ,
  "CHAMPION RIVAL"      : "FR,1,79,0" ,

  "FALKNER"            : "C,8,1,0" ,
  "BUGSY"              : "C,3,3,0" ,
  "WHITNEY"            : "C,11,3,0",
  "MORTY"              : "C,12,1,0",
  "CHUCK"              : "C,4,1,0" ,
  "JASMINE"            : "C,10,0,0",
  "PRYCE"              : "C,14,0,0",
  "CLAIR"              : "C,15,0,0",
  "E4 WILL"            : "C,16,0,0",
  "E4 KOGA"            : "C,16,1,0",
  "E4 BRUNO (C)"       : "C,16,2,0",
  "E4 KAREN"           : "C,16,3,0",
  "CHAMPION LANCE"     : "C,16,4,0", 

  "ROXANNE"          : "E,11,3,0"  ,
  "BRAWLY"           : "E,3,3,0"   ,
  "WATTSON"          : "E,10,0,0"  ,
  "FLANNERY"         : "E,4,1,0"   ,
  "NORMAN"           : "E,8,1,0"   ,
  "WINONA"           : "E,12,1,0"  ,
  "TATE AND LIZA"    : "E,14,0,0"  ,
  "JUAN"             : "E,15,0,0"  , 
  "SIDNEY"           : "E,16,0,0"  ,
  "SIDNEY_BACK"      : "E,16,0,1"  ,
  "PHOEBE"           : "E,16,1,0"  ,
  "PHOEBE_BACK"      : "E,16,1,1"  ,
  "GLACIA"           : "E,16,2,0"  ,
  "GLACIA_BACK"      : "E,16,2,1"  ,
  "DRAKE"            : "E,16,3,0"  ,
  "DRAKE_BACK"       : "E,16,3,1"  ,
  "WALLACE"          : "E,16,4,0"  ,
  "STEVEN"           : "E,24,107,0",
}

var LOCATIONS_DISABLED_FLAGS = {
  "CUT"                  : ["HOENN_CUT"],       
  "FLASH"                : ["HOENN_FLASH"],         
  "ROCKSMASH"            : ["HOENN_ROCK_SMASH"],             
  "STRENGTH"             : ["HOENN_STRENGTH"],            
  "WATERFALL"            : ["HOENN_WATERFALL"],   

  "BIKE SHOP"            : ["BIKE"], 
  "MAGMA EMBLEM"         : ["MAGMA_EMBLEM"],    
  "STOREAGE KEY"         : ["STOREAGE_KEY"],

  "STONE OFFICE"         : ["TALK_TO_STONE"], 
  "STEVEN LETTER"        : ["UNLOCK_SLATEPORT"],  
  "WEATHER INSTITUTE F2" : ["WEATHER_INSTITUTE"], 
  "WALLACE ORIGIN CAVE"  : ["SPEAK_TO_WALLACE"], 
  "METEOR FALLS F1"      : ["MAGMA_METEOR_FALLS"],
  
  "ROXANNE"              : ["HOENN_CUT", "HOENN_FLASH", "HOENN_ROCK_SMASH", "HOENN_STRENGTH", "HOENN_SURF", "HOENN_WATERFALL"],
  "BRAWLY"               : ["HOENN_FLASH", "HOENN_ROCK_SMASH", "HOENN_STRENGTH", "HOENN_SURF", "HOENN_WATERFALL"],
  "WATTSON"              : ["HOENN_ROCK_SMASH", "HOENN_STRENGTH", "HOENN_SURF", "HOENN_WATERFALL"],
  "FLANNERY"             : ["HOENN_STRENGTH", "HOENN_SURF", "HOENN_WATERFALL"],
  "NORMAN"               : ["HOENN_SURF", "HOENN_WATERFALL"],
  "WINONA"               : ["HOENN_WATERFALL"],
  "TATE AND LIZA"        : ["HOENN_WATERFALL"],
  "JUAN"                 : ["HOENN_WATERFALL"]
}


function flagWeight(edge, location) {
  if (edge.data().isWarp) {
    return 1;
  } 

  var difficulty = getMapData()[edge.data().source].connections[edge.data().target];

  if (difficulty === true) {
    // If the path is always traversable give a weight of 1
    return 1;
  } else if (LOCATIONS_DISABLED_FLAGS[location]) {
    // If player is searching for a flag location try and avoid suggesting a route locked behind said flag
    if (LOCATIONS_DISABLED_FLAGS[location].includes(difficulty)) {
      return 99999;
    }
  }

  // Otherwise use standard wieghts (prioritize least flags flags completed)
  return Object.values(COMPOSITE_FLAGS).filter(f => f.flag == difficulty)[0].condition.length * 100;
}

function shortestPath(location) {
  var fw = cy.elements().floydWarshall({weight: (edge) => flagWeight(edge, location),  directed : true})
  return shortestPathPreCalcFW(fw, location);
}

function allshortestPaths() {
  var fw = cy.elements().floydWarshall({weight: (edge) => flagWeight(edge, location),  directed : true})
  return Object.entries(PATH_FINDING_LOCATIONS).map(i => {
    let result = shortestPathPreCalcFW(fw, i[1]);
    result.name = i[0];
    return result;
  });
}

function shortestPathPreCalcFW(fw, location) {
  let path = fw.path(cy.getElementById("E,0,10,2"), PATH_FINDING_LOCATIONS[location] ? cy.getElementById(PATH_FINDING_LOCATIONS[location]) : cy.getElementById(location)).map(n =>  {
     if(n.isNode()) {
       return Object.assign({}, getMapData()[n.data().id]);
     } else if (n.data().isWarp) {
       return {name: n.data().id, type: "WARP"}
     } else {
       return {name: n.data().id, type: "WALK", conditions: [getMapData()[n.data().source].connections[n.data().target]]}
     }
  });

  let allFlagsRequired = [];

  for (i = path.length - 1; i >= 2; i--) {
    if (path[i].type == "WALK" && path[i-2].type == "WALK") {
      path[i].collapse = true;
      path[i-1].collapse = true;

      path[i-2].conditions = path[i-2].conditions.concat(path[i].conditions);
    } 
    
    if (path[i].type == "WALK") {
      allFlagsRequired = allFlagsRequired.concat(path[i].conditions);
    }
  }

  let instructions = path.filter(n => !n.collapse).map(n => {
    if (n.type && n.conditions) {
      let requirements = "(" + Array.from(new Set(n.conditions.filter(c => typeof c === 'string'))).join(",") + ")";
      return requirements == "()" ? n.type : n.type + requirements;
    } else if (n.type) {
      return n.type
    } 

    return n.name
  });

  return {"route": instructions, "flags": new Set(allFlagsRequired.filter(c => typeof c === 'string'))}
}

// Sets of warps where at least 1 needs to lead back home to prevent softlocks
// To meet the criterea warps there should:
// 1) Be a way to get to a warp / set of warps
// 2) And unable to get back (e.g whiteout, teleported, ledge hop, game state change, from forced surf)
var ESCAPE_PATHS = [

  // Several areas areas are not included in the list because they are big hubs (10+ warps can be accessed)
  // For example Rustboro (entering through Rest House or Metor falls exit or whiteout) could lock you if all houses were dead ends
  // In this case a player would have to whiteout or use the escape option in the menu
  // This is not mathmatically perfect but should make the game more playable

  /* KANTO */
  // In FR whiteout goes inside the pk center

  // Whiteouts (these probably arn't needed as a player did manage to get here in the first place)
    // // Viridian
    // ["FR,5,4,1", "FR,5,4,3"],
    // // Pewter
    // ["FR,6,5,1", "FR,6,5,3"],
    // // Viridian
    // ["FR,5,4,1", "FR,5,4,3"],
    // // Route 4
    // ["FR,16,0,1", "FR,16,0,3"],
    // // Cerulean
    // ["FR,7,3,1", "FR,7,3,3"],
    // // Vermillion
    // ["FR,9,1,1", "FR,9,1,3"],
    // // Route 10
    // ["FR,21,0,1", "FR,21,0,3"],
    // // Lavender
    // ["FR,8,0,1", "FR,8,0,3"],
    // // Celadon
    // ["FR,10,12,1", "FR,10,12,3"],
    // // Saffron
    // ["FR,14,6,1", "FR,14,6,3"],
    // // Fuchsia
    // ["FR,11,5,1", "FR,11,5,3"],
    // // Cinnabar
    // ["FR,12,5,0", "FR,12,5,3"],
    // Indigo Plateua when blocked / whiteout
    ["FR,13,0,0", "FR,13,0,2"],

  // Guard House route 22
  ["FR,28,0,2"],

  // Ledge hop, walk from mt moon 
  ["FR,3,2,6", "FR,3,2,5", "FR,3,2,3", "FR,3,2,4", "FR,3,2,2", "FR,3,2,0"],

  // Ledge hop cerulan 
  ["FR,3,3,0", "FR,3,3,2", "FR,3,3,3", "FR,3,3,4", "FR,3,3,5", "FR,3,3,6", "FR,3,3,0", "FR,3,3,12", "FR,3,3,13", "FR,3,44,0"],

  // SS Anne to vermillion
  ["FR,3,5,3", "FR,3,5,4", "FR,3,5,5", "FR,3,5,6", "FR,3,5,7", "FR,3,5,8", "FR,3,29,0", "FR,3,29,1", "FR,3,24,0", "FR,3,24,1"],

  // Powerplant after ledge hop
  ["FR,3,28,2"],

  // Poketower past ghost
  ["FR,1,93,1"],

  // Lavender teleport to pokeflute house
  ["FR,8,2,1"],

  // route 10
  //["FR,3,28,3", "FR,3,28,0"],

  // Whiteout to Lavender
  //["FR,3,4,0", "FR,3,4,1", "FR,3,4,2", "FR,3,4,3", "FR,3,4,4", "FR,3,4,5", "FR,3,28,1", "FR,3,30,1", "FR,3,4,0", "FR,3,26,0", "FR,3,26,1"],

  // Whiteout to celadon
  //["FR,3,6,0", "FR,3,6,1", "FR,3,6,2", "FR,3,6,3", "FR,3,6,4", "FR,3,6,5", "FR,3,6,7", "FR,3,6,8", "FR,3,6,9", "FR,3,6,11", "FR,3,25,0", "FR,3,25,1"],

  // Bike Path Top
  ["FR,25,1,3", "FR,25,1,4"],

  // Bike Path Bottom
  ["FR,26,0,1", "FR,26,0,2"],

  // Saffron Through guard 
  ["FR,3,10,9", "FR,3,10,11", "FR,3,10,10", "FR,3,10,8", "FR,3,10,7", "FR,3,10,9", "FR,3,10,6", "FR,3,10,0", "FR,3,10,2", "FR,3,10,5", "FR,3,10,14"],

  // Tea guard north, south, east, west
  ["FR,17,1,1"],
  ["FR,18,0,2"],
  ["FR,19,0,0"],
  ["FR,20,0,2"],

  // Fuchsia whiteout
  //["FR,3,7,0", "FR,3,7,1", "FR,3,7,2", "FR,3,7,3", "FR,3,7,4", "FR,3,7,5", "FR,3,7,6", "FR,3,7,7", "FR,3,7,10", "FR,3,33,0", "FR,3,36,1"],

  // Cinnabar through gym
  ["FR,3,8,0", "FR,3,8,2", "FR,3,8,2", "FR,3,8,3", "FR,3,8,4"],

  // E4 - 1 Exit
  ["FR,1,75,1"],

  // E4 - 2 Exit
  ["FR,1,76,1"],

  // E4 - 3 Exit
  ["FR,1,77,1"],

  // E4 - 4 Exit
  ["FR,1,78,1"],

  /* JOHTO */

  // Victory Road ledge hop
  ["C,24,44,1", "C,24,44,3"],

  // Route 26 guard check
  ["C,32,0,0"],

  // whiteout Indigo Plateau
  ["C,0,8,0", "C,0,8,3"],

  // Route 27 ledge hop
  ["C,0,35,0"],

  // New Bark/ CherryGrove / Ledge hop from dark cave / whiteout
  ["C,0,9,0", "C,0,9,1", "C,0,9,2", "C,0,9,3", "C,0,16,0", "C,0,10,0", "C,0,10,1", "C,0,10,2", "C,0,10,3", "C,0,17,0", "C,0,17,1"],

  // Violet/Route 32 from whiteout / walk back past seed guy
  ["C,0,0,0", "C,0,0,1", "C,0,0,2", "C,0,0,3", "C,0,0,4", "C,0,0,5", "C,0,0,6", "C,0,0,7", "C,0,19,0", "C,0,23,0"],

  // Ruins of alph ledge hop
  ["C,24,86,9"],

  // Ruins of alph through escape rope door
  ["C,24,88,0"],

  // Ruins of alph through flash door
  ["C,24,9,0"],

  // Whiteout / through gym to Azalea
  ["C,0,20,0", "C,0,11,6", "C,0,11,5", "C,0,11,4", "C,0,11,3", "C,0,11,1", "C,0,11,0"],

  // Golden rod through whiteout or rocket guarded door
  ["C,0,21,0", "C,0,21,2", "C,0,3,0", "C,0,3,2", "C,0,3,3", "C,0,3,5", "C,0,3,6", "C,0,3,8", "C,0,3,11", "C,0,3,14"],

  // Golden rod underground locked door
  ["C,11,9,1", "C,11,9,0"],

  // Raido Tower through guarded door
  ["C,24,53,3"],

  // Ecruteak Walk back past tin tower guard
  ["C,9,7,0"],

  // Ecruteak whitout
  ["C,0,1,0", "C,0,1,1", "C,0,1,2", "C,0,1,4", "C,0,1,5", "C,0,1,6", "C,0,1,7", "C,0,1,8", "C,0,1,10", "C,0,1,11"],

  // Olivne Whiteout
  ["C,0,25,0", "C,0,26,0", "C,0,26,1", "C,0,2,0", "C,0,2,1", "C,0,2,2", "C,0,2,3", "C,0,2,4", "C,0,2,5", "C,0,2,6", "C,0,2,7", "C,0,2,8", "C,0,27,0"],

  // Whirl island fork room ledge hop 1
  ["C,24,30,1"],

  // Whirl island fork room ledge hop 2
  ["C,24,30,2"],

  // Whirl island maze room ledge hops
  ["C,24,34,7"],

  // Whirl island down waterfall
  ["C,24,35,2", "C,24,35,3"],

  // Cianwood Whiteout
  ["C,0,12,0", "C,0,12,1", "C,0,12,2", "C,0,12,3", "C,0,12,4", "C,0,12,5", "C,0,12,6"],

  // Mt Mortar down waterfall
  ["C,24,15,1", "C,24,15,8"],

  // Mr Mortar ledge room
  ["C,24,16,3", "C,24,16,5", "C,24,16,4", "C,24,16,2"],

  // Mahogany whiteout / through gym / back past rage bar guy
  ["C,0,13,0", "C,0,13,2", "C,0,13,3", "C,0,13,4", "C,0,29,3"],

  // Ice path rock drop room
  ["C,24,52,0"],

  // Blackthorn whiteout / through dragons den / route 46 ledge hop / route 45 ledge hop
  ["C,0,33,1"],

  // Dark Cave room 1 ledge hop
  ["C,24,7,0"],

  // Dark Cave room 2 ledge hop
  ["C,24,8,0"],

  // E4 - 1 Exit
  ["C,16,0,1"],

  // E4 - 2 Exit
  ["C,16,1,1"],

  // E4 - 3 Exit
  ["C,16,2,1"],

  // E4 - 4 Exit
  ["C,16,3,1"],

  /* HOENN */

  // Bottom bike path without bike
  ["E,29,11,0"],

  //Top Bike path without bike
  ["E,29,12,0"],

  // Oldale/LittleRoot after whiteout or ledge hop from route 104
  ["E,0,9,0", "E,0,9,1", "E,0,9,2", "E,0,10,0", "E,0,10,1", "E,0,10,2", "E,0,10,3"],

  // Dewford / Granite enterance (For enterance by whiteout)
  ["E,0,11,0", "E,0,11,1", "E,0,11,2", "E,0,11,3", "E,0,11,4", "E,0,21,0"],

  // Sootopolis Gym (Surf after cut scene)
  ["E,0,7,2"],

  // Sootopolis Left Side (Surf after cut scene)
  ["E,0,7,10", "E,0,7,1", "E,0,7,8", "E,0,7,6", "E,0,7,4", "E,0,7,3", "E,0,7,13"],

  // Sootopolis Right Side (Whiteout / Surf after cut scene)
  ["E,0,7,0", "E,0,7,12", "E,0,7,9", "E,0,7,11", "E,0,7,7", "E,0,7,5"],

  // Evergrande top (Whiteout)
  ["E,0,8,0", "E,0,8,3"],

  // Evergrande bottom (Whiteout)
  ["E,0,8,1", "E,0,8,2"],

  // Evergrande inside after walking past guards
  ["E,16,10,4", "E,16,10,0"],

  // Pacifidlog (Whiteout)
  ["E,0,15,0", "E,0,15,1", "E,0,15,2", "E,0,15,3", "E,0,15,4", "E,0,15,5"],

  // Mossdeep (whiteout)
  ["E,0,6,0", "E,0,6,1", "E,0,6,2", "E,0,6,3", "E,0,6,4", "E,0,6,5", "E,0,6,6", "E,0,6,7", "E,0,6,8", "E,0,6,9"],

  // Slateport (whiteout)
  ["E,0,1,0", "E,0,1,1", "E,0,1,2", "E,0,1,3", "E,0,1,4", "E,0,1,6", "E,0,1,8", "E,0,1,10", "E,0,24,0", "E,0,25,4"],

  // Mauville/Verdanterf (whiteout)
  ["E,0,25,1", "E,0,25,2", "E,0,2,0", "E,0,2,1", "E,0,2,2", "E,0,2,3", "E,0,2,4", "E,0,2,5", "E,0,2,6", "E,0,26,0", "E,0,26,4", "E,0,32,0", "E,0,14,0", "E,0,14,1", "E,0,14,2", "E,0,14,3", "E,0,14,4", "E,0,14,5", "E,0,14,6"],

  // Fallabough (whiteout)
  ["E,0,26,2", "E,0,27,5", "E,0,28,0", "E,0,13,0", "E,0,13,1", "E,0,13,2", "E,0,13,3", "E,0,13,4", "E,0,29,0", "E,0,29,1", "E,0,29,2"],

  // Lilycove / Fortree (whiteout)
  ["E,0,5,0", "E,0,5,1", "E,0,5,2", "E,0,5,3", "E,0,5,4", "E,0,5,5", "E,0,5,7", "E,0,5,8", "E,0,5,9", "E,0,5,10", "E,0,5,11", "E,0,5,12", "E,0,36,0"],

  // Firey Path bottom (Exit from desert, Hop down from Lavaridge)
  ["E,0,27,4", "E,0,27,0"],

  // E4 - 1 Exit
  ["E,16,0,1"],

  // E4 - 2 Exit
  ["E,16,1,1"],

  // E4 - 3 Exit
  ["E,16,2,1"],

  // E4 - 4 Exit
  ["E,16,3,1"],

  // Meteor Falls (Ledge hop)
  ["E,24,1,0", "E,24,1,3"],

  // Grannite Cave F1 (Ledge Hop)
  ["E,24,7,0", "E,24,7,2"],

  // Grannite Cave walk down bike slide
  ["E,24,8,3", "E,24,8,1"],

  // Grannite Cave F3 (After falling)
  ["E,24,9,2"],

  // Jagged Pass (After ledge hop / magma emblem door)
  ["E,24,13,0"],

  // Mt Pyre F1 (after Drop)
  // (Ignoring 24,15,5)
  //["E,24,15,0", "E,24,15,1", "E,24,15,4"],

  // Mt Pyre F2 (after Drop)
  // (Ignoring 24,16,3 / 24,16,2)
  ["E,24,16,0", "E,24,16,1", "E,24,16,4"],

  // Mt Pyre F3 Left bottom (after drop)
  // Ignore 24,17,3
  // ["E,24,17,5"],

  // Mt Pyre F3 Right (after drop)
  // Ignore 24,18,2
  //["E,24,18,0", "E,24,18,1", "E,24,18,4"],

  // Mt Pyre F4 Top (after drop)
  // Ignore 24,18,3
  //["E,24,18,5"],

  // Mt Pyre F4 (after drop)
  // Ingore 24,19,2
  // ["E,24,19,3", "E,24,19,4"],

  // Aqua Hideout Enterance From Surf
  ["E,24,23,2"],

  // Seafloor Cavern after ledge hop
  ["E,24,31,3"],

  // V. Road F2 bottom (after ledge hop)
  ["E,24,44,0"],

  // V. Road F2 top (after ledge hop without strength)
  ["E,24,44,4"],

  // V.Road F3 (after ledge hop)
  ["E,24,45,0"],

  // New Mauville (without basement key)
  ["E,24,52,0"],

  // Abandoned Ship Hub (through locked door without storeage key)
  ["E,24,57,0", "E,24,57,1", "E,24,57,2", "E,24,57,3", "E,24,57,4", "E,24,57,6", "E,24,57,7"],

  // Desert Ruins (From locked door)
  ["E,24,6,0"],

  // Ancient Tomb (From locked door)
  ["E,24,68,0"],

  // Sky Pillar (Without talking to Wallace)
  ["E,24,78,0"],

  // Sky Pillar F1 (From Drop) // Currently not possible because sky pillar is always in unbroken state
  // ["E,24,79,0"],

  // Sky Pillar F3 (From side drop)
  ["E,24,81,0", "E,24,81,1"],

  // Sky Pillar F3 (From center drop)
  ["E,24,81,2"],

  // Magma Hideout From (ledge hop)
  ["E,24,86,1"],

  // Mirrage tower (Drops from any higher floors)
  ["E,24,94,0", "E,24,94,1"],

  // Wally's house inside (Teleported there after fight with norman)
  ["E,8,0,0"],

  // Lily Cove (dock inside from ship)
  ["E,13,10,0"],

  // Slateport Dock (after talking to reporter)
  ["E,9,9,0"],

  // Seafloor cavern strength + rocksmash room (exit and re-enter top right)
  ["E,24,29,3"]
]