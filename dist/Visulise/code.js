var state;

document.addEventListener('DOMContentLoaded', function() {
  isHeadless = false;
  state = initMappingGraph(getFilteredData(), false, new ProgressionState(getFlagData(), getRandomisationConfig()));
});

function doVisuliseNextMapping() {
  let rng = new RNG(getHash(document.getElementById("input_seed_text").value));
  doNextMapping(rng, 'FR,3,1,0', state);
  state = updateProgressionState(state, 'FR,3,1,0');
  cy.layout({name: 'cose-bilkent', animationDuration: 500, nodeDimensionsIncludeLabels: true}).run();
}

function doVisuliseRemap() {
  mapWarps(document.getElementById("input_seed_text").value); 
  cy.layout({name: 'cose-bilkent', animationDuration: 500, nodeDimensionsIncludeLabels: true}).run();
}