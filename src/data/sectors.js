// NABET-accredited sectors — the single source of truth for the whole site.
// Transcribed exactly from RGPL's QCI-NABET Certificate of Accreditation
// (Category-A EIA Consultant Organization, Scheme Version 3).
// Used by the Sectors listing, each Sector detail page, the navbar mega-menu,
// the home page and the About page.
import imgMining from "../assets/hero-1-new.png";
import imgOil from "../assets/coastal-marine.png";
import imgThermal from "../assets/service-2.png";
import imgMetal from "../assets/service-1.png";
import imgCement from "../assets/service-3.png";
import imgChlor from "../assets/rejig_discussion_meeting_1782487343593.png";
import imgFiber from "../assets/service-4.png";
import imgChem from "../assets/service-5.png";
import imgPipeline from "../assets/service-6.png";
import imgBuilding from "../assets/esg-sustainability.png";
import imgTownship from "../assets/hero-3-new.png";

export const SECTORS = [
  {
    slug: "mining",
    name: "Mining of Minerals",
    certName: "Mining of mineral — opencast mining only",
    scope: "Opencast mining only",
    nabet: "1",
    moefcc: "1(a)(i)",
    category: "B",
    icon: "⛏️",
    image: imgMining,
    desc: "EIA/EMP studies for opencast mineral mining — overburden, drainage, air and noise management and progressive mine-closure planning.",
    long:
      "Opencast mineral mining reshapes large land parcels and generates dust, overburden and altered drainage that must be carefully managed. RGPL prepares Category-B EIA/EMP studies that balance mineral extraction with land, air and water protection and a credible mine-closure plan.",
    aspects: [
      "Fugitive dust from drilling, blasting and haul roads",
      "Overburden and waste-rock dump stability",
      "Disruption of natural drainage and groundwater",
      "Land degradation and post-mining land use",
    ],
    services: [
      "Baseline air, water, noise and soil monitoring",
      "Overburden and dump-stability assessment",
      "Hydro-geological and drainage studies",
      "Progressive and final mine-closure planning",
      "Public hearing and SEAC/EAC appraisal support",
    ],
    approvals: [
      "Environmental Clearance (EIA Notification 2006)",
      "Consent to Establish / Operate (PCB)",
      "Mine plan and mining-lease approvals",
      "Forest clearance where applicable",
    ],
  },
  {
    slug: "oil-gas-exploration",
    name: "Oil & Gas Exploration & Production",
    certName: "Offshore and onshore oil and gas exploration, development & production",
    scope: "Offshore and onshore exploration, development & production",
    nabet: "2",
    moefcc: "1(b)",
    category: "A",
    icon: "🛢️",
    image: imgOil,
    desc: "Impact assessment for onshore and offshore exploration, drilling, development and production of oil and natural gas.",
    long:
      "Onshore and offshore exploration and production involve drilling, well-testing and produced-water handling with significant marine and air-quality sensitivities. RGPL delivers Category-A EIA studies covering the full E&P lifecycle from seismic survey to production.",
    aspects: [
      "Drilling waste and produced-water disposal",
      "Marine ecology and coastal sensitivity",
      "Air emissions and gas flaring",
      "Oil-spill risk and emergency response",
    ],
    services: [
      "Marine and terrestrial baseline studies",
      "Oil-spill contingency and risk assessment",
      "Produced-water and drill-cuttings management",
      "Air dispersion modelling",
      "Stakeholder consultation and EC support",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "CRZ clearance for coastal facilities",
      "DGH / MoPNG approvals",
      "Disaster Management Plan",
    ],
  },
  {
    slug: "thermal-power",
    name: "Thermal Power Plants",
    certName: "Thermal power plants",
    scope: "Coal, gas and liquid-fuel power generation",
    nabet: "4",
    moefcc: "1(d)",
    category: "A",
    icon: "⚡",
    image: imgThermal,
    desc: "Air dispersion modelling, ash and water management and EMP preparation for thermal power generation projects.",
    long:
      "Thermal power plants are among the most scrutinised projects for air emissions, water use and ash management. RGPL prepares Category-A EIA/EMP reports with rigorous dispersion modelling and ash-utilisation planning.",
    aspects: [
      "Stack emissions (SOx, NOx, particulates)",
      "Cooling-water intake and thermal discharge",
      "Fly-ash and bottom-ash management",
      "Coal handling and storage dust",
    ],
    services: [
      "AERMOD air dispersion modelling",
      "Source-apportionment and cumulative impact",
      "Ash-pond review and ash-utilisation plan",
      "Water balance and thermal-discharge study",
      "EC appraisal and compliance reporting",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Consent to Establish / Operate",
      "Fly-ash utilisation compliance (MoEFCC)",
      "CEA and coal-linkage approvals",
    ],
  },
  {
    slug: "metallurgical",
    name: "Metallurgical Industries",
    certName: "Metallurgical industries (ferrous & non-ferrous)",
    scope: "Ferrous & non-ferrous",
    nabet: "8",
    moefcc: "3(a)",
    category: "A",
    icon: "🏭",
    image: imgMetal,
    desc: "EIA studies for primary and secondary ferrous and non-ferrous metallurgical processing units.",
    long:
      "Ferrous and non-ferrous metallurgical plants generate process emissions, slag and effluent that demand careful characterisation. RGPL provides Category-A EIA studies for integrated steel, smelter and secondary metallurgical units.",
    aspects: [
      "Process and fugitive air emissions",
      "Slag and metallurgical-waste management",
      "Process effluent and heavy metals",
      "High energy and water demand",
    ],
    services: [
      "Stack and fugitive-emission inventory",
      "Slag characterisation and reuse planning",
      "Effluent-treatment adequacy review",
      "Resource-efficiency and water-recycling study",
      "EC documentation and appraisal support",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Hazardous & Other Waste authorisation",
      "Consent to Establish / Operate",
      "Factory and boiler approvals",
    ],
  },
  {
    slug: "cement",
    name: "Cement Plants",
    certName: "Cement plants",
    scope: "Clinker & grinding units",
    nabet: "9",
    moefcc: "3(b)",
    category: "A",
    icon: "🏗️",
    image: imgCement,
    desc: "Particulate and fugitive-emission assessment, limestone-linkage and EMP studies for cement manufacturing.",
    long:
      "Cement manufacturing is dust- and energy-intensive, with limestone-mining linkages and a significant CO₂ footprint. RGPL prepares Category-A EIA studies for clinker and grinding units, including co-processing and AFR assessment.",
    aspects: [
      "Particulate emissions from kiln and mills",
      "Limestone linkage and mining impacts",
      "Fugitive dust from material handling",
      "Energy use and CO₂ emissions",
    ],
    services: [
      "Particulate and fugitive-dust modelling",
      "Limestone-linkage and cumulative assessment",
      "Co-processing / AFR feasibility",
      "Bag-house and APC adequacy review",
      "EC appraisal and half-yearly compliance",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Co-processing authorisation (CPCB/SPCB)",
      "Consent to Establish / Operate",
      "Mining-linkage clearance",
    ],
  },
  {
    slug: "chlor-alkali",
    name: "Chlor-Alkali Industry",
    certName: "Chlor-alkali industry",
    scope: "Caustic soda, chlorine & allied products",
    nabet: "13",
    moefcc: "4(b)",
    category: "A",
    icon: "🧪",
    image: imgChlor,
    desc: "Hazard, effluent and air-quality assessment for chlor-alkali and associated chemical manufacturing.",
    long:
      "Chlor-alkali plants handle hazardous chemicals — chlorine, caustic and hydrogen — requiring strong risk and effluent controls. RGPL delivers Category-A EIA and risk studies for caustic-soda and allied chemical units.",
    aspects: [
      "Chlorine handling and toxic-release risk",
      "Membrane-cell effluent and brine sludge",
      "Hazardous-waste management",
      "Hydrogen storage and fire/explosion risk",
    ],
    services: [
      "Quantitative Risk Assessment (QRA)",
      "Consequence and dispersion modelling",
      "Effluent and brine-sludge management plan",
      "On-site and off-site Disaster Management Plan",
      "EC and PCB-consent support",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Hazardous Waste authorisation",
      "MSIHC / Factories Act compliance",
      "Consent to Establish / Operate",
    ],
  },
  {
    slug: "manmade-fibers",
    name: "Manmade Fibers Manufacturing",
    certName: "Manmade fibers manufacturing",
    scope: "Synthetic fibre & filament production",
    nabet: "19",
    moefcc: "5(d)",
    category: "A",
    icon: "🧵",
    image: imgFiber,
    desc: "Process emission, effluent and resource-use assessment for synthetic fibre manufacturing facilities.",
    long:
      "Synthetic-fibre and filament manufacturing involves polymer processing, solvent use and high water demand. RGPL prepares Category-A EIA studies addressing process emissions, effluent and resource efficiency.",
    aspects: [
      "Process emissions and solvent VOCs",
      "High water demand and effluent load",
      "Polymer and chemical-storage risk",
      "Energy intensity",
    ],
    services: [
      "Process-emission and VOC inventory",
      "Effluent treatment and ZLD feasibility",
      "Water-balance and recycling study",
      "Chemical-storage and risk review",
      "EC documentation and appraisal",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Consent to Establish / Operate",
      "Hazardous Waste authorisation",
      "Water/Air Act compliance",
    ],
  },
  {
    slug: "synthetic-organic-chemicals",
    name: "Synthetic Organic Chemicals Industry",
    certName: "Synthetic organic chemicals industry",
    scope: "Bulk & specialty organic chemicals",
    nabet: "21",
    moefcc: "5(f)",
    category: "A",
    icon: "⚗️",
    image: imgChem,
    desc: "Risk, effluent and air-quality studies for bulk drugs and synthetic organic chemical manufacturing.",
    long:
      "Bulk drugs and synthetic organic chemical plants are complex, multi-product facilities with hazardous reactions and varied effluent streams. RGPL provides Category-A EIA and risk studies for API and specialty-chemical manufacturing.",
    aspects: [
      "Multi-stream hazardous effluent",
      "Process and fugitive VOC emissions",
      "Solvent recovery and hazardous waste",
      "Reaction and storage hazards",
    ],
    services: [
      "Effluent characterisation and ETP/ZLD review",
      "VOC and odour assessment",
      "Solvent-recovery and waste-minimisation study",
      "HAZOP / QRA and risk modelling",
      "EC and compliance support",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Hazardous Waste authorisation",
      "Consent to Establish / Operate",
      "MSIHC / Factories Act compliance",
    ],
  },
  {
    slug: "oil-gas-pipeline",
    name: "Oil & Gas Transportation Pipeline",
    certName: "Oil & gas transportation pipeline",
    scope: "Cross-country crude, product & gas pipelines",
    nabet: "27",
    moefcc: "6(a)",
    category: "A",
    icon: "🛤️",
    image: imgPipeline,
    desc: "Route-corridor impact assessment, RoW and crossing studies for cross-country oil and gas pipelines.",
    long:
      "Cross-country oil and gas pipelines traverse diverse terrain, forests and water bodies, with right-of-way and crossing sensitivities. RGPL delivers Category-A EIA studies for crude, product and gas pipeline corridors.",
    aspects: [
      "Right-of-way land and forest impacts",
      "River, road and rail crossings",
      "Leak and rupture risk",
      "Construction-phase soil and drainage disturbance",
    ],
    services: [
      "Route-corridor environmental screening",
      "Crossing and RoW impact assessment",
      "Leak-risk and emergency-response planning",
      "Forest and wildlife clearance support",
      "EC appraisal and restoration planning",
    ],
    approvals: [
      "Environmental Clearance (Category A)",
      "Forest and wildlife clearances",
      "PNGRB / PESO approvals",
      "Crossing permissions (NHAI/Railways/Irrigation)",
    ],
  },
  {
    slug: "building-construction",
    name: "Building & Construction Projects",
    certName: "Building and construction projects",
    scope: "Built-up area projects",
    nabet: "38",
    moefcc: "8(a)",
    category: "B",
    icon: "🏢",
    image: imgBuilding,
    desc: "Water, traffic, waste and energy assessment with EMP for large building and construction projects.",
    long:
      "Large building and construction projects affect local water, traffic, waste and energy demand even without heavy process emissions. RGPL prepares Category-B EIA/EMP studies aligned with the latest building and construction norms.",
    aspects: [
      "Construction dust, debris and C&D waste",
      "Water demand and wastewater (STP)",
      "Traffic and parking load",
      "Energy use and green-building potential",
    ],
    services: [
      "Water balance and STP adequacy review",
      "C&D and solid-waste management plan",
      "Traffic-impact and parking assessment",
      "Energy-efficiency / green-building advisory",
      "EC documentation and SEIAA appraisal",
    ],
    approvals: [
      "Environmental Clearance (Category B)",
      "Building and layout approvals",
      "Consent to Establish / Operate (STP)",
      "Fire and local-authority NOCs",
    ],
  },
  {
    slug: "townships",
    name: "Townships & Area Development",
    certName: "Townships and Area development projects",
    scope: "Integrated townships & area development",
    nabet: "39",
    moefcc: "8(b)",
    category: "B",
    icon: "🌆",
    image: imgTownship,
    desc: "Carrying-capacity, infrastructure-load and environmental-management studies for townships and area development.",
    long:
      "Integrated townships and area-development projects require carrying-capacity and infrastructure-load assessment across water, waste, power and mobility. RGPL prepares Category-B EIA/EMP studies for sustainable area development.",
    aspects: [
      "Cumulative water and sewage load",
      "Solid-waste and STP infrastructure",
      "Traffic, mobility and parking",
      "Open space, green cover and micro-climate",
    ],
    services: [
      "Carrying-capacity and infrastructure-load study",
      "Integrated water and sewage management plan",
      "Solid-waste management and segregation plan",
      "Traffic and mobility assessment",
      "EC documentation and SEIAA appraisal",
    ],
    approvals: [
      "Environmental Clearance (Category B)",
      "Layout and master-plan approvals",
      "Consent to Establish / Operate",
      "Local-authority and utility NOCs",
    ],
  },
];

export const SECTOR_COUNT = 13; // Previously SECTORS.length (11) — keep all "NABET sectors" figures in sync with this.

// Helper for the detail page / routing.
export const getSector = (slug) => SECTORS.find((s) => s.slug === slug);
