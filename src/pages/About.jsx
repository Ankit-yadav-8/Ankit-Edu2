import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconArrow, IconUsers, IconBeaker, IconStar, IconCheck } from "../components/Icons.jsx";
import visionDice from "../assets/vision-mission-updated.png";
import nabetCert from "../assets/nabet-certificate-new.png";
import isoCert from "../assets/iso-certificate.png";
import aboutTeam from "../assets/about-us-team.png";
import consultingStatsImg from "../assets/consulting-stats.png";
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
        subtitle="Incorporated in 2021, RGPL is your techno-legal advisory partner across environmental consultancy — backed by a growing legacy of excellence."
        breadcrumb="About Us"
        cards={[
          { type: "image", src: consultingStatsImg, alt: "Consulting company analyzing data" },
        ]}
        fullImage={true}
      />

      <section id="company" className="section">
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
            <div style={{ marginTop: 20 }}>
              <p style={{ fontWeight: 600, marginBottom: 8 }}>Our Presence:</p>
              <ul className="checklist">
                <li><span className="tick">✓</span> Head Office located at Hyderabad</li>
                <li><span className="tick">✓</span> Partner tie-ups across NCR Delhi, Goa and Mumbai</li>
                <li><span className="tick">✓</span> Strong Pan-India presence</li>
              </ul>
            </div>
            <p style={{ marginTop: 20, lineHeight: 1.6 }}>
              Our technical experts, experienced consultants, laboratory specialists, and field officers combine industry-leading expertise with in-depth local knowledge and sustainable approaches to deliver resilient, practical, and client-focused solutions.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.6, fontWeight: 600 }}>
              We have successfully delivered environmental solutions for more than 50 projects across diverse industrial sectors in India.
            </p>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Work with us <IconArrow size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Our Services</Link>
            </div>
          </Reveal>
          <Reveal delay={1} className="about-team-image">
            <img src={aboutTeam} alt="Our Team" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px", boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }} />
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
      <section id="people" className="section section--soft">
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
              <div style={{ overflowX: "auto", overflowY: "auto", maxHeight: "500px", paddingBottom: "16px", margin: "0 -16px", padding: "0 16px" }}>
                <div style={{ minWidth: "600px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {/* Header Row */}
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 100px 60px", gap: "16px", padding: "12px 16px", background: "var(--surface)", borderRadius: "8px", fontWeight: "600", color: "var(--violet-700)", border: "1px solid var(--line)", fontSize: "0.95rem" }}>
                    <div>S.N</div>
                    <div>Sector Description</div>
                    <div style={{ textAlign: "center" }}>NABET</div>
                    <div style={{ textAlign: "center" }}>MoEFCC</div>
                    <div style={{ textAlign: "center" }}>Cat.</div>
                  </div>
                  {/* Data Rows */}
                  {SECTORS.map((s, index) => (
                    <div key={s.slug} style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 100px 60px", gap: "16px", padding: "12px 16px", background: "#fff", borderRadius: "8px", border: "1px solid var(--violet-50)", alignItems: "center", fontSize: "0.95rem", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--mint)"; e.currentTarget.style.boxShadow = "var(--shadow)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--violet-50)"; e.currentTarget.style.boxShadow = "none"; }}>
                      <div style={{ fontWeight: "600", color: "var(--violet-700)", background: "var(--surface)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "6px" }}>{index + 1}</div>
                      <div style={{ color: "var(--text)", lineHeight: 1.4, fontWeight: 500 }}>{s.certName || s.name}</div>
                      <div style={{ textAlign: "center", fontWeight: "600" }}>{s.nabet}</div>
                      <div style={{ textAlign: "center", fontWeight: "600" }}>{s.moefcc}</div>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <span className={`sector-badge cat-${s.category}`} style={{ width: "32px", justifyContent: "center", padding: "2px 0" }}>{s.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
        <div className="container cert-split">
          <Reveal className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <span className="eyebrow">Quality Management</span>
            <h2 className="section-title">ISO 9001:2015 certified</h2>
            <p className="body">
              Rejig GreenLogic Private Limited holds a Certificate of Registration for ISO 9001:2015
              Quality Management System, independently assessed by QRO — covering the full scope of our
              environmental consultancy, impact assessment, monitoring and compliance services.
            </p>
            <ul className="checklist" style={{ marginBottom: 0 }}>
              <li><span className="tick">✓</span> Independently audited quality management</li>
              <li><span className="tick">✓</span> Standardised, repeatable delivery processes</li>
              <li><span className="tick">✓</span> Continual improvement &amp; client focus</li>
            </ul>
          </Reveal>
          <Reveal delay={1} className="cert-frame" style={{ maxHeight: 420 }}>
            <img src={isoCert} alt="ISO 9001:2015 Certificate of Registration" loading="lazy" style={{ objectPosition: 'top' }} />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <Reveal className="card" id="events" style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow">Events</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 12, marginTop: 12 }}>Latest Events & Insights</h3>
              <p className="body" style={{ color: 'var(--muted)' }}>Information about our recent events, webinars, and conferences will be updated here soon.</p>
            </Reveal>

            <Reveal className="card" id="locations" delay={0.1} style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow">Our Presence</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 12, marginTop: 12 }}>Office Locations</h3>
              <p className="body" style={{ color: 'var(--muted)' }}>
                7th Floor, Block C, Laxmi Cyber City, White Fields, Hitech City,<br />
                Kondapur, Hyderabad - 500081
              </p>
            </Reveal>

            <Reveal className="card" id="careers" delay={0.2} style={{ textAlign: 'center', padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="eyebrow">Join Us</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: 12, marginTop: 12 }}>Careers at RGPL</h3>
              <p className="body" style={{ color: 'var(--muted)' }}>Explore opportunities to build a sustainable future with our expert team.</p>
            </Reveal>
          </div>
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
