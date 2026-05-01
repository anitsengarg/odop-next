"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  value,
  duration = 1800,
}: {
  value: string; // "1,000+"
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const suffix = value.replace(/[0-9,]/g, "");
    const target = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (isNaN(target)) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const startTime = performance.now();

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(eased * target);
            setDisplay(current.toLocaleString("en-IN") + suffix);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setDisplay(value);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}