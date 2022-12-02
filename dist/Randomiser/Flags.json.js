// FLAGS 
/*
### FIRE_RED ###

    NAME           | UNLOCKS               | LOCATION
    ---------------|-----------------------|-----------
    
--- ITEMS
    
    OAK_PARCEL     | Viridian Woods        | Viridian Mart      
    SS_ANNE_TICKET | SS ANNE Enterance     | Bill's House 
    POKE_FLUTE     | Snorelax              | Pokemon Tower Top
    BIKE           |                       | Cerulean Bike Store
    BIKE_VOUCHER   |                       | Vermillion Fan Club
    TEA            |                       | Celadon Mansion
    SILPH_SCOPE    |                       | Rocket Hideout
    LIFT_KEY       |                       | Rocket Hideout

--- BADGES

    BOULDER_BADGE  | Kanto Flash           | Pewter Gym
    CASCADE_BADGE  | Kanto Cut             | Cerulean Gym
    THUNER_BADGE   | Kanto Fly             | Vermilion Gym
    RAINBOW_BADGE  | Kanto Strength        | Celadon Gym
    SOUL_BADGE     | Kanto Surf            | Fuchsia Gym
    MARSH_BADGE    | Kanto Rock Smash      | Saffron Gym
    VOLCANO_BADGE  | Kanto Waterfall       | Cinnabar Gym
    EARTH_BADGE    |                       | Virdian Gym

--- HMS

    CUT            |                       | SS Anne Captin
    FLY            |                       | ROUTE 16 HOUSE
    SURF           |                       | Safari Zone
    STRENGTH       |                       | Safari Zone 
    ROCK SMASH     |                       | Island 1
    WATERFALL      |                       | Island 4

--- STORY

    ROCKET_SILPHCO | Safffon Doors         | Silph Co 

### CRYSTAL ###

--- ITEMS
    
    SQUIRT_BOTTLE | Sudowoodo                              | Goldenrod Flower Shop
    BIKE          |                                        | Goldenrod Bike Store
    BASEMENT_KEY  |                                        | Goldenrod Radio Tower
    KEY_CARD      | Radio Tower F3                         | Golderod Warehouse Basment

--- BADGES

    ZEPHYR_BADGE  | Jhoto Flash/Route 32                   | Violet Gym
    INSECT_BADGE  | Jhoto Cut                              | Azalea GYM
    PLAIN_BADGE   | Jhoto Strength/Squirt Bottle 1         | Goldenrod Gym
    FOG_BADGE     | Jhoto Surf                             | Ecruteak Gym
    STORM_BADGE   | Jhoto Fly                              | Cianwood Gym
    MINERAL_BADGE |                                        | Olivine Gym  
    GLACIER_BADGE | Jhoto Waterfall                        | Mahogany Gym
    
    RISING_BADGE  |                                        | Dragons Den
    CLAIR         | Jhoto Whirlpool                        | Blackthorn Gym       

--- HMS

    CUT           |                                        | ILEX FOREST
    SURF          |                                        | Kimono Girls house
    WHIRLPOOL     |                                        | Rocket Hideout Generator Room
    STRENGTH      |                                        | Olivine Bar
    FLY           |                                        | Cianwood (after gym)
    WATERFALL     |                                        | Ice Path
    ROCK_SMASH    |                                        | After Sudowoodo

--- STORY 

    TALK_TO_KURT     | Slowpoke Well          | Kurts House
    SLOWPOKE_WELL    | Azelea Gym             | Slowpoke Well
    FLOWER_SISTER    | Squirt Bottle 2        | Route 36 
    BURNED_TOWER     |                        |
    LAKE_OF_RAGE     |                        |
    ROCKET_HIDEOUT   |                        |
    PASSWORD         |                        |
    ROCKET_EXCEUTIVE |                        |
    LIGHTHOUSE_TOP   |                        |
    MEDACINE         |                        | Cianwood
    RADIO_TOWER      | Route 44               | Radio Tower Top


### EMERALD ###

--- ITEMS

    STEVEN_LETTER    |                        | President Stones room
    DEVON_GOODS      |                        | Steven Cave
    BIKE             |                        | Mauville Bike Store
    GO_GOGGLES       |                        | Lavaridge After Flanary
    DEVON_SCOPE      |                        | Right of fortree
    MAGMA_EMBLEM     |                        | Mt Pyer top  

--- BADGES

    STONE_BADGE      | Hoenn Cut              |
    KNUCKLE_BADGE    | Hoenn Flash            |
    DYNAMO_BADGE     | Hoenn Rock Smash       |
    HEAT_BADGE       | Hoenn Strength         |
    BALANCE_BADGE    | Hoenn Surf             |
    FEATHER_BADGE    | Hoenn Fly              |
    MIND_BADGE       | Hoenn Dive             |
    RAIN_BADGE       | Hoenn Waterfall        |

--- HMS

    CUT              |                        | Cutters House Rustborough
    ROCK_SMASH       |                        | Mauville House
    STRENGTH         |                        | Rusturf Tunnel (after rocksmash)
    SURF             |                        | Petalburg Gym
    FLY              |                        | Bellow Fortree
    DIVE             |                        | Steven House after space center
    WATERFALL        |                        | Scootopolis (after raquaza)

--- STORY

    POKEDEX             |                                    | Littleroot Lab
    RIVAL_1             |                                    | Oldale
    CATCH_TUTTORIAL     |                                    | Petalburg Gym 
    STOLEN_GOODS_1      |                                    | Rustborough (After gym)
    PEKKO               | Rest House, Dewford, devon Corp f1 | Rusturf Tunnle Left(After stolen goods)
    DELIVER_GOODS_1     | Slateport Museum                   | Slateport Shipyard
    DELIVER_GOODS_2     | Above Slateport                    | Slateport Museum Top 
    METEOR_FALLS_MAGMA  |                                    |
    WEATHER_INSTITUTE   |                                    |
    MAGMA_HIDEOUT       |                                    |
    SLATEPORT_SUB       |                                    |
    AQUA_HIDEOUT        |                                    |
    SPACE_CENTER        |                                    | 
    SEAFLOOR_CAVERN     |                                    |
    SCOOTOPOLIS_BATTLE  |                                    |
    CAVE_OF_ORIGIN      | Skypillar                          |
    RAQUAZA_1           |                                    |

*/
/*
    Different combinations of flags are listed that would a flag possible
    If ALL values in ANY of the arrays are present the flag is set true
    
    Warp data contains a list of flags, if ANY of those flags are true then the connection is considered possible
*/

var GAME_FLAGS = {
    "OAK_PARCEL" : [
        ["FR,5,3,0"]
    ],

    "SS_ANNE_TICKET" : [
        ["FR,30,0,1"]
    ],

    "POKE_FLUTE" : [
        ["FR,1,94,0"]
    ],

    "BIKE" : [
        // FR
        // Bike Shop, Fan Club
        ["FR,7,6,1", "FR,9,3,1"],
        // C
        ["C,11,4,0"],
        // E
        ["10,1,0"]
    ],

    "TEA" : [
        ["FR,10,7,1"],
        ["FR,10,7,4"]
    ],

    "LIFT_KEY" : [
        ["FR,1,45,0"]
    ],

    "SILPH_SCOPE" : [
        ["FR,1,45,0", "FR,1,42,0"],
        ["FR,1,45,0", "FR,1,43,0"],
    ],

}