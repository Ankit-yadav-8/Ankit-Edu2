import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const f = e.target;
    if (f.password.value !== f.confirm.value) {
      setMsg({ type: "error", text: "Passwords don't match." });
      return;
    }
    setBusy(true);
    setMsg({ type: "", text: "" });
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.name.value,
          email: f.email.value,
          company: f.company.value,
          password: f.password.value,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sign up failed");
      login(data.token, data.user);
      setMsg({ type: "success", text: "Account created! Redirecting…" });
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      setMsg({ type: "error", text: err.message });
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-side">
        <span className="eyebrow" style={{ background: "rgba(255,255,255,.14)", color: "#fff", borderColor: "rgba(255,255,255,.25)" }}>🌿 Join RGPL</span>
        <h2>Create your account</h2>
        <p style={{ color: "rgba(255,255,255,.9)" }}>Join 3,000+ industrial units who trust RGPL as their techno-legal advisory partner.</p>
        <div className="pt"><span className="tick">✓</span><span>Save project details for faster proposals</span></div>
        <div className="pt"><span className="tick">✓</span><span>One dashboard for all your enquiries</span></div>
        <div className="pt"><span className="tick">✓</span><span>NABET · MoEFCC accredited partner</span></div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-card">
          <h1>Create account</h1>
          <p className="sub">It only takes a minute.</p>
          {msg.text && <div className={`form-msg ${msg.type}`}>{msg.text}</div>}
          <form onSubmit={onSubmit}>
            <div className="field"><label>Full Name</label><input name="name" required placeholder="Your name" /></div>
            <div className="field"><label>Company <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label><input name="company" placeholder="Company name" /></div>
            <div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@company.com" /></div>
            <div className="row-2">
              <div className="field"><label>Password</label><input name="password" type="password" required minLength={6} placeholder="Min 6 characters" /></div>
              <div className="field"><label>Confirm</label><input name="confirm" type="password" required placeholder="Repeat password" /></div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
          </form>
          <p className="auth-alt">Already have an account? <Link to="/login">Log in →</Link></p>
        </div>
      </div>
    </div>
  );
}
