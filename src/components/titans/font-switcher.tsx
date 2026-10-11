"use client";

import { ARABIC_FONTS } from "@/lib/fonts";
import { useTitan } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FontSwitcher({ compact = false }: { compact?: boolean }) {
  const { font, setFont } = useTitan();
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="اختيار الخط العربي">
      {ARABIC_FONTS.map((f) => (
        <Button
          key={f.id}
          variant={font === f.id ? "default" : "outline"}
          size="sm"
          onClick={() => setFont(f.id)}
          className={cn(!compact && f.tailwind)}
          title={f.descriptionAr}
        >
          {f.nameAr}
        </Button>
      ))}
    </div>
  );
}
