import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { warmBackend, postJSON } from "../lib/api.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [slow, setSlow] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const slowTimer = useRef(null);

  // Wake the backend the moment this page opens.
  useEffect(() => {
    warmBackend();
    return () => clearTimeout(slowTimer.current);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (busy) return; // guard against double-submit
    setBusy(true);
    setSlow(false);
    setMsg({ type: "", text: "" });
    slowTimer.current = setTimeout(() => setSlow(true), 4000);

    try {
      const { ok, data } = await postJSON("/api/auth/login", {
        email: email.trim(),
        password,
      });
      if (!ok) throw new Error(data.message || "Login failed");
      login(data.token, data.user);
      setMsg({ type: "success", text: "Welcome back! Redirecting…" });
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

          {msg.text ? (
            <div className={`form-msg ${msg.type}`}>{msg.text}</div>
          ) : slow ? (
            <div className="form-msg info">⏳ Waking up the server… the first request after a quiet spell can take up to a minute. Hang tight!</div>
          ) : null}

          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <div className="pw-field">
                <input
                  name="password"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
                <button type="button" className="pw-toggle" onClick={() => setShowPw((s) => !s)} aria-label={showPw ? "Hide password" : "Show password"}>
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
              {busy ? (<><span className="spinner" />{slow ? "Waking server…" : "Signing in…"}</>) : "Log in"}
            </button>
          </form>
          <p className="auth-alt">Don't have an account? <Link to="/signup">Create one →</Link></p>
        </div>
      </div>
    </div>
  );
}
