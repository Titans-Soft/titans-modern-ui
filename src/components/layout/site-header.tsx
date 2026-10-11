"use client";

import Link from "next/link";
import { Boxes, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/titans/theme-switcher";
import { DirectionToggle } from "@/components/titans/direction-toggle";
import * as React from "react";
import { DOCS_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="القائمة">
            <Menu className="size-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2 font-black">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Boxes className="size-4" />
            </span>
            <span>
              تايتنز <span className="text-primary">UI</span>
            </span>
            <span className="hidden rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground sm:inline">
              داخلي — Titansoft
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Link href="/components" className="rounded-md px-3 py-1.5 hover:bg-accent/10">المكوّنات</Link>
          <Link href="/fonts" className="rounded-md px-3 py-1.5 hover:bg-accent/10">الخطوط</Link>
          <Link href="/themes" className="rounded-md px-3 py-1.5 hover:bg-accent/10">السمات</Link>
          <Link href="/screens" className="rounded-md px-3 py-1.5 hover:bg-accent/10">الشاشات</Link>
          <Link href="/prompts" className="rounded-md px-3 py-1.5 hover:bg-accent/10">برومبتات AI</Link>
        </nav>
        <div className="flex items-center gap-2">
          <DirectionToggle />
          <ThemeSwitcher />
          <Button variant="outline" size="icon" asChild title="GitHub — Titans-Soft/titans-modern-ui">
            <a href="https://github.com/Titans-Soft/titans-modern-ui" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </div>
      {/* mobile nav */}
      <div className={cn("border-t px-4 py-3 lg:hidden", open ? "block" : "hidden")}>
        <div className="grid gap-4">
          {DOCS_NAV.map((s) => (
            <div key={s.titleAr}>
              <p className="mb-1 text-xs font-bold text-muted-foreground">{s.titleAr}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-md border px-2.5 py-1 text-xs">
                    {i.labelAr}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
