import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    closeMenu();
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* Left — RC brand logo */}
          <Link className="brand-logo" to="/" onClick={closeMenu}>
            <RCLogo height={72} />
          </Link>

          {/* Center — nav links (Mega menus) */}
          <ul className="nav-list">
            <li className="nav-item">
              <button className="nav-btn">Solutions <span className="arr">▾</span></button>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">Solutions</div>
                  <div className="m-title">Offering unparalleled depth and breadth of <em>expertise</em>.</div>
                  <Link to="/services" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  <div>
                    <Link to="/services/eia" className="m-lnk" onClick={closeMenu}>EIA / ESIA Studies <span className="ma">→</span></Link>
                    <Link to="/services/forest" className="m-lnk" onClick={closeMenu}>Forest &amp; Wildlife Clearance <span className="ma">→</span></Link>
                    <Link to="/services/audit" className="m-lnk" onClick={closeMenu}>Environmental Auditing <span className="ma">→</span></Link>
                    <Link to="/services/air" className="m-lnk" onClick={closeMenu}>Air Quality Assessment <span className="ma">→</span></Link>
                    <Link to="/services/gis" className="m-lnk" onClick={closeMenu}>Remote Sensing &amp; GIS <span className="ma">→</span></Link>
                    <Link to="/services/waste" className="m-lnk" onClick={closeMenu}>Waste Management <span className="ma">→</span></Link>
                    <Link to="/services/noise" className="m-lnk" onClick={closeMenu}>Noise Impact Studies <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/services/wildlife" className="m-lnk" onClick={closeMenu}>Wildlife &amp; Biodiversity <span className="ma">→</span></Link>
                    <Link to="/services/water" className="m-lnk" onClick={closeMenu}>Water Quality Studies <span className="ma">→</span></Link>
                    <Link to="/services/esg" className="m-lnk" onClick={closeMenu}>ESG Advisory &amp; Reporting <span className="ma">→</span></Link>
                    <Link to="/services/climate" className="m-lnk" onClick={closeMenu}>Climate Change &amp; Carbon <span className="ma">→</span></Link>
                    <Link to="/services/ehs" className="m-lnk" onClick={closeMenu}>EHS Management <span className="ma">→</span></Link>
                    <Link to="/services/risk" className="m-lnk" onClick={closeMenu}>Risk Assessment <span className="ma">→</span></Link>
                    <Link to="/services/compliance" className="m-lnk" onClick={closeMenu}>Regulatory Compliance <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/services/ai" className="m-lnk" onClick={closeMenu}>AI-Driven Monitoring <span className="ma">→</span></Link>
                    <Link to="/services/social" className="m-lnk" onClick={closeMenu}>Social Impact Assessment <span className="ma">→</span></Link>
                    <Link to="/services/marine" className="m-lnk" onClick={closeMenu}>Marine Environmental Studies <span className="ma">→</span></Link>
                    <Link to="/services/bio" className="m-lnk" onClick={closeMenu}>Biodiversity Surveys <span className="ma">→</span></Link>
                    <Link to="/services/cum" className="m-lnk" onClick={closeMenu}>Cumulative Impact Studies <span className="ma">→</span></Link>
                    <Link to="/services/rapid" className="m-lnk" onClick={closeMenu}>Rapid EIA <span className="ma">→</span></Link>
                    <Link to="/services/train" className="m-lnk" onClick={closeMenu}>Training Programs <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-btn">Industries <span className="arr">▾</span></button>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">Industries</div>
                  <div className="m-title">We focus on the greatest <em>environmental challenges</em> across all sectors.</div>
                  <Link to="/industries" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  <div>
                    <Link to="/industries/mining" className="m-lnk" onClick={closeMenu}>Mining &amp; Minerals <span className="ma">→</span></Link>
                    <Link to="/industries/oilgas" className="m-lnk" onClick={closeMenu}>Oil &amp; Gas <span className="ma">→</span></Link>
                    <Link to="/industries/chem" className="m-lnk" onClick={closeMenu}>Chemical Industry <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/industries/power" className="m-lnk" onClick={closeMenu}>Power &amp; Energy <span className="ma">→</span></Link>
                    <Link to="/industries/infra" className="m-lnk" onClick={closeMenu}>Infrastructure <span className="ma">→</span></Link>
                    <Link to="/industries/pharma" className="m-lnk" onClick={closeMenu}>Pharmaceutical <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/industries/mfg" className="m-lnk" onClick={closeMenu}>Manufacturing <span className="ma">→</span></Link>
                    <Link to="/industries/re" className="m-lnk" onClick={closeMenu}>Real Estate &amp; Construction <span className="ma">→</span></Link>
                    <Link to="/industries/ports" className="m-lnk" onClick={closeMenu}>Ports &amp; Airports <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <button className="nav-btn">About <span className="arr">▾</span></button>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">About</div>
                  <div className="m-title">At RGPL, <em>sustainability</em> is our business.</div>
                  <Link to="/about" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  <div>
                    <Link to="/about" className="m-lnk" onClick={closeMenu}>Our Company <span className="ma">→</span></Link>
                    <Link to="/about/people" className="m-lnk" onClick={closeMenu}>Our People <span className="ma">→</span></Link>
                    <Link to="/projects" className="m-lnk" onClick={closeMenu}>Our Work <span className="ma">→</span></Link>
                    <Link to="/about/nabet" className="m-lnk" onClick={closeMenu}>NABET Accreditation <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/events" className="m-lnk" onClick={closeMenu}>Events <span className="ma">→</span></Link>
                    <Link to="/contact" className="m-lnk" onClick={closeMenu}>Locations <span className="ma">→</span></Link>
                    <Link to="/about/moefcc" className="m-lnk" onClick={closeMenu}>MoEFCC Registration <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/insights" className="m-lnk" onClick={closeMenu}>News &amp; Insights <span className="ma">→</span></Link>
                    <Link to="/about/nsic" className="m-lnk" onClick={closeMenu}>NSIC Certification <span className="ma">→</span></Link>
                    <Link to="/contact" className="m-lnk" onClick={closeMenu}>Careers <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/projects" className="nav-btn" onClick={closeMenu}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/insights" className="nav-btn" onClick={closeMenu}>Insights</NavLink>
            </li>
          </ul>

          {/* Right — auth buttons + NABET logo + mobile toggle */}
          <div className="nav-right">
            <div className="nav-actions" style={{ display: "none" }}>
              {user ? (
                <>
                  <span className="user-chip"><span className="avatar">{(user.name?.[0] || "U").toUpperCase()}</span></span>
                  <button className="btn btn-ghost btn-sm" onClick={handleLogout}>Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-ghost btn-sm">Log in</Link>
                  <Link to="/signup" className="btn btn-primary btn-sm">Sign up</Link>
                </>
              )}
            </div>
            
            <Link to="/contact" className="nav-cta" style={{ display: open ? "none" : "inline-flex" }}>Contact →</Link>

            <button
              className={`hbg ${open ? "open" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              style={{ display: "flex", alignSelf: "center", marginLeft: 10 }}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE NAV ════════════════════════════════════════ */}
      <div className={`mob-nav ${open ? "open" : ""}`}>
        <div className="mob-sec">
          <div className="mob-hd">Solutions</div>
          <Link to="/services/eia" className="mob-lnk" onClick={closeMenu}>EIA / ESIA Studies</Link>
          <Link to="/services/forest" className="mob-lnk" onClick={closeMenu}>Forest &amp; Wildlife Clearance</Link>
          <Link to="/services/gis" className="mob-lnk" onClick={closeMenu}>Remote Sensing &amp; GIS</Link>
          <Link to="/services/esg" className="mob-lnk" onClick={closeMenu}>ESG Advisory</Link>
          <Link to="/services/ai" className="mob-lnk" onClick={closeMenu}>AI-Driven Monitoring</Link>
          <Link to="/services/climate" className="mob-lnk" onClick={closeMenu}>Climate Change &amp; Carbon</Link>
          <Link to="/services" className="mob-lnk accent" onClick={closeMenu}>All Solutions →</Link>
        </div>
        <div className="mob-sec">
          <div className="mob-hd">Industries</div>
          <Link to="/industries/mining" className="mob-lnk" onClick={closeMenu}>Mining &amp; Minerals</Link>
          <Link to="/industries/oilgas" className="mob-lnk" onClick={closeMenu}>Oil &amp; Gas</Link>
          <Link to="/industries/power" className="mob-lnk" onClick={closeMenu}>Power &amp; Energy</Link>
          <Link to="/industries/infra" className="mob-lnk" onClick={closeMenu}>Infrastructure</Link>
          <Link to="/industries" className="mob-lnk accent" onClick={closeMenu}>All Industries →</Link>
        </div>
        <div className="mob-sec">
          <div className="mob-hd">About</div>
          <Link to="/about" className="mob-lnk" onClick={closeMenu}>Our Company</Link>
          <Link to="/about/nabet" className="mob-lnk" onClick={closeMenu}>NABET Accreditation</Link>
          <Link to="/projects" className="mob-lnk" onClick={closeMenu}>Our Projects</Link>
          <Link to="/insights" className="mob-lnk" onClick={closeMenu}>News &amp; Insights</Link>
        </div>
        <div className="mob-sec">
          <Link to="/projects" className="mob-lnk" onClick={closeMenu}>Projects</Link>
          <Link to="/insights" className="mob-lnk" onClick={closeMenu}>Insights</Link>
          <Link to="/contact" className="mob-lnk accent" onClick={closeMenu}>Contact Us →</Link>
        </div>
      </div>
    </>
  );
}
