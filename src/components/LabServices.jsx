import Reveal from "./Reveal.jsx";
import { LAB } from "../data/infrastructure.js";
import nablCert from "../assets/nabl-certificate.png";
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

        <div className="lab-grid" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <Reveal>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}>
              <img src={lab1} alt="Laboratory facilities" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }} />
              <img src={lab2} alt="Water testing" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }} />
              <img src={lab3} alt="Equipment" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }} />
              <img src={lab4} alt="Scientist inspecting" style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "16px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }} />
            </div>
          </Reveal>

          <Reveal delay={1} className="cert-frame">
            <img src={nablCert} alt="NABL Certificate of Accreditation — JM Enviro Lab Private Limited" loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
