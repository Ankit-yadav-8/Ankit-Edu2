import { useState } from "react";

/* Image that degrades gracefully: if the source fails to load (e.g. an
   external Unsplash URL is blocked), it hides itself so the parent's
   gradient/placeholder shows instead of a broken-image icon. */
export default function SmartImg({ src, alt = "", className = "", ...rest }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setOk(false)}
      {...rest}
    />
  );
}
