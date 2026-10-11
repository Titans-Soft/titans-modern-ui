import type { Metadata } from "next";
import { Cairo, Tajawal, IBM_Plex_Sans_Arabic, Alexandria, Almarai, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { TitanProvider } from "@/components/providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { cn } from "@/lib/utils";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", display: "swap" });
const tajawal = Tajawal({ subsets: ["arabic", "latin"], weight: ["400", "500", "700", "800"], variable: "--font-tajawal", display: "swap" });
const plex = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-arabic", display: "swap" });
const alexandria = Alexandria({ subsets: ["arabic", "latin"], variable: "--font-alexandria", display: "swap" });
const almarai = Almarai({ subsets: ["arabic"], weight: ["400", "700", "800"], variable: "--font-almarai", display: "swap" });
const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-kufi", display: "swap" });

export const metadata: Metadata = {
  title: "تايتنز UI — مكتبة Titansoft العربية",
  description: "مكتبة مكونات shadcn/ui عربية (RTL-first) — انسخ والصق أو وجّه وكيل AI عبر registry.json و llms.txt",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={cn(cairo.variable, tajawal.variable, plex.variable, alexandria.variable, almarai.variable, kufi.variable, "theme-titans font-cairo")}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <TitanProvider defaultDirection="rtl">
          <SiteHeader />
          <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-4 py-8">{children}</main>
          <SiteFooter />
        </TitanProvider>
      </body>
    </html>
  );
}
