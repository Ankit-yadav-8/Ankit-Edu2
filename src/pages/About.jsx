import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconArrow, IconUsers, IconBeaker, IconStar, IconCheck } from "../components/Icons.jsx";
import visionDice from "../assets/vision-dice.png";
import nabetCert from "../assets/nabet-certificate.png";
import isoCert from "../assets/iso-certificate.png";

const TEAM = [
  { icon: <IconUsers size={22} />, count: 12, role: "Technical Crew", sub: "Senior & project consultants" },
  { icon: <IconBeaker size={22} />, count: 5, role: "Lab Experts", sub: "Sampling & analysis specialists" },
  { icon: <IconStar size={22} />, count: 3, role: "Field Officers", sub: "On-site monitoring & surveys" },
  { icon: <IconCheck size={22} />, count: 5, role: "Auxiliary Staff", sub: "Coordination & operations" },
];

import Credentials from "../components/Credentials.jsx";
import { SECTORS, SECTOR_COUNT } from "../data/sectors.js";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About RGPL"
        title="A team of environmental experts,"
        highlight="pooled for your green journey"
        subtitle="Incorporated in 2021, RGPL is your techno-legal advisory partner across environmental consultancy — backed by 29 years of legacy."
        breadcrumb="About Us"
        cards={[
          { type: "stat", num: 3000, suffix: "+", label: "Units served", tone: "green" },
          { type: "stat", num: 50, suffix: "+", label: "Sectoral areas", tone: "teal" },
          { type: "info", icon: "🏅", title: "NABET Accredited", sub: `${SECTOR_COUNT} sectors`, tone: "amber" },
          { type: "stat", num: 29, label: "Years of legacy", tone: "green" },
        ]}
      />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="section-title">ABOUT US</h2>
            <ul className="mini-list" style={{ marginTop: 20 }}>
              <li>Rejig Greenlogic Private Limited (RGPL) has been incorporated in Dec, 2021 for providing Environmental Services and Solution; based in Hyderabad (Telangana).</li>
              <li>RGPL's establishment in the south region marks an important milestone to build long-term commitment &amp; render services to the local industries in solving environment related issues.</li>
              <li>RGPL is certified by QCI-NABET (National Accreditation Board for Education and Training) under Certificate No. NABET/EIA/24-27/SA0262, valid upto 28.01.2027.</li>
              <li>RGPL drive innovation and technology adoption by seamlessly integrating our extensive knowledge and skills into every aspect of our services.</li>
              <li>By staying attuned to emerging trends and breakthroughs, RGPL ensures that our services remain at the forefront by bringing together a team of experienced environmental experts dedicated to providing top-notch consultancy and serving as your trusted techno-legal advisory partner.</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Work with us <IconArrow size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="stats grid-2">
              <div className="stat"><div className="num"><Counter to={3000} suffix="+" /></div><div className="lbl">Units served</div></div>
              <div className="stat"><div className="num"><Counter to={50} suffix="+" /></div><div className="lbl">Sectors</div></div>
              <div className="stat"><div className="num"><Counter to={2021} /></div><div className="lbl">Incorporated</div></div>
              <div className="stat"><div className="num"><Counter to={SECTOR_COUNT} /></div><div className="lbl">NABET sectors</div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision (image left, heading + text right) */}
      <section className="section section--soft">
        <div className="container">
          <div className="vm-split" style={{ alignItems: "center" }}>
            <Reveal className="vm-image">
              <img src={visionDice} alt="Mission and Vision" />
            </Reveal>
            <Reveal delay={1} className="vm-cards" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="eyebrow">Our purpose</span>
              <h2 className="section-title">OUR MISSION &amp; VISION</h2>
              <p className="section-sub" style={{ fontWeight: 600, color: "var(--text)" }}>
                To Become The Valued Partner With Which Client Can Pivot Their Green Image &amp; Sustainability Drive.
              </p>
              <ul className="checklist">
                <li><span className="tick">✓</span> Maintaining the highest level of integrity and meet all standards of quality of QCI-NABET and MoEF&amp;CC.</li>
                <li><span className="tick">✓</span> Employing a collaborative approach, we ensure that each solution is customized to fit the unique contours of the clients venture. This process fosters resonance between environmental imperatives and overarching corporate goals.</li>
                <li><span className="tick">✓</span> Be a Responsible Entity by preaching the Green Initiatives in the work culture as well as personal lives of Associates: to be customer delight.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Operations philosophy */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <h2 className="section-title">OPERATIONS PHILOSOPHY AND WHAT DIFFERENTIATES US?</h2>
          </Reveal>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24, textAlign: "justify" }}>
            <Reveal className="card">
              <p>RGPL Extends Its Services With Competence by First Analyzing Then Visualizing and Finally Utilizing Technically Strong and Dedicated Skill With an Effort To Optimize The Cost On The Regulatory Governance and Customer Satisfaction Leading Your Environmental Management Operations In A More Sustainable Manner.</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <p>We Would be Glad To Assist You With Our Industry Expertise and Rapid Service Delivery Framework (rsdf). We Are Confident In Extending Our Specialized all-services-related-to-word-ENVIRONMENT On A Turnkey Basis With An end-to-end Planning and Delivery Responsibility.</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <p>Rejig Green Logic Private Limited (RGPL) Is A Sister Concern Company Of JM EnviroNet Private Limited (JMEPL), Working In The Field Of Environment For The Past 29 Years. This Consortium Enjoys The Recognitions &amp; Accreditations Of QCI-NABET, Moef &amp; CC, ISO, Msme, Nsic, Moud &amp; Mowr, Govt. of India.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <Credentials />

      {/* Team */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our people</span>
            <h2 className="section-title">A multidisciplinary technical crew</h2>
            <p className="section-sub">Consultants, lab experts and field officers working together on every assessment.</p>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 44 }}>
            {TEAM.map((t, i) => (
              <Reveal key={t.role} delay={i % 4} className="card text-center">
                <div className="ico" style={{ margin: "0 auto 16px" }}>{t.icon}</div>
                <div className="num" style={{ fontFamily: "var(--font-head)", fontSize: "2.1rem", fontWeight: 800 }}>
                  <span className="gradient-text"><Counter to={t.count} /></span>
                </div>
                <h3 style={{ marginTop: 6 }}>{t.role}</h3>
                <p>{t.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* NABET certificate + sectors */}
      <section id="nabet" className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">NABET Certificate</span>
            <h2 className="section-title">Accredited across {SECTOR_COUNT} NABET sectors</h2>
            <p className="section-sub">
              Our QCI-NABET Category-A certificate of accreditation (EIA Consultant Organization, Version 3)
              covers the following industrial sectors, with their NABET / MoEFCC schedule references.
            </p>
          </Reveal>
          <div className="cert-split" style={{ marginTop: 40 }}>
            <Reveal className="card">
              <ol className="sector-list">
                {SECTORS.map((s) => (
                  <li key={s.slug}>
                    <span>{s.certName || s.name}</span>
                    <span className="sector-list__meta">
                      <span className="tag">NABET {s.nabet}</span>
                      <span className={`sector-badge cat-${s.category}`}>Cat {s.category}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <Link to="/sectors" className="btn btn-ghost btn-sm" style={{ marginTop: 18 }}>
                View all sectors in detail <IconArrow size={16} />
              </Link>
            </Reveal>
            <Reveal delay={1} className="cert-frame">
              <img src={nabetCert} alt="NABET Certificate of Accreditation" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ISO certificate */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Quality Management</span>
            <h2 className="section-title">ISO 9001:2015 certified</h2>
            <p className="body">
              Rejig GreenLogic Private Limited holds a Certificate of Registration for ISO 9001:2015
              Quality Management System, independently assessed by QRO — covering the full scope of our
              environmental consultancy, impact assessment, monitoring and compliance services.
            </p>
            <ul className="checklist">
              <li><span className="tick">✓</span> Independently audited quality management</li>
              <li><span className="tick">✓</span> Standardised, repeatable delivery processes</li>
              <li><span className="tick">✓</span> Continual improvement &amp; client focus</li>
            </ul>
          </Reveal>
          <Reveal delay={1} className="cert-frame">
            <img src={isoCert} alt="ISO 9001:2015 Certificate of Registration" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Let's build your sustainability story together</h2>
            <p>From a single clearance to an enterprise-wide ESG programme — RGPL is your partner at every step.</p>
            <Link to="/contact" className="btn btn-light">Get in touch <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
