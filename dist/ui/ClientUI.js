const VERSION_NUMBER = "0.10.4-ALPHA";

var debugConsole;
document.addEventListener('DOMContentLoaded', function() {

    console.info("Version " + VERSION_NUMBER);
    document.getElementById("version").innerHTML = VERSION_NUMBER;
    
    M.Modal.init(document.getElementById('menu'), {
      
      onOpenStart: () => IodineGUI.isPlaying && IodineGUI.Iodine.pause(),
      onCloseEnd: () => !IodineGUI.isPlaying && IodineGUI.Iodine.playStatusCallback && IodineGUI.Iodine.play(),
      dismissible: false
    
    }).open();      

    initMenu();

    let updateModal = M.Modal.init(document.getElementById('updateModal'), {
      
      onOpenStart: () => populateUpdateDialog(),
      onCloseEnd: () => dissmissUpdateDialog(),
      dismissible: true
    
    })
    
    if (!findValue("GBAXG_lastVersionMessage") || VERSION_COMPARITOR.apply(this, [findValue("GBAXG_lastVersionMessage"), VERSION_NUMBER]) < 0) {
      updateModal.open();
    }

    createAndLoadConfig();

     M.Autocomplete.init(document.getElementById("autocomplete-items"), { limit: 4, data : Object.keys(ITEM_DATA).reduce((v1, v2) => { v1[v2] = null; return v1 }, {}) });
     M.Autocomplete.init(document.getElementById("autocomplete-locations"), { limit: 4, data : Object.keys(KEY_LOCATION_DATA).reduce((v1, v2) => { v1[v2] = null; return v1 }, {}), onAutocomplete : () => {
        let locationParts = KEY_LOCATION_DATA[document.getElementById("autocomplete-locations").value].split(",");
        document.getElementById("game-value-input").value = locationParts[0];
        document.getElementById("bank-value-input").value = locationParts[1];
        document.getElementById("map-value-input").value = locationParts[2];
        document.getElementById("warp-value-input").value = locationParts[3];
        M.FormSelect.getInstance(document.getElementById("game-value-input"))._handleSelectChangeBound();
     }});

    populateHints(); 

    M.FormSelect.init(document.querySelectorAll('select'), {});
    debugConsole = M.Modal.init(document.getElementById('console'), {});

    document.querySelectorAll("input[type=text]").forEach(e => e.addEventListener('focusin', (event) => userInputEnabled = false));
    document.querySelectorAll("input[type=text]").forEach(e => e.addEventListener('focusout', (event) => userInputEnabled = true));
});


function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function initMenu() {
  M.Carousel.init(document.querySelectorAll('.carousel'), { numVisible: 5, dist: -20, noWrap: true, preventLoop: true, enableTouch: false, duration: 30});

  document.querySelectorAll(".carousel-item").forEach(e => e.setAttribute("draggable", false));
  document.querySelectorAll(".left-menu-button").forEach(e => e.onclick = () =>  M.Carousel.getInstance(document.getElementById("menuCarousel")).prev());
  document.querySelectorAll(".right-menu-button").forEach(e => e.onclick = () =>  M.Carousel.getInstance(document.getElementById("menuCarousel")).next());
}

window.addEventListener('resize', initMenu, true);

function toggleMenu() {
  let menu = M.Modal.getInstance(document.getElementById('menu'));
  menu.isOpen ? menu.close() : menu.open();

  // Fixes bug in materialize.js when resizing modals
  window.dispatchEvent(new Event('resize'));
}

async function createAndLoadConfig() {
  storageManager.find("keybinds").then(initKeybinds, e => {
    initKeybinds(DEFAULT_KEYBIND_CONFIG);
    storageManager.persist(keybinds, DEFAULT_KEYBIND_CONFIG);
  })
}

function fileToDirPath(path) {
  return path.slice(0, path.lastIndexOf("/"));
}

function dissmissUpdateDialog() {
  setValue("GBAXG_lastVersionMessage", VERSION_NUMBER);
}

function populateUpdateDialog() {
  let element = document.getElementById("updateModalText");
  element.innerHTML += "<h5 class='card-panel red darken-1 white-text'>UPDATE: " + VERSION_NUMBER + "</h5>";

  let ul = document.createElement('ul');
  ul.classList.add("updateList");
  RELEASE_NOTES[VERSION_NUMBER].forEach(note => {
      let li = document.createElement('li');
      li.innerHTML=note;
      ul.appendChild(li);
  });

  element.innerHTML += ul.outerHTML;

  element.innerHTML += "<div class='olderVersions'>" + 
                       "<a href='https://kittypboxx.github.io/GBAXG/dist/'>Latest Nightly Version (Unstable)</a> <br>" + 
                       "<a href='../Historic/index.html'>Older Versions</a> <br>" + 
                       "<a href='https://trello.com/b/esQs4wx3/multi-game-random-warps'>See Development Progress</a>" + 
                       "</div>";
}

/* CONTROLS */


document.addEventListener('keydown', e => doInput(e.code, true, false));
document.addEventListener('keyup', e => doInput(e.code, false, false));

CommandExecutor.register("toggleMenu", args => toggleMenu());

let keybinds = new Map();
function initKeybinds(conf) {

  conf = JSON.parse(conf);

  conf = addNewConfigOptions(conf);

  let table = document.getElementById("key-binding-table");

  conf.sort(sortCommands)
  conf.forEach(binding => {
    if (binding.type == "exec") {
      binding.kbd  && keybinds.set("KBD-"  + binding.kbd  + "-Down", binding.command);
      binding.gmpd && keybinds.set("GMPD-" + binding.gmpd + "-Down", binding.command);
    }
    else if (binding.type == "button") {
      binding.kbd  && keybinds.set("KBD-"  + binding.kbd  + "-Down", binding.command + "Down");
      binding.kbd  && keybinds.set("KBD-"  + binding.kbd  + "-Up"  , binding.command + "Up"  );
      binding.gmpd && keybinds.set("GMPD-" + binding.gmpd + "-Down", binding.command + "Down");
      binding.gmpd && keybinds.set("GMPD-" + binding.gmpd + "-Up"  , binding.command + "Up"  );
    }

    let row = table.insertRow(table.rows.length);

    let keyCell = row.insertCell(0);
    keyCell.innerHTML = `<td>&nbsp;${binding.command.replace("Key", "")}</td>`;

    let kbdCell = row.insertCell(1);
    kbdCell.innerHTML = `<td>&nbsp;<span>${binding.kbd.replace("Key", "") || "N/A"}</span></td>`;
    kbdCell.setAttribute("data-command", binding.command);
    kbdCell.setAttribute("data-type", binding.type);
    kbdCell.addEventListener("click", listenForKbdBinding)

    let gmpdCell = row.insertCell(2);
    gmpdCell.innerHTML = `<td>&nbsp;<span>${binding.gmpd || "N/A"}</span></td>`;
    gmpdCell.setAttribute("data-command", binding.command);
    gmpdCell.setAttribute("data-type", binding.type);
    gmpdCell.addEventListener("click", listenForGmpdBinding);
  });
}

function addNewConfigOptions(conf) {
  let defaultConf = JSON.parse(DEFAULT_KEYBIND_CONFIG);
  let existingCommandSet = new Set(conf.map(c => c.command));

  defaultConf = defaultConf.filter(c => !existingCommandSet.has(c.command));
  
  return conf.concat(defaultConf);
}

let listenFor = false;

function listenForKbdBinding(e) {
  M.Toast.dismissAll();
  listenFor = {
    isGamepad: false, 
    command: e.currentTarget.getAttribute("data-command"), 
    type: e.currentTarget.getAttribute("data-type"),
    elmnt: e.currentTarget,
    oldCode: e.currentTarget.querySelector("span").innerHTML
  };
  M.toast({html: 'Press any key...', displayLength:3000, completeCallback: () => freezeClic = listenFor = false });
  freezeClic = true;
}

function listenForGmpdBinding(e) {
  M.Toast.dismissAll();
  listenFor = {
    isGamepad: true, 
    command: e.currentTarget.getAttribute("data-command"), 
    type: e.currentTarget.getAttribute("data-type"),
    elmnt: e.currentTarget,
    oldCode: e.currentTarget.querySelector("span").innerHTML
  };
  M.toast({html: 'Press any button...', displayLength:3000, completeCallback: () => freezeClic = listenFor = false });
  freezeClic = true;
}

var userInputEnabled = true;
function doInput(code, isDown, isGamepad) {

  if (!userInputEnabled) { return; }
  //if (code == "Slash") { debugConsole.open(); return; }

  if (listenFor && !listenFor.isGamepad && !isGamepad && isDown) {

    if (listenFor.type == "button") {
      keybinds.delete("KBD-" + listenFor.oldCode + "-Down");
      keybinds.delete("KBD-" + listenFor.oldCode + "-Up");

      keybinds.set("KBD-" + code + "-Down", listenFor.command + "Down");
      keybinds.set("KBD-" + code + "-Up"  , listenFor.command + "Up"  );
    } else if (listenFor.type == "exec") {
      keybinds.delete("KBD-" + listenFor.oldCode + "-Down");

      keybinds.set("KBD-"  + code + "-Down", listenFor.command);
    }

    listenFor.elmnt.innerHTML = `<td>&nbsp;<span>${code.replace("Key", "")}</span></td>`;
    listenFor = false;
    M.Toast.dismissAll();

    writeKeybinds();

  } else if (listenFor && listenFor.isGamepad && isGamepad && isDown) {

    if (listenFor.type == "button") {
      keybinds.delete("GMPD-" + listenFor.oldCode + "-Down");
      keybinds.delete("GMPD-" + listenFor.oldCode + "-Up");

      keybinds.set("GMPD-" + code + "-Down", listenFor.command + "Down");
      keybinds.set("GMPD-" + code + "-Up"  , listenFor.command + "Up"  );
    } else if (listenFor.type == "exec") {
      keybinds.delete("GMPD-" + listenFor.oldCode + "-Down");

      keybinds.set("GMPD-"  + code + "-Down", listenFor.command);
    }

    listenFor.elmnt.innerHTML = `<td>&nbsp;<span>${code}</span></td>`;
    listenFor = false;
    M.Toast.dismissAll();

    writeKeybinds();

  } else {

    code = "" + (isGamepad ? "GMPD-" : "KBD-") + code + (isDown ? "-Down" : "-Up");
    keybinds.get(code) && CommandExecutor.execute(keybinds.get(code));

  }

}

function writeKeybinds() {

  let config = [];

  new Set([...keybinds.values()].filter(v => !v.includes("KeyUp"))).forEach(c => {

    let keybind = {};

    let isButton = c.includes("Down") && [...keybinds].filter(([k,v]) => v == c.replace("Down", "Up") > 0);
    keybind.type = isButton ? "button" : "exec";

    keybind.command = isButton ? c.replace(/KeyDown$/, "Key") : c;

    keybind.kbd = null;
    keybind.gmpd = null;
    [...keybinds].filter(([k,v]) => v == c).forEach(m => keybind[m[0].includes("KBD") ? "kbd" : "gmpd"] = m[0].match(/-(.*)-/).pop());

    config.push(keybind);

  });
  
  config.sort(sortCommands)
  let printPrettyJson = JSON.stringify(config, null, 2).replace(/([\"|(null)|\{],?)\n/g, "$1");
  storageManager.persist("keybinds", printPrettyJson);
  
}

function sortCommands(a,b) {
  return (a.type + commandToIndex(a.command) > b.type + commandToIndex(b.command)) ? 1: -1;
}

function commandToIndex(c) {
  switch(c) {
    case "AKey"      : return 0;
    case "BKey"      : return 1;
    case "LKey"      : return 2;
    case "RKey"      : return 3;
    case "StartKey"  : return 4;
    case "SelectKey" : return 5;
    case "UpKey"     : return 6;
    case "DownKey"   : return 7;
    case "LeftKey"   : return 8;
    case "RightKey"  : return 9;
    case "SpeedUp"   : return 10;
    case "Restart"   : return 11;
    case "toggleMenu": return 12;
    default: return 999;
  }
}

function menuInput(c) {
  switch(c) {
    case "A"      : 
    break;
    case "B"      : 
    break;
    case "L"      :
      M.Carousel.getInstance(document.getElementById('menuCarousel')).prev();
    break;
    case "R"      : 
      M.Carousel.getInstance(document.getElementById('menuCarousel')).next();
    break;
    case "START"  : 
    break;
    case "SELECT" : 
    break;
    case "UP"     : 
    break;
    case "DOWN"   : 
    break;
    case "LEFT"   : 
    break;
    case "RIGHT"  : 
    break;
  }
}

let freezeClic = false; 
document.addEventListener("click", e => {
    if (freezeClic) {
        M.Toast.dismissAll();
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

/* Hints */
function populateHints() {
  let table = document.getElementById("hint-table");
  Object.entries(HINTABLE_LOCATIONS).forEach(e => {
    let row = table.insertRow(table.rows.length);

    let nameCell = row.insertCell(0);
    nameCell.innerHTML = `<td>&nbsp;${e[0]}</td>`;

    let buttonCell = row.insertCell(1);
    buttonCell.innerHTML = `<td>&nbsp;<span>Show Hint</span></td>`;
    buttonCell.setAttribute("data-location", e[1]);
    buttonCell.setAttribute("data-target", `hint-table-${e[0].replaceAll(" ", "-")}`)
    buttonCell.addEventListener("click", displayHint)

    let hintCell = row.insertCell(2);
    hintCell.setAttribute("id", `hint-table-${e[0].replaceAll(" ", "-")}`)
    hintCell.innerHTML = `<td>&nbsp;...</td>`;
  })
}

function displayHint(e) {
  let target = document.getElementById(e.currentTarget.getAttribute("data-target"));
  let hint = getHint(e.currentTarget.getAttribute("data-location"));
  target.innerHTML = hint;
}

document.addEventListener('swiped-down', e => {
  console.log(e.detail.yEnd - e.detail.yStart)
  if (e.detail.yEnd - e.detail.yStart > 250) { 
    toggleMenu()
  }
});