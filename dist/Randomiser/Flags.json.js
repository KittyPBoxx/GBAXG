/*
    Different combinations of flags are listed that would a flag possible
    If ALL values in ANY of the arrays are present the flag is set true
    
    Warp data contains a single flag, that flag is true then the connection is considered possible. In some cases it may be necasary to fairly specific flags
    these may require many composite flags. Or it many composite flags may trigger that specific flag.
    
    NB: This list is not comprehensive. If a progression flag is not in the list that basically means that the randomiser will never lock progression behind that connection
    i.e if I haven't told it a connection becomes possible after a hm/item e.t.c it will assume it never become possible
    This ensures the game should always be completeable. As more flags are added more complex maps randomisations can be generated.  
*/

var COMPOSITE_FLAGS = {

    // ITEMS

    "OAK_PARCEL"       : { "flag":"OAK_PARCEL"      , "condition" : ["L_VIRIDIAN_MART"]                                                                                              },
    "SS_ANNE_TICKET"   : { "flag":"SS_ANNE_TICKET"  , "condition" : ["L_BILL_HOUSE"]                                                                                                 },
    "POKE_FLUTE"       : { "flag":"POKE_FLUTE"      , "condition" : ["L_POKE_TOWER_TOP"]                                                                                             },
    "BIKE_1"           : { "flag":"BIKE"            , "condition" : ["L_CERULEAN_BIKE_SHOP", "L_VERMILLION_FAN_CLUB"]                                                                },
    "BIKE_2"           : { "flag":"BIKE"            , "condition" : ["L_GOLDENROD_BIKE_SHOP"]                                                                                        },
    "BIKE_3"           : { "flag":"BIKE"            , "condition" : ["L_MAUVILLE_BIKE_SHOP"]                                                                                         },
    "TEA"              : { "flag":"TEA"             , "condition" : ["L_CELADON_COMPLEX_F1"]                                                                                         },
    "CINNABAR_GYM_KEY" : { "flag":"CINNABAR_GYM_KEY", "condition" : ["L_POKEMON_MANSION_BASEMENT"]                                                                                   },
    "LIFT_KEY"         : { "flag":"LIFT_KEY"        , "condition" : ["L_CELADON_ROCKET_HIDEOUT_KEY_ROOM"]                                                                            },
    "SILPH_SCOPE_1"    : { "flag":"SILPH_SCOPE"     , "condition" : ["L_CELADON_ROCKET_HIDEOUT_KEY_ROOM", "L_CELADON_ROCKET_HIDEOUT_F1"]                                             },
    "SILPH_SCOPE_2"    : { "flag":"SILPH_SCOPE"     , "condition" : ["L_CELADON_ROCKET_HIDEOUT_KEY_ROOM", "L_CELADON_ROCKET_HIDEOUT_F2"]                                             },
    "SQUIRT_BOTTLE_1"  : { "flag":"SQUIRT_BOTTLE"   , "condition" : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ROUTE_36", "L_GOLDENROD_FLOWERSHOP"]       },
    "SQUIRT_BOTTLE_2"  : { "flag":"SQUIRT_BOTTLE"   , "condition" : ["L_ROUTE_104_FLOWER_SHOP"]                                                                                      },
    "GO_GOGGLES"       : { "flag":"GO_GOGGLES"      , "condition" : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_LAVARIDGE_TOWN"] },
    "DEVON_SCOPE"      : { "flag":"DEVON_SCOPE"     , "condition" : ["L_DEVEN_CORP_PRESIDENT_OFFICE"]                                                                                },
        
    // HMS

    "KANTO_CUT_1"        : { "flag": "KANTO_CUT"        , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_SS_ANNE_CAPTAIN"] },
    "KANTO_CUT_2"        : { "flag": "KANTO_CUT"        , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_ILEX_FOREST"]     },
    "KANTO_CUT_3"        : { "flag": "KANTO_CUT"        , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_CUTTERS_HOUSE"]   },
        
    "KANTO_STRENGTH_1"   : { "flag": "KANTO_STRENGTH"   , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_FUCHSIA_SAFARI_ZONE", "L_SAFARI_WARDEN_HOUSE", "KANTO_CUT"]},
    "KANTO_STRENGTH_2"   : { "flag": "KANTO_STRENGTH"   , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_OLIVINE_BAR", "KANTO_CUT"]                        },
    "KANTO_STRENGTH_3"   : { "flag": "KANTO_STRENGTH"   , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_RUSTURF_TUNNEL", "HOENN_ROCK_SMASH", "KANTO_CUT"] },
    
    "KANTO_SURF_1"       : { "flag": "KANTO_SURF"       , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_FUCHSIA_CITY_GYM", "L_FUCHSIA_SAFARI_ZONE", "KANTO_CUT"] },
    "KANTO_SURF_2"       : { "flag": "KANTO_SURF"       , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_FUCHSIA_CITY_GYM", "L_KIMONO_GIRLS", "KANTO_CUT"]        },
    "KANTO_SURF_3"       : { "flag": "KANTO_SURF"       , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_FUCHSIA_CITY_GYM", "HOENN_SURF", "KANTO_CUT"]            },

    "JOHTO_FLASH_1"      : { "flag": "JOHTO_FLASH"      , "condition"  : ["L_VIOLET_CITY_GYM", "L_SPROUT_TOWER_TOP"]      },
    "JOHTO_FLASH_2"      : { "flag": "JOHTO_FLASH"      , "condition"  : ["L_VIOLET_CITY_GYM", "L_FLASH_ROUTE_CONNECTOR"] }, 
    "JOHTO_FLASH_3"      : { "flag": "JOHTO_FLASH"      , "condition"  : ["L_VIOLET_CITY_GYM", "L_GRANITE_CAVE_F1"]       }, 
    
    "JOHTO_CUT_1"        : { "flag": "JOHTO_CUT"        , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_SS_ANNE_CAPTAIN"] },
    "JOHTO_CUT_2"        : { "flag": "JOHTO_CUT"        , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_ILEX_FOREST"]     }, 
    "JOHTO_CUT_3"        : { "flag": "JOHTO_CUT"        , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_CUTTERS_HOUSE"]   }, 

    "JOHTO_ROCK_SMASH_1" : { "flag": "JOHTO_ROCK_SMASH" , "condition"  : ["L_MAUVILLE_CITY_ROCK_SMASH"]                                  }, 
    "JOHTO_ROCK_SMASH_2" : { "flag": "JOHTO_ROCK_SMASH" , "condition"  : ["SQUIRT_BOTTLE", "L_VIOLET_CITY"]                              }, 

    "JOHTO_STRENGTH_1"   : { "flag": "JOHTO_STRENGTH"   , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_FUCHSIA_SAFARI_ZONE", "L_SAFARI_WARDEN_HOUSE"] },
    "JOHTO_STRENGTH_2"   : { "flag": "JOHTO_STRENGTH"   , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_OLIVINE_BAR"]         },
    "JOHTO_STRENGTH_3"   : { "flag": "JOHTO_STRENGTH"   , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "HOENN_ROCK_SMASH"]      },
    
    "JOHTO_SURF_1"       : { "flag": "JOHTO_SURF"       , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_BURNED_TOWER", "L_KIMONO_GIRLS"]        },
    "JOHTO_SURF_2"       : { "flag": "JOHTO_SURF"       , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_BURNED_TOWER", "L_FUCHSIA_SAFARI_ZONE"] },
    "JOHTO_SURF_3"       : { "flag": "JOHTO_SURF"       , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_BURNED_TOWER", "HOENN_SURF"]            },

    "JOHTO_SURF_AND_STRENGTH" : { "flag": "JOHTO_SURF_AND_STRENGTH"     , "condition"  : ["JOHTO_SURF", "JOHTO_STRENGTH"]        }, 

    "JOHTO_WATERFALL_1" : { "flag": "JOHTO_WATERFALL" , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_CIANWOOD_CITY_GYM", "L_SECRET_MEDICINE", "L_LIGHTHOUSE_TOP", "L_OLIVINE_CITY_GYM", "L_MAHOGANY_TOWN_GYM", "L_ICE_PATH_F1", "L_BLACKTHORN_CITY_GYM", "L_DRAGONS_DEN_TEST", "JOHTO_STRENGTH"] },
    "JOHTO_WATERFALL_2" : { "flag": "JOHTO_WATERFALL" , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_CIANWOOD_CITY_GYM", "L_SECRET_MEDICINE", "L_LIGHTHOUSE_TOP", "L_OLIVINE_CITY_GYM", "L_MAHOGANY_TOWN_GYM", "L_OUTSIDE_SOOTOPOLIS_GYM", "L_BLACKTHORN_CITY_GYM", "L_DRAGONS_DEN_TEST", "JOHTO_STRENGTH"] },

    "JOHTO_WHIRLPOOL" : { "flag": "JOHTO_WHIRLPOOL" , "condition"  : ["L_VIOLET_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_GOLDENRON_CITY_GYM", "L_ECRUTEAK_GYM", "L_CIANWOOD_CITY_GYM", "L_SECRET_MEDICINE", "L_LIGHTHOUSE_TOP", "L_OLIVINE_CITY_GYM", "L_MAHOGANY_TOWN_GYM", "WHIRLPOOL_HM"] },

    "HOENN_CUT_1"        : { "flag": "HOENN_CUT"        , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_SS_ANNE_CAPTAIN"]                      },
    "HOENN_CUT_2"        : { "flag": "HOENN_CUT"        , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_AZALEA_TOWN_GYM", "L_ILEX_FOREST"]     }, 
    "HOENN_CUT_3"        : { "flag": "HOENN_CUT"        , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_CUTTERS_HOUSE"]                        }, 

    "HOENN_ROCK_SMASH_1" : { "flag": "HOENN_ROCK_SMASH" , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_MAUVILLE_CITY_ROCK_SMASH"]     },
    "HOENN_ROCK_SMASH_2" : { "flag": "HOENN_ROCK_SMASH" , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "SQUIRT_BOTTLE", "L_VIOLET_CITY"] },

    "HOENN_STRENGTH_1" : { "flag": "HOENN_STRENGTH"     , "condition"  : ["L_RUSTURF_TUNNEL", "HOENN_ROCK_SMASH", "L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM"] },
    "HOENN_STRENGTH_2" : { "flag": "HOENN_STRENGTH"     , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_FUCHSIA_SAFARI_ZONE"] },
    "HOENN_STRENGTH_3" : { "flag": "HOENN_STRENGTH"     , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_OLIVINE_BAR"] },

    "HOENN_SURF"       : { "flag": "HOENN_SURF"         , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM"] },

    // NB: No Dive Connections have been added to the mapping data
    "HOENN_DIVE"       : { "flag": "HOENN_DIVE"         , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM", "L_FORTREE_CITY_GYM", "L_MOSSDEEP_CITY_GYM", "L_MOSSDEEP_STEVEN_HOUSE", "L_SPACE_CENTER_TOP"] },

    "HOENN_WATERFALL_1"  : { "flag": "HOENN_WATERFALL"   , "condition"   : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM", "L_FORTREE_CITY_GYM", "L_MOSSDEEP_CITY_GYM", "L_SOOTOPOLIS_CITY_GYM", "L_ICE_PATH_F1"] },
    "HOENN_WATERFALL_2"  : { "flag": "HOENN_WATERFALL"   , "condition"   : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM", "L_FORTREE_CITY_GYM", "L_MOSSDEEP_CITY_GYM", "L_SOOTOPOLIS_CITY_GYM", "L_OUTSIDE_SOOTOPOLIS_GYM"] },

    // STORY

    "SAFFRON_DOORS"        : { "flag": "SAFFRON_DOORS"        , "condition"  : ["L_SILPH_CO", "L_SILPH_CO_TOP"]     },
    "ALL_KANTO_BADGES"     : { "flag": "ALL_KANTO_BADGES"     , "condition"  : ["L_PEWTER_CITY_GYM", "L_CERULEAN_GYM", "L_VERMILION_CITY_GYM", "L_CELADON_CITY_GYM", "L_FUCHSIA_CITY_GYM", "KANTO_CUT", "L_CINNABAR_GYM"]},
    "UNLOCK_VIRIDIAN_GYM"  : { "flag": "UNLOCK_VIRIDIAN_GYM"  , "condition"  : ["SAFFRON_DOORS", "ALL_KANTO_BADGES"]},
    "SHOW_EGG_TO_ELM"      : { "flag": "SHOW_EGG_TO_ELM"      , "condition"  : ["L_ELM_LAB"]                        },
    "VIOLET_EGG"           : { "flag": "VIOLET_EGG"           , "condition"  : ["L_VIOLET_CITY_GYM", "L_VIOLET_PK", "L_SPROUT_TOWER_TOP"] },
    "TALK_TO_KURT"         : { "flag": "TALK_TO_KURT"         , "condition"  : ["L_KURT_HOUSE"]                     },
    "SLOWPOKE_WELL"        : { "flag": "SLOWPOKE_WELL"        , "condition"  : ["L_SLOWPOKE_WELL"]                  },
    "WHIRLPOOL_HM"         : { "flag": "WHIRLPOOL_HM"         , "condition"  : ["L_ROCKET_PASSWORDS", "L_ROCKET_MERKROW", "L_ROCKET_ELECTRODES"]},
    "HOENN_POKEDEX"        : { "flag": "HOENN_POKEDEX"        , "condition"  : ["L_OLDALE_TOWN", "L_BIRCH_LAB"]     },
    "HOENN_CATCH_TUTORIAL" : { "flag": "HOENN_CATCH_TUTORIAL" , "condition"  : ["L_PETALBURG_GYM"]                  },
    "TALK_TO_STONE"        : { "flag": "TALK_TO_STONE"        , "condition"  : ["L_PRESIDENTS_OFFICE"]              },
    "RESCUE_PICO"          : { "flag": "RESCUE_PICO"          , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_RUSTBORO", "L_RUSTURF_TUNNEL"]                                                                         },
    "NEW_MAUVILL"          : { "flag": "NEW_MAUVILL"          , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM", "L_MAUVILLE_CITY"]},
    "SPEAK_TO_WALLACE"     : { "flag": "SPEAK_TO_WALLACE"     , "condition"  : ["L_CAVE_OF_ORIGIN_WALLACE"]},
    "ALL_BADGES_HOENN"     : { "flag": "ALL_BADGES_HOENN"     , "condition"  : ["L_RUSTBORO_CITY_GYM", "L_DEWFORD_TOWN_GYM", "L_MAUVILLE_CITY_GYM", "L_LAVARIDGE_TOWN_GYM", "L_PETALBURG_GYM", "L_FORTREE_CITY_GYM", "L_MOSSDEEP_CITY_GYM", "L_SOOTOPOLIS_CITY_GYM"] }             

}

var LOCATIONS_TRIGGER = {
    "FR,1,47,1" : "L_SILPH_CO",
    "FR,1,57,1" : "L_SILPH_CO_TOP",
    "FR,15,2,3" : "L_FLASH_ROUTE_CONNECTOR",
    "FR,5,3,1"  : "L_VIRIDIAN_MART",
    "FR,30,0,1" : "L_BILL_HOUSE",
    "FR,1,94,0" : "L_POKE_TOWER_TOP",
    "FR,7,6,1"  : "L_CERULEAN_BIKE_SHOP",
    "FR,9,3,1"  : "L_VERMILLION_FAN_CLUB",
    "FR,10,7,1" : "L_CELADON_COMPLEX_F1",
    "FR,11,7,1" : "L_SAFARI_WARDEN_HOUSE",
    "FR,1,45,0" : "L_CELADON_ROCKET_HIDEOUT_KEY_ROOM",
    "FR,1,42,0" : "L_CELADON_ROCKET_HIDEOUT_F1",
    "FR,1,43,0" : "L_CELADON_ROCKET_HIDEOUT_F2",
    "FR,11,0,2" : "L_FUCHSIA_SAFARI_ZONE",
    "FR,1,11,0" : "L_SS_ANNE_CAPTAIN",
    "FR,1,62,0" : "L_POKEMON_MANSION_BASEMENT",
    "FR,6,2,1"  : "L_PEWTER_CITY_GYM",
    "FR,7,5,1"  : "L_CERULEAN_GYM",
    "FR,9,6,1"  : "L_VERMILION_CITY_GYM",
    "FR,10,16,1": "L_CELADON_CITY_GYM",
    "FR,11,3,1" : "L_FUCHSIA_CITY_GYM",
    "FR,12,0,1" : "L_CINNABAR_GYM",

    "C,1,4,0"  : "L_ELM_LAB",
    "C,24,25,0": "L_SPROUT_TOWER_TOP",
    "C,8,4,0"  : "L_VIOLET_PK",
    "C,3,4,0"  : "L_KURT_HOUSE",
    "C,24,4,0" : "L_SLOWPOKE_WELL",
    "C,13,16,0": "L_GOLDENROD_DEPT_STORE",
    "C,11,4,0" : "L_GOLDENROD_BIKE_SHOP",
    "C,0,0,3"  : "L_VIOLET_CITY",
    "C,24,54,0": "L_BURNED_TOWER",
    "C,4,4,0"  : "L_SECRET_MEDICINE",
    "C,24,51,0": "L_LIGHTHOUSE_TOP",
    "C,20,2,0" : "L_ICE_PATH_F1",
    "C,9,6,0"  : "L_KIMONO_GIRLS",
    "C,24,11,1": "L_ILEX_FOREST",
    "C,10,1,0" : "L_OLIVINE_BAR",
    "C,0,23,2" : "L_ROUTE_36",
    "C,11,8,0" : "L_GOLDENRON_FLOWERSHOP",
    "C,24,29,0": "L_DRAGONS_DEN_TEST",
    "C,8,1,0"  : "L_VIOLET_CITY_GYM",
    "C,3,3,0"  : "L_AZALEA_TOWN_GYM",
    "C,11,3,0" : "L_GOLDENRON_CITY_GYM",
    "C,12,1,0" : "L_ECRUTEAK_GYM",
    "C,4,1,0"  : "L_CIANWOOD_CITY_GYM",
    "C,10,0,0" : "L_OLIVINE_CITY_GYM",
    "C,14,0,0" : "L_MAHOGANY_TOWN_GYM",
    "C,24,21,3": "L_ROCKET_PASSWORDS",
    "C,24,21,2": "L_ROCKET_MERKROW",
    "C,24,21,2": "L_ROCKET_ELECTRODES",
    "C,15,0,0" : "L_BLACKTHORN_CITY_GYM",

    "E,11,2,0" : "L_PRESIDENTS_OFFICE",
    "E,24,7,0" : "L_GRANITE_CAVE_F1",
    "E,0,2,0"  : "L_MAUVILLE_CITY",
    "E,0,3,3"  : "L_RUSTBORO",
    "E,10,1,0" : "L_MAUVILLE_BIKE_SHOP",
    "E,17,1,0" : "L_ROUTE_104_FLOWER_SHOP",
    "E,1,4,0"  : "L_BIRCH_LAB",
    "E,0,10,2" : "L_OLDALE_TOWN",
    "E,0,4,0"  : "L_DEVON_CORP_PRESIDENT_OFFICE",
    "E,11,11,0": "L_CUTTERS_HOUSE",
    "E,0,12,1" : "L_LAVARIDGE_TOWN",
    "E,10,2,0" : "L_MAUVILLE_CITY_ROCK_SMASH",
    "E,24,4,0" : "L_RUSTURF_TUNNEL",
    "E,14,7,0" : "L_MOSSDEEP_STEVEN_HOUSE",
    "E,14,10,0": "L_SPACE_CENTER_TOP",
    "E,0,7,2"  : "L_OUTSIDE_SOOTOPOLIS_GYM",
    "E,15,0,0" : "L_SOOTOPOLIS_CITY_GYM",
    "E,24,42,0": "L_CAVE_OF_ORIGIN_WALLACE",
    "E,11,3,0" : "L_RUSTBORO_CITY_GYM",
    "E,3,3,0"  : "L_DEWFORD_TOWN_GYM",
    "E,10,0,0" : "L_MAUVILLE_CITY_GYM",
    "E,4,1,0"  : "L_LAVARIDGE_TOWN_GYM",
    "E,8,1,0"  : "L_PETALBURG_GYM",
    "E,12,1,0" : "L_FORTREE_CITY_GYM",
    "E,14,0,0" : "L_MOSSDEEP_CITY_GYM",
}

var KEY_LOCATIONS = {
    "FR,1,75,0" : "L_KANTO_LEAGUE_1",
    "FR,1,76,0" : "L_KANTO_LEAGUE_2",
    "FR,1,77,0" : "L_KANTO_LEAGUE_3",
    "FR,1,78,0" : "L_KANTO_LEAGUE_4",
    "FR,1,79,0" : "L_KANTO_LEAGUE_CHAMP",

    "C,16,0,0" : "L_JOHTO_LEAGUE_1",
    "C,16,1,0" : "L_JOHTO_LEAGUE_2",
    "C,16,2,0" : "L_JOHTO_LEAGUE_3",
    "C,16,3,0" : "L_JOHTO_LEAGUE_4",
    "C,16,4,0" : "L_JOHTO_LEAGUE_CHAMP",

    "E,16,0,0" : "L_HOENN_LEAGUE_1",
    "E,16,1,0" : "L_HOENN_LEAGUE_2",
    "E,16,2,0" : "L_HOENN_LEAGUE_3",
    "E,16,3,0" : "L_HOENN_LEAGUE_4",
    "E,16,4,0" : "L_HOENN_LEAGUE_CHAMP",
    "E,24,107,0" : "L_STEVEN_FINAL_BOSS"
}

var FLAG_DATA = {
    "LOCATIONS_TRIGGER" : LOCATIONS_TRIGGER,
    "COMPOSITE_FLAGS" : COMPOSITE_FLAGS,
    "KEY_LOCATIONS" : KEY_LOCATIONS
}