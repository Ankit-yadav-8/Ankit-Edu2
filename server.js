require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { dbReady } = require("./config/supabase");

const app = express();

// ─── Security hardening ───
app.disable("x-powered-by");
app.set("trust proxy", 1); // Render sits behind a proxy — needed for correct rate-limit IPs
app.use(helmet());

// Lock CORS down to your known frontends. Set ALLOWED_ORIGINS in .env as a
// comma-separated list, e.g. "https://ankit-yadav-8.github.io,http://localhost:5173".
// If unset, we fall back to reflecting the origin (fine for local dev only).
const allowed = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
app.use(
  cors({
    origin: allowed.length ? allowed : true,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

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
