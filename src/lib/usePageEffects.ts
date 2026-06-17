import { useEffect } from "react";
import type { SkyStop, EggCopy } from "./types";

/**
 * Drives all the page-wide Dawn effects that every Lifable page shares:
 *  - custom cursor (lens + ring)
 *  - continuous scroll-driven gradient sky (#bgGradient) + reading progress
 *  - reveal-on-scroll for .reveal elements
 *  - count-up for [data-count] stats
 *  - parallax on .orb
 *  - easter eggs (konami, brand-dot x3, reach bottom, idle) + console line
 *
 * Page-specific pieces (typewriter, doc-assembly, star canvas, carousel)
 * live in their own components.
 */
export function usePageEffects(opts: {
  sky: SkyStop[];
  egg: EggCopy;
  /** "pt-PT" => 1.234 thousands; "en-US" => 1,234. */
  numberLocale: "pt-PT" | "en-US";
}) {
  const { sky, egg, numberLocale } = opts;

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- custom cursor ---------- */
    const cur = document.querySelector<HTMLElement>(".cursor");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    if (cur && ring && !matchMedia("(pointer:coarse)").matches) {
      let mx = innerWidth / 2,
        my = innerHeight / 2,
        rx = mx,
        ry = my;
      const onMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
      };
      addEventListener("mousemove", onMove);
      let raf = 0;
      const loop = () => {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
        raf = requestAnimationFrame(loop);
      };
      loop();
      const hoverSel = "a,button,[data-link],.plan,.profile,.cdot,.qcard,.year,.doc";
      const onEnter = () => document.body.classList.add("hovering");
      const onLeave = () => document.body.classList.remove("hovering");
      const hoverEls = document.querySelectorAll(hoverSel);
      hoverEls.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
      cleanups.push(() => {
        removeEventListener("mousemove", onMove);
        cancelAnimationFrame(raf);
        hoverEls.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* ---------- scroll-driven gradient + progress ---------- */
    const bg = document.getElementById("bgGradient");
    const prog = document.querySelector<HTMLElement>(".progress");
    const hx = (c: string) => c.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    const lerp = (a: number, b: number, t: number) => Math.round(a + (b - a) * t);
    const mix = (c1: string, c2: string, t: number) => {
      const a = hx(c1),
        b = hx(c2);
      return `rgb(${lerp(a[0], b[0], t)},${lerp(a[1], b[1], t)},${lerp(a[2], b[2], t)})`;
    };
    const paintSky = () => {
      const h = document.documentElement;
      const p = Math.max(0, Math.min(1, h.scrollTop / (h.scrollHeight - h.clientHeight)));
      if (prog) prog.style.width = p * 100 + "%";
      let i = 0;
      while (i < sky.length - 2 && p > sky[i + 1][0]) i++;
      const [p0, t0, b0] = sky[i],
        [p1, t1, b1] = sky[i + 1];
      const t = (p - p0) / (p1 - p0 || 1);
      if (bg) bg.style.background = `linear-gradient(180deg, ${mix(t0, t1, t)} 0%, ${mix(b0, b1, t)} 100%)`;
    };
    addEventListener("scroll", paintSky, { passive: true });
    addEventListener("resize", paintSky);
    paintSky();
    cleanups.push(() => {
      removeEventListener("scroll", paintSky);
      removeEventListener("resize", paintSky);
    });

    /* ---------- reveal on scroll ---------- */
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.16 }
    );
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---------- count-up stats ---------- */
    const fmt = (n: number) =>
      n >= 1000 ? Math.round(n).toLocaleString(numberLocale) : String(Math.round(n));
    const counted = new WeakSet<Element>();
    const cio = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
            if (counted.has(el)) return;
            counted.add(el);
            const target = +el.dataset.count!,
              suf = el.dataset.suffix || "",
              hasEm = !!el.querySelector(".em"),
              t0 = performance.now(),
              dur = 1600;
            const render = (v: string) => {
              el.innerHTML = (hasEm ? `<span class="em">${v}</span>` : v) + suf;
            };
            const step = (t: number) => {
              const p = Math.min(1, (t - t0) / dur),
                e2 = 1 - Math.pow(1 - p, 3);
              render(fmt(target * e2));
              if (p < 1) requestAnimationFrame(step);
              else render(fmt(target));
            };
            requestAnimationFrame(step);
          });
        }),
      { threshold: 0.5 }
    );
    document.querySelectorAll(".stat").forEach((s) => cio.observe(s));
    cleanups.push(() => cio.disconnect());

    /* ---------- orb parallax ---------- */
    const orbs = [...document.querySelectorAll<HTMLElement>(".orb")];
    const onOrb = () => {
      const y = scrollY;
      orbs.forEach((o, i) => (o.style.transform = `translateY(${y * (i ? -0.04 : 0.05)}px)`));
    };
    addEventListener("scroll", onOrb, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onOrb));

    /* ---------- easter eggs ---------- */
    const eggEl = document.querySelector<HTMLElement>(".egg");
    const eggText = document.getElementById("eggText");
    let eggTimer: number | undefined;
    const showEgg = (msg: string) => {
      if (!eggEl || !eggText) return;
      eggText.textContent = msg;
      eggEl.classList.add("show");
      clearTimeout(eggTimer);
      eggTimer = window.setTimeout(() => eggEl.classList.remove("show"), 4200);
    };

    const seq = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      pos = e.key === seq[pos] || e.key.toLowerCase() === seq[pos] ? pos + 1 : 0;
      if (pos === seq.length) {
        pos = 0;
        showEgg(egg.konami);
        document.body.animate(
          [{ filter: "invert(0)" }, { filter: "invert(1)" }, { filter: "invert(0)" }],
          { duration: 900 }
        );
      }
    };
    addEventListener("keydown", onKey);

    let dotClicks = 0;
    const dot = document.querySelector<HTMLElement>(".brand .dot");
    const onDot = () => {
      if (++dotClicks >= 3) {
        dotClicks = 0;
        showEgg(egg.brandDot);
      }
    };
    dot?.addEventListener("click", onDot);

    let bottomShown = false;
    const onBottom = () => {
      const h = document.documentElement;
      if (!bottomShown && h.scrollTop + h.clientHeight >= h.scrollHeight - 4) {
        bottomShown = true;
        showEgg(egg.bottom);
      }
    };
    addEventListener("scroll", onBottom, { passive: true });

    let idle: number | undefined;
    const resetIdle = () => {
      clearTimeout(idle);
      idle = window.setTimeout(() => showEgg(egg.idle), 22000);
    };
    const idleEvents: Array<keyof WindowEventMap> = ["mousemove", "scroll", "keydown", "click"];
    idleEvents.forEach((ev) => addEventListener(ev, resetIdle, { passive: true }));
    resetIdle();

    cleanups.push(() => {
      removeEventListener("keydown", onKey);
      dot?.removeEventListener("click", onDot);
      removeEventListener("scroll", onBottom);
      idleEvents.forEach((ev) => removeEventListener(ev, resetIdle));
      clearTimeout(idle);
      clearTimeout(eggTimer);
    });

    // eslint-disable-next-line no-console
    console.log(
      `%c${egg.console}`,
      "font-family:serif;font-style:italic;font-size:15px;color:#c1502e"
    );

    void reduceMotion;
    return () => cleanups.forEach((fn) => fn());
  }, [sky, egg, numberLocale]);
}
