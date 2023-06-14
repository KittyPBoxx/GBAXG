const fileSystem=null,VERSION_NUMBER="0.10.1-ALPHA";var debugConsole;function debounce(e,t=300){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}}function initMenu(){M.Carousel.init(document.querySelectorAll(".carousel"),{numVisible:5,dist:-20,noWrap:!0,preventLoop:!0,enableTouch:!1,duration:30}),document.querySelectorAll(".carousel-item").forEach((e=>e.setAttribute("draggable",!1))),document.querySelectorAll(".left-menu-button").forEach((e=>e.onclick=()=>M.Carousel.getInstance(document.getElementById("menuCarousel")).prev())),document.querySelectorAll(".right-menu-button").forEach((e=>e.onclick=()=>M.Carousel.getInstance(document.getElementById("menuCarousel")).next()))}function toggleMenu(){let e=M.Modal.getInstance(document.getElementById("menu"));e.isOpen?e.close():e.open(),window.dispatchEvent(new Event("resize"))}async function createAndLoadConfig(){storageManager.find("keybinds").then(initKeybinds,(e=>{initKeybinds(DEFAULT_KEYBIND_CONFIG),storageManager.persist(keybinds,DEFAULT_KEYBIND_CONFIG)}))}function fileToDirPath(e){return e.slice(0,e.lastIndexOf("/"))}function dissmissUpdateDialog(){setValue("GBAXG_lastVersionMessage","0.10.1-ALPHA")}function populateUpdateDialog(){let e=document.getElementById("updateModalText");e.innerHTML+="<h5 class='card-panel red darken-1 white-text'>UPDATE: 0.10.1-ALPHA</h5>";let t=document.createElement("ul");t.classList.add("updateList"),RELEASE_NOTES["0.10.1-ALPHA"].forEach((e=>{let n=document.createElement("li");n.innerHTML=e,t.appendChild(n)})),e.innerHTML+=t.outerHTML,e.innerHTML+="<div class='olderVersions'><a href='https://kittypboxx.github.io/GBAXG/dist/'>Latest Nightly Version (Unstable)</a> <br><a href='../Historic/index.html'>Older Versions</a> <br><a href='https://trello.com/b/esQs4wx3/multi-game-random-warps'>See Development Progress</a></div>"}document.addEventListener("DOMContentLoaded",(function(){console.info("Version 0.10.1-ALPHA"),document.getElementById("version").innerHTML="0.10.1-ALPHA",M.Modal.init(document.getElementById("menu"),{onOpenStart:()=>IodineGUI.isPlaying&&IodineGUI.Iodine.pause(),onCloseEnd:()=>!IodineGUI.isPlaying&&IodineGUI.Iodine.playStatusCallback&&IodineGUI.Iodine.play(),dismissible:!1}).open(),initMenu();let e=M.Modal.init(document.getElementById("updateModal"),{onOpenStart:()=>populateUpdateDialog(),onCloseEnd:()=>dissmissUpdateDialog(),dismissible:!0});(!findValue("GBAXG_lastVersionMessage")||VERSION_COMPARITOR.apply(this,[findValue("GBAXG_lastVersionMessage"),"0.10.1-ALPHA"])<0)&&e.open(),createAndLoadConfig(),M.Autocomplete.init(document.getElementById("autocomplete-items"),{limit:4,data:Object.keys(ITEM_DATA).reduce(((e,t)=>(e[t]=null,e)),{})}),M.Autocomplete.init(document.getElementById("autocomplete-locations"),{limit:4,data:Object.keys(KEY_LOCATION_DATA).reduce(((e,t)=>(e[t]=null,e)),{}),onAutocomplete:()=>{let e=KEY_LOCATION_DATA[document.getElementById("autocomplete-locations").value].split(",");document.getElementById("game-value-input").value=e[0],document.getElementById("bank-value-input").value=e[1],document.getElementById("map-value-input").value=e[2],document.getElementById("warp-value-input").value=e[3],M.FormSelect.getInstance(document.getElementById("game-value-input"))._handleSelectChangeBound()}}),populateHints(),M.FormSelect.init(document.querySelectorAll("select"),{}),debugConsole=M.Modal.init(document.getElementById("console"),{}),document.querySelectorAll("input[type=text]").forEach((e=>e.addEventListener("focusin",(e=>userInputEnabled=!1)))),document.querySelectorAll("input[type=text]").forEach((e=>e.addEventListener("focusout",(e=>userInputEnabled=!0))))})),window.addEventListener("resize",initMenu,!0),document.addEventListener("keydown",(e=>doInput(e.code,!0,!1))),document.addEventListener("keyup",(e=>doInput(e.code,!1,!1))),CommandExecutor.register("toggleMenu",(e=>toggleMenu()));let keybinds=new Map;function initKeybinds(e){e=JSON.parse(e);let t=document.getElementById("key-binding-table");e.sort(sortCommands),e.forEach((e=>{"exec"==e.type?(e.kbd&&keybinds.set("KBD-"+e.kbd+"-Down",e.command),e.gmpd&&keybinds.set("GMPD-"+e.gmpd+"-Down",e.command)):"button"==e.type&&(e.kbd&&keybinds.set("KBD-"+e.kbd+"-Down",e.command+"Down"),e.kbd&&keybinds.set("KBD-"+e.kbd+"-Up",e.command+"Up"),e.gmpd&&keybinds.set("GMPD-"+e.gmpd+"-Down",e.command+"Down"),e.gmpd&&keybinds.set("GMPD-"+e.gmpd+"-Up",e.command+"Up"));let n=t.insertRow(t.rows.length);n.insertCell(0).innerHTML=`<td>&nbsp;${e.command.replace("Key","")}</td>`;let o=n.insertCell(1);o.innerHTML=`<td>&nbsp;<span>${e.kbd.replace("Key","")||"N/A"}</span></td>`,o.setAttribute("data-command",e.command),o.setAttribute("data-type",e.type),o.addEventListener("click",listenForKbdBinding);let i=n.insertCell(2);i.innerHTML=`<td>&nbsp;<span>${e.gmpd||"N/A"}</span></td>`,i.setAttribute("data-command",e.command),i.setAttribute("data-type",e.type),i.addEventListener("click",listenForGmpdBinding)}))}let listenFor=!1;function listenForKbdBinding(e){M.Toast.dismissAll(),listenFor={isGamepad:!1,command:e.currentTarget.getAttribute("data-command"),type:e.currentTarget.getAttribute("data-type"),elmnt:e.currentTarget,oldCode:e.currentTarget.querySelector("span").innerHTML},M.toast({html:"Press any key...",displayLength:3e3,completeCallback:()=>freezeClic=listenFor=!1}),freezeClic=!0}function listenForGmpdBinding(e){M.Toast.dismissAll(),listenFor={isGamepad:!0,command:e.currentTarget.getAttribute("data-command"),type:e.currentTarget.getAttribute("data-type"),elmnt:e.currentTarget,oldCode:e.currentTarget.querySelector("span").innerHTML},M.toast({html:"Press any button...",displayLength:3e3,completeCallback:()=>freezeClic=listenFor=!1}),freezeClic=!0}var userInputEnabled=!0;function doInput(e,t,n){userInputEnabled&&(listenFor&&!listenFor.isGamepad&&!n&&t?("button"==listenFor.type?(keybinds.delete("KBD-"+listenFor.oldCode+"-Down"),keybinds.delete("KBD-"+listenFor.oldCode+"-Up"),keybinds.set("KBD-"+e+"-Down",listenFor.command+"Down"),keybinds.set("KBD-"+e+"-Up",listenFor.command+"Up")):"exec"==listenFor.type&&(keybinds.delete("KBD-"+listenFor.oldCode+"-Down"),keybinds.set("KBD-"+e+"-Down",listenFor.command)),listenFor.elmnt.innerHTML=`<td>&nbsp;<span>${e.replace("Key","")}</span></td>`,listenFor=!1,M.Toast.dismissAll(),writeKeybinds()):listenFor&&listenFor.isGamepad&&n&&t?("button"==listenFor.type?(keybinds.delete("GMPD-"+listenFor.oldCode+"-Down"),keybinds.delete("GMPD-"+listenFor.oldCode+"-Up"),keybinds.set("GMPD-"+e+"-Down",listenFor.command+"Down"),keybinds.set("GMPD-"+e+"-Up",listenFor.command+"Up")):"exec"==listenFor.type&&(keybinds.delete("GMPD-"+listenFor.oldCode+"-Down"),keybinds.set("GMPD-"+e+"-Down",listenFor.command)),listenFor.elmnt.innerHTML=`<td>&nbsp;<span>${e}</span></td>`,listenFor=!1,M.Toast.dismissAll(),writeKeybinds()):(e=(n?"GMPD-":"KBD-")+e+(t?"-Down":"-Up"),keybinds.get(e)&&CommandExecutor.execute(keybinds.get(e))))}function writeKeybinds(){let e=[];new Set([...keybinds.values()].filter((e=>!e.includes("KeyUp")))).forEach((t=>{let n={},o=t.includes("Down")&&[...keybinds].filter((([e,n])=>n==t.replace("Down","Up")>0));n.type=o?"button":"exec",n.command=o?t.replace(/KeyDown$/,"Key"):t,n.kbd=null,n.gmpd=null,[...keybinds].filter((([e,n])=>n==t)).forEach((e=>n[e[0].includes("KBD")?"kbd":"gmpd"]=e[0].match(/-(.*)-/).pop())),e.push(n)})),e.sort(sortCommands);let t=JSON.stringify(e,null,2).replace(/([\"|(null)|\{],?)\n/g,"$1");storageManager.persist("keybinds",t)}function sortCommands(e,t){return e.type+commandToIndex(e.command)>t.type+commandToIndex(t.command)?1:-1}function commandToIndex(e){switch(e){case"AKey":return 0;case"BKey":return 1;case"LKey":return 2;case"RKey":return 3;case"StartKey":return 4;case"SelectKey":return 5;case"UpKey":return 6;case"DownKey":return 7;case"LeftKey":return 8;case"RightKey":return 9;case"SpeedUp":return 10;case"Restart":return 11;case"toggleMenu":return 12;default:return 999}}function menuInput(e){switch(e){case"A":case"B":case"START":case"SELECT":case"UP":case"DOWN":case"LEFT":case"RIGHT":break;case"L":M.Carousel.getInstance(document.getElementById("menuCarousel")).prev();break;case"R":M.Carousel.getInstance(document.getElementById("menuCarousel")).next()}}let freezeClic=!1;function populateHints(){let e=document.getElementById("hint-table");Object.entries(HINTABLE_LOCATIONS).forEach((t=>{let n=e.insertRow(e.rows.length);n.insertCell(0).innerHTML=`<td>&nbsp;${t[0]}</td>`;let o=n.insertCell(1);o.innerHTML="<td>&nbsp;<span>Show Hint</span></td>",o.setAttribute("data-location",t[1]),o.setAttribute("data-target",`hint-table-${t[0].replaceAll(" ","-")}`),o.addEventListener("click",displayHint);let i=n.insertCell(2);i.setAttribute("id",`hint-table-${t[0].replaceAll(" ","-")}`),i.innerHTML="<td>&nbsp;...</td>"}))}function displayHint(e){let t=document.getElementById(e.currentTarget.getAttribute("data-target")),n=getHint(e.currentTarget.getAttribute("data-location"));t.innerHTML=n}document.addEventListener("click",(e=>{freezeClic&&(M.Toast.dismissAll(),e.stopPropagation(),e.preventDefault())}),!0),document.addEventListener("swiped-down",(e=>{console.log(e.detail.yEnd-e.detail.yStart),e.detail.yEnd-e.detail.yStart>250&&toggleMenu()}));
//# sourceMappingURL=build-index.511febb4.js.map
