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

      {/* Overview */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Project overview</span>
            <h2 className="section-title">{project.title}</h2>
            <p className="body" style={{ marginTop: 14 }}>{project.summary}</p>
            <div className="lab-meta" style={{ marginTop: 18 }}>
              <span className="tag">{project.tag}</span>
              <span className="tag">{project.location}</span>
            </div>
            <div className="hero-actions" style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn btn-primary">Request a proposal <IconArrow size={18} /></Link>
              <Link to="/services" className="btn btn-ghost">Related services</Link>
            </div>
          </Reveal>
          <Reveal delay={1} className="cert-frame">
            <img src={project.image} alt={project.title} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Key stats */}
      <section className="section section--soft">
        <div className="container">
          <div className="stats grid-3">
            {project.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Outcome */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ marginTop: 8 }}>
            <Reveal className="card">
              <span className="cap-index">01</span>
              <h3 style={{ marginTop: 6, marginBottom: 10 }}>The challenge</h3>
              <p className="body">{project.challenge}</p>
            </Reveal>
            <Reveal delay={1} className="card">
              <span className="cap-index">02</span>
              <h3 style={{ marginTop: 6, marginBottom: 10 }}>Our approach</h3>
              <p className="body">{project.solution}</p>
            </Reveal>
            <Reveal delay={2} className="card">
              <span className="cap-index">03</span>
              <h3 style={{ marginTop: 6, marginBottom: 10 }}>The outcome</h3>
              <p className="body">{project.outcome}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services delivered */}
      <section className="section section--soft">
        <div className="container split">
          <Reveal className="card">
            <div className="ico"><IconCheck size={26} /></div>
            <h3 style={{ marginBottom: 14 }}>Services delivered</h3>
            <ul className="checklist">
              {project.services.map((s) => (
                <li key={s}><span className="tick">✓</span> {s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1} className="card">
            <div className="ico"><IconArrow size={26} /></div>
            <h3 style={{ marginBottom: 14 }}>Why it matters</h3>
            <p className="body">{project.summary}</p>
            <p className="body">Our NABET Category-A accreditation and multidisciplinary team let us take projects like this from baseline to clearance under one roof.</p>
          </Reveal>
        </div>
      </section>

      {/* Prev / next project navigation */}
      <section className="section">
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
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Planning a similar {project.tag.toLowerCase()} project?</h2>
            <p>Let our accredited team scope the right assessment, clearance and monitoring pathway for you.</p>
            <Link to="/contact" className="btn btn-light">Get in touch <IconArrow size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
