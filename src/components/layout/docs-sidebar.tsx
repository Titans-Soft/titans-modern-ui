"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export function DocsSidebar() {
  const pathname = usePathname();
  return (
    <nav className="scrollbar-thin hidden w-64 shrink-0 overflow-y-auto border-e ps-1 pe-4 pb-10 lg:block" aria-label="تنقل المكتبة">
      <div className="space-y-6">
        {DOCS_NAV.map((section) => (
          <div key={section.titleAr}>
            <p className="mb-2 px-2 text-xs font-bold text-muted-foreground">{section.titleAr}</p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href.split("#")[0];
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent/10",
                        active ? "bg-primary/10 font-bold text-primary" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.labelAr}
                      <span className="font-mono text-[10px] opacity-60" dir="ltr">{item.labelEn}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Separator className="mt-4" />
          </div>
        ))}
      </div>
    </nav>
  );
}
