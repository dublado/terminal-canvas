/**
 * Dictionary of all available named colors in terminal-canvas.
 */
export const NAMED_COLORS = new Map<string, string>([
  ['ALICE_BLUE', '#F0F8FF'],
  ['ALMOND', '#EFDECD'],
  ['ANTIQUE_BRASS', '#CD9575'],
  ['ANTIQUE_WHITE', '#FAEBD7'],
  ['APRICOT', '#FDD9B5'],
  ['AQUA', '#00FFFF'],
  ['AQUAMARINE', '#78DBE2'],
  ['ASPARAGUS', '#87A96B'],
  ['ATOMIC_TANGERINE', '#FFA474'],
  ['AZURE', '#F0FFFF'],
  ['BANANA_MANIA', '#FAE7B5'],
  ['BEAVER', '#9F8170'],
  ['BEIGE', '#F5F5DC'],
  ['BISQUE', '#FFE4C4'],
  ['BITTERSWEET', '#FD7C6E'],
  ['BLACK', '#000000'],
  ['BLANCHED_ALMOND', '#FFEBCD'],
  ['BLIZZARD_BLUE', '#ACE5EE'],
  ['BLUE_BELL', '#A2A2D0'],
  ['BLUE_GRAY', '#6699CC'],
  ['BLUE_GREEN', '#0D98BA'],
  ['BLUE_VIOLET', '#7366BD'],
  ['BLUE', '#1F75FE'],
  ['BLUSH', '#DE5D83'],
  ['BRICK_RED', '#CB4154'],
  ['BROWN', '#B4674D'],
  ['BURLY_WOOD', '#DEB887'],
  ['BURNT_ORANGE', '#FF7F49'],
  ['BURNT_SIENNA', '#EA7E5D'],
  ['CADET_BLUE', '#B0B7C6'],
  ['CANARY', '#FFFF99'],
  ['CARIBBEAN_GREEN', '#1CD3A2'],
  ['CARNATION_PINK', '#FFAACC'],
  ['CERISE', '#DD4492'],
  ['CERULEAN', '#1DACD6'],
  ['CHARTREUSE', '#7FFF00'],
  ['CHESTNUT', '#BC5D58'],
  ['CHOCOLATE', '#D2691E'],
  ['COPPER', '#DD9475'],
  ['CORAL', '#FF7F50'],
  ['CORN_FLOWER_BLUE', '#6495ED'],
  ['CORN_SILK', '#FFF8DC'],
  ['CORNFLOWER', '#9ACEEB'],
  ['COTTON_CANDY', '#FFBCD9'],
  ['CRIMSON', '#DC143C'],
  ['CYAN', '#00FFFF'],
  ['DANDELION', '#FDDB6D'],
  ['DARK_BLUE', '#00008B'],
  ['DARK_CYAN', '#008B8B'],
  ['DARK_GOLDEN_ROD', '#B8860B'],
  ['DARK_GRAY', '#A9A9A9'],
  ['DARK_GREEN', '#006400'],
  ['DARK_GREY', '#A9A9A9'],
  ['DARK_KHAKI', '#BDB76B'],
  ['DARK_MAGENTA', '#8B008B'],
  ['DARK_OLIVE_GREEN', '#556B2F'],
  ['DARK_ORANGE', '#FF8C00'],
  ['DARK_ORCHID', '#9932CC'],
  ['DARK_RED', '#8B0000'],
  ['DARK_SALMON', '#E9967A'],
  ['DARK_SEA_GREEN', '#8FBC8F'],
  ['DARK_SLATE_BLUE', '#483D8B'],
  ['DARK_SLATE_GRAY', '#2F4F4F'],
  ['DARK_SLATE_GREY', '#2F4F4F'],
  ['DARK_TURQUOISE', '#00CED1'],
  ['DARK_VIOLET', '#9400D3'],
  ['DEEP_PINK', '#FF1493'],
  ['DEEP_SKY_BLUE', '#00BFFF'],
  ['DENIM', '#2B6CC4'],
  ['DESERT_SAND', '#EFCDB8'],
  ['DIM_GRAY', '#696969'],
  ['DIM_GREY', '#696969'],
  ['DODGER_BLUE', '#1E90FF'],
  ['EGGPLANT', '#6E5160'],
  ['ELECTRIC_LIME', '#CEFF1D'],
  ['FERN', '#71BC78'],
  ['FIREBRICK', '#B22222'],
  ['FLORAL_WHITE', '#FFFAF0'],
  ['FOREST_GREEN', '#6DAE81'],
  ['FUCHSIA', '#C364C5'],
  ['FUZZY_WUZZY', '#CC6666'],
  ['GAINS_BORO', '#DCDCDC'],
  ['GHOST_WHITE', '#F8F8FF'],
  ['GOLD', '#E7C697'],
  ['GOLDENROD', '#FCD975'],
  ['GRANNY_SMITH_APPLE', '#A8E4A0'],
  ['GRAY', '#95918C'],
  ['GREEN_BLUE', '#1164B4'],
  ['GREEN_YELLOW', '#F0E891'],
  ['GREEN', '#1CAC78'],
  ['GREY', '#808080'],
  ['HONEYDEW', '#F0FFF0'],
  ['HOT_MAGENTA', '#FF1DCE'],
  ['HOT_PINK', '#FF69B4'],
  ['INCHWORM', '#B2EC5D'],
  ['INDIAN_RED', '#CD5C5C'],
  ['INDIGO', '#5D76CB'],
  ['IVORY', '#FFFFF0'],
  ['JAZZ_BERRY_JAM', '#CA3767'],
  ['JUNGLE_GREEN', '#3BB08F'],
  ['KHAKI', '#F0E68C'],
  ['LASER_LEMON', '#FEFE22'],
  ['LAVENDER_BLUSH', '#FFF0F5'],
  ['LAVENDER', '#FCB4D5'],
  ['LAWN_GREEN', '#7CFC00'],
  ['LEMON_CHIFFON', '#FFFACD'],
  ['LEMON_YELLOW', '#FFF44F'],
  ['LIGHT_BLUE', '#ADD8E6'],
  ['LIGHT_CORAL', '#F08080'],
  ['LIGHT_CYAN', '#E0FFFF'],
  ['LIGHT_GOLDENROD_YELLOW', '#FAFAD2'],
  ['LIGHT_GRAY', '#D3D3D3'],
  ['LIGHT_GREEN', '#90EE90'],
  ['LIGHT_GREY', '#D3D3D3'],
  ['LIGHT_PINK', '#FFB6C1'],
  ['LIGHT_SALMON', '#FFA07A'],
  ['LIGHT_SEA_GREEN', '#20B2AA'],
  ['LIGHT_SKY_BLUE', '#87CEFA'],
  ['LIGHT_SLATE_GRAY', '#778899'],
  ['LIGHT_SLATE_GREY', '#778899'],
  ['LIGHT_STEEL_BLUE', '#B0C4DE'],
  ['LIGHT_YELLOW', '#FFFFE0'],
  ['LIME_GREEN', '#32CD32'],
  ['LIME', '#00FF00'],
  ['LINEN', '#FAF0E6'],
  ['MACARONI_AND_CHEESE', '#FFBD88'],
  ['MAGENTA', '#F664AF'],
  ['MAGIC_MINT', '#AAF0D1'],
  ['MAHOGANY', '#CD4A4C'],
  ['MAIZE', '#EDD19C'],
  ['MANATEE', '#979AAA'],
  ['MANGO_TANGO', '#FF8243'],
  ['MAROON', '#C8385A'],
  ['MAUVELOUS', '#EF98AA'],
  ['MEDIUM_AQUAMARINE', '#66CDAA'],
  ['MEDIUM_BLUE', '#0000CD'],
  ['MEDIUM_ORCHID', '#BA55D3'],
  ['MEDIUM_PURPLE', '#9370DB'],
  ['MEDIUM_SEA_GREEN', '#3CB371'],
  ['MEDIUM_SLATE_BLUE', '#7B68EE'],
  ['MEDIUM_SPRING_GREEN', '#00FA9A'],
  ['MEDIUM_TURQUOISE', '#48D1CC'],
  ['MEDIUM_VIOLET_RED', '#C71585'],
  ['MELON', '#FDBCB4'],
  ['MIDNIGHT_BLUE', '#1A4876'],
  ['MINT_CREAM', '#F5FFFA'],
  ['MISTY_ROSE', '#FFE4E1'],
  ['MOCCASIN', '#FFE4B5'],
  ['MOUNTAIN_MEADOW', '#30BA8F'],
  ['MULBERRY', '#C54B8C'],
  ['NAVAJO_WHITE', '#FFDEAD'],
  ['NAVY_BLUE', '#1974D2'],
  ['NAVY', '#000080'],
  ['NEON_CARROT', '#FFA343'],
  ['OLD_LACE', '#FDF5E6'],
  ['OLIVE_DRAB', '#6B8E23'],
  ['OLIVE_GREEN', '#BAB86C'],
  ['OLIVE', '#808000'],
  ['ORANGE_RED', '#FF2B2B'],
  ['ORANGE_YELLOW', '#F8D568'],
  ['ORANGE', '#FF7538'],
  ['ORCHID', '#E6A8D7'],
  ['OUTER_SPACE', '#414A4C'],
  ['OUTRAGEOUS_ORANGE', '#FF6E4A'],
  ['PACIFIC_BLUE', '#1CA9C9'],
  ['PALE_GOLDENROD', '#EEE8AA'],
  ['PALE_GREEN', '#98FB98'],
  ['PALE_TURQUOISE', '#AFEEEE'],
  ['PALE_VIOLET_RED', '#DB7093'],
  ['PAPAYA_WHIP', '#FFEFD5'],
  ['PEACH_PUFF', '#FFDAB9'],
  ['PEACH', '#FFCFAB'],
  ['PERIWINKLE', '#C5D0E6'],
  ['PERU', '#CD853F'],
  ['PIGGY_PINK', '#FDDDE6'],
  ['PINE_GREEN', '#158078'],
  ['PINK_FLAMINGO', '#FC74FD'],
  ['PINK_SHERBET', '#F78FA7'],
  ['PINK', '#FFC0CB'],
  ['PLUM', '#8E4585'],
  ['POWDER_BLUE', '#B0E0E6'],
  ['PURPLE_HEART', '#7442C8'],
  ['PURPLE_MOUNTAINS_MAJESTY', '#9D81BA'],
  ['PURPLE_PIZZAZZ', '#FE4EDA'],
  ['PURPLE', '#800080'],
  ['RADICAL_RED', '#FF496C'],
  ['RAW_SIENNA', '#D68A59'],
  ['RAW_UMBER', '#714B23'],
  ['RAZZLE_DAZZLE_ROSE', '#FF48D0'],
  ['RAZZMATAZZ', '#E3256B'],
  ['REBECCA_PURPLE', '#663399'],
  ['RED_ORANGE', '#FF5349'],
  ['RED_VIOLET', '#C0448F'],
  ['RED', '#EE204D'],
  ['ROBINS_EGG_BLUE', '#1FCECB'],
  ['ROSY_BROWN', '#BC8F8F'],
  ['ROYAL_BLUE', '#4169E1'],
  ['ROYAL_PURPLE', '#7851A9'],
  ['SADDLE_BROWN', '#8B4513'],
  ['SALMON', '#FF9BAA'],
  ['SANDY_BROWN', '#F4A460'],
  ['SCARLET', '#FC2847'],
  ['SCREAMING_GREEN', '#76FF7A'],
  ['SEA_GREEN', '#9FE2BF'],
  ['SEASHELL', '#FFF5EE'],
  ['SEPIA', '#A5694F'],
  ['SHADOW', '#8A795D'],
  ['SHAMROCK', '#45CEA2'],
  ['SHOCKING_PINK', '#FB7EFD'],
  ['SIENNA', '#A0522D'],
  ['SILVER', '#CDC5C2'],
  ['SKY_BLUE', '#80DAEB'],
  ['SLATE_BLUE', '#6A5ACD'],
  ['SLATE_GRAY', '#708090'],
  ['SLATE_GREY', '#708090'],
  ['SNOW', '#FFFAFA'],
  ['SPRING_GREEN', '#ECEABE'],
  ['STEEL_BLUE', '#4682B4'],
  ['SUNGLOW', '#FFCF48'],
  ['SUNSET_ORANGE', '#FD5E53'],
  ['TAN', '#FAA76C'],
  ['TEAL_BLUE', '#18A7B5'],
  ['TEAL', '#008080'],
  ['THISTLE', '#EBC7DF'],
  ['TICKLE_ME_PINK', '#FC89AC'],
  ['TIMBER_WOLF', '#DBD7D2'],
  ['TOMATO', '#FF6347'],
  ['TROPICAL_RAIN_FOREST', '#17806D'],
  ['TUMBLEWEED', '#DEAA88'],
  ['TURQUOISE_BLUE', '#77DDE7'],
  ['TURQUOISE', '#40E0D0'],
  ['UN_MELLOW_YELLOW', '#FFFF66'],
  ['VIOLET_BLUE', '#324AB2'],
  ['VIOLET_PURPLE', '#926EAE'],
  ['VIOLET_RED', '#F75394'],
  ['VIOLET', '#EE82EE'],
  ['VIVID_TANGERINE', '#FFA089'],
  ['VIVID_VIOLET', '#8F509D'],
  ['WHEAT', '#F5DEB3'],
  ['WHITE_SMOKE', '#F5F5F5'],
  ['WHITE', '#FFFFFF'],
  ['WILD_BLUE_YONDER', '#A2ADD0'],
  ['WILD_STRAWBERRY', '#FF43A4'],
  ['WILD_WATERMELON', '#FC6C85'],
  ['WISTERIA', '#CDA4DE'],
  ['YELLOW_GREEN', '#C5E384'],
  ['YELLOW_ORANGE', '#FFAE42'],
  ['YELLOW', '#FCE883'],
]);
