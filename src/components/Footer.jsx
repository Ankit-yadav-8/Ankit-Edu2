import { Link } from "react-router-dom";
import { RCLogo } from "./Logos.jsx";
import { Insta, FB, LI, XTw, YT, IconPin, IconPhone, IconMail } from "./Icons.jsx";
import { EXPERTISE_LINKS } from "../data/services.js";
import nabetLogo from "../assets/nabet-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <RCLogo height={54} />
              <img src={nabetLogo} alt="NABET Logo" style={{ height: "48px" }} />
            </div>
            <p className="desc">
              Your techno-legal advisory partner in environmental consultancy — trusted by
              industrial units across 50+ sectors in India.
            </p>
            <div className="socials">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><Insta /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><FB /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><LI /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X"><XTw /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><YT /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/services">Product & Services</Link>
            <Link to="/infrastructure">Infrastructure</Link>
            <Link to="/clientele">Clientele</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Client Login</Link>
          </div>

          <div className="footer-col">
            <h4>Product & Services</h4>
            {EXPERTISE_LINKS.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="foot-contact">
              <li style={{ display: "flex", gap: 10 }}>
                <IconPin size={18} style={{ color: "var(--primary-light)", flexShrink: 0 }} />
                <span>7th Floor, Block C, Laxmi Cyber City, White Fields, Hitech City, Kondapur, Hyderabad - 500081</span>
              </li>
              <li>
                <IconPhone size={16} />
                <a href="tel:+918949472643">+91 89494 72643</a>
              </li>
              <li>
                <IconMail size={16} />
                <a href="mailto:rgpl@rgreenlogic.com">rgpl@rgreenlogic.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Rejig GreenLogic Private Limited. All rights reserved.</span>
          <span>NABET · MoEFCC · NSIC Accredited &nbsp;|&nbsp; Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
