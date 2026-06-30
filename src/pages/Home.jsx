import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { IconArrow } from "../components/Icons.jsx";
import { NabetLogo } from "../components/Logos.jsx";
import SmartImg from "../components/SmartImg.jsx";

import imgWelcome from "../assets/hero-1-new.png";
import imgReport from "../assets/media__1782785983888.jpg";
import imgS1 from "../assets/service-1.png";
import imgS2 from "../assets/service-2.png";
import imgS3 from "../assets/service-3.png";
import imgS4 from "../assets/service-4.png";
import imgS5 from "../assets/service-5.png";
import imgS6 from "../assets/service-6.png";
import imgForest from "../assets/forest-biodiversity.png";
import imgEsg from "../assets/esg-sustainability.png";
import imgWater from "../assets/water-treatment.png";
import imgHandshake from "../assets/vision-handshake.png";
import certNabet from "../assets/nabet-certificate.png";
import certIso from "../assets/iso-certificate.png";
import Credentials from "../components/Credentials.jsx";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <HeroCarousel />



      {/* ═══ WELCOME / ABOUT ═══════════════════════════════════ */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container split">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--mint)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", marginBottom: "8px", display: "inline-block" }}>Who we are</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(26px, 2.8vw, 42px)", marginBottom: "16px", lineHeight: 1.25 }}>Welcome to Rejig Green Logic Private Limited</h2>
            <p className="body" style={{ color: "var(--gtxt)", lineHeight: 1.75 }}>
              Incorporated on 15th December 2021, <b>Rejig GreenLogic Private Limited (RGPL)</b> is a
              group of well-known environmental experts pooled together to extend environmental
              consultancy and be your techno-legal advisory partner.
            </p>
            <p className="body" style={{ marginTop: 12, color: "var(--gtxt)", lineHeight: 1.75 }}>
              We have successfully provided environmental solutions covering
              more than fifty sectoral areas.
            </p>
            <ul className="checklist" style={{ listStyle: "none", padding: 0, marginTop: "24px", display: "grid", gap: "12px" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> Highest integrity to QCI, NABET &amp; MoEF&amp;CC standards</li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> Trust, Responsibility, Collaboration &amp; Performance culture</li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> A responsible entity preaching green initiatives</li>
            </ul>
            <Link to="/about" className="view-all" style={{ marginTop: 28 }}>
              Read more →
            </Link>
          </Reveal>

          <Reveal delay={1} className="welcome-media">
            <SmartImg src={imgWelcome} alt="Hands protecting a green earth" />
          </Reveal>
        </div>
      </section>
      {/* ═══ VISION & MISSION ══════════════════════════════════ */}
      <section className="section" style={{ background: "#fff", padding: "0" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* Left Side: Background Image */}
          <div style={{ flex: "1 1 50%", minHeight: "500px", backgroundImage: `url(${imgHandshake})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>
          
          {/* Right Side: Content */}
          <div style={{ flex: "1 1 50%", padding: "80px 6%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            <Reveal delay={0} style={{ display: "flex", gap: "24px", marginBottom: "48px" }}>
              <div style={{ flexShrink: 0, width: "64px", height: "64px", background: "#fff", borderRadius: "12px", border: "1px solid #f0f0f0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 
              </div>
              <div>
                <h3 style={{ color: "#2D6A4F", fontSize: "20px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Our Vision</h3>
                <p style={{ color: "var(--gtxt)", fontSize: "14.5px", lineHeight: 1.7, maxWidth: "400px" }}>
                  To Become The Valued Partner With Which Client Can Pivot Their Green Image &amp; Sustainability Drive.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1} style={{ display: "flex", gap: "24px" }}>
              <div style={{ flexShrink: 0, width: "64px", height: "64px", background: "#fff", borderRadius: "12px", border: "1px solid #f0f0f0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> 
              </div>
              <div>
                <h3 style={{ color: "#2D6A4F", fontSize: "20px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>Our Mission</h3>
                <ul style={{ color: "var(--gtxt)", fontSize: "14px", lineHeight: 1.7, paddingLeft: "16px", margin: 0, display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}>
                  <li>Maintaining the Highest Levels of Integrity and Meet all Standards of Quality of QCI, NABET and MoEF&amp;CC;</li>
                  <li>Adopting a Culture of Trust, Responsibility, Collaboration and Performance to Achieve our Business Goals;</li>
                  <li>Be a Responsible Entity by Preaching the Green Initiatives in the Work Culture as well as Personal Lives of Associates; To be customer delight.</li>
                </ul>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══ STATS ═════════════════════════════════════════════ */}
      <div className="stats-band">
        <div className="s-wrap">

          <div className="s-item">
            <div className="s-num"><Counter to={50} suffix="+" /></div>
            <div className="s-lbl">Sectoral Areas<br/>Covered</div>
          </div>
          <div className="s-item">
            <div className="s-num"><Counter to={20} /></div>
            <div className="s-lbl">NABET Accredited<br/>Sectors</div>
          </div>
          <div className="s-item">
            <div className="s-num"><Counter to={25} suffix="+" /></div>
            <div className="s-lbl">Expert Team<br/>Members</div>
          </div>
        </div>
      </div>

      {/* ═══ FEATURED REPORT ═══════════════════════════════════ */}
      <section className="sec feat-bg">
        <div className="wrap feat-in">
          <Reveal>
            <div className="feat-lbl">New Research &amp; Insights</div>
            <h2 className="feat-t">India Environmental Regulatory Radar 2024</h2>
            <p className="feat-p">
              Navigate the evolving landscape of MoEFCC compliance, ESG reporting mandates, and
              climate-risk policies. Our latest comprehensive report outlines the critical shifts
              impacting heavy industries and infrastructure development in India.
              <br /><br />
              This crucial update provides actionable strategies for compliance, reducing operational risks and fostering sustainable growth. Our experts have analyzed recent regulatory changes to help your organization stay ahead of the curve.
            </p>
            <Link to="/insights" className="feat-cta">Read the full report →</Link>
          </Reveal>
          <Reveal delay={1} className="feat-img">
            <img src={imgReport} alt="Regulatory Report" />
            <div className="feat-img-ov">
              <span className="feat-img-lbl">Download PDF (4.2MB)</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SOLUTIONS ═════════════════════════════════════════ */}
      <section className="sec" id="solutions">
        <div className="wrap">
          <Reveal className="sec-hd">
            <div className="tag">Full-Spectrum Expertise</div>
            <h2 className="sec-t">Comprehensive Environmental &amp; Engineering Solutions</h2>
            <p className="sec-s">
              From initial baseline monitoring to final MoEFCC clearances and ongoing ESG compliance,
              we provide end-to-end techno-legal advisory for sustainable development.
            </p>
          </Reveal>

          <div className="sol-grid">
            <Reveal delay={0}>
              <Link to="/services/eia" className="sol-card">
                <div className="sol-ico">🌿</div>
                <div className="sol-nm">EIA / ESIA Studies <span className="sol-a">→</span></div>
                <div className="sol-d">MoEFCC-compliant Environmental and Social Impact Assessments across 15+ NABET accredited project categories.</div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link to="/services/forest" className="sol-card">
                <div className="sol-ico">🐅</div>
                <div className="sol-nm">Forest &amp; Wildlife Clearance <span className="sol-a">→</span></div>
                <div className="sol-d">Biodiversity Impact Assessments, Wildlife Conservation Plans, and seamless processing of Stage I &amp; II forest clearances.</div>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/services/gis" className="sol-card">
                <div className="sol-ico">🛰️</div>
                <div className="sol-nm">Remote Sensing &amp; GIS <span className="sol-a">→</span></div>
                <div className="sol-d">Advanced Land Use/Land Cover mapping, mining plan preparation, and DGPS surveys utilizing high-res satellite imagery.</div>
              </Link>
            </Reveal>
            <Reveal delay={3}>
              <Link to="/services/esg" className="sol-card">
                <div className="sol-ico">📊</div>
                <div className="sol-nm">ESG Advisory &amp; Reporting <span className="sol-a">→</span></div>
                <div className="sol-d">Sustainability strategy development, ESG framework alignment (GRI, SASB), and comprehensive corporate sustainability reporting.</div>
              </Link>
            </Reveal>
            <Reveal delay={4}>
              <Link to="/services/air" className="sol-card">
                <div className="sol-ico">💨</div>
                <div className="sol-nm">Air Quality Assessment <span className="sol-a">→</span></div>
                <div className="sol-d">Baseline monitoring, emission inventory, and atmospheric dispersion modeling (AERMOD) for industrial and urban projects.</div>
              </Link>
            </Reveal>
            <Reveal delay={5}>
              <Link to="/services/climate" className="sol-card">
                <div className="sol-ico">🌍</div>
                <div className="sol-nm">Climate Change &amp; Carbon <span className="sol-a">→</span></div>
                <div className="sol-d">GHG footprint analysis, net-zero roadmaps, and climate risk vulnerability assessments to build resilient operations.</div>
              </Link>
            </Reveal>
            <Reveal delay={6}>
              <Link to="/services/water" className="sol-card">
                <div className="sol-ico">💧</div>
                <div className="sol-nm">Water Quality Studies <span className="sol-a">→</span></div>
                <div className="sol-d">Hydrogeological assessments, groundwater modeling, and design of effluent treatment and zero liquid discharge (ZLD) systems.</div>
              </Link>
            </Reveal>
            <Reveal delay={7}>
              <Link to="/services/ehs" className="sol-card">
                <div className="sol-ico">🛡️</div>
                <div className="sol-nm">EHS Management <span className="sol-a">→</span></div>
                <div className="sol-d">Occupational health and safety audits, risk assessment, and implementation of robust EHS management systems.</div>
              </Link>
            </Reveal>
            <Reveal delay={8}>
              <Link to="/services/ai" className="sol-card">
                <div className="sol-ico">🤖</div>
                <div className="sol-nm">AI-Driven Monitoring <span className="sol-a">→</span></div>
                <div className="sol-d">Real-time IoT environmental monitoring and predictive AI analytics to preemptively manage compliance risks.</div>
              </Link>
            </Reveal>
          </div>

          <div className="mt36 tc">
            <Link to="/services" className="view-all">View all 20+ Solutions →</Link>
          </div>
        </div>
      </section>
      {/* ═══ WATER MANAGEMENT DIAGRAM ══════════════════════════ */}
      <section className="section" style={{ background: "var(--off)", padding: "80px 0" }}>
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: "40px" }}>
            <span className="eyebrow" style={{ color: "var(--violet-700)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>Key Expertise</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-head)", fontSize: "32px", color: "var(--ink)", margin: "10px 0 16px" }}>Advanced Sustainable Water Management Solutions</h2>
          </Reveal>
          <Reveal>
            <div style={{ background: "#fff", padding: "12px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.06)" }}>
              <img src={imgWater} alt="Advanced Sustainable Water Management Solutions" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
            </div>
          </Reveal>
        </div>
      </section>



      {/* ═══ ACCREDITATIONS (Image 1) ══════════════════════════ */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ color: "var(--violet-700)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>CERTIFICATIONS</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-head)", fontSize: "36px", color: "var(--ink)", margin: "10px 0 16px" }}>Accredited &amp; certified</h2>
            <p className="section-sub" style={{ margin: "0 auto", maxWidth: 640, color: "var(--muted)", fontSize: "15px", lineHeight: 1.6 }}>
              Our credentials are independently verified — QCI-NABET accreditation for EIA and ISO 9001:2015 for quality management.
            </p>
          </Reveal>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <Reveal delay={0} style={{ display: "flex", gap: "20px", padding: "24px", border: "1px solid var(--violet-100)", borderRadius: "12px", background: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", alignItems: "center" }}>
              <div style={{ flexShrink: 0, width: "130px", padding: "10px", border: "1px solid var(--violet-50)", borderRadius: "8px", background: "#fafafa" }}>
                <img src={certNabet} alt="NABET Certificate" style={{ width: "100%", display: "block" }} />
              </div>
              <div>
                <div style={{ display: "inline-flex", gap: "6px", alignItems: "center", background: "var(--violet-50)", color: "var(--violet-700)", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, marginBottom: "12px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  QCI-NABET
                </div>
                <h3 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "8px", lineHeight: 1.3 }}>Category-'A' EIA Consultant Accreditation</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.5 }}>
                  Certificate No. NABET/EIA/24-27/SA 0262 · valid up to 28 January 2027.
                </p>
                <Link to="/about" style={{ fontSize: "13.5px", fontWeight: 700, color: "var(--violet-700)", textDecoration: "none" }}>View certificate →</Link>
              </div>
            </Reveal>

            <Reveal delay={1} style={{ display: "flex", gap: "20px", padding: "24px", border: "1px solid var(--violet-100)", borderRadius: "12px", background: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,0.04)", alignItems: "center" }}>
              <div style={{ flexShrink: 0, width: "130px", padding: "10px", border: "1px solid var(--violet-50)", borderRadius: "8px", background: "#fafafa" }}>
                <img src={certIso} alt="ISO Certificate" style={{ width: "100%", display: "block" }} />
              </div>
              <div>
                <div style={{ display: "inline-flex", gap: "6px", alignItems: "center", background: "var(--violet-50)", color: "var(--violet-700)", padding: "4px 10px", borderRadius: "100px", fontSize: "11px", fontWeight: 700, marginBottom: "12px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  ISO 9001:2015
                </div>
                <h3 style={{ fontSize: "18px", color: "var(--ink)", marginBottom: "8px", lineHeight: 1.3 }}>Quality Management System Certification</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "16px", lineHeight: 1.5 }}>
                  Certificate No. 305023020720Q · issued by Quality Research Organization (QRO).
                </p>
                <Link to="/about" style={{ fontSize: "13.5px", fontWeight: 700, color: "var(--violet-700)", textDecoration: "none" }}>View certificate →</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ CREDENTIALS DIAGRAM (Image 2) ═════════════════════ */}
      <Credentials />
    </>
  );
}
