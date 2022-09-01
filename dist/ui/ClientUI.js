const fileSystem = window.__TAURI__ ? window.__TAURI__.fs : null;

document.addEventListener('DOMContentLoaded', function() {
    
    M.Modal.init(document.getElementById('menu'), {
      
      onOpenStart: () => IodineGUI.isPlaying && IodineGUI.Iodine.pause(),
      onCloseEnd: () => !IodineGUI.isPlaying && IodineGUI.Iodine.playStatusCallback && IodineGUI.Iodine.play(),
      dismissible: false
    
    }).open();      

    initMenu();

    fileSystem ? createAndLoadConfig() : initKeybinds(DEFAULT_KEYBIND_CONFIG);
});


function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function initMenu() {
  M.Carousel.init(document.querySelectorAll('.carousel'), { numVisible: 5, dist: -20, noWrap: true });
}

window.addEventListener('resize', initMenu, true);

function toggleMenu() {
  let menu = M.Modal.getInstance(document.getElementById('menu'));
  menu.isOpen ? menu.close() : menu.open();
}

function createAndLoadConfig() {

  fileSystem.readTextFile(DEFAULT_KEYBIND_CONFIG_PATH, {dir: fileSystem.BaseDirectory.App}).then(initKeybinds, e => {
    initKeybinds(DEFAULT_KEYBIND_CONFIG);

    fileSystem.createDir(fileToDirPath(DEFAULT_KEYBIND_CONFIG_PATH), { dir: fileSystem.BaseDirectory.App, recursive: true })
    .then(fileSystem.writeTextFile(DEFAULT_KEYBIND_CONFIG_PATH, DEFAULT_KEYBIND_CONFIG, { dir: fileSystem.BaseDirectory.App }));
  });

}

function fileToDirPath(path) {
  return path.slice(0, path.lastIndexOf("/"));
}

/* CONTROLS */


document.addEventListener('keydown', e => doInput(e.code, true, false));
document.addEventListener('keyup', e => doInput(e.code, false, false));

CommandExecutor.register("toggleMenu", args => toggleMenu());

let keybinds = new Map();
function initKeybinds(conf) {

  conf = JSON.parse(conf);

  let table = document.getElementById("key-binding-table");

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

function doInput(code, isDown, isGamepad) {

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

    fileSystem && writeKeybinds();

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

    fileSystem && writeKeybinds();

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
  
  let printPrettyJson = JSON.stringify(config.sort(sortCommands), null, 2).replace(/([\"|(null)|\{],?)\n/g, "$1");
  fileSystem.writeTextFile(DEFAULT_KEYBIND_CONFIG_PATH, printPrettyJson, { dir: fileSystem.BaseDirectory.App })
}

function sortCommands(a,b) {
  return a.type + commandToIndex(a.command) > b.type + commandToIndex(b.command);
}

function commandToIndex(c) {
  switch(c) {
    case "AKey": return "0";
    case "BKey": return "1";
    case "LKey": return "2";
    case "RKey": return "3";
    case "StartKey": return "4";
    case "SelectKey": return "5";
    case "UpKey": return "6";
    case "DownKey": return "7";
    case "LeftKey": return "8";
    case "RightKey": return "9";
    default: return c;
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

