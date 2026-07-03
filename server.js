require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// ─── API routes ───
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/chat", require("./routes/chat"));
app.get("/api/health", (_req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// ─── Static frontend (built React SPA in /dist) ───
if (process.env.NODE_ENV === 'production' && process.env.SERVE_FRONTEND === 'true') {
  const DIST = path.join(__dirname, "dist");
  app.use(express.static(DIST));

  // SPA fallback: let React Router handle all non-API routes.
  app.get('*', (req, res) => {
    res.sendFile(path.join(DIST, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
connectDB().finally(() => {
  app.listen(PORT, () => {
    console.log(`\n🌿 RGPL website running →  http://localhost:${PORT}\n`);
  });
});
