import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const [msg, setMsg] = useState({ type: "", text: "" });
  const [busy, setBusy] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setMsg({ type: "", text: "" });
    const f = e.target;
    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: f.email.value, password: f.password.value }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");
      login(data.token, data.user);
      setMsg({ type: "success", text: "Welcome back! Redirecting…" });
      setTimeout(() => navigate("/"), 700);
    } catch (err) {
      setMsg({ type: "error", text: err.message });
      setBusy(false);
    }
  }

  return (
    <div className="auth-wrap">
      <div className="auth-side">
        <span className="eyebrow" style={{ background: "rgba(255,255,255,.14)", color: "#fff", borderColor: "rgba(255,255,255,.25)" }}>🌿 Client Portal</span>
        <h2>Welcome back to RGPL</h2>
        <p style={{ color: "rgba(255,255,255,.9)" }}>Access your enquiries, proposals and — coming soon — live project milestone status.</p>
        <div className="pt"><span className="tick">✓</span><span>Track your active assessments & clearances</span></div>
        <div className="pt"><span className="tick">✓</span><span>Faster proposals with saved project details</span></div>
        <div className="pt"><span className="tick">✓</span><span>Priority access to our AI assistant</span></div>
      </div>

      <div className="auth-form-wrap">
        <div className="auth-card">
          <h1>Log in</h1>
          <p className="sub">Enter your credentials to continue.</p>
          {msg.text && <div className={`form-msg ${msg.type}`}>{msg.text}</div>}
          <form onSubmit={onSubmit}>
            <div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@company.com" /></div>
            <div className="field"><label>Password</label><input name="password" type="password" required placeholder="••••••••" /></div>
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>{busy ? "Signing in…" : "Log in"}</button>
          </form>
          <p className="auth-alt">Don't have an account? <Link to="/signup">Create one →</Link></p>
        </div>
      </div>
    </div>
  );
}
