import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { warmBackend, postJSON } from "../lib/api.js";

export default function Signup() {
  const [form, setForm] = useState({ name: "", company: "", email: "", password: "", confirm: "" });
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [slow, setSlow] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const slowTimer = useRef(null);

  useEffect(() => {
    warmBackend();
    return () => clearTimeout(slowTimer.current);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (busy) return;

    // Client-side checks first — instant feedback, no server round-trip.
    if (form.password.length < 6) {
      setMsg({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }
    if (form.password !== form.confirm) {
      setMsg({ type: "error", text: "Passwords don't match." });
      return;
    }

    setBusy(true);
    setSlow(false);
    setMsg({ type: "", text: "" });
    slowTimer.current = setTimeout(() => setSlow(true), 4000);

    try {
      const { ok, data } = await postJSON("/api/auth/signup", {
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        password: form.password,
      });
      if (!ok) throw new Error(data.message || "Sign up failed");
      login(data.token, data.user);
      setMsg({ type: "success", text: "Account created! Redirecting…" });
      setTimeout(() => navigate("/"), 500);
    } catch (err) {
      const text =
        err.name === "AbortError"
          ? "The server took too long to respond. Please try again in a moment."
          : err.message;
      setMsg({ type: "error", text });
      setBusy(false);
    } finally {
      clearTimeout(slowTimer.current);
      setSlow(false);
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

          {msg.text ? (
            <div className={`form-msg ${msg.type}`}>{msg.text}</div>
          ) : slow ? (
            <div className="form-msg info">⏳ Waking up the server… the first request after a quiet spell can take up to a minute. Hang tight!</div>
          ) : null}

          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label>Full Name</label>
              <input name="name" required autoComplete="name" value={form.name} onChange={set("name")} placeholder="Your name" />
            </div>
            <div className="field">
              <label>Company <span style={{ color: "var(--muted)", fontWeight: 400 }}>(optional)</span></label>
              <input name="company" autoComplete="organization" value={form.company} onChange={set("company")} placeholder="Company name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input name="email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} placeholder="you@company.com" />
            </div>
            <div className="row-2">
              <div className="field">
                <label>Password</label>
                <div className="pw-field">
                  <input
                    name="password"
                    type={showPw ? "text" : "password"}
                    required
                    minLength={6}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={set("password")}
                    placeholder="Min 6 characters"
                  />
                  <button type="button" className="pw-toggle" onClick={() => setShowPw((s) => !s)} aria-label={showPw ? "Hide password" : "Show password"}>
                    {showPw ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="field">
                <label>Confirm</label>
                <input
                  name="confirm"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  value={form.confirm}
                  onChange={set("confirm")}
                  placeholder="Repeat password"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
              {busy ? (<><span className="spinner" />{slow ? "Waking server…" : "Creating account…"}</>) : "Create account"}
            </button>
          </form>
          <p className="auth-alt">Already have an account? <Link to="/login">Log in →</Link></p>
        </div>
      </div>
    </div>
  );
}
