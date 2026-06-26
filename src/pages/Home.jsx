import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { CLIENT_LOGOS } from "../data/clients.js";
import { AI_FEATURES } from "../data/aiFeatures.js";
import SmartImg from "../components/SmartImg.jsx";
import visionImg from "../assets/vision-handshake.png";
import nabetLogo from "../assets/nabet-logo.png";
import nabetCert from "../assets/nabet-certificate.png";
import isoCert from "../assets/iso-certificate.png";
import waterTreatmentImg from "../assets/water-treatment.png";
import forestBioImg from "../assets/forest-biodiversity.png";
import esgImg from "../assets/esg-sustainability.png";
import coastalImg from "../assets/coastal-marine.png";
import {
  IconDoc, IconLeaf, IconEye, IconShield, IconChart, IconGlobe,
  IconCheck, IconActivity, IconArrow, IconUsers, IconBeaker, IconStar,
} from "../components/Icons.jsx";

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=720&q=60`;
const WELCOME_IMG = U("1542601906990-b4d3fb778b09"); // hands / green earth

const SERVICES = [
  { icon: <IconDoc size={26} />, title: "EIA & ESIA Studies", img: U("1454165804606-c3d57bc86b40"), desc: "Full Environmental & Social Impact Assessment studies aligned to IFC and ADB guidelines, with baseline monitoring and compliance auditing." },
  { icon: <IconLeaf size={26} />, title: "Forest & Wildlife Clearance", img: U("1441974231531-c6227db76b6e"), desc: "Biodiversity Impact Assessment, forest & wildlife clearances, conservation and mangrove management plans, tree enumeration and ecology studies." },
  { icon: <IconEye size={26} />, title: "Remote Sensing & GIS", img: U("1502920917128-1aa500764cbd"), desc: "Land Use / Land Cover mapping by satellite imagery, mining plan preparation, DGPS surveys and AI-assisted change detection." },
  { icon: <IconShield size={26} />, title: "Compliance & Auditing", img: U("1450101499163-c8848c66ca85"), desc: "Environmental compliance auditing, due diligence, permitting, green / waste audits and corporate EHS support." },
  { icon: <IconChart size={26} />, title: "ESG & Climate Risk", img: U("1473773508845-188df298d2d1"), desc: "Sustainability & ESDD studies, ESG management frameworks, Climate Change Risk Assessment and IGBC/LEED documentation." },
  { icon: <IconGlobe size={26} />, title: "Coastal & Marine", img: U("1505142468610-359e7d316be0"), desc: "Coastal Regulatory Zone (CRZ) clearance, marine environment monitoring, hydrodynamic and hydrological studies." },
];

const WORKFORCE = [
  { icon: <IconUsers size={22} />, role: "Technical Crew", count: 12, sub: "Senior & project consultants", desc: "Senior consultants and project leads who scope studies, draft EIA/ESIA reports and steer projects through SEAC/EAC appraisal." },
  { icon: <IconBeaker size={22} />, role: "Lab Experts", count: 5, sub: "Sampling & analysis specialists", desc: "Sampling and analysis specialists handling air, water, soil and noise testing through our NABL-grade laboratory partner." },
  { icon: <IconStar size={22} />, role: "Field Officers", count: 3, sub: "On-site monitoring & surveys", desc: "On-ground officers running baseline monitoring, ecological surveys and DGPS field work across project sites pan-India." },
  { icon: <IconCheck size={22} />, role: "Auxiliary Staff", count: 5, sub: "Coordination & operations", desc: "Coordination and operations staff who keep documentation, regulatory liaison and client communication running smoothly." },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO CAROUSEL ===================== */}
      <HeroCarousel />

      {/* ===================== CREDIBILITY STRIP ===================== */}
      <div className="cred-strip">
        <div className="container">
          <span><b>3,000+</b> industrial units served</span><span className="dot" />
          <span><b>50+</b> sectoral areas</span><span className="dot" />
          <span><b>20</b> NABET-accredited sectors</span><span className="dot" />
          <span><b>India</b> &amp; abroad</span>
        </div>
      </div>

      {/* ===================== WELCOME / ABOUT ===================== */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="section-title">Welcome to Rejig Green Logic Private Limited</h2>
            <p className="body">
              Incorporated on 15th December 2021, <b>Rejig GreenLogic Private Limited (RGPL)</b> is a
              group of well-known environmental experts pooled together to extend environmental
              consultancy and be your techno-legal advisory partner.
            </p>
            <p className="body" style={{ marginTop: 12 }}>
              We have successfully provided environmental solutions to{" "}
              <b>more than 3,000 specialised industrial units</b> across India and abroad, covering
              more than fifty sectoral areas.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Highest integrity to QCI, NABET &amp; MoEF&amp;CC standards</li>
              <li><span className="tick">✓</span> Trust, Responsibility, Collaboration &amp; Performance culture</li>
              <li><span className="tick">✓</span> A responsible entity preaching green initiatives</li>
            </ul>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: 24 }}>
              Read more <IconArrow size={18} />
            </Link>
          </Reveal>

          <Reveal delay={1} className="welcome-media">
            <SmartImg src={WELCOME_IMG} alt="Hands protecting a green earth" />
          </Reveal>
        </div>

        {/* stats band */}
        <div className="container" style={{ marginTop: 40 }}>
          <div className="stats grid-4">
            <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Industrial units served</div></div>
            <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectoral areas</div></div>
            <div className="stat"><div className="num"><Counter to={20} /></div><div className="lbl">NABET sectors</div></div>
            <div className="stat"><div className="num"><Counter to={25} suffix="+" /></div><div className="lbl">Expert team members</div></div>
          </div>
        </div>
      </section>

      {/* ===================== INTRO ===================== */}
      <section className="section section--soft" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">Environment Management and Engineering Services</h2>
            <p className="section-sub" style={{ textAlign: "justify", marginTop: 24, fontSize: "1.05rem", maxWidth: "900px", marginInline: "auto" }}>
              Rejig GreenLogic (RGPL) is a full-service environmental consulting and engineering firm. We provide expertise in regulatory compliance, permitting, technical services, and the development of environmental programs. Our stellar reputation is built on our commitment to excellence in the design, implementation, and management of innovative solutions for both private and public sector clients.
            </p>
            <p className="section-sub" style={{ textAlign: "justify", marginTop: 12, fontSize: "1.05rem", maxWidth: "900px", marginInline: "auto" }}>
              We are serving clients with a team of experts and associates accredited by the Quality Council of India-NABET and an in-house well-equipped EPA-recognized and NABL accredited laboratories. We assess all factors contributing to environmental concerns in view of legal, statutory compliances & consultancy services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== DETAILED PANELS ===================== */}
      
      {/* Panel 1 (Environment Consultancy Services) */}
      <section className="detailed-panel">
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Accredited by QCI-NABET | Empanelled with Pollution Control Board</span>
            <h2>Environment Consultancy Services</h2>
            <p style={{ textAlign: "justify" }}>
              RGPL's Environment Management & Engineering Division is a full-service consulting partner helping organizations enhance environmental performance, ensure compliance, and achieve sustainability goals. Backed by state-of-the-art laboratories and an expert team, we deliver end-to-end solutions. Thus, EME division partners with an organization in their efforts of achieving sustainable business model.
            </p>
            <p style={{ marginBottom: 24, color: "var(--muted)", textAlign: "justify" }}>
              Our primary service includes obtaining environmental clearance (in accordance with the Environment Impact Assessment Notification) from the Ministry of Environment and Forest (MoEFCC) as well as from the State Environmental Impact Assessment Authority and NOC/consent from Pollution Control Board.
            </p>
            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Core Expertise:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px" }}>
              <li><strong>Techno-Legal Advisory, Environment & Social Impacts Assessment (ESIA)</strong> Studies (as per IFC & ADB Guidelines) & Environmental Impact Assessment (EIA) Studies, Environmental Monitoring and Environmental Compliance Auditing: Environmental Due Diligence, Environmental Permitting</li>
              <li><strong>Social Impact Assessment (SIA) Studies</strong>, Chemical/Industrial Risk Assessment, Biodiversity Impact Assessment (BIA), Ecology and Biodiversity Study/Tree Enumeration</li>
              <li><strong>Sustainability & ESDD studies</strong> - Corporate EHS (Environment, Health & Safety), ESGMS Framework/ Management System (ESGMS) and Trainings, The gaps identified in E&S and E&S Action Plan (ESAP), ES DD/ Red Flag Assessment, Climate Change Risk Assessment (CCRA)</li>
              <li><strong>ESIA Study, ESR DD</strong> (to Understand The Business Feasibility)</li>
              <li><strong>Coastal Regulatory Zone Clearance</strong>, Marine Environment Monitoring (Marine Water & Sea Bed Sediment Sampling & Analysis), Hydrodynamic Study</li>
              <li><strong>Forest Clearance & Wildlife Clearances</strong>, Wildlife Conservation Plan/Mangrove Management Plan</li>
              <li><strong>Environment/Waste/Green Audits</strong>, Damage assessment as per OM B04(E)</li>
              <li><strong>Leak Detection and Repair (LDAR)</strong> studies in Pharma & Oil Refining Industries, Indoor Air Quality (IAQ) Testing in IT/ITES/Hospitality/Hospitals Facilities</li>
              <li><strong>IGBC/LEED Documentation</strong> For Green Building Certification</li>
              <li><strong>Mining Plan Preparation & Dgps Surveys</strong></li>
            </ul>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Panel 2 (Wastewater Treatment & Water Management) */}
      <section className="detailed-panel" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Transforming Water | Protecting Nature | Empowering Industries</span>
            <h2>Wastewater Treatment & Water Management</h2>

            <p style={{ textAlign: "justify" }}>
              Water is one of the world's most valuable natural resources, supporting ecosystems, industries, agriculture, and human life. As industrialization and urbanization continue to grow, the responsible management of water resources has become more important than ever. At Rejib Green Private Limited, we are committed to delivering innovative, sustainable, and technology-driven wastewater treatment and water management solutions that help industries, municipalities, institutions, and commercial facilities conserve water, reduce pollution, comply with environmental regulations, and contribute to a greener future.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our comprehensive range of services covers every aspect of water treatment—from raw water purification and process water optimization to wastewater recycling, sewage treatment, industrial effluent management, zero liquid discharge systems, sludge handling, and intelligent water monitoring. By combining engineering expertise, advanced treatment technologies, and environmental responsibility, we create customized solutions that maximize operational efficiency while minimizing environmental impact.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              We believe that every drop of water has value. Through sustainable water management strategies, we help organizations reduce freshwater consumption, recover valuable resources, lower operational costs, and achieve long-term environmental compliance.
            </p>

            {/* Image row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <img src={waterTreatmentImg} alt="Modern Wastewater Treatment Plant" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} loading="lazy" />
              <SmartImg src={U("1516934812323-c91726a42142")} alt="Water Management" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} />
            </div>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Building a Sustainable Water Future</h3>
            <p style={{ textAlign: "justify" }}>
              Water scarcity, climate change, population growth, and increasing industrial activities have placed tremendous pressure on global freshwater resources. Every industry today faces the challenge of balancing production requirements with environmental sustainability.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Rejib Green Private Limited provides integrated water solutions that enable businesses to operate responsibly while improving efficiency and reducing costs. Our engineering team designs, installs, upgrades, and maintains advanced water treatment systems tailored to the specific needs of each client. Whether it is treating industrial wastewater, recycling process water, recovering valuable chemicals, managing sewage, or implementing advanced membrane technologies, our solutions are designed to deliver measurable environmental and economic benefits.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Vision</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              To become a trusted global leader in sustainable water management by delivering innovative, efficient, and environmentally responsible wastewater treatment solutions that support industries, communities, and ecosystems.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Mission</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our mission is to protect water resources through innovative engineering, advanced treatment technologies, and sustainable environmental practices. We strive to help organizations achieve water security, regulatory compliance, operational excellence, and long-term sustainability.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Core Values</h3>
            <p style={{ textAlign: "justify", marginBottom: 8 }}>At Rejib Green Private Limited, our work is guided by:</p>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Environmental Responsibility</li>
              <li>Engineering Excellence</li>
              <li>Innovation</li>
              <li>Sustainability</li>
              <li>Customer Satisfaction</li>
              <li>Safety</li>
              <li>Quality</li>
              <li>Transparency</li>
              <li>Integrity</li>
              <li>Continuous Improvement</li>
            </ul>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Why Wastewater Treatment Matters</h3>
            <p style={{ textAlign: "justify" }}>
              Wastewater treatment is one of the most important environmental protection activities in modern society. Every day, industries, municipalities, commercial establishments, hospitals, and residential communities generate millions of liters of wastewater containing contaminants that can harm ecosystems if released untreated.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Proper wastewater treatment removes harmful pollutants before discharge or reuse, protecting rivers, lakes, groundwater, and marine environments. It also enables industries to recycle water, reduce freshwater consumption, recover valuable materials, and comply with environmental regulations. Modern wastewater treatment is no longer just about pollution control—it is a strategic investment that supports operational efficiency, sustainability, and long-term business resilience.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>The Importance of Water Management</h3>
            <p style={{ textAlign: "justify" }}>
              Effective water management involves the planning, monitoring, conservation, treatment, distribution, reuse, and responsible disposal of water resources. It helps organizations optimize water consumption while ensuring environmental protection and regulatory compliance.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              A well-designed water management system enables industries to reduce water losses, improve production efficiency, lower operational costs, enhance sustainability performance, and minimize environmental risks. At Rejib Green Private Limited, we integrate engineering expertise with digital technologies, automation, and intelligent monitoring systems to create comprehensive water management strategies that deliver measurable results.
            </p>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Core Expertise:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px" }}>
              <li><strong>Importance of Wastewater Treatment:</strong> Protecting ecosystems and public health.</li>
              <li><strong>Water Management Services:</strong> Comprehensive planning for resource optimization.</li>
              <li><strong>Industrial Wastewater Treatment:</strong> Handling complex effluents across manufacturing sectors.</li>
              <li><strong>Municipal Wastewater Treatment:</strong> Large-scale civic water purification.</li>
              <li><strong>Effluent Treatment Plants (ETP):</strong> Custom-designed for specific pollutant loads.</li>
              <li><strong>Sewage Treatment Plants (STP):</strong> Advanced biological and physical treatment.</li>
              <li><strong>Zero Liquid Discharge (ZLD):</strong> Closing the loop on industrial water consumption.</li>
              <li><strong>Water Recycling & Reuse:</strong> Treating wastewater to potable or process-grade standards.</li>
              <li><strong>Technologies & Equipment:</strong> Deployment of MBBR, SBR, RO, and UF systems.</li>
              <li><strong>Engineering & Design:</strong> Scalable, robust, and energy-efficient system architectures.</li>
              <li><strong>Industries Served:</strong> Pharma, textiles, chemical, food & beverage, and more.</li>
              <li><strong>Regulatory Compliance & Standards:</strong> Meeting CPCB and state-specific discharge norms.</li>
              <li><strong>Project Execution Methodology:</strong> Turnkey delivery from concept to commissioning.</li>
              <li><strong>Sustainability & Environmental Benefits:</strong> Reducing freshwater footprint.</li>
              <li><strong>Why Choose Rejig Private Limited:</strong> Unmatched expertise, reliability, and technology.</li>
            </ul>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Panel 3 (Forestry, Wildlife & Biodiversity Conservation) */}
      <section className="detailed-panel">
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Protecting Forests | Preserving Wildlife | Conserving Biodiversity</span>
            <h2>Forestry, Wildlife & Biodiversity Conservation</h2>

            <p style={{ textAlign: "justify" }}>
              Nature is the foundation of life. Healthy forests regulate the climate, wildlife maintains ecological balance, and biodiversity supports resilient ecosystems that provide food, water, medicine, clean air, and countless ecosystem services. As environmental challenges continue to grow due to climate change, habitat loss, urban expansion, pollution, and unsustainable resource use, the need for comprehensive forestry, wildlife, and biodiversity conservation has never been greater.
            </p>
            <p style={{ textAlign: "justify" }}>
              Rejib Green Private Limited is committed to delivering innovative, science-based, and sustainable environmental solutions that protect natural ecosystems while supporting responsible development. Our forestry, wildlife, and biodiversity conservation services combine ecological expertise, advanced technologies, environmental planning, geospatial analysis, remote sensing, GIS mapping, field investigations, and regulatory compliance to help governments, industries, infrastructure developers, research institutions, and conservation organizations achieve sustainable environmental outcomes.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              We believe that economic development and environmental conservation can coexist through careful planning, scientific assessment, responsible resource management, and long-term ecological stewardship. Every project we undertake reflects our commitment to preserving nature for future generations while creating practical solutions that meet present-day development needs.
            </p>

            {/* Image row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <img src={forestBioImg} alt="Forest Biodiversity Conservation" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} loading="lazy" />
              <SmartImg src={U("1441974231531-c6227db76b6e")} alt="Wildlife Conservation" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} />
            </div>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Creating a Sustainable Future Through Nature Conservation</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Forests are among the most valuable natural resources on Earth. They regulate rainfall, capture atmospheric carbon, protect watersheds, prevent soil erosion, support agriculture, provide livelihoods, and sustain millions of plant and animal species. Wildlife contributes to ecological balance through pollination, seed dispersal, nutrient cycling, and maintaining healthy food chains. Biodiversity ensures ecosystem resilience, enabling natural systems to adapt to environmental changes and recover from disturbances. As populations grow and industrial activities expand, protecting these natural assets requires integrated planning, scientific research, community participation, policy support, and innovative environmental technologies. Rejib Green Private Limited works closely with public and private stakeholders to develop conservation strategies that safeguard ecological integrity while enabling sustainable growth.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Vision</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              To become a trusted leader in forestry, wildlife, and biodiversity conservation by delivering innovative environmental solutions that protect ecosystems, conserve natural resources, strengthen climate resilience, and promote sustainable development across diverse landscapes.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Mission</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our mission is to conserve forests, protect wildlife, restore degraded ecosystems, enhance biodiversity, and support environmentally responsible development through scientific research, advanced technologies, ecological planning, and collaborative partnerships with governments, industries, institutions, and local communities.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Core Values</h3>
            <p style={{ textAlign: "justify", marginBottom: 8 }}>At Rejib Green Private Limited, our work is guided by principles that place environmental responsibility at the center of every project.</p>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Environmental Stewardship</li>
              <li>Scientific Excellence</li>
              <li>Ecological Integrity</li>
              <li>Innovation and Technology</li>
              <li>Sustainability</li>
              <li>Transparency</li>
              <li>Community Engagement</li>
              <li>Ethical Conservation Practices</li>
              <li>Continuous Learning</li>
              <li>Long-Term Environmental Responsibility</li>
            </ul>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Understanding Forestry Conservation</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Forestry conservation is the science and practice of protecting, restoring, managing, and sustainably utilizing forest ecosystems. Modern forestry extends beyond timber production and includes biodiversity conservation, watershed protection, carbon sequestration, habitat restoration, climate change mitigation, and community-based forest management. Healthy forests provide essential ecosystem services that support both environmental stability and economic prosperity. Sustainable forestry practices ensure that forest resources remain available for future generations while preserving ecological balance and protecting wildlife habitats. Rejib Green Private Limited develops integrated forestry management solutions that combine ecological science with modern technologies to promote responsible forest conservation and sustainable resource utilization.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Why Forests Matter</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Forests play a vital role in maintaining life on Earth. They absorb carbon dioxide, release oxygen, regulate local and global climate systems, recharge groundwater, stabilize soils, reduce flooding, support agriculture, and provide habitat for an extraordinary diversity of plant and animal species. Millions of people depend directly on forests for livelihoods, traditional medicine, food resources, and cultural identity. Conserving forests therefore benefits not only biodiversity but also human well-being, economic development, and long-term environmental sustainability.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Wildlife Conservation for Ecological Balance</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Wildlife conservation focuses on protecting animal species and their habitats from threats such as habitat fragmentation, pollution, illegal hunting, invasive species, climate change, and unsustainable land-use practices. Every species contributes to ecosystem health. Predators regulate prey populations, pollinators support agriculture, herbivores shape vegetation dynamics, and decomposers recycle nutrients. The loss of even a single species can have cascading effects throughout an ecosystem. Rejib Green Private Limited designs wildlife conservation strategies that prioritize habitat protection, ecological connectivity, species monitoring, and sustainable coexistence between people and nature.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Biodiversity Conservation</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Biodiversity encompasses the variety of life at genetic, species, and ecosystem levels. Rich biodiversity enhances ecosystem resilience, improves productivity, supports food security, strengthens climate adaptation, and provides valuable resources for medicine, agriculture, and scientific research. Human activities have accelerated biodiversity loss worldwide, making conservation efforts increasingly important. Protecting biodiversity requires habitat conservation, restoration of degraded ecosystems, responsible land management, environmental monitoring, and informed policy decisions. Our biodiversity conservation services integrate scientific surveys, GIS mapping, ecological assessments, restoration planning, and long-term monitoring to support sustainable development while minimizing ecological impacts.
            </p>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Our Comprehensive Services:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Forest Resource Assessment</li>
              <li>Forest Management Planning</li>
              <li>Afforestation and Reforestation Programs</li>
              <li>Habitat Restoration</li>
              <li>Wildlife Habitat Assessment</li>
              <li>Biodiversity Surveys</li>
              <li>Flora and Fauna Inventories</li>
              <li>Ecological Baseline Studies</li>
              <li>Wildlife Corridor Identification</li>
              <li>Protected Area Management Support</li>
              <li>Environmental Impact Assessment (EIA)</li>
              <li>Biodiversity Impact Assessment</li>
              <li>Ecological Risk Assessment</li>
              <li>Carbon Stock Assessment</li>
              <li>Forest Carbon Monitoring</li>
              <li>REDD+ Project Support</li>
              <li>Ecosystem Restoration Planning</li>
              <li>Wetland Conservation</li>
              <li>Mangrove Restoration</li>
              <li>Grassland Restoration</li>
              <li>Watershed Management</li>
              <li>Invasive Species Management</li>
              <li>Community Forestry Programs</li>
              <li>Nature-Based Solutions</li>
              <li>Climate Change Adaptation Planning</li>
              <li>GIS and Remote Sensing Applications</li>
              <li>Drone-Based Ecological Surveys</li>
              <li>Satellite Image Analysis</li>
              <li>Wildlife Monitoring Systems</li>
              <li>Biodiversity Database Development</li>
              <li>Conservation Planning</li>
              <li>Environmental Compliance Support</li>
            </ul>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Advanced Technologies We Utilize:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px" }}>
              <li>Geographic Information Systems (GIS)</li>
              <li>Remote Sensing</li>
              <li>Satellite Image Interpretation</li>
              <li>Drone Mapping</li>
              <li>LiDAR-Based Forest Surveys</li>
              <li>GPS Field Data Collection</li>
              <li>Artificial Intelligence for Environmental Analysis</li>
              <li>Machine Learning-Based Habitat Modeling</li>
              <li>Environmental Data Analytics</li>
              <li>Biodiversity Information Systems</li>
              <li>Cloud-Based Spatial Data Management</li>
              <li>IoT Environmental Sensors</li>
              <li>Automated Wildlife Monitoring Cameras</li>
              <li>Acoustic Monitoring Systems</li>
              <li>Digital Forest Inventory Tools</li>
              <li>Climate Modeling Software</li>
              <li>Hydrological Modeling</li>
              <li>Carbon Accounting Platforms</li>
              <li>Decision Support Systems</li>
              <li>Environmental Dashboards</li>
            </ul>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Panel 4 (ESG, Sustainability & Climate Risk Assessment) */}
      <section className="detailed-panel" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Building Responsible Businesses for a Sustainable Future</span>
            <h2>ESG, Sustainability & Climate Risk Assessment</h2>

            <p style={{ textAlign: "justify" }}>
              Environmental responsibility, social accountability, and strong corporate governance are no longer optional—they are essential pillars of modern business success. Investors, regulators, customers, financial institutions, and communities increasingly expect organizations to operate transparently, minimize environmental impacts, create positive social value, and maintain high standards of governance. At the same time, climate change is introducing new operational, financial, and regulatory risks that require organizations to strengthen resilience and adopt forward-looking sustainability strategies.
            </p>
            <p style={{ textAlign: "justify" }}>
              Rejib Green Private Limited provides comprehensive Environmental, Social, and Governance (ESG), Sustainability, and Climate Risk Assessment services that help organizations integrate responsible business practices into every stage of planning, operations, and growth. We combine scientific expertise, environmental engineering, sustainability consulting, climate analytics, regulatory knowledge, and digital technologies to support industries, infrastructure projects, government agencies, financial institutions, developers, and multinational corporations in achieving measurable sustainability outcomes.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our integrated approach enables organizations to improve ESG performance, identify climate-related risks and opportunities, strengthen regulatory compliance, reduce environmental impacts, enhance stakeholder confidence, improve operational efficiency, and create long-term value for businesses and society.
            </p>

            {/* Image row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <img src={esgImg} alt="ESG Sustainability Consulting" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} loading="lazy" />
              <SmartImg src={U("1473773508845-188df298d2d1")} alt="Climate Risk Assessment" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} />
            </div>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Driving Sustainable Growth Through ESG Excellence</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Global markets are undergoing a significant transformation. Governments are strengthening environmental regulations, investors are prioritizing sustainable investments, financial institutions are integrating ESG performance into lending decisions, and customers increasingly prefer environmentally responsible businesses. Organizations that proactively manage sustainability and climate risks are better positioned to improve resilience, enhance competitiveness, attract investment, and achieve sustainable growth. Rejib Green Private Limited partners with organizations to develop practical ESG strategies, climate adaptation plans, sustainability roadmaps, and risk management frameworks that align with international best practices while supporting local regulatory requirements.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Vision</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              To become a trusted leader in ESG consulting, sustainability advisory, and climate risk assessment by helping organizations create resilient, responsible, and future-ready businesses that generate lasting environmental, social, and economic value.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Mission</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our mission is to empower organizations with innovative sustainability solutions, robust ESG frameworks, climate risk intelligence, and science-based environmental strategies that strengthen resilience, improve governance, enhance stakeholder trust, and support responsible development.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Core Values</h3>
            <p style={{ textAlign: "justify", marginBottom: 8 }}>At Rejib Green Private Limited, every sustainability initiative is guided by a commitment to excellence, integrity, and environmental responsibility.</p>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Sustainability Leadership</li>
              <li>Environmental Stewardship</li>
              <li>Scientific Integrity</li>
              <li>Ethical Governance</li>
              <li>Innovation and Technology</li>
              <li>Transparency</li>
              <li>Accountability</li>
              <li>Collaboration</li>
              <li>Continuous Improvement</li>
              <li>Long-Term Value Creation</li>
            </ul>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Understanding ESG</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Environmental, Social, and Governance (ESG) is a framework used to evaluate how organizations manage environmental impacts, social responsibilities, and governance practices. ESG has become a critical component of corporate strategy because it reflects an organization's commitment to responsible business operations, risk management, transparency, and long-term value creation. A strong ESG program supports regulatory compliance, improves operational efficiency, strengthens investor confidence, enhances brand reputation, reduces business risks, and contributes to sustainable economic development.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Environmental Responsibility</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              The environmental pillar focuses on how an organization manages its impact on natural resources and ecosystems. Responsible environmental management includes reducing greenhouse gas emissions, improving energy efficiency, conserving water resources, minimizing waste, preventing pollution, protecting biodiversity, and adopting sustainable resource management practices.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Social Responsibility</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              The social pillar evaluates how organizations interact with employees, customers, suppliers, local communities, and other stakeholders. Strong social performance contributes to workforce well-being, community development, occupational health and safety, diversity and inclusion, ethical labor practices, and responsible supply chain management.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Corporate Governance</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Effective governance ensures that organizations operate transparently, ethically, and responsibly. Strong governance systems promote accountability, risk management, regulatory compliance, ethical decision-making, internal controls, board oversight, and responsible leadership.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Sustainability as a Business Strategy</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Sustainability is more than environmental protection—it is a comprehensive approach to creating long-term economic, environmental, and social value. Organizations that integrate sustainability into business strategy often experience improved efficiency, lower operating costs, stronger stakeholder trust, enhanced innovation, and greater resilience to market changes.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Climate Change and Business Risk</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Climate change presents both physical and transition risks that can significantly affect business operations, infrastructure, supply chains, financial performance, and regulatory obligations. Rising temperatures, extreme weather events, flooding, droughts, changing precipitation patterns, sea-level rise, and evolving climate policies require organizations to assess vulnerabilities and strengthen resilience. Climate risk assessment enables organizations to identify potential impacts, evaluate exposure, prioritize mitigation measures, and develop adaptive strategies that reduce long-term risks while supporting sustainable growth.
            </p>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Our ESG and Sustainability Services:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>ESG Strategy Development</li>
              <li>ESG Materiality Assessment</li>
              <li>Sustainability Strategy and Roadmap</li>
              <li>Sustainability Reporting</li>
              <li>ESG Gap Assessment</li>
              <li>Environmental Performance Assessment</li>
              <li>Carbon Footprint Assessment</li>
              <li>Greenhouse Gas (GHG) Inventory</li>
              <li>Scope 1, Scope 2, and Scope 3 Emissions Analysis</li>
              <li>Net Zero Transition Planning</li>
              <li>Climate Risk Assessment</li>
              <li>Climate Vulnerability Assessment</li>
              <li>Climate Adaptation Planning</li>
              <li>Climate Resilience Strategy</li>
              <li>Physical Climate Risk Analysis</li>
              <li>Transition Risk Assessment</li>
              <li>Decarbonization Planning</li>
              <li>Energy Efficiency Assessment</li>
              <li>Renewable Energy Advisory</li>
              <li>Circular Economy Strategy</li>
              <li>Waste Reduction and Resource Efficiency</li>
              <li>Water Stewardship Programs</li>
              <li>Sustainable Supply Chain Assessment</li>
              <li>Biodiversity Risk Assessment</li>
              <li>Social Impact Assessment</li>
              <li>Stakeholder Engagement Strategy</li>
              <li>Human Rights Due Diligence</li>
              <li>Occupational Health and Safety Advisory</li>
              <li>Corporate Governance Assessment</li>
              <li>Regulatory Compliance Support</li>
              <li>ESG Data Management</li>
              <li>Sustainability KPI Development</li>
              <li>ESG Performance Monitoring</li>
              <li>Sustainable Finance Advisory</li>
              <li>Green Project Evaluation</li>
              <li>Environmental and Social Risk Assessment</li>
              <li>ESG Training and Capacity Building</li>
            </ul>

            <p style={{ textAlign: "justify", fontStyle: "italic", color: "var(--muted)" }}>
              Our consulting services align with internationally recognized sustainability and ESG frameworks to ensure credibility, consistency, and global relevance. We assist organizations in understanding, implementing, and reporting in accordance with leading standards and best practices, helping them meet stakeholder expectations and regulatory requirements while improving transparency and accountability.
            </p>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Panel 5 (Coastal, Marine & Remote Sensing Solutions) */}
      <section className="detailed-panel">
        <div className="container dp-grid">
          <Reveal className="dp-text" style={{ gridColumn: "1 / -1", maxWidth: "100%" }}>
            <span className="eyebrow">Advancing Coastal Resilience Through Marine Science and Geospatial Intelligence</span>
            <h2>Coastal, Marine & Remote Sensing Solutions</h2>

            <p style={{ textAlign: "justify" }}>
              Coastal and marine ecosystems are among the most productive and valuable natural environments on Earth. They support biodiversity, fisheries, tourism, transportation, renewable energy, coastal communities, and global trade while providing essential ecosystem services such as carbon sequestration, shoreline protection, climate regulation, and nutrient cycling. However, these ecosystems face increasing pressures from climate change, sea-level rise, coastal erosion, pollution, habitat degradation, urban expansion, industrial development, and extreme weather events.
            </p>
            <p style={{ textAlign: "justify" }}>
              Rejib Green Private Limited delivers comprehensive Coastal, Marine, and Remote Sensing Solutions that combine environmental science, oceanography, hydrography, geospatial technologies, satellite observations, drone surveys, Geographic Information Systems (GIS), remote sensing, artificial intelligence, and environmental engineering to support sustainable coastal development and marine resource management.
            </p>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our multidisciplinary team provides innovative and science-based solutions for governments, ports, coastal infrastructure developers, offshore industries, environmental agencies, research organizations, renewable energy developers, and private enterprises. From shoreline monitoring and marine environmental impact assessments to satellite image analysis and digital mapping, we help clients make informed decisions that protect natural ecosystems while supporting responsible economic development.
            </p>

            {/* Image row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
              <img src={coastalImg} alt="Coastal Marine Environment" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} loading="lazy" />
              <SmartImg src={U("1505142468610-359e7d316be0")} alt="Remote Sensing" style={{ width: "100%", borderRadius: 12, boxShadow: "var(--shadow-lg)" }} />
            </div>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Protecting Coastal and Marine Resources for Future Generations</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              More than one-third of the world's population lives in coastal regions. These areas are economic hubs that support ports, industries, fisheries, tourism, transportation, renewable energy, and urban development. At the same time, they are among the most vulnerable regions to climate change, rising sea levels, cyclones, flooding, coastal erosion, saltwater intrusion, and habitat loss. Effective coastal management requires accurate environmental data, advanced spatial analysis, continuous monitoring, scientific assessments, and integrated planning.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Vision</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              To become a trusted leader in coastal, marine, and geospatial consulting by delivering innovative, technology-driven solutions that protect marine ecosystems, strengthen climate resilience, support sustainable coastal development, and promote responsible environmental stewardship.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Mission</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Our mission is to integrate marine science, geospatial intelligence, remote sensing technologies, and environmental engineering to deliver reliable, sustainable, and future-ready solutions that protect coastal environments while supporting economic growth and resilient infrastructure development.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Our Core Values</h3>
            <p style={{ textAlign: "justify", marginBottom: 8 }}>Every project undertaken by Rejib Green Private Limited is guided by values that reflect our commitment to environmental excellence and sustainable development.</p>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Environmental Responsibility</li>
              <li>Scientific Integrity</li>
              <li>Innovation and Technology</li>
              <li>Sustainability</li>
              <li>Accuracy and Quality</li>
              <li>Transparency</li>
              <li>Collaboration</li>
              <li>Safety</li>
              <li>Client-Centric Solutions</li>
              <li>Continuous Improvement</li>
            </ul>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Understanding Coastal Management</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Coastal management is the process of planning, protecting, developing, and sustainably managing coastal zones and marine environments. It involves balancing environmental conservation with economic activities such as ports, shipping, fisheries, tourism, renewable energy, and coastal infrastructure development. Integrated Coastal Zone Management (ICZM) promotes coordinated decision-making across environmental, social, and economic sectors to ensure long-term sustainability of coastal ecosystems.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Marine Environmental Solutions</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Marine ecosystems include oceans, estuaries, lagoons, coral reefs, mangroves, seagrass beds, salt marshes, and coastal wetlands. These ecosystems support an extraordinary diversity of marine life while providing critical ecosystem services that benefit both nature and society. Our marine environmental services help organizations understand marine ecological conditions, evaluate environmental impacts, protect sensitive habitats, monitor ecosystem health, and develop sustainable marine management strategies.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Remote Sensing for Environmental Intelligence</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              Remote sensing uses satellite imagery, drones, aircraft, LiDAR, radar, and sensor technologies to collect environmental information without direct physical contact. Modern remote sensing enables continuous monitoring of land, water, forests, coastlines, infrastructure, and natural resources over large geographic areas with exceptional accuracy. Through advanced image processing, GIS integration, machine learning, and artificial intelligence, we transform complex environmental data into actionable insights that support better decision-making.
            </p>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Geographic Information Systems (GIS)</h3>
            <p style={{ textAlign: "justify", marginBottom: 24 }}>
              GIS is a powerful technology that enables organizations to collect, manage, analyze, and visualize spatial information. By integrating environmental data, satellite imagery, field surveys, topographic information, climate datasets, and infrastructure records, GIS supports informed planning and sustainable resource management. GIS enables clients to understand spatial relationships, identify environmental risks, monitor changes over time, and optimize project planning.
            </p>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Our Comprehensive Services:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Coastal Zone Management</li>
              <li>Integrated Coastal Zone Management (ICZM)</li>
              <li>Shoreline Change Analysis</li>
              <li>Coastal Vulnerability Assessment</li>
              <li>Coastal Erosion Studies</li>
              <li>Sediment Transport Analysis</li>
              <li>Beach Profiling</li>
              <li>Coastal Infrastructure Planning</li>
              <li>Marine Environmental Impact Assessment (MEIA)</li>
              <li>Marine Ecological Surveys</li>
              <li>Coral Reef Assessment</li>
              <li>Mangrove Mapping and Restoration</li>
              <li>Seagrass Habitat Assessment</li>
              <li>Wetland Mapping</li>
              <li>Marine Biodiversity Surveys</li>
              <li>Fisheries Resource Assessment</li>
              <li>Oceanographic Studies</li>
              <li>Bathymetric Surveys</li>
              <li>Hydrographic Surveys</li>
              <li>Tidal Analysis</li>
              <li>Wave Climate Assessment</li>
              <li>Coastal Flood Risk Assessment</li>
              <li>Storm Surge Modeling</li>
              <li>Sea-Level Rise Assessment</li>
              <li>Climate Change Vulnerability Assessment</li>
              <li>Blue Carbon Assessment</li>
              <li>Marine Pollution Monitoring</li>
              <li>Water Quality Monitoring</li>
              <li>Sediment Quality Assessment</li>
              <li>Oil Spill Risk Assessment</li>
              <li>Environmental Baseline Studies</li>
              <li>Habitat Suitability Modeling</li>
              <li>Ecosystem Restoration Planning</li>
              <li>Coastal Regulation Compliance</li>
              <li>Environmental Monitoring Programs</li>
              <li>GIS Mapping Services</li>
              <li>Remote Sensing Applications</li>
              <li>Satellite Image Analysis</li>
              <li>Drone Surveys</li>
              <li>LiDAR Mapping</li>
              <li>Terrain Modeling</li>
              <li>Land Use and Land Cover Mapping</li>
              <li>Change Detection Analysis</li>
              <li>Spatial Data Management</li>
              <li>Geospatial Decision Support Systems</li>
              <li>Digital Environmental Dashboards</li>
            </ul>

            <h3 style={{ marginBottom: 16, fontSize: "1.2rem", fontWeight: 700 }}>Advanced Technologies We Use:</h3>
            <ul className="dp-list" style={{ columns: "2", columnGap: "40px", marginBottom: 24 }}>
              <li>Geographic Information Systems (GIS)</li>
              <li>Satellite Remote Sensing</li>
              <li>UAV and Drone Mapping</li>
              <li>LiDAR Surveys</li>
              <li>GNSS and GPS Surveying</li>
              <li>Bathymetric Survey Systems</li>
              <li>Hydrographic Survey Equipment</li>
              <li>Acoustic Monitoring Technologies</li>
              <li>Oceanographic Instruments</li>
              <li>Environmental Monitoring Sensors</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning Algorithms</li>
              <li>Big Data Analytics</li>
              <li>Spatial Data Infrastructure</li>
              <li>Digital Elevation Models</li>
              <li>Coastal Simulation Models</li>
              <li>Hydrodynamic Modeling</li>
              <li>Environmental Data Visualization</li>
              <li>Cloud-Based Geospatial Platforms</li>
              <li>Interactive Mapping Portals</li>
            </ul>

            <h3 style={{ marginBottom: 12, fontSize: "1.2rem", fontWeight: 700 }}>Climate Change and Coastal Resilience</h3>
            <p style={{ textAlign: "justify" }}>
              Climate change is transforming coastal environments through rising sea levels, stronger storms, changing ocean temperatures, coastal flooding, shoreline erosion, saltwater intrusion, and shifting marine ecosystems. Building climate-resilient coastal infrastructure requires scientific assessments, predictive modeling, ecosystem restoration, and adaptive management strategies. Rejib Green Private Limited develops climate resilience solutions that help governments, industries, and coastal communities understand future risks, strengthen preparedness, protect critical infrastructure, and conserve vulnerable ecosystems through integrated planning and sustainable engineering.
            </p>
            <Link to="/services" className="btn btn-primary" style={{ marginTop: 12 }}>Know more <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== CREDENTIALS ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <h2 className="section-title" style={{ color: "#143a52", marginBottom: 40 }}>Credentials</h2>
          </Reveal>
          
          <div className="grid grid-2" style={{ alignItems: "center", gap: 60 }}>
            {/* Left side: Logo & Text */}
            <Reveal className="text-center">
              <div style={{ 
                display: "inline-flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: 150, 
                height: 150, 
                borderRadius: "50%", 
                boxShadow: "var(--shadow)", 
                background: "#fff",
                marginBottom: 24
              }}>
                <img src={nabetLogo} alt="NABET Logo" style={{ width: 100, objectFit: "contain" }} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.5 }}>Accreditation By Quality Council Of India, NABET As An EIA Consultant For 14 Sectors</h3>
            </Reveal>
            
            {/* Right side: Certificate */}
            <Reveal delay={1}>
              <div style={{ border: "1px solid var(--line)", padding: 8, background: "#fff", boxShadow: "var(--shadow-lg)" }}>
                <img src={nabetCert} alt="NABET Certificate" style={{ width: "100%", height: "auto" }} loading="lazy" />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-2" style={{ alignItems: "center", gap: 60, marginTop: 80 }}>
            {/* Left side: Certificate */}
            <Reveal delay={1}>
              <div style={{ border: "1px solid var(--line)", padding: 8, background: "#fff", boxShadow: "var(--shadow-lg)" }}>
                <img src={isoCert} alt="ISO Certificate" style={{ width: "100%", height: "auto" }} loading="lazy" />
              </div>
            </Reveal>

            {/* Right side: Text */}
            <Reveal className="text-center">
              <div style={{ 
                display: "inline-flex", 
                justifyContent: "center", 
                alignItems: "center",
                width: 150, 
                height: 150, 
                borderRadius: "50%", 
                boxShadow: "var(--shadow)", 
                background: "#fff",
                marginBottom: 24,
                color: "var(--violet-600)"
              }}>
                <IconCheck size={64} />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.5 }}>ISO 9001:2015 Certified Organization</h3>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== AI SECTION ===================== */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <div className="hero-card" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="hc-row"><span className="hc-ico">🤖</span><div><b>AI Visitor Assistant</b><small>Answers clearances, sectors &amp; accreditation 24/7</small></div></div>
              <div className="hc-row"><span className="hc-ico">📋</span><div><b>Smart Project Intake</b><small>Preliminary read on likely clearances</small></div></div>
              <div className="hc-row"><span className="hc-ico">🛰️</span><div><b>Geospatial AI</b><small>Satellite change detection on ArcGIS/Erdas</small></div></div>
              <div className="hc-row"><span className="hc-ico">📡</span><div><b>Predictive Monitoring</b><small>Forecasts threshold breaches before they happen</small></div></div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">✨ AI-Integrated</span>
            <h2 className="section-title">Real intelligence, layered onto real expertise</h2>
            <p className="body">
              We're putting AI to work across our research desk, this website, and our monitoring
              products — shortening the slow parts of the work without ever removing the qualified
              consultant who reviews and signs off every output.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Instant answers about clearances, sectors &amp; NABET accreditation</li>
              <li><span className="tick">✓</span> Guided intake that hands our team a structured brief</li>
              <li><span className="tick">✓</span> AI-assisted satellite analysis for forest, mining &amp; hydrology</li>
              <li><span className="tick">✓</span> Predictive alerts on CEQMS &amp; air-quality sensor data</li>
            </ul>
            <Link to="/ai-integration" className="btn btn-ghost" style={{ marginTop: 22 }}>
              Explore our AI approach <IconArrow size={18} />
            </Link>
          </Reveal>
        </div>

        {/* AI feature teaser */}
        <div className="container" style={{ marginTop: 40 }}>
          <div className="grid grid-3">
            {AI_FEATURES.slice(0, 3).map((f, i) => (
              <Reveal key={f.id} delay={(i % 3) + 1} className="card">
                <div className="ico">{f.icon}</div>
                <span className="tag">{f.phase}</span>
                <h3>{f.label}</h3>
                <p>{f.summary}</p>
              </Reveal>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 30 }}>
            <Link to="/ai-integration" className="btn btn-primary">See all 5 AI features <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ===================== VISION / MISSION ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </Reveal>
          <div className="vm-split" style={{ marginTop: 44 }}>
            <Reveal className="vm-image">
              <img src={visionImg} alt="Nature and industry in partnership" />
            </Reveal>
            <Reveal delay={1} className="vm-cards">
              <div className="vm-card">
                <div className="ico"><IconEye size={26} /></div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To become the valued partner with which clients can pivot their green image &amp; sustainability drive.</p>
                </div>
              </div>
              <div className="vm-card">
                <div className="ico"><IconShield size={26} /></div>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Maintaining the highest integrity to QCI, NABET and MoEF&amp;CC standards — built on a
                    culture of trust, responsibility, collaboration and performance, as a responsible
                    entity preaching green initiatives that delight our customers.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== WORKING FORCE ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our people</span>
            <h2 className="section-title">Introduction to our working force</h2>
            <p className="section-sub">A multidisciplinary crew of consultants, lab experts and field officers.</p>
          </Reveal>
          <div className="workforce">
            {WORKFORCE.map((w) => (
              <Reveal key={w.role} className="wf-row">
                <div className="wf-text">
                  <span className="tag">{w.sub}</span>
                  <h3>{w.role}</h3>
                  <p>{w.desc}</p>
                </div>
                <div className="wf-card">
                  <div className="ico">{w.icon}</div>
                  <div className="wf-num"><span className="gradient-text"><Counter to={w.count} /></span></div>
                  <div className="wf-card__label">Employees</div>
                  <div className="wf-card__role">{w.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIENTELE ===================== */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Trusted by industry</span>
            <h2 className="section-title">Our clientele</h2>
            <p className="section-sub">A few of the 3,000+ organisations who rely on RGPL.</p>
          </Reveal>
          <Reveal className="client-grid">
            {CLIENT_LOGOS.map((c) => (
              <div className="client-logo" key={c.name}>
                <img src={c.src} alt={c.name} loading="lazy" />
              </div>
            ))}
          </Reveal>
          <div className="text-center" style={{ marginTop: 28 }}>
            <Link to="/clientele" className="btn btn-ghost">See all clientele <IconArrow size={18} /></Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Ready to make compliance your competitive edge?</h2>
            <p>Tell us your sector, location and project type — our smart intake gives you a faster, more accurate proposal.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn-light">Talk to an Expert</Link>
              <Link to="/signup" className="btn btn-light">Create an Account</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
