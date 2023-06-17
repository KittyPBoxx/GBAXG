/**
 * Requires:    - CommandExecutor.js
 */


/* Register button commands for pressing and releasing */

var alwaysTurbo = false;
var tempTurbo = false;
var aMashInterval;
var bMashInterval;

CommandExecutor.register("AKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(0) : null               // A
  if (alwaysTurbo || tempTurbo) {
    aMashInterval = setInterval(() => { keyPress(0) }, 100);
  }
});
CommandExecutor.register("AKeyUp"       , (args) => { 
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (0) : menuInput("A");
  clearInterval(aMashInterval);
});

CommandExecutor.register("BKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(1) : null   // B
  if (alwaysTurbo || tempTurbo) {
    bMashInterval = setInterval(() => { keyPress(1) }, 100);
  }
});             

CommandExecutor.register("BKeyUp"       , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (1) : menuInput("B");
  clearInterval(bMashInterval);
});

var selectDown = false;

CommandExecutor.register("SelectKeyDown", args => { 
  if (IodineGUI.isPlaying)  {
    selectDown = true;
    IodineGUI.Iodine.keyDown(2);
  }
});               // Select
CommandExecutor.register("SelectKeyUp"  , args => {
  if (IodineGUI.isPlaying) {
    IodineGUI.Iodine.keyUp (2);
    selectDown = false;
  } else {
    menuInput("SELECT");
  } 
});
CommandExecutor.register("StartKeyDown" , args => { 
  if (IodineGUI.isPlaying && !selectDown) { 
    IodineGUI.Iodine.keyDown(3); 
  } else if (IodineGUI.isPlaying && selectDown) {
    restartFromLastSave();
  }
}); // Start, 
CommandExecutor.register("StartKeyUp"   , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (3) : menuInput("START"));
CommandExecutor.register("RightKeyDown" , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(4) : null);               // Right
CommandExecutor.register("RightKeyUp"   , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (4) : menuInput("RIGHT"));
CommandExecutor.register("LeftKeyDown"  , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(5) : null);               // Left
CommandExecutor.register("LeftKeyUp"    , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (5) : menuInput("LEFT"));
CommandExecutor.register("UpKeyDown"    , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(6) : null);               // Up
CommandExecutor.register("UpKeyUp"      , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (6) : menuInput("UP"));
CommandExecutor.register("DownKeyDown"  , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(7) : null);               // Down
CommandExecutor.register("DownKeyUp"    , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (7) : menuInput("DOWN"));
CommandExecutor.register("RKeyDown"     , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(8) : null);               // R
CommandExecutor.register("RKeyUp"       , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (8) : menuInput("R"));
CommandExecutor.register("LKeyDown"     , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(9) : null);               // L
CommandExecutor.register("LKeyUp"       , args => IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (9) : menuInput("L"));


/* Register Commands to simulate button tap */

CommandExecutor.register("A"     , args => IodineGUI.isPlaying ? keyPress(0) /* A      */ : menuInput("A")); 
CommandExecutor.register("B"     , args => IodineGUI.isPlaying ? keyPress(1) /* B      */ : menuInput("B")); 
CommandExecutor.register("Select", args => IodineGUI.isPlaying ? keyPress(2) /* Select */ : menuInput("SELECT")); 
CommandExecutor.register("Start" , args => IodineGUI.isPlaying ? keyPress(3) /* Start  */ : menuInput("START")); 
CommandExecutor.register("Right" , args => IodineGUI.isPlaying ? keyPress(4) /* Right  */ : menuInput("RIGHT")); 
CommandExecutor.register("Left"  , args => IodineGUI.isPlaying ? keyPress(5) /* Left   */ : menuInput("LEFT")); 
CommandExecutor.register("Up"    , args => IodineGUI.isPlaying ? keyPress(6) /* Up     */ : menuInput("UP")); 
CommandExecutor.register("Down"  , args => IodineGUI.isPlaying ? keyPress(7) /* Down   */ : menuInput("DOWN")); 
CommandExecutor.register("R"     , args => IodineGUI.isPlaying ? keyPress(8) /* R      */ : menuInput("R")); 
CommandExecutor.register("L"     , args => IodineGUI.isPlaying ? keyPress(9) /* L      */ : menuInput("L")); 

var turboRepeatDelay = 5;

/* Second Mapping Reuested For A/B keys mappings */
CommandExecutor.register("AltAKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(0) : null   // A
  if (alwaysTurbo || tempTurbo) {
    aMashInterval = setInterval(() => { keyPress(0) }, turboRepeatDelay);
  }
});
CommandExecutor.register("AltAKeyUp"       , (args) => { 
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (0) : menuInput("A");
  clearInterval(aMashInterval);
});

CommandExecutor.register("AltBKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(1) : null   // B
  if (alwaysTurbo || tempTurbo) {
    bMashInterval = setInterval(() => { keyPress(1) }, turboRepeatDelay);
  }
});             

CommandExecutor.register("AltBKeyUp"       , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (1) : menuInput("B");
  clearInterval(bMashInterval);
});


/* Turbo Mappings Reuested For A/B keys mappings */
CommandExecutor.register("TurboAKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(0) : null   // A
  aMashInterval = setInterval(() => { keyPress(0) }, turboRepeatDelay);
});
CommandExecutor.register("TurboAKeyUp"       , (args) => { 
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (0) : menuInput("A");
  clearInterval(aMashInterval);
});

CommandExecutor.register("TurboBKeyDown"     , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyDown(1) : null   // B
  bMashInterval = setInterval(() => { keyPress(1) }, turboRepeatDelay);
});             

CommandExecutor.register("TurboBKeyUp"       , (args) => {
  IodineGUI.isPlaying ? IodineGUI.Iodine.keyUp  (1) : menuInput("B");
  clearInterval(bMashInterval);
});


/* Iodine functions */
let speedUpSpeed = 4;
var disableSpeedupAudio = true;
CommandExecutor.register("SpeedUp", args => { 
  IodineGUI.Iodine.setSpeed(IodineGUI.Iodine.getSpeed() == 1 ? speedUpSpeed : 1);
  document.getElementById("useSpeedup").checked = IodineGUI.Iodine.getSpeed() != 1;

  updateEnabledAudioForSpeed();

  let isPlaying = IodineGUI.isPlaying;
  IodineGUI.Iodine.pause();
  IodineGUI.Iodine.play();
  if (!isPlaying) {
    IodineGUI.Iodine.pause();
  }
});
CommandExecutor.register("BigSpeedUp", args => IodineGUI.Iodine.setSpeed(IodineGUI.Iodine.getSpeed() == 1 ? 10 : 1));
CommandExecutor.register("Restart", args => restartFromLastSave());
CommandExecutor.register("Start", args => IodineGUI.Iodine.play());
CommandExecutor.register("Stop", args => IodineGUI.Iodine.stop());

function updateEnabledAudioForSpeed() {
  if (IodineGUI.Iodine.getSpeed() == 1) {
    IodineGUI.Iodine.enableAudio();
  } else if (disableSpeedupAudio) {
    IodineGUI.Iodine.disableAudio();
  }
}

/* State functions */
CommandExecutor.register("SaveSlot1", args => {
  let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS1").preview;
  document.getElementById("saveState1Preiew").src = preview;
  M.toast({html: 'State Saved', displayLength:500});
});
CommandExecutor.register("LoadSlot1", args => {
  IodineGUI.Iodine.saveStateManager.loadMultiState("MS1");
});

CommandExecutor.register("SaveSlot2", args => {
  let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS2").preview;
  document.getElementById("saveState2Preiew").src = preview;
  M.toast({html: 'State Saved', displayLength:500});
});
CommandExecutor.register("LoadSlot2", args => {
  IodineGUI.Iodine.saveStateManager.loadMultiState("MS2");
});

CommandExecutor.register("SaveSlot3", args => {
  let preview = IodineGUI.Iodine.saveStateManager.saveMultiState("MS3").preview;
  document.getElementById("saveState3Preiew").src = preview;
  M.toast({html: 'State Saved', displayLength:500});
});
CommandExecutor.register("LoadSlot3", args => {
  IodineGUI.Iodine.saveStateManager.loadMultiState("MS3");
});

var keyPress = async(k) => { IodineGUI.Iodine.keyDown(k); await delay(50); IodineGUI.Iodine.keyUp(k) }
async function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
}

/* Hack Functions */
CommandExecutor.register("ToggleWarps", args => {
  randomWarpsEnabled = !randomWarpsEnabled;
  document.getElementById("enableWarpsCheckbox").checked = randomWarpsEnabled;
});

CommandExecutor.register("ToggleWalls", args => {
  walkThroughWalls = !walkThroughWalls;
  document.getElementById("disableWalls").checked = walkThroughWalls;
});

CommandExecutor.register("ToggleBike", args => {
  autoBike = !autoBike;
  document.getElementById("autoBike").checked = autoBike;
  if (autoBike) {
    forcePlayerState(MOVEMENT_MODE_BIKE);
  } else {
    forcePlayerState(MOVEMENT_MODE_WALK);
  }
});

CommandExecutor.register("ToggleSpeedCodes", args => {

  if (document.getElementById("speedCodes").getAttribute("disabled")) 
  {
      return;
  }

  useSpeedupCodes = !useSpeedupCodes;
  document.getElementById("speedCodes").checked = useSpeedupCodes;

  if (useSpeedupCodes) {
    patchInSpeedupCodes();
  } else {
    patchOutSpeedupCodes();
  }
});

CommandExecutor.register("TempTurboDown" , args => tempTurbo = true);
CommandExecutor.register("TempTurboUp"   , args => tempTurbo = false);

CommandExecutor.register("volumeInc" , args => {
  M.toast({html: 'Volume: ' + (Math.round((Math.min(IodineGUI.Iodine.audio.volume + 0.01, 1)) * 1000) / 100).toFixed(2), displayLength:250});
  IodineGUI.Iodine.audio.setVolume(Math.min(IodineGUI.Iodine.audio.volume + 0.01, 1))
});
CommandExecutor.register("volumeDec" , args => {
  M.toast({html: 'Volume: ' + (Math.round((Math.max(IodineGUI.Iodine.audio.volume - 0.01, 0)) * 1000) / 100).toFixed(2), displayLength:250});
  IodineGUI.Iodine.audio.volume = Math.max(IodineGUI.Iodine.audio.volume - 0.01, 0)
});