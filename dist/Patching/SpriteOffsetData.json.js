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

var FR_1_0_GIRL_PALLET_DATA_BASE_OFFSET = 0x0835b968;
var FR_1_0_GIRL_PALLET_DATA_LENGTH = 32;

var FR_SURF_SPRITE_SIZE = 0x100;

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

    // TODO: something weird seems to be going on with the run sprites so partially substituated them
    "front_run_step_1" :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "front_run_step_2" :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "back_run"         :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "back_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5),
    "back_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6),
    "side_run"         :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 18),
    "side_run_step_1"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7),
    "side_run_step_2"  :  FR_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8),
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

// We need to create a fake acrobike spriteset from fire red bike sprites
var FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET = 0x08363DA8;
var FR_1_0_GIRL_ACRO_SPRITE_DATA = 
{
    "front"            :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "back"             :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "side"             :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "front_step_1"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "front_step_2"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "back_step_1"      :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "back_step_2"      :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "side_step_1"      :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "side_step_2"      :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    
    // These seem to be broken not sure why
    // "front_trick_1"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    // "front_trick_2"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    // "front_trick_3"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    // "front_trick_4"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    // "back_trick_1"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    // "back_trick_2"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    // "back_trick_3"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    // "back_trick_4"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    // "side_trick_1"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    // "side_trick_2"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    // "side_trick_3"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    // "side_trick_4"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    // "front_wheel_1"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    // "front_wheel_2"    :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    // "back_wheel_1"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    // "back_wheel_2"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    // "side_wheel_1"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    // "side_wheel_2"     :  FR_1_0_GIRL_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  )
};

var FR_1_0_GIRL_SURF_SPRITE_PRT = 0x083A02D0;
var FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET = 0x0835DB68;
var FR_1_0_GIRL_SURF_SPRITE_DATA = 
{
    "front"   :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back"    :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side"    :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "front_1" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "front_2" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back_1"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "back_2"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side_1"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "side_2"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "front_3" :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back_3"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side_3"  :  FR_1_0_GIRL_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2)
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

var FR_1_0_GIRL_FISHING_SPRITE_PRT = 0x083A1BA0;
var FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET = 0x083685A8;
var FR_1_0_GIRL_FISHING_SPRITE_DATA = 
{
    "fishing_1"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "fishing_2"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "fishing_3"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "fishing_4"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "fishing_5"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "fishing_6"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "fishing_7"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "fishing_8"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "fishing_9"  :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    "fishing_10" :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 9  ),
    "fishing_11" :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 10 ),
    "fishing_12" :  FR_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 11 )
};


/* FIRE RED 1.0 BOY */

// This is the same as the girls
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
    // TODO: something weird seems to be going on with the run sprites so partially substituated them
    "front_run_step_1" :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "front_run_step_2" :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "back_run"         :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 17),
    "back_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 5),
    "back_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 6),
    "side_run"         :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 18),
    "side_run_step_1"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 7),
    "side_run_step_2"  :  FR_1_0_BOY_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 8),
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

// We need to create a fake acrobike spriteset from fire red bike sprites
var FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET = 0x08361FA8;
var FR_1_0_BOY_ACRO_SPRITE_DATA = 
{
    "front"            :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "back"             :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "side"             :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "front_step_1"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "front_step_2"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "back_step_1"      :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "back_step_2"      :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "side_step_1"      :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "side_step_2"      :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    
    // These seem to be broken not sure why
    // "front_trick_1"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    // "front_trick_2"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    // "front_trick_3"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    // "front_trick_4"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    // "back_trick_1"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    // "back_trick_2"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    // "back_trick_3"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    // "back_trick_4"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    // "side_trick_1"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    // "side_trick_2"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    // "side_trick_3"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    // "side_trick_4"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    // "front_wheel_1"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    // "front_wheel_2"    :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    // "back_wheel_1"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    // "back_wheel_2"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    // "side_wheel_1"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    // "side_wheel_2"     :  FR_1_0_BOY_ACRO_SPRITE_DATA_BASE_OFFSET + (512 * 8  )
};

var FR_1_0_BOY_SURF_SPRITE_PRT = 0x083A0270;
var FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET = 0x0835C468;
var FR_1_0_BOY_SURF_SPRITE_DATA = 
{
    "front"   :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back"    :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side"    :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "front_1" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "front_2" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back_1"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "back_2"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side_1"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "side_2"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2),
    "front_3" :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 0),
    "back_3"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 1),
    "side_3"  :  FR_1_0_BOY_SURF_SPRITE_DATA_BASE_OFFSET + (256 * 2)
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

var FR_1_0_BOY_FISHING_SPRITE_PRT = 0x083A1B40;
var FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET = 0x08366DA8;
var FR_1_0_BOY_FISHING_SPRITE_DATA = 
{
    "fishing_1"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "fishing_2"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "fishing_3"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "fishing_4"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "fishing_5"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "fishing_6"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "fishing_7"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "fishing_8"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "fishing_9"  :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    "fishing_10" :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 9  ),
    "fishing_11" :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 10 ),
    "fishing_12" :  FR_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 11 )
};

/* FIRE_RED 1.1 */
// Sprite data in fire red 1.1 is shifted 112 bytes later in the rom
var FR_1_1_SPRITE_OFFSET_SHIFT = 112;
var FR_1_1_GIRL_PALLET_DATA_BASE_OFFSET = 0x0835B9D8;

/* CRYSTAL */
var C_1_0_GIRL_PALLET_DATA_BASE_OFFSET = 0x08F7E580;
var C_1_0_GIRL_PALLET_DATA_LENGTH = 32;
var C_1_0_BOY_PALLET_DATA_BASE_OFFSET = 0x08F7DD00;
var C_1_0_BOY_PALLET_DATA_LENGTH = 32;

/* EMERALD */
/* GIRL */
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
    "back_run"         :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 10),
    "side_run"         :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 11),
    "front_run_step_1" :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 12),
    "front_run_step_2" :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 13),
    "back_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 14),
    "back_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_DATA_BASE_OFFSET + (256 * 15),
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
    "back_run"         :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10), 
    "side_run"         :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11), 
    "front_run_step_1" :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "front_run_step_2" :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "back_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  E_1_0_GIRL_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17),
};

var E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET = 0x085071D4;
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
var E_1_0_GIRL_BIKE_SPRITE_PTRS = 
{
    "front"            :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  E_1_0_GIRL_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 8 )
};

var E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET = 0x0850721C;
var E_1_0_GIRL_ACRO_SPRITE_PTRS = 
{
    "front"            :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 0  ),
    "back"             :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 1  ),
    "side"             :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 2  ),
    "front_step_1"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 3  ),
    "front_step_2"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 4  ),
    "back_step_1"      :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 5  ),
    "back_step_2"      :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 6  ),
    "side_step_1"      :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 7  ),
    "side_step_2"      :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 8  ),
    // "front_trick_1"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 9  ),
    // "front_trick_2"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 10 ),
    // "front_trick_3"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 11 ),
    // "front_trick_4"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 12 ),
    // "back_trick_1"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 13 ),
    // "back_trick_2"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 14 ),
    // "back_trick_3"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 15 ),
    // "back_trick_4"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 16 ),
    // "side_trick_1"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 17 ),
    // "side_trick_2"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 18 ),
    // "side_trick_3"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 19 ),
    // "side_trick_4"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 20 ),
    // "front_wheel_1"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 21 ),
    // "front_wheel_2"    :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 22 ),
    // "back_wheel_1"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 23 ),
    // "back_wheel_2"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 24 ),
    // "side_wheel_1"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 25 ),
    // "side_wheel_2"     :  E_1_0_GIRL_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 26 )
};

var E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET = 0x085072F4;
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
var E_1_0_GIRL_SURF_SPRITE_PTRS = 
{
    "front"   :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"    :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"    :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_1" :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_2" :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_1"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_2"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_1"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_2"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_3" :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "back_3"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "side_3"  :  E_1_0_GIRL_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 11)
};

var E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET = 0x0850739C;
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
var E_1_0_GIRL_BAG_SPRITE_PTRS = 
{
    "bag_1"  :  E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "bag_2"  :  E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "bag_3"  :  E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "bag_4"  :  E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "bag_5"  :  E_1_0_GIRL_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 4 )
};

var E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET = 0x08507AAC;
var E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET = 0x08507AAC;
var E_1_0_GIRL_FISHING_SPRITE_DATA = 
{
    "fishing_1"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "fishing_2"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "fishing_3"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "fishing_4"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "fishing_5"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "fishing_6"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "fishing_7"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "fishing_8"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "fishing_9"  :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    "fishing_10" :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 9  ),
    "fishing_11" :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 10 ),
    "fishing_12" :  E_1_0_GIRL_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 11 )
};
var E_1_0_GIRL_FISHING_SPRITE_PTRS = 
{
    "fishing_1"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 0  ),
    "fishing_2"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 1  ),
    "fishing_3"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 2  ),
    "fishing_4"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 3  ),
    "fishing_5"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 4  ),
    "fishing_6"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 5  ),
    "fishing_7"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 6  ),
    "fishing_8"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 7  ),
    "fishing_9"  :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 8  ),
    "fishing_10" :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 9  ),
    "fishing_11" :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 10 ),
    "fishing_12" :  E_1_0_GIRL_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 11 )
};

/* BOY */
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
    "back_run"         :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 10), 
    "side_run"         :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 11), 
    "front_run_step_1" :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 12),
    "front_run_step_2" :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 13),
    "back_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 14),
    "back_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 15),
    "side_run_step_1"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 16),
    "side_run_step_2"  :  E_1_0_BOY_WALK_SPRITE_PRT_BASE_OFFSET + (8 * 17),
};


var E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET = 0x08505B1C;
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
var E_1_0_BOY_BIKE_SPRITE_PTRS = 
{
    "front"            :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"             :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"             :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_step_1"     :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_step_2"     :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_step_1"      :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_step_2"      :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_step_1"      :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_step_2"      :  E_1_0_BOY_BIKE_SPRITE_PRT_BASE_OFFSET + (8 * 8 )
};

var E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET = 0x08505B64;
var E_1_0_BOY_ACRO_SPRITE_PTRS = 
{
    "front"            :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 0  ),
    "back"             :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 1  ),
    "side"             :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 2  ),
    "front_step_1"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 3  ),
    "front_step_2"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 4  ),
    "back_step_1"      :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 5  ),
    "back_step_2"      :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 6  ),
    "side_step_1"      :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 7  ),
    "side_step_2"      :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 8  ),
    // "front_trick_1"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 9  ),
    // "front_trick_2"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 10 ),
    // "front_trick_3"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 11 ),
    // "front_trick_4"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 12 ),
    // "back_trick_1"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 13 ),
    // "back_trick_2"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 14 ),
    // "back_trick_3"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 15 ),
    // "back_trick_4"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 16 ),
    // "side_trick_1"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 17 ),
    // "side_trick_2"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 18 ),
    // "side_trick_3"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 19 ),
    // "side_trick_4"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 20 ),
    // "front_wheel_1"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 21 ),
    // "front_wheel_2"    :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 22 ),
    // "back_wheel_1"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 23 ),
    // "back_wheel_2"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 24 ),
    // "side_wheel_1"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 25 ),
    // "side_wheel_2"     :  E_1_0_BOY_ACRO_SPRITE_PRT_BASE_OFFSET + (8 * 26 )
};

var E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET  = 0x08505C3C;
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
var E_1_0_BOY_SURF_SPRITE_PTRS = 
{
    "front"   :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "back"    :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "side"    :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "front_1" :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "front_2" :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 4 ),
    "back_1"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 5 ),
    "back_2"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 6 ),
    "side_1"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 7 ),
    "side_2"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 8 ),
    "front_3" :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 9 ),
    "back_3"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 10),
    "side_3"  :  E_1_0_BOY_SURF_SPRITE_PRT_BASE_OFFSET + (8 * 11)
};

var E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET = 0x08505CE4;
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
var E_1_0_BOY_BAG_SPRITE_PTRS = 
{
    "bag_1"  :  E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 0 ),
    "bag_2"  :  E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 1 ),
    "bag_3"  :  E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 2 ),
    "bag_4"  :  E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 3 ),
    "bag_5"  :  E_1_0_BOY_BAG_SPRITE_PRT_BASE_OFFSET + (8 * 4 )
};

var E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET = 0x08507A4C;
var E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET = 0x08507A4C;
var E_1_0_BOY_FISHING_SPRITE_DATA = 
{
    "fishing_1"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 0  ),
    "fishing_2"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 1  ),
    "fishing_3"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 2  ),
    "fishing_4"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 3  ),
    "fishing_5"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 4  ),
    "fishing_6"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 5  ),
    "fishing_7"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 6  ),
    "fishing_8"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 7  ),
    "fishing_9"  :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 8  ),
    "fishing_10" :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 9  ),
    "fishing_11" :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 10 ),
    "fishing_12" :  E_1_0_BOY_FISHING_SPRITE_DATA_BASE_OFFSET + (512 * 11 )
};
var E_1_0_BOY_FISHING_SPRITE_PTRS = 
{
    "fishing_1"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 0  ),
    "fishing_2"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 1  ),
    "fishing_3"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 2  ),
    "fishing_4"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 3  ),
    "fishing_5"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 4  ),
    "fishing_6"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 5  ),
    "fishing_7"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 6  ),
    "fishing_8"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 7  ),
    "fishing_9"  :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 8  ),
    "fishing_10" :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 9  ),
    "fishing_11" :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 10 ),
    "fishing_12" :  E_1_0_BOY_FISHING_SPRITE_PRT_BASE_OFFSET + (8 * 11 )
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

/* BACKSPRITES */

// FR
var FR_BACKSPRITE_DATA = 
{
    "boy_frame0"  : 0x08E69EBC,
    "boy_frame1"  : 0x08E6A6BC,
    "boy_frame2"  : 0x08E6AEBC,
    "boy_frame3"  : 0x08E6B6BC,
    "boy_frame4"  : 0x08E6BEBC,
    "girl_frame0" : 0x08E6C6BC,
    "girl_frame1" : 0x08E6CEBC,
    "girl_frame2" : 0x08E6D6BC,
    "girl_frame3" : 0x08E6DEBC,
    "girl_frame4" : 0x08E6E6BC,
}
var FR_BACKSPRITE_DATA_LENGTH = 0x800;

var FR_BOY_BACKSPRITE_PALLET_OFFSET = 0x08E76EBC; 
var FR_GIRL_BACKSPRITE_PALLET_OFFSET = 0x08E76EE4;

// E
var E_BACKSPRITE_PTRS = 
{
    "boy_frame1"  : 0x082FF428, //0x08D66480
    "boy_frame2"  : 0x082FF430, //0x08D66C80
    "boy_frame3"  : 0x082FF438, //0x08D67480
    "boy_frame0"  : 0x082FF440, //0x08D67C80

    "girl_frame1" : 0x082FF448, //0x08D68480
    "girl_frame2" : 0x082FF450, //0x08D68C80
    "girl_frame3" : 0x082FF458, //0x08D69480
    "girl_frame0" : 0x082FF460, //0x08D69C80
}

var E_BOY_BACKSPRITE_PALLET_OFFSET = 0x08D61A30;
var E_GIRL_BACKSPRITE_PALLET_OFFSET = 0x08D61D58;

// C
var C_BACKSPRITE_PTRS = 
{
    "boy_frame1"  : 0x08F50000, //0x08D66480
    "boy_frame2"  : 0x08F50008, //0x08D66C80
    "boy_frame3"  : 0x08F50010, //0x08D67480
    "boy_frame0"  : 0x08F50018, //0x08D67C80

    "girl_frame1" : 0x08F50028, //0x08D68480
    "girl_frame2" : 0x08F50030, //0x08D68C80
    "girl_frame3" : 0x08F50038, //0x08D69480
    "girl_frame0" : 0x08F50040, //0x08D69C80
}

var C_GIRL_BACKSPRITE_PALLET_OFFSET = 0x08E511C4;
var C_BOY_BACKSPRITE_PALLET_OFFSET = 0x08E5119C;

var BACKSPRITES_PALLET_LENGTH = 64;

// Reflection pallets not fixed


// GOTO 1939 in unLZ
// Trainer sprites not fixed
var EMERALD_BRANDON_TRAINER_SPRITE_PTR = 0x305654 + (8 * 71);
var EMERALD_RED_TRAINER_SPRITE_PTR = 0x305654 + (8 * 89);
var EMERALD_MAY_TRAINER_SPRITE_PTR = 0x305654 + (8 * 72);
var EMERALD_LEAF_TRAINER_SPRITE_PTR = 0x305654 + (8 * 90);

var EMERALD_BRANDON_TRAINER_PALLET_PTR = 0x305b74;
var EMERALD_MAY_TRAINER_PALLET_PTR = 0x305b7c;

var EMERALD_RED_TRAINER_PALLET_PTR = 0x305c04;
var EMERALD_LEAF_TRAINER_PALLET_PTR = 0x305c0c;

// Fire Red hero offset unlz 3084 (e6718)
// Emerald brandon offset unlz 1939 (d61a58)

// may have to check with this
//https://www.pokecommunity.com/showthread.php?t=456994