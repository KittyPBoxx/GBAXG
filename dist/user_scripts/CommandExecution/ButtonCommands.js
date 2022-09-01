/**
 * Requires:    - CommandExecutor.js
 */


/* Register button commands for pressing and releasing */

CommandExecutor.register("AKeyDown"     , args => IodineGUI.Iodine.keyDown(0)); // A
CommandExecutor.register("AKeyUp"       , args => IodineGUI.Iodine.keyUp  (0));

CommandExecutor.register("BKeyDown"     , args => IodineGUI.Iodine.keyDown(1)); // B
CommandExecutor.register("BKeyUp"       , args => IodineGUI.Iodine.keyUp  (1));

CommandExecutor.register("SelectKeyDown", args => IodineGUI.Iodine.keyDown(2)); // Select
CommandExecutor.register("SelectKeyUp"  , args => IodineGUI.Iodine.keyUp  (2));

CommandExecutor.register("StartKeyDown" , args => IodineGUI.Iodine.keyDown(3)); // Start
CommandExecutor.register("StartKeyUp"   , args => IodineGUI.Iodine.keyUp  (3));

CommandExecutor.register("RightKeyDown" , args => IodineGUI.Iodine.keyDown(4)); // Right
CommandExecutor.register("RightKeyUp"   , args => IodineGUI.Iodine.keyUp  (4));

CommandExecutor.register("LeftKeyDown"  , args => IodineGUI.Iodine.keyDown(5)); // Left
CommandExecutor.register("LeftKeyUp"    , args => IodineGUI.Iodine.keyUp  (5));

CommandExecutor.register("UpKeyDown"    , args => IodineGUI.Iodine.keyDown(6)); // Up
CommandExecutor.register("UpKeyUp"      , args => IodineGUI.Iodine.keyUp  (6));

CommandExecutor.register("DownKeyDown"  , args => IodineGUI.Iodine.keyDown(7)); // Down
CommandExecutor.register("DownKeyUp"    , args => IodineGUI.Iodine.keyUp  (7));

CommandExecutor.register("RKeyDown"     , args => IodineGUI.Iodine.keyDown(8)); // R
CommandExecutor.register("RKeyUp"       , args => IodineGUI.Iodine.keyUp  (8));

CommandExecutor.register("LKeyDown"     , args => IodineGUI.Iodine.keyDown(9)); // L
CommandExecutor.register("LKeyUp"       , args => IodineGUI.Iodine.keyUp  (9));


/* Register Commands to simulate button tap */

CommandExecutor.register("A"     , args => { IodineGUI.Iodine.keyDown(0); IodineGUI.Iodine.keyUp(0) }); // A
CommandExecutor.register("B"     , args => { IodineGUI.Iodine.keyDown(1); IodineGUI.Iodine.keyUp(1) }); // B
CommandExecutor.register("Select", args => { IodineGUI.Iodine.keyDown(2); IodineGUI.Iodine.keyUp(2) }); // Select
CommandExecutor.register("Start" , args => { IodineGUI.Iodine.keyDown(3); IodineGUI.Iodine.keyUp(3) }); // Start
CommandExecutor.register("Right" , args => { IodineGUI.Iodine.keyDown(4); IodineGUI.Iodine.keyUp(4) }); // Right
CommandExecutor.register("Left"  , args => { IodineGUI.Iodine.keyDown(5); IodineGUI.Iodine.keyUp(5) }); // Left
CommandExecutor.register("Up"    , args => { IodineGUI.Iodine.keyDown(6); IodineGUI.Iodine.keyUp(6) }); // Up
CommandExecutor.register("Down"  , args => { IodineGUI.Iodine.keyDown(7); IodineGUI.Iodine.keyUp(7) }); // Down
CommandExecutor.register("R"     , args => { IodineGUI.Iodine.keyDown(8); IodineGUI.Iodine.keyUp(8) }); // R
CommandExecutor.register("L"     , args => { IodineGUI.Iodine.keyDown(9); IodineGUI.Iodine.keyUp(9) }); // L

/* Iodine functions */
let speedUpSpeed = 4;
CommandExecutor.register("SpeedUp", args => IodineGUI.Iodine.setSpeed(IodineGUI.Iodine.getSpeed() == 1 ? speedUpSpeed : 1));
CommandExecutor.register("Restart", args => IodineGUI.Iodine.restart());