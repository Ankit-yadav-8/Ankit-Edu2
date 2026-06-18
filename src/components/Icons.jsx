/* Inline SVG icon set (stroke-based, currentColor). Keeps the bundle
   dependency-free and lets CSS colour each icon. */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const S = ({ size = 24, children, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...p}>
    {children}
  </svg>
);

export const IconDoc = (p) => (
  <S {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M9 13h6M9 17h4" /></S>
);
export const IconLeaf = (p) => (
  <S {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></S>
);
export const IconEye = (p) => (
  <S {...p}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></S>
);
export const IconShield = (p) => (
  <S {...p}><path d="m12 2 7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6Z" /><path d="m9 12 2 2 4-4" /></S>
);
export const IconChart = (p) => (
  <S {...p}><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></S>
);
export const IconGlobe = (p) => (
  <S {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" /></S>
);
export const IconCheck = (p) => (
  <S {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></S>
);
export const IconActivity = (p) => (
  <S {...p}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></S>
);
export const IconMail = (p) => (
  <S {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></S>
);
export const IconPhone = (p) => (
  <S {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" /></S>
);
export const IconPin = (p) => (
  <S {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></S>
);
export const IconBuilding = (p) => (
  <S {...p}><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /></S>
);
export const IconSearch = (p) => (
  <S {...p}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></S>
);
export const IconSend = (p) => (
  <S {...p}><path d="m22 2-7 20-4-9-9-4 20-7Z" /></S>
);
export const IconChat = (p) => (
  <S {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></S>
);
export const IconArrow = (p) => (
  <S {...p}><path d="M5 12h14M12 5l7 7-7 7" /></S>
);
export const IconUsers = (p) => (
  <S {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></S>
);
export const IconBeaker = (p) => (
  <S {...p}><path d="M7 2h10M7 2v6l-3 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-3-9V2" /><path d="M5.5 14h13" /></S>
);
export const IconStar = (p) => (
  <S {...p}><path d="m12 2 3 7 7 .5-5.3 4.6L18 21l-6-3.8L6 21l1.3-6.9L2 9.5 9 9z" /></S>
);

/* Social (filled) */
export const Insta = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...base}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const FB = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.6.1 15.6 0 14.5 0 12 0 10.3 1.5 10.3 4.2V6H7.5v3h2.8v9H14V9Z" /></svg>
);
export const LI = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.65 4.75 6.1V21H17.5v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21H9V9Z" /></svg>
);
export const XTw = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1 2h7l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.5 4H5.5l11 16Z" /></svg>
);
export const YT = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.4 12 31 31 0 0 0 23 7.5ZM9.8 15.3V8.7l5.7 3.3-5.7 3.3Z" /></svg>
);
