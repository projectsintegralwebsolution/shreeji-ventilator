export interface ProductSpec { label: string; value: string; }

export interface ProductItem {
  id: string;
  slug: string;
  legacySlug: string;
  name: string;
  h1Title: string;
  metaTitle: string;
  metaDescription: string;
  focusKeywords: string[];
  category: "motorized-hybrid" | "industrial-exhaust" | "hvls-fans" | "wind-driven" | "accessories";
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string[];
  keyFeatures: string[];
  efficiencyHighlights: string[];
  workingTheory: string;
  applications: string[];
  specs: {
    throatDia: string;
    outerDia: string;
    fanDiameter?: string;
    motorType?: string;
    noiseLevel?: string;
    coverageArea?: string;
    voltageRating?: string;
    protectionGrade?: string;
    maxRpm?: string;
    topCoverSize?: string;
    topCoverThickness?: string;
    topCoverMoc?: string;
    bottomPlateWidth?: string;
    bottomPlateThickness?: string;
    bottomPlateMoc?: string;
    bladeMountingRingThickness?: string;
    bladeMountingRingMoc?: string;
    bearingSize?: string;
    bearingMake?: string;
    bottomRingWidth?: string;
    bottomRingMoc?: string;
    basePlateSize?: string;
    basePlateMoc?: string;
    shaftThickness?: string;
    shaftLength?: string;
    shaftMoc?: string;
    bladeLength?: string;
    bladeWidth?: string;
    bladeThickness?: string;
    bladeMoc?: string;
    bladeCount?: string;
    airflowCfm?: string;
    powerConsumption?: string;
  };
  image: string;
  galleryImages: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const productsData: ProductItem[] = [
  {
    "id": "motorised-roof-ventilator",
    "slug": "motorised-roof-ventilator",
    "legacySlug": "motorised-roof-ventilator.php",
    "name": "Motorized Roof Ventilator",
    "h1Title": "Motorized Roof Ventilator Manufacturer & Industrial Roof Extraction Systems",
    "metaTitle": "Motorized Roof Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Roof Ventilator engineered for continuous roof-apex forced extraction of dense industrial heat, furnace smoke, and process fumes.",
    "focusKeywords": [
      "motorized roof ventilator",
      "motorised roof ventilator",
      "motorized ventilator",
      "motorised ventilator",
      "motorized turbo ventilator",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "motorized roof air ventilator",
      "force ventilator",
      "power ventilator",
      "smoke extraction fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Hybrid Roof Ventilator",
    "shortDescription": "Heavy-duty industrial motorized roof ventilator engineered for continuous high-heat evacuation, severe smoke extraction, and zero-stagnation plant ventilation.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Roof Ventilator is engineered specifically for severe industrial factory environments where process heat loads, welding fumes, chemical vapors, or furnace emissions demand continuous forced rooftop extraction.",
      "Operating directly at the highest apex of the factory roof deck, this system prevents the accumulation of trapped thermal blankets and stratifying toxic fumes. When energized, the precision-balanced internal motor assembly generates high-velocity suction that pulls stagnant air up through the central throat and expels it horizontally away from the roofline.",
      "Constructed with aerospace-grade Hindalco Aluminium 8011 vanes, heavy-gauge Stainless Steel SS 304 structural framework, and a TEFC IP55 weatherproof motor enclosure, it provides continuous 24/7 industrial extraction in dusty, humid, and corrosive atmospheres."
    ],
    "keyFeatures": [
      "Roof Apex Thermal Blanket Elimination & Continuous Forced Exhaust",
      "High-Torque Class F Insulated IP55 Weatherproof Copper-Wound Motor",
      "Hindalco 8011 Aluminium Vanes with SS 304 Structural Framework",
      "Dynamic Factory Balancing for Low-Vibration Continuous Duty",
      "100% Monsoon-Proof Aerodynamic Water Deflector Construction",
      "Precision-Moulded FRP Base Plate for All Industrial Corrugated Roofing Profiles"
    ],
    "efficiencyHighlights": [
      "Delivers rapid volumetric air displacement to prevent heat buildup beneath metal ceilings",
      "Reduces indoor ambient shop-floor temperatures by 5°C to 9°C",
      "Prevents corrosive condensate and moisture buildup on roof purlins and rafters",
      "Engineered for 24/7 continuous industrial duty cycle with minimal maintenance"
    ],
    "workingTheory": "Operating at the factory roof crest where rising hot air naturally collects, the unit uses motorized centrifugal suction to establish a powerful low-pressure extraction zone. Rising thermal plumes, heavy smoke, and process vapors are continuously captured and forcefully discharged outward, drawing cooler fresh air inward through wall louvers.",
    "applications": [
      "Steel Rolling Mills & Forging Plants",
      "Foundries & Heat Treatment Facilities",
      "Chemical Processing & Paint Application Bays",
      "Automotive Assembly & Robotic Welding Lines",
      "Plastic Extrusion & Injection Moulding Plants",
      "Die Casting & Industrial Rubber Processing Units"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM) / 36\" Inch (915 MM)",
      "motorType": "Class F Insulated IP55 Industrial Motor",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "topCoverMoc": "Stainless Steel SS 304 (5 MM Heavy Duty)",
      "bottomPlateMoc": "Galvanized Steel / SS 304",
      "bladeMountingRingMoc": "High-Tensile Galvanized Steel Ring",
      "bearingSize": "Dual Deep Groove Heavy Duty Bearings",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "UV-Stabilized Virgin FRP Matching Sheet",
      "airflowCfm": "3,500 CFM to 7,500 CFM (Active Motorized Mode)",
      "powerConsumption": "0.37 kW to 1.1 kW (Single / 3 Phase 415V)"
    },
    "image": "/images/products/motorized-roof-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/motorized-turbo-ventilator-new.jpeg",
      "/images/products/motorized-roof-air-ventilator-new.jpeg",
      "/images/products/power-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "How does a Motorized Roof Ventilator differ from a standard wind ventilator?",
        "answer": "A standard wind ventilator relies on ambient breeze and thermal updrafts. A Motorized Roof Ventilator features an integrated electric motor and auxiliary impellers, delivering guaranteed, high-capacity forced exhaust even during zero-wind conditions or extreme furnace heat spikes."
      },
      {
        "question": "Can this motorized ventilator run continuously during high production hours?",
        "answer": "Yes. The IP55 Class F insulated motor is rated for continuous 24/7 industrial duty, ensuring reliable smoke and heat evacuation throughout multi-shift operations."
      },
      {
        "question": "What roof sheet profiles can it be mounted on?",
        "answer": "We supply custom-moulded FRP base plates matching all industrial roofing profiles including Tata Bluescope, JSW Colour Roof, Kirby, Jindal, and Asbestos corrugated sheets."
      }
    ]
  },
  {
    "id": "motorised-ventilator",
    "slug": "motorised-ventilator",
    "legacySlug": "motorised-ventilator.php",
    "name": "Motorised Ventilator",
    "h1Title": "SIMPOVENT® Motorized Ventilator - 10,000 CFM Industrial Forced Draft System",
    "metaTitle": "SIMPOVENT® Motorized Ventilator | 32\" 1.5 HP 10,000 CFM Roof Ventilator",
    "metaDescription": "SIMPOVENT® Motorized Ventilator. 32\" Size, 1.5 HP Motor, 10,000 CFM forced air exhaust with FRP base plate only. High-capacity extraction for heavy industries.",
    "focusKeywords": [
      "motorised ventilator",
      "motorized ventilator",
      "SIMPOVENT motorized ventilator",
      "motorized roof ventilator",
      "motorized turbo ventilator",
      "force ventilator",
      "power ventilator",
      "powar ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Roof Ventilator",
    "shortDescription": "High-capacity SIMPOVENT® Motorized Ventilator engineered with 32\" outer diameter, 1.5 HP industrial motor, and 10,000 CFM exhaust capacity with heavy-duty FRP base plate.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Ventilator is a powerhouse industrial roof ventilation unit engineered to deliver a verified 10,000 CFM of high-velocity air exhaust across heavy manufacturing plants, foundries, and large PEB industrial sheds.",
      "Driven by a high-torque 1.5 HP Class F insulated copper-wound electric motor, this 32\" unit provides aggressive, uninterrupted extraction of dense thermal plumes, process fumes, and airborne industrial contaminants without depending on external wind speeds.",
      "Every SIMPOVENT® Motorized Ventilator is supplied exclusively with custom-moulded, UV-stabilized heavy-duty FRP base plates tailored to match exact roofing sheet profiles (Tata Bluescope, JSW, Kirby, Asbestos, etc.), ensuring a 100% leak-proof, weatherproof factory installation."
    ],
    "keyFeatures": [
      "Guaranteed 10,000 CFM High-Volume Industrial Air Displacement",
      "High-Torque 1.5 HP Continuous-Duty TEFC IP55 Copper Motor",
      "Robust 32\" Outer Rotor Diameter with Precision Aerofoil Vanes",
      "100% FRP Only UV-Stabilized Custom Profile Base Plate",
      "Corrosion-Resistant Metallurgy with SS 304 Central Hardware",
      "Engineered for Multi-Shift Heavy Factory Environments"
    ],
    "efficiencyHighlights": [
      "Provides massive 10,000 CFM exhaust capacity to maintain statutory air changes per hour",
      "Rapidly clears high-density smoke, furnace emissions, and airborne particulate haze",
      "Maintains comfortable indoor ambient working temperatures for plant personnel",
      "Eliminates stagnant heat buildup under high-bay industrial metal ceilings"
    ],
    "workingTheory": "The 1.5 HP direct-drive motor spins a heavy-duty internal impeller assembly within the 32\" housing, creating substantial negative static pressure across the roof opening. Trapped factory air, hot process steam, and airborne emissions are rapidly suctioned upward and discharged continuously at a rate of 10,000 CFM.",
    "applications": [
      "Furnace & Induction Melting Sheds",
      "Heavy Machine Fabrication & Welding Bays",
      "Boiler Rooms & Thermal Power Ancillaries",
      "Chemical Manufacturing & Reaction Vessels",
      "Automotive Stamping & Paint Curing Plants",
      "Textile Processing & High-Humidity Dyeing Mills"
    ],
    "specs": {
      "throatDia": "32\" Inch (810 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "1.5 HP High-Torque IP55 Industrial Motor",
      "topCoverMoc": "Stainless Steel SS 304 Heavy Duty Cowl",
      "bearingMake": "Dual Sealed Heavy-Duty Deep Groove Bearings",
      "basePlateMoc": "Heavy-Duty FRP Matching Profile Base Plate (FRP only)",
      "airflowCfm": "10,000 CFM",
      "powerConsumption": "1.5 HP (415V 3-Phase / 230V Single Phase)"
    },
    "image": "/images/products/motorized-roof-air-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/motorized-roof-ventilator-new.jpeg",
      "/images/products/force-ventilator-new.jpeg",
      "/images/products/power-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What are the confirmed specifications of the SIMPOVENT® Motorized Ventilator?",
        "answer": "The SIMPOVENT® Motorized Ventilator is engineered with a 32\" outer diameter, 1.5 HP industrial motor, 10,000 CFM airflow capacity, and custom FRP matching base plates."
      },
      {
        "question": "Why is the base plate supplied in FRP only?",
        "answer": "FRP (Fiberglass Reinforced Polymer) provides superior weather resistance, zero corrosion from acid/chemical vapors, and exact structural matching to industrial corrugated roof profiles."
      },
      {
        "question": "Can it be automated with plant control panels?",
        "answer": "Yes, it can be connected to thermal switches, VFD controllers, or centralized BMS automation systems for scheduled or demand-based operation."
      }
    ]
  },
  {
    "id": "motorized-turbo-ventilator",
    "slug": "motorized-turbo-ventilator",
    "legacySlug": "motorized-turbo-ventilator.php",
    "name": "Motorized Turbo Ventilator",
    "h1Title": "Motorized Turbo Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Motorized Turbo Ventilator Manufacturer in Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Turbo Ventilator provides ultra-high volumetric CFM exhaust for industrial factory sheds, PEB warehouses, and boiler rooms across India.",
    "focusKeywords": [
      "motorized turbo ventilator",
      "motorised turbo ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "turbo air ventilator",
      "turbo vents",
      "roof mount exhaust fan",
      "force ventilator",
      "power ventilator",
      "roof extractor fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Turbo Ventilator",
    "shortDescription": "Dual-action motorized turbo ventilator integrating an aerodynamic spinning rotor cage with an electric motor booster for rapid localized heat and smoke evacuation.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Turbo Ventilator unites the aerofoil efficiency of an industrial rotary turbo head with the assured extraction power of an internal electric motor booster, delivering reliable ventilation regardless of weather or wind conditions.",
      "In standard operating conditions, the precision-curved 42 aluminium vanes rotate smoothly via natural thermal buoyancy and ambient breeze. During intense manufacturing shifts or sudden thermal surges, the integrated motor activates to create an accelerated vortex that dramatically boosts volumetric CFM air evacuation.",
      "Constructed with Hindalco 8011 aluminium alloy, heavy SS 304 center shaft assembly, and dual precision sealed bearings, the Motorized Turbo Ventilator is designed for long service life across harsh chemical, industrial, and coastal settings."
    ],
    "keyFeatures": [
      "Dual Extraction Dynamic (Wind Turbine Aerodynamics + Motorized Booster Fan)",
      "High-Torque Class F IP55 Copper-Wound Electric Motor",
      "42 Precision-Contoured Hindalco 8011 Aluminium Vanes",
      "Accelerated Vortex Suction for Instantaneous Smoke & Heat Evacuation",
      "Dual Deep-Groove Sealed Bearings for Smooth, Low-Noise Rotation",
      "Custom FRP Base Plate Tailored to Corrugated Sheet Profiles"
    ],
    "efficiencyHighlights": [
      "Assures high-velocity extraction during sudden thermal spikes and heavy production runs",
      "Low lifecycle power consumption with intelligent on-demand motorized boosting",
      "Prevents accumulation of heavy toxic fumes around robotic welding lines",
      "Drop-in replacement for existing passive 24\" turbo vents requiring powered upgrades"
    ],
    "workingTheory": "Thermal updrafts and ambient wind naturally rotate the exterior 42 aluminium turbine blades. When active motorized boosting is engaged, the internal high-pitch impeller creates a concentrated vortex core that dramatically accelerates exhaust velocity through the rotating turbo head.",
    "applications": [
      "Robotic Welding & Heavy Metal Fabrication Shops",
      "Foundries, Forging & Smelting Sheds",
      "Automotive Paint, Primer & Powder Coating Booths",
      "Diesel Generator (DG) Rooms & Compressor Housings",
      "Plastic Extrusion & Injection Molding Facilities",
      "Electronic Manufacturing & Soldering Workshops"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Heavy Duty 4-Pole TEFC Induction Motor",
      "bladeMoc": "Hindalco Aluminium 8011 Alloy",
      "topCoverMoc": "SS 304 Stainless Steel (5 MM)",
      "bearingMake": "Dual Deep Groove Sealed Bearings",
      "basePlateMoc": "UV-Resistant FRP Profile Sheet",
      "airflowCfm": "4,200 CFM to 7,200 CFM",
      "powerConsumption": "0.5 HP to 1.0 HP (Single/3-Phase)"
    },
    "image": "/images/products/motorized-turbo-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/motorized-roof-ventilator-new.jpeg",
      "/images/products/force-ventilator-new.jpeg",
      "/images/products/power-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is the warranty on the motorized turbo ventilator?",
        "answer": "We provide a 10-year structural warranty on the aluminium turbine rotor assembly and a standard 1-year replacement warranty on the electrical motor."
      },
      {
        "question": "Can the booster motor be retrofitted into existing installed ventilators?",
        "answer": "Yes, we offer modular motorized conversion kits designed to fit into standard 24\" SIMPOVENT® turbine collars."
      }
    ]
  },
  {
    "id": "power-ventilator",
    "slug": "power-ventilator",
    "legacySlug": "power-ventilator.php",
    "name": "Power Ventilator",
    "h1Title": "Power Ventilator Manufacturer & Industrial Forced Air Systems",
    "metaTitle": "Power Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Power Ventilator for heavy industrial roof air exhaust. High-CFM electric powered extraction system for steel mills, foundries, and factory sheds.",
    "focusKeywords": [
      "power ventilator",
      "powar ventilator",
      "force ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "industrial exhaust fan",
      "big exhaust fan",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Roof Ventilator",
    "shortDescription": "High-capacity powered industrial roof ventilator engineered for forced evacuation of industrial thermal plumes, corrosive fumes, and stagnant factory air.",
    "fullDescription": [
      "The SIMPOVENT® Power Ventilator is an industrial-grade, electric-driven roof exhaust unit designed for manufacturing facilities requiring guaranteed, continuous high-volume air displacement through the roof deck.",
      "Equipped with a high-torque continuous-duty motor and aerodynamically balanced impeller blades, the Power Ventilator establishes positive vertical airflow, forcefully evacuating process heat, airborne dust, and oppressive industrial fumes before they disperse across the shop floor.",
      "Housed inside a rugged, corrosion-resistant weatherproof cowl with integrated backdraft prevention, the Power Ventilator delivers uncompromising 24/7 reliability in steel mills, chemical plants, and heavy fabrication workshops."
    ],
    "keyFeatures": [
      "High-Volume Powered Air Extraction Engine for Large Industrial Sheds",
      "Aerodynamic Weatherhood Cowl with Integrated Rain Deflection Lip",
      "Heavy-Duty Class F TEFC Copper-Wound Industrial Motor",
      "Corrosion-Proof Aluminium & SS 304 Hardware Construction",
      "Precision Dynamically Balanced Impeller for Smooth, Low-Acoustic Operation",
      "Direct Roof Mounting via Custom FRP Base Plate"
    ],
    "efficiencyHighlights": [
      "Guarantees designated air changes per hour (ACH) to meet industrial safety and environmental standards",
      "Swiftly purges explosive dust, welding fumes, and paint overspray",
      "Maintains optimal working ambient temperatures for machine operators and sensitive equipment",
      "Prevents structural heat entrapment under wide-span metal roof decks"
    ],
    "workingTheory": "An industrial electric motor drives a high-pitch aerofoil impeller inside the cowl, creating substantial upward pressure differential. Hot thermal plumes, heavy smoke, and trapped factory air are suctioned upward from floor level and forcefully ejected into the atmosphere.",
    "applications": [
      "Steel Fabrication & Heavy Engineering Plants",
      "Chemical Processing & Bulk Storage Sheds",
      "Commercial Kitchen & Food Processing Exhaust Lines",
      "Die Casting, Stamping & Hot Pressing Facilities",
      "Transformer, Switchgear & Power Distribution Rooms",
      "Paper Mills & Corrugated Packaging Facilities"
    ],
    "specs": {
      "throatDia": "32\" Inch (810 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "1.5 HP High-Torque IP55 Industrial Motor",
      "topCoverMoc": "Heavy-Gauge Weatherproof Cowl",
      "basePlateMoc": "Heavy-Duty FRP Matching Base Plate (FRP only)",
      "airflowCfm": "10,000 CFM",
      "powerConsumption": "1.5 HP (415V 3-Phase / 230V Single Phase)"
    },
    "image": "/images/products/power-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/force-ventilator-new.jpeg",
      "/images/products/motorized-roof-ventilator-new.jpeg",
      "/images/products/motorized-turbo-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Can this unit be mounted on inclined metal roofs?",
        "answer": "Yes, our custom-engineered FRP base plates are moulded to the exact pitch and profile of your PEB or asbestos roof, ensuring a vertical installation with zero leakages."
      },
      {
        "question": "What is the noise level during full-speed operation?",
        "answer": "Precision dynamic balancing and aerodynamically contoured impeller blades maintain operating noise levels below 65 dBA, ensuring full compliance with OSHA industrial standards."
      }
    ]
  },
  {
    "id": "force-ventilator",
    "slug": "force-ventilator",
    "legacySlug": "force-ventilator.php",
    "name": "Force Ventilator",
    "h1Title": "Force Ventilator Manufacturer - 25,000 to 53,000 CFM High Pressure Industrial Roof Exhaust",
    "metaTitle": "Force Ventilator Manufacturer India | 25,000 - 53,000 CFM Simpovent®",
    "metaDescription": "Simpovent® Force Ventilator delivers 25,000 to 53,000 CFM high-pressure forced-draft roof extraction for severe industrial heat, dense chemical fumes, and heavy smoke.",
    "focusKeywords": [
      "force ventilator",
      "forced ventilator",
      "power ventilator",
      "powar ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "fume extractor",
      "smoke extraction",
      "big exhaust fan"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Forced Draft Ventilator",
    "shortDescription": "High-pressure, high-capacity forced-draft industrial roof ventilator delivering 25,000 to 53,000 CFM to overcome heavy static resistance and evacuate dense chemical fumes and smoke.",
    "fullDescription": [
      "The SIMPOVENT® Force Ventilator is a high-capacity, high-pressure forced-draft industrial roof ventilation system engineered for massive industrial facilities, chemical synthesis plants, and heavy fabrication workshops where high system resistance and dense airborne particulate loads demand extraordinary extraction power.",
      "Delivering an impressive airflow capacity of 25,000 to 53,000 CFM, this heavy-duty system is driven by an industrial-grade Class F insulated IP55 motor paired with high-pitch aerodynamic impellers. It generates the powerful directional draft required to forcefully pull superheated air, corrosive chemical vapors, and dense smoke plumes from deep within the building envelope.",
      "Constructed with heavy-gauge corrosion-resistant metallurgy, sealed bearing assemblies, and custom heavy-duty FRP roof base plates, the Force Ventilator ensures zero-leakage, vibration-free, and dependable operation in the most demanding manufacturing environments."
    ],
    "keyFeatures": [
      "High Airflow Capacity of 25,000 to 53,000 CFM for Massive Industrial Volumes",
      "High Static Pressure Capability to Overcome Duct & Shed Air Resistance",
      "IP55 Ingress Protected Chemical & Moisture Resistant Motor",
      "Heavy-Duty Weatherproof Cowl Housing with Rain Ingress Protection",
      "Heavy-Duty FRP Matching Base Plate for Seamless Roof Deck Integration",
      "Manufactured Under ISO 9001:2015 Strict Quality Standards"
    ],
    "efficiencyHighlights": [
      "Evacuates dense thermal plumes and chemical smoke before they disperse across worker breathing zones",
      "Delivers rapid air changes across large-footprint PEB industrial structures",
      "Prevents condensation of aggressive acid/alkaline vapors on metal roof framing",
      "Substantially lowers indoor heat indices in high-BTU manufacturing zones"
    ],
    "workingTheory": "The high-torque motor spins large-diameter aerodynamic impellers, generating intense localized negative static pressure across the roof penetration. Dense hot air, process steam, and airborne chemical gases are suctioned from floor level and forcefully ejected at high velocity into the atmosphere.",
    "applications": [
      "Chemical Synthesis, Fertilizer & Reactor Sheds",
      "Galvanizing, Pickling & Electroplating Plants",
      "Industrial Rubber Curing & Tyre Manufacturing Units",
      "Large-Scale Steel Fabrication & Plasma Cutting Bays",
      "Foundry Pouring, Smelting & Shakeout Areas",
      "Heavy Machinery Assembly & Metal Stamping Facilities"
    ],
    "specs": {
      "throatDia": "24\" (600 MM) / 36\" (900 MM) / 48\" (1200 MM)",
      "outerDia": "34\" to 56\" (860 MM to 1420 MM)",
      "motorType": "Class F High-Efficiency IP55 Induction Motor",
      "bladeMoc": "Cast Aluminium / High-Grade Stainless Steel SS 304",
      "topCoverMoc": "Heavy Duty Weatherproof Cowl Housing",
      "basePlateMoc": "Custom Heavy Duty FRP Base Plate",
      "airflowCfm": "25,000 to 53,000 CFM",
      "powerConsumption": "1.5 HP to 5.0 HP (415V 50Hz 3-Phase)"
    },
    "image": "/images/products/force-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/power-ventilator-new.jpeg",
      "/images/products/motorized-turbo-ventilator-new.jpeg",
      "/images/products/motorized-roof-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is the airflow capacity of the Force Ventilator?",
        "answer": "The SIMPOVENT® Force Ventilator provides a high-capacity airflow range of 25,000 to 53,000 CFM, specifically engineered for high-heat, high-resistance industrial facilities."
      },
      {
        "question": "Is the Force Ventilator suitable for corrosive chemical environments?",
        "answer": "Yes, we offer specialized chemical-resistant SS 316 and epoxy/FRP coated impeller options specifically engineered for acidic and alkaline vapor exhaust."
      }
    ]
  },
  {
    "id": "motorized-roof-air-ventilator",
    "slug": "motorized-roof-air-ventilator",
    "legacySlug": "motorized-roof-air-ventilator.php",
    "name": "Motorized Roof Air Ventilator",
    "h1Title": "Motorized Roof Air Ventilator Manufacturer & Industrial Supplier",
    "metaTitle": "Motorized Roof Air Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Roof Air Ventilators combine continuous wind extraction with powered motor boost for guaranteed factory airflow and rapid smoke removal.",
    "focusKeywords": [
      "motorized roof air ventilator",
      "motorized roof ventilator",
      "motorised ventilator",
      "roof mount exhaust fan",
      "roof extractor fan",
      "roof air ventilator",
      "turbo air ventilator",
      "force ventilator",
      "power ventilator",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Motorized Roof Air Ventilator",
    "shortDescription": "Precision-engineered motorized roof air ventilator combining continuous passive air circulation with high-capacity motorized suction for versatile multi-shift factory ventilation.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Roof Air Ventilator offers versatile, energy-efficient ventilation for modern manufacturing facilities that operate under fluctuating thermal and production demands throughout the day.",
      "Engineered to deliver continuous zero-cost air changes during normal operating hours via thermal convection, it features an integrated high-efficiency electric motor that can be engaged on-demand to provide powerful forced draft extraction during peak heat-generating production shifts.",
      "Built with a robust IP55 motor housing, this unit withstands aggressive industrial humidity, chemical vapors, and heavy monsoon weather with zero maintenance."
    ],
    "keyFeatures": [
      "Versatile Multi-Shift Operation (Passive Thermal Flow + Active Motorized Suction)",
      "High Airflow Capacity (24\" main - 6500)",
      "Class F TEFC IP55 Weatherproof Induction Motor",
      "Custom UV-Stabilized FRP Base Plate for All Industrial Roofing Profiles",
      "Continuous 24/7 Heavy Industrial Duty Cycle",
      "100% Leak-Proof Weatherhood Construction"
    ],
    "efficiencyHighlights": [
      "Provides guaranteed forced ventilation during dead calm, windless summer afternoons",
      "Rapidly purges process heat, steam, and airborne dust particles",
      "Reduces overall factory cooling energy costs by evacuating rising heat blankets",
      "Simple direct retrofit installation on existing industrial corrugated roof sheets"
    ],
    "workingTheory": "During low-heat hours, ambient wind and natural thermal updrafts rotate the rotor cage freely with zero power consumption. When heat loads rise during full production shifts, the electric motor is energized, spinning internal booster blades to force high-velocity air extraction through the weatherproof cowl.",
    "applications": [
      "General Engineering & Machine Fabrication Facilities",
      "Warehouse, Logistics & Material Handling Hubs",
      "Food Processing, Packaging & Sugar Mills",
      "Paper Mills & Corrugated Box Manufacturing Units",
      "Automotive Service Workshops & Assembly Garages",
      "Pharmaceutical & FMCG Packaging Halls"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 28\" Inch (710 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Class F TEFC Induction Motor (IP55)",
      "bladeMoc": "Hindalco 8011 High-Tensile Aluminium",
      "basePlateMoc": "Virgin Resin FRP Matching Base Sheet",
      "airflowCfm": "24\" main - 6500",
      "powerConsumption": "0.5 HP to 1.5 HP (220V / 415V)"
    },
    "image": "/images/products/motorized-roof-air-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/motorized-roof-ventilator-new.jpeg",
      "/images/products/motorized-turbo-ventilator-new.jpeg",
      "/images/products/power-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Can these units be installed on existing factory roofs without major alterations?",
        "answer": "Yes, our lightweight FRP base plates replace standard roof sheet panels directly, ensuring a clean retrofit without cutting main structural purlins."
      },
      {
        "question": "What is the expected operating life of the motor system?",
        "answer": "The Class F insulated IP55 motor is rated for continuous 24/7 industrial service with minimal maintenance requirements."
      }
    ]
  },
  {
    "id": "heavy-duty-industrial-exhaust-fan",
    "slug": "heavy-duty-industrial-exhaust-fan",
    "legacySlug": "heavy-duty-industrial-exhaust-fan.php",
    "name": "Heavy Duty Industrial Exhaust Fan",
    "h1Title": "Heavy Duty Industrial Exhaust Fan Manufacturer & Supplier in India",
    "metaTitle": "Heavy Duty Industrial Exhaust Fan Manufacturer | Simpovent®",
    "metaDescription": "Simpovent® manufactures heavy duty industrial exhaust fans, wall mounted exhaust fans, cone fans and roof exhaust fans for high-heat factories across India.",
    "focusKeywords": [
      "heavy duty exhaust fan",
      "heavy duty industrial exhaust fan",
      "industrial exhaust fan",
      "industrial wall mounted exhaust fan",
      "wall mounted exhaust fan",
      "wall mount big exhaust fan",
      "big exhaust fan",
      "roof mount big exhaust fan",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "fume extractor",
      "smoke extraction",
      "exhaust fan"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Heavy Duty Industrial Exhaust Fan",
    "shortDescription": "High-volume heavy-duty industrial exhaust fan engineered with dynamically balanced aerodynamic blades and a high-efficiency copper motor for rapid plant smoke and heat evacuation.",
    "fullDescription": [
      "Simpovent® Heavy Duty Industrial Exhaust Fans are built to deliver massive volumetric air displacement across large factory sheds, welding bays, boiler rooms, and PEB industrial warehouses.",
      "Equipped with aerodynamically contoured, dynamically balanced heavy-gauge aluminium/steel impellers and a heavy-duty copper-wound IP55 motor, these fans extract intense heat, airborne dust, welding fumes, and toxic chemical gases effortlessly.",
      "Designed for wall-mount or roof-mount industrial configurations, every unit undergoes rigorous vibration and dynamic balance testing at our Vasai manufacturing plant."
    ],
    "keyFeatures": [
      "High-Volume Air Displacement up to 18,000 CFM",
      "Dynamically Balanced Precision Aerodynamic Blades",
      "Heavy-Gauge Powder Coated Corrosion-Proof Steel Frame",
      "100% Copper-Wound High-Efficiency IP55 Induction Motor",
      "Optional Automatic Gravity Shutter & Safety Finger Guards",
      "Continuous 24/7 Heavy-Duty Industrial Duty Cycle"
    ],
    "efficiencyHighlights": [
      "Provides rapid air changes per hour (ACH) in severe heat zones",
      "Low acoustic noise signature with precision-balanced blades",
      "Dramatically reduces factory ambient temperature and smoke haze",
      "Significantly increases worker comfort, safety, and productivity"
    ],
    "workingTheory": "High-pitch aerodynamic impeller blades create a massive pressure differential, forcefully suctioning trapped industrial heat, welding fumes, and airborne particulate plumes from the interior and exhausting them outside.",
    "applications": [
      "Heavy Engineering & Fabrication Plants",
      "Welding, Cutting & Plasma Processing Bays",
      "Foundries, Forging & Heat Treatment Shops",
      "Commercial Warehouses & Logistics Hubs",
      "Chemical, Fertilizer & Paint Manufacturing Facilities",
      "Textile, Dyeing & Paper Manufacturing Mills"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 36\" (900mm) / 48\" (1200mm) / 54\" (1380mm)",
      "outerDia": "Up to 54\" (1380 MM)",
      "motorType": "100% Copper-Wound Class F IP55 TEFC Motor",
      "bladeMoc": "High-Tensile Stainless Steel / Aluminium / Heavy-Gauge MS",
      "bladeCount": "4 to 6 Aerodynamic Blades",
      "airflowCfm": "6,000 CFM to 28,000 CFM (High Volume Displacement)",
      "powerConsumption": "0.5 HP to 3.0 HP (Single Phase 230V / 3 Phase 415V)"
    },
    "image": "/images/products/heavy-duty-industrial-exhaust-fan-new.jpg",
    "galleryImages": [
      "/images/products/roof-exhaust-fan-simpovent.jpg",
      "/images/products/roof-mounted-exhaust-fan-new.jpg"
    ],
    "faqs": [
      {
        "question": "What sizes are available for the heavy duty industrial exhaust fan?",
        "answer": "We manufacture sizes from 18\" (450mm), 24\" (600mm), 36\" (900mm), 48\" (1200mm), up to 54\" (1380mm) with custom motor ratings based on your required CFM and room volume."
      },
      {
        "question": "Can it be supplied with automatic louvers/shutters?",
        "answer": "Yes, we provide automatic gravity backdraft louvers that open smoothly when the fan starts and close tightly when switched off to prevent dust, bird, and rain entry."
      }
    ]
  },
  {
    "id": "roof-extractor-fan",
    "slug": "roof-extractor-fan",
    "legacySlug": "roof-extractor-fan.php",
    "name": "Roof Extractor Fan",
    "h1Title": "Roof Extractor Fan Manufacturer - Industrial Powered Roof Extraction",
    "metaTitle": "Roof Extractor Fan Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Roof Extractor Fan for heavy industrial roof exhaust. High-capacity roof mount exhaust fans for PEB buildings, metal sheds, and factories.",
    "focusKeywords": [
      "roof extractor fan",
      "roof extractor",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof mounted exhaust fan",
      "roof mount big exhaust fan",
      "industrial exhaust fan",
      "heavy duty exhaust fan",
      "big exhaust fan",
      "fume extractor",
      "smoke extraction"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Industrial Roof Extractor Fan",
    "shortDescription": "High-capacity roof-mounted industrial extractor fan designed for high-volume smoke evacuation, hot gas expulsion, and continuous roof-level ventilation.",
    "fullDescription": [
      "The Simpovent® Roof Extractor Fan is designed for heavy industrial installations requiring vertical or horizontal high-velocity discharge directly through the factory roof.",
      "Featuring a heavy-gauge weatherproof cowl, aerodynamic axial/centrifugal impeller, and a Class F insulated copper motor, it efficiently eliminates high-temperature plumes before they spread across the workplace.",
      "Supplied with factory-matched UV-stabilized FRP base plates for zero-leakage integration with industrial corrugated sheet roofs."
    ],
    "keyFeatures": [
      "Direct High-Velocity Roof Air Extraction",
      "Weatherproof FRP / Galvanized Heavy Cowl Housing",
      "Dynamically Balanced High-CFM Impeller",
      "Class F IP55 Copper Wound Continuous Duty Motor",
      "Bird Guard Mesh & Backdraft Damper Flaps Included",
      "Zero-Leakage Integration with FRP Base Plates"
    ],
    "efficiencyHighlights": [
      "Directly captures and discharges rising thermal updrafts at the roof crest",
      "Prevents hazardous gas accumulation in PEB warehouse apex zones",
      "Low maintenance with sealed self-lubricating bearings"
    ],
    "workingTheory": "Hot buoyant air and process smoke naturally rise to the roof apex. The Roof Extractor Fan pulls this accumulated hot gas mass and forcefully ejects it into the atmosphere, creating a continuous convective cycle throughout the factory.",
    "applications": [
      "Industrial PEB Factory Sheds",
      "Boiler & Furnace Houses",
      "Foundries & Forging Shops",
      "Chemical Processing Plants",
      "Automotive Paint Booths",
      "Warehouses & Logistics Centers"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 30\" (750mm) / 36\" (900mm) / 48\" (1200mm)",
      "outerDia": "34\" to 56\" (860mm to 1420mm)",
      "motorType": "Class F IP55 Copper Motor",
      "bladeMoc": "Cast Aluminium / High-Grade Stainless Steel",
      "topCoverMoc": "UV-Resistant FRP / Galvanized Steel Weatherhood",
      "basePlateMoc": "Custom FRP Profile Matching Sheet",
      "airflowCfm": "5,500 CFM to 16,000 CFM",
      "powerConsumption": "0.75 kW to 3.7 kW (415V 3-Phase)"
    },
    "image": "/images/products/roof-extractor-fan-new.jpg",
    "galleryImages": [
      "/images/products/roof-mounted-exhaust-fan-new.jpg",
      "/images/products/roof-exhaust-fan-simpovent.jpg",
      "/images/products/roof-extractor-fan-new.jpg"
    ],
    "faqs": [
      {
        "question": "How is the roof extractor fan protected against rain?",
        "answer": "The deep aerodynamic cowl and internal water deflector lip completely shield the fan throat from rain and wind-driven water, even during severe monsoon downpours."
      }
    ]
  },
  {
    "id": "hvls-fan",
    "slug": "hvls-fan",
    "legacySlug": "hvls-fan.php",
    "name": "SIMPOVENT® Industrial HVLS PMSM Fan",
    "h1Title": "Industrial HVLS PMSM Fan Manufacturer & Energy Efficient Large Ceiling Fans",
    "metaTitle": "Industrial HVLS PMSM Fan Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Industrial HVLS PMSM Fans (10ft to 24ft). Direct drive permanent magnet synchronous motor, up to 15,500 CMM airflow, ultra-quiet, zero maintenance.",
    "focusKeywords": [
      "hvls fan",
      "industrial hvls fan",
      "hvls pmsm fan",
      "industrial ceiling fan",
      "large industrial ceiling fan",
      "pmsm ceiling fan",
      "high volume low speed fan",
      "big exhaust fan",
      "warehouse large ceiling fan",
      "energy saving industrial fan",
      "direct drive hvls fan",
      "simpo-7.1a hvls fan"
    ],
    "category": "hvls-fans",
    "categoryLabel": "Industrial HVLS PMSM Fan",
    "shortDescription": "High Volume Low Speed (HVLS) direct-drive PMSM industrial ceiling fan (10ft to 24ft) delivering massive 15,500 CMM airflow with ultra-low power consumption and zero oil maintenance.",
    "fullDescription": [
      "SIMPOVENT® Industrial HVLS PMSM Fans represent the pinnacle of large-space industrial airflow technology. Powered by a direct-drive Permanent Magnet Synchronous Motor (PMSM) utilizing high-coercivity Neodymium (NdFeB) rare-earth magnets, these fans eliminate traditional gearboxes entirely.",
      "Unlike conventional gearbox-driven HVLS fans that require regular oil top-ups, suffer from oil leak risks, and generate gear mesh noise, SIMPOVENT® PMSM fans operate with zero maintenance, 20X longer motor lifespan, and whisper-quiet sound levels (38 dBA to 55 dBA).",
      "Equipped with aerospace-grade Aluminium-Magnesium Alloy 6063-T6 aerodynamic airfoil blades with winglet tips, our HVLS fans generate a massive columnar breeze that covers up to 1,600 square meters per fan, reducing perceived temperatures by 5°C to 8°C while consuming only 0.75 kW to 1.5 kW of electrical power."
    ],
    "keyFeatures": [
      "Direct Drive PMSM Motor with Rare-Earth Neodymium Magnets (Zero Gearbox, Zero Oil)",
      "Aerospace-Grade 6063-T6 Extruded Aluminium-Magnesium Airfoil Blades with Winglets",
      "Massive Air Volume Output up to 15,500 CMM (547,000 CFM)",
      "Whisper-Quiet Operation (38 dBA - 55 dBA) with Stepless Variable Frequency Inverter Drive",
      "Triple Safety Mechanism: High-Pressure Forged Hub, Anti-Drop Safety Ring, Double Safety Steel Wire Ropes",
      "Saves up to 50% Electrical Energy Compared to Traditional Gearbox HVLS Fans",
      "Full Range of Sizes: 10 Ft (3.0m), 12 Ft (3.7m), 16 Ft (4.8m), 18 Ft (5.5m), 20 Ft (6.0m), and 24 Ft (7.3m)"
    ],
    "efficiencyHighlights": [
      "Covers expansive factory floor areas from 400 m² up to 1,600 m² with a gentle, non-turbulent breeze",
      "Reduces effective temperature by 5°C - 8°C through natural convective evaporative cooling",
      "Consumes only ~1.2 kW at maximum 24ft size — replacing dozens of noisy high-power wall fans",
      "Eliminates workplace humidity, floor sweat, and moisture condensation on stored pallet goods",
      "Complies with international industrial safety standards with Grade 8.8/10.9 high-tensile hardware"
    ],
    "workingTheory": "The large-diameter aerodynamic airfoil blades rotate slowly at 0-60 RPM, displacing huge volumes of air downward in a cylindrical column. When this air column contacts the floor, it moves outward radially in a 360-degree horizontal jet until hitting walls or outer perimeter, establishing continuous total-volume convective air circulation throughout the building.",
    "applications": [
      "Large PEB Manufacturing Factories & Warehouses",
      "Automobile Manufacturing & Assembly Plants",
      "Logistics Hubs, Cargo Terminals & Distribution Centers",
      "Foundries, Forging & Heavy Engineering Workshops",
      "Commercial Exhibition Centers, Sports Arenas & Hangars",
      "Food & Beverage Processing Facilities (Zero Oil Leak Compliant)",
      "Textile Mills, Spinning Units & Garment Factories"
    ],
    "specs": {
      "throatDia": "10 Ft (3.0m) to 24 Ft (7.3m) Sweep",
      "outerDia": "24 Ft (7,300 MM Max)",
      "fanDiameter": "24ft (7.3m) / 20ft (6.0m) / 18ft (5.5m) / 16ft (4.8m) / 12ft (3.7m) / 10ft (3.0m)",
      "motorType": "Direct Drive Permanent Magnet Synchronous Motor (PMSM)",
      "noiseLevel": "38 dBA to 55 dBA (Ultra-Quiet)",
      "coverageArea": "Up to 1,600 m² (17,200 sq.ft) per fan",
      "voltageRating": "220V Single Phase / 380V-415V Three Phase (50/60 Hz)",
      "protectionGrade": "IP55 / Class F Insulation",
      "maxRpm": "0 to 60 RPM (Stepless Variable Speed Inverter Control)",
      "bladeMoc": "Extruded Aluminium-Magnesium Alloy 6063-T6 with Aerodynamic Winglets",
      "bladeCount": "5 to 6 High-Lift Airfoil Blades",
      "topCoverMoc": "High-Pressure Precision Forged Aluminium Alloy Hub",
      "shaftMoc": "High-Tensile Alloy Steel with Anti-Drop Ring & Safety Cable Lock",
      "airflowCfm": "15,500 CMM (547,000 CFM Max - Model SIMPO-7.1a)",
      "powerConsumption": "0.75 kW to 1.5 kW"
    },
    "image": "/images/products/HVLS.png",
    "galleryImages": [
      "/images/products/HVLS (2).png",
      "/images/products/HVLS fan (3).jpeg",
      "/images/products/HVLS FAN (2).jpeg",
      "/images/products/hvls-industrial-fan-ceiling.jpg",
      "/images/products/hvls-pmsm-fan-motor-hub.jpg"
    ],
    "faqs": [
      {
        "question": "Why choose a PMSM HVLS fan over a traditional gearbox HVLS fan?",
        "answer": "PMSM (Permanent Magnet Synchronous Motor) fans use direct drive without any gears. This means zero gear oil changes, zero risk of oil leaking onto products/floors (essential for food/pharma), 20X longer motor life, 30-50% lower power consumption, and virtually noiseless operation (38-55 dBA vs 65+ dBA for gearbox fans)."
      },
      {
        "question": "What ceiling height is required for installing a 24ft HVLS fan?",
        "answer": "A minimum clear ceiling height of 4.5 meters (15 feet) to 6+ meters is ideal. The fan blades should hang at least 3.0 meters above the floor and 1.0 meter below the roof trusses for optimal air circulation."
      },
      {
        "question": "What safety features are included with SIMPOVENT® HVLS fans?",
        "answer": "Every SIMPOVENT® HVLS fan includes multiple redundant safety layers: high-pressure forged aluminium hub, 360-degree anti-drop safety ring, double high-tensile steel wire safety ropes directly anchored to roof beams, blade safety clips, and Grade 8.8/10.9 fasteners with Nyloc locknuts."
      },
      {
        "question": "What models are available in the SIMPOVENT® HVLS series?",
        "answer": "We offer models SIMPO-7.1a (24ft / 15500 CMM), SIMPO-7a (24ft / 13000 CMM), SIMPO-6a (20ft / 11500 CMM), SIMPO-5a (18ft / 11000 CMM), SIMPO-4a (16ft / 10000 CMM), SIMPO-3.7a (12ft / 5000 CMM), and SIMPO-3a (10ft / 4000 CMM)."
      }
    ]
  },
  {
    "id": "turbo-ventilator",
    "slug": "turbo-ventilator",
    "legacySlug": "turbo-ventilator.php",
    "name": "Turbo Ventilator",
    "h1Title": "Industrial Turbo Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbo Ventilator Manufacturer in Vasai, Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® is a premier Turbo Ventilator manufacturer in Vasai, Mumbai, Pune, Maharashtra, Gujarat, Rajasthan & India. Zero power, noiseless, ISO 9001:2015 certified.",
    "focusKeywords": [
      "Turbo Ventilator",
      "turbo air ventilator",
      "turbo vents",
      "roof ventilator",
      "Turbo Ventilator manufacturer",
      "Turbo Ventilator in Mumbai",
      "Turbo Ventilator Pune",
      "Turbo Ventilator Vasai",
      "Industrial Turbo Ventilator India",
      "wind driven ventilator",
      "roof air ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-performance wind-driven roof turbo ventilator engineered with 42 Hindalco aluminium curved vanes and dual sealed bearings for 24/7 continuous silent ventilation.",
    "fullDescription": [
      "Simpovent® (manufactured by Shreeji Sales Corporation) is a pioneer in developing high-efficiency Turbo Ventilators designed for severe industrial factory sheds, commercial warehouses, and manufacturing plants across India.",
      "The Turbo Ventilator operates completely without electricity, utilizing the natural velocity energy of ambient breeze and thermal convection to continuously exhaust accumulated process heat, smoke, humidity, and toxic fumes.",
      "Manufactured using aerospace-grade Hindalco Aluminium 8011 vanes, heavy-gauge Stainless Steel SS 304 top covers, and precision dual HCH 6001 ZZ deep-groove sealed ball bearings, the Simpovent® Turbo Ventilator guarantees zero maintenance, total rain resistance, and maximum exhaust efficiency for over a decade."
    ],
    "keyFeatures": [
      "Zero Electricity & Zero Operating Costs (100% Wind & Thermal Driven)",
      "Aerodynamic 42-blade rotor cage for smooth spin even in light breeze (< 2 km/h)",
      "Hindalco 8011 Grade High-Tensile Aluminium construction",
      "Dual HCH 6001 ZZ sealed deep-groove ball bearings with high-temp grease",
      "Heavy-duty SS 304 top cowl and bottom ring for extreme corrosion resistance",
      "100% Weatherproof & Leakproof FRP / Polycarbonate base plate matching"
    ],
    "efficiencyHighlights": [
      "Ant-acid, anti-corrosive, and anti-erosion construction for chemical sheds",
      "Zero acoustic noise and zero carbon footprint",
      "Dramatically lowers shed temperature by 4°C to 8°C",
      "Accelerates worker productivity and prevents moisture condensation on stored goods"
    ],
    "workingTheory": "The Turbo Ventilator operates by converting wind energy into centrifugal force. Spinning aerodynamic vanes create a continuous low-pressure zone at the throat, drawing hot, buoyant air and fumes upwards through the roof. Stored flywheel kinetic energy ensures non-stop air extraction even during intermittent wind lulls.",
    "applications": [
      "Boiler & Furnace Rooms",
      "Foundries & Forging Plants",
      "Chemical & Pharmaceutical Processing Units",
      "Automobile Workshops & Assembly Plants",
      "Engineering & Fabrication Sheds",
      "DG (Diesel Generator) Sheds & Compressor Rooms",
      "Warehouses, Logistics Hubs & Go-Downs",
      "Paper, Textile, Sugar & Plastic Mills"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverSize": "510 MM",
      "topCoverThickness": "5 MM (Stainless Steel SS 304)",
      "topCoverMoc": "Stainless Steel SS 304",
      "bottomPlateWidth": "505 MM",
      "bottomPlateThickness": "5 MM (Galvanized Steel)",
      "bottomPlateMoc": "Galvanized Steel / SS",
      "bladeMountingRingThickness": "5 MM (Galvanized)",
      "bladeMountingRingMoc": "Galvanized Steel",
      "bearingSize": "Dual 6001 ZZ / 6001-2RS Deep Groove",
      "bearingMake": "HCH Precision Sealed",
      "bottomRingWidth": "100 MM",
      "bottomRingMoc": "Stainless Steel SS 304",
      "basePlateSize": "2.0M x 1.0M Matching Profile",
      "basePlateMoc": "FRP / Polycarbonate UV Stabilized",
      "shaftThickness": "12.7 MM High-Tensile Steel",
      "shaftLength": "270 MM Precision Machined",
      "shaftMoc": "Stainless Steel / EN8 Steel",
      "bladeLength": "505 MM Aerodynamically Curved",
      "bladeWidth": "75 MM Precision Formed",
      "bladeThickness": "0.5 MM High-Tensile Sheet",
      "bladeMoc": "Hindalco Aluminium 8011",
      "bladeCount": "42 Specially Curved Blades",
      "airflowCfm": "2,000 to 2,500 CFM (at 5-15 km/h wind speed)",
      "powerConsumption": "0 Watts (100% Free Natural Power)"
    },
    "image": "/images/products/turbo-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "How does Simpovent® Turbo Ventilator work without electricity?",
        "answer": "Simpovent® Turbo Ventilators work on two physical principles: natural wind velocity turning the aerodynamic rotor cage to create centrifugal exhaust force, and the thermal siphon effect where lighter hot air and fumes naturally rise to the ceiling throat and get drawn out."
      },
      {
        "question": "Can rainwater enter through the spinning vanes during heavy monsoons?",
        "answer": "No. The 42 vanes are formed with precision reverse-curved water deflector lips. Centrifugal rotation forces any incoming droplets outward away from the throat, making it 100% leakproof even in heavy monsoon rains."
      },
      {
        "question": "What maintenance is required for Simpovent® Turbo Ventilators?",
        "answer": "Zero maintenance. Our dual sealed HCH deep-groove bearings are permanently lubricated with high-temperature synthetic grease and sealed against dust and moisture."
      }
    ]
  },
  {
    "id": "roof-air-ventilator",
    "slug": "roof-air-ventilator",
    "legacySlug": "roof-air-ventilator.php",
    "name": "Roof Air Ventilator",
    "h1Title": "Industrial Roof Air Ventilator Manufacturer in India",
    "metaTitle": "Roof Air Ventilator Manufacturer in Maharashtra, Gujarat, India | Simpovent®",
    "metaDescription": "Simpovent® Roof Air Ventilators provide 24/7 round-the-clock air change for manufacturing plants, PEB sheds, and warehouses without electricity.",
    "focusKeywords": [
      "Roof Air Ventilator",
      "roof ventilator",
      "roof air ventilator manufacturer",
      "industrial roof air ventilator",
      "factory roof air ventilator",
      "turbo air ventilator",
      "roof extractor"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power roof air ventilator engineered for optimal thermodynamic convection and maximum exhaust of hot industrial indoor air.",
    "fullDescription": [
      "The Simpovent® Roof Air Ventilator is engineered specifically for metal roofing sheds that suffer from severe heat buildup under direct sunlight.",
      "By continuously extracting the upper thermal layer of superheated air, it induces cool fresh ambient air through lower side wall louvers and windows.",
      "Constructed with Hindalco 8011 aluminium vanes and precision sealed bearings, it delivers high-performance ventilation without consuming any power."
    ],
    "keyFeatures": [
      "Zero Operational Cost - 100% Free Energy",
      "Hindalco 8011 Aluminium Vanes with SS 304 Reinforcement",
      "Dual 6001 ZZ Sealed Bearings for Smooth, Silent Rotation",
      "Custom FRP Base Plate Moulded for Precision Sheet Matching",
      "Weatherproof, Anti-Corrosion, and Anti-Rust Coating"
    ],
    "efficiencyHighlights": [
      "Reduces factory interior temperature by 4°C to 7°C",
      "Prevents condensation on metal roof purlins and truss structures",
      "Promotes clean indoor air quality and worker stamina"
    ],
    "workingTheory": "Thermal convection carries hot, humid air upward to the roof deck. The spinning vanes harness ambient breeze to draw this hot air outward continuously.",
    "applications": [
      "Industrial PEB Buildings",
      "Food & Beverage Packaging Units",
      "Warehouses & Distribution Facilities",
      "Automotive Service Centers",
      "Plastic & Rubber Processing Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (5 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/alu-turbo-with-frp-base-new.jpeg",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/wind-driven-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "How many roof air ventilators are required for my factory shed?",
        "answer": "The number of ventilators depends on your shed volume (L x W x H in feet) and the required Air Changes per Hour (ACH) for your industry type. Use our online CFM Calculator or contact our engineering team."
      }
    ]
  },
  {
    "id": "turbo-air-ventilator",
    "slug": "turbo-air-ventilator",
    "legacySlug": "turbo-air-ventilator.php",
    "name": "Turbo Air Ventilator",
    "h1Title": "Industrial Turbo Air Ventilator Manufacturer in India",
    "metaTitle": "Turbo Air Ventilator Manufacturer & Supplier | Simpovent®",
    "metaDescription": "Buy high-efficiency Turbo Air Ventilators from Simpovent®. Eco-friendly, silent, wind-driven ventilators engineered for heavy industries.",
    "focusKeywords": [
      "Turbo Air Ventilator",
      "turbo vents",
      "turbo ventilator",
      "roof air ventilator",
      "turbo air ventilator price",
      "industrial turbo air ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty turbo air ventilator designed for maximum exhaust velocity in humid, dusty, or high-temperature industrial environments.",
    "fullDescription": [
      "The Simpovent® Turbo Air Ventilator combines advanced aerodynamic blade design with frictionless bearing rotation to maximize CFM air extraction.",
      "Manufactured with aircraft-grade Hindalco Aluminium 8011 vanes and a Stainless Steel SS 304 top cowl, it withstands aggressive chemical atmospheres and coastal salt air.",
      "Completely noiseless and maintenance-free, it provides an eco-friendly solution to industrial factory ventilation."
    ],
    "keyFeatures": [
      "Zero Electricity Operation",
      "42 Precision Curved Hindalco Aluminium Blades",
      "Dual HCH Sealed Bearings with High-Temperature Lubrication",
      "Resistant to Acids, Alkalis, and High Humidity",
      "100% Monsoon-Proof Rain Deflector Design"
    ],
    "efficiencyHighlights": [
      "Exhausts up to 2,400 CFM per 24\" unit in normal breeze",
      "Eliminates stale odors, toxic fumes, and suffocating heat",
      "No wiring, no motor burnout risk, zero carbon footprint"
    ],
    "workingTheory": "Natural wind spins the turbine cowl. Centrifugal force throws air outward from the vane tips, creating vacuum suction at the neck that continuously pulls interior air upward.",
    "applications": [
      "Chemical & Fertilizer Plants",
      "Paper & Pulp Mills",
      "Sugar & Textile Factories",
      "Heavy Machine Workshops",
      "Commercial Warehouses"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP UV-Stabilized Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/turbo-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Can the Turbo Air Ventilator withstand cyclonic wind speeds?",
        "answer": "Yes, Simpovent® ventilators are aerodynamically balanced and structurally tested to withstand high wind speeds up to 140 km/h when anchored properly with our FRP base plates."
      }
    ]
  },
  {
    "id": "wind-driven-ventilator",
    "slug": "wind-driven-ventilator",
    "legacySlug": "wind-driven-ventilator.php",
    "name": "Wind Driven Ventilator",
    "h1Title": "Wind Driven Ventilator Manufacturer & Exporter in India",
    "metaTitle": "Wind Driven Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Wind Driven Ventilators offer 100% eco-friendly, zero-electricity ventilation for factories, mills, and PEB sheds across India.",
    "focusKeywords": [
      "Wind Driven Ventilator",
      "wind operated ventilator",
      "wind driven roof ventilator",
      "wind turbine ventilator",
      "turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Eco-friendly wind-driven industrial roof ventilator engineered for continuous passive ventilation of factory sheds and warehouses.",
    "fullDescription": [
      "Simpovent® Wind Driven Ventilators harness natural wind velocity to provide powerful, continuous exhaust ventilation for industrial buildings across India.",
      "Requiring zero electrical power, these ventilators eliminate running costs while maintaining a healthy, cool, and comfortable indoor environment for workers.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings for lifetime maintenance-free performance."
    ],
    "keyFeatures": [
      "100% Wind & Thermal Convection Powered",
      "Zero Operating Expenses & Zero Carbon Emissions",
      "Aerodynamic Curved Blades for Maximum Suction",
      "Stainless Steel SS 304 Central Shaft & Hardware",
      "Custom FRP Base Plates for Leakproof Installation"
    ],
    "efficiencyHighlights": [
      "Reduces factory internal temperature by 4°C to 8°C",
      "Exhausts toxic fumes, stale air, and excessive moisture",
      "Increases productivity and worker safety"
    ],
    "workingTheory": "Utilizes the Bernoulli effect and thermal buoyancy. Wind flowing across the rotating vanes creates lower pressure inside the cowl, drawing warm indoor air through the throat.",
    "applications": [
      "PEB Industrial Buildings",
      "Manufacturing & Assembly Plants",
      "Logistics Warehouses & Godowns",
      "Textile & Garment Mills",
      "Boiler & Generator Rooms"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Dual Bearings",
      "basePlateMoc": "FRP Corrugated Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-driven-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is the lifespan of a Simpovent® Wind Driven Ventilator?",
        "answer": "Simpovent® Wind Driven Ventilators are engineered for a service life of over 15+ years under standard industrial conditions, backed by our 10-year structural warranty."
      }
    ]
  },
  {
    "id": "wind-operate-ventilator",
    "slug": "wind-operate-ventilator",
    "legacySlug": "wind-operate-ventilator.php",
    "name": "Wind Operate Ventilator",
    "h1Title": "Wind Operated Roof Ventilator Manufacturer in India",
    "metaTitle": "Wind Operate Ventilator Manufacturer | Simpovent®",
    "metaDescription": "Reliable Wind Operate Ventilators by Simpovent®. Eco-friendly industrial roof ventilators engineered with Hindalco aluminium and SS304.",
    "focusKeywords": [
      "Wind Operate Ventilator",
      "wind operated roof ventilator",
      "wind ventilator",
      "wind driven ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty wind-operated roof ventilator engineered for smooth rotation in low-wind conditions and maximum air displacement.",
    "fullDescription": [
      "The Simpovent® Wind Operate Ventilator is designed to start rotating at extremely low breeze speeds (< 2 km/h), providing round-the-clock air evacuation.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it delivers reliable passive exhaust for factories.",
      "Backed by an ISO 9001:2015 certified manufacturing process and a 10-year warranty."
    ],
    "keyFeatures": [
      "Ultra-low starting torque (< 2 km/h wind speed)",
      "Hindalco Aluminium 8011 Alloy Vanes",
      "Dual HCH Sealed Bearings with Synthetic Grease",
      "Corrosion-Resistant Hardware & SS 304 Fasteners",
      "Custom Profile FRP Base Plates Available"
    ],
    "efficiencyHighlights": [
      "Zero electricity costs for the entire lifespan of the equipment",
      "Prevents mold, humidity, and heat entrapment under the ceiling",
      "Completely silent operation with zero acoustic vibration"
    ],
    "workingTheory": "Natural wind rotating the turbine head creates negative pressure inside the throat, pulling hot, humid factory air out continuously.",
    "applications": [
      "Engineering & Metal Workshops",
      "Plastic Injection & Molding Units",
      "Sugar Mills & Distilleries",
      "Pharmaceutical Warehouses",
      "Commercial Sheds & Garages"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Base Plate",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-operate-ventilator-new.jpg",
    "galleryImages": [
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg",
      "/images/products/turbo-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Does it work when there is no wind outside?",
        "answer": "Yes. Even in dead calm conditions, the thermal siphon effect (hot air rising due to lower density) continues to pass through the throat and spin the rotor cage."
      }
    ]
  },
  {
    "id": "natural-air-ventilator",
    "slug": "natural-air-ventilator",
    "legacySlug": "natural-air-ventilator.php",
    "name": "Natural Air Ventilator",
    "h1Title": "Natural Air Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Natural Air Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Natural Air Ventilators deliver 100% natural, green, zero-electricity ventilation for factory buildings, PEB warehouses, and mills.",
    "focusKeywords": [
      "Natural Air Ventilator",
      "natural ventilation system",
      "zero power ventilator",
      "eco roof ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power natural air ventilator designed to harness thermal updrafts and natural breezes for optimal factory air exchange.",
    "fullDescription": [
      "The Simpovent® Natural Air Ventilator operates entirely on nature's power — combining wind kinetic energy with the thermal chimney effect.",
      "Crafted with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it ensures non-stop air exchange without electrical wiring.",
      "Proven across over 100,000 industrial installations throughout India."
    ],
    "keyFeatures": [
      "100% Green & Eco-Friendly Technology",
      "Zero Operational & Electrical Costs",
      "Hindalco 8011 Aluminium Construction",
      "Weatherproof & Leakproof Installation",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Creates continuous air circulation across large manufacturing floors",
      "Reduces structural thermal stress on metal roof sheets",
      "Helps industrial facilities achieve green building (IGBC/LEED) credits"
    ],
    "workingTheory": "Thermal convection carries hot, buoyant air to the roof crest where the spinning aerodynamic vanes evacuate it into the ambient atmosphere.",
    "applications": [
      "Green Building & LEED Certified Plants",
      "Textile & Spinning Units",
      "Paper & Packaging Factories",
      "Agricultural Godowns & Grain Storage",
      "Commercial Warehouses"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP UV-Resistant Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/natural-air-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/eco-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Can natural air ventilators help in LEED / IGBC green building certifications?",
        "answer": "Yes, because they operate with 0 Watts electricity and zero greenhouse gas emissions, they earn maximum points in energy conservation and natural ventilation categories."
      }
    ]
  },
  {
    "id": "roof-ventilator",
    "slug": "roof-ventilator",
    "legacySlug": "roof-ventilator.php",
    "name": "Roof Ventilator",
    "h1Title": "Industrial Roof Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Roof Ventilator Manufacturer in Mumbai, Pune, India | Simpovent®",
    "metaDescription": "Simpovent® Roof Ventilator manufacturer in India. Premium zero-power wind ventilators for metal PEB sheds, factories, and warehouses.",
    "focusKeywords": [
      "Roof Ventilator",
      "roof ventilator manufacturer",
      "industrial roof ventilator",
      "factory roof ventilator",
      "turbo ventilator",
      "roof air ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Durable, high-efficiency industrial roof ventilator engineered with Hindalco aluminium vanes for long-term factory heat and fume extraction.",
    "fullDescription": [
      "The Simpovent® Roof Ventilator is the industry benchmark for passive factory roof ventilation in India.",
      "Engineered to withstand harsh monsoons, high ambient temperatures, and corrosive industrial atmospheres, it operates silently 24/7 without electricity.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "No Electric Power Needed (Zero Running Cost)",
      "42 Aerodynamic Hindalco Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "100% Weatherproof FRP Matching Base Plates",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Lowers indoor temperature by 4°C to 8°C",
      "Exhausts trapped heat, moisture, and chemical vapors",
      "Requires zero lubrication or maintenance"
    ],
    "workingTheory": "Converts wind velocity into centrifugal force at the turbine head, creating strong suction at the throat to extract hot indoor air.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Automotive Assembly Plants",
      "Chemical & Pharma Factories",
      "Warehouses & Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Base Plate",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/alu-turbo-with-frp-base-new.jpeg",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What makes Simpovent® roof ventilators superior to local alternatives?",
        "answer": "Simpovent® uses genuine Hindalco 8011 high-tensile aluminium, heavy-gauge SS 304 top covers, precision dual HCH sealed bearings, and UV-stabilized virgin FRP base plates, ensuring over 15+ years of trouble-free performance."
      }
    ]
  },
  {
    "id": "turbine-ventilator",
    "slug": "turbine-ventilator",
    "legacySlug": "turbine-ventilator.php",
    "name": "Turbine Ventilator",
    "h1Title": "Industrial Turbine Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Turbine Ventilator Manufacturer & Supplier | Simpovent®",
    "metaDescription": "Simpovent® Turbine Ventilators provide continuous silent exhaust for industrial sheds without electricity. ISO 9001:2015 certified.",
    "focusKeywords": [
      "Turbine Ventilator",
      "industrial turbine ventilator",
      "roof turbine ventilator",
      "wind turbine ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Precision-balanced rotating turbine ventilator for continuous, noiseless industrial factory ventilation.",
    "fullDescription": [
      "The Simpovent® Turbine Ventilator features a precision-formed aerodynamic rotor cage that spins smoothly under the slightest breeze.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings, it continuously evacuates heat and fumes.",
      "Ideal for manufacturing facilities seeking to improve workplace ergonomics and air circulation with zero power consumption."
    ],
    "keyFeatures": [
      "Zero Electricity Operation",
      "42 Precision Formed Aluminium Vanes",
      "Dual Sealed High-Grade Deep Groove Bearings",
      "Corrosion-Proof Aluminium & SS 304 Metallurgy",
      "10-Year Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Non-stop 24/7 silent ventilation",
      "Reduces factory ambient temperature significantly",
      "Eliminates humidity and condensation on structural purlins"
    ],
    "workingTheory": "Natural wind and thermal buoyancy turn the turbine vanes, generating centrifugal suction that extracts hot air through the roof neck.",
    "applications": [
      "Steel & Metal Fabrication Mills",
      "Textile & Weaving Sheds",
      "Plastic & Rubber Processing Units",
      "Automobile Workshops",
      "Commercial Storage Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/turbo-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg"
    ],
    "faqs": [
      {
        "question": "How do turbine ventilators handle high humidity and rain?",
        "answer": "The curved vane geometry spins raindrops outward via centrifugal force, while the sealed bearings are protected by internal and external seals against humidity."
      }
    ]
  },
  {
    "id": "wind-turbine-ventilator",
    "slug": "wind-turbine-ventilator",
    "legacySlug": "wind-turbine-ventilator.php",
    "name": "Wind Turbine Ventilator",
    "h1Title": "Wind Turbine Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Wind Turbine Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Wind Turbine Ventilators deliver high-performance zero-power exhaust ventilation for metal roof industrial buildings across India.",
    "focusKeywords": [
      "Wind Turbine Ventilator",
      "wind turbine roof ventilator",
      "turbine ventilator",
      "turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-capacity wind turbine ventilator engineered with 42 Hindalco aluminium curved vanes for maximum industrial thermal exhaust.",
    "fullDescription": [
      "The Simpovent® Wind Turbine Ventilator combines aerodynamic turbine design with heavy-duty construction for demanding factory environments.",
      "Spinning silently on dual sealed precision bearings, it converts natural wind energy into continuous exhaust suction without consuming any electricity.",
      "Backed by an ISO 9001:2015 certified manufacturing facility in Vasai, Maharashtra."
    ],
    "keyFeatures": [
      "100% Free Natural Power (0 Watts Electricity)",
      "42 Curved Hindalco 8011 Aluminium Vanes",
      "Stainless Steel SS 304 Top Cover & Center Shaft",
      "Dual Sealed HCH 6001 ZZ Ball Bearings",
      "Custom Profile FRP Base Plates Available"
    ],
    "efficiencyHighlights": [
      "Continuous silent thermal extraction around the clock",
      "Protects raw materials and finished goods from moisture damage",
      "Significantly improves worker comfort and productivity"
    ],
    "workingTheory": "Ambient wind drives the aerodynamic vanes, creating a low-pressure vortex that draws hot indoor air and smoke out through the roof.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Chemical Processing Plants",
      "Warehouses & Distribution Hubs",
      "Plastic & Rubber Manufacturing Units"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-driven-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is the delivery time for bulk orders across India?",
        "answer": "We maintain ready stock of standard 21\" and 24\" units and can dispatch large quantities within 24 to 48 hours directly from our Vasai factory."
      }
    ]
  },
  {
    "id": "powerless-ventilator",
    "slug": "powerless-ventilator",
    "legacySlug": "powerless-ventilator.php",
    "name": "Powerless Ventilator",
    "h1Title": "Powerless Ventilator Manufacturer & Industrial Roof Solutions",
    "metaTitle": "Powerless Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Powerless Ventilators provide zero-electricity, 100% eco-friendly industrial roof ventilation for factory sheds, PEB buildings, and warehouses.",
    "focusKeywords": [
      "Powerless Ventilator",
      "powerless roof ventilator",
      "zero power ventilator",
      "wind ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-electricity industrial roof ventilator engineered to provide non-stop thermal exhaust without running costs or electrical wiring.",
    "fullDescription": [
      "The Simpovent® Powerless Ventilator is designed for industrial enterprises committed to energy conservation, environmental sustainability, and zero operating costs.",
      "Operating completely without electricity, it utilizes ambient wind velocity and thermal convection to continuously exhaust accumulated heat and fumes.",
      "Manufactured using aerospace-grade Hindalco Aluminium 8011 vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "0 Watts Electricity Required (100% Zero Power)",
      "Aerodynamic 42-Vane Rotor Cage",
      "Hindalco 8011 Aluminium Construction",
      "Dual HCH Sealed Bearings with High-Temp Lubrication",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Zero recurring electricity bills and zero carbon emissions",
      "Lowers factory indoor temperature by 4°C to 8°C",
      "Provides silent, vibration-free exhaust 24/7"
    ],
    "workingTheory": "Operates purely on ambient breeze and thermal updrafts. The spinning vanes create a continuous low-pressure zone at the throat to pull interior air upwards.",
    "applications": [
      "PEB Warehouses & Logistics Hubs",
      "Textile & Garment Mills",
      "Engineering & Fabrication Sheds",
      "Chemical & Pharmaceutical Units",
      "Agricultural Storage Facilities"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/natural-air-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/eco-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg"
    ],
    "faqs": [
      {
        "question": "Can powerless ventilators be installed on existing factory roofs?",
        "answer": "Yes, our custom-moulded FRP base plates replace standard roof sheet profiles directly, allowing fast, seamless installation without roof restructuring."
      }
    ]
  },
  {
    "id": "eco-ventilator",
    "slug": "eco-ventilator",
    "legacySlug": "eco-ventilator.php",
    "name": "Eco Ventilator",
    "h1Title": "Eco Ventilator Manufacturer & Green Building Ventilation",
    "metaTitle": "Eco Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Eco Ventilators provide sustainable, zero-carbon, zero-power industrial roof ventilation for eco-conscious factories and warehouses.",
    "focusKeywords": [
      "Eco Ventilator",
      "eco friendly roof ventilator",
      "green roof ventilator",
      "zero carbon ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Sustainable, zero-carbon industrial roof ventilator engineered for green factories, PEB buildings, and LEED-certified facilities.",
    "fullDescription": [
      "The Simpovent® Eco Ventilator represents the ultimate in sustainable industrial roof ventilation.",
      "By eliminating all electrical power requirements, it helps manufacturing plants achieve their carbon neutrality and ESG sustainability targets.",
      "Engineered with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings for lifetime maintenance-free performance."
    ],
    "keyFeatures": [
      "100% Eco-Friendly & Zero Carbon Footprint",
      "Zero Operational Cost - 0 Watts Electricity",
      "Hindalco 8011 Grade High-Tensile Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Earns valuable green building points for IGBC, GRIHA, and LEED certifications",
      "Dramatically lowers shed temperature and improves air circulation",
      "100% recyclable aluminium and stainless steel construction"
    ],
    "workingTheory": "Natural breeze drives the lightweight rotor cage, creating vacuum suction at the throat that exhausts hot, stale indoor air without electricity.",
    "applications": [
      "LEED & Green Certified Factories",
      "Food & Beverage Processing Sheds",
      "Pharmaceutical Manufacturing Plants",
      "Textile & Garment Facilities",
      "Logistics Warehouses & Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/eco-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/natural-air-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/wind-driven-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "How does the Eco Ventilator contribute to ESG compliance?",
        "answer": "By replacing energy-intensive powered exhaust fans with zero-power Simpovent® Eco Ventilators, factories reduce Scope 2 indirect carbon emissions significantly."
      }
    ]
  },
  {
    "id": "roof-extractor",
    "slug": "roof-extractor",
    "legacySlug": "roof-extractor.php",
    "name": "Roof Extractor",
    "h1Title": "Industrial Roof Extractor Manufacturer in India | Simpovent®",
    "metaTitle": "Roof Extractor Manufacturer & Industrial Ventilation | Simpovent®",
    "metaDescription": "Simpovent® Roof Extractors provide high-efficiency passive air exhaust for metal factory sheds, PEB buildings, and warehouses across India.",
    "focusKeywords": [
      "Roof Extractor",
      "roof extractor fan",
      "industrial roof extractor",
      "factory roof extractor",
      "roof exhaust",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "High-efficiency passive industrial roof extractor designed to continuously exhaust accumulated heat, smoke, and moisture from factory sheds.",
    "fullDescription": [
      "The Simpovent® Roof Extractor is engineered for severe industrial factory environments where massive thermal buildup occurs under metal roof profiles.",
      "Operating completely without electricity, it utilizes ambient wind and thermal convection to evacuate hot air through the roof continuously.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "Continuous Natural Thermal Extraction (Zero Electricity)",
      "42 Precision Curved Hindalco Aluminium Vanes",
      "Dual HCH Sealed Precision Bearings",
      "Custom FRP Base Plate for Exact Sheet Fit",
      "10-Year Comprehensive Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Evacuates up to 2,500 CFM per unit in normal breeze",
      "Prevents condensation of corrosive moisture on metal purlins",
      "Reduces factory ambient temperature by 4°C to 8°C"
    ],
    "workingTheory": "Combines aerodynamic wind velocity with the thermal chimney effect to generate continuous vertical air extraction through the roof deck.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Chemical Processing Units",
      "Warehouses & Distribution Hubs",
      "Automobile Assembly Plants"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/alu-turbo-with-frp-base-new.jpeg",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "Is the Roof Extractor resistant to chemical corrosion?",
        "answer": "Yes, Hindalco 8011 aluminium and SS 304 hardware provide excellent resistance against chemical fumes, acid vapors, and coastal salt air."
      }
    ]
  },
  {
    "id": "wind-ventilator",
    "slug": "wind-ventilator",
    "legacySlug": "wind-ventilator.php",
    "name": "Wind Ventilator",
    "h1Title": "Wind Ventilator Manufacturer in India | Simpovent®",
    "metaTitle": "Wind Ventilator Manufacturer & Supplier India | Simpovent®",
    "metaDescription": "Simpovent® Wind Ventilators provide 100% free, zero-electricity natural ventilation for factories, mills, and warehouses across India.",
    "focusKeywords": [
      "Wind Ventilator",
      "wind roof ventilator",
      "wind driven ventilator",
      "industrial wind ventilator",
      "turbo ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-power wind-driven roof ventilator engineered with Hindalco aluminium vanes for reliable, continuous industrial ventilation.",
    "fullDescription": [
      "The Simpovent® Wind Ventilator is a reliable, cost-effective solution for industrial ventilation across India.",
      "Requiring zero electrical power, it harnesses natural wind breezes to evacuate trapped process heat, humidity, and fumes from factory sheds.",
      "Manufactured with 42 Hindalco Aluminium vanes, SS 304 top cowl, and dual sealed deep-groove ball bearings."
    ],
    "keyFeatures": [
      "Zero Operating Costs (100% Wind & Thermal Powered)",
      "Hindalco 8011 Aluminium Vanes with SS 304 Fasteners",
      "Dual HCH Sealed Precision Bearings",
      "100% Weatherproof & Leakproof FRP Matching Base",
      "10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Reduces factory interior temperature by 4°C to 8°C",
      "Operates silently 24/7 without vibrations or motor hum",
      "Completely maintenance-free sealed bearing assembly"
    ],
    "workingTheory": "Natural wind spinning the aerodynamic vanes creates negative pressure inside the cowl, drawing warm indoor air through the throat.",
    "applications": [
      "PEB Industrial Buildings",
      "Manufacturing & Assembly Plants",
      "Warehouses & Godowns",
      "Textile & Garment Mills",
      "Boiler & Generator Rooms"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) / 21\" Inch (530 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco 8011 Aluminium",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-driven-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/turbo-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "How do I get a quotation for Simpovent® Wind Ventilators?",
        "answer": "Click the 'Enquire Now' or 'Get Quotation' button on this page, or contact our sales team on WhatsApp (+91 72628 60283) with your shed dimensions for an instant factory-direct quote."
      }
    ]
  }
];
