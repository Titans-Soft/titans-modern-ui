"use client";

import { TITAN_THEMES } from "@/lib/themes";
import { useTitan } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemePresetSwitcher() {
  const { themeId, setThemeId } = useTitan();
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5" role="group" aria-label="اختيار السمة">
      {TITAN_THEMES.map((t) => {
        const active = themeId === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setThemeId(t.id)}
            className={cn(
              "rounded-lg border p-3 text-start transition-all hover:shadow-md",
              active ? "border-primary ring-2 ring-primary/30" : "border-border"
            )}
          >
            <div className="mb-2 flex gap-1" dir="ltr">
              <span className="h-5 w-5 rounded-full border" style={{ background: t.preview.primary }} />
              <span className="h-5 w-5 rounded-full border" style={{ background: t.preview.accent }} />
              <span className="h-5 w-5 rounded-full border" style={{ background: t.preview.background }} />
            </div>
            <div className="flex items-center gap-1 text-xs font-bold">
              {active && <Check className="size-3.5 text-primary" />}
              {t.nameAr}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function ThemePresetButtons() {
  const { themeId, setThemeId } = useTitan();
  return (
    <div className="flex flex-wrap gap-2">
      {TITAN_THEMES.map((t) => (
        <Button key={t.id} size="sm" variant={themeId === t.id ? "default" : "outline"} onClick={() => setThemeId(t.id)}>
          {t.nameAr}
        </Button>
      ))}
    </div>
  );
}
