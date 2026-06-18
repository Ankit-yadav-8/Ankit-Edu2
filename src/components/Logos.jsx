/* Brand marks rebuilt as inline SVG (no external image assets needed).
   Colours use the site's indigo/violet gradient — intentionally not green. */

export function RCLogo({ size = 46 }) {
  const id = "rcGrad";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="Rejig GreenLogic logo">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c66ff" />
          <stop offset="0.5" stopColor="#6c4ff0" />
          <stop offset="1" stopColor="#38a8ff" />
        </linearGradient>
      </defs>
      {/* crown */}
      <path
        d="M16 17l5 6 6-9 5 9 6-9 5 9 5-6-2 9H18l-2-9z"
        fill={`url(#${id})`}
        opacity="0.95"
      />
      {/* rounded badge */}
      <rect x="13" y="27" width="38" height="26" rx="9" fill={`url(#${id})`} />
      {/* RC monogram */}
      <text
        x="32" y="46"
        textAnchor="middle"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="17"
        fill="#fff"
        letterSpacing="0.5"
      >
        RC
      </text>
    </svg>
  );
}

export function NabetLogo({ size = 44 }) {
  const id = "nabetGrad";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-label="NABET accreditation">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6c4ff0" />
          <stop offset="1" stopColor="#38a8ff" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="#fff" stroke={`url(#${id})`} strokeWidth="3" />
      {/* open book */}
      <path
        d="M32 22c-4-3-9-3-13-2v20c4-1 9-1 13 2 4-3 9-3 13-2V20c-4-1-9-1-13 2z"
        fill={`url(#${id})`}
      />
      <path d="M32 22v22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
