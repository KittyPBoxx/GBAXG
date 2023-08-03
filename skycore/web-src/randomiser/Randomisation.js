import { CRYSTAL_WARPS } from "./CrystalWarps.json.js";
import { EMERALD_WARPS } from "./EmeraldWarps.json.js";
import { FIRE_RED_WARPS } from "./FireRedWarps.json.js";
import { FLAG_DATA } from "./ProgressionLogic.js";

class Randomiser {

  constructor(headless) {

    this.mixedGameData = {};
    Object.entries(FIRE_RED_WARPS).forEach(e => this.mixedGameData[e[0]] = e[1]);
    Object.entries(CRYSTAL_WARPS).forEach(e => this.mixedGameData[e[0]] = e[1]);
    Object.entries(EMERALD_WARPS).forEach(e => this.mixedGameData[e[0]] = e[1]);

    this.remappingData = new Map();
    this.config = {};
    this.config.kantoLevel = 1;
    this.config.johtoLevel = 1; 
    this.config.hoennLevel = 1; 
    this.config.extraDeadendRemoval = true;
    
    this.maxRetyAttempts = 5;
    this.seed = "";
    this.hash = "";

    this.storedMappingFileName = '/offline/mapping.json';
    
    this.isHeadless = headless;
    this.cy = {};
    this.uiContainer = null; // Element to draw in if not in headless mode

    // TODO: this callback needs to persist the data and update the hash
    this.onNewMappingCreated = () => {};
    this.updateProgressText = () => {};
    this.onConfigChanged = () => {};

    this.hintableLocations = HINTABLE_LOCATIONS;
    this.keyLocations = KEY_LOCATION_DATA;
  }

  getFlagData() {
    return FLAG_DATA;
  }

  getMapData() {
    return this.mixedGameData;
  }

  getRandomisationConfig() {
    return this.config;
  }

  setRandomisationConfig(prop, value) {
    this.config[prop] = value;
  }

  exportMapping() {
      let data = JSON.stringify(new WarpListData(this.seed, this.config, this.remappingData, this.hash));
      this.save("WarpMapping_" + this.seed + ".json", data, "application/json;charset=utf-8");
  }

  persistCurrentMappings() {
    let warpMappings = JSON.stringify(new WarpListData(this.seed, this.config, this.remappingData, this.hash));
    FS.writeFile(this.storedMappingFileName, warpMappings);
    FS.syncfs(function (err) {});
  }

  loadSavedMappings() {
    try {
        let mappings = FS.readFile(this.storedMappingFileName, { encoding: "utf8" }); 
        this.loadMappingFromJson(mappings);
    } catch (e) {

    };
  }

  save(name, data, type) {
    var element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(new Blob( [data], {"type":type} )));
    element.setAttribute('download', name);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  importMapping(file) {
  
    let reader = new FileReader();
    reader.readAsText(file,'UTF-8');
  
    reader.onload = readerEvent => {
        let content = readerEvent.target.result;
        this.loadMappingFromJson(content);
     }
  }

  loadMappingFromJson(json) {
    let warpListData = JSON.parse(json);

    this.remappingData = new Map(warpListData.warpList);
        
    this.kantoLevel = warpListData.config.kantoLevel;
    this.johtoLevel = warpListData.config.johtoLevel;
    this.hoennLevel = warpListData.config.hoennLevel;

    this.hash = warpListData.hash;
    this.seed = warpListData.seed;

    this.onConfigChanged();
    this.updateProgressText("Finished Checksum: " + this.hash);

    this.persistCurrentMappings();
  }
  

  async mapWarps(seed) {

    this.flagsState = {};
    this.unaddedConditionalEdges = {};
    this.attempts = this.maxRetyAttempts;

    let config = this.getRandomisationConfig();
    let mapData = this.getFilteredData();
    let flagData = this.getFlagData();
    let escapePaths = this.getFlagData()["ESCAPE_PATHS"];
    this.generateRandomMappings(this.onRandomisationAlogrithmRun, seed, mapData, flagData, config, escapePaths);
  }

  onRandomisationAlogrithmRun(randomiser, finishedData, seed, config) {
    randomiser.updateProgressText("Processing Map Data...")
    randomiser.remappingData = randomiser.mappingToWarps(randomiser.getAugmetedRemappingData(finishedData));
    randomiser.hash = Math.abs(RNG.getHash(JSON.stringify(Array.from(randomiser.remappingData)))).toString(16).toUpperCase()
    randomiser.updateProgressText("Finished Checksum: " + randomiser.hash)
    randomiser.onNewMappingCreated();

    randomiser.persistCurrentMappings();

    if (!randomiser.isHeadless) {
      let visualCy = randomiser.createCy(false);
      visualCy.add(randomiser.cy.elements());
      visualCy.layout({name: 'cose-bilkent', animationDuration: 1000, nodeDimensionsIncludeLabels: true}).run();
    }
  }

  generateRandomMappings(onFinished, seed, mapData, flagData, config, escapePaths) {
    
    let rng = new RNG(RNG.getHash(seed));
    let progressionState = this.initMappingGraph(mapData, true, new ProgressionState(flagData, config))


    progressionState = this.generateEscapeWarps(escapePaths, mapData, rng, progressionState);

    var root = this.getInitialWarp(config, rng);

    progressionState.unconnectedComponents = progressionState.unconnectedComponents.filter(a => !a.includes(root));

    var moreWarpsToMap = true;
    var randomiser = this;

    function blockingRunAlgorithm() {

      if (moreWarpsToMap) {

        try {
          moreWarpsToMap = randomiser.doNextMapping(rng, root, progressionState, config, randomiser);
          progressionState = randomiser.updateProgressionState(progressionState, root);
          setTimeout(blockingRunAlgorithm, 0);
        } catch (e) {

          if (randomiser.attempts > 0) {
            randomiser.attempts = randomiser.attempts - 1;
            randomiser.seed = seed + 1;
            randomiser.generateRandomMappings(onFinished, randomiser.seed, mapData, flagData, config, escapePaths);

          } else {
            console.error("An error occured mapping warps " + e);
            randomiser.updateProgressText("An error occured. Please report this/try another seed/config.");
            moreWarpsToMap = false;
          }

        }
      } else {

        // Add each games bedrooms and make sure they map to house in pallet town
        randomiser.cy.add(new WarpNode(['C,1,1,0' , randomiser.getMapData()["C,1,1,0" ]]));
        randomiser.cy.add(new WarpNode(['E,1,3,0' , randomiser.getMapData()["E,1,3,0" ]]));
        randomiser.cy.add(new WarpNode(['FR,4,0,2', randomiser.getMapData()["FR,4,0,2"]]));

        randomiser.cy.add(new WarpEdge('C,1,1,0', 'FR,4,0,2', randomiser.cy));
        randomiser.cy.add(new WarpEdge('E,1,3,0', 'FR,4,0,2', randomiser.cy));

        onFinished(randomiser, randomiser.getBaseRemappingData(), seed, config);
      }
    }

    blockingRunAlgorithm();
  }

  getInitialWarp(config, rng) {

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

  filterIgnored(mapData) {
    return new Map([...mapData].filter(k => !k[1].ignore));
  }

  filterByConfig(usabledWarps, config) {
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

  generateEscapeWarps(escapePaths, mapData, rng, progressionState) {
    let filteredWarpIds = new Set(mapData.keys());
    let escapeCandidateSet = escapePaths.map(s => s.filter(n => filteredWarpIds.has(n))).filter(s => s.length > 0);
    let randomMustLinkHomeWarps = escapeCandidateSet.flatMap(s => s[rng.nextRange(0, s.length - 1)]);
    progressionState.randomMustLinkHomeWarps = randomMustLinkHomeWarps;
    return progressionState;
  }

  filteGroupedNotMain(mapData) {
    return new Map([...mapData].filter(k => k[1].groupMain || !k[1].grouped));
  } 

  removeRemovableLocations(mapData) {
    return new Map([...mapData].filter(n => !(n[1].tags && n[1].tags.includes("removeable"))));
  }

  removeExtraDeadendLocations(mapData) {
    return new Map([...mapData].filter(n => !(n[1].tags && n[1].tags.includes("extraDeadend"))));
  }

  static toMapBank(s) { 
      let arr = s.split(","); 
      return arr[0] + "," + arr[1] + "," + arr[2] 
  }

  getAugmetedRemappingData(remappingData) {

    remappingData = this.addGroupedMappings(remappingData);
    remappingData = this.addTriggerData(remappingData);
  
    return remappingData;
  }
  
  addGroupedMappings(remappingData) {
    
    let groupMappings = [];
  
    remappingData.forEach(m => {
      let groups = this.getMapData()[m.source].grouped;
      if (groups) {
        groups.forEach(g => {
          groupMappings.push({source: g, target: m.target});
        });
      }
    })
  
    return [...remappingData, ...groupMappings];
  }
  
  addTriggerData(remappingData) {
  
    return remappingData.map(m => {
      m.trigger = this.getMapData()[m.source].to;
      return m;
    });
  
  }
  
  getBaseRemappingData() {
    return this.cy.edges().filter(e => e.data().isWarp).map(e => { return {source: e.data().source, target: e.data().target} });
  }
  
  getFilteredData() {
      let warpIdData = new Map(Object.entries(this.getMapData()));
      warpIdData = this.filterIgnored(warpIdData);
      warpIdData = this.filteGroupedNotMain(warpIdData);
      warpIdData = this.filterByConfig(warpIdData, this.getRandomisationConfig());
  
      // In future this could be config. Remove some deadends that litterally only have dialog to speed things up
      warpIdData = this.removeRemovableLocations(warpIdData);

      if (this.config.extraDeadendRemoval) {
        warpIdData = this.removeExtraDeadendLocations(warpIdData);
      }
  
      return warpIdData;
  }
  
  static toReigon(id) {
      switch(id[0]) {
          case 'F': return 'KANTO'
          case 'C': return 'JOHTO'
          case 'E': return 'HOENN'
      }
  }
  
  findAccessibleUnmappedNodes(cy, root) {
    let nodeSet = new Set();
    this.cy.elements().bfs({roots: this.cy.getElementById(root), directed: true, visit: (v, e, u, i, depth) => {
      
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
  doNextMapping(rng, root, progressionState, config, randomiser) {
    let accessibleNodes = progressionState.cachedNodes ? progressionState.cachedNodes : this.findAccessibleUnmappedNodes(this.cy, root);
    let inacessibleNodes = this.cy.nodes().not(accessibleNodes).filter(e => e.data().isWarp && !e.data().isMapped);
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

      let randomNodeIdFromComponent = this.selectRandomWarp(rng, candidateUnconnectedComponentNodes, warp1);

      warp2 = this.cy.getElementById(randomNodeIdFromComponent);
      progressionState.unconnectedComponents = progressionState.unconnectedComponents.filter(c => !c.includes(randomNodeIdFromComponent));

      console.log("HUBS")
      if (progressionState.unconnectedComponents.length > 0) {
        randomiser.updateProgressText("Main Connections Remaining: " + progressionState.unconnectedComponents.length + percentCompletion);
      } else {
        randomiser.updateProgressText("Evaluating potential softlocks..." + percentCompletion);
      }

    } else if (progressionState.randomMustLinkHomeWarps.length > 0 && accessibleNodes.size > 1) {

      let warp1Candidates = this.cy.nodes().filter(n => !n.data().isMapped && progressionState.randomMustLinkHomeWarps.includes(n.data().id));

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

        let fw = this.cy.elements().floydWarshall({directed : true});
        progressionState.homeEscapesList = Array.from(accessibleNodes).filter(n => fw.distance(this.cy.getElementById(root), n) != "Infinity")
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
      warp2 = this.selectRandomWarp(rng, preferedCandidateList, warp1);


      accessibleNodes.delete(warp2);
      progressionState.randomMustLinkHomeWarps.splice(progressionState.randomMustLinkHomeWarps.indexOf(warp1.data().id), 1);
      progressionState.homeEscapesList = (progressionState.homeEscapesList.filter(n => n.data().id != warp2.data().id));

      console.log("HOME LINKS")
      randomiser.updateProgressText("Paths to fix: " + progressionState.randomMustLinkHomeWarps.length + percentCompletion);

    } else if (inaccesibleFlagLocations.length > 0) { 

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add inacessible dead-ends that might allow flags givinb access to new locations
      warp2 = this.selectRandomWarp(rng, inaccesibleFlagLocations, warp1);
      warp2.addClass("significant");

      console.log("FLAGS")
      randomiser.updateProgressText("Flag Locations Left: " + inaccesibleFlagLocations.length + percentCompletion);

    } else if (inacessibleHubs.length > 0) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add any hubs that there is still no access to... I'm not sure there would even be any left...
      inacessibleNodes = inacessibleNodes.filter(e => e.degree(true) > 0);
      warp2 = this.selectRandomWarp(rng, inacessibleNodes, warp1);

      console.log("MORE HUBS")
      randomiser.updateProgressText("Hubs Left: " + inacessibleHubs.length + percentCompletion);

    } else if (inaccesibleKeyLocations.length > 0) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add key inacessible locations 
      warp2 = this.selectRandomWarp(rng, inaccesibleKeyLocations, warp1); 
      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);
      warp2.addClass("significant");

      console.log("KEY LOCATIONS");
      randomiser.updateProgressText("Key Locations Left: " + inaccesibleKeyLocations.length + percentCompletion);

    } else if (inacessibleNodes.length > 0) {

      // Add deadends that are not tagged as lowPriority first to ensure 
      // even if there arn't enough connections we make it as nice as possible

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // Add other inacessible dead-ends 

      let priorityInaccessibleNodes = inacessibleNodes.filter(n => !n.data().lowPriority);

      if (priorityInaccessibleNodes.length > 0) {
        warp2 = this.selectRandomWarp(rng, priorityInaccessibleNodes, warp1); 
      } else {
        warp2 = this.selectRandomWarp(rng, inacessibleNodes, warp1); 
      }

      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);

      console.log("DEADENDS");
      randomiser.updateProgressText("Deadends Left: " + inacessibleNodes.length + percentCompletion);

    } else if (accessibleNodes.size > 1) {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      // map together nodes that are already accessible
      warp2 = this.selectRandomWarp(rng, [...accessibleNodes], warp1);
      shouldCacheNodes = true;
      accessibleNodes.delete(warp2);

      console.log("MORE CONNECTIONS");
      randomiser.updateProgressText("Finalizing Connections: " + accessibleNodes.size + percentCompletion);

    } else {

      warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
      accessibleNodes.delete(warp1);

      //console.warn("Unevenly matched warps. " + warp1.data().id + " had to map to itself");
      // warp2 = warp1
      
      // if one warp is left hanging we connect it to a random odd-one-out location
      // Shoal Cave, Frontier Mart, Sothern Island, Dessert Underpass, Sealed Chamber

      if (config.hoennLevel > 0) {

        let oddOneOutLocation = ['E,24,83,0', 'E,26,10,0', 'E,26,55,0', 'E,24,98,0', 'FR,1,122,0', "E,25,43,11", "E,25,42,0"][rng.nextRange(0, 7 - 1)];
        warp2 = this.cy.add(new WarpNode([oddOneOutLocation, this.getMapData()[oddOneOutLocation]]));
        shouldCacheNodes = true;
        accessibleNodes.delete(warp2);

      } else {

        let oddOneOutLocation = 'FR,1,122,0';
        warp2 = this.cy.add(new WarpNode([oddOneOutLocation, this.getMapData()[oddOneOutLocation]]));
        shouldCacheNodes = true;
        accessibleNodes.delete(warp2);

      }

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

    this.cy.add(new WarpEdge(warp1.data().id, warp2.data().id, this.cy))

    if (warp1 != warp2) {
          this.cy.add(new WarpEdge(warp2.data().id, warp1.data().id, this.cy))
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

  selectRandomWarp(rng, listOfWarps, connectingWarp) {

    // Some warps do not allow bi-directional travel 
    // Some warps need to be accessible in reverse not to block map access. i.e a warp tile you have to walk over to get somewhere
    // We need to make sure those don't get matched together
    let warpNeedsReturn = connectingWarp.data().needsReturn;
    let warpNoReturn = connectingWarp.data().noReturn;

    if (warpNeedsReturn) {
      listOfWarps = listOfWarps.filter(w => {
        return typeof w === 'string' ? !this.cy.getElementById(w).data().noReturn : !w.data().noReturn;
      });
    } else if (warpNoReturn) {
      listOfWarps = listOfWarps.filter(w => {
        return typeof w === 'string' ? !this.cy.getElementById(w).data().needsReturn : !w.data().needsReturn;
      });
    }

    if (listOfWarps.length == 0) {
      M.toast({html: 'ERROR: Progression logic could not be verified.<BR> Please try a different seed', displayLength:5000});
    }

    return listOfWarps[rng.nextRange(0, listOfWarps.length - 1)];
  }

  updateProgressionState(updateProgressionState, root) {
    let currentNodes = new Set();
    this.cy.elements().bfs({roots: this.cy.getElementById(root), directed: true, visit: (v, e, u, i, depth) => { 
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
        if (this.cy.getElementById(e.data.target).length > 0 && this.cy.getElementById(e.data.source).length > 0) {
          this.cy.add(e);
        }
        conditionalEdges.delete(e);
      }
    });

    return updateProgressionState;
  }

  createCy(isHeadless) {
    return cytoscape({
      container: isHeadless ? null : this.uiContainer,
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
  } 

  initMappingGraph(mapData, isHeadless, progressionState) {

    this.cy = this.createCy(isHeadless);
  
  
      this.cy.add(new ReigonNode("KANTO"));
      this.cy.add(new ReigonNode("JOHTO"));
      this.cy.add(new ReigonNode("HOENN"));
  
      let data = [...mapData];
  
      // Add the nodes
      data.forEach(d => {
  
        if (!this.cy.getElementById(Randomiser.toMapBank(d[0])).length) {
            this.cy.add(new AreaNode(d)).addClass("map-" + d[0][0]);
        }
  
        this.cy.add(new WarpNode(d));
      })
  
      // Add fixed edges
      data.forEach(d => {
  
        let connections = d[1].connections ? d[1].connections : {};
  
        Object.entries(connections).forEach(entry => {
  
          if (typeof entry[1] == 'string') {
  
            // Conditional Connection
            progressionState.remainingConditionalEdges.add(new CondidtionalEdge(d[0], entry[0], entry[1]));
  
            // Temporarily add conditional edges in the graph so we can work out what areas will be connected in future
            if (this.cy.getElementById(entry[0]).length > 0) {
              this.cy.add(new CondidtionalEdge(d[0], entry[0], entry[1]))
            }
  
          } else {
  
            // Fixed Connection       
  
            // Only draw path if connection node is present in total list of warps
            // i.e if I'm only doing warps to first gym, don't draw a connection to a gym 2 level warp 
            if (this.cy.getElementById(entry[0]).length > 0) {
              this.cy.add(new FixedEdge(d[0], entry[0]))
            }
          }
        });
      });
  
      // calculate future connected areas then remove all conditional edges from the network
      progressionState.unconnectedComponents = this.cy.elements().components()
                                                                 .filter(e => e.size() > 1)
                                                                 .map(e => e.toArray().filter(n => n.group() == "nodes" && n.data().isWarp && n.data().hasMultipleConnections).map(p => p.data().id))
                                                                 .filter(arr => arr.length > 0);
      progressionState.remainingConditionalEdges.forEach(node => this.cy.getElementById(node.data.id).remove());
  
      this.cy.nodes().forEach(function(node){
        node.css("width", 80);
        node.css("height", 80);
      });
  
      progressionState.makeFinalLocationsKey();
      return progressionState;
  }

  getHint(location) {

    if (!this.remappingData) {
      return "WARPS NOT RANDOMISED";
    }

    let mapData = new Map(Object.entries(this.getMapData()));
    let warp = this.remappingData.get(mapData.get(location).to);
    if (!warp) {
      return "NOT PRESENT";
    }
    let info = mapData.get(warp.toRomCode + "," + warp.toBank + "," + warp.toMap + "," + warp.toWarpNo).name;
    let hint = warp.toRomCode == "E" ? "HOENN - " : (warp.toRomCode == "C" ? "JOHTO - " : "KANTO - ");
    return hint + info.split("-")[0].trim() + " - " + info.split("-")[1].trim();
  }
  
  flagWeight(edge, location) {
    if (edge.data().isWarp) {
      return 1;
    } 
  
    var difficulty = this.getMapData()[edge.data().source].connections[edge.data().target];
  
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
    return Object.values(this.getFlagData().COMPOSITE_FLAGS).filter(f => f.flag == difficulty)[0].condition.length * 100;
  }
  
  shortestPath(location) {
    var fw = this.cy.elements().floydWarshall({weight: (edge) => this.flagWeight(edge, location),  directed : true})
    return this.shortestPathPreCalcFW(fw, location);
  }
  
  allshortestPaths() {
    var fw = this.cy.elements().floydWarshall({weight: (edge) => this.flagWeight(edge, location),  directed : true})
    return Object.entries(HINTABLE_LOCATIONS).map(i => {
      let result = this.shortestPathPreCalcFW(fw, i[1]);
      result.name = i[0];
      return result;
    });
  }
  
  shortestPathPreCalcFW(fw, location) {
    let path = fw.path(this.cy.getElementById("E,0,10,2"), HINTABLE_LOCATIONS[location] ? this.cy.getElementById(HINTABLE_LOCATIONS[location]) : this.cy.getElementById(location)).map(n =>  {
       if(n.isNode()) {
         return Object.assign({}, this.getMapData()[n.data().id]);
       } else if (n.data().isWarp) {
         return {name: n.data().id, type: "WARP"}
       } else {
         return {name: n.data().id, type: "WALK", conditions: [this.getMapData()[n.data().source].connections[n.data().target]]}
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
  
  mappingToWarps(mappingData) {
    let mappedList = new Map();

    mappingData.forEach(mapping => {
        let from = mapping.trigger;
        let to = mapping.target;
        let toParts = to.split(",");
        mappedList.set(from, new PKWarp(from, toParts[0], toParts[1], toParts[2], toParts[3], mapping.source));
    });

    return mappedList;
  }

}

class ProgressionState {

  constructor(flagData, config) {
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

  makeFinalLocationsKey() {

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
  
}

class WarpListData {
  
  constructor (seed, config, warpList, hash) {
    this.warpList = Array.from(warpList.entries());
    this.seed = seed;
    this.config = config;
    this.hash = hash;
  }
  
}

class PKWarp {
  
  constructor(trigger, romCode, bank, map, warpNo, source) {
    this.trigger = trigger;
    this.toRomCode = romCode;
    this.toBank = bank;
    this.toMap = map;
    this.toWarpNo = warpNo;
    this.source = source;
  }

}

class RNG {
  
  constructor(seed) {
    // LCG using GCC's constants
    this.m = 0x80000000; // 2**31;
    this.a = 1103515245;
    this.c = 12345;
  
    this.state = seed ? seed : Math.floor(Math.random() * (this.m - 1));
  }

  nextInt() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
  }

  nextFloat() {
    // returns in range [0,1]
    return this.nextInt() / (this.m - 1);
  }

  nextRange(start, end) {
    // returns in range [start, end): including start, excluding end
    // can't modulu nextInt because of weak randomness in lower bits
    var rangeSize = end - start;
    var randomUnder1 = this.nextInt() / this.m;
    return Math.abs(start + Math.floor(randomUnder1 * rangeSize));
  }

  choice(array) {
    return array[this.nextRange(0, array.length)];
  }

  static getHash(input){
    var hash = 0, len = input.length;
    for (var i = 0; i < len; i++) {
      hash  = ((hash << 5) - hash) + input.charCodeAt(i);
      hash |= 0; // to 32bit integer
    }
    return hash;
  }

}

class ReigonNode {
  
  constructor(id) {
    this.data = {};
    this.data.id = id;
    this.classes = 'reigon';
  }

}

class AreaNode {
  
  constructor(node) {
    this.data = {};
    this.data.id = Randomiser.toMapBank(node[0]);
    this.data.isMap = true;
    this.data.parent = Randomiser.toReigon(node[0]);
    this.data.label = node[0] + " (" + node[1].name.split("-")[0] + "- " + node[1].name.split("-")[1].trim() + ")";
  }

}

class WarpNode {
  
  constructor(data) {
    this.data = {};
    this.data.id = data[0];
    this.data.parent = Randomiser.toMapBank(data[0]);
    this.data.label = data[1].name ? data[0] + data[1].name.split("-")[2] : data[0] + " (Unnamed)";
    this.classes = 'outline';
    this.data.isWarp = true;
    this.data.isMapped = false;
    this.data.needsReturn = data[1].tags && data[1].tags.includes("needs_return");
    this.data.noReturn = data[1].tags && data[1].tags.includes("no_return");
    this.data.lowPriority = data[1].tags && data[1].tags.includes("low_priority");
    this.data.hasMultipleConnections = data[1].connections ? Object.values(data[1].connections).filter(n => n == true).length > 0 : false;
  }

}

class FixedEdge {
  
  constructor(source, target) {
    this.data = {};
    this.data.id = source + "->" + target;
    this.data.source = source;
    this.data.target = target;
    this.classes = 'fixed';
  }

}

class CondidtionalEdge {
  
  constructor(source, target, condition) {
    this.data = {};
    this.data.id = source + "->" + target;
    this.data.source = source;
    this.data.target = target;
    this.classes = 'conditional';
    this.condition = condition;
  }

}

class WarpEdge {
  
  constructor(source, target, cy) {
    this.data = {};
    this.data.id = source + "->" + target + "#" + cy.getElementById(source + "->" + target).length;
    this.data.source = source;
    this.data.target = target;
    this.data.isWarp = true;
    this.classes = 'warp';
  }

}

const HINTABLE_LOCATIONS = {
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

const LOCATIONS_DISABLED_FLAGS = {
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

const KEY_LOCATION_DATA =
{
    // KANTO
    "PALLET TOWN"         : "FR,3,0,1" ,
    "VIRIDIAN CITY"       : "FR,3,1,0" ,
    "PEWTER CITY"         : "FR,3,2,5" ,
    "CERULEAN CITY"       : "FR,3,3,3" ,
    "LAVENDER TOWN"       : "FR,3,4,1" ,
    "VERMILION CITY"      : "FR,3,5,4" ,
    "CELADON CITY"        : "FR,3,6,4" ,
    "FUCHSIA CITY"        : "FR,3,7,6" ,
    "SAFFRON CITY"        : "FR,3,10,6",
    "CINNABAR ISLAND"     : "FR,3,8,3" ,
    "INDIGO PLATEAU (FR)" : "FR,3,9,0" ,

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


    // JOHTO
    "NEW BARK TOWN"      : "C,0,9,1" ,   
    "CHERRYGROVE CITY"   : "C,0,10,2",  
    "VIOLET CITY"        : "C,0,0,3" , 
    "AZALEA TOWN"        : "C,0,11,1", 
    "GOLDENROD CITY"     : "C,0,3,3" ,    
    "ECRUTEAK CITY"      : "C,0,1,0" ,   
    "OLIVINE CITY"       : "C,0,2,1" ,  
    "CIANWOOD CITY"      : "C,0,12,0",   
    "MAHOGANY TOWN"      : "C,0,13,2",   
    "BLACKTHORN CITY"    : "C,0,5,2" ,     
    "INDIGO PLATEAU (C)" : "C,0,8,0" , 

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

    // HOENN
    "LITTLEROOT TOWN"  : "E,0,9,0" ,        
    "OLDALE TOWN"      : "E,0,10,2",    
    "PETALBURG CITY"   : "E,0,0,3" ,       
    "RUSTBORO CITY"    : "E,0,3,3" ,      
    "DEWFORD TOWN"     : "E,0,11,1",     
    "SLATEPORT CITY"   : "E,0,1,0" ,       
    "MAUVILLE CITY"    : "E,0,2,1" ,      
    "VERDANTURF TOWN"  : "E,0,14,0",        
    "FALLABOR TOWN"    : "E,0,13,2",      
    "LAVARIDGE TOWN"   : "E,0,12,3",       
    "FORTREE CITY"     : "E,0,4,0" ,     
    "LILYCOVE CITY"    : "E,0,5,2" ,      
    "MOSSDEEP CITY"    : "E,0,6,2" ,      
    "SOOTOPOLIS CITY"  : "E,0,7,0" ,       
    "PACIFIDLOG TOWN"  : "E,0,15,0",        
    "EVER GRANDE CITY" : "E,0,8,0" ,
    
    "ROXANNE"          : "E,11,3,0"  ,
    "BRAWLY"           : "E,3,3,0"   ,
    "WATTSON"          : "E,10,0,0"  ,
    "FLANNERY"         : "E,4,1,0"   ,
    "NORMAN"           : "E,8,1,0"   ,
    "WINONA"           : "E,12,1,0"  ,
    "TATE AND LIZA"    : "E,14,0,0"  ,
    "JUAN"             : "E,15,0,0"  , 
    "E4 SIDNEY"        : "E,16,0,0"  ,
    "E4 PHOEBE"        : "E,16,1,0"  ,
    "E4 GLACIA"        : "E,16,2,0"  ,
    "E4 DRAKE"         : "E,16,3,0"  ,
    "CHAMPION WALLACE" : "E,16,4,0"  ,
    "STEVEN"           : "E,24,107,0",

}


export {
  Randomiser,
  PKWarp,
  ProgressionState,
  RNG
}