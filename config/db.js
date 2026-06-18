const mongoose = require("mongoose");

/**
 * Connects to MongoDB Atlas using the MONGODB_URI in your .env file.
 * The app keeps running even if the DB is unreachable, so the static
 * site still loads — only the DB-backed features (auth, contact) need it.
 */
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.includes("<username>")) {
    console.warn(
      "\n⚠️  MONGODB_URI is not set (or still has placeholders) in .env.\n" +
        "    Auth & contact storage are disabled until you add a real Atlas URI.\n"
    );
    return false;
  }

  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log("✅ Connected to MongoDB Atlas");
    return true;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    return false;
  }
}

module.exports = connectDB;
