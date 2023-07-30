import { Randomiser } from "../../web-src/randomiser/Randomisation.js";

document.addEventListener('DOMContentLoaded', function() {

  module.randomiser = new Randomiser(false);
  module.randomiser.uiContainer = document.getElementById("cy");

});

module.doVisuliseRemap = function() {

  module.randomiser.config.kantoLevel = document.getElementById("kantoLevel").value;
  module.randomiser.config.johtoLevel = document.getElementById("johtoLevel").value;
  module.randomiser.config.hoennLevel = document.getElementById("hoennLevel").value;

  module.randomiser.seed = document.getElementById("input_seed_text").value;

  module.randomiser.mapWarps(document.getElementById("input_seed_text").value); 
}