const express = require("express");
const mongoose = require("mongoose");
const Contact = require("../models/Contact");

const router = express.Router();
const dbReady = () => mongoose.connection.readyState === 1;

// POST /api/contact  — save an enquiry / smart intake
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: "Name, email and message are required." });

    if (!dbReady()) {
      // Don't lose the lead just because the DB isn't wired yet — log it.
      console.log("📩 Enquiry (DB offline):", req.body);
      return res.status(202).json({
        message: "Thanks! Your enquiry was received. (Connect MongoDB to store it permanently.)",
      });
    }

    const doc = await Contact.create(req.body);
    return res.status(201).json({ message: "Thank you! Our team will get back to you shortly.", id: doc._id });
  } catch (err) {
    return res.status(500).json({ message: "Could not submit enquiry.", error: err.message });
  }
});

module.exports = router;
