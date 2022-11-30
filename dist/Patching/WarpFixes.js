function patchDuplicateWarps() {
    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {
        // Duplicate Warp in aquas hidoute
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0853550D - 0x08000000, 0x32);
        // Duplicate Warp in seafloor cavern
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085359E1 - 0x08000000, 0x32);
    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {
        // Not checked for version 1.0

        // Pokemon Mansion Exit
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x083B0C90 - 0x08000000, 0x32);
    }
}