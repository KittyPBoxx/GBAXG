var mixedGameData = {};
Object.entries(FIRE_RED_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(CRYSTAL_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);
Object.entries(EMERALD_WARPS).forEach(e => mixedGameData[e[0]] = e[1]);

var remappingsData = {};
var isHeadless = true;

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

function mapWarps(seed) {
    let config = getRandomisationConfig();
    let mapData = getFilteredData();
    remappingsData = getRandomisationAlgorithm().apply(null, [seed, mapData, config]);
    warpList = mappingToWarps(getAugmetedRemappingData(remappingsData));
}

function simpleRandom(seed, mapData, config) {
    
    let rng = new RNG(getHash(seed));
    initMappingGraph(mapData, isHeadless)

    var moreWarpsToMap = true;
    while(moreWarpsToMap) {
        moreWarpsToMap = doNextMapping(rng);
    }

   return getBaseRemappingData();
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

function toMapBank(s) { 
    let arr = s.split(","); 
    return arr[0] + "," + arr[1] + "," + arr[2] 
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

PKWarp.prototype.isInternal = function() {
    return this.toRomCode[0] == this.trigger[0];
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
}

function AreaNode(id) {
    this.data = {};
    this.data.id = id;
    this.data.parent = toReigon(id);
    this.data.label = MAP_NAMES[id] ? id + " (" + MAP_NAMES[id] + ")" : id;
}

function WarpNode(data) {
    this.data = {};
    this.data.id = data[0];
    this.data.parent = toMapBank(data[0]);
    this.data.label = data[1].name ? data[0] + data[1].name.split("-")[2] : data[0] + " (Unnamed)";
    this.classes = 'outline';
    this.data.isWarp = true;
    this.data.isMapped = false;
}

function FixedEdge(source, target) {
    this.data = {};
    this.data.id = source + "->" + target;
    this.data.source = source;
    this.data.target = target;
}

function WarpEdge(source, target) {
  this.data = {};
  this.data.id = source + "->" + target;
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
    return warpIdData;
}

function toReigon(id) {
    switch(id[0]) {
        case 'F': return 'KANTO'
        case 'C': return 'JHOTO'
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

function doNextMapping(rng) {
    let accessibleNodes = findAccessibleUnmappedNodes(window.cy, 'FR,3,1,0');
    let inacessibleNodes = cy.nodes().not(accessibleNodes).filter(e => e.data().isWarp && !e.data().isMapped);

    if(accessibleNodes.size == 0 && inacessibleNodes.length == 0) { 
      return false; 
    }


    let warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
    accessibleNodes.delete(warp1);
    
    let warp2 = null;

    if (inacessibleNodes.filter(e => e.degree(true) > 0).length > 0 && accessibleNodes.size <= 1) {

      // TODO or we could add a dead end that will open up new connections
      inacessibleNodes = inacessibleNodes.filter(e => e.degree(true) > 0);
      warp2 = inacessibleNodes[rng.nextRange(0, inacessibleNodes.length - 1)];

    } else if (inacessibleNodes.length > 0) {

      warp2 = inacessibleNodes[rng.nextRange(0, inacessibleNodes.length - 1)];

    } else if (accessibleNodes.size > 0) {

      warp2 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];

    } else {

      console.warn("Unevenly matched warps. " + warp1.data().id + " had to map to itself");
      warp2 = warp1;

    }
    
    //console.log(warp1.data().id);
    //console.log(warp2.data().id);
    window.cy.add(new WarpEdge(warp1.data().id, warp2.data().id))
    window.cy.add(new WarpEdge(warp2.data().id, warp1.data().id))

    warp1.data().isMapped = true;
    warp2.data().isMapped = true;

    return true;
}

function initMappingGraph(mapData, isHeadless) {

  var cy = window.cy = cytoscape({
      container: isHeadless ? null : document.getElementById('cy'),
      headless: isHeadless,
      styleEnabled: !isHeadless,
      boxSelectionEnabled: false,
    
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
          selector: '.map-F',
          css: {
              'background-color': '#ffc0c3'
          }
        },
        {
          selector: '.map-C',
          css: {
              'background-color': '#f1d9ff'
          }
        },
        {
          selector: '.map-E',
          css: {
              'background-color': '#d9ffd1'
          }
        },
        {
          selector: '.warp',
          css: {
            'line-color': '#f92411'
          }
        }
      ],
    
      elements: {
        nodes: [],
        edges: []
      }
    });


    cy.add(new ReigonNode("KANTO"));
    cy.add(new ReigonNode("JHOTO"));
    cy.add(new ReigonNode("HOENN"));

    let data = [...mapData];

    // Add the nodes
    data.forEach(d => {

      if (!cy.getElementById(toMapBank(d[0])).length) {
          cy.add(new AreaNode(toMapBank(d[0]))).addClass("map-" + d[0][0]);
      }

      cy.add(new WarpNode(d));
    })

    // Add fixed edges
    data.forEach(d => {

      if (!d[1].connections) {
        return;
      }

      Object.keys(d[1].connections).forEach(c => {
          cy.add(new FixedEdge(d[0], c))
      });
    });


    cy.nodes().forEach(function(node){
      node.css("width", 80);
      node.css("height", 80);
    });

    if (!isHeadless) {
        cy.layout({name: 'cose-bilkent', animationDuration: 1000, nodeDimensionsIncludeLabels: true}).run();
    }
}
