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
          <RCLogo height={72} />
        </Link>

        {/* Center — nav links (becomes a dropdown on mobile) */}
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
                <Link to="/signup" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>Sign up</Link>
              </>
            )}
          </li>
        </ul>

        {/* Right — auth buttons + NABET logo + mobile toggle */}
        <div className="nav-right">
          <div className="nav-actions">
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

          <div className="nabet-logo" title="NABET Accredited">
            <NabetLogo height={62} />
          </div>

          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label="Menu"
            aria-expanded={open}
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
