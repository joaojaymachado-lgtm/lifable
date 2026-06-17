import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "./SearchIcon";

/** Hero search bar: types the real 1am questions, then erases them.
 *  Each completed question drifts inward as a faint fragment. */
export function HeroSearch({ label, questions }: { label: string; questions: string[] }) {
  const [text, setText] = useState("");
  const fragBox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let qi = 0,
      ci = 0,
      deleting = false,
      timer = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const spawnFragment = (txt: string) => {
      if (reduce || !fragBox.current) return;
      const s = document.createElement("span");
      s.textContent = "“" + txt + "”";
      const fromTop = Math.random() < 0.5;
      const left = 10 + Math.random() * 70;
      s.style.left = left + "%";
      s.style.top = fromTop ? "-6%" : "104%";
      fragBox.current.appendChild(s);
      s.animate(
        [
          { opacity: 0, transform: "translate(0,0) scale(.9)" },
          { opacity: 0.18, offset: 0.3 },
          { opacity: 0, transform: `translate(${(50 - left) * 0.6}px, ${fromTop ? 60 : -60}px) scale(1)` },
        ],
        { duration: 4200, easing: "cubic-bezier(.16,1,.3,1)" }
      ).onfinish = () => s.remove();
    };

    const tw = () => {
      const q = questions[qi];
      setText(deleting ? q.slice(0, ci--) : q.slice(0, ci++));
      if (!deleting && ci > q.length) {
        deleting = true;
        timer = window.setTimeout(tw, 1900);
        return;
      }
      if (deleting && ci < 0) {
        deleting = false;
        ci = 0;
        qi = (qi + 1) % questions.length;
        spawnFragment(q);
        timer = window.setTimeout(tw, 420);
        return;
      }
      timer = window.setTimeout(tw, deleting ? 28 : 55);
    };
    tw();
    return () => clearTimeout(timer);
  }, [questions]);

  return (
    <>
      <div className="fragments" ref={fragBox} aria-hidden="true" />
      <div className="search-wrap reveal in">
        <div className="search-label">{label}</div>
        <div className="search-bar">
          <SearchIcon />
          <div className="typed">
            <span>{text}</span>
            <span className="caret" />
          </div>
        </div>
      </div>
    </>
  );
}
