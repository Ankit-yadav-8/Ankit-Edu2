import imgS1 from "../assets/service-1.png";
import imgS2 from "../assets/service-2.png";
import imgS3 from "../assets/service-3.png";
import imgS4 from "../assets/service-4.png";
import imgS5 from "../assets/service-5.png";
import imgS6 from "../assets/service-6.png";

// Featured projects shown on the Home page. Each opens an in-app detail page
// at /projects/:slug rendered by ProjectDetail.jsx.
export const PROJECTS = [
  {
    slug: "iron-ore-mine-eia",
    title: "EIA for 5 MTPA Iron Ore Mine Expansion",
    tag: "Mining & Minerals",
    location: "Odisha, India",
    image: imgS1,
    summary: "Full Environmental Impact Assessment and Environmental Clearance support for a five-million-tonne-per-annum iron ore mine capacity expansion.",
    challenge:
      "The client needed to scale an existing iron ore mine from 2 MTPA to 5 MTPA within a sensitive forest fringe, requiring a fresh EIA, forest diversion proposal and public consultation under intense regulatory scrutiny.",
    solution:
      "Our NABET Category-A team executed a full season of baseline monitoring, dispersion and hydrological modelling, and prepared the EIA/EMP along with the Stage-I forest clearance proposal on PARIVESH — guiding the project through the public hearing and EAC appraisal.",
    outcome:
      "Environmental Clearance was granted with a robust Environmental Management Plan, enabling a phased capacity ramp-up while keeping ambient air and water parameters within prescribed limits.",
    services: [
      "Baseline monitoring (air, water, noise, soil, ecology)",
      "AERMOD air-dispersion & hydrological modelling",
      "Stage-I forest clearance proposal on PARIVESH",
      "Public hearing & EAC appraisal support",
    ],
    stats: [
      { num: "5", label: "MTPA capacity" },
      { num: "1 yr", label: "Baseline season" },
      { num: "100%", label: "Compliance achieved" },
    ],
  },
  {
    slug: "solar-park-esia",
    title: "ESIA for 500MW Solar Park Development",
    tag: "Renewable Energy",
    location: "Rajasthan, India",
    image: imgS2,
    summary: "Lender-grade Environmental & Social Impact Assessment aligned to IFC Performance Standards for a 500 MW solar park.",
    challenge:
      "A utility-scale 500 MW solar park sought international project finance, which required an ESIA meeting IFC Performance Standards and ADB safeguard requirements — well beyond the national regulatory minimum.",
    solution:
      "We delivered a lender-grade ESIA including stakeholder engagement plans, land and livelihood assessment, biodiversity screening and an Environmental & Social Management System (ESMS) for the construction and operation phases.",
    outcome:
      "The ESIA satisfied lender due diligence and unlocked financing, with a clear, auditable management framework for ongoing environmental and social performance.",
    services: [
      "IFC/ADB-aligned ESIA",
      "Stakeholder engagement & grievance mechanism",
      "Biodiversity & land-use screening",
      "Environmental & Social Management System (ESMS)",
    ],
    stats: [
      { num: "500", label: "MW capacity" },
      { num: "IFC PS", label: "Standards met" },
      { num: "Financed", label: "Lender approved" },
    ],
  },
  {
    slug: "coastal-highway-crz",
    title: "CRZ Clearance for Coastal Highway",
    tag: "Infrastructure",
    location: "Maharashtra, India",
    image: imgS3,
    summary: "Coastal Regulatory Zone mapping and clearance documentation for a strategic coastal highway corridor.",
    challenge:
      "A coastal highway alignment crossed multiple CRZ categories and intertidal habitats, demanding precise HTL/LTL demarcation and clearance under the CRZ Notification 2019.",
    solution:
      "We carried out CRZ mapping on a cadastral scale through authorised agencies, characterised marine and intertidal ecology, and compiled the clearance documentation for State Coastal Zone Management Authority appraisal.",
    outcome:
      "CRZ clearance was secured with mitigation measures that protected mangrove and intertidal zones along the corridor.",
    services: [
      "CRZ mapping on cadastral scale",
      "HTL/LTL demarcation by authorised agency",
      "Marine & intertidal ecology survey",
      "SCZMA clearance documentation",
    ],
    stats: [
      { num: "2019", label: "CRZ Notification" },
      { num: "Cadastral", label: "Mapping scale" },
      { num: "Cleared", label: "SCZMA approval" },
    ],
  },
  {
    slug: "qra-hazop-chemical",
    title: "Quantitative Risk Assessment & HAZOP",
    tag: "Chemical Industry",
    location: "Gujarat, India",
    image: imgS4,
    summary: "Hazard and consequence analysis with on-site and off-site Disaster Management Plans for a Major Accident Hazard facility.",
    challenge:
      "A chemical manufacturing unit classified as a Major Accident Hazard (MAH) installation required HAZOP, QRA and disaster management planning under the Factories Act and MSIHC Rules.",
    solution:
      "Our risk team conducted a structured HAZOP, quantitative risk assessment with fire, explosion and toxic-release consequence modelling, and prepared on-site and off-site emergency response plans.",
    outcome:
      "The facility achieved a defensible safety case with prioritised risk-reduction measures and validated emergency preparedness.",
    services: [
      "HAZOP study",
      "Quantitative Risk Assessment (QRA)",
      "Consequence modelling (fire, explosion, toxic)",
      "On-site & off-site Disaster Management Plans",
    ],
    stats: [
      { num: "MAH", label: "Facility class" },
      { num: "QRA", label: "Risk modelled" },
      { num: "DMP", label: "Plans delivered" },
    ],
  },
  {
    slug: "igbc-green-township",
    title: "IGBC Green Township Certification",
    tag: "Real Estate",
    location: "Karnataka, India",
    image: imgS5,
    summary: "End-to-end IGBC Green Township documentation and certification support for a large mixed-use development.",
    challenge:
      "A large township developer aimed for IGBC Green certification to differentiate the project and improve resource efficiency across water, energy and materials.",
    solution:
      "We managed IGBC registration, credit documentation, simulation support and the certification process — coordinating across design, MEP and landscape teams to maximise the achievable rating.",
    outcome:
      "The township earned its IGBC Green rating, with measurable improvements in water reuse, energy performance and waste management.",
    services: [
      "IGBC registration & credit strategy",
      "Energy & water simulation support",
      "Documentation & submittals",
      "Certification through final award",
    ],
    stats: [
      { num: "IGBC", label: "Green rating" },
      { num: "Mixed-use", label: "Township scale" },
      { num: "Certified", label: "Final award" },
    ],
  },
  {
    slug: "net-zero-esg-roadmap",
    title: "Net-Zero Roadmap & ESG Strategy",
    tag: "Corporate Advisory",
    location: "Pan-India Operations",
    image: imgS6,
    summary: "TCFD-aligned climate risk assessment and a decarbonisation roadmap with BRSR/GRI-aligned ESG reporting.",
    challenge:
      "A multi-site corporate group needed a credible net-zero pathway and investor-grade ESG disclosures across pan-India operations.",
    solution:
      "We delivered a GHG inventory, TCFD-aligned climate risk screening, a decarbonisation roadmap with scenario analysis, and a BRSR/GRI-aligned disclosure framework with KPI tracking.",
    outcome:
      "The group adopted a board-approved net-zero roadmap and a repeatable ESG reporting system aligned to BRSR and GRI expectations.",
    services: [
      "GHG inventory & footprint analysis",
      "TCFD climate risk & scenario analysis",
      "Net-zero / decarbonisation roadmap",
      "BRSR & GRI-aligned ESG reporting",
    ],
    stats: [
      { num: "Net-Zero", label: "Roadmap" },
      { num: "TCFD", label: "Risk aligned" },
      { num: "BRSR/GRI", label: "Disclosures" },
    ],
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
