import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import NotFound from "./NotFound.jsx";
import { PROJECTS, getProject } from "../data/projects.js";
import { IconArrow, IconCheck } from "../components/Icons.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) document.title = `${project.title} | Case Study | Rejig GreenLogic`;
  }, [project]);

  // Unknown slug → render the standard 404 page.
  if (!project) return <NotFound />;

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const steps = [
    { n: "01", h: "The challenge", t: project.challenge },
    { n: "02", h: "Our approach", t: project.solution },
    { n: "03", h: "The outcome", t: project.outcome },
  ];

  return (
    <>
      <PageHero
        eyebrow={`Case Study · ${project.tag}`}
        title="Project:"
        highlight={project.title}
        subtitle={project.summary}
        breadcrumb={project.title}
        cta={[
          { to: "/contact", label: "Discuss a similar project", variant: "btn-primary" },
          { to: "/projects", label: "All projects", variant: "btn-ghost" },
        ]}
        cards={[
          { type: "image", src: project.image, alt: project.title },
          { type: "info", icon: "📍", title: project.location, sub: project.tag, tone: "green" },
          { type: "info", icon: "🎯", title: "Outcome", sub: "Clearance / certification secured", tone: "teal" },
          { type: "info", icon: "🏅", title: "NABET Category-A", sub: "Accredited team", tone: "amber" },
        ]}
      />

      {/* Overview + at-a-glance + stats */}
      <section className="section case-sec">
        <div className="container">
          <div className="case-overview">
            <Reveal className="case-overview__main">
              <span className="eyebrow">Project overview</span>
              <h2 className="section-title">{project.title}</h2>
              <p className="body" style={{ marginTop: 14 }}>{project.summary}</p>
              <p className="body">
                Delivered end-to-end by RGPL's NABET Category-A team — from baseline studies and
                technical assessment through to regulatory submission, appraisal support and the
                final clearance or certification.
              </p>
              <div className="hero-actions" style={{ marginTop: 22 }}>
                <Link to="/contact" className="btn btn-primary">Request a proposal <IconArrow size={18} /></Link>
                <Link to="/services" className="btn btn-ghost">Related services</Link>
              </div>
            </Reveal>

            <Reveal delay={1} className="case-facts">
              <div className="case-facts__img">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <h3 className="case-facts__h">At a glance</h3>
              <dl className="case-facts__list">
                <div><dt>Sector</dt><dd>{project.tag}</dd></div>
                <div><dt>Location</dt><dd>{project.location}</dd></div>
                <div><dt>Accreditation</dt><dd>NABET Category-A</dd></div>
                <div><dt>Services</dt><dd>{project.services.length} workstreams</dd></div>
              </dl>
            </Reveal>
          </div>

          <div className="case-stats">
            {project.stats.map((s) => (
              <div className="case-stat" key={s.label}>
                <div className="case-stat__num">{s.num}</div>
                <div className="case-stat__lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Approach / Outcome */}
      <section className="section section--soft case-sec">
        <div className="container">
          <Reveal className="section-head text-center">
            <span className="eyebrow">How we delivered</span>
            <h2 className="section-title">Challenge, approach &amp; outcome</h2>
          </Reveal>
          <div className="case-steps">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i} className="case-step">
                <span className="case-step__n">{s.n}</span>
                <h3 className="case-step__h">{s.h}</h3>
                <p className="body">{s.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services delivered + frameworks + results */}
      <section className="section case-sec">
        <div className="container">
          <div className="case-delivery">
            <Reveal className="card">
              <div className="ico"><IconCheck size={26} /></div>
              <h3 style={{ marginBottom: 14 }}>Services delivered</h3>
              <ul className="checklist">
                {project.services.map((s) => (
                  <li key={s}><span className="tick">✓</span> {s}</li>
                ))}
              </ul>
              {project.frameworks?.length > 0 && (
                <>
                  <h4 className="case-fw__h">Regulatory frameworks</h4>
                  <div className="case-fw">
                    {project.frameworks.map((f) => (
                      <span className="tag" key={f}>{f}</span>
                    ))}
                  </div>
                </>
              )}
            </Reveal>

            <Reveal delay={1} className="card case-results">
              <div className="ico"><IconArrow size={26} /></div>
              <h3 style={{ marginBottom: 14 }}>Results &amp; impact</h3>
              <ul className="checklist">
                {(project.results || []).map((r) => (
                  <li key={r}><span className="tick">✓</span> {r}</li>
                ))}
              </ul>
              <p className="body" style={{ marginTop: 16 }}>
                Our NABET Category-A accreditation and multidisciplinary team let us take projects
                like this from baseline to clearance under one roof.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prev / next + CTA */}
      <section className="section section--soft case-sec">
        <div className="container">
          <div className="sector-nav">
            <Link to={`/projects/${prev.slug}`} className="sector-nav__btn">
              <span className="sector-nav__dir">← Previous project</span>
              <span className="sector-nav__name">{prev.title}</span>
            </Link>
            <Link to="/projects" className="sector-nav__all">All projects</Link>
            <Link to={`/projects/${next.slug}`} className="sector-nav__btn sector-nav__btn--next">
              <span className="sector-nav__dir">Next project →</span>
              <span className="sector-nav__name">{next.title}</span>
            </Link>
          </div>

          <Reveal className="cta-band" style={{ marginTop: 36 }}>
            <h2>Planning a similar {project.tag.toLowerCase()} project?</h2>
            <p>Let our accredited team scope the right assessment, clearance and monitoring pathway for you.</p>
            <Link to="/contact" className="btn btn-light">Get in touch <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
