function patchGameIssues() {
    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C")) {

        // Fix issue with morty not appearing in the gym due to sequence breaks
        // Hide the original morty and disguse him as wall art & make the enterance guy a new morty
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e511ed - 0x08000000, 0x80);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e511F2 - 0x08000000, 0x02); 

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51265 - 0x08000000, 0x80);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51268 - 0x08000000, 0x05);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e5126A - 0x08000000, 0x02);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51274 - 0x08000000, 0xf0);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e51275 - 0x08000000, 0x63);

        // Patch blue magma sprites that sometimes appear in ruins of alph to be guards and move them off the map
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70a81 - 0x08000000, 0x0d);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70a84 - 0x08000000, 0x1c);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70a86 - 0x08000000, 0x01);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70ab1 - 0x08000000, 0x0d);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70ab4 - 0x08000000, 0x1c);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e70ab6 - 0x08000000, 0x01);

        // Patch Azalea Town crashing red into a slowpoke
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f5888d - 0x08000000, 0xd0);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f5889c - 0x08000000, 0xf1);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f5889d - 0x08000000, 0xda);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f5889e - 0x08000000, 0xe8);

        // Move Slowpoke well guard 1 over to avoid progression locks
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f587e8 - 0x08000000, 0x24);

        // Route 34 connector crashing red into a far fetched
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e933ed - 0x08000000, 0xcb);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e933fc - 0x08000000, 0x76);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e933fd - 0x08000000, 0x73);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e933fe - 0x08000000, 0xe8);          

    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        // Move route 116 tunnler from in front of house to help avoid progression locks
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0852a69c - 0x08000000, 0x25);

    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        // Move cerulean cave blocker to avoid soft locks before you get surf
        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            /* Is Version 1.1 */

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B531C - 0x08000000, 0x00);

        } else {

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B52AC - 0x08000000, 0x00);

        }

    }

}
