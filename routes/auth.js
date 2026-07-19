const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const rateLimit = require("express-rate-limit");
const { supabase, dbReady } = require("../config/supabase");
const protect = require("../middleware/auth");

const router = express.Router();

// Stricter limiter on auth endpoints to slow brute-force / credential stuffing.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts. Please try again in a few minutes." },
});

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const BCRYPT_COST = 12;
// A throwaway hash of a random value, used to burn ~constant time on logins for
// non-existent emails so an attacker can't tell registered emails apart by timing.
const DUMMY_HASH = bcrypt.hashSync("timing-safe-placeholder", BCRYPT_COST);

function signToken(user) {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d", algorithm: "HS256" }
  );
}

// Never leak password_hash to the client.
function publicUser(u) {
  return { id: u.id, name: u.name, email: u.email, company: u.company, role: u.role };
}

// POST /api/auth/signup
router.post("/signup", authLimiter, async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not configured yet." });

  try {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim().toLowerCase();
    const company = String(req.body?.company || "").trim();
    const password = String(req.body?.password || "");

    if (!name || !email || !password)
      return res.status(400).json({ message: "Name, email and password are required." });
    if (!EMAIL_RE.test(email))
      return res.status(400).json({ message: "Please enter a valid email." });
    if (password.length < 8)
      return res.status(400).json({ message: "Password must be at least 8 characters." });
    if (password.length > 200)
      return res.status(400).json({ message: "Password is too long." });
    if (name.length > 80 || company.length > 120)
      return res.status(400).json({ message: "Name or company is too long." });

    const { data: existing, error: exErr } = await supabase
      .from("app_users")
      .select("id")
      .eq("email", email)
      .maybeSingle();
    if (exErr) throw exErr;
    if (existing)
      return res.status(409).json({ message: "An account with this email already exists." });

    const password_hash = await bcrypt.hash(password, BCRYPT_COST);

    const { data: user, error } = await supabase
      .from("app_users")
      .insert({ name, email, company, password_hash, role: "user" })
      .select("id, name, email, company, role")
      .single();
    if (error) throw error;

    return res.status(201).json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error("signup error:", err.message);
    return res.status(500).json({ message: "Could not create account." });
  }
});

// POST /api/auth/login
router.post("/login", authLimiter, async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not configured yet." });

  try {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required." });

    const { data: user, error } = await supabase
      .from("app_users")
      .select("id, name, email, company, role, password_hash")
      .eq("email", email)
      .maybeSingle();
    if (error) throw error;

    // Always run a bcrypt compare — against the real hash if the user exists,
    // otherwise against a dummy hash — so response time (and the generic error)
    // never reveals which emails are registered.
    const hash = user ? user.password_hash : DUMMY_HASH;
    const passwordMatches = await bcrypt.compare(password, hash);
    const ok = Boolean(user) && passwordMatches;
    if (!ok) return res.status(401).json({ message: "Invalid email or password." });

    return res.json({ token: signToken(user), user: publicUser(user) });
  } catch (err) {
    console.error("login error:", err.message);
    return res.status(500).json({ message: "Login failed." });
  }
});

// GET /api/auth/me  (protected) — echoes the verified token payload
router.get("/me", protect, (req, res) => res.json({ user: req.user }));

module.exports = router;
