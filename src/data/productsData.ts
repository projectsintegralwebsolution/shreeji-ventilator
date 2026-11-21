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
      "Engineered as an industrial-grade motorized roof extractor fan delivering 10,000 CFM forced exhaust, this unit combines high-velocity smoke extraction with heavy-duty IP55 weatherproofing for high-heat manufacturing plants. Manufactured at our Vasai East plant with direct supply across Mumbai, Pune, and Maharashtra, each unit is supplied with UV-stabilized FRP base plates custom-moulded to your exact corrugated roofing sheet profile.",
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
      "throatDia": "32 Inch (810 mm)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Class F Insulated IP55 Industrial Motor",
      "bladeMoc": "Fibre",
      "topCoverMoc": "Fibre",
      "bottomPlateMoc": "Fibre",
      "bladeMountingRingMoc": "High-Tensile Galvanized Steel Ring",
      "bearingSize": "Dual Deep Groove Heavy Duty Bearings",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "UV-Stabilized Virgin FRP Matching Sheet (FRP only)",
      "airflowCfm": "10,000 CFM",
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
    "h1Title": "SIMPOVENT® Motorized Ventilator - 6000 to 6500 CFM Industrial Forced Draft System",
    "metaTitle": "SIMPOVENT® Motorized Ventilator | 6000 to 6500 CFM Roof Ventilator",
    "metaDescription": "SIMPOVENT® Motorized Ventilator. 24\" Size, 6000 to 6500 CFM forced air exhaust with FRP base plate only. High-capacity extraction for heavy industries.",
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
    "shortDescription": "High-capacity SIMPOVENT® Motorized Ventilator engineered with 24\" throat diameter and 6000 to 6500 CFM exhaust capacity with heavy-duty FRP base plate.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Ventilator is a powerhouse industrial roof ventilation unit engineered to deliver 6000 to 6500 CFM of high-velocity air exhaust across heavy manufacturing plants, foundries, and large PEB industrial sheds.",
      "The 24-inch SIMPOVENT® motorised ventilator delivers continuous 6,000 to 6,500 CFM forced draft extraction powered by a high-torque Class F insulated copper motor to eliminate stagnant factory heat. Available with factory-direct dispatch across Gujarat and Maharashtra, every system includes a heavy-duty FRP-only mounting plate engineered for 100% leak-proof rooftop installation.",
      "Driven by a high-torque Class F insulated copper-wound electric motor, this unit provides aggressive, uninterrupted extraction of dense thermal plumes, process fumes, and airborne industrial contaminants without depending on external wind speeds.",
      "Every SIMPOVENT® Motorized Ventilator is supplied exclusively with custom-moulded, UV-stabilized heavy-duty FRP base plates tailored to match exact roofing sheet profiles (Tata Bluescope, JSW, Kirby, Asbestos, etc.), ensuring a 100% leak-proof, weatherproof factory installation."
    ],
    "keyFeatures": [
      "Guaranteed 6000 to 6500 CFM High-Volume Industrial Air Displacement",
      "High-Torque Continuous-Duty TEFC IP55 Copper Motor",
      "24 Inch (610 mm) Throat Diameter with Precision Aerofoil Vanes",
      "100% FRP Only UV-Stabilized Custom Profile Base Plate",
      "Corrosion-Resistant Metallurgy with SS 304 Central Hardware",
      "Engineered for Multi-Shift Heavy Factory Environments"
    ],
    "efficiencyHighlights": [
      "Provides reliable 6000 to 6500 CFM exhaust capacity to maintain statutory air changes per hour",
      "Rapidly clears high-density smoke, furnace emissions, and airborne particulate haze",
      "Maintains comfortable indoor ambient working temperatures for plant personnel",
      "Eliminates stagnant heat buildup under high-bay industrial metal ceilings"
    ],
    "workingTheory": "The direct-drive motor spins a heavy-duty internal impeller assembly, creating substantial negative static pressure across the roof opening. Trapped factory air, hot process steam, and airborne emissions are rapidly suctioned upward and discharged continuously at a rate of 6000 to 6500 CFM.",
    "applications": [
      "Furnace & Induction Melting Sheds",
      "Heavy Machine Fabrication & Welding Bays",
      "Boiler Rooms & Thermal Power Ancillaries",
      "Chemical Manufacturing & Reaction Vessels",
      "Automotive Stamping & Paint Curing Plants",
      "Textile Processing & High-Humidity Dyeing Mills"
    ],
    "specs": {
      "throatDia": "24 Inch (610 mm)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "1.5 HP High-Torque IP55 Industrial Motor",
      "bladeMoc": "Fibre",
      "topCoverMoc": "Fibre",
      "bearingMake": "Dual Sealed Heavy-Duty Deep Groove Bearings",
      "basePlateMoc": "Heavy-Duty FRP Matching Profile Base Plate (FRP only)",
      "airflowCfm": "6000 to 6500 CFM",
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
        "answer": "The SIMPOVENT® Motorized Ventilator is engineered with 24\" throat diameter, 6000 to 6500 CFM airflow capacity, and custom FRP matching base plates."
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
      "This dual-action motorized turbo ventilator pairs an aerodynamically spinning 42-blade rotor cage with an internal electric booster fan, ensuring guaranteed CFM air suction even during zero-wind conditions. Designed as an instant upgrade for passive roof vents in welding, foundry, and plastic moulding sheds, it comes backed by our 10-year structural warranty and rapid pan-India dispatch.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Heavy Duty 4-Pole TEFC Induction Motor",
      "bladeMoc": "Fibre",
      "topCoverMoc": "Fibre",
      "bearingMake": "Dual Deep Groove Sealed Bearings",
      "basePlateMoc": "UV-Resistant FRP Profile Sheet",
      "airflowCfm": "6000–6500 CFM",
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
    "h1Title": "Power Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Power Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Power Ventilator — leading manufacturer in India. 32\" electric roof exhaust (10,000 CFM) with 1.5 HP IP55 copper motor. Direct factory dispatch.",
    "focusKeywords": [
      "power ventilator",
      "power ventilator manufacturer",
      "power ventilator manufacturer in india",
      "industrial power ventilator",
      "powered roof ventilator",
      "powar ventilator",
      "force ventilator",
      "motorized roof ventilator",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "smoke extraction"
    ],
    "category": "motorized-hybrid",
    "categoryLabel": "Powered Roof Ventilator",
    "shortDescription": "Heavy-duty 32-inch electric power ventilator delivering 10,000 CFM forced roof extraction with a 1.5 HP IP55 copper motor for rapid evacuation of factory heat, smoke, and corrosive fumes.",
    "fullDescription": [
      "A Power Ventilator is an electric-driven industrial roof exhaust unit built for factories and process sheds that require guaranteed, continuous high-volume air extraction—even on still, zero-wind days or inside extreme heat zones. As an ISO 9001:2015 certified power ventilator manufacturer in India since 2005, Shreeji Sales Corporation engineers the Simpovent® Power Ventilator to purge intense process heat, dense welding smoke, and chemical fumes straight through the roof deck.",
      "Our flagship 32-inch (810 mm) power ventilator delivers a steady 10,000 CFM of forced vertical airflow, powered by a continuous-duty 1.5 HP Class F insulated IP55 TEFC copper-wound motor (available in 415V 3-phase and 230V single-phase). Precision dynamic balancing of the high-pitch aerofoil impeller eliminates structural vibration and keeps operating noise below 65 dB(A), helping plant managers maintain target Air Changes per Hour (ACH) and Factory Act ventilation compliance.",
      "Built for tough Indian industrial climates, the Simpovent® power ventilator is enclosed inside a weatherproof, UV-stabilized FRP cowl with corrosion-resistant hardware that stands up to acidic vapors, coastal humidity, and heavy monsoons. Each unit is supplied with a custom-moulded heavy-duty FRP base plate matched to your exact PEB, GI, color-coated, or asbestos roof slope for a vertical, 100% leakproof installation without weakening roof purlins.",
      "Every unit is assembled and dynamically spin-tested at our Vasai, Maharashtra manufacturing facility before dispatch. Ordering directly from an established Indian power ventilator manufacturer gives steel mills, foundries, chemical plants, commercial kitchens, and MEP contractors direct factory pricing, reliable technical sizing support, and fast pan-India delivery across Mumbai, Pune, Ahmedabad, Surat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide."
    ],
    "keyFeatures": [
      "Guaranteed 10,000 CFM Forced Roof Air Extraction (32\" / 810 MM Throat)",
      "Heavy-Duty 1.5 HP Class F IP55 TEFC 100% Copper-Wound Motor",
      "Weatherproof UV-Stabilized FRP Cowl with Rain Deflection Design",
      "Precision Dynamically Balanced Aerofoil Impeller (< 65 dB(A) Noise)",
      "Corrosion-Resistant Construction for Chemical, Coastal & Acidic Sheds",
      "Custom-Moulded Leakproof FRP Base Plate for Inclined PEB & Metal Roofs"
    ],
    "efficiencyHighlights": [
      "Guarantees fixed Air Changes per Hour (ACH) even on zero-wind days",
      "Rapidly purges dense welding fumes, explosive dust, and paint overspray",
      "Prevents structural heat buildup under wide-span PEB and metal roof decks",
      "Continuous 24/7 industrial duty cycle with low noise and minimal maintenance"
    ],
    "workingTheory": "Inside the weatherproof FRP cowl, a 1.5 HP continuous-duty IP55 electric motor drives a dynamically balanced, high-pitch aerofoil impeller to create a strong upward pressure differential. Rising thermal plumes, heavy smoke, and stale shop-floor air are forcefully suctioned upward through the 32-inch roof throat and discharged out into the open atmosphere.",
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
      "motorType": "1.5 HP High-Torque Class F IP55 TEFC Copper-Wound Motor",
      "bladeMoc": "Heavy-Duty FRP (Fibre Reinforced Plastic) Aerofoil Blades",
      "bladeCount": "High-Pitch Dynamically Balanced Aerofoil Impeller",
      "topCoverMoc": "Weatherproof UV-Stabilized FRP Cowl",
      "basePlateMoc": "Heavy-Duty FRP Matching Base Plate (Custom Roof Profile)",
      "airflowCfm": "10,000 CFM (Guaranteed Forced Exhaust)",
      "powerConsumption": "1.5 HP (1.1 kW)",
      "voltageRating": "415V 3-Phase / 230V Single-Phase (50 Hz)",
      "protectionGrade": "IP55 Ingress Protection & Class F Thermal Insulation",
      "noiseLevel": "< 65 dB(A) at Full Speed (OSHA Compliant)",
      "coverageArea": "Up to 2,000 – 3,000 Sq. Ft. per unit (Depending on ACH & heat load)"
    },
    "image": "/images/products/power-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/force-ventilator-new.jpeg",
      "/images/products/motorized-roof-ventilator-new.jpeg",
      "/images/products/motorized-turbo-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is a Power Ventilator and when should a factory choose it over a wind-driven turbo ventilator?",
        "answer": "A Power Ventilator is a motorized roof exhaust system that delivers a guaranteed 10,000 CFM regardless of outdoor wind speed. Factories should choose a Power Ventilator when dealing with intense process heat, dense welding smoke, chemical vapors, or enclosed bays where fixed Air Changes per Hour (ACH) must be maintained 24/7 even on calm, zero-wind days."
      },
      {
        "question": "Can this Power Ventilator be mounted on inclined metal or PEB roofs without leakage?",
        "answer": "Yes. Our custom-engineered, UV-stabilized FRP base plates are moulded to match the exact pitch and sheet profile of your GI, color-coated, PEB, or asbestos roof—ensuring a perfectly vertical installation with 100% leakproof monsoon protection."
      },
      {
        "question": "What is the noise level and electrical power requirement during full-speed operation?",
        "answer": "Precision dynamic balancing and aerodynamically contoured impeller blades keep operating noise below 65 dB(A), meeting industrial workplace standards. The unit runs on a 1.5 HP (1.1 kW) Class F IP55 copper-wound motor available in both 415V 3-phase and 230V single-phase options."
      },
      {
        "question": "How many Power Ventilators are needed for a factory shed, foundry, or chemical plant?",
        "answer": "One 32-inch Simpovent® Power Ventilator exhausts 10,000 CFM and typically serves 2,000 to 3,000 sq. ft. depending on ceiling height and required Air Changes per Hour (ACH). You can use our free CFM Calculator on this page or share your shed dimensions and process heat load with our engineers for an exact layout plan."
      },
      {
        "question": "Why choose Shreeji Sales Corporation (Simpovent®) as your Power Ventilator manufacturer in India?",
        "answer": "Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures and dynamically spin-tests every Simpovent® Power Ventilator in-house at our Vasai, Maharashtra facility. Buying directly from the manufacturer guarantees genuine IP55 copper-wound motors, custom-matched FRP base plates, factory-direct pricing, and fast pan-India dispatch."
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
      "Delivering massive high-pressure airflow from 25,000 to 53,000 CFM, this forced draft industrial roof ventilator is engineered to overcome severe duct and shed static resistance in chemical synthesis and heavy forging plants. Available in 36-inch, 48-inch, and 54-inch throat configurations with IP55 ingress protection, we supply direct factory consignments to major industrial belts across India.",
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
      "throatDia": "36\" (900 MM) / 48\" (1200 MM) / 54\" (1350 mm)",
      "outerDia": "34\" to 56\" (860 MM to 1420 MM)",
      "motorType": "Class F High-Efficiency IP55 Induction Motor",
      "bladeMoc": "Fibre",
      "topCoverMoc": "Fibre",
      "basePlateMoc": "Custom Heavy Duty FRP Base Plate (FRP only)",
      "airflowCfm": "25,000–53,000 CFM",
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
    "h1Title": "Motorized Roof Ventilator Manufacturer & Industrial Supplier",
    "metaTitle": "Motorized Roof Ventilator Manufacturer India | Simpovent®",
    "metaDescription": "Simpovent® Motorized Roof Ventilators combine continuous wind extraction with powered motor boost for guaranteed factory airflow and rapid smoke removal.",
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
    "categoryLabel": "Motorized Roof Ventilator",
    "shortDescription": "Precision-engineered motorized roof ventilator combining continuous passive air circulation with high-capacity motorized suction for versatile multi-shift factory ventilation.",
    "fullDescription": [
      "The SIMPOVENT® Motorized Roof Ventilator offers versatile, energy-efficient ventilation for modern manufacturing facilities that operate under fluctuating thermal and production demands throughout the day.",
      "Offering versatile multi-shift operation, this motorized roof air ventilator provides zero-cost natural ventilation during mild hours and 6,000 to 6,500 CFM powered suction during peak production shifts. Engineered with a high-efficiency TEFC motor and corrosion-resistant cowl, it provides complete monsoon protection and seamless fitment across all industrial corrugated sheet profiles.",
      "Engineered to deliver continuous zero-cost air changes during normal operating hours via thermal convection, it features an integrated high-efficiency electric motor that can be engaged on-demand to provide powerful forced draft extraction during peak heat-generating production shifts.",
      "Built with a robust IP55 motor housing, this unit withstands aggressive industrial humidity, chemical vapors, and heavy monsoon weather with zero maintenance."
    ],
    "keyFeatures": [
      "Versatile Multi-Shift Operation (Passive Thermal Flow + Active Motorized Suction)",
      "High Airflow Capacity (6000–6500 CFM)",
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
      "throatDia": "24 Inch (610 mm)",
      "outerDia": "32\" Inch (810 MM)",
      "motorType": "Class F TEFC Induction Motor (IP55)",
      "bladeMoc": "Fibre",
      "topCoverMoc": "Fibre",
      "basePlateMoc": "Virgin Resin FRP Matching Base Sheet (FRP only)",
      "airflowCfm": "6000–6500 CFM",
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
    "metaTitle": "Heavy Duty Industrial Exhaust Fan Manufacturer in India | Simpovent®",
    "metaDescription": "Leading heavy duty exhaust fan manufacturer in India. Simpovent® builds 18\"–54\" heavy duty industrial exhaust fans (up to 53,000 CFM) with IP55 copper motors.",
    "focusKeywords": [
      "heavy duty industrial exhaust fan",
      "heavy duty industrial exhaust fan manufacturer",
      "heavy duty industrial exhaust fan manufacturer in india",
      "heavy duty exhaust fan",
      "heavy duty exhaust fan manufacturer",
      "heavy duty exhaust fan manufacturer in india",
      "industrial exhaust fan manufacturer",
      "industrial exhaust fan",
      "wall mounted exhaust fan",
      "industrial wall mounted exhaust fan",
      "wall mount big exhaust fan",
      "big exhaust fan",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof extractor fan",
      "fume extractor",
      "smoke extraction",
      "exhaust fan"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Heavy Duty Industrial Exhaust Fan",
    "shortDescription": "High-capacity heavy duty industrial exhaust fan engineered by Shreeji Sales Corporation (Simpovent®) with dynamically balanced aerofoil blades and a continuous-duty IP55 copper motor for rapid factory heat, smoke, and fume evacuation.",
    "fullDescription": [
      "A Heavy Duty Industrial Exhaust Fan is a high-volume, motorized air extraction system built to continuously purge trapped process heat, dense welding smoke, airborne dust, and chemical fumes from large factory sheds and warehouses. As a trusted heavy duty exhaust fan manufacturer in India since 2005, Shreeji Sales Corporation (Simpovent®) engineers every heavy duty industrial exhaust fan for uninterrupted 24/7 operation in foundries, fabrication bays, boiler rooms, and PEB industrial buildings.",
      "Available in sweep diameters of 18\" (450 mm), 24\" (600 mm), 36\" (900 mm), 48\" (1200 mm), and 54\" (1380 mm), each Simpovent® heavy duty exhaust fan delivers powerful volumetric airflow from 12,000 CFM up to 53,000 CFM. Whether installed as a wall-mounted or roof-mounted unit, our 4- to 6-blade aerodynamic aerofoil impellers (cast aluminum alloy, stainless steel, or powder-coated MS) are dynamically balanced to ISO 1940 standards—cutting vibration, keeping noise below 65–70 dB(A), and maximizing airflow per watt.",
      "Every heavy duty industrial exhaust fan is driven by a 0.5 HP to 5.0 HP, 100% copper-wound Class F / Class H insulated TEFC induction motor sealed to IP55 protection against factory dust and water spray (available in 415V 3-phase and 230V single-phase). The heavy-gauge powder-coated CRCA or stainless-steel casing pairs with optional automatic gravity backdraft louvers that open smoothly under airflow and close tightly on shutdown to block dust, rain, and birds.",
      "Manufactured and spin-tested under ISO 9001:2015 quality controls at our Vasai, Maharashtra facility, Shreeji Sales Corporation stands among the most reliable heavy duty industrial exhaust fan manufacturers in India. Buying directly from our factory gives plant managers, HVAC consultants, and MEP contractors direct wholesale pricing, custom ACH/CFM sizing assistance, ready stock, and fast pan-India dispatch across Mumbai, Pune, Ahmedabad, Surat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide."
    ],
    "keyFeatures": [
      "High-Volume Air Displacement from 12,000 CFM up to 53,000 CFM",
      "Heavy-Duty 100% Copper-Wound Class F / IP55 TEFC Induction Motor",
      "Dynamically Balanced Aerodynamic Aerofoil Blades (Cast Aluminum / MS / SS)",
      "Heavy-Gauge Powder-Coated Corrosion-Resistant Industrial Frame",
      "Automatic Gravity Backdraft Shutters (Louvers) & Bird Protection Guard",
      "Continuous 24/7 Heavy-Duty Industrial Duty Cycle at Low Noise Levels"
    ],
    "efficiencyHighlights": [
      "Rapid Air Changes per Hour (ACH) for compliance with Factory Act ventilation standards",
      "Dynamically balanced to ISO 1940 for vibration-free, low-noise shop floor operation",
      "Significantly lowers ambient factory temperatures and clears dense welding haze",
      "High CFM-per-watt efficiency reduces overall industrial ventilation power costs"
    ],
    "workingTheory": "A heavy duty industrial exhaust fan works by generating a strong negative-pressure zone across the factory shed. Its IP55 copper-wound motor drives 4 to 6 high-pitch, dynamically balanced aerofoil blades that pull trapped industrial heat, welding fumes, and airborne dust straight toward the exhaust opening and discharge them outdoors—allowing cooler, fresh make-up air to enter through opposite louvers and doors.",
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
      "fanDiameter": "18\" (450mm) to 54\" (1380mm) Sweep Size",
      "outerDia": "Up to 54\" (1380mm) Heavy Square / Circular Casing",
      "motorType": "100% Copper-Wound Class F / IP55 TEFC Induction Motor (Continuous Duty)",
      "bladeMoc": "Die-Cast Aerofoil Aluminum Alloy / Heavy-Duty Stainless Steel / Powder-Coated MS",
      "bladeCount": "4 to 6 Aerodynamic High-Pitch Airfoil Blades",
      "airflowCfm": "12,000 to 53,000 CFM (High-Volume Air Displacement)",
      "powerConsumption": "0.5 HP to 5.0 HP (0.37 kW to 3.7 kW)",
      "voltageRating": "415V 3-Phase / 230V Single-Phase (50 Hz / 60 Hz)",
      "protectionGrade": "IP55 Ingress Protection (Water & Dust Resistant)",
      "maxRpm": "700 RPM to 1440 RPM (Direct Drive / Heavy Belt Drive)",
      "noiseLevel": "< 65–70 dB(A) at 1.5 meters (Precision Balanced)",
      "coverageArea": "Up to 3,500 – 6,000 Sq. Ft. per unit (Depending on ACH & Ceiling Height)"
    },
    "image": "/images/products/heavy-duty-industrial-exhaust-fan-new.jpg",
    "galleryImages": [
      "/images/products/roof-exhaust-fan-simpovent.jpg",
      "/images/products/roof-mounted-exhaust-fan-new.jpg"
    ],
    "faqs": [
      {
        "question": "What is a Heavy Duty Industrial Exhaust Fan, and why choose Shreeji Sales Corporation as your manufacturer in India?",
        "answer": "A Heavy Duty Industrial Exhaust Fan is a high-CFM motorized extractor built for continuous 24/7 removal of factory heat, welding smoke, and chemical fumes. Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation is a leading heavy duty exhaust fan manufacturer in India—producing Simpovent® fans in-house in Vasai, Maharashtra with 100% copper-wound IP55 motors, ISO 1940 balanced impellers, direct factory pricing, and fast pan-India dispatch."
      },
      {
        "question": "What sweep sizes and CFM airflow ratings are available for heavy duty industrial exhaust fans?",
        "answer": "We manufacture heavy duty industrial exhaust fans in sweep sizes of 18\" (450mm), 24\" (600mm), 36\" (900mm), 48\" (1200mm), and 54\" (1380mm), delivering air displacement capacities from 12,000 CFM up to 53,000 CFM (0.5 HP to 5.0 HP). Our engineering team helps factory owners, MEP engineers, and HVAC consultants calculate exact Air Changes per Hour (ACH) based on shed volume and heat load."
      },
      {
        "question": "Can these heavy duty exhaust fans withstand severe factory heat, chemical fumes, and continuous 24/7 operation?",
        "answer": "Yes. Simpovent® heavy duty industrial exhaust fans are engineered for continuous 24/7 duty in foundries, chemical plants, welding bays, and boiler houses. They feature Class F / Class H insulated IP55 TEFC motors protected against dust and water spray, die-cast aluminum or stainless-steel aerofoil blades, and optional automatic gravity backdraft louvers that block rain, dust, and birds when switched off."
      },
      {
        "question": "How are heavy duty exhaust fans packed and dispatched across India?",
        "answer": "Every fan undergoes vibration testing, electrical safety checks, and dynamic balancing before leaving our Vasai, Maharashtra plant. We pack units in reinforced wooden and corrugated crating with transit insurance, maintain ready stock for popular sweep sizes, and deliver nationwide across Mumbai, Pune, Gujarat, Delhi NCR, Tamil Nadu, Karnataka, and all Indian industrial corridors."
      }
    ]
  },
  {
    "id": "roof-extractor-fan",
    "slug": "roof-extractor-fan",
    "legacySlug": "roof-extractor-fan.php",
    "name": "Roof Extractor Fan",
    "h1Title": "Roof Extractor Fan Manufacturer & Supplier in India",
    "metaTitle": "Roof Extractor Fan Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Roof Extractor Fan — leading manufacturer in India. High-CFM (25,000–53,000 CFM) industrial roof exhaust fans with IP55 copper motors & FRP bases.",
    "focusKeywords": [
      "roof extractor fan",
      "roof extractor fan manufacturer",
      "roof extractor fan manufacturer in india",
      "industrial roof extractor fan",
      "roof extractor",
      "roof mount exhaust fan",
      "roof exhaust fan",
      "roof mounted exhaust fan",
      "roof mount big exhaust fan",
      "fume extractor",
      "smoke extraction"
    ],
    "category": "industrial-exhaust",
    "categoryLabel": "Industrial Roof Extractor Fan",
    "shortDescription": "High-capacity 24\" to 54\" industrial roof extractor fan delivering 25,000–53,000 CFM forced roof-deck discharge for rapid smoke, heat blanket, and chemical fume evacuation.",
    "fullDescription": [
      "A Roof Extractor Fan is a heavy-duty, motorized roof-mounted exhaust unit engineered to capture rising heat blankets, dense smoke, and chemical fumes at the roof apex and discharge them vertically into the open atmosphere. As an ISO 9001:2015 certified roof extractor fan manufacturer in India since 2005, Shreeji Sales Corporation builds the Simpovent® Roof Extractor Fan for high-volume industrial sheds where passive ventilation alone cannot keep pace with intense process heat.",
      "Available in throat diameters of 24\" (600 mm), 30\" (750 mm), 36\" (900 mm), 48\" (1200 mm), and 54\" (1380 mm), our roof extractor fans deliver massive volumetric airflow from 25,000 CFM up to 53,000 CFM. Powered by continuous-duty 0.75 kW to 3.7 kW Class F insulated IP55 100% copper-wound motors (415V 3-phase) driving dynamically balanced aerofoil impellers, each unit removes oppressive heat and hazardous gases before they recirculate down to the shop floor.",
      "Designed for harsh Indian monsoons and corrosive industrial atmospheres, every unit features a deep weatherproof UV-stabilized FRP cowl with an internal rain-deflector lip, bird guard mesh, and automatic backdraft damper flaps. Each fan is supplied with a factory-matched UV-stabilized FRP base plate contoured to Tata Bluescope, JSW, GI, PEB, or asbestos roofing sheets—ensuring zero-leakage roof integration without modifying structural purlins.",
      "Manufactured, vibration-checked, and dynamically balanced at our Vasai, Maharashtra facility, Simpovent® roof extractor fans serve PEB warehouses, boiler houses, foundries, chemical plants, and automotive paint booths across India. Partnering directly with an established Indian roof extractor fan manufacturer gives plant engineers and MEP contractors transparent factory pricing, tailored CFM sizing, and fast dispatch across Mumbai, Pune, Ahmedabad, Surat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide."
    ],
    "keyFeatures": [
      "High-Velocity Vertical Roof Extraction (25,000 to 53,000 CFM)",
      "Available in 24\", 30\", 36\", 48\", and 54\" Throat Diameters",
      "Weatherproof UV-Stabilized FRP Cowl with Internal Rain Deflector Lip",
      "Class F IP55 100% Copper-Wound Continuous-Duty Industrial Motor",
      "Integrated Bird Guard Mesh & Backdraft Damper Flaps Included",
      "Custom FRP Base Plates Matched to Tata Bluescope, JSW & PEB Roofs"
    ],
    "efficiencyHighlights": [
      "Captures and discharges trapped thermal blankets directly at the roof crest",
      "Prevents hazardous smoke and chemical gas buildup in PEB apex zones",
      "Dynamically balanced aerofoil impeller for low-vibration 24/7 operation",
      "Low-maintenance sealed bearings with weatherproof monsoon protection"
    ],
    "workingTheory": "Hot, buoyant air, process smoke, and fumes naturally rise and collect at the roof apex of an industrial building. The Roof Extractor Fan's IP55 motor spins a dynamically balanced aerofoil impeller inside the weatherproof roof cowl, pulling this trapped hot gas mass straight up through the roof throat and forcefully discharging it away from the roofline.",
    "applications": [
      "Industrial PEB Factory Sheds",
      "Boiler & Furnace Houses",
      "Foundries & Forging Shops",
      "Chemical & Fertilizer Processing Plants",
      "Automotive Paint Booths & Assembly Lines",
      "Large Warehouses & Logistics Centers"
    ],
    "specs": {
      "throatDia": "24\" (600mm) / 30\" (750mm) / 36\" (900mm) / 48\" (1200mm) / 54\" (1380mm)",
      "outerDia": "34\" to 56\" (860mm to 1420mm)",
      "motorType": "Class F IP55 100% Copper-Wound TEFC Continuous-Duty Motor",
      "bladeMoc": "Heavy-Duty FRP (Fibre Reinforced Plastic) Aerofoil Impeller",
      "bladeCount": "4 to 6 Dynamically Balanced High-Pitch Aerofoil Blades",
      "topCoverMoc": "Weatherproof UV-Stabilized Heavy-Duty FRP Cowl",
      "basePlateMoc": "Custom UV-Stabilized FRP Profile Matching Sheet (Tata Bluescope / JSW / PEB)",
      "airflowCfm": "25,000 to 53,000 CFM (High-Volume Roof Discharge)",
      "powerConsumption": "0.75 kW to 3.7 kW (1.0 HP to 5.0 HP)",
      "voltageRating": "415V 3-Phase / 230V Single-Phase (50 Hz)",
      "protectionGrade": "IP55 Ingress Protection & Class F Insulation",
      "noiseLevel": "< 65–70 dB(A) (Dynamically Balanced Operation)",
      "coverageArea": "Up to 3,500 – 6,000 Sq. Ft. per unit (Depending on ACH & heat load)"
    },
    "image": "/images/products/roof-extractor-fan-new.jpg",
    "galleryImages": [
      "/images/products/roof-mounted-exhaust-fan-new.jpg",
      "/images/products/roof-exhaust-fan-simpovent.jpg",
      "/images/products/roof-extractor-fan-new.jpg"
    ],
    "faqs": [
      {
        "question": "What is a Roof Extractor Fan and where is it used in industrial buildings?",
        "answer": "A Roof Extractor Fan is a high-volume electric exhaust fan mounted directly on a factory or warehouse roof to pull out trapped ceiling heat, smoke, and chemical fumes. It is widely used in PEB industrial sheds, boiler houses, foundries, chemical plants, and automotive paint booths where continuous forced air exchange is required."
      },
      {
        "question": "How is a Roof Extractor Fan protected against heavy monsoon rain and backdraft?",
        "answer": "Every Simpovent® Roof Extractor Fan features a deep aerodynamic FRP weather cowl with an internal water-deflector lip that shields the throat from wind-driven rain, even during heavy Indian monsoons. Integrated backdraft damper flaps close when the fan is off to block dust, rain, and birds."
      },
      {
        "question": "What sizes and CFM airflow capacities are available for Simpovent® Roof Extractor Fans?",
        "answer": "We manufacture Roof Extractor Fans in 24\" (600 mm), 30\" (750 mm), 36\" (900 mm), 48\" (1200 mm), and 54\" (1380 mm) throat diameters, delivering 25,000 to 53,000 CFM with 0.75 kW to 3.7 kW IP55 copper-wound motors tailored to your shed volume and required Air Changes per Hour (ACH)."
      },
      {
        "question": "Will the Roof Extractor Fan fit Tata Bluescope, JSW, PEB, or asbestos roofs without leakage?",
        "answer": "Yes. Each unit is supplied with a custom-moulded, UV-stabilized FRP base plate matched precisely to Tata Bluescope, JSW, GI corrugated, PEB trapezoidal, or asbestos sheet profiles—allowing quick, 100% leakproof installation without cutting roof purlins."
      },
      {
        "question": "Why choose Shreeji Sales Corporation (Simpovent®) as your Roof Extractor Fan manufacturer in India?",
        "answer": "Founded in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures and dynamically balances every Simpovent® Roof Extractor Fan in-house at our Vasai, Maharashtra plant. Buying directly from the manufacturer ensures genuine IP55 copper motors, custom-matched FRP bases, wholesale factory pricing, and fast pan-India dispatch."
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
      "Driven by an advanced direct-drive PMSM motor with rare-earth Neodymium magnets (zero gearbox, zero oil leakage), this industrial HVLS fan delivers up to 15,500 CMM (547,000 CFM) of massive, silent airflow. Available from 10-ft to 24-ft sweeps covering up to 1,700 m² per unit, it reduces floor temperatures by 5°C to 8°C while saving up to 50% electrical energy compared to traditional ceiling fans.",
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
      "throatDia": "8 Ft (2.4m) , 10 Ft (3.0m), 24 Ft (7.3m) Sweep",
      "outerDia": "24 Ft (7,300 MM Max)",
      "fanDiameter": "24ft (7.3m) / 20ft (6.0m) / 18ft (5.5m) / 16ft (4.8m) / 12ft (3.7m) / 10ft (3.0m) / 8ft (2.4m)",
      "motorType": "Direct Drive Permanent Magnet Synchronous Motor (PMSM)",
      "noiseLevel": "38 dBA to 55 dBA (Ultra-Quiet)",
      "coverageArea": "Up to 1,700 m² (18,300 sq.ft) per fan",
      "voltageRating": "220V Single Phase / 380V-415V Three Phase (50/60 Hz)",
      "protectionGrade": "IP55 / Class F Insulation",
      "maxRpm": "0 to 115 RPM (Stepless Variable Speed Inverter Control)",
      "bladeMoc": "Extruded Aluminium-Magnesium Alloy 6063-T6 with Aerodynamic Winglets",
      "bladeCount": "5 to 6 High-Lift Airfoil Blades",
      "topCoverMoc": "High-Pressure Precision Forged Aluminium Alloy Hub",
      "shaftMoc": "High-Tensile Alloy Steel with Anti-Drop Ring & Safety Cable Lock",
      "airflowCfm": "4,000 to 15,500 CMM (Up to 547,000 CFM Max)",
      "powerConsumption": "0.37 kW to 1.5 kW (0.5 HP to 2.0 HP)"
    },
    "image": "/images/products/HVLS.png",
    "galleryImages": [
      "/images/products/HVLS (2).png",
      "/images/products/HVLS fan (3).jpeg",
      "/images/products/HVLS FAN (2).jpeg"
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
    "h1Title": "Turbo Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbo Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Turbo Ventilator — leading manufacturer in India. Zero-power 24\" roof vents (2,500 CFM), 42 Hindalco blades, 10-year warranty & fast dispatch.",
    "focusKeywords": [
      "turbo ventilator",
      "turbo ventilator manufacturer",
      "turbo ventilator manufacturer in india",
      "industrial turbo ventilator",
      "roof turbo ventilator",
      "turbo air ventilator",
      "turbo vents",
      "turbo ventilator price in india",
      "wind driven turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-electricity 24-inch industrial turbo ventilator with 42 Hindalco 8011 aluminium vanes, SS 304 top cowl, and dual HCH 6001 ZZ sealed bearings for silent 24/7 factory heat extraction.",
    "fullDescription": [
      "A Turbo Ventilator is a wind-driven, zero-electricity roof exhaust system engineered to pull trapped heat, humidity, smoke, and stale fumes out of industrial sheds and warehouses around the clock. As an ISO 9001:2015 certified turbo ventilator manufacturer in India since 2005, Shreeji Sales Corporation builds the Simpovent® Turbo Ventilator to deliver dependable, noiseless natural ventilation across demanding Indian factory floors without adding a rupee to your power bills.",
      "Our flagship 24-inch turbo ventilator moves 2,000 to 2,500 CFM of hot ceiling air—helping drop indoor shed temperatures by 4°C to 8°C while protecting stored inventory from moisture condensation. Engineered with 42 precision-formed Hindalco Aluminium Alloy 8011 blades (505 mm long, 0.5 mm thick) mounted on a 12.7 mm machined central shaft and dual HCH 6001 ZZ deep-groove sealed bearings, the rotor starts spinning smoothly in light breezes under 2 km/h and keeps drawing air through brief wind lulls using stored flywheel momentum.",
      "Built for tough Indian summers, heavy monsoons, and corrosive chemical environments, every Simpovent® turbo ventilator combines a heavy-gauge Stainless Steel SS 304 top cowl and bottom ring with custom UV-stabilized FRP or Polycarbonate base plates (2.0M x 1.0M) matched to GI, color-coated, PEB, or asbestos roofs. Reverse-curved rain-deflector vane lips fling rainwater outward for 100% leakproof performance, and every unit is backed by a 10-year structural warranty with zero routine maintenance.",
      "Manufactured and dynamically spin-tested at our Vasai, Maharashtra facility, Simpovent® turbo ventilators are trusted across boiler rooms, foundries, DG sheds, textile mills, and logistics warehouses throughout Mumbai, Pune, Gujarat, Rajasthan, Delhi NCR, Chennai, Hyderabad, Bengaluru, and pan-India. Buying directly from an established Indian turbo ventilator manufacturer guarantees genuine raw materials, ready stock for same-day dispatch, and factory-direct pricing."
    ],
    "keyFeatures": [
      "Zero Electricity & Zero Operating Costs (100% Wind & Thermal Driven)",
      "Aerodynamic 42-Blade Rotor Cage — Spins Smoothly in Light Breeze (< 2 km/h)",
      "Virgin Hindalco 8011 High-Tensile Aluminium Construction (0.5 MM Blades)",
      "Dual HCH 6001 ZZ Sealed Deep-Groove Bearings with High-Temp Grease",
      "Heavy-Gauge SS 304 Top Cowl & Bottom Ring for Corrosion Resistance",
      "100% Monsoon-Proof FRP / Polycarbonate Base Plate & 10-Year Warranty"
    ],
    "efficiencyHighlights": [
      "Exhausts 2,000 to 2,500 CFM per 24\" unit at zero electrical cost",
      "Anti-acid, anti-corrosive, and anti-erosion build for chemical & coastal sheds",
      "Lowers indoor factory and warehouse temperature by 4°C to 8°C",
      "Zero acoustic noise (0 dB), zero carbon footprint, and prevents roof condensation"
    ],
    "workingTheory": "A turbo ventilator converts natural outdoor wind energy into centrifugal exhaust force. As ambient breeze turns the 42 curved aerodynamic blades on frictionless dual HCH 6001 ZZ bearings, air is flung outward from the vane tips—creating a continuous low-pressure zone at the 24-inch throat that pulls hot, buoyant indoor air and fumes upward through the roof. Stored flywheel kinetic energy keeps the rotor spinning smoothly even during brief wind lulls.",
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
      "throatDia": "24\" Inch (610 MM) — Also available in 18\" & 21\"",
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
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "bladeCount": "42 Specially Curved Blades",
      "airflowCfm": "2,000 to 2,500 CFM (at 5-15 km/h wind speed)",
      "coverageArea": "250 to 350 Sq. Ft. per 24\" unit (Depending on roof height & heat load)",
      "noiseLevel": "0 dB (Completely Silent Operation)",
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
        "question": "How does a Simpovent® Turbo Ventilator work without electricity?",
        "answer": "Simpovent® Turbo Ventilators work on two natural principles: ambient wind velocity spins the 42-blade aerodynamic rotor cage to create centrifugal exhaust suction, and the thermal siphon effect causes hot air and fumes to rise to the roof throat where they are continuously drawn out—operating 24/7 with 0 Watts of electricity."
      },
      {
        "question": "How many 24-inch Turbo Ventilators are required for a factory shed or warehouse?",
        "answer": "One 24-inch Simpovent® Turbo Ventilator exhausts 2,000 to 2,500 CFM and effectively covers 250 to 350 sq. ft. of floor space in standard warehouses and industrial sheds. High-heat zones like boiler rooms, foundries, or DG sheds require closer spacing—use our CFM Calculator on this page or share your shed dimensions for an exact unit count."
      },
      {
        "question": "Can rainwater enter through the spinning vanes during heavy monsoons?",
        "answer": "No. The 42 vanes are formed with precision reverse-curved water deflector lips. Centrifugal rotation forces any incoming droplets outward away from the throat, and our custom-moulded FRP/Polycarbonate base plates seal tightly to your roof sheet for 100% leakproof monsoon protection."
      },
      {
        "question": "What maintenance is required for Simpovent® Turbo Ventilators?",
        "answer": "Zero routine maintenance is required. Our dual sealed HCH 6001 ZZ deep-groove bearings are permanently lubricated with high-temperature synthetic grease and sealed against industrial dust, fumes, and moisture."
      },
      {
        "question": "Why choose Shreeji Sales Corporation (Simpovent®) as your Turbo Ventilator manufacturer in India?",
        "answer": "Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures and dynamically spin-tests every Simpovent® Turbo Ventilator in-house at our Vasai, Maharashtra facility using virgin Hindalco 8011 aluminium and SS 304 hardware. Buying directly from the manufacturer gives you a 10-year structural warranty, factory-direct pricing, ready stock, and fast pan-India dispatch."
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
      "Engineered for metal PEB factory sheds, this zero-power industrial roof air ventilator continuously exhausts rising thermal blankets to lower ambient shop-floor temperatures by 4°C to 8°C. Constructed with heavy-gauge SS 304 top cowls and corrosion-proof aluminium vanes, it provides 100% monsoon storm protection across Maharashtra, Gujarat, and pan-India sites.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (5 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
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
    "h1Title": "Turbo Air Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbo Air Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Turbo Air Ventilator — leading manufacturer in India. Zero-power 24\" roof vents (2,500 CFM), Hindalco Aluminium & SS 304 build, ISO 9001 quality.",
    "focusKeywords": [
      "turbo air ventilator",
      "turbo air ventilator manufacturer",
      "turbo air ventilator manufacturer in india",
      "industrial turbo air ventilator",
      "turbo ventilator",
      "turbo vents",
      "roof air ventilator",
      "turbo air ventilator price",
      "wind driven turbo air ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Zero-electricity industrial turbo air ventilator delivering 2,000–2,500 CFM continuous exhaust with 42 Hindalco Aluminium 8011 vanes, SS 304 top cowl, and silent dual HCH sealed bearings.",
    "fullDescription": [
      "A Turbo Air Ventilator is a wind-driven, zero-electricity roof exhaust system designed to continuously pull trapped heat, humidity, stale air, and industrial fumes out of factories and warehouses 24/7. As a trusted turbo air ventilator manufacturer in India since 2005, Shreeji Sales Corporation engineers the Simpovent® Turbo Air Ventilator to keep heavy industrial sheds cooler, drier, and safer without adding a single rupee to your monthly power bill.",
      "Built for demanding Indian factory conditions, each Simpovent® turbo air ventilator features 42 aerodynamically curved Hindalco Aluminium Alloy 8011 vanes paired with a corrosion-proof Stainless Steel SS 304 top cowl and central shaft. Precision dual HCH sealed deep-groove bearings allow the turbine head to spin smoothly even in gentle breezes under 2 km/h, while custom-moulded, UV-stabilized FRP base plates fit seamlessly onto GI, color-coated, PEB, and asbestos roofs without cutting or weakening existing roof purlins.",
      "In real shop-floor operation, a single 24-inch turbo air ventilator exhausts 2,000 to 2,500 CFM of hot stagnant air, helping lower indoor factory temperatures by 4°C to 8°C and eliminating suffocating heat pockets, chemical odors, and airborne dust. Its precision rain-deflector vane geometry keeps the system 100% leakproof during heavy Indian monsoons, while completely silent, motor-free construction eliminates wiring hazards, motor burnouts, and routine maintenance.",
      "Every unit is manufactured and dynamically balanced under ISO 9001:2015 quality controls at our plant in Vasai, Maharashtra. Whether you are outfitting a new PEB warehouse or upgrading an existing chemical, textile, or engineering plant, partnering directly with an established Indian turbo air ventilator manufacturer gives you factory-direct pricing, ready stock in 18\", 21\", and 24\" sizes, and reliable pan-India dispatch across Mumbai, Pune, Gujarat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide."
    ],
    "keyFeatures": [
      "100% Zero-Electricity Wind & Thermal Convection Operation",
      "42 Precision-Curved Hindalco Aluminium Alloy 8011 Vanes",
      "Stainless Steel SS 304 Top Cowl & Central Shaft for Corrosion Resistance",
      "Dual HCH Sealed Deep-Groove Bearings with High-Temperature Lubrication",
      "Custom UV-Stabilized FRP Base Plates for Leakproof Roof Fitment",
      "100% Monsoon-Proof Rain Deflector Design — Silent & Maintenance-Free"
    ],
    "efficiencyHighlights": [
      "Exhausts 2,000 to 2,500 CFM per 24\" unit in normal ambient breeze",
      "Reduces indoor factory and warehouse temperature by 4°C to 8°C",
      "Eliminates trapped heat, humidity, stale odors, and airborne fumes 24/7",
      "Zero electricity bills, no wiring or motor burnout risk, zero carbon footprint"
    ],
    "workingTheory": "A turbo air ventilator works on two natural physical principles: wind-driven centrifugal force and the thermal stack effect. As natural outdoor wind blows across the 42 curved aerodynamic vanes, the turbine cowl rotates effortlessly on frictionless sealed bearings, throwing air outward from the vane tips. This creates a continuous low-pressure vacuum at the ventilator throat that draws rising hot air, moisture, and industrial fumes upward and out of the building—while cooler fresh air enters through lower doors, louvers, or windows.",
    "applications": [
      "PEB Warehouses & Logistics Hubs",
      "Chemical & Fertilizer Plants",
      "Paper, Pulp & Packaging Mills",
      "Sugar, Textile & Spinning Factories",
      "Heavy Machine & Fabrication Workshops",
      "Food Processing, Pharma & Commercial Sheds"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) — Also available in 18\" & 21\"",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (Corrosion-Proof)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "bladeCount": "42 Precision Aerodynamic Curved Vanes",
      "shaftMoc": "Stainless Steel SS 304",
      "bearingMake": "Dual HCH Precision Sealed Deep-Groove Bearings",
      "bearingSize": "6002ZZ / 6202ZZ Sealed Maintenance-Free",
      "basePlateMoc": "UV-Stabilized Leakproof FRP Sheet (Custom Roof Profile)",
      "airflowCfm": "2,000 to 2,500 CFM per unit",
      "coverageArea": "250 to 350 Sq. Ft. per 24\" unit (Depending on height & heat load)",
      "noiseLevel": "0 dB (Completely Silent Operation)",
      "powerConsumption": "0 Watts (100% Wind & Thermal Convection Driven)"
    },
    "image": "/images/products/turbo-air-ventilator-new.png",
    "galleryImages": [
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is a Turbo Air Ventilator and how does it work without electricity?",
        "answer": "A Turbo Air Ventilator is a natural, wind-powered roof exhaust turbine installed on industrial sheds and warehouses. Even a light breeze under 2 km/h spins its 42 curved aerodynamic blades, creating centrifugal suction that continuously pulls rising hot air, humidity, and fumes out through the roof—operating 24/7 with zero electricity and zero running cost."
      },
      {
        "question": "How many Turbo Air Ventilators are required for a factory shed or warehouse?",
        "answer": "As a practical engineering rule, one 24-inch Simpovent® Turbo Air Ventilator effectively ventilates 250 to 350 sq. ft. of floor area in standard warehouses, and closer spacing is recommended for high-heat processes like foundries or welding shops. You can also use our free CFM Ventilation Calculator on this page or share your shed length, width, and height with our engineers for an exact unit count."
      },
      {
        "question": "Which material (Aluminium vs SS 304) is best for a Turbo Air Ventilator, and will it fit my roof?",
        "answer": "Hindalco Aluminium Alloy 8011 vanes paired with an SS 304 top cowl offer the ideal balance of lightweight low-wind rotation and long-term rust resistance for most Indian factories. For highly corrosive chemical or coastal plants, full SS 304 construction is recommended. Every unit is supplied with a custom-moulded UV-stabilized FRP base plate matched to your exact roof sheet profile (GI, color-coated, PEB, or asbestos) for 100% leakproof installation."
      },
      {
        "question": "Why choose Simpovent® (Shreeji Sales Corporation) as your Turbo Air Ventilator manufacturer in India?",
        "answer": "Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures Simpovent® Turbo Air Ventilators in-house at our Vasai, Maharashtra facility with virgin Hindalco aluminium, genuine SS 304 hardware, and dual HCH sealed bearings. Buying directly from the manufacturer ensures consistent dynamic balancing, wholesale factory pricing, ready stock, and fast pan-India delivery."
      },
      {
        "question": "Can the Turbo Air Ventilator withstand heavy Indian monsoons and cyclonic wind speeds?",
        "answer": "Yes. Simpovent® Turbo Air Ventilators use precision rain-deflector vane geometry that blocks rainwater ingress even during heavy monsoon downpours, and they are aerodynamically balanced and structurally tested to withstand wind speeds up to 140 km/h when anchored properly with our custom FRP base plates."
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
      "With over 100,000 units installed nationwide, our wind driven roof ventilators provide eco-friendly, continuous 24/7 air displacement without incurring recurring electricity costs or wiring risks. Manufactured from virgin Hindalco alloy with stainless steel central hardware, each unit is dynamically balanced to start spinning smoothly even in low breezes under 2 km/h.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
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
      "Designed for ultra-low starting torque, this wind operate ventilator activates at breeze speeds under 2 km/h, preventing condensation, mold, and suffocating heat buildup in factory godowns. Directly supplied by Shreeji Sales Corporation with custom-profile polycarbonate and FRP base plates, it ensures an absolute leak-proof seal during heavy Indian monsoon downpours.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
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
    "metaTitle": "Natural Air Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Natural Air Ventilator — leading manufacturer in India. 100% green zero-power roof vents (2,500 CFM), IGBC/LEED ready, 10-year warranty. ISO 9001.",
    "focusKeywords": [
      "natural air ventilator",
      "natural air ventilator manufacturer",
      "natural air ventilator manufacturer in india",
      "natural ventilation system",
      "natural roof ventilator",
      "zero power ventilator",
      "eco roof ventilator",
      "passive roof ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "100% green, zero-electricity natural air ventilator that harnesses thermal updrafts and ambient wind for silent, round-the-clock industrial air exchange.",
    "fullDescription": [
      "A Natural Air Ventilator is a passive, zero-electricity roof ventilation unit that continuously expels rising hot air, trapped humidity, and stale indoor fumes using nothing but natural wind energy and thermal convection. Proven across more than 100,000 installations nationwide, Shreeji Sales Corporation (Simpovent®) has been a trusted natural air ventilator manufacturer in India since 2005—helping factories, PEB sheds, and agricultural godowns maintain fresh, breathable indoor air 24/7 with zero power bills.",
      "Designed for sustainable industrial cooling, each 24-inch Simpovent® natural air ventilator exhausts 2,000 to 2,500 CFM of trapped heat, helping reduce indoor floor temperatures by 4°C to 8°C and relieving thermal stress on metal roofing sheets. Because it consumes 0 Watts and produces zero carbon emissions, installing natural air ventilators directly supports manufacturing plants aiming for IGBC, GRIHA, and LEED green building certification credits while cutting down dependence on power-hungry electric exhaust fans.",
      "Every ventilator is engineered with 42 precision-curved Hindalco Aluminium Alloy 8011 vanes, a corrosion-resistant Stainless Steel SS 304 top cowl and central shaft, and dual permanently lubricated HCH sealed deep-groove bearings. The lightweight rotor begins turning silently in light ambient breezes under 2 km/h, while custom-moulded UV-resistant FRP base plates match GI, color-coated, PEB, or asbestos roof profiles for a weatherproof, leakproof fit without altering structural purlins.",
      "Manufactured under ISO 9001:2015 quality controls at our plant in Vasai, Maharashtra, every natural air ventilator is dynamically spin-tested and backed by a 10-year structural and rotor cage warranty. Ordering directly from an established Indian natural air ventilator manufacturer gives industrial buyers, architects, and MEP contractors factory-direct pricing, ready stock in 18\", 21\", and 24\" sizes, and reliable pan-India delivery across Mumbai, Pune, Gujarat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide."
    ],
    "keyFeatures": [
      "100% Green, Zero-Carbon Passive Roof Ventilation",
      "Zero Electricity Consumption & Zero Recurring Running Costs",
      "42 Precision Hindalco 8011 Aluminium Vanes with SS 304 Top Cowl",
      "Dual Permanently Lubricated HCH Sealed Deep-Groove Bearings",
      "Custom UV-Resistant FRP Base Plate for 100% Leakproof Fitment",
      "Backed by a 10-Year Structural & Rotor Cage Warranty"
    ],
    "efficiencyHighlights": [
      "Exhausts 2,000 to 2,500 CFM per 24\" unit using pure wind & thermal updraft",
      "Lowers indoor shed temperature by 4°C to 8°C and relieves roof heat stress",
      "Qualifies factories for IGBC, GRIHA, and LEED green building energy credits",
      "Completely silent (0 dB), maintenance-free, and safe with zero electrical wiring"
    ],
    "workingTheory": "A natural air ventilator operates through the combined physics of the thermal chimney (stack) effect and wind-driven suction. Inside an industrial building, hot, humid air naturally rises toward the roof ridge. As gentle outdoor breeze passes over the 42 curved aerodynamic blades, the turbine spins smoothly on sealed bearings, creating a continuous low-pressure updraft that evacuates warm, stale air outside while pulling cooler fresh air in through lower louvers and openings.",
    "applications": [
      "Green Building & LEED / IGBC Certified Plants",
      "Textile, Spinning & Garment Units",
      "Paper, Pulp & Packaging Factories",
      "Agricultural Godowns & Grain Storage",
      "PEB Industrial Sheds & Commercial Warehouses",
      "Food Processing, Dairy & Logistics Facilities"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) — Also available in 18\" & 21\"",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (Rust & Weather Proof)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 (Optional Full SS 304)",
      "bladeCount": "42 Precision Aerodynamic Curved Vanes",
      "shaftMoc": "Stainless Steel SS 304",
      "bearingMake": "Dual HCH Precision Sealed Deep-Groove Bearings",
      "bearingSize": "6002ZZ / 6202ZZ Sealed Maintenance-Free",
      "basePlateMoc": "UV-Resistant Leakproof FRP Matching Roof Sheet",
      "airflowCfm": "2,000 to 2,500 CFM per unit",
      "coverageArea": "250 to 350 Sq. Ft. per 24\" unit (Depending on roof height & heat load)",
      "noiseLevel": "0 dB (Completely Silent Passive Operation)",
      "powerConsumption": "0 Watts (100% Natural Wind & Thermal Stack Driven)"
    },
    "image": "/images/products/natural-air-ventilator-new.jpg",
    "galleryImages": [
      "/images/products/eco-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is a Natural Air Ventilator and how does it cool a factory without electricity?",
        "answer": "A Natural Air Ventilator is a passive, wind- and thermal-driven roof exhaust turbine that removes trapped hot air, moisture, and stale fumes from factories and warehouses 24/7 without using electricity. Hot air rises naturally to the roof crest, and even a light breeze under 2 km/h spins the 42 curved vanes to pull that heat outside—lowering indoor temperatures by 4°C to 8°C at zero power cost."
      },
      {
        "question": "How much area does one 24-inch Natural Air Ventilator cover?",
        "answer": "One 24-inch Simpovent® Natural Air Ventilator delivers 2,000 to 2,500 CFM and effectively ventilates 250 to 350 sq. ft. of floor area in standard warehouses, godowns, and industrial sheds. For high-heat production zones, closer spacing is recommended—you can use the CFM Calculator on this page or share your shed dimensions with our team for an exact layout count."
      },
      {
        "question": "Can Natural Air Ventilators help in LEED, IGBC, and GRIHA green building certifications?",
        "answer": "Yes. Because Simpovent® Natural Air Ventilators operate on 0 Watts of electricity and produce zero greenhouse gas emissions, they help industrial plants, warehouses, and commercial buildings earn valuable energy efficiency and natural ventilation credits under IGBC, GRIHA, and LEED green building standards."
      },
      {
        "question": "Are Natural Air Ventilators leakproof during heavy rain, and do they require maintenance?",
        "answer": "Yes, they are 100% weatherproof and monsoon-proof. The overlapping aerodynamic vane geometry deflects rainwater outward while custom-moulded UV-resistant FRP base plates seal tightly to GI, color-coated, PEB, or asbestos roofs. With permanently lubricated HCH sealed bearings and no motor or wiring, they require virtually zero maintenance."
      },
      {
        "question": "Why choose Simpovent® (Shreeji Sales Corporation) as your Natural Air Ventilator manufacturer in India?",
        "answer": "Founded in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation has over 100,000 Simpovent® Natural Air Ventilators operating across India. Manufactured in-house in Vasai, Maharashtra using virgin Hindalco Aluminium 8011 and SS 304 hardware, every unit includes a 10-year structural warranty, direct factory pricing, and fast pan-India dispatch."
      }
    ]
  },
  {
    "id": "roof-ventilator",
    "slug": "roof-ventilator",
    "legacySlug": "roof-ventilator.php",
    "name": "Roof Ventilator",
    "h1Title": "Roof Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Roof Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Roof Ventilator — leading manufacturer in India. Zero-power 24\" industrial roof vents (2,500 CFM), 15+ yr life, 10-yr warranty, pan-India supply.",
    "focusKeywords": [
      "roof ventilator",
      "roof ventilator manufacturer",
      "roof ventilator manufacturer in india",
      "industrial roof ventilator",
      "factory roof ventilator",
      "shed roof ventilator",
      "metal roof ventilator",
      "turbo roof ventilator",
      "roof air ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Heavy-duty zero-electricity roof ventilator engineered with 42 Hindalco Aluminium vanes and SS 304 hardware for 15+ years of silent industrial heat and fume extraction.",
    "fullDescription": [
      "A Roof Ventilator is a wind-driven, zero-electricity exhaust unit installed along the roof ridge of factories, warehouses, and PEB sheds to continuously expel trapped heat, humidity, and airborne fumes. As a trusted roof ventilator manufacturer in India since 2005, Shreeji Sales Corporation engineers the Simpovent® Roof Ventilator as the industrial benchmark for silent, round-the-clock roof ventilation across metal and masonry buildings.",
      "Available in 18-inch, 21-inch, and 24-inch throat diameters, each 24-inch Simpovent® roof ventilator exhausts 2,000 to 2,500 CFM of hot ridge air—lowering shop-floor temperatures by 4°C to 8°C without consuming a single watt of electricity. Every unit is supplied with a custom-moulded, UV-stabilized FRP base plate shaped to match GI, color-coated trapezoidal, sinusoidal, PEB, or asbestos roofing sheets, enabling quick, 100% leakproof installation without cutting existing roof purlins.",
      "Built for harsh Indian summers, heavy monsoons, and corrosive industrial atmospheres, the turbine combines 42 precision-curved Hindalco Aluminium Alloy 8011 vanes, a heavy-gauge Stainless Steel SS 304 top cowl and central shaft, and dual HCH sealed deep-groove ball bearings. Every roof ventilator undergoes strict dynamic spin testing at our Vasai plant to ensure vibration-free rotation in light breezes and 15+ years of maintenance-free service backed by a 10-year comprehensive structural warranty.",
      "Manufactured under ISO 9001:2015 quality controls in Vasai, Maharashtra, Simpovent® roof ventilators are trusted across Mumbai, Pune, Ahmedabad, Surat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and major industrial belts nationwide. Buying directly from an established Indian roof ventilator manufacturer guarantees genuine raw materials, ready stock, transparent factory pricing, and fast pan-India dispatch."
    ],
    "keyFeatures": [
      "100% Zero-Electricity Operation — No Wiring or Power Bills",
      "42 Precision Aerodynamic Hindalco Aluminium Alloy 8011 Vanes",
      "Heavy-Gauge Stainless Steel SS 304 Top Cowl & Central Shaft",
      "Dual HCH Precision Sealed Bearings — Zero Lubrication Needed",
      "Custom UV-Stabilized FRP Matching Base Plates (100% Leakproof)",
      "Dynamically Spin-Tested with 10-Year Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Exhausts 2,000 to 2,500 CFM per 24\" unit at zero electrical cost",
      "Lowers indoor factory and shed temperature by 4°C to 8°C",
      "Removes trapped ridge heat, moisture, smoke, and chemical vapors 24/7",
      "15+ years trouble-free service life with zero maintenance or downtime"
    ],
    "workingTheory": "Installed at the highest point of a shed roof where hot air naturally accumulates, a roof ventilator converts ambient outdoor wind velocity into centrifugal force across its 42 curved blades. As the turbine head spins smoothly on sealed bearings, air is thrown outward from the vane tips—creating continuous low-pressure suction at the throat that draws hot indoor air, steam, and fumes straight out of the building.",
    "applications": [
      "Foundries & Forging Shops",
      "Engineering & Fabrication Sheds",
      "Automotive Assembly & Paint Plants",
      "Chemical, Fertilizer & Pharma Factories",
      "PEB Industrial Sheds & Logistics Warehouses",
      "Textile Mills, Godowns & Cold Storage Corridors"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) — Also available in 18\" & 21\"",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (Heavy-Gauge Weatherproof)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "bladeCount": "42 Precision Aerodynamic Curved Vanes",
      "shaftMoc": "Stainless Steel SS 304",
      "bearingMake": "Dual HCH Precision Sealed Deep-Groove Bearings",
      "bearingSize": "6002ZZ / 6202ZZ Sealed Maintenance-Free",
      "basePlateMoc": "UV-Stabilized Leakproof FRP Matching Profile Base Plate",
      "airflowCfm": "2,000 to 2,500 CFM per unit",
      "coverageArea": "250 to 350 Sq. Ft. per 24\" unit (Depending on roof height & heat load)",
      "noiseLevel": "0 dB (Completely Silent Operation)",
      "powerConsumption": "0 Watts (100% Wind & Thermal Convection Driven)"
    },
    "image": "/images/products/roof-ventilator-new.png",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-driven-ventilator-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is a Roof Ventilator and how does it cool an industrial building without electricity?",
        "answer": "A Roof Ventilator is a passive, wind-powered exhaust turbine mounted on factory and warehouse roofs. Because hot air naturally rises to the roof ridge, even a gentle outdoor breeze spins its 42 curved vanes to create suction that continuously extracts trapped heat, moisture, and fumes—lowering indoor temperatures by 4°C to 8°C with 0 Watts of power."
      },
      {
        "question": "Which roof types can Simpovent® Roof Ventilators be installed on, and are they leakproof in heavy rain?",
        "answer": "Simpovent® Roof Ventilators can be installed on GI sheets, color-coated trapezoidal/sinusoidal sheets, PEB metal roofs, and asbestos roofs. Each unit comes with a custom-moulded UV-stabilized FRP base plate matched to your exact roof sheet profile, and the overlapping vane design deflects rainwater outward for 100% leakproof monsoon performance."
      },
      {
        "question": "How many 24-inch Roof Ventilators are required for a factory shed or warehouse?",
        "answer": "One 24-inch Simpovent® Roof Ventilator moves 2,000 to 2,500 CFM and covers approximately 250 to 350 sq. ft. of floor area in standard warehouses and industrial sheds. High-heat zones like foundries or forging shops require closer spacing—use our CFM Calculator on this page or share your shed dimensions for an exact engineering count."
      },
      {
        "question": "What makes Simpovent® Roof Ventilators superior to local alternatives?",
        "answer": "Simpovent® uses genuine Hindalco 8011 high-tensile aluminium, heavy-gauge SS 304 top covers and central shafts, dual precision HCH sealed bearings, and UV-stabilized virgin FRP base plates. Every unit is dynamically spin-tested in-house for 15+ years of silent, wobble-free performance backed by a 10-year structural warranty."
      },
      {
        "question": "Why choose Shreeji Sales Corporation as your Roof Ventilator manufacturer in India?",
        "answer": "Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures Simpovent® Roof Ventilators at our Vasai, Maharashtra facility with strict quality control and ready stock in 18\", 21\", and 24\" sizes. Ordering directly from the manufacturer ensures factory-direct pricing, custom FRP base plates, and fast dispatch across India."
      }
    ]
  },
  {
    "id": "turbine-ventilator",
    "slug": "turbine-ventilator",
    "legacySlug": "turbine-ventilator.php",
    "name": "Turbine Ventilator",
    "h1Title": "Turbine Ventilator Manufacturer & Supplier in India",
    "metaTitle": "Turbine Ventilator Manufacturer in India | Simpovent®",
    "metaDescription": "Simpovent® Turbine Ventilator — leading manufacturer in India. Zero-power 24\" roof turbines (2,500 CFM), Hindalco Aluminium & SS 304 build, 10-year warranty.",
    "focusKeywords": [
      "turbine ventilator",
      "turbine ventilator manufacturer",
      "turbine ventilator manufacturer in india",
      "industrial turbine ventilator",
      "roof turbine ventilator",
      "wind turbine ventilator",
      "air turbine ventilator",
      "turbo ventilator",
      "roof ventilator"
    ],
    "category": "wind-driven",
    "categoryLabel": "Wind-Driven Natural Ventilator",
    "shortDescription": "Precision-balanced zero-electricity turbine ventilator with 42 Hindalco Aluminium vanes and SS 304 hardware for silent, 24/7 industrial heat, humidity, and fume extraction.",
    "fullDescription": [
      "A Turbine Ventilator is a rotating, wind-powered roof exhaust unit that uses natural breeze and rising heat to continuously draw hot, humid, and polluted air out of industrial buildings without using electricity. As an ISO 9001:2015 certified turbine ventilator manufacturer in India since 2005, Shreeji Sales Corporation engineers the Simpovent® Turbine Ventilator with a precision-formed aerodynamic rotor cage that spins effortlessly even in gentle winds under 2 km/h.",
      "Built for heavy-duty Indian manufacturing environments, each 24-inch Simpovent® turbine ventilator exhausts 2,000 to 2,500 CFM of trapped ceiling heat and discharges it horizontally away from the roofline. This continuous air exchange lowers indoor shed temperatures by 4°C to 8°C, clears stale fumes and airborne dust, and stops harmful moisture condensation from rusting structural roof purlins in steel, textile, plastic, and chemical units.",
      "Every unit combines 42 aerodynamically curved Hindalco Aluminium Alloy 8011 vanes, a corrosion-resistant Stainless Steel SS 304 top cowl and central shaft, and dual HCH sealed deep-groove bearings packed with high-temperature synthetic grease. Custom-moulded UV-stabilized FRP base plates match GI, color-coated, PEB, and asbestos roof profiles for 100% leakproof monsoon protection, with zero wiring, zero noise, and a 10-year structural warranty.",
      "Manufactured and dynamically spin-tested in-house at our Vasai, Maharashtra facility, Simpovent® turbine ventilators are supplied directly to factories, EPC contractors, and PEB builders across Mumbai, Pune, Ahmedabad, Surat, Delhi NCR, Chennai, Hyderabad, Bengaluru, and nationwide. Working directly with an established Indian turbine ventilator manufacturer ensures ready stock in 18\", 21\", and 24\" sizes, transparent factory pricing, and fast pan-India dispatch."
    ],
    "keyFeatures": [
      "100% Zero-Electricity Operation — Continuous 24/7 Exhaust",
      "42 Precision-Formed Hindalco Aluminium Alloy 8011 Vanes",
      "Heavy-Gauge Stainless Steel SS 304 Top Cowl & Central Shaft",
      "Dual HCH Sealed Bearings with High-Temperature Synthetic Grease",
      "Stops Roof Purlin Condensation & Resists Acidic / Coastal Humidity",
      "Custom UV-Stabilized FRP Base Plate with 10-Year Structural Warranty"
    ],
    "efficiencyHighlights": [
      "Exhausts 2,000 to 2,500 CFM per 24\" unit at zero power cost",
      "Reduces indoor factory and workshop temperature by 4°C to 8°C",
      "Eliminates trapped humidity, smoke, and condensation on steel purlins",
      "Silent (0 dB), vibration-free rotation with zero maintenance required"
    ],
    "workingTheory": "Natural outdoor wind and indoor thermal buoyancy work together to spin the 42 curved vanes of the turbine ventilator on frictionless sealed bearings. As the rotor accelerates, centrifugal force throws air outward horizontally away from the roofline—creating strong negative suction at the throat that continuously pulls hot air, steam, and fumes upward and out of the building.",
    "applications": [
      "Steel & Metal Fabrication Mills",
      "Textile, Spinning & Weaving Sheds",
      "Plastic, Polymer & Rubber Processing Units",
      "Automobile Assembly & Service Workshops",
      "Chemical, Paint & Corrosive Process Plants",
      "PEB Warehouses & Commercial Storage Godowns"
    ],
    "specs": {
      "throatDia": "24\" Inch (610 MM) — Also available in 18\" & 21\"",
      "outerDia": "30\" Inch (760 MM)",
      "topCoverMoc": "Stainless Steel SS 304 (Corrosion-Proof)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 (Optional Full SS 304)",
      "bladeCount": "42 Precision-Formed Aerodynamic Vanes",
      "shaftMoc": "Stainless Steel SS 304",
      "bearingMake": "Dual HCH Precision Sealed Deep-Groove Bearings",
      "bearingSize": "6002ZZ / 6202ZZ Sealed Maintenance-Free",
      "basePlateMoc": "UV-Stabilized Leakproof FRP Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM per unit",
      "coverageArea": "250 to 350 Sq. Ft. per 24\" unit (Depending on height & heat load)",
      "noiseLevel": "0 dB (Completely Silent Rotation)",
      "powerConsumption": "0 Watts (100% Wind & Thermal Buoyancy Driven)"
    },
    "image": "/images/products/turbo-ventilator-new.jpeg",
    "galleryImages": [
      "/images/products/alu-turbo-with-frp-base-new.jpeg",
      "/images/products/natural-air-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg"
    ],
    "faqs": [
      {
        "question": "What is a Turbine Ventilator and how does it work without electricity?",
        "answer": "A Turbine Ventilator is a wind-driven roof exhaust turbine installed on factories, workshops, and warehouses. Even a light breeze under 2 km/h spins its 42 curved aerodynamic vanes on sealed bearings, generating centrifugal suction that continuously pulls rising hot air, humidity, and fumes out through the roof—operating 24/7 with 0 Watts of electricity."
      },
      {
        "question": "How do Turbine Ventilators handle high humidity, condensation, and heavy Indian monsoons?",
        "answer": "The overlapping curved vane geometry uses centrifugal force to fling raindrops outward away from the throat during heavy rain, while custom-moulded UV-stabilized FRP base plates seal tightly to your roof sheet profile. Dual HCH sealed bearings with high-temperature synthetic grease resist coastal humidity, acid vapors, and condensation."
      },
      {
        "question": "How many 24-inch Turbine Ventilators are needed for a factory shed or workshop?",
        "answer": "As a general rule, one 24-inch Simpovent® Turbine Ventilator exhausts 2,000 to 2,500 CFM and covers 250 to 350 sq. ft. of floor area in standard sheds and godowns. High-heat zones such as metal fabrication, plastic moulding, or rubber processing units benefit from closer spacing—use our CFM Calculator on this page or share your shed dimensions for an exact count."
      },
      {
        "question": "What sizes and materials (Aluminium vs SS 304) are available for Simpovent® Turbine Ventilators?",
        "answer": "We manufacture Turbine Ventilators in 18-inch, 21-inch, and 24-inch throat diameters. Standard units combine lightweight Hindalco Aluminium Alloy 8011 vanes with an SS 304 top cowl and shaft for rapid low-wind rotation, while full SS 304 construction is available for highly corrosive chemical or coastal plants."
      },
      {
        "question": "Why choose Shreeji Sales Corporation (Simpovent®) as your Turbine Ventilator manufacturer in India?",
        "answer": "Established in 2005 and ISO 9001:2015 certified, Shreeji Sales Corporation manufactures and dynamically spin-tests every Simpovent® Turbine Ventilator at our Vasai, Maharashtra facility. Buying directly from the manufacturer gives you genuine Hindalco aluminium, SS 304 hardware, a 10-year structural warranty, direct factory pricing, and fast pan-India delivery."
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
      "Engineered with a 24-inch throat diameter and 42 curved aerodynamic vanes, this wind turbine ventilator generates an effective 2,000 to 2,500 CFM air displacement without electrical consumption. We maintain extensive ready inventory at our Maharashtra warehouse for immediate dispatch to PEB contractors, steel fabricators, and MEP consultants nationwide.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-turbine-ventilator-new.jpg",
    "galleryImages": [
      "/images/products/turbo-ventilator-new.jpeg",
      "/images/products/wind-operate-ventilator-new.jpg",
      "/images/products/alu-turbo-with-frp-base-new.jpeg"
    ],
    "faqs": [
      {
        "question": "What is the delivery time for bulk orders across India?",
        "answer": "We maintain ready stock of standard 24\" units and can dispatch large quantities within 24 to 48 hours directly from our Vasai factory."
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
      "The SIMPOVENT® powerless ventilator delivers zero-operating-cost industrial ventilation for plants committed to zero carbon emissions, energy conservation, and worker thermal comfort. Custom-moulded FRP base plates match all standard metal profiles (Tata Bluescope, JSW, Kirby, Asbestos), ensuring swift, drill-and-fasten installation with zero structural roof alterations.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
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
      "Our eco ventilator is engineered specifically for sustainable factories, FMCG packaging halls, and pharmaceutical sheds requiring clean, noiseless, zero-power air exchange. Crafted from 100% recyclable aerospace-grade aluminium and stainless steel, it reduces factory indoor temperatures by 4°C to 8°C without electrical motor burnout risks.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
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
      "This passive industrial roof extractor is designed for heavy metal sheds suffering from extreme solar radiation and process heat accumulation beneath high-bay ceilings. Engineered with reverse-curved water deflector blade lips, it forcefully expels rising heat plumes while blocking wind-driven monsoon rainwater with 100% reliability.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium Alloy 8011 / SS 304",
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
      "Engineered for continuous round-the-clock air evacuation in PEB warehouses and industrial workshops, this wind ventilator delivers up to 2,500 CFM exhaust with zero operational expenses. Contact Shreeji Sales Corporation for direct factory wholesale rates, certified CFM calculation sizing assistance, and prompt dispatch from our Vasai East plant.",
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
      "throatDia": "24\" Inch (610 MM)",
      "outerDia": "30\" Inch (760 MM)",
      "bladeMoc": "Hindalco Aluminium 8011",
      "topCoverMoc": "Stainless Steel SS 304",
      "bearingMake": "HCH Precision Sealed Bearing",
      "basePlateMoc": "FRP Matching Profile Sheet",
      "airflowCfm": "2,000 to 2,500 CFM",
      "powerConsumption": "0 Watts"
    },
    "image": "/images/products/wind-ventilator-new.jpg",
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
