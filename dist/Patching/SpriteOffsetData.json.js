/**
 *  Offset data for character sprites
 *  Crystal Dust V2 sprite offsets are the same as Emerald
 * 
 * TODO: 
 * - ADD FISHING SPRITES
 * - ADD ITEM ON A BIKE SPRITES
 * - ADD BACKSPRITES
 * - ADD EMERALD ADDITIONAL BIKE SPRITES
 */

/* FIRE RED 1.0 GIRL */

// f051f5211f4b5b3a0f210869e73c8e62ad14bd7fd66abf25f81c7f2f771e0000
var FR_1_0_GIRL_PALLET_DATA_BASE_OFFSET = 0x0835b968;
var FR_1_0_GIRL_PALLET_DATA_LENGTH = 32;

var FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET = 0x083A0188;
var FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET = 0x0835D268;
var FR_1_0_GIRL_WALK_SPRITE_DATA = 
{
    "front"            :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"             :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"             :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_step_1"     :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_step_2"     :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_step_1"      :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_step_2"      :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_step_1"      :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_step_2"      :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_run"        :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "front_run_step_1" :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "front_run_step_2" :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 11),
    "back_run"         :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 12),
    "back_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "back_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "side_run"         :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 15),
    "side_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 16),
    "side_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "look_left"        :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 18),
    "look_right"       :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 19)
};
var FR_1_0_GIRL_WALK_SPRITE_PTRS = 
{
    "front"            :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_run"        :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "front_run_step_1" :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "front_run_step_2" :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11),
    "back_run"         :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "back_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "side_run"         :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17),
    "look_left"        :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 18),
    "look_right"       :  FR_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 19)
};

var FR_1_0_GIRL_BIKE_SPRITE_PRT = 0x083A0228;
var FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET = 0x08363DA8;
var FR_1_0_GIRL_BIKE_SPRITE_DATA = 
{
    "front"            :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"             :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"             :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_step_1"     :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_step_2"     :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_step_1"      :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_step_2"      :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_step_1"      :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_step_2"      :  FR_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 8 )
};

var FR_1_0_GIRL_SURF_SPRITE_PRT = 0x083A02D0;
var FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET = 0x0835DB68;
var FR_1_0_GIRL_SURF_SPRITE_DATA = 
{
    "front"   :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"    :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"    :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_1" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_2" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_1"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_2"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_1"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_2"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_3" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "back_3"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "side_3"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 11)
};

var FR_1_0_GIRL_BAG_SPRITE_PRT = 0x083A0378;
var FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET = 0x0835F2A8;
var FR_1_0_GIRL_BAG_SPRITE_DATA = 
{
    "bag_1"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "bag_2"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "bag_3"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "bag_4"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "bag_5"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "bag_6"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "bag_7"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "bag_8"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "bag_9"  :  FR_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 8 )
};

/* FIRE RED 1.0 BOY */

// This is the same as the girls
// f051f5211f4b5b3a0f210869e73c8e62ad14bd7fd66abf25f81c7f2f771e0000
var FR_1_0_BOY_PALLET_DATA_BASE_OFFSET = 0x0835b968;
var FR_1_0_BOY_PALLET_DATA_LENGTH = 32;

var FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET = 0x083A00A0;
var FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET = 0x0835BB68;
var FR_1_0_BOY_WALK_SPRITE_DATA = 
{
    "front"            :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"             :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"             :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_step_1"     :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_step_2"     :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_step_1"      :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_step_2"      :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_step_1"      :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_step_2"      :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_run"        :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "front_run_step_1" :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "front_run_step_2" :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 11),
    "back_run"         :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 12),
    "back_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "back_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "side_run"         :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 15),
    "side_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 16),
    "side_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "look_left"        :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 18),
    "look_right"       :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 19)
};
var FR_1_0_BOY_WALK_SPRITE_PTRS = 
{
    "front"            :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_run"        :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "front_run_step_1" :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "front_run_step_2" :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11),
    "back_run"         :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "back_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "side_run"         :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17),
    "look_left"        :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 18),
    "look_right"       :  FR_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 19)
};

var FR_1_0_BOY_BIKE_SPRITE_PRT = 0x083A0140;
var FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET = 0x08361FA8;
var FR_1_0_BOY_BIKE_SPRITE_DATA = 
{
    "front"            :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"             :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"             :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_step_1"     :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_step_2"     :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_step_1"      :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_step_2"      :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_step_1"      :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_step_2"      :  FR_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 8 )
};

var FR_1_0_BOY_SURF_SPRITE_PRT = 0x083A0270;
var FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET = 0x0835C468;
var FR_1_0_BOY_SURF_SPRITE_DATA = 
{
    "front"   :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"    :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"    :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_1" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_2" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_1"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_2"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_1"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_2"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_3" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "back_3"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "side_3"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 11)
};

var FR_1_0_BOY_BAG_SPRITE_PRT = 0x083A0330;
var FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET = 0x0835E9A8;
var FR_1_0_BOY_BAG_SPRITE_DATA = 
{
    "bag_1"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "bag_2"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "bag_3"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "bag_4"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "bag_5"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "bag_6"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "bag_7"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "bag_8"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "bag_9"  :  FR_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (256 * 8 )
};


/* FIRE_RED 1.1 */
// Sprite data in fire red 1.1 is shifted 112 bytes later in the rom
var FR_1_1_SPRITE_OFFSET_SHIFT = 112;
var FR_1_1_GIRL_PALLET_DATA_BASE_OFFSET = 0x0835B9D8;

/* CRYSTAL */
var C_1_0_GIRL_PALLET_DATA_BASE_OFFSET = 0x0835E988;
var C_1_0_GIRL_PALLET_DATA_LENGTH = 32;
var C_1_0_BOY_PALLET_DATA_BASE_OFFSET = 0x8245d30;
var C_1_0_BOY_PALLET_DATA_LENGTH = 32;

/* EMERALD */
/* GIRL */
// 0e537f679b4a193a6f298c39e520b429c91c396f4d23a8129f2d1821ff7f0000
var E_1_0_GIRL_PALLET_DATA_BASE_OFFSET = 0x084a4278;
var E_1_0_GIRL_PALLET_DATA_LENGTH = 32;

var E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET = 0x08507144;
var E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET = 0x08A3078;
var E_1_0_GIRL_WALK_SPRITE_DATA = 
{
    "front"            :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"             :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"             :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_step_1"     :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_step_2"     :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_step_1"      :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_step_2"      :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_step_1"      :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_step_2"      :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_run"        :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "front_run_step_1" :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "front_run_step_2" :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 11),
    "back_run"         :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 12),
    "back_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "back_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "side_run"         :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 15),
    "side_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 16),
    "side_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "look_left"        :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ), // Alternate mappings to pad to the same size as FR
    "look_right"       :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 )
};
var E_1_0_GIRL_WALK_SPRITE_PTRS = 
{
    "front"            :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_run"        :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "front_run_step_1" :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "front_run_step_2" :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11),
    "back_run"         :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "back_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "side_run"         :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17)
};

var E_1_0_GIRL_BIKE_SPRITE_PRT = 0x084A56B8;
var E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET = 0x085071D4;
var E_1_0_GIRL_BIKE_SPRITE_DATA = 
{
    "front"            :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"             :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"             :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_step_1"     :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_step_2"     :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_step_1"      :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_step_2"      :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_step_1"      :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_step_2"      :  E_1_0_GIRL_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 8 )
};

var E_1_0_GIRL_SURF_SPRITE_PRT = 0x084A9EB8;
var E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET = 0x085072F4;
var E_1_0_GIRL_SURF_SPRITE_DATA = 
{
    "front"   :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"    :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"    :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_1" :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_2" :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_1"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_2"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_1"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_2"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 8 ),
    "front_3" :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 9 ),
    "back_3"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 10),
    "side_3"  :  E_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 11)
};

var E_1_0_GIRL_BAG_SPRITE_PRT = 0x084AAAB8;
var E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET = 0x0850739C;
var E_1_0_GIRL_BAG_SPRITE_DATA = 
{
    "bag_1"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "bag_2"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "bag_3"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "bag_4"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "bag_5"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "bag_6"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),  // Alternate mappings to pad to the same size as FR
    "bag_7"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "bag_8"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "bag_9"  :  E_1_0_GIRL_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 4 )
};

/* BOY */
// 0e535f5b1f4b5b3a0f21273de530a328821c9b772e3b492a9f2d1821ff7f0000
var E_1_0_BOY_PALLET_DATA_BASE_OFFSET = 0x084987F8;
var E_1_0_BOY_PALLET_DATA_LENGTH = 32;

var E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET = 0x08505A8C;
var E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET = 0x084975F8;
var E_1_0_BOY_WALK_SPRITE_DATA = 
{
    "front"            :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 0 ),
    "back"             :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 1 ),
    "side"             :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 2 ),
    "front_step_1"     :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ),
    "front_step_2"     :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 ),
    "back_step_1"      :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5 ),
    "back_step_2"      :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6 ),
    "side_step_1"      :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7 ),
    "side_step_2"      :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8 ),
    "front_run"        :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 9 ),
    "front_run_step_1" :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "front_run_step_2" :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 11),
    "back_run"         :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 12),
    "back_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "back_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "side_run"         :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 15),
    "side_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 16),
    "side_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "look_left"        :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 3 ), // Alternate mappings to pad to the same size as FR
    "look_right"       :  E_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 4 )
};
var E_1_0_BOY_WALK_SPRITE_PTRS = 
{
    "front"            :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_run"        :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "front_run_step_1" :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "front_run_step_2" :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11),
    "back_run"         :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "back_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "side_run"         :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17)
};


var E_1_0_BOY_BIKE_SPRITE_PRT = 0x0849C258;
var E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET = 0x08505B1C;
var E_1_0_BOY_BIKE_SPRITE_DATA = 
{
    "front"            :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"             :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"             :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_step_1"     :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_step_2"     :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_step_1"      :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_step_2"      :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_step_1"      :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_step_2"      :  E_1_0_BOY_BIKE_SPRITE_DATA_BASE_OFFSET + (512 * 8 )
};

var E_1_0_BOY_SURF_SPRITE_PRT = 0x0849A658;
var E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET = 0x08505C3C;
var E_1_0_BOY_SURF_SPRITE_DATA = 
{
    "front"   :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "back"    :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "side"    :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "front_1" :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "front_2" :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "back_1"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 5 ),
    "back_2"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 6 ),
    "side_1"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 7 ),
    "side_2"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 8 ),
    "front_3" :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 9 ),
    "back_3"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 10),
    "side_3"  :  E_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (512 * 11)
};

var E_1_0_BOY_BAG_SPRITE_PRT = 0x08499C58;
var E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET = 0x08505CE4;
var E_1_0_BOY_BAG_SPRITE_DATA = 
{
    "bag_1"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),
    "bag_2"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "bag_3"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "bag_4"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 3 ),
    "bag_5"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 4 ),
    "bag_6"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 0 ),  // Alternate mappings to pad to the same size as FR
    "bag_7"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 1 ),
    "bag_8"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 2 ),
    "bag_9"  :  E_1_0_BOY_BAG_SPRITE_DATA_BASE_OFFSET + (512 * 4 )
};

/**
 * RGB -> GBA
 * gba_color = (((red >> 3) & 31) | (((green >> 3) & 31) << 5) | (((blue >> 3) & 31) << 10))
 * 
 * GBA -> RGB
 * red = (gba_color & 31) << 3
 * green = ((gba_color >> 5) & 31) << 3
 * blue = ((gba_color >> 10) & 31) << 3
 */