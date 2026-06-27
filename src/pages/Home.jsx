import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { IconArrow } from "../components/Icons.jsx";
import { NabetLogo } from "../components/Logos.jsx";
import SmartImg from "../components/SmartImg.jsx";

import imgWelcome from "../assets/rejig_discussion_meeting_1782487343593.png";
import imgReport from "../assets/hero-2-new.png";
import imgS4 from "../assets/service-4.png";
import imgForest from "../assets/forest-biodiversity.png";
import imgEsg from "../assets/esg-sustainability.png";
import certNabet from "../assets/nabet-certificate.png";
import certIso from "../assets/iso-certificate.png";
import Credentials from "../components/Credentials.jsx";
import LabServices from "../components/LabServices.jsx";
import { CLIENT_LOGOS } from "../data/clients.js";
import { PROJECTS } from "../data/projects.js";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <HeroCarousel />

      {/* ═══ CREDIBILITY STRIP ═════════════════════════════════ */}
      <div className="cred-strip">
        <div className="container">
          <span><b>3,000+</b> industrial units served</span><span className="dot" />
          <span><b>50+</b> sectoral areas</span><span className="dot" />
          <span><b>11</b> NABET-accredited sectors</span><span className="dot" />
          <span><b>India</b> &amp; abroad</span>
        </div>
      </div>

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
              We have successfully provided environmental solutions to{" "}
              <b>more than 3,000 specialised industrial units</b> across India and abroad, covering
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
            <SmartImg src={imgWelcome} alt="Rejig GreenLogic team in a strategy discussion meeting" />
          </Reveal>
        </div>
      </section>
      {/* ═══ STATS ═════════════════════════════════════════════ */}
      <div className="stats-band">
        <div className="s-wrap">
          <div className="s-item">
            <div className="s-num"><Counter to={200} suffix="+" /></div>
            <div className="s-lbl">Environmental Initiatives<br/>Globally in Diverse Sectors</div>
          </div>
          <div className="s-item">
            <div className="s-num"><Counter to={100} suffix="+" /> ‘A’</div>
            <div className="s-lbl">Category Large<br/>Scale Projects</div>
          </div>
          <div className="s-item">
            <div className="s-num"><Counter to={30} suffix="+" /></div>
            <div className="s-lbl">Projects for Technical<br/>Environmental Consultancy</div>
          </div>
          <div className="s-item">
            <div className="s-num"><Counter to={20} suffix="+" /></div>
            <div className="s-lbl">Corporate EHS Audits — Power<br/>Plants, Mining &amp; Cement</div>
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
              <Link to="/services?cat=Assessment" className="sol-card">
                <div className="sol-ico">🌿</div>
                <div className="sol-nm">EIA / ESIA Studies <span className="sol-a">→</span></div>
                <div className="sol-d">MoEFCC-compliant Environmental and Social Impact Assessments across our 11 NABET-accredited sectors.</div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link to="/services?cat=Clearance" className="sol-card">
                <div className="sol-ico">🐅</div>
                <div className="sol-nm">Forest &amp; Wildlife Clearance <span className="sol-a">→</span></div>
                <div className="sol-d">Biodiversity Impact Assessments, Wildlife Conservation Plans, and seamless processing of Stage I &amp; II forest clearances.</div>
              </Link>
            </Reveal>
            <Reveal delay={2}>
              <Link to="/services?cat=Geospatial" className="sol-card">
                <div className="sol-ico">🛰️</div>
                <div className="sol-nm">Remote Sensing &amp; GIS <span className="sol-a">→</span></div>
                <div className="sol-d">Advanced Land Use/Land Cover mapping, mining plan preparation, and DGPS surveys utilizing high-res satellite imagery.</div>
              </Link>
            </Reveal>
            <Reveal delay={3}>
              <Link to="/services?cat=ESG" className="sol-card">
                <div className="sol-ico">📊</div>
                <div className="sol-nm">ESG Advisory &amp; Reporting <span className="sol-a">→</span></div>
                <div className="sol-d">Sustainability strategy development, ESG framework alignment (GRI, SASB), and comprehensive corporate sustainability reporting.</div>
              </Link>
            </Reveal>
            <Reveal delay={4}>
              <Link to="/services?cat=Monitoring" className="sol-card">
                <div className="sol-ico">💨</div>
                <div className="sol-nm">Air Quality Assessment <span className="sol-a">→</span></div>
                <div className="sol-d">Baseline monitoring, emission inventory, and atmospheric dispersion modeling (AERMOD) for industrial and urban projects.</div>
              </Link>
            </Reveal>
            <Reveal delay={5}>
              <Link to="/services?cat=ESG" className="sol-card">
                <div className="sol-ico">🌍</div>
                <div className="sol-nm">Climate Change &amp; Carbon <span className="sol-a">→</span></div>
                <div className="sol-d">GHG footprint analysis, net-zero roadmaps, and climate risk vulnerability assessments to build resilient operations.</div>
              </Link>
            </Reveal>
            <Reveal delay={6}>
              <Link to="/services?cat=Monitoring" className="sol-card">
                <div className="sol-ico">💧</div>
                <div className="sol-nm">Water Quality Studies <span className="sol-a">→</span></div>
                <div className="sol-d">Hydrogeological assessments, groundwater modeling, and design of effluent treatment and zero liquid discharge (ZLD) systems.</div>
              </Link>
            </Reveal>
            <Reveal delay={7}>
              <Link to="/services?cat=Audit" className="sol-card">
                <div className="sol-ico">🛡️</div>
                <div className="sol-nm">EHS Management <span className="sol-a">→</span></div>
                <div className="sol-d">Occupational health and safety audits, risk assessment, and implementation of robust EHS management systems.</div>
              </Link>
            </Reveal>
            <Reveal delay={8}>
              <Link to="/ai-integration" className="sol-card">
                <div className="sol-ico">🤖</div>
                <div className="sol-nm">AI-Driven Monitoring <span className="sol-a">→</span></div>
                <div className="sol-d">Real-time IoT environmental monitoring and predictive AI analytics to preemptively manage compliance risks.</div>
              </Link>
            </Reveal>
          </div>

          <div className="mt36 tc">
            <Link to="/services" className="view-all">View all Solutions →</Link>
          </div>
        </div>
      </section>
      {/* ═══ INDUSTRIES ════════════════════════════════════════ */}
      <section className="sec ind-sec" id="industries">
        <div className="wrap">
          <Reveal className="sec-hd">
            <div className="tag">Sector Expertise</div>
            <h2 className="sec-t">Driving Sustainability Across Core Industries</h2>
            <p className="sec-s">
              Our deep domain knowledge spans across critical infrastructure and heavy manufacturing,
              ensuring sector-specific regulatory compliance and environmental optimization.
            </p>
          </Reveal>

          <div className="ind-grid">
            <Link to="/sectors/mining" className="ind-card">
              <div className="ind-n">01</div>
              <div className="ind-nm">Mining &amp; Minerals <span>→</span></div>
            </Link>
            <Link to="/sectors/oil-gas-exploration" className="ind-card">
              <div className="ind-n">02</div>
              <div className="ind-nm">Oil &amp; Gas <span>→</span></div>
            </Link>
            <Link to="/sectors/thermal-power" className="ind-card">
              <div className="ind-n">03</div>
              <div className="ind-nm">Power &amp; Energy <span>→</span></div>
            </Link>
            <Link to="/sectors/building-construction" className="ind-card">
              <div className="ind-n">04</div>
              <div className="ind-nm">Infrastructure &amp; Building <span>→</span></div>
            </Link>
            <Link to="/sectors/synthetic-organic-chemicals" className="ind-card">
              <div className="ind-n">05</div>
              <div className="ind-nm">Chemical &amp; Petrochemical <span>→</span></div>
            </Link>
            <Link to="/sectors/metallurgical" className="ind-card">
              <div className="ind-n">06</div>
              <div className="ind-nm">Metallurgical Industries <span>→</span></div>
            </Link>
            <Link to="/sectors/cement" className="ind-card">
              <div className="ind-n">07</div>
              <div className="ind-nm">Cement Plants <span>→</span></div>
            </Link>
            <Link to="/sectors/townships" className="ind-card">
              <div className="ind-n">08</div>
              <div className="ind-nm">Real Estate &amp; Townships <span>→</span></div>
            </Link>
            <Link to="/sectors/oil-gas-pipeline" className="ind-card">
              <div className="ind-n">09</div>
              <div className="ind-nm">Oil &amp; Gas Pipelines <span>→</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ══════════════════════════════════════════ */}
      <section className="sec" id="projects">
        <div className="wrap">
          <Reveal className="sec-hd">
            <div className="tag">Our Impact</div>
            <h2 className="sec-t">Featured Projects &amp; Case Studies</h2>
            <p className="sec-s">
              Explore how we've helped leading organizations navigate complex environmental challenges
              and achieve their sustainability targets.
            </p>
          </Reveal>

          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="proj-card">
                <img src={p.image} alt={p.title} />
                <div className="proj-ov">
                  <div className="proj-tag">{p.tag}</div>
                  <div className="proj-nm">{p.title}</div>
                  <div className="proj-loc">{p.location}</div>
                </div>
                <div className="proj-plus">+</div>
              </Link>
            ))}
          </div>

          <div className="mt36 tc">
            <Link to="/projects" className="view-all">View Project Portfolio →</Link>
          </div>
        </div>
      </section>

      {/* ═══ INSIGHTS ══════════════════════════════════════════ */}
      <section className="sec ins-bg" id="insights">
        <div className="wrap">
          <Reveal className="sec-hd">
            <div className="tag">Knowledge Hub</div>
            <h2 className="sec-t">Latest News &amp; Environmental Insights</h2>
          </Reveal>

          <div className="ins-grid">
            <Link to="/insights" className="ins-card">
              <img src={imgForest} alt="News 1" className="ins-img" />
              <div className="ins-body">
                <div className="ins-tag">Regulatory Update</div>
                <div className="ins-t">New MoEFCC Guidelines on Fly Ash Utilization Explained</div>
                <div className="ins-dt">Oct 12, 2024 · 5 min read</div>
              </div>
            </Link>
            <Link to="/insights" className="ins-card">
              <img src={imgEsg} alt="News 2" className="ins-img" />
              <div className="ins-body">
                <div className="ins-tag">ESG Trends</div>
                <div className="ins-t">The Rise of Biodiversity Metrics in Corporate Sustainability Reporting</div>
                <div className="ins-dt">Oct 05, 2024 · 7 min read</div>
              </div>
            </Link>
            <Link to="/insights" className="ins-card">
              <img src={imgS4} alt="News 3" className="ins-img" />
              <div className="ins-body">
                <div className="ins-tag">Technology</div>
                <div className="ins-t">Leveraging AI &amp; IoT for Real-time Emission Monitoring in Heavy Industry</div>
                <div className="ins-dt">Sep 28, 2024 · 6 min read</div>
              </div>
            </Link>
          </div>

          <div className="mt36 tc">
            <Link to="/insights" className="view-all">View All Articles →</Link>
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

      {/* ═══ LABORATORY SERVICES (NABL certificate) ════════════ */}
      <LabServices soft />

      {/* ═══ CLIENTS ═══════════════════════════════════════════ */}
      <section className="sec" id="clients">
        <div className="wrap">
          <Reveal className="sec-hd">
            <div className="tag">Our Clientele</div>
            <h2 className="sec-t">Trusted by Leading Industrial Names</h2>
            <p className="sec-s">
              From cement and power to mining, chemicals and infrastructure — 3,000+
              industrial units across India and abroad rely on RGPL.
            </p>
          </Reveal>
          <Reveal className="client-grid">
            {CLIENT_LOGOS.map((c) => (
              <div className="client-logo" key={c.name}>
                <img src={c.src} alt={c.name} loading="lazy" />
              </div>
            ))}
          </Reveal>
          <Reveal className="text-center" style={{ marginTop: 32 }}>
            <Link to="/clientele" className="btn btn-light">View all clients <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
