import Reveal from "./Reveal.jsx";

const CREDENTIALS = [
  { level: "Experience", tone: "teal", points: ["Team of experts who have served for more than 2 Decades in Environmental Consultancy", "Environmental services in more than 11 varied Industrial sectors"] },
  { level: "Expertise", tone: "green", points: ["Experts from IBM, UTCL, ACC (Holcim) etc."] },
  { level: "Strengths", tone: "amber", points: ["Accreditation and empanelment with MoEF/NABET, NABL, IBM, ISO, State Govt (SPCB), Ministry of Water Resources"] },
  { level: "Infrastructure", tone: "green", points: ["Pan India Presence", "NABL/MoEF Approved Laboratory"] },
];

export default function Credentials() {
  return (
    <section className="section section--soft">
      <div className="container">
        <Reveal className="section-head text-center">
          <span className="eyebrow">Why RGPL</span>
          <h2 className="section-title">CREDENTIALS</h2>
          <p className="section-sub">Two decades of experience, deep expertise and pan-India infrastructure.</p>
        </Reveal>
        <div className="cred-list" style={{ marginTop: 40 }}>
          {CREDENTIALS.map((c, i) => (
            <Reveal key={c.level} delay={(i % 4)} className={`cred-row tone-${c.tone}`}>
              <div className="cred-level">{c.level}</div>
              <ul className="mini-list">
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
