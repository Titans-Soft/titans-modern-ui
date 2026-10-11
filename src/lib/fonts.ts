import type { FontId } from "../../titan.config";

export interface ArabicFont {
  id: FontId;
  nameAr: string;
  nameEn: string;
  googleName: string;
  variable: string;
  tailwind: string;
  weights: string[];
  subsets: string[];
  descriptionAr: string;
  bestFor: string[];
}

/**
 * Curated Arabic fonts. Keep in sync with src/app/layout.tsx (next/font)
 * and tailwind.config.ts (fontFamily).
 */
export const ARABIC_FONTS: ArabicFont[] = [
  {
    id: "cairo",
    nameAr: "القاهرة",
    nameEn: "Cairo",
    googleName: "Cairo",
    variable: "--font-cairo",
    tailwind: "font-cairo",
    weights: ["400", "500", "600", "700", "800"],
    subsets: ["arabic", "latin"],
    descriptionAr: "الخط الافتراضي للمكتبة — هندسي واضح، ممتاز للواجهات والنصوص.",
    bestFor: ["default", "dashboards", "body"],
  },
  {
    id: "tajawal",
    nameAr: "تجوال",
    nameEn: "Tajawal",
    googleName: "Tajawal",
    variable: "--font-tajawal",
    tailwind: "font-tajawal",
    weights: ["400", "500", "700", "800"],
    subsets: ["arabic", "latin"],
    descriptionAr: "خط عصري خفيف ونظيف، مثالي للفقرات الطويلة.",
    bestFor: ["body", "content", "marketing"],
  },
  {
    id: "plex-arabic",
    nameAr: "آي بي إم بلكس العربي",
    nameEn: "IBM Plex Sans Arabic",
    googleName: "IBM Plex Sans Arabic",
    variable: "--font-plex-arabic",
    tailwind: "font-plex",
    weights: ["400", "500", "600", "700"],
    subsets: ["arabic", "latin"],
    descriptionAr: "خط مؤسسي مهني — ممتاز للمنتجات المالية والإدارية.",
    bestFor: ["enterprise", "tables", "forms"],
  },
  {
    id: "alexandria",
    nameAr: "الإسكندرية",
    nameEn: "Alexandria",
    googleName: "Alexandria",
    variable: "--font-alexandria",
    tailwind: "font-alexandria",
    weights: ["400", "500", "600", "700"],
    subsets: ["arabic", "latin"],
    descriptionAr: "خط مصري حديث بطابع ودود — جيد للعناوين والهوية.",
    bestFor: ["headings", "brand"],
  },
  {
    id: "almarai",
    nameAr: "المراعي",
    nameEn: "Almarai",
    googleName: "Almarai",
    variable: "--font-almarai",
    tailwind: "font-almarai",
    weights: ["400", "700", "800"],
    subsets: ["arabic"],
    descriptionAr: "خط بسيط عالي المقروئية — ممتاز للتطبيقات الحكومية والخدمية.",
    bestFor: ["body", "gov", "accessibility"],
  },
  {
    id: "kufi",
    nameAr: "نوتو كوفي",
    nameEn: "Noto Kufi Arabic",
    googleName: "Noto Kufi Arabic",
    variable: "--font-kufi",
    tailwind: "font-kufi",
    weights: ["400", "500", "600", "700"],
    subsets: ["arabic", "latin"],
    descriptionAr: "خط كوفي هندسي مميز — للعناوين الكبيرة والشعارات.",
    bestFor: ["display", "hero", "headings"],
  },
];

export const FONT_IDS = ARABIC_FONTS.map((f) => f.id);
