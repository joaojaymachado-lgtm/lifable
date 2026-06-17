import { useEffect, useRef } from "react";

/** Canvas star field: stars already there; moving the cursor draws
 *  constellations between nearby ones (the inverted horoscope). */
export function StarSky() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvas.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    let stars: { x: number; y: number; r: number; a: number }[] = [];
    let W = 0,
      H = 0,
      t = 0,
      raf = 0;
    const parent = cv.parentElement!;
    const pointer = { x: -999, y: -999 };

    const resize = () => {
      const r = parent.getBoundingClientRect();
      W = cv.width = r.width;
      H = cv.height = r.height;
      stars = Array.from({ length: Math.min(110, Math.floor(W / 14)) }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random(),
      }));
    };
    resize();
    addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = cv.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = pointer.y = -999;
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.01;
      stars.forEach((s) => {
        const d = Math.hypot(s.x - pointer.x, s.y - pointer.y);
        const tw = 0.5 + Math.sin(t + s.a * 6.28) * 0.5;
        let alpha = 0.25 + tw * 0.4;
        if (d < 120) alpha = Math.min(1, alpha + (1 - d / 120) * 0.7);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (d < 120 ? 1.6 : 1), 0, 6.28);
        ctx.fillStyle = `rgba(233,201,168,${alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i],
            b = stars[j];
          const da = Math.hypot(a.x - pointer.x, a.y - pointer.y),
            db = Math.hypot(b.x - pointer.x, b.y - pointer.y);
          if (da < 120 && db < 120) {
            const dd = Math.hypot(a.x - b.x, a.y - b.y);
            if (dd < 90) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(233,201,168,${0.18 * (1 - dd / 90)})`;
              ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas className="sky" ref={canvas} />;
}
