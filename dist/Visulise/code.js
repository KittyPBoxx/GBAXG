document.addEventListener('DOMContentLoaded', function() {
  isHeadless = false;
  initMappingGraph(getFilteredData(), false);
});

function doVisuliseNextMapping() {
  let rng = new RNG(getHash(document.getElementById("input_seed_text").value));
  doNextMapping(rng);
  cy.layout({name: 'cose-bilkent', animationDuration: 500, nodeDimensionsIncludeLabels: true}).run();
}

function doVisuliseRemap() {
  mapWarps(document.getElementById("input_seed_text").value); 
  cy.layout({name: 'cose-bilkent', animationDuration: 500, nodeDimensionsIncludeLabels: true}).run();
}