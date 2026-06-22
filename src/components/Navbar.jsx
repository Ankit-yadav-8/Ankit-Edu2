import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { RCLogo, NabetLogo } from "./Logos.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { EXPERTISE_LINKS } from "../data/services.js";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Product & Services", children: EXPERTISE_LINKS },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/clientele", label: "Clientele" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const closeMenu = () => {
    setOpen(false);
    setSubmenu(false);
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
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Left — RC brand logo */}
        <Link className="brand-logo" to="/" onClick={closeMenu}>
          <RCLogo height={72} />
        </Link>

        {/* Center — nav links (becomes a dropdown on mobile) */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((n) =>
            n.children ? (
              <li key={n.to} className={`has-dropdown ${submenu ? "open" : ""}`}>
                <div className="dd-row">
                  <NavLink
                    to={n.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={closeMenu}
                  >
                    {n.label}
                  </NavLink>
                  <button
                    type="button"
                    className="dd-caret"
                    aria-label="Toggle sections"
                    aria-expanded={submenu}
                    onClick={() => setSubmenu((s) => !s)}
                  >
                    ▾
                  </button>
                </div>
                <ul className="dropdown">
                  {n.children.map((c) => (
                    <li key={c.to}>
                      <NavLink to={c.to} onClick={closeMenu}>
                        {c.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {n.label}
                </NavLink>
              </li>
            )
          )}

          {/* shown only inside the mobile dropdown */}
          <li className="nav-mobile-cta">
            {user ? (
              <button className="btn btn-ghost btn-sm" onClick={handleLogout}>Log out</button>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-sm" onClick={closeMenu}>Log in</Link>
                <Link to="/signup" className="btn btn-primary btn-sm" onClick={closeMenu}>Sign up</Link>
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
            onClick={() => setOpen((o) => { if (o) setSubmenu(false); return !o; })}
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
