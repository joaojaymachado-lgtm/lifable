import type { SkyStop, EggCopy } from "./lib/types";

/* ============================================================
   All page copy + per-page config in one place.
   Text is verbatim from the static HTML build (which mirrors
   assets/website/copy.md and copy-pt.md). Edit here.
   ============================================================ */

/* ---------- gradient skies ---------- */
export const HOME_SKY: SkyStop[] = [
  [0.0, "14202e", "24384d"],
  [0.1, "2a4358", "8aa3b5"],
  [0.18, "c3d4dc", "f4e6d0"],
  [0.34, "ffe6c9", "ffd4a2"],
  [0.5, "fbc78e", "ec9f72"],
  [0.64, "cf9072", "a86d70"],
  [0.76, "9c5f6e", "5e3a52"],
  [0.88, "4a3147", "241a30"],
  [1.0, "182234", "101c2c"],
];

export const HIW_SKY: SkyStop[] = [
  [0.0, "14202e", "24384d"],
  [0.1, "2a4358", "8aa3b5"],
  [0.2, "c3d4dc", "f4e6d0"],
  [0.4, "ffe6c9", "ffd4a2"],
  [0.56, "fbc78e", "d98a6a"],
  [0.7, "c0857a", "9c6370"],
  [0.84, "6b4258", "34243e"],
  [1.0, "182234", "101c2c"],
];

/* ---------- easter-egg / console copy ---------- */
export const EGG_EN: EggCopy = {
  konami: "The answer is already yours. It always was.",
  brandDot: "Hello. Welcome back to yourself.",
  bottom: "You reached the end. But this is the beginning.",
  idle: "Still there? The fog won't lift on its own.",
  console: "The answer is already yours. We just help you hear it.",
};

export const EGG_PT: EggCopy = {
  konami: "A resposta já é tua. Sempre foi.",
  brandDot: "Olá. Bem-vindo de volta a ti.",
  bottom: "Chegaste ao fim. Mas isto é o início.",
  idle: "Ainda aí? O nevoeiro não se levanta sozinho.",
  console: "A resposta já é tua. Nós só te ajudamos a ouvi-la.",
};

/* ---------- routes ---------- */
export const ROUTES = {
  homeEn: "/",
  homePt: "/pt",
  hiwEn: "/how-it-works",
  hiwPt: "/como-funciona",
} as const;
