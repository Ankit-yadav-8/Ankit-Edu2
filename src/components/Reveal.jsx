import { useEffect, useRef, useState } from "react";

/* Scroll-reveal wrapper. Adds the `in` class when the element enters view. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : "";
  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${shown ? "in" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
