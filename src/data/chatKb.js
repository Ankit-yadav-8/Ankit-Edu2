/* Client-side knowledge-base answerer. Mirrors the server's /api/chat
   fallback so the assistant still works on the static (GitHub Pages) build
   where no backend is available. */
export function localAnswer(message) {
  const q = (message || "").toLowerCase();
  const has = (...w) => w.some((x) => q.includes(x));

  if (has("hi", "hello", "hey") && q.length < 12)
    return "Hello! 👋 I'm RGPL's assistant. Ask me about our services, NABET sectors, accreditations, the CEQMS air/effluent monitoring products, or how to get a proposal.";
  if (has("nabet", "accredit", "moefcc", "nsic", "certif"))
    return "RGPL holds NABET accreditation across 20 sectors, MoEFCC empanelment, and NSIC registration — so our EIA/ESIA studies are recognised by Indian regulators.";
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
