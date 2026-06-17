import { useEffect, useState } from "react";

/** Auto-rotating testimonial carousel with clickable dots. */
export function Carousel({ slides, dotLabel }: { slides: string[]; dotLabel: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((n) => (n + 1) % slides.length), 5200);
    return () => clearInterval(id);
  }, [slides.length, active]); // resetting on `active` mirrors the manual-click timer reset

  return (
    <>
      <div className="carousel reveal" data-d="1">
        {slides.map((s, i) => (
          <blockquote className={`tslide${i === active ? " on" : ""}`} key={i}>
            {s}
          </blockquote>
        ))}
      </div>
      <div className="cdots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`cdot${i === active ? " on" : ""}`}
            aria-label={`${dotLabel} ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}
