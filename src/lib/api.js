// Small API helper shared by the auth pages.
export const API_URL = import.meta.env.VITE_API_URL || "";

/**
 * Ping the backend so Render's free-tier instance wakes up BEFORE the user
 * submits a form. Called once on app load and on the auth pages, so the server
 * is usually already awake by the time someone logs in / signs up.
 * Fire-and-forget — failures are ignored on purpose.
 */
let warmed = false;
export function warmBackend() {
  if (warmed) return;
  warmed = true;
  try {
    fetch(`${API_URL}/api/health`, { method: "GET", mode: "cors" }).catch(() => {});
  } catch {
    /* ignore */
  }
}

/**
 * POST JSON with a timeout so a cold/asleep server can't hang the UI forever.
 * Returns { ok, status, data }. Throws AbortError on timeout.
 */
export async function postJSON(path, body, { timeoutMs = 65000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    let data = {};
    try {
      data = await res.json();
    } catch {
      /* response had no JSON body */
    }
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * GET JSON with an optional Bearer token (used by the admin panel).
 * Returns { ok, status, data }.
 */
export async function getJSON(path, { token, timeoutMs = 65000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "GET",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      signal: ctrl.signal,
    });
    let data = {};
    try {
      data = await res.json();
    } catch {
      /* response had no JSON body */
    }
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}
