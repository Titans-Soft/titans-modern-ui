/**
 * titan.config.ts — Single source of truth for Titans Modern UI.
 *
 * AI AGENTS: read this file first. It defines direction, fonts, themes,
 * and the registry contract. Import from here instead of hard-coding values.
 */

export const TITAN_META = {
  name: "titans-modern-ui",
  org: "Titansoft (Titans-Soft)",
  localeDefault: "ar",
  directionDefault: "rtl" as const,
  style: "shadcn/new-york",
  rsc: true,
} as const;

export type Direction = "rtl" | "ltr";
export type FontId =
  | "cairo"
  | "tajawal"
  | "plex-arabic"
  | "alexandria"
  | "almarai"
  | "kufi";

export type ThemeId =
  | "titans"
  | "oasis"
  | "sand"
  | "midnight"
  | "plum";

export const DIRECTIONS: { id: Direction; labelAr: string; labelEn: string }[] = [
  { id: "rtl", labelAr: "يمين → يسار (عربي)", labelEn: "RTL (Arabic)" },
  { id: "ltr", labelAr: "يسار → يمين", labelEn: "LTR" },
];
