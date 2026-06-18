import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import { AI_FEATURES, PHASES } from "../data/aiFeatures.js";
import { IconArrow, IconCheck } from "../components/Icons.jsx";

export default function AiIntegration() {
  const [active, setActive] = useState(AI_FEATURES[0].id);
  const f = AI_FEATURES.find((x) => x.id === active);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">✨ AI Integration</span>
            <h1>How we put <span className="gradient-text">AI to work</span> — responsibly</h1>
            <p className="breadcrumb"><Link to="/">Home</Link> / AI Integration</p>
          </Reveal>
        </div>
      </section>

      {/* Approach intro */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">Our approach</span>
            <h2 className="section-title">Five AI agents, one phased rollout</h2>
            <p className="section-sub">
              Each agent is mapped to a real RGPL service. Every AI output stays a draft until a
              qualified consultant reviews and signs it off.
            </p>
          </Reveal>

          {/* Phase timeline */}
          <div className="grid grid-3" style={{ marginTop: 44 }}>
            {PHASES.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) + 1} className="card">
                <span className="tag">{p.name}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive feature explorer */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">The agents</span>
            <h2 className="section-title">Explore each AI feature</h2>
          </Reveal>

          <div className="ai-explorer" style={{ marginTop: 40 }}>
            <div className="ai-list">
              {AI_FEATURES.map((feat) => (
                <button
                  key={feat.id}
                  className={`ai-list__item ${feat.id === active ? "active" : ""}`}
                  onClick={() => setActive(feat.id)}
                >
                  <span className="ai-list__icon">{feat.icon}</span>
                  <span>
                    <b>{feat.label}</b>
                    <small>{feat.phase} · {feat.type}</small>
                  </span>
                </button>
              ))}
            </div>

            <div className="ai-detail card">
              <div className="ai-detail__head">
                <span className="ai-detail__icon">{f.icon}</span>
                <div>
                  <h3>{f.label}</h3>
                  <div className="ai-chips">
                    <span className="tag">{f.phase}</span>
                    <span className="tag">{f.type}</span>
                    <span className="tag">{f.agentType}</span>
                  </div>
                </div>
              </div>

              <p className="body" style={{ marginTop: 14 }}>{f.summary}</p>

              <h4 className="ai-sub">Tools &amp; data</h4>
              <div className="ai-tools">
                {f.tools.map((t) => <span key={t} className="ai-tool">{t}</span>)}
              </div>

              <h4 className="ai-sub">How it works</h4>
              <ul className="checklist">
                {f.architecture.map((step, idx) => (
                  <li key={idx}><span className="tick">{idx + 1}</span> {step}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section">
        <div className="container">
          <Reveal className="govern">
            <div className="ico"><IconCheck size={26} /></div>
            <div>
              <h3>Responsible use, by design</h3>
              <p className="body">
                Every AI output in technical or compliance work is a <b>draft until a qualified RGPL
                consultant reviews and signs off</b>. Client data stays inside contracted,
                access-controlled AI services — never free consumer chat tools — and a one-page
                internal AI-use policy is in place before any phase launches.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Want to see our AI features in action?</h2>
            <p>From the visitor assistant to predictive monitoring — let's scope what fits your project.</p>
            <Link to="/contact" className="btn btn-light">Talk to an Expert <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
