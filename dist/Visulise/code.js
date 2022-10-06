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
    this.data.label = data[1].name ? data[1].name.split("-")[2]  : "Unknown";
    this.classes = 'outline';
    this.data.isWarp = true;
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
  this.classes = 'warp'
}


function getFilteredData() {
    let warpIdData = new Map(Object.entries(getMapData()));
    warpIdData = filterIgnored(warpIdData);
    warpIdData = filteGroupedNotMain(warpIdData);
    warpIdData = filterByConfig(warpIdData, getRandomisationConfig());
    warpIdData = attemptAddingConnectionData(warpIdData);
    return warpIdData;
}

function toReigon(id) {
    switch(id[0]) {
        case 'F': return 'KANTO'
        case 'C': return 'JHOTO'
        case 'E': return 'HOENN'
    }
}

function findAccessibleNodes(cy, root) {
  let nodeSet = new Set();
  cy.elements().bfs({roots: cy.getElementById(root), directed: true, visit: (v, e, u, i, depth) => nodeSet.add(v)})
  return nodeSet;
}

var rng = null;

function doNextMapping() {
    let accessibleNodes = findAccessibleNodes(window.cy, 'FR,3,1,0');
    let inacessibleNodes = cy.nodes().not(accessibleNodes).filter(e => e.data().isWarp);

    let warp1 = [...accessibleNodes][rng.nextRange(0, accessibleNodes.size - 1)];
    let warp2 = inacessibleNodes[rng.nextRange(0, inacessibleNodes.length - 1)];

    console.log(warp1.data().id);
    console.log(warp2.data().id);
    window.cy.
}

document.addEventListener('DOMContentLoaded', function() {
    rng = new RNG(getHash("KITTY"));

    var cy = window.cy = cytoscape({
        container: document.getElementById('cy'),
      
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
              'text-halign': 'center',
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
                'background-color': '#ffc0c3', 
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
          }
        ],
      
        elements: {
          nodes: [],
          edges: []
        },
        
      
        layout: {name: 'cose-bilkent'}
      });


      cy.add(new ReigonNode("KANTO"));
      cy.add(new ReigonNode("JHOTO"));
      cy.add(new ReigonNode("HOENN"));

      let data = [...getFilteredData()];

      // Add the nodes
      data.forEach(d => {

        if (!cy.getElementById(toMapBank(d[0])).length) {
            cy.add(new AreaNode(toMapBank(d[0]))).addClass("map-" + d[0][0]);
        }

        cy.add(new WarpNode(d));
      })

      // Add fixed edges
      data.forEach(d => {
        Object.keys(d[1].connections).forEach(c => {
            cy.add(new FixedEdge(d[0], c))
        });
      });


      cy.nodes().forEach(function(node){
        node.css("width", 80);
        node.css("height", 80);
      });
      cy.layout({name: 'cose-bilkent', animationDuration: 1000, nodeDimensionsIncludeLabels: true}).run();

});