var earlyBalls = true;

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

        // Patch Crashing route 30 pidgey
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3c9a8 - 0x08000000, 0x76);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3c9a9 - 0x08000000, 0x73);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3c9aa - 0x08000000, 0xe8);

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
        
        // Fix goldenrod rocket positions
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9884C - 0x08000000, 0x11);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9884E - 0x08000000, 0x18);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9884E - 0x08000000, 0x10);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9890C - 0x08000000, 0x1C);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9890E - 0x08000000, 0x17);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e98926 - 0x08000000, 0x17);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e98954 - 0x08000000, 0x1B);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e98956 - 0x08000000, 0x0B);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9896C - 0x08000000, 0x1B);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08e9896E - 0x08000000, 0x0B);

        // Make sure ice path puzzle floor can always be done
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f5ee - 0x08000000, 0xc7);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f5ef - 0x08000000, 0x06);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f6a0 - 0x08000000, 0xc7);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f6a1 - 0x08000000, 0x06);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f78e - 0x08000000, 0xc7);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f78f - 0x08000000, 0x06);

        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f7d0 - 0x08000000, 0xc7);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x08f3f7d1 - 0x08000000, 0x06);

        // Patch out regie rock
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0xf35bac, 0xc9);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0xf35bad, 0x9f);
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0xf35bae, 0x9d);

        // Remove Darkness from Caves
        IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x0854d8, 0x08);

        // Instant Catch
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5652a, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5652d, 0xd0);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5660e, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x56611, 0xd0);
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

       // Mossdeep Magma dissapear from both sides 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527240, 0x29);

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527250, 0x28);

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527260, 0x3a);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527262, 0x1d);

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527270, 0x39);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x527272, 0x1d);

       // Talk to aqua outside safari makes them leave
       patchSectionOfRom(0x52bb2c, [0x18, 0x5e, 0x1f, 0x08] , "E");
       patchSectionOfRom(0x52bb5c, [0x18, 0x5e, 0x1f, 0x08] , "E");
       
       // Make Mirage Tower always present
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x1be7eC, 0xa9);

       // Open the meteor falls door
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42e8e4, 0x46);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42e920, 0x4e);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42e921, 0x32);

       // Open All E4 Back Doors
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d522, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d523, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d53C, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d53D, 0x33);

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d6ae, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d6af, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d6c8, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d6c9, 0x33); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d83a, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d83b, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d854, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d855, 0x33); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d83a, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d83b, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d854, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d855, 0x33); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9c6, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9c7, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9e0, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9e1, 0x33); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9c6, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9c7, 0x07);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9e0, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42d9e1, 0x33); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42dc6e, 0x22);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42dc70, 0x47);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x42dc72, 0x22);

       // Open All Front Doors
       patchSectionOfRom(0x42d63E, [0x1,0x32,0x44,0x33,0x03,0x32,0xd7,0x06,0xd5,0x06,0xd6,0x06,0xd5,0x06,0xd6,0x06,0x48,0x07,0x49,0x07,0x48,0x07,0x49,0x07,0xe6,0x06,0x09,0x32,0x45,0x33,0x0b,0x32,0xdf,0x06] , "E");

       patchSectionOfRom(0x42d7ca, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32] , "E");
       patchSectionOfRom(0x42d7e4, [0x09, 0x32, 0x45, 0x33, 0x0b, 0x32, 0xdf, 0x06, 0x48, 0x07, 0x49, 0x07] , "E");

       patchSectionOfRom(0x42d956, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32, 0xd7, 0x06, 0xd5, 0x06] , "E");
       patchSectionOfRom(0x42d970, [0x09, 0x32, 0x45, 0x33, 0x0b, 0x32, 0xdf, 0x06, 0x48, 0x07, 0x49, 0x07, 0x48, 0x07, 0x49, 0x07] , "E");

       patchSectionOfRom(0x42dae2, [0x01, 0x32, 0x44, 0x33, 0x03, 0x32, 0xd7, 0x06, 0xd5, 0x06, 0xd6, 0x06, 0xd5, 0x06] , "E");
       patchSectionOfRom(0x42dafc, [0x09, 0x32, 0x45, 0x33, 0x0b] , "E");

       // Make sure walking into room works correctly
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x227f27, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x227f28, 0x00); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x227f29, 0x00); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x227f3E, 0x9c); 

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228184, 0x9c);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228186, 0x01); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2281b4, 0x00); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2281b5, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2281b6, 0x00);  

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228422, 0x9c);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228424, 0x02); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228452, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228453, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228454, 0x00);  
       
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2286ac, 0x9c);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2286ae, 0x03); 
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2286dc, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2286dd, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2286de, 0x00); 

       // Patch so front doors don't lock beind you
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x272487, 0x01);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x272490, 0x44);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x272491, 0x03);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x272492, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x272499, 0x03);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724a2, 0x09);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724a9, 0x0d);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724ab, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724ac, 0x03);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724ad, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x2724b4, 0x0b);

       // Don't start champion fight right away but on talk
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228a3c, 0x0f);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x228a42, 0x27);

       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x533710, 0x45);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x533711, 0x8a);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x533712, 0x22);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x533713, 0x08);

       // Remove Darkness from Caves
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x0854d8, 0x08);

       // Instant Catch
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5652a, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5652d, 0xd0);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5660e, 0x00);
       IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x56611, 0xd0);

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

            // Patch victory road barriers
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160f99, 0xd1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160f9A, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160f9B, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160fa2, 0xe1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160fa3, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x160fa4, 0x00);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16102c, 0xd1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16102d, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16102e, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161035, 0xe1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161036, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161037, 0x00);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16103f, 0xd1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161040, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161041, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161048, 0xe1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161049, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16104a, 0x00);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161139, 0xd1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16113a, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16113b, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161142, 0xe1);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161143, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x161144, 0x00);

            // Instant Catch
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d696, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d699, 0xd0);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d77a, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d77d, 0xd0);

            // Always open the champion room door
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc3e, 0x8a);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc3f, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc40, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc41, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc42, 0x8c);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc43, 0x02);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc58, 0x95);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc59, 0x02);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc5a, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc5b, 0x32);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc5c, 0x97);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31fc5d, 0x02);

            // Champion Fight on talk
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3b19f8, 0xee);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3b19f9, 0x2b);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3b19fa, 0x16);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x3b19fb, 0x08);

            // Dont start fight on enter
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162b65, 0x3d);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162b66, 0x26);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162bf7, 0x61);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162bf8, 0x76);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162bf9, 0x1a);

            // Don't Lock E4 Room Doors
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a7619, 0x8a);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a7622, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a7624, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a762b, 0x8c);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a7634, 0x95);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a763d, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a763f, 0x00);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1a7646, 0x97);

            // Knock through lance's wall
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f70e, 0x40);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f70f, 0x07);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f710, 0x36);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f711, 0x07);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f746, 0x48);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f747, 0x07);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f748, 0x3e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f749, 0x07);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f77c, 0x10);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f77d, 0x33);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f77e, 0x10);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f77f, 0x33);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f780, 0x10);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f781, 0x33);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f782, 0x10);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f783, 0x33);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f802, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f803, 0x32);

            // Open All E4 back doors by default
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f0ba, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f0d4, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f0d5, 0x32);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f232, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f24c, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f24d, 0x32);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f3aa, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f3c4, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f3c5, 0x32);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f5e8, 0x8e);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f620, 0x96);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x31f621, 0x32);

            // Prevent walk north when entering the back door
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16262e, 0x68);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16262f, 0x40);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16273e, 0x68);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x16273f, 0x40);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x162740, 0x01);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1628c9, 0x68);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1628ca, 0x40);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1628cb, 0x02);

            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1629e6, 0x68);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1629e7, 0x40);
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x1629e8, 0x03);
            

            if (earlyBalls) {                                
                patchSectionOfRom(0x169550, [0x0,0x96,0x96,0x16,0x08,0x21,0x02,0x40,0x02,0x00,0x07,0x01,0x96,0x96,0x16,0x08], "FR");
                IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x169567, 0x96);
                IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x169568, 0x96);
            }

            document.getElementById("earlyBalls").setAttribute("disabled", true);
            document.getElementById("earlyBallsHolder").style.filter = "saturate(0)";


        } else {

            // Move cerulean cave blocker to avoid soft locks before you get surf
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x083B52AC - 0x08000000, 0x00);

            // Patch Lorilei room to avoid softlock by auto walk
            IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x0831f065 - 0x08000000, 0x32);

        }

    }

}

function patchOutInstantCatch() {
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d696, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d699, 0xd1);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d77a, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("FR").patchROM8(0x2d77d, 0xd1);

    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5652a, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5652d, 0xd1);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x5660e, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("E").patchROM8(0x56611, 0xd1);

    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5652a, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5652d, 0xd1);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x5660e, 0x01);
    IodineGUI.Iodine.IOCore.cartridge.cartriges.get("C").patchROM8(0x56611, 0xd1);
}
