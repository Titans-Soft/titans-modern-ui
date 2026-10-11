"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { Direction, FontId, ThemeId } from "../../titan.config";
import { DEFAULT_THEME } from "@/lib/themes";

interface TitanContext {
  direction: Direction;
  setDirection: (d: Direction) => void;
  font: FontId;
  setFont: (f: FontId) => void;
  themeId: ThemeId;
  setThemeId: (t: ThemeId) => void;
}

const Ctx = React.createContext<TitanContext | null>(null);

export function useTitan() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useTitan must be used inside <TitanProvider>");
  return ctx;
}

/**
 * TitanProvider — wraps next-themes + manages `dir`, font class, theme class
 * on <html>. IDs are stable so AI agents can script them:
 * `document.documentElement.dataset.titanTheme`.
 */
export function TitanProvider({
  children,
  defaultDirection = "rtl",
}: {
  children: React.ReactNode;
  defaultDirection?: Direction;
}) {
  const [direction, setDirection] = React.useState<Direction>(defaultDirection);
  const [font, setFont] = React.useState<FontId>("cairo");
  const [themeId, setThemeId] = React.useState<ThemeId>(DEFAULT_THEME);

  React.useEffect(() => {
    const root = document.documentElement;
    root.dir = direction;
    root.lang = direction === "rtl" ? "ar" : "en";
    root.dataset.titanTheme = themeId;
    // swap font-* class
    root.classList.remove("font-cairo", "font-tajawal", "font-plex", "font-alexandria", "font-almarai", "font-kufi");
    const map: Record<FontId, string> = {
      cairo: "font-cairo",
      tajawal: "font-tajawal",
      "plex-arabic": "font-plex",
      alexandria: "font-alexandria",
      almarai: "font-almarai",
      kufi: "font-kufi",
    };
    root.classList.add(map[font]);
    // swap theme-* class
    root.classList.remove("theme-titans", "theme-oasis", "theme-sand", "theme-midnight", "theme-plum");
    root.classList.add(`theme-${themeId}`);
  }, [direction, font, themeId]);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Ctx.Provider value={{ direction, setDirection, font, setFont, themeId, setThemeId }}>
        {children}
      </Ctx.Provider>
    </NextThemesProvider>
  );
}
