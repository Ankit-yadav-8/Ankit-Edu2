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
          <h2 className="section-title" style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(28px, 3vw, 42px)', color: 'var(--ink)', marginBottom: 16 }}>Laboratory Facilities</h2>
          <p className="section-sub" style={{ margin: '0 auto', maxWidth: 800, color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>
            Our state of the art analytical facilities provide rigorous scientific precision to evaluate
            ecological integrity across multiple environmental matrices.
          </p>
        </Reveal>

        <div className="grid-3" style={{ marginTop: 48, gap: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {/* Card 1 */}
          <Reveal delay={0.1} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--line)', borderRadius: 12 }}>
            <img src={lab2} alt="Soil Testing" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>Soil Testing</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Nutrient Profiling (N-P-K)</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Heavy Metal Contamination</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Soil Microbiome Analysis</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Carbon Sequestration Potential</li>
              </ul>
              <a href="/contact" className="btn btn-dark" style={{ marginTop: 24, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '12px', background: '#19301f', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Request Analysis ◯</a>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.2} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--line)', borderRadius: 12 }}>
            <img src={lab3} alt="Water Quality" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>Water Quality</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Potability & Microbial Testing</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Industrial Effluent Analysis</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Ground Water Monitoring</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Aquatic Ecosystem Health</li>
              </ul>
              <a href="/contact" className="btn btn-dark" style={{ marginTop: 24, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '12px', background: '#19301f', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Request Analysis ◯</a>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.3} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid var(--line)', borderRadius: 12 }}>
            <img src={lab4} alt="Air Monitoring" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: '24px 24px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: 20 }}>Air Monitoring</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Particulate Matter (PM2.5/10)</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> VOC & Chemical Emissions</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Ambient Air Quality Studies</li>
                <li style={{ display: 'flex', gap: 10, fontSize: '13px', color: 'var(--muted)', alignItems: 'center' }}><span style={{ color: 'var(--mint)', fontSize: '16px' }}>○</span> Carbon Footprint Audits</li>
              </ul>
              <a href="/contact" className="btn btn-dark" style={{ marginTop: 24, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '12px', background: '#19301f', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>Request Analysis ◯</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} style={{ marginTop: 60, padding: 32, background: 'var(--bg)', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid var(--line)' }}>
          <p style={{ color: 'var(--muted)', marginBottom: 24, maxWidth: 600, lineHeight: 1.6 }}>
            Our laboratory infrastructure is proudly supported by our associate NABL-certified laboratory, <b>{LAB.name}</b>, located in {LAB.location}.
          </p>
          <img src={nablCert} alt="NABL Certificate of Accreditation" loading="lazy" style={{ maxHeight: 200, marginBottom: 24, objectFit: 'contain' }} />
          <a href="https://jmenvirolab.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>🌐 Visit JM Envirolab →</a>
        </Reveal>
      </div>
    </section>
  );
}
