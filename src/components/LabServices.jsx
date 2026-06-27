import Reveal from "./Reveal.jsx";
import { LAB } from "../data/infrastructure.js";
import nablCert from "../assets/nabl-certificate.png";

/* Laboratory Services — shared by the Infrastructure and Home pages.
   Associate NABL-certified laboratory (JM Envirolab Pvt. Ltd., Gurgaon)
   with its comprehensive range of testing/monitoring services and the
   NABL Certificate of Accreditation. */
export default function LabServices({ soft = false }) {
  return (
    <section className={`section${soft ? " section--soft" : ""}`}>
      <div className="container">
        <Reveal className="section-head text-center">
          <span className="eyebrow">Laboratory</span>
          <h2 className="section-title">Laboratory Services</h2>
          <p className="section-sub">
            Associated with NABL-certified laboratory <b>{LAB.name}</b>, located in {LAB.location}.
            A comprehensive range of services are:
          </p>
        </Reveal>

        <div className="lab-grid" style={{ marginTop: 40 }}>
          <Reveal className="card">
            <ul className="checklist lab-services">
              {LAB.services.map((s) => (
                <li key={s}><span className="tick">✓</span> {s}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={1} className="cert-frame">
            <img src={nablCert} alt="NABL Certificate of Accreditation — JM Enviro Lab Private Limited" loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
