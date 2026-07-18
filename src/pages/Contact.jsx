import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconMail, IconPhone, IconPin, IconBuilding, IconArrow } from "../components/Icons.jsx";
import { postJSON } from "../lib/api.js";

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

// Country dial codes — India first (default), then common destinations.
const COUNTRIES = [
  { iso: "IN", name: "India", dial: "+91", flag: "🇮🇳" },
  { iso: "US", name: "USA", dial: "+1", flag: "🇺🇸" },
  { iso: "GB", name: "UK", dial: "+44", flag: "🇬🇧" },
  { iso: "AE", name: "UAE", dial: "+971", flag: "🇦🇪" },
  { iso: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { iso: "QA", name: "Qatar", dial: "+974", flag: "🇶🇦" },
  { iso: "KW", name: "Kuwait", dial: "+965", flag: "🇰🇼" },
  { iso: "OM", name: "Oman", dial: "+968", flag: "🇴🇲" },
  { iso: "BH", name: "Bahrain", dial: "+973", flag: "🇧🇭" },
  { iso: "SG", name: "Singapore", dial: "+65", flag: "🇸🇬" },
  { iso: "MY", name: "Malaysia", dial: "+60", flag: "🇲🇾" },
  { iso: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { iso: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { iso: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
  { iso: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
  { iso: "IT", name: "Italy", dial: "+39", flag: "🇮🇹" },
  { iso: "ES", name: "Spain", dial: "+34", flag: "🇪🇸" },
  { iso: "NL", name: "Netherlands", dial: "+31", flag: "🇳🇱" },
  { iso: "CH", name: "Switzerland", dial: "+41", flag: "🇨🇭" },
  { iso: "SE", name: "Sweden", dial: "+46", flag: "🇸🇪" },
  { iso: "JP", name: "Japan", dial: "+81", flag: "🇯🇵" },
  { iso: "CN", name: "China", dial: "+86", flag: "🇨🇳" },
  { iso: "KR", name: "South Korea", dial: "+82", flag: "🇰🇷" },
  { iso: "HK", name: "Hong Kong", dial: "+852", flag: "🇭🇰" },
  { iso: "ID", name: "Indonesia", dial: "+62", flag: "🇮🇩" },
  { iso: "TH", name: "Thailand", dial: "+66", flag: "🇹🇭" },
  { iso: "VN", name: "Vietnam", dial: "+84", flag: "🇻🇳" },
  { iso: "PH", name: "Philippines", dial: "+63", flag: "🇵🇭" },
  { iso: "BD", name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
  { iso: "NP", name: "Nepal", dial: "+977", flag: "🇳🇵" },
  { iso: "LK", name: "Sri Lanka", dial: "+94", flag: "🇱🇰" },
  { iso: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { iso: "BT", name: "Bhutan", dial: "+975", flag: "🇧🇹" },
  { iso: "MV", name: "Maldives", dial: "+960", flag: "🇲🇻" },
  { iso: "ZA", name: "South Africa", dial: "+27", flag: "🇿🇦" },
  { iso: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { iso: "KE", name: "Kenya", dial: "+254", flag: "🇰🇪" },
  { iso: "EG", name: "Egypt", dial: "+20", flag: "🇪🇬" },
  { iso: "BR", name: "Brazil", dial: "+55", flag: "🇧🇷" },
  { iso: "MX", name: "Mexico", dial: "+52", flag: "🇲🇽" },
  { iso: "NZ", name: "New Zealand", dial: "+64", flag: "🇳🇿" },
  { iso: "IE", name: "Ireland", dial: "+353", flag: "🇮🇪" },
  { iso: "TR", name: "Turkey", dial: "+90", flag: "🇹🇷" },
];

export default function Contact() {
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);
  const [dialIso, setDialIso] = useState("IN");
  const [phoneNum, setPhoneNum] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSending(true);
    setMsg({ type: "", text: "" });
    const payload = Object.fromEntries(new FormData(e.target).entries());

    // Combine country code + number into a single phone value; drop the helper field.
    const dial = COUNTRIES.find((c) => c.iso === dialIso)?.dial || "";
    payload.phone = phoneNum ? `${dial} ${phoneNum}`.trim() : "";
    delete payload.countryIso;

    try {
      const { ok, status, data } = await postJSON("/api/contact", payload);
      if (!ok && status !== 202) throw new Error(data.message || "Failed to send");
      setMsg({ type: "success", text: data.message || "Thank you! Our team will get back to you shortly." });
      e.target.reset();
      setPhoneNum("");
    } catch (err) {
      const text =
        err.name === "AbortError"
          ? "The server took too long to respond. Please try again in a moment."
          : err.message;
      setMsg({ type: "error", text });
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
              <div><b>Registered & Corporate Office</b><p>7th Floor, Block C, Laxmi Cyber City, White Fields, Hitech City, Kondapur, Hyderabad - 500081</p></div>
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
                  <div className="field">
                    <label>Phone</label>
                    <div className="phone-row">
                      <select
                        name="countryIso"
                        value={dialIso}
                        onChange={(e) => setDialIso(e.target.value)}
                        aria-label="Country code"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c.iso} value={c.iso}>
                            {c.flag} {c.name} ({c.dial})
                          </option>
                        ))}
                      </select>
                      <input
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        maxLength={15}
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value.replace(/[^\d]/g, ""))}
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
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
                  {sending ? <><span className="spinner" />Sending…</> : <>Send Enquiry <IconArrow size={18} /></>}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
