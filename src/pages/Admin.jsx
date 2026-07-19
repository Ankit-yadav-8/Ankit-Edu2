import { useState, useEffect, useCallback } from "react";
import { warmBackend, postJSON, getJSON } from "../lib/api.js";

const TOKEN_KEY = "rgpl_admin_token";

function fmtDate(v) {
  if (!v) return "—";
  const d = new Date(v);
  return isNaN(d) ? "—" : d.toLocaleString();
}

export default function Admin() {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY) || "");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const [tab, setTab] = useState("contacts");
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    warmBackend();
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken("");
    setUsers([]);
    setContacts([]);
  }, []);

  const loadData = useCallback(
    async (tk) => {
      setLoading(true);
      setMsg({ type: "", text: "" });
      try {
        const [u, c] = await Promise.all([
          getJSON("/api/admin/users", { token: tk }),
          getJSON("/api/admin/contacts", { token: tk }),
        ]);
        if (u.status === 401 || c.status === 401) {
          signOut();
          setMsg({ type: "error", text: "Your admin session expired. Please log in again." });
          return;
        }
        if (!u.ok || !c.ok) throw new Error(u.data?.message || c.data?.message || "Could not load data.");
        setUsers(u.data.users || []);
        setContacts(c.data.contacts || []);
      } catch (err) {
        setMsg({ type: "error", text: err.message || "Could not load data." });
      } finally {
        setLoading(false);
      }
    },
    [signOut]
  );

  // Auto-load when we already have a token (e.g. page refresh).
  useEffect(() => {
    if (token) loadData(token);
  }, [token, loadData]);

  async function onLogin(e) {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setMsg({ type: "", text: "" });
    try {
      const { ok, data } = await postJSON("/api/admin/login", { password });
      if (!ok) throw new Error(data.message || "Login failed");
      localStorage.setItem(TOKEN_KEY, data.token);
      setPassword("");
      setToken(data.token);
    } catch (err) {
      const text =
        err.name === "AbortError"
          ? "The server took too long to respond. Please try again in a moment."
          : err.message;
      setMsg({ type: "error", text });
    } finally {
      setBusy(false);
    }
  }

  // ─── Login screen ───
  if (!token) {
    return (
      <div className="auth-wrap">
        <div className="auth-side">
          <span className="eyebrow" style={{ background: "rgba(255,255,255,.14)", color: "#fff", borderColor: "rgba(255,255,255,.25)" }}>🔒 Admin Panel</span>
          <h2>Restricted area</h2>
          <p style={{ color: "rgba(255,255,255,.9)" }}>Enter the admin password to view registered accounts and client enquiries.</p>
        </div>
        <div className="auth-form-wrap">
          <div className="auth-card">
            <h1>Admin login</h1>
            <p className="sub">This area is for RGPL staff only.</p>
            {msg.text ? <div className={`form-msg ${msg.type}`}>{msg.text}</div> : null}
            <form onSubmit={onLogin} noValidate>
              <div className="field">
                <label>Admin password</label>
                <div className="pw-field">
                  <input
                    name="admin-password"
                    type={showPw ? "text" : "password"}
                    required
                    autoComplete="off"
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
                {busy ? (<><span className="spinner" />Signing in…</>) : "Enter admin panel"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ─── Dashboard ───
  return (
    <div className="admin-wrap container">
      <div className="admin-head">
        <div>
          <h1>Admin Panel</h1>
          <p className="admin-sub">Live data from Supabase — {users.length} account{users.length === 1 ? "" : "s"}, {contacts.length} enquir{contacts.length === 1 ? "y" : "ies"}.</p>
        </div>
        <div className="admin-actions">
          <button className="btn btn-ghost" onClick={() => loadData(token)} disabled={loading}>
            {loading ? "Refreshing…" : "↻ Refresh"}
          </button>
          <button className="btn btn-outline" onClick={signOut}>Log out</button>
        </div>
      </div>

      {msg.text ? <div className={`form-msg ${msg.type}`}>{msg.text}</div> : null}

      <div className="admin-tabs">
        <button className={`admin-tab ${tab === "contacts" ? "active" : ""}`} onClick={() => setTab("contacts")}>
          Client enquiries ({contacts.length})
        </button>
        <button className={`admin-tab ${tab === "users" ? "active" : ""}`} onClick={() => setTab("users")}>
          User accounts ({users.length})
        </button>
      </div>

      {loading ? (
        <p className="admin-empty">Loading…</p>
      ) : tab === "contacts" ? (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Received</th><th>Name</th><th>Email</th><th>Phone</th><th>Subject</th>
                <th>Sector</th><th>Location</th><th>Project type</th><th>Message</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr><td colSpan={10} className="admin-empty">No enquiries yet.</td></tr>
              ) : contacts.map((c) => (
                <tr key={c.id}>
                  <td>{fmtDate(c.created_at)}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone || "—"}</td>
                  <td>{c.subject || "—"}</td>
                  <td>{c.sector || "—"}</td>
                  <td>{c.location || "—"}</td>
                  <td>{c.project_type || "—"}</td>
                  <td className="admin-msg">{c.message}</td>
                  <td><span className="admin-badge">{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="admin-table-scroll">
          <table className="admin-table">
            <thead>
              <tr><th>Joined</th><th>Name</th><th>Email</th><th>Company</th><th>Role</th></tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan={5} className="admin-empty">No accounts yet.</td></tr>
              ) : users.map((u) => (
                <tr key={u.id}>
                  <td>{fmtDate(u.created_at)}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.company || "—"}</td>
                  <td><span className={`admin-badge ${u.role === "admin" ? "admin-badge-hi" : ""}`}>{u.role}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
