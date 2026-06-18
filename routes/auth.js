const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/User");
const protect = require("../middleware/auth");

const router = express.Router();

function signToken(user) {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
}

const dbReady = () => mongoose.connection.readyState === 1;

// POST /api/auth/signup
router.post("/signup", async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not connected. Add MONGODB_URI to .env." });

  try {
    const { name, email, password, company } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "Name, email and password are required." });
    if (password.length < 6)
      return res.status(400).json({ message: "Password must be at least 6 characters." });

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) return res.status(409).json({ message: "An account with this email already exists." });

    const user = await User.create({ name, email, password, company });
    return res.status(201).json({
      token: signToken(user),
      user: { id: user._id, name: user.name, email: user.email, company: user.company },
    });
  } catch (err) {
    return res.status(500).json({ message: "Could not create account.", error: err.message });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  if (!dbReady())
    return res.status(503).json({ message: "Database not connected. Add MONGODB_URI to .env." });

  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password are required." });

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid email or password." });

    return res.json({
      token: signToken(user),
      user: { id: user._id, name: user.name, email: user.email, company: user.company },
    });
  } catch (err) {
    return res.status(500).json({ message: "Login failed.", error: err.message });
  }
});

// GET /api/auth/me  (protected)
router.get("/me", protect, (req, res) => res.json({ user: req.user }));

module.exports = router;
