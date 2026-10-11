"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CodeBlock({ code, lang = "tsx", className }: { code: string; lang?: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <div className={cn("group relative overflow-hidden rounded-lg border bg-zinc-950", className)}>
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-1.5">
        <span className="text-[11px] font-mono text-zinc-400" dir="ltr">{lang}</span>
        <Button size="sm" variant="ghost" onClick={copy} className="h-7 gap-1 text-zinc-300 hover:bg-white/10 hover:text-white">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "تم النسخ" : "نسخ"}
        </Button>
      </div>
      <pre dir="ltr" className="overflow-x-auto p-4 text-left font-mono text-[12.5px] leading-6 text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
