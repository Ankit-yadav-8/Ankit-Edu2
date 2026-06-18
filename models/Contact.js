const mongoose = require("mongoose");

/**
 * Stores enquiries from the contact / "smart intake" form.
 * sector + projectType + location power the roadmap's "Smart Project Intake".
 */
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    subject: { type: String, trim: true, default: "" },
    sector: { type: String, trim: true, default: "" },
    location: { type: String, trim: true, default: "" },
    projectType: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    status: { type: String, enum: ["new", "reviewed", "closed"], default: "new" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
