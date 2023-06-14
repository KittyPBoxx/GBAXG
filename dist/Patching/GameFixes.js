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

        // Remove Darkness from Caves
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x0854d8, 0x08);
    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E")) {

        // Move route 116 tunnler from in front of house to help avoid progression locks
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0852a69c - 0x08000000, 0x25);

        // Patch Sidney Room to avoid softlock by auto walk  
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0842d53D - 0x08000000, 0x32);

        // Seafloor Cavern tide room prevent getting automatically pushed through the door
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x084378A4 - 0x08000000, 0x70);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x084378A5 - 0x08000000, 0x11);

        // Make Sure You can always obtain waterfall
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08527315 - 0x08000000, 0x85);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08527318 - 0x08000000, 0x20);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0852731A - 0x08000000, 0x21);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08527324 - 0x08000000, 0x6f);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x08527325 - 0x08000000, 0x64);

        // Make sure archie will never block off the gym
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527498, 0x20);

        // Make sure we can go backwards through the trick master house
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x26ad12, 0x0B);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x26ad14, 0x00);

        // Patch magma grunts so they don't block the cable car
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x529978, 0x1B);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x52997A, 0x1C);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x52997D, 0x08);
        
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5299f0, 0x1E);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5299f2, 0x1C);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5299f5, 0x08);
       
       // Make Mirage Tower always present
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x1be7eC, 0xa9);

       // Remove Darkness from Caves
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0854d8, 0x08);

    }

    if(IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR")) {

        if (IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").ROM[0xBC]) {
            /* Is Version 1.1 */

            // Move cerulean cave blocker to avoid soft locks before you get surf
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B531C - 0x08000000, 0x00);

            // Patch Lorilei room to avoid softlock by auto walk
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x0831f0d5 - 0x08000000, 0x32);

            // Remove Darkness from Caves
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3C6946, 0xc8);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3C6948, 0xc8);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3C694A, 0xc8);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3C694C, 0xc8);

        } else {

            // Move cerulean cave blocker to avoid soft locks before you get surf
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B52AC - 0x08000000, 0x00);

            // Patch Lorilei room to avoid softlock by auto walk
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x0831f065 - 0x08000000, 0x32);

        }

    }

}
