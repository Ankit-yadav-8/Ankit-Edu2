import Reveal from "./Reveal.jsx";

const CREDENTIALS = [
  { level: "Experience", border: "#93c5fd", bg: "#dbeafe", points: ["Team of experts who have served for more than 2 Decades in Environmental Consultancy", "Environmental services in more than 11 varied Industrial sectors"] },
  { level: "Expertise", border: "#86efac", bg: "#dcfce7", points: ["Experts from IBM, UTCL, ACC (Holcim) etc."] },
  { level: "Strengths", border: "#bef264", bg: "#ecfccb", points: ["Accreditation and empanelment with MoEF/NABET, NABL, IBM, ISO, State Govt (SPCB), Ministry of Water Resources"] },
  { level: "Infrastructure", border: "#fdba74", bg: "#ffedd5", points: ["Pan India Presence", "NABL/MoEF Approved Laboratory"] },
];

const DiagramLayer = ({ data, children }) => (
  <div style={{ position: "relative", border: `1px solid ${data.border}`, borderLeft: "none", marginLeft: "80px", padding: "28px 28px 28px 0", background: "#fff", display: "flex", flexDirection: "column", minHeight: "120px" }}>
    <div style={{ position: "absolute", left: "-80px", top: "-1px", bottom: "-1px", width: "80px", background: data.bg, border: `1px solid ${data.border}`, borderRight: "none", borderRadius: "1000px 0 0 1000px", zIndex: 1 }} />
    <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "140px 1fr", gap: "20px", marginBottom: children ? "20px" : "0", alignItems: "center" }}>
      <strong style={{ color: "var(--ink)", paddingLeft: "10px", fontSize: "15px" }}>{data.level}</strong>
      <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13.5px", color: "var(--ink)", lineHeight: 1.6, listStyle: "disc" }}>
         {data.points.map(p => <li key={p} style={{ marginBottom: "4px" }}>{p}</li>)}
      </ul>
    </div>
    {children}
  </div>
);

export default function Credentials() {
  return (
    <section className="section" style={{ padding: "80px 0", background: "#fff", overflow: "hidden" }}>
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
