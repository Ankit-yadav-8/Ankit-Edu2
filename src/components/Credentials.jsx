import Reveal from "./Reveal.jsx";

const CREDENTIALS = [
  { level: "Experience", border: "#93c5fd", bg: "#dbeafe", points: ["Team of experts who have served for more than 2 Decades in Environmental Consultancy", "Environmental services in more than 11 varied Industrial sectors"] },
  { level: "Expertise", border: "#86efac", bg: "#dcfce7", points: ["Experts from IBM, UTCL, ACC (Holcim) etc."] },
  { level: "Strengths", border: "#bef264", bg: "#ecfccb", points: ["Accreditation and empanelment with MoEF/NABET, NABL, IBM, ISO, State Govt (SPCB), Ministry of Water Resources"] },
  { level: "Infrastructure", border: "#fdba74", bg: "#ffedd5", points: ["Pan India Presence", "NABL/MoEF Approved Laboratory"] },
];

const DiagramLayer = ({ data, children }) => (
  <div className="crd-layer" style={{ "--cb": data.border, "--cbg": data.bg }}>
    <div className="crd-tab" aria-hidden="true" />
    <div className="crd-row">
      <strong className="crd-lvl">{data.level}</strong>
      <ul className="crd-points">
        {data.points.map((p) => <li key={p}>{p}</li>)}
      </ul>
    </div>
    {children}
  </div>
);

export default function Credentials() {
  return (
    <section className="section crd-sec" style={{ padding: "80px 0", background: "#fff", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <Reveal className="text-center" style={{ marginBottom: 40 }}>
          <h2 style={{ color: "var(--violet-700)", fontFamily: "var(--font-head)", fontSize: "24px", textTransform: "uppercase", letterSpacing: "1px" }}>CREDENTIALS</h2>
        </Reveal>
        <Reveal>
          <DiagramLayer data={CREDENTIALS[0]}>
            <DiagramLayer data={CREDENTIALS[1]}>
              <DiagramLayer data={CREDENTIALS[2]}>
                <DiagramLayer data={CREDENTIALS[3]} />
              </DiagramLayer>
            </DiagramLayer>
          </DiagramLayer>
        </Reveal>
      </div>
    </section>
  );
}
