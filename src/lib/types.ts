/** Gradient keyframe stop: [scrollProgress 0..1, topHex, bottomHex]. */
export type SkyStop = [number, string, string];

/** Per-language easter-egg + console copy. */
export interface EggCopy {
  konami: string;
  brandDot: string;
  bottom: string;
  idle: string;
  console: string;
}
