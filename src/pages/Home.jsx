import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { IconArrow } from "../components/Icons.jsx";
import { NabetLogo } from "../components/Logos.jsx";
import SmartImg from "../components/SmartImg.jsx";

import imgWelcome from "../assets/clients_meeting.png";
import imgReport from "../assets/regulatory_report.png";
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
import { CLIENT_LOGOS } from "../data/clients.js";
import Credentials from "../components/Credentials.jsx";
import LabServices from "../components/LabServices.jsx";
export default function Home() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <HeroCarousel />



      {/* ═══ WELCOME / ABOUT ═══════════════════════════════════ */}
      <section className="sec feat-bg" style={{ paddingBottom: "20px" }}>
        <div className="wrap feat-in">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--mint)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px", marginBottom: "8px", display: "inline-block" }}>Who we are</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(26px, 2.8vw, 42px)", marginBottom: "16px", lineHeight: 1.25 }}>Welcome to Rejig Green Logic Private Limited</h2>
            <p className="body" style={{ color: "var(--gtxt)", lineHeight: 1.75 }}>
              Incorporated on 15th December 2021, <b>Rejig GreenLogic Private Limited (RGPL)</b> is a
              group of well-known environmental experts pooled together to extend environmental
              consultancy and be your techno-legal advisory partner.
            </p>
            <p className="body" style={{ marginTop: 12, color: "var(--gtxt)", lineHeight: 1.75 }}>
              We have successfully delivered environmental solutions for 50+
              projects across diverse industrial sectors.
            </p>
            <ul className="checklist" style={{ listStyle: "none", padding: 0, marginTop: "24px", display: "grid", gap: "12px" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> Highest integrity to QCI, NABET &amp; MoEF&amp;CC standards</li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> Trust, Responsibility, Collaboration &amp; Performance culture</li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--dark)", fontWeight: 500 }}><span className="tick" style={{ background: "var(--mint)", color: "var(--dark)", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>✓</span> A responsible entity preaching green initiatives</li>
            </ul>
            <Link to="/about" className="view-all" style={{ marginTop: 32 }}>
              Read more →
            </Link>
          </Reveal>

          <Reveal delay={1} className="feat-img">
            <img src={imgWelcome} alt="Hands protecting a green earth" />
          </Reveal>
        </div>
      </section>

      {/* ═══ FEATURED REPORT ═══════════════════════════════════ */}
      <section className="sec feat-bg" style={{ paddingTop: "20px" }}>
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
              From initial project screening and strategic planning to regulatory clearances and ESG compliance, we provide end-to-end techno-legal advisory for sustainable development.
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
          
          <div className="cert-cards">
            <Reveal delay={0} className="cert-card">
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

            <Reveal delay={1} className="cert-card">
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

      {/* ═══ LABORATORY ════════════════════════════════════════ */}
      <LabServices />

      {/* ═══ CLIENTELE ═════════════════════════════════════════ */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <Reveal className="text-center" style={{ marginBottom: 48 }}>
            <span className="eyebrow" style={{ color: "var(--violet-700)", fontSize: "11px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>TRUSTED BY LEADERS</span>
            <h2 className="section-title" style={{ fontFamily: "var(--font-head)", fontSize: "36px", color: "var(--ink)", margin: "10px 0 16px" }}>Our Esteemed Clients</h2>
            <p className="section-sub" style={{ margin: "0 auto", maxWidth: 640, color: "var(--muted)", fontSize: "15px", lineHeight: 1.6 }}>
              We have successfully delivered environmental solutions for more than 50 projects across diverse industrial sectors in India.
            </p>
          </Reveal>
          
          <div className="client-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {CLIENT_LOGOS.map((client, i) => (
              <Reveal key={i} delay={i % 4}>
                <div style={{
                  background: "#fff", 
                  padding: "24px", 
                  borderRadius: "12px",
                  border: "1px solid var(--violet-50)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  height: "120px"
                }}>
                  <img src={client.src} alt={client.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt36">
            <Link to="/clientele" className="view-all" style={{ marginTop: "32px", display: "inline-block", color: "var(--violet-700)", fontWeight: "500" }}>View all clients →</Link>
          </div>
        </div>
      </section>

      {/* ═══ CREDENTIALS DIAGRAM (Image 2) ═════════════════════ */}
      <Credentials />
    </>
  );
}
