const jwt = require("jsonwebtoken");

/**
 * Verifies the JWT sent as "Authorization: Bearer <token>".
 * Attaches { id, name, email } to req.user on success.
 */
module.exports = function protect(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Not authorized — please log in." });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Session expired — please log in again." });
  }
};
