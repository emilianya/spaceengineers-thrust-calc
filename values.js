// gravities

const gravityOptions = {
    "earth": 1,
    "mars": 0.9,
    "alien": 1.1,
    "moon": 0.25,
    "europa": 0.25,
    "triton": 0.25
}

const containerMultiplierOptions = {
    "realistic": 1,
    "x3": 3,
    "x5": 5,
    "x10": 10
}

// weight in KG
// thrust in newtons
// power in watts
// fuel (for hydrogen) is in Litres/s

const smallShipThrusters = {
    largeIon: {
        name: "Large Ion Thruster",
        weight: 721,
        thrust: 172800,
        power: 2400,
        fuel: null,
        vanilla: true,
        imagefile: 'large_ion_thruster.png'
    },
    smallIon: {
        name: "Ion Thruster",
        weight: 121,
        thrust: 14400,
        power: 200,
        fuel: null,
        vanilla: true,
        imagefile: 'ion_thruster.png'
    },
    largeHydrogen: {
        name: "Large Hydrogen Thruster",
        weight: 1222,
        thrust: 480000,
        power: 600,
        fuel: 386,
        vanilla: true,
        imagefile: 'large_hydrogen_thruster.png'
    },
    smallHydrogen: {
        name: "Hydrogen Thruster",
        weight: 334,
        thrust: 98400,
        power: 125,
        fuel: 80,
        vanilla: true,
        imagefile: 'hydrogen_thruster.png'
    },
    largeAtmospheric: {
        name: "Large Atmospheric Thruster",
        weight: 2948,
        thrust: 576000,
        power: 2400,
        fuel: null,
        vanilla: true,
        imagefile: 'large_atmospheric_thruster.png'
    },
    smallAtmospheric: {
        name: "Atmospheric Thruster",
        weight: 699,
        thrust: 96000,
        power: 600,
        fuel: null,
        vanilla: true,
        imagefile: 'atmospheric_thruster.png'
    },
    prototech: {
        name: "Prototech Thruster",
        weight: 1521,
        thrust: 561600,
        power: 4800,
        fuel: null,
        vanilla: true,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog50: {
        name: "Stribog-50",
        weight: 465,
        thrust: 196800,
        power: 0,
        fuel: 152.64,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog100: {
        name: "Stribog-100",
        weight: 849,
        thrust: 393600,
        power: 0,
        fuel: 290.01,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog200: {
        name: "Stribog-200",
        weight: 1670,
        thrust: 787200,
        power: 0,
        fuel: 732.65,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog300: {
        name: "Stribog-300",
        weight: 3055,
        thrust: 1440000,
        power: 0,
        fuel: 1160,
        imagefile: 'atmospheric_thruster.png'
    },
    aeolus100: {
        name: "Aeolus-100 (Hybrid, 75% in atmo)",
        weight: 121,
        thrust: 43200,
        power: 700000,
        fuel: 0,
        imagefile: 'atmospheric_thruster.png'
    },
    aeolus300: {
        name: "Aeolus-300 (Hybrid, 75% in atmo)",
        weight: 1442,
        thrust: 518400,
        power: 8400000,
        fuel: 0,
        imagefile: 'atmospheric_thruster.png'
    },
}


const largeShipThrusters = {
    largeIon: {
        name: "Large Ion Thruster",
        weight: 43200,
        thrust: 4320000,
        power: 33600,
        fuel: null,
        vanilla: true,
        imagefile: 'large_ion_thruster.png'
    },
    smallIon: {
        name: "Ion Thruster",
        weight: 4380,
        thrust: 345600,
        power: 3360,
        fuel: null,
        vanilla: true,
        imagefile: 'ion_thruster.png'
    },
    largeHydrogen: {
        name: "Large Hydrogen Thruster",
        weight: 6940,
        thrust: 7200000,
        power: 7500,
        fuel: 4820,
        vanilla: true,
        imagefile: 'large_hydrogen_thruster.png'
    },
    smallHydrogen: {
        name: "Hydrogen Thruster",
        weight: 1420,
        thrust: 1080000,
        power: 1250,
        fuel: 803,
        vanilla: true,
        imagefile: 'hydrogen_thruster.png'
    },
    largeAtmospheric: {
        name: "Large Atmospheric Thruster",
        weight: 32970,
        thrust: 6480000,
        power: 16800,
        fuel: null,
        vanilla: true,
        imagefile: 'large_atmospheric_thruster.png'
    },
    smallAtmospheric: {
        name: "Atmospheric Thruster",
        weight: 4000,
        thrust: 648000,
        power: 2400,
        fuel: null,
        vanilla: true,
        imagefile: 'atmospheric_thruster.png'
    },
    prototech: {
        name: "Prototech Thruster",
        weight: 38850,
        thrust: 14040000,
        power: 67200,
        fuel: null,
        vanilla: true,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog350: {
        name: "Stribog-350",
        weight: 1790,
        thrust: 2160000,
        power: 0,
        fuel: 1530,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog400: {
        name: "Stribog-400",
        weight: 3560,
        thrust: 4320000,
        power: 0,
        fuel: 2900,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog500: {
        name: "Stribog-500",
        weight: 7100,
        thrust: 8640000,
        power: 0,
        fuel: 5510,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog550: {
        name: "Stribog-550",
        weight: 8696,
        thrust: 14400000,
        power: 0,
        fuel: 9160,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog600: {
        name: "Stribog-600",
        weight: 17350,
        thrust: 28800000,
        power: 0,
        fuel: 17400,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog700: {
        name: "Stribog-700",
        weight: 34620,
        thrust: 54000000,
        power: 0,
        fuel: 22620,
        imagefile: 'atmospheric_thruster.png'
    },
    stribog800: {
        name: "Stribog-800",
        weight: 93350,
        thrust: 216000000,
        power: 0,
        fuel: 29410,
        imagefile: 'atmospheric_thruster.png'
    },
    aeolus400: {
        name: "Aeolus-400 (Hybrid, 75% in atmo)",
        weight: 4380,
        thrust: 1040000,
        power: 11800000,
        fuel: 0,
        imagefile: 'atmospheric_thruster.png'
    },
    aeolus500: {
        name: "Aeolus-500 (Hybrid, 75% in atmo)",
        weight: 43200,
        thrust: 12960000,
        power: 118000000,
        fuel: 0,
        imagefile: 'atmospheric_thruster.png'
    },
    aeolus700: {
        name: "Aeolus-700 (Hybrid, 75% in atmo)",
        weight: 134400,
        thrust: 45360000,
        power: 410000000,
        fuel: 0,
        imagefile: 'atmospheric_thruster.png'
    }
}

const largeShipCargo = {
    small: {
        size: 15625
    },
    large: {
        size: 421875
    },
}
const smallShipCargo = {
    small: {
        size: 125
    },
    medium: {
        size: 3375
    },
    large: {
        size: 15625
    },
    modular: {
        size: 10000
    },
}

const itemData = {
    "DisplayName_Item_StoneOre": {
        "name": "Stone",
        "type": "Ore",
        "subtype": "Stone",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_IronOre": {
        "name": "Iron Ore",
        "type": "Ore",
        "subtype": "Iron",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_NickelOre": {
        "name": "Nickel Ore",
        "type": "Ore",
        "subtype": "Nickel",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_CobaltOre": {
        "name": "Cobalt Ore",
        "type": "Ore",
        "subtype": "Cobalt",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_MagnesiumOre": {
        "name": "Magnesium Ore",
        "type": "Ore",
        "subtype": "Magnesium",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_SiliconOre": {
        "name": "Silicon Ore",
        "type": "Ore",
        "subtype": "Silicon",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_SilverOre": {
        "name": "Silver Ore",
        "type": "Ore",
        "subtype": "Silver",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_GoldOre": {
        "name": "Gold Ore",
        "type": "Ore",
        "subtype": "Gold",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_PlatinumOre": {
        "name": "Platinum Ore",
        "type": "Ore",
        "subtype": "Platinum",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_UraniumOre": {
        "name": "Uranium Ore",
        "type": "Ore",
        "subtype": "Uranium",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_Gravel": {
        "name": "Gravel",
        "type": "Ingot",
        "subtype": "Stone",
        "mass": 1.0,
        "volume": 0.37
    },
    "DisplayName_Item_IronIngot": {
        "name": "Iron Ingot",
        "type": "Ingot",
        "subtype": "Iron",
        "mass": 1.0,
        "volume": 0.127
    },
    "DisplayName_Item_NickelIngot": {
        "name": "Nickel Ingot",
        "type": "Ingot",
        "subtype": "Nickel",
        "mass": 1.0,
        "volume": 0.112
    },
    "DisplayName_Item_CobaltIngot": {
        "name": "Cobalt Ingot",
        "type": "Ingot",
        "subtype": "Cobalt",
        "mass": 1.0,
        "volume": 0.112
    },
    "DisplayName_Item_MagnesiumPowder": {
        "name": "Magnesium Powder",
        "type": "Ingot",
        "subtype": "Magnesium",
        "mass": 1.0,
        "volume": 0.575
    },
    "DisplayName_Item_SiliconWafer": {
        "name": "Silicon Wafer",
        "type": "Ingot",
        "subtype": "Silicon",
        "mass": 1.0,
        "volume": 0.429
    },
    "DisplayName_Item_SilverIngot": {
        "name": "Silver Ingot",
        "type": "Ingot",
        "subtype": "Silver",
        "mass": 1.0,
        "volume": 0.095
    },
    "DisplayName_Item_GoldIngot": {
        "name": "Gold Ingot",
        "type": "Ingot",
        "subtype": "Gold",
        "mass": 1.0,
        "volume": 0.052
    },
    "DisplayName_Item_PlatinumIngot": {
        "name": "Platinum Ingot",
        "type": "Ingot",
        "subtype": "Platinum",
        "mass": 1.0,
        "volume": 0.047
    },
    "DisplayName_Item_UraniumIngot": {
        "name": "Uranium Ingot",
        "type": "Ingot",
        "subtype": "Uranium",
        "mass": 1.0,
        "volume": 0.052
    }
}