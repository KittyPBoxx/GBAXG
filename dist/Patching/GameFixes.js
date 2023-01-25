function patchGameIssues() {
    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        // Fix issue with morty not appearing in the gym due to sequence breaks
        if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

                // Hide the original morty and disguse him as wall art & make the enterance guy a new morty
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e511ed - 0x08000000, 0x80);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e511F2 - 0x08000000, 0x02);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51265 - 0x08000000, 0x80);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51268 - 0x08000000, 0x05);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e5126A - 0x08000000, 0x02);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51274 - 0x08000000, 0xf0);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51275 - 0x08000000, 0x63);

        }
        

    }

}
