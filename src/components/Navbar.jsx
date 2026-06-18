import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Product & Services" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/clientele", label: "Clientele" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Left — RC brand logo */}
        <Link className="brand-logo" to="/" onClick={() => setOpen(false)}>
          <RCLogo height={66} />
        </Link>

        {/* Center — nav links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <li key={n.to}>
              <NavLink
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </NavLink>
            </li>
          ))}

          {/* shown only inside the mobile dropdown */}
          <li className="nav-mobile-cta">
            {user ? (
              <button className="btn btn-ghost btn-sm" onClick={handleLogout}>Log out</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)}>Log in</Link>
                <Link to="/contact" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Get a Quote →</Link>
              </>
            )}
          </li>
        </ul>

        {/* Right — NABET logo (+ user chip / mobile toggle) */}
        <div className="nav-right">
          {user && (
            <div className="user-chip">
              <span className="avatar">{(user.name?.[0] || "U").toUpperCase()}</span>
            </div>
          )}
          <div className="nabet-logo" title="NABET Accredited">
            <NabetLogo height={62} />
          </div>
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
