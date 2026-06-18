import { Link } from "react-router-dom";
import { IconArrow } from "../components/Icons.jsx";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "120px 0" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2rem,6vw,3.4rem)" }}>
          This page took a <span className="gradient-text">green detour</span>
        </h1>
        <p className="section-sub" style={{ margin: "0 auto 28px", maxWidth: 440 }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-primary">Back to Home <IconArrow size={18} /></Link>
      </div>
    </section>
  );
}
