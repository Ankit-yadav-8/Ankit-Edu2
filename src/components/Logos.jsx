/* Official brand marks (image assets). Imported so Vite fingerprints them
   and rewrites the URL with the correct base path on GitHub Pages. */
import rcLogo from "../assets/rc-logo.png";
import nabetLogo from "../assets/nabet-logo.png";

export function RCLogo({ height = 48 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height }}>
      <span style={{ fontSize: height * 0.45, fontWeight: 800, color: "var(--ink)", lineHeight: 1.1, letterSpacing: "-0.5px" }}>Rejig GreenLogic</span>
      <span style={{ fontSize: height * 0.22, fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" }}>Private Limited</span>
    </div>
  );
}

export function NabetLogo({ height = 46 }) {
  return (
    <img
      src={nabetLogo}
      alt="NABET Accredited"
      style={{ height, width: "auto", display: "block", objectFit: "contain" }}
    />
  );
}
