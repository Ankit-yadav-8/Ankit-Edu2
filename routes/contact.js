const express = require("express");
const rateLimit = require("express-rate-limit");
const { supabase, dbReady } = require("../config/supabase");
const protect = require("../middleware/auth");

const router = express.Router();

// Limit how often a single IP can submit the form (basic spam / abuse guard).
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many submissions. Please try again later." },
});

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// POST /api/contact — save an enquiry / smart intake (public)
router.post("/", contactLimiter, async (req, res) => {
  try {
    const name = clean(req.body?.name, 80);
    const email = clean(req.body?.email, 160).toLowerCase();
    const message = clean(req.body?.message, 4000);

    if (!name || !email || !message)
      return res.status(400).json({ message: "Name, email and message are required." });
    if (!EMAIL_RE.test(email))
      return res.status(400).json({ message: "Please enter a valid email." });

    const record = {
      name,
      email,
      message,
      phone: clean(req.body?.phone, 40),
      subject: clean(req.body?.subject, 160),
      sector: clean(req.body?.sector, 120),
      location: clean(req.body?.location, 120),
      project_type: clean(req.body?.projectType, 120),
      status: "new",
    };

    if (!dbReady()) {
      // Don't lose the lead just because the DB isn't wired yet — log it.
      console.log("📩 Enquiry (DB offline):", record);
      return res.status(202).json({ message: "Thanks! Your enquiry was received." });
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert(record)
      .select("id")
      .single();
    if (error) throw error;

    return res
      .status(201)
      .json({ message: "Thank you! Our team will get back to you shortly.", id: data.id });
  } catch (err) {
    console.error("contact error:", err.message);
    return res.status(500).json({ message: "Could not submit enquiry." });
  }
});

// GET /api/contact — list enquiries (admins only)
router.get("/", protect, async (req, res) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Admins only." });
  if (!dbReady())
    return res.status(503).json({ message: "Database not configured yet." });

  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) {
    console.error("contact list error:", error.message);
    return res.status(500).json({ message: "Could not load enquiries." });
  }
  return res.json({ contacts: data });
});

module.exports = router;
