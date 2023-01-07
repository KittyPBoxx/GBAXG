function patchDuplicateWarps() {
    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {
        // First Duplicate Warp in aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0853550D - 0x08000000, 0x32);
        // Second duplicate Warp in aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085354FD - 0x08000000, 0x33);
        // Thrid duplicate warp in team aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085354C5 - 0x08000000, 0x34);
        // Duplicate Warp in seafloor cavern
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085359E1 - 0x08000000, 0x32);

        // Patch in cave of origin caves (from ruby/saphire) not present in emerald
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535d4E - 0x08000000, 0x27);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535dEE - 0x08000000, 0x29);  
    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {
        // Not checked for version 1.0

        // Pokemon Mansion Exit
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B0C90 - 0x08000000, 0x32);
    }
}