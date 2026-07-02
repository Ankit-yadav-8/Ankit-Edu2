/* Official brand marks (image assets). Imported so Vite fingerprints them
   and rewrites the URL with the correct base path on GitHub Pages. */
import rcLogo from "../assets/rc-logo.png";
import nabetLogo from "../assets/accred-badge.png";

export function RCLogo({ height = 48 }) {
  return (
    <img
      src={rcLogo}
      alt="Rejig Green Logic Private Limited"
      style={{ height, width: "auto", display: "block", objectFit: "contain" }}
    />
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
