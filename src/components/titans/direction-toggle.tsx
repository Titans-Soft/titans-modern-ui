"use client";

import { useTitan } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";

export function DirectionToggle() {
  const { direction, setDirection } = useTitan();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setDirection(direction === "rtl" ? "ltr" : "rtl")}
      className="gap-2"
      title={direction === "rtl" ? "التحويل إلى LTR للمعاينة" : "التحويل إلى RTL للمعاينة"}
    >
      <ArrowLeftRight className="size-4" />
      {direction === "rtl" ? "RTL: عربي" : "LTR: EN"}
    </Button>
  );
}
