// RGPL AI Integration approach — five agents across a three-phase rollout.
export const PHASES = [
  { id: "p1", name: "Phase 1", title: "Foundations · Months 1–3", desc: "Visitor Assistant live on the site and the internal Research Assistant piloted with the consulting team." },
  { id: "p2", name: "Phase 2", title: "Depth · Months 4–7", desc: "Smart Project Intake, Geospatial AI pilot and the research assistant rolled out team-wide." },
  { id: "p3", name: "Phase 3", title: "Scale · Months 8–12", desc: "Predictive CEQMS/AAQMS monitoring, ESG drafting workflow and a client project-status portal." },
];

export const AI_FEATURES = [
  {
    id: "visitor",
    icon: "💬",
    label: "Visitor Assistant",
    phase: "Phase 1",
    type: "Client-facing",
    agentType: "Conversation + RAG",
    summary:
      "A 24/7 chat widget on rgreenlogic.com that answers clearance and service questions, then routes qualified leads to the intake form.",
    tools: ["Website service pages", "NABET sector list", "FAQ knowledge base", "Conversation history"],
    architecture: [
      "Visitor message + page context + conversation history",
      "Grounded on RGPL service catalogue (inline / RAG)",
      "Claude generates a concise answer + lead-routing prompt",
      "“Request Proposal” → scrolls to the Smart Intake form",
    ],
  },
  {
    id: "intake",
    icon: "📋",
    label: "Smart Project Intake",
    phase: "Phase 2",
    type: "Lead Qualification",
    agentType: "Structured Output (JSON)",
    summary:
      "Replaces the blank contact form. Takes sector, state, type and capacity, then returns a structured preliminary clearance analysis rendered live for the prospect.",
    tools: ["EIA Notification 2006 Schedule", "Forest / CRZ boundary logic", "State-specific clearance rules"],
    architecture: [
      "4-field form: sector + type + state + capacity",
      "Claude returns JSON: clearances, EIA category, baseline studies, risks",
      "Rendered as clearance badges, category chip and a baseline checklist",
      "“Send to RGPL” → pre-filled brief to a consultant",
    ],
  },
  {
    id: "research",
    icon: "🔬",
    label: "Research Assistant",
    phase: "Phase 1–2",
    type: "Internal Tool",
    agentType: "Retrieval-Augmented Generation",
    summary:
      "An internal consultant tool trained on RGPL's own EIA/ESIA reports and Indian environmental law — cited answers in seconds instead of manual PDF searches.",
    tools: ["RGPL report archive", "EIA Notification + OMs", "MoEFCC guidelines", "CPCB / SPCB standards"],
    architecture: [
      "Consultant question + optional project context",
      "Embeddings retrieve the most relevant report & regulation chunks",
      "Claude answers with notification references cited",
      "Generates paste-ready draft EIA sections on request",
    ],
  },
  {
    id: "geospatial",
    icon: "🛰️",
    label: "Geospatial AI",
    phase: "Phase 2",
    type: "Field Work",
    agentType: "Tool-use + Report Drafting",
    summary:
      "AI-assisted LULC change detection layered onto the existing ArcGIS/Erdas workflow — generates paste-ready EIA baseline text from satellite analysis.",
    tools: ["Google Earth Engine", "Sentinel-2 / Landsat", "FSI forest-cover data", "ArcGIS REST API"],
    architecture: [
      "Satellite imagery pulled for the project boundary (two periods)",
      "Classifier produces a Land-Use / Land-Cover change matrix",
      "Claude interprets the matrix into EIA-compliant findings",
      "Consultant reviews, then text drops into the report template",
    ],
  },
  {
    id: "ceqms",
    icon: "📡",
    label: "CEQMS Predictive Monitor",
    phase: "Phase 3",
    type: "Product",
    agentType: "Time-series Anomaly + Forecast",
    summary:
      "Adds AI anomaly detection and breach forecasting to the CEQMS/AAQMS product line — turning a current-reading display into a predictive monitoring system.",
    tools: ["Sensor data stream", "Time-series database", "CPCB threshold tables", "SMS / email alerts"],
    architecture: [
      "Sensors stream readings every 15 minutes",
      "Current values + 24h trend + thresholds sent to Claude",
      "Anomaly detection + breach forecast returned as JSON",
      "Alerts routed by severity: dashboard → email → SMS → call",
    ],
  },
];
