# 🌿 Rejig GreenLogic Private Limited — Website (React + AI)

A modern, responsive **React (Vite)** rebuild of **rgreenlogic.com**. Light, airy UI with a
stylish indigo/violet/sky palette, animated scroll reveals, a sticky glass navbar (RC brand
on the left, NABET accreditation mark on the right), live search & filter, login/signup, a
smart contact intake, and a floating **AI Visitor Assistant**.

- **Frontend:** React 18 + React Router + Vite
- **Backend:** Node.js + Express + MongoDB Atlas (auth, contact storage, AI chat)

---

## ✨ What's included

| Area | Feature |
|------|---------|
| **Navbar** | Sticky blur-glass, RC logo (left) + NABET logo (right), active-route highlight, mobile menu, live login/logout state |
| **Home** | Hero, credibility strip, animated stat counters, services, AI section, vision/mission, working force, clientele, CTA |
| **About** | Story, operations philosophy, team composition, accreditations (NABET · MoEFCC · NSIC) |
| **Services** | 30+ services with **live search + category filter** |
| **Products** | CEQMS & Air-Quality monitoring + the 5-point **AI roadmap** & phased rollout |
| **Contact** | **Smart Project Intake** form → saved to MongoDB |
| **Auth** | Sign up & log in (JWT + bcrypt), React context for session state |
| **AI Assistant** | Floating chat widget — Claude-powered if a key is set, knowledge-base fallback otherwise |

---

## 🚀 Run it locally

### 1. Install dependencies
```bash
npm install
```

### 2. Create your `.env`
```bash
cp .env.example .env      # PowerShell: copy .env.example .env
```
Add your `MONGODB_URI` (MongoDB Atlas) and, optionally, `ANTHROPIC_API_KEY` for the live AI assistant.
The site runs without either — only auth and saved enquiries need the database.

### 3. Development (two processes)
```bash
npm run dev:full          # runs Vite (web) + Express API together
# or run them separately:
npm run dev               # Vite dev server  → http://localhost:5173  (proxies /api → :5000)
npm run server:dev        # Express API      → http://localhost:5000
```

### 4. Production
```bash
npm run build             # builds the React SPA into /dist
npm start                 # Express serves /dist + the API on http://localhost:5000
```

---

## 🗂️ Project structure
```
rgreenlogic-website/
├── index.html             # Vite entry
├── vite.config.mjs        # Vite + React, /api dev proxy
├── server.js              # Express (API + serves built SPA from /dist)
├── config/db.js           # MongoDB Atlas connection
├── models/                # User & Contact schemas (Mongoose)
├── routes/                # auth · contact · chat (AI assistant)
├── middleware/auth.js     # JWT protection
└── src/                   # React frontend
    ├── main.jsx · App.jsx
    ├── context/AuthContext.jsx
    ├── components/         # Navbar · Footer · ChatWidget · Logos · Icons · Reveal · Counter
    ├── pages/             # Home · About · Services · Products · Contact · Login · Signup · NotFound
    ├── data/services.js
    └── styles/index.css   # Full design system
```

## 🔌 API endpoints
| Method | Route | Purpose |
|--------|-------|---------|
| `POST` | `/api/auth/signup` | Create account |
| `POST` | `/api/auth/login` | Log in (returns JWT) |
| `GET`  | `/api/auth/me` | Current user (JWT required) |
| `POST` | `/api/contact` | Submit enquiry / smart intake |
| `POST` | `/api/chat` | AI visitor assistant |
| `GET`  | `/api/health` | Health check |

## 🎨 Design notes
- **Light theme, no green** — UI uses an indigo → violet → sky gradient on white/soft-lavender backgrounds.
- Fonts: **Sora** (display) + **Plus Jakarta Sans** (body).
- Animations respect scroll position via IntersectionObserver and honour `prefers-reduced-motion`.

---
© Rejig GreenLogic Private Limited. Built as part of the Website Upgrade & AI Roadmap.
