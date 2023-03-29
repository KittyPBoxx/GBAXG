function patchDuplicateWarps() {
    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        // (24,24,20, 24,24,23) -> 24,24,17
        // First Duplicate Warp in aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0853550D - 0x08000000, 0x32);

        // (24,24,9, 24,24,14, 24,24,21) -> 24,24,12
        // Second duplicate Warp in aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085354FD - 0x08000000, 0x33);
        // Thrid duplicate warp in team aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085354C5 - 0x08000000, 0x34);
        
        // (24,24,7, 24,25,9) -> 24,24,4
        // Fourth duplicate warp in team aquas hideout
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535609 - 0x08000000, 0x35);
        
        // (24,31,3, 24,28,0, 24,33,2) -> 24,27,1
        // Duplicate Warp in seafloor cavern
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x085359E1 - 0x08000000, 0x32);
        // Second Duplicate seafloor cavern warp
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535AC9 - 0x08000000, 0x46);

        // Patch in cave of origin caves (from ruby/saphire) not present in emerald
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535d4E - 0x08000000, 0x27);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08535dEE - 0x08000000, 0x29);  
    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            /* Is Version 1.1 */

            // Pokemon Mansion Exit
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B0C95 - 0x08000000, 0x32);

        } else {

            // Pokemon Mansion Exit
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B0C20 - 0x08000000, 0x32);

        }

    }
}