import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
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
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Left — RC brand */}
        <Link className="brand-logo" to="/" onClick={() => setOpen(false)}>
          <RCLogo size={46} />
          <span className="logo-text">
            <b>Rejig GreenLogic</b>
            <span>Private Limited</span>
          </span>
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
        </ul>

        {/* Right — NABET logo + actions */}
        <div className="nav-right">
          <div className="nav-cta">
            {user ? (
              <div className="user-chip">
                <span className="avatar">{(user.name?.[0] || "U").toUpperCase()}</span>
                <span>{user.name?.split(" ")[0]}</span>
                <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-sm">
                  Log in
                </Link>
                <Link to="/contact" className="btn btn-primary btn-sm">
                  Get a Quote →
                </Link>
              </>
            )}
          </div>

          <div className="nabet-logo" title="NABET Accredited">
            <NabetLogo size={42} />
            <span className="nabet-text">
              <b>NABET</b>
              <span>Accredited</span>
            </span>
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
