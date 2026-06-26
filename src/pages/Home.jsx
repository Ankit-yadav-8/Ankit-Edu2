import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import { IconArrow } from "../components/Icons.jsx";
import { NabetLogo } from "../components/Logos.jsx";
import SmartImg from "../components/SmartImg.jsx";

import imgWelcome from "../assets/hero-1-new.png";
import imgReport from "../assets/hero-2-new.png";
import imgS1 from "../assets/service-1.png";
import imgS2 from "../assets/service-2.png";
import imgS3 from "../assets/service-3.png";
import imgS4 from "../assets/service-4.png";
import imgS5 from "../assets/service-5.png";
import imgS6 from "../assets/service-6.png";
import imgForest from "../assets/forest-biodiversity.png";
import imgEsg from "../assets/esg-sustainability.png";
import imgWater from "../assets/water-treatment.png";
import certNabet from "../assets/nabet-certificate.png";
import certIso from "../assets/iso-certificate.png";

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
          <span><b>20</b> NABET-accredited sectors</span><span className="dot" />
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
            <SmartImg src={imgWelcome} alt="Hands protecting a green earth" />
          </Reveal>
        </div>
      </section>

      {/* ═══ STATS ═════════════════════════════════════════════ */}
      <div className="stats-band">
        <div className="s-wrap">
          <div className="s-item">
            <div className="s-num"><Counter to={3000} suffix="+" /></div>
            <div className="s-lbl">Industrial Units<br/>Served Globally</div>
          </div>
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
            <Link to="/industries/mining" className="ind-card">
              <div className="ind-n">01</div>
              <div className="ind-nm">Mining &amp; Minerals <span>→</span></div>
            </Link>
            <Link to="/industries/oilgas" className="ind-card">
              <div className="ind-n">02</div>
              <div className="ind-nm">Oil &amp; Gas <span>→</span></div>
            </Link>
            <Link to="/industries/power" className="ind-card">
              <div className="ind-n">03</div>
              <div className="ind-nm">Power &amp; Energy <span>→</span></div>
            </Link>
            <Link to="/industries/infra" className="ind-card">
              <div className="ind-n">04</div>
              <div className="ind-nm">Infrastructure &amp; Highways <span>→</span></div>
            </Link>
            <Link to="/industries/chem" className="ind-card">
              <div className="ind-n">05</div>
              <div className="ind-nm">Chemical &amp; Petrochemical <span>→</span></div>
            </Link>
            <Link to="/industries/mfg" className="ind-card">
              <div className="ind-n">06</div>
              <div className="ind-nm">Heavy Manufacturing <span>→</span></div>
            </Link>
            <Link to="/industries/pharma" className="ind-card">
              <div className="ind-n">07</div>
              <div className="ind-nm">Pharmaceuticals <span>→</span></div>
            </Link>
            <Link to="/industries/re" className="ind-card">
              <div className="ind-n">08</div>
              <div className="ind-nm">Real Estate &amp; Townships <span>→</span></div>
            </Link>
            <Link to="/industries/ports" className="ind-card">
              <div className="ind-n">09</div>
              <div className="ind-nm">Ports &amp; Harbours <span>→</span></div>
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
            <Link to="/projects" className="proj-card">
              <img src={imgS1} alt="Mining Project" />
              <div className="proj-ov">
                <div className="proj-tag">Mining &amp; Minerals</div>
                <div className="proj-nm">EIA for 5 MTPA Iron Ore Mine Expansion</div>
                <div className="proj-loc">Odisha, India</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
            <Link to="/projects" className="proj-card">
              <img src={imgS2} alt="Solar Park" />
              <div className="proj-ov">
                <div className="proj-tag">Renewable Energy</div>
                <div className="proj-nm">ESIA for 500MW Solar Park Development</div>
                <div className="proj-loc">Rajasthan, India</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
            <Link to="/projects" className="proj-card">
              <img src={imgS3} alt="Coastal Highway" />
              <div className="proj-ov">
                <div className="proj-tag">Infrastructure</div>
                <div className="proj-nm">CRZ Clearance for Coastal Highway</div>
                <div className="proj-loc">Maharashtra, India</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
            <Link to="/projects" className="proj-card">
              <img src={imgS4} alt="Chemical Plant" />
              <div className="proj-ov">
                <div className="proj-tag">Chemical Industry</div>
                <div className="proj-nm">Quantitative Risk Assessment &amp; HAZOP</div>
                <div className="proj-loc">Gujarat, India</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
            <Link to="/projects" className="proj-card">
              <img src={imgS5} alt="Township" />
              <div className="proj-ov">
                <div className="proj-tag">Real Estate</div>
                <div className="proj-nm">IGBC Green Township Certification</div>
                <div className="proj-loc">Karnataka, India</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
            <Link to="/projects" className="proj-card">
              <img src={imgS6} alt="Corporate ESG" />
              <div className="proj-ov">
                <div className="proj-tag">Corporate Advisory</div>
                <div className="proj-nm">Net-Zero Roadmap &amp; ESG Strategy</div>
                <div className="proj-loc">Pan-India Operations</div>
              </div>
              <div className="proj-plus">+</div>
            </Link>
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
              <img src={imgWater} alt="News 3" className="ins-img" />
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

      {/* ═══ NABET ACCREDITATION ═══════════════════════════════ */}
      <section className="sec" id="accreditation">
        <div className="wrap">
          <Reveal className="nabet-grid">
            <div className="nabet-card">
              <div className="nabet-bdg">
                <span className="n-dot">●</span> Highest Standard of Quality
              </div>
              <h3 className="nabet-ct">QCI - NABET Accredited Organization</h3>
              <p className="nabet-cs">
                Rejig GreenLogic Pvt. Ltd. holds the prestigious Quality Council of India (QCI) - 
                National Accreditation Board for Education and Training (NABET) accreditation. 
                This certification empowers us to conduct EIA studies and present cases before 
                the EAC (MoEFCC) and SEAC across India.
              </p>
              <div className="nabet-tags">
                <span className="nabet-t">ISO 9001:2015</span>
                <span className="nabet-t">ISO 14001:2015</span>
                <span className="nabet-t">OHSAS 45001:2018</span>
                <span className="nabet-t">MoEFCC</span>
                <span className="nabet-t">QCI</span>
              </div>
              <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
                <img src={certNabet} alt="NABET Certificate" style={{ width: "100%", maxWidth: "160px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)" }} />
                <img src={certIso} alt="ISO Certificate" style={{ width: "100%", maxWidth: "160px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)" }} />
              </div>
            </div>
            <div>
              <div className="tag" style={{ display: "block", marginBottom: 14, textAlign: "left" }}>Accredited Sectors</div>
              <div className="sectors-grid">
                <div className="sec-row"><span className="sec-dot"></span> Mining of minerals (Opencast)</div>
                <div className="sec-row"><span className="sec-dot"></span> Thermal power plants</div>
                <div className="sec-row"><span className="sec-dot"></span> Coal washeries</div>
                <div className="sec-row"><span className="sec-dot"></span> Metallurgical industries</div>
                <div className="sec-row"><span className="sec-dot"></span> Cement plants</div>
                <div className="sec-row"><span className="sec-dot"></span> Synthetic organic chemicals</div>
                <div className="sec-row"><span className="sec-dot"></span> Distilleries</div>
                <div className="sec-row"><span className="sec-dot"></span> Sugar Industry</div>
                <div className="sec-row"><span className="sec-dot"></span> Oil &amp; gas transportation</div>
                <div className="sec-row"><span className="sec-dot"></span> Highways</div>
                <div className="sec-row"><span className="sec-dot"></span> Building and construction</div>
                <div className="sec-row"><span className="sec-dot"></span> Townships and Area dev</div>
              </div>
              <div className="sec-note">* Partial list of accredited sectors. Please refer to our official NABET certificate for the complete scope.</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
