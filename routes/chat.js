const express = require("express");
const rateLimit = require("express-rate-limit");
const router = express.Router();

// Keep the assistant from being hammered.
const chatLimiter = rateLimit({ windowMs: 60 * 1000, max: 20 });

/**
 * Knowledge base — the facts the assistant answers from. Kept in code so the
 * widget works with zero external dependencies (the roadmap's "off-the-shelf"
 * fallback). If ANTHROPIC_API_KEY is set, the same facts are passed to Claude
 * as grounding context for richer answers.
 */
const KB = `
Rejig GreenLogic Private Limited (RGPL) is an environmental consultancy and techno-legal
advisory firm incorporated on 15 December 2021, headquartered in Hyderabad, Telangana, India.
RGPL has delivered environmental solutions to 3,000+ specialised industrial units across India
and abroad, covering 50+ sectoral areas.

ACCREDITATIONS: QCI-NABET Category-A accreditation across 11 sectors; MoEFCC (Ministry of Environment, Forest
& Climate Change) empanelment; NSIC (National Small Scale Industrial Corporation) registration.

CORE SERVICES: Techno-Legal Advisory; Environmental Impact Assessment (EIA); Environment & Social
Impact Assessment (ESIA, IFC & ADB guidelines); Environmental Monitoring; Environmental Compliance
Auditing; Environmental Due Diligence; Environmental Permitting; Social Impact Assessment (SIA);
Chemical/Industrial Risk Assessment; Biodiversity Impact Assessment (BIA); Ecology & Biodiversity
Study / Tree Enumeration; Sustainability & ESDD studies; Corporate EHS; ESG Management Systems;
Trainings; Climate Change Risk Assessment (CCRA); Coastal Regulatory Zone (CRZ) Clearance; Marine
Environment Monitoring; Hydrodynamic Study; Forest & Wildlife Clearances; Wildlife Conservation /
Mangrove Management Plans; Green/Waste/Environment Audits; LDAR studies; Indoor Air Quality testing;
IGBC/LEED green-building documentation; Mining Plan Preparation & DGPS Surveys; Disaster Management
Plan; Geological Consulting; Remote Sensing & GIS; Online Monitoring Systems; Land Use/Land Cover
mapping by satellite imagery; Odour monitoring.

PRODUCTS: CEQMS (Continuous Effluent Quality Monitoring System) and a Mobile Sensor-Based Air
Quality Monitoring System (AAQMS) — built and sold under the RGPL name.

CONTACT: Email rgpl@rgreenlogic.com, phone +91 8949472643. Registered & Corporate office: 7th Floor, Block C,
Laxmi Cyber City, White Fields, Hitech City, Kondapur, Hyderabad - 500081.
`;

// Lightweight intent matcher for the no-API-key fallback.
function localAnswer(message) {
  const q = (message || "").toLowerCase();
  const has = (...w) => w.some((x) => q.includes(x));

  if (has("hi", "hello", "hey") && q.length < 12)
    return "Hello! 👋 I'm RGPL's assistant. Ask me about our services, NABET sectors, accreditations, the CEQMS air/effluent monitoring products, or how to get a proposal.";
  if (has("nabet", "accredit", "moefcc", "nsic", "certif"))
    return "RGPL holds QCI-NABET Category-A accreditation across 11 sectors, MoEFCC empanelment, and NSIC registration — so our EIA/ESIA studies are recognised by Indian regulators.";
  if (has("eia", "esia", "environmental impact", "social impact"))
    return "We carry out full EIA and ESIA studies (aligned to IFC & ADB guidelines), including baseline monitoring, compliance auditing and permitting. Want me to route you to our enquiry form?";
  if (has("ceqms", "effluent", "air quality", "aaqms", "sensor", "monitoring product"))
    return "RGPL builds two monitoring products: CEQMS (Continuous Effluent Quality Monitoring System) and a Mobile Sensor-Based Air Quality Monitoring System — both designed for real-time compliance reporting.";
  if (has("forest", "wildlife", "biodiversity", "crz", "coastal"))
    return "Yes — we handle Forest & Wildlife clearances, Biodiversity Impact Assessments, and Coastal Regulatory Zone (CRZ) clearances. Tell me your sector and state and I can point you the right way.";
  if (has("mining", "dgps", "gis", "remote sensing", "satellite", "land use"))
    return "We do Mining Plan preparation, DGPS surveys, Remote Sensing & GIS, and satellite-based Land Use/Land Cover mapping. AI-assisted change detection is part of our roadmap.";
  if (has("contact", "email", "phone", "call", "reach", "address", "office"))
    return "📧 rgpl@rgreenlogic.com  ·  📞 +91 8949472643. Registered & Corporate office: 7th Floor, Block C, Laxmi Cyber City, White Fields, Hitech City, Kondapur, Hyderabad - 500081. Or use our Contact page to request a proposal.";
  if (has("quote", "proposal", "price", "cost", "hire", "start project"))
    return "Great — head to the Contact page and choose your sector, location and project type. Our smart intake gives the team a structured brief so you get an accurate proposal faster.";
  if (has("service", "what do you do", "offer", "help with"))
    return "We cover EIA/ESIA, environmental monitoring & auditing, biodiversity & forest/wildlife clearances, CRZ, mining plans, GIS/remote sensing, ESG & climate-risk consulting, and our CEQMS/air-quality products. Which area interests you?";

  return "I can help with RGPL's services, NABET/MoEFCC accreditations, the CEQMS & air-quality products, or getting a proposal. Could you tell me your sector or what you're looking for? You can also reach us at rgpl@rgreenlogic.com.";
}

async function claudeAnswer(message, history) {
  const messages = [
    ...(Array.isArray(history) ? history.slice(-6) : []),
    { role: "user", content: message },
  ];

  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-opus-4-8",
      max_tokens: 400,
      system:
        "You are the friendly visitor assistant for Rejig GreenLogic Private Limited (RGPL). " +
        "Answer ONLY from the knowledge base below. Be concise (2-4 sentences), warm and professional. " +
        "If asked something outside it, say you'll connect them with the team at rgpl@rgreenlogic.com. " +
        "Never invent prices or commitments.\n\nKNOWLEDGE BASE:\n" +
        KB,
      messages,
    }),
  });

  if (!resp.ok) throw new Error("Anthropic API " + resp.status);
  const data = await resp.json();
  return data.content?.[0]?.text?.trim() || localAnswer(message);
}

// POST /api/chat  { message, history? }
router.post("/", chatLimiter, async (req, res) => {
  const { message, history } = req.body || {};
  if (!message || !message.trim())
    return res.status(400).json({ reply: "Please type a question and I'll help. 😊" });

  try {
    if (process.env.ANTHROPIC_API_KEY) {
      const reply = await claudeAnswer(message, history);
      return res.json({ reply, source: "ai" });
    }
  } catch (err) {
    console.warn("AI fallback (", err.message, ")");
  }
  return res.json({ reply: localAnswer(message), source: "kb" });
});

module.exports = router;
