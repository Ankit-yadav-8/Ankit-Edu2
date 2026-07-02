import Reveal from "./Reveal.jsx";
import { LAB } from "../data/infrastructure.js";
import nablCert from "../assets/nabl-certificate-new.png";
import lab1 from "../assets/lab-col-1.png";
import lab2 from "../assets/lab-col-2.png";
import lab3 from "../assets/lab-col-3.png";
import lab4 from "../assets/lab-col-4.png";
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

        <div className="lab-grid" style={{ marginTop: 40, alignItems: "center" }}>
          <Reveal>
            <div className="lab-collage">
              <img src={lab1} alt="Laboratory facilities" />
              <img src={lab2} alt="Water testing" />
              <img src={lab3} alt="Equipment" />
              <img src={lab4} alt="Scientist inspecting" />
            </div>
          </Reveal>

          <Reveal delay={1} className="cert-frame" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="https://jmenvirolab.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', paddingBottom: '8px' }}>🌐 Visit JM Envirolab →</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
