import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import LabServices from "../components/LabServices.jsx";
import { CAPABILITIES } from "../data/infrastructure.js";
import { IconArrow } from "../components/Icons.jsx";
import isoCert from "../assets/iso-certificate.png";

export default function Infrastructure() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Impact-assessment tools, software &amp; a"
        highlight="NABL-certified laboratory"
        subtitle="Industry-standard modelling, geospatial and monitoring tools — backed by ISO 9001:2015 quality management."
        breadcrumb="Infrastructure"
        cards={[
          { type: "image", src: isoCert, alt: "ISO 9001:2015 Certificate of Registration" },
          { type: "info", icon: "🛰️", title: "GIS & Remote Sensing", sub: "ArcGIS · Erdas", tone: "green" },
          { type: "info", icon: "🌬️", title: "AERMOD", sub: "Air dispersion", tone: "teal" },
          { type: "info", icon: "🧪", title: "NABL Lab", sub: "JM Envirolab", tone: "amber" },
          { type: "stat", num: 5, label: "Capability areas", tone: "green" },
        ]}
      />

      {/* Technical capabilities */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Technical capability</span>
            <h2 className="section-title">Impact Assessment Tools / Softwares</h2>
            <p className="section-sub">Industry-standard modelling, geospatial and monitoring tools behind every RGPL study.</p>
          </Reveal>

          <Reveal className="tool-table-wrap" style={{ marginTop: 44 }}>
            <table className="tool-table">
              <tbody>
                {CAPABILITIES.map((c, i) => (
                  <tr key={c.title}>
                    <td className="tool-table__num">{i + 1}.</td>
                    <td className="tool-table__cat">
                      <h3>{c.title}</h3>
                      <ul>
                        {c.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Laboratory Services */}
      <LabServices soft />

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Need testing, monitoring or modelling support?</h2>
            <p>From AERMOD dispersion modelling to NABL-grade lab analysis — our infrastructure backs every assessment.</p>
            <Link to="/contact" className="btn btn-light">Talk to an Expert <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
