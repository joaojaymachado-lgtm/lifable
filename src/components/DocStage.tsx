import { useEffect, useRef } from "react";

const SCATTER = [
  { x: -120, y: -40, r: -14 },
  { x: 120, y: -70, r: 11 },
  { x: -70, y: 90, r: -7 },
  { x: 90, y: 60, r: 9 },
];

const DOCS = [
  ["s", "s2", "s3"],
  ["s", "s3", "s2"],
  ["s2", "s", "s3"],
  ["s", "s2", "s"],
];

/** The 10-page review that scatters then stacks as it scrolls into view. */
export function DocStage({ tag }: { tag: string }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const docs = [...el.querySelectorAll<HTMLElement>(".doc")];
    const place = () => {
      const r = el.getBoundingClientRect();
      let p = 1 - r.top / (innerHeight * 0.8);
      p = Math.max(0, Math.min(1, p));
      docs.forEach((d, i) => {
        const s = SCATTER[i];
        const x = s.x * (1 - p),
          y = s.y * (1 - p) + (i - 1.5) * 4 * p,
          rot = s.r * (1 - p) + (i - 1.5) * 1.5 * p;
        d.style.transform = `translate(${x}px,${y}px) rotate(${rot}deg) translateZ(${i * 8}px)`;
        d.style.opacity = String(0.5 + p * 0.5);
        d.style.zIndex = String(i);
      });
    };
    addEventListener("scroll", place, { passive: true });
    addEventListener("resize", place);
    place();
    return () => {
      removeEventListener("scroll", place);
      removeEventListener("resize", place);
    };
  }, []);

  return (
    <div className="doc-stage reveal" data-d="1" ref={stage}>
      {DOCS.map((bars, i) => (
        <div className="doc" key={i}>
          <div className="bar t" />
          {bars.map((b, j) => (
            <div className={`bar ${b}`} key={j} />
          ))}
          <span className="chip" />
          {i !== 2 && <span className="chip" />}
        </div>
      ))}
      <div className="doc-tag">{tag}</div>
    </div>
  );
}
