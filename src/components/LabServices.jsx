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

        <div style={{ marginTop: 48 }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
              <img src={lab1} alt="Laboratory facilities" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
              <img src={lab2} alt="Water testing" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
              <img src={lab3} alt="Equipment" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
              <img src={lab4} alt="Scientist inspecting" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", aspectRatio: "4/3", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }} />
            </div>
          </Reveal>

          <Reveal delay={0.2} style={{ marginTop: "40px", textAlign: "center" }}>
            <p style={{ color: "var(--muted)", marginBottom: "16px", fontSize: "15px" }}>
              Our state-of-the-art laboratory facilities are NABL-accredited and equipped for rigorous environmental analysis.
            </p>
            <a href="https://jmenvirolab.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', padding: '12px 24px', background: '#f0fdf4', borderRadius: '100px', border: '1px solid #bbf7d0' }}>
              🌐 Visit JM Envirolab →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
