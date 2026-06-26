import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";
import { SECTORS } from "../data/sectors.js";

// Split the 11 NABET sectors into 3 balanced columns for the mega-menu.
const SECTOR_COLS = [SECTORS.slice(0, 4), SECTORS.slice(4, 8), SECTORS.slice(8)];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          {/* Left — RC brand logo */}
          <Link className="brand-logo" to="/" onClick={closeMenu}>
            <RCLogo height={72} />
          </Link>

          {/* Center — nav links (Mega menus inside previous design structure) */}
          <ul className={`nav-links ${open ? "open" : ""}`}>
            <li className="has-dropdown">
              <div className="dd-row">
                <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Solutions</NavLink>
                <button type="button" className="dd-caret" aria-label="Toggle solutions" onClick={() => {}}>▾</button>
              </div>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">Solutions</div>
                  <div className="m-title">Offering unparalleled depth and breadth of <em>expertise</em>.</div>
                  <Link to="/services" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  <div>
                    <Link to="/services?cat=Assessment" className="m-lnk" onClick={closeMenu}>EIA / ESIA Studies <span className="ma">→</span></Link>
                    <Link to="/services?cat=Clearance" className="m-lnk" onClick={closeMenu}>Forest &amp; Wildlife Clearance <span className="ma">→</span></Link>
                    <Link to="/services?cat=Audit" className="m-lnk" onClick={closeMenu}>Environmental Auditing <span className="ma">→</span></Link>
                    <Link to="/services?cat=Monitoring" className="m-lnk" onClick={closeMenu}>Air &amp; Water Monitoring <span className="ma">→</span></Link>
                    <Link to="/services?cat=Geospatial" className="m-lnk" onClick={closeMenu}>Remote Sensing &amp; GIS <span className="ma">→</span></Link>
                    <Link to="/services?cat=Audit" className="m-lnk" onClick={closeMenu}>Waste &amp; Compliance <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/services?cat=Clearance" className="m-lnk" onClick={closeMenu}>Wildlife &amp; Biodiversity <span className="ma">→</span></Link>
                    <Link to="/services?cat=ESG" className="m-lnk" onClick={closeMenu}>ESG Advisory &amp; Reporting <span className="ma">→</span></Link>
                    <Link to="/services?cat=ESG" className="m-lnk" onClick={closeMenu}>Climate Change &amp; Carbon <span className="ma">→</span></Link>
                    <Link to="/services?cat=Assessment" className="m-lnk" onClick={closeMenu}>Risk Assessment <span className="ma">→</span></Link>
                    <Link to="/services?cat=Monitoring" className="m-lnk" onClick={closeMenu}>Marine &amp; Coastal Studies <span className="ma">→</span></Link>
                    <Link to="/services?cat=ESG" className="m-lnk" onClick={closeMenu}>Training Programmes <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/products" className="m-lnk" onClick={closeMenu}>CEQMS Monitoring <span className="ma">→</span></Link>
                    <Link to="/ai-integration" className="m-lnk" onClick={closeMenu}>AI-Driven Monitoring <span className="ma">→</span></Link>
                    <Link to="/infrastructure" className="m-lnk" onClick={closeMenu}>NABL Laboratory <span className="ma">→</span></Link>
                    <Link to="/sectors" className="m-lnk" onClick={closeMenu}>NABET Sectors <span className="ma">→</span></Link>
                    <Link to="/services" className="m-lnk accent" onClick={closeMenu}>All Solutions <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="has-dropdown">
              <div className="dd-row">
                <NavLink to="/sectors" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Sectors</NavLink>
                <button type="button" className="dd-caret" aria-label="Toggle sectors" onClick={() => {}}>▾</button>
              </div>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">NABET Sectors</div>
                  <div className="m-title">Category-A accredited across <em>{SECTORS.length} industrial sectors</em>.</div>
                  <Link to="/sectors" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  {SECTOR_COLS.map((col, ci) => (
                    <div key={ci}>
                      {col.map((s) => (
                        <Link key={s.slug} to={`/sectors/${s.slug}`} className="m-lnk" onClick={closeMenu}>
                          <span className="m-nm">{s.name}</span> <span className="ma">→</span>
                        </Link>
                      ))}
                      {ci === 2 && (
                        <Link to="/sectors" className="m-lnk accent" onClick={closeMenu}><span className="m-nm">All Sectors</span> <span className="ma">→</span></Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li className="has-dropdown">
              <div className="dd-row">
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>About Us</NavLink>
                <button type="button" className="dd-caret" aria-label="Toggle about" onClick={() => {}}>▾</button>
              </div>
              <div className="mega">
                <div className="mega-l">
                  <div className="m-label">About</div>
                  <div className="m-title">At RGPL, <em>sustainability</em> is our business.</div>
                  <Link to="/about" className="m-explore" onClick={closeMenu}>Explore →</Link>
                </div>
                <div className="mega-r">
                  <div>
                    <Link to="/about" className="m-lnk" onClick={closeMenu}>Our Company <span className="ma">→</span></Link>
                    <Link to="/about" className="m-lnk" onClick={closeMenu}>Our People <span className="ma">→</span></Link>
                    <Link to="/projects" className="m-lnk" onClick={closeMenu}>Our Work <span className="ma">→</span></Link>
                    <Link to="/sectors" className="m-lnk" onClick={closeMenu}>NABET Accreditation <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/infrastructure" className="m-lnk" onClick={closeMenu}>Infrastructure &amp; Lab <span className="ma">→</span></Link>
                    <Link to="/clientele" className="m-lnk" onClick={closeMenu}>Our Clientele <span className="ma">→</span></Link>
                    <Link to="/contact" className="m-lnk" onClick={closeMenu}>Locations <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/ai-integration" className="m-lnk" onClick={closeMenu}>AI Integration <span className="ma">→</span></Link>
                    <Link to="/products" className="m-lnk" onClick={closeMenu}>Products <span className="ma">→</span></Link>
                    <Link to="/contact" className="m-lnk" onClick={closeMenu}>Careers <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="ai-link-li">
              <NavLink to="/ai-integration" className={({ isActive }) => (isActive ? "active ai-link" : "ai-link")} onClick={closeMenu}>✨ AI</NavLink>
            </li>

            <li>
              <NavLink to="/infrastructure" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Infrastructure</NavLink>
            </li>
            <li>
              <NavLink to="/clientele" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Clientele</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Contact Us</NavLink>
            </li>
          </ul>

          {/* Right — NABET accreditation logo + mobile toggle */}
          <div className="nav-right">
            <Link to="/sectors" className="nabet-logo" aria-label="NABET accredited — view our sectors" onClick={closeMenu}>
              <NabetLogo height={58} />
            </Link>

            <button
              className={`hbg ${open ? "open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
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
          <Link to="/services?cat=Assessment" className="mob-lnk" onClick={closeMenu}>EIA / ESIA Studies</Link>
          <Link to="/services?cat=Clearance" className="mob-lnk" onClick={closeMenu}>Forest &amp; Wildlife Clearance</Link>
          <Link to="/services?cat=Geospatial" className="mob-lnk" onClick={closeMenu}>Remote Sensing &amp; GIS</Link>
          <Link to="/services?cat=ESG" className="mob-lnk" onClick={closeMenu}>ESG Advisory</Link>
          <Link to="/services" className="mob-lnk accent" onClick={closeMenu}>All Solutions →</Link>
        </div>
        <div className="mob-sec">
          <div className="mob-hd">Sectors</div>
          {SECTORS.slice(0, 5).map((s) => (
            <Link key={s.slug} to={`/sectors/${s.slug}`} className="mob-lnk" onClick={closeMenu}>{s.name}</Link>
          ))}
          <Link to="/sectors" className="mob-lnk accent" onClick={closeMenu}>All {SECTORS.length} Sectors →</Link>
        </div>
        <div className="mob-sec">
          <div className="mob-hd">Company</div>
          <Link to="/ai-integration" className="mob-lnk" onClick={closeMenu}>✨ AI Integration</Link>
          <Link to="/about" className="mob-lnk" onClick={closeMenu}>About Us</Link>
          <Link to="/infrastructure" className="mob-lnk" onClick={closeMenu}>Infrastructure</Link>
          <Link to="/clientele" className="mob-lnk" onClick={closeMenu}>Clientele</Link>
          <Link to="/products" className="mob-lnk" onClick={closeMenu}>Products</Link>
        </div>
        <div className="mob-sec">
          <Link to="/sectors" className="mob-lnk" onClick={closeMenu}>NABET Sectors</Link>
          <Link to="/contact" className="mob-lnk accent" onClick={closeMenu}>Contact Us →</Link>
        </div>
      </div>
    </>
  );
}
