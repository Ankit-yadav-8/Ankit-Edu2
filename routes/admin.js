const express = require("express");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { supabase, dbReady } = require("../config/supabase");
const protect = require("../middleware/auth");

const router = express.Router();

// Strict limiter on the admin password gate to slow brute-force attempts.
const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts. Please try again later." },
});

/**
 * Constant-time password compare. We hash both sides to a fixed-length digest
 * first so timingSafeEqual never throws on length mismatch and the comparison
 * can't leak the password length.
 */
function safeEqual(a, b) {
  const ha = crypto.createHash("sha256").update(String(a)).digest();
  const hb = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

// Gate that only lets admin-scoped tokens through.
function adminOnly(req, res, next) {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Admins only." });
  next();
}

// POST /api/admin/login  { password }
// The password lives ONLY in the ADMIN_PASSWORD server env var — it is never
// shipped to the browser. On success we mint a short-lived admin token.
router.post("/login", adminLoginLimiter, (req, res) => {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected)
    return res
      .status(503)
      .json({ message: "Admin panel is not configured on the server yet." });

  const password = String(req.body?.password || "");
  if (!password || !safeEqual(password, expected))
    return res.status(401).json({ message: "Invalid admin password." });

  const token = jwt.sign(
    { role: "admin", scope: "admin-panel" },
    process.env.JWT_SECRET,
    { expiresIn: "2h", algorithm: "HS256" }
  );
  return res.json({ token });
});

// GET /api/admin/users  — all website accounts (NEVER the password hashes)
router.get("/users", protect, adminOnly, async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not configured yet." });

  const { data, error } = await supabase
    .from("app_users")
    .select("id, name, email, company, role, created_at")
    .order("created_at", { ascending: false })
    .limit(1000);
  if (error) {
    console.error("admin users error:", error.message);
    return res.status(500).json({ message: "Could not load users." });
  }
  return res.json({ users: data });
});

// GET /api/admin/contacts  — all enquiries / client intake
router.get("/contacts", protect, adminOnly, async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not configured yet." });

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1000);
  if (error) {
    console.error("admin contacts error:", error.message);
    return res.status(500).json({ message: "Could not load enquiries." });
  }
  return res.json({ contacts: data });
});

module.exports = router;
