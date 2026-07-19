require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { dbReady } = require("./config/supabase");

// ─── Fail fast on a missing/weak signing secret ───
// A short or absent JWT_SECRET lets anyone forge login tokens, so refuse to
// boot in production without a strong one.
if (process.env.NODE_ENV === "production") {
  const secret = process.env.JWT_SECRET || "";
  if (secret.length < 32) {
    console.error(
      "\n❌ JWT_SECRET is missing or too short (need ≥32 chars). Refusing to start.\n"
    );
    process.exit(1);
  }
}

const app = express();

// ─── Security hardening ───
app.disable("x-powered-by");
app.set("trust proxy", 1); // Render sits behind a proxy — needed for correct rate-limit IPs
app.use(
  helmet({
    // This service is a JSON API (the SPA is served by Vercel), so a tight
    // default CSP is fine and costs nothing.
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'none'"],
      },
    },
    hsts: { maxAge: 63072000, includeSubDomains: true, preload: true },
    referrerPolicy: { policy: "no-referrer" },
    crossOriginResourcePolicy: { policy: "same-site" },
  })
);

// Lock CORS down to your known frontends. Set ALLOWED_ORIGINS in .env as a
// comma-separated list, e.g. "https://rgreenlogic.com,http://localhost:5173".
const allowed = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const corsOptions = {
  origin(origin, cb) {
    // Allow same-origin / server-to-server / curl (no Origin header) and any
    // explicitly allow-listed frontend. Everything else is rejected.
    if (!origin) return cb(null, true);
    if (allowed.length === 0) return cb(null, true); // local dev: nothing configured
    if (allowed.includes(origin)) return cb(null, true);
    return cb(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  maxAge: 86400,
};
app.use(cors(corsOptions));

// ─── Global rate limit (belt-and-braces on top of per-route limiters) ───
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests. Please slow down." },
  })
);

// Small bodies only — nothing here needs more than a few KB.
app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: false, limit: "16kb" }));

// ─── API routes ───
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/chat", require("./routes/chat"));
app.get("/api/health", (_req, res) =>
  res.json({ ok: true, db: dbReady(), time: new Date().toISOString() })
);

// ─── Static frontend (optional — normally served by GitHub Pages) ───
if (process.env.NODE_ENV === "production" && process.env.SERVE_FRONTEND === "true") {
  const DIST = path.join(__dirname, "dist");
  app.use(express.static(DIST));
  app.get("*", (req, res) => res.sendFile(path.join(DIST, "index.html")));
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `\n🌿 RGPL API running →  http://localhost:${PORT}  (database: ${
      dbReady() ? "connected" : "OFF — check .env"
    })\n`
  );
});
