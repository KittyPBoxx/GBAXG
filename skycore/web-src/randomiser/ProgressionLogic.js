/*
    Different combinations of flags are listed that would a flag possible
    If ALL values in ANY of the arrays are present the flag is set true
    
    Warp data contains a single flag, that flag is true then the connection is considered possible. In some cases it may be necasary to fairly specific flags
    these may require many composite flags. Or it many composite flags may trigger that specific flag.
    
    NB: This list is not comprehensive. If a progression flag is not in the list that basically means that the randomiser will never lock progression behind that connection
    i.e if I haven't told it a connection becomes possible after a hm/item e.t.c it will assume it never become possible
    This ensures the game should always be completeable. As more flags are added more complex maps randomisations can be generated.  
*/

const COMPOSITE_FLAGS = {

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

const LOCATIONS_TRIGGER = {
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

const KEY_LOCATIONS = {
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

// Sets of warps where at least 1 needs to lead back home to prevent softlocks
// To meet the criterea warps there should:
// 1) Be a way to get to a warp / set of warps
// 2) And unable to get back (e.g whiteout, teleported, ledge hop, game state change, from forced surf)
const ESCAPE_PATHS = [

    // Several areas areas are not included in the list because they are big hubs (10+ warps can be accessed)
    // For example Rustboro (entering through Rest House or Metor falls exit or whiteout) could lock you if all houses were dead ends
    // In this case a player would have to whiteout or use the escape option in the menu
    // This is not mathmatically perfect but should make the game more playable
  
    /* KANTO */
    // In FR whiteout goes inside the pk center
  
    // Whiteouts (these probably arn't needed as a player did manage to get here in the first place)
      // // Viridian
      // ["FR,5,4,1", "FR,5,4,3"],
      // // Pewter
      // ["FR,6,5,1", "FR,6,5,3"],
      // // Viridian
      // ["FR,5,4,1", "FR,5,4,3"],
      // // Route 4
      // ["FR,16,0,1", "FR,16,0,3"],
      // // Cerulean
      // ["FR,7,3,1", "FR,7,3,3"],
      // // Vermillion
      // ["FR,9,1,1", "FR,9,1,3"],
      // // Route 10
      // ["FR,21,0,1", "FR,21,0,3"],
      // // Lavender
      // ["FR,8,0,1", "FR,8,0,3"],
      // // Celadon
      // ["FR,10,12,1", "FR,10,12,3"],
      // // Saffron
      // ["FR,14,6,1", "FR,14,6,3"],
      // // Fuchsia
      // ["FR,11,5,1", "FR,11,5,3"],
      // // Cinnabar
      // ["FR,12,5,0", "FR,12,5,3"],
      // Indigo Plateua when blocked / whiteout
      ["FR,13,0,0", "FR,13,0,2"],
  
    // Guard House route 22
    ["FR,28,0,2"],
  
    // Ledge hop, walk from mt moon 
    ["FR,3,2,6", "FR,3,2,5", "FR,3,2,3", "FR,3,2,4", "FR,3,2,2", "FR,3,2,0"],
  
    // Ledge hop cerulan 
    ["FR,3,3,0", "FR,3,3,2", "FR,3,3,3", "FR,3,3,4", "FR,3,3,5", "FR,3,3,6", "FR,3,3,0", "FR,3,3,12", "FR,3,3,13", "FR,3,44,0"],
  
    // SS Anne to vermillion
    ["FR,3,5,3", "FR,3,5,4", "FR,3,5,5", "FR,3,5,6", "FR,3,5,7", "FR,3,5,8", "FR,3,29,0", "FR,3,29,1", "FR,3,24,0", "FR,3,24,1"],
  
    // Powerplant after ledge hop
    ["FR,3,28,2"],
  
    // Poketower past ghost
    ["FR,1,93,1"],
  
    // Lavender teleport to pokeflute house
    ["FR,8,2,1"],
  
    // route 10
    //["FR,3,28,3", "FR,3,28,0"],
  
    // Whiteout to Lavender
    //["FR,3,4,0", "FR,3,4,1", "FR,3,4,2", "FR,3,4,3", "FR,3,4,4", "FR,3,4,5", "FR,3,28,1", "FR,3,30,1", "FR,3,4,0", "FR,3,26,0", "FR,3,26,1"],
  
    // Whiteout to celadon
    //["FR,3,6,0", "FR,3,6,1", "FR,3,6,2", "FR,3,6,3", "FR,3,6,4", "FR,3,6,5", "FR,3,6,7", "FR,3,6,8", "FR,3,6,9", "FR,3,6,11", "FR,3,25,0", "FR,3,25,1"],
  
    // Bike Path Top
    ["FR,25,1,3", "FR,25,1,4"],
  
    // Bike Path Bottom
    ["FR,26,0,1", "FR,26,0,2"],
  
    // Saffron Through guard 
    ["FR,3,10,9", "FR,3,10,11", "FR,3,10,10", "FR,3,10,8", "FR,3,10,7", "FR,3,10,9", "FR,3,10,6", "FR,3,10,0", "FR,3,10,2", "FR,3,10,5", "FR,3,10,14"],
  
    // Tea guard north, south, east, west
    ["FR,17,1,1"],
    ["FR,18,0,2"],
    ["FR,19,0,0"],
    ["FR,20,0,2"],
  
    // Fuchsia whiteout
    //["FR,3,7,0", "FR,3,7,1", "FR,3,7,2", "FR,3,7,3", "FR,3,7,4", "FR,3,7,5", "FR,3,7,6", "FR,3,7,7", "FR,3,7,10", "FR,3,33,0", "FR,3,36,1"],
  
    // Cinnabar through gym
    ["FR,3,8,0", "FR,3,8,2", "FR,3,8,2", "FR,3,8,3", "FR,3,8,4"],
  
    // E4 - 1 Exit
    ["FR,1,75,1"],
  
    // E4 - 2 Exit
    ["FR,1,76,1"],
  
    // E4 - 3 Exit
    ["FR,1,77,1"],
  
    // E4 - 4 Exit
    ["FR,1,78,1"],
  
    /* JOHTO */
  
    // Victory Road ledge hop
    ["C,24,44,1", "C,24,44,3"],
  
    // Route 26 guard check
    ["C,32,0,0"],
  
    // whiteout Indigo Plateau
    ["C,0,8,0", "C,0,8,3"],
  
    // Route 27 ledge hop
    ["C,0,35,0"],
  
    // New Bark/ CherryGrove / Ledge hop from dark cave / whiteout
    ["C,0,9,0", "C,0,9,1", "C,0,9,2", "C,0,9,3", "C,0,16,0", "C,0,10,0", "C,0,10,1", "C,0,10,2", "C,0,10,3", "C,0,17,0", "C,0,17,1"],
  
    // Violet/Route 32 from whiteout / walk back past seed guy
    ["C,0,0,0", "C,0,0,1", "C,0,0,2", "C,0,0,3", "C,0,0,4", "C,0,0,5", "C,0,0,6", "C,0,0,7", "C,0,19,0", "C,0,23,0"],
  
    // Ruins of alph ledge hop
    ["C,24,86,9"],
  
    // Ruins of alph through escape rope door
    ["C,24,88,0"],
  
    // Ruins of alph through flash door
    ["C,24,9,0"],
  
    // Whiteout / through gym to Azalea
    ["C,0,20,0", "C,0,11,6", "C,0,11,5", "C,0,11,4", "C,0,11,3", "C,0,11,1", "C,0,11,0"],
  
    // Golden rod through whiteout or rocket guarded door
    ["C,0,21,0", "C,0,21,2", "C,0,3,0", "C,0,3,2", "C,0,3,3", "C,0,3,5", "C,0,3,6", "C,0,3,8", "C,0,3,11", "C,0,3,14"],
  
    // Golden rod underground locked door
    ["C,11,9,1", "C,11,9,0"],
  
    // Raido Tower through guarded door
    ["C,24,53,3"],
  
    // Ecruteak Walk back past tin tower guard
    ["C,9,7,0"],
  
    // Ecruteak whitout
    ["C,0,1,0", "C,0,1,1", "C,0,1,2", "C,0,1,4", "C,0,1,5", "C,0,1,6", "C,0,1,7", "C,0,1,8", "C,0,1,10", "C,0,1,11"],
  
    // Olivne Whiteout
    ["C,0,25,0", "C,0,26,0", "C,0,26,1", "C,0,2,0", "C,0,2,1", "C,0,2,2", "C,0,2,3", "C,0,2,4", "C,0,2,5", "C,0,2,6", "C,0,2,7", "C,0,2,8", "C,0,27,0"],
  
    // Whirl island fork room ledge hop 1
    ["C,24,30,1"],
  
    // Whirl island fork room ledge hop 2
    ["C,24,30,2"],
  
    // Whirl island maze room ledge hops
    ["C,24,34,7"],
  
    // Whirl island down waterfall
    ["C,24,35,2", "C,24,35,3"],
  
    // Cianwood Whiteout
    ["C,0,12,0", "C,0,12,1", "C,0,12,2", "C,0,12,3", "C,0,12,4", "C,0,12,5", "C,0,12,6"],
  
    // Mt Mortar down waterfall
    ["C,24,15,1", "C,24,15,8"],
  
    // Mr Mortar ledge room
    ["C,24,16,3", "C,24,16,5", "C,24,16,4", "C,24,16,2"],
  
    // Mahogany whiteout / through gym / back past rage bar guy
    ["C,0,13,0", "C,0,13,2", "C,0,13,3", "C,0,13,4", "C,0,29,3"],
  
    // Ice path rock drop room
    ["C,24,52,0"],
  
    // Blackthorn whiteout / through dragons den / route 46 ledge hop / route 45 ledge hop
    ["C,0,33,1"],
  
    // Dark Cave room 1 ledge hop
    ["C,24,7,0"],
  
    // Dark Cave room 2 ledge hop
    ["C,24,8,0"],
  
    // E4 - 1 Exit
    ["C,16,0,1"],
  
    // E4 - 2 Exit
    ["C,16,1,1"],
  
    // E4 - 3 Exit
    ["C,16,2,1"],
  
    // E4 - 4 Exit
    ["C,16,3,1"],
  
    /* HOENN */
  
    // Bottom bike path without bike
    ["E,29,11,0"],
  
    //Top Bike path without bike
    ["E,29,12,0"],
  
    // Oldale/LittleRoot after whiteout or ledge hop from route 104
    ["E,0,9,0", "E,0,9,1", "E,0,9,2", "E,0,10,0", "E,0,10,1", "E,0,10,2", "E,0,10,3"],
  
    // Dewford / Granite enterance (For enterance by whiteout)
    ["E,0,11,0", "E,0,11,1", "E,0,11,2", "E,0,11,3", "E,0,11,4", "E,0,21,0"],
  
    // Sootopolis Gym (Surf after cut scene)
    ["E,0,7,2"],
  
    // Sootopolis Left Side (Surf after cut scene)
    ["E,0,7,10", "E,0,7,1", "E,0,7,8", "E,0,7,6", "E,0,7,4", "E,0,7,3", "E,0,7,13"],
  
    // Sootopolis Right Side (Whiteout / Surf after cut scene)
    ["E,0,7,0", "E,0,7,12", "E,0,7,9", "E,0,7,11", "E,0,7,7", "E,0,7,5"],
  
    // Evergrande top (Whiteout)
    ["E,0,8,0", "E,0,8,3"],
  
    // Evergrande bottom (Whiteout)
    ["E,0,8,1", "E,0,8,2"],
  
    // Evergrande inside after walking past guards
    ["E,16,10,4", "E,16,10,0"],
  
    // Pacifidlog (Whiteout)
    ["E,0,15,0", "E,0,15,1", "E,0,15,2", "E,0,15,3", "E,0,15,4", "E,0,15,5"],
  
    // Mossdeep (whiteout)
    ["E,0,6,0", "E,0,6,1", "E,0,6,2", "E,0,6,3", "E,0,6,4", "E,0,6,5", "E,0,6,6", "E,0,6,7", "E,0,6,8", "E,0,6,9"],
  
    // Slateport (whiteout)
    ["E,0,1,0", "E,0,1,1", "E,0,1,2", "E,0,1,3", "E,0,1,4", "E,0,1,6", "E,0,1,8", "E,0,1,10", "E,0,24,0", "E,0,25,4"],
  
    // Mauville/Verdanterf (whiteout)
    ["E,0,25,1", "E,0,25,2", "E,0,2,0", "E,0,2,1", "E,0,2,2", "E,0,2,3", "E,0,2,4", "E,0,2,5", "E,0,2,6", "E,0,26,0", "E,0,26,4", "E,0,32,0", "E,0,14,0", "E,0,14,1", "E,0,14,2", "E,0,14,3", "E,0,14,4", "E,0,14,5", "E,0,14,6"],
  
    // Fallabough (whiteout)
    ["E,0,26,2", "E,0,27,5", "E,0,28,0", "E,0,13,0", "E,0,13,1", "E,0,13,2", "E,0,13,3", "E,0,13,4", "E,0,29,0", "E,0,29,1", "E,0,29,2"],
  
    // Lilycove / Fortree (whiteout)
    ["E,0,5,0", "E,0,5,1", "E,0,5,2", "E,0,5,3", "E,0,5,4", "E,0,5,5", "E,0,5,7", "E,0,5,8", "E,0,5,9", "E,0,5,10", "E,0,5,11", "E,0,5,12", "E,0,36,0"],
  
    // Firey Path bottom (Exit from desert, Hop down from Lavaridge)
    ["E,0,27,4", "E,0,27,0"],
  
    // E4 - 1 Exit
    ["E,16,0,1"],
  
    // E4 - 2 Exit
    ["E,16,1,1"],
  
    // E4 - 3 Exit
    ["E,16,2,1"],
  
    // E4 - 4 Exit
    ["E,16,3,1"],
  
    // Meteor Falls (Ledge hop)
    ["E,24,1,0", "E,24,1,3"],
  
    // Grannite Cave F1 (Ledge Hop)
    ["E,24,7,0", "E,24,7,2"],
  
    // Grannite Cave walk down bike slide
    ["E,24,8,3", "E,24,8,1"],
  
    // Grannite Cave F3 (After falling)
    ["E,24,9,2"],
  
    // Jagged Pass (After ledge hop / magma emblem door)
    ["E,24,13,0"],
  
    // Mt Pyre F1 (after Drop)
    // (Ignoring 24,15,5)
    //["E,24,15,0", "E,24,15,1", "E,24,15,4"],
  
    // Mt Pyre F2 (after Drop)
    // (Ignoring 24,16,3 / 24,16,2)
    ["E,24,16,0", "E,24,16,1", "E,24,16,4"],
  
    // Mt Pyre F3 Left bottom (after drop)
    // Ignore 24,17,3
    // ["E,24,17,5"],
  
    // Mt Pyre F3 Right (after drop)
    // Ignore 24,18,2
    //["E,24,18,0", "E,24,18,1", "E,24,18,4"],
  
    // Mt Pyre F4 Top (after drop)
    // Ignore 24,18,3
    //["E,24,18,5"],
  
    // Mt Pyre F4 (after drop)
    // Ingore 24,19,2
    // ["E,24,19,3", "E,24,19,4"],
  
    // Aqua Hideout Enterance From Surf
    ["E,24,23,2"],
  
    // Seafloor Cavern after ledge hop
    ["E,24,31,3"],
  
    // V. Road F2 bottom (after ledge hop)
    ["E,24,44,0"],
  
    // V. Road F2 top (after ledge hop without strength)
    ["E,24,44,4"],
  
    // V.Road F3 (after ledge hop)
    ["E,24,45,0"],
  
    // New Mauville (without basement key)
    ["E,24,52,0"],
  
    // Abandoned Ship Hub (through locked door without storeage key)
    ["E,24,57,0", "E,24,57,1", "E,24,57,2", "E,24,57,3", "E,24,57,4", "E,24,57,6", "E,24,57,7"],
  
    // Desert Ruins (From locked door)
    ["E,24,6,0"],
  
    // Ancient Tomb (From locked door)
    ["E,24,68,0"],
  
    // Sky Pillar (Without talking to Wallace)
    ["E,24,78,0"],
  
    // Sky Pillar F1 (From Drop) // Currently not possible because sky pillar is always in unbroken state
    // ["E,24,79,0"],
  
    // Sky Pillar F3 (From side drop)
    ["E,24,81,0", "E,24,81,1"],
  
    // Sky Pillar F3 (From center drop)
    ["E,24,81,2"],
  
    // Magma Hideout From (ledge hop)
    ["E,24,86,1"],
  
    // Mirrage tower (Drops from any higher floors)
    ["E,24,94,0", "E,24,94,1"],
  
    // Wally's house inside (Teleported there after fight with norman)
    ["E,8,0,0"],
  
    // Lily Cove (dock inside from ship)
    ["E,13,10,0"],
  
    // Slateport Dock (after talking to reporter)
    ["E,9,9,0"],
  
    // Seafloor cavern strength + rocksmash room (exit and re-enter top right)
    ["E,24,29,3"]
  ]

export const FLAG_DATA = {
    "LOCATIONS_TRIGGER" : LOCATIONS_TRIGGER,
    "COMPOSITE_FLAGS" : COMPOSITE_FLAGS,
    "KEY_LOCATIONS" : KEY_LOCATIONS,
    "ESCAPE_PATHS" : ESCAPE_PATHS,
}