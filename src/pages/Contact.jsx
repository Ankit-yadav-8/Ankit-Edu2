import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconMail, IconPhone, IconPin, IconBuilding, IconArrow } from "../components/Icons.jsx";

const SECTORS = [
  "Mining & Minerals", "Thermal / Power", "Cement", "Chemicals & Petrochemicals",
  "Pharmaceuticals", "Infrastructure & Building", "Ports & Harbours / Coastal",
  "Metallurgical", "Other",
];
const TYPES = [
  "EIA / ESIA Study", "Forest / Wildlife Clearance", "CRZ Clearance",
  "Environmental Monitoring", "Compliance Audit", "ESG / Climate Risk",
  "CEQMS / Air Quality Product", "Other",
];

export default function Contact() {
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setMsg({ type: "", text: "" });
    const payload = Object.fromEntries(new FormData(e.target).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok && res.status !== 202) throw new Error(data.message || "Failed to send");
      setMsg({ type: "success", text: data.message });
      e.target.reset();
    } catch (err) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Request a proposal —"
        highlight="our smart intake makes it faster"
        subtitle="Tell us your sector, location and project type and our team will respond with a structured, accurate proposal."
        breadcrumb="Contact Us"
        cards={[
          { type: "info", icon: "📧", title: "Email", sub: "rgpl@rgreenlogic.com", tone: "green" },
          { type: "info", icon: "📞", title: "Phone", sub: "+91 89494 72643", tone: "teal" },
          { type: "info", icon: "📍", title: "Hyderabad", sub: "Telangana, India", tone: "amber" },
          { type: "stat", num: 24, suffix: "h", label: "Typical response", tone: "green" },
        ]}
      />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <h2 className="section-title" style={{ fontSize: "1.7rem" }}>Talk to our experts</h2>
            <p className="section-sub" style={{ marginBottom: 24 }}>
              Tell us your sector, location and project type and our team will respond with a
              structured, accurate proposal.
            </p>

            <div className="info-card">
              <span className="ico"><IconMail size={22} /></span>
              <div><b>Email</b><p><a href="mailto:rgpl@rgreenlogic.com">rgpl@rgreenlogic.com</a></p></div>
            </div>
            <div className="info-card">
              <span className="ico"><IconPhone size={22} /></span>
              <div><b>Phone</b><p><a href="tel:+918949472643">+91 89494 72643</a></p></div>
            </div>
            <div className="info-card">
              <span className="ico"><IconPin size={22} /></span>
              <div><b>Corporate Office</b><p>7th Floor, Block C, AWFIS Coworking Space, Laxmi Cyber City, Whitefields, Hitech City, Kondapur, Hyderabad, Telangana - 500081</p></div>
            </div>
            <div className="info-card">
              <span className="ico"><IconBuilding size={22} /></span>
              <div><b>Registered Office</b><p>Flat No. 301, 4th Floor, Ashish My Space, Chandanagar, Above Khazana Jewellers, Hyderabad - 500050</p></div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="card" style={{ padding: 30 }}>
              <h3 style={{ marginBottom: 6 }}>Smart Project Intake</h3>
              <p style={{ color: "var(--muted)", fontSize: ".94rem", marginBottom: 18 }}>
                Fields marked * are required.
              </p>
              {msg.text && <div className={`form-msg ${msg.type}`}>{msg.text}</div>}
              <form onSubmit={onSubmit}>
                <div className="row-2">
                  <div className="field"><label>Your Name *</label><input name="name" required placeholder="Full name" /></div>
                  <div className="field"><label>Email *</label><input name="email" type="email" required placeholder="you@company.com" /></div>
                </div>
                <div className="row-2">
                  <div className="field"><label>Phone</label><input name="phone" placeholder="+91…" /></div>
                  <div className="field"><label>Project Location</label><input name="location" placeholder="State / city" /></div>
                </div>
                <div className="row-2">
                  <div className="field">
                    <label>Sector</label>
                    <select name="sector" defaultValue="">
                      <option value="">Select sector…</option>
                      {SECTORS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label>Project Type</label>
                    <select name="projectType" defaultValue="">
                      <option value="">Select type…</option>
                      {TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field"><label>Subject</label><input name="subject" placeholder="How can we help?" /></div>
                <div className="field"><label>Message *</label><textarea name="message" required placeholder="Tell us about your project…" /></div>
                <button type="submit" className="btn btn-primary btn-block" disabled={sending}>
                  {sending ? "Sending…" : <>Send Enquiry <IconArrow size={18} /></>}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
