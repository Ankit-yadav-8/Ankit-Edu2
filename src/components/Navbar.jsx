import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";

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
                    <Link to="/about#company" className="m-lnk" onClick={closeMenu}>Our Company <span className="ma">→</span></Link>
                    <Link to="/about#people" className="m-lnk" onClick={closeMenu}>Our People <span className="ma">→</span></Link>
                    <Link to="/about#nabet" className="m-lnk" onClick={closeMenu}>NABET Accreditation <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/about#events" className="m-lnk" onClick={closeMenu}>Events <span className="ma">→</span></Link>
                    <Link to="/about#locations" className="m-lnk" onClick={closeMenu}>Locations <span className="ma">→</span></Link>
                  </div>
                  <div>
                    <Link to="/about#careers" className="m-lnk" onClick={closeMenu}>Careers <span className="ma">→</span></Link>
                  </div>
                </div>
              </div>
            </li>

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
                    <Link to="/services?cat=Assessment" className="m-lnk" onClick={closeMenu}>ASSESSMENT</Link>
                    <Link to="/services?cat=Clearance" className="m-lnk" onClick={closeMenu}>CLEARANCES</Link>
                    <Link to="/services?cat=Monitoring" className="m-lnk" onClick={closeMenu}>MONITORING</Link>
                  </div>
                  <div>
                    <Link to="/services?cat=Audit" className="m-lnk" onClick={closeMenu}>AUDIT &amp; COMPLIANCE</Link>
                    <Link to="/services?cat=Geospatial" className="m-lnk" onClick={closeMenu}>GEOSPATIAL</Link>
                    <Link to="/services?cat=ESG" className="m-lnk" onClick={closeMenu}>ESG &amp; SUSTAINABILITY</Link>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
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

          {/* Right — auth buttons + NABET logo + mobile toggle */}
          <div className="nav-right">
            <div className="nabet-logo">
              <NabetLogo height={64} />
            </div>

            <button
              className={`hbg ${open ? "open" : ""}`}
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              style={{ alignSelf: "center", marginLeft: 10 }}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE NAV ════════════════════════════════════════ */}
      <div className={`mob-nav ${open ? "open" : ""}`}>
        <div className="mob-sec">
          <div className="mob-hd">About Us</div>
          <Link to="/about" className="mob-lnk" onClick={closeMenu}>Our Company</Link>
          <Link to="/about/nabet" className="mob-lnk" onClick={closeMenu}>NABET Accreditation</Link>
        </div>
        
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
          <div className="mob-hd">Infrastructure</div>
          <Link to="/infrastructure" className="mob-lnk" onClick={closeMenu}>Infrastructure</Link>
        </div>
        
        <div className="mob-sec">
          <div className="mob-hd">Clientele</div>
          <Link to="/clientele" className="mob-lnk" onClick={closeMenu}>Clientele</Link>
        </div>
        <div className="mob-sec">
          <Link to="/contact" className="mob-lnk accent" onClick={closeMenu}>Contact Us →</Link>
        </div>
      </div>
    </>
  );
}
