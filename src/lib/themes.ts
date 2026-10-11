import type { ThemeId } from "../../titan.config";

export interface TitanTheme {
  id: ThemeId;
  nameAr: string;
  nameEn: string;
  cssClass: string;
  descriptionAr: string;
  preview: { primary: string; accent: string; background: string };
}

/**
 * Theme presets — each maps to a `.theme-<id>` class in globals.css
 * that overrides the shadcn CSS variables. Light + dark supported
 * via `.dark` ancestor (see ThemeProvider).
 */
export const TITAN_THEMES: TitanTheme[] = [
  {
    id: "titans",
    nameAr: "تايتنز الافتراضي",
    nameEn: "Titans Default",
    cssClass: "theme-titans",
    descriptionAr: "هوية تايتنز الأساسية — كحلي/بنفسجي داكن مع لمسة سماوية.",
    preview: { primary: "#6d5cff", accent: "#22d3ee", background: "#ffffff" },
  },
  {
    id: "oasis",
    nameAr: "الواحة",
    nameEn: "Oasis Emerald",
    cssClass: "theme-oasis",
    descriptionAr: "أخضر زمردي هادئ — مناسب للمنتجات المالية والصحية.",
    preview: { primary: "#10b981", accent: "#84cc16", background: "#ffffff" },
  },
  {
    id: "sand",
    nameAr: "رمال الصحراء",
    nameEn: "Desert Sand",
    cssClass: "theme-sand",
    descriptionAr: "درجات دافئة ترابية — للمنتجات الحكومية والتعليمية.",
    preview: { primary: "#d97706", accent: "#b45309", background: "#fffbeb" },
  },
  {
    id: "midnight",
    nameAr: "منتصف الليل",
    nameEn: "Midnight",
    cssClass: "theme-midnight",
    descriptionAr: "داكن أنيق عالي التباين — للوحات التحكم الليلية.",
    preview: { primary: "#38bdf8", accent: "#818cf8", background: "#020617" },
  },
  {
    id: "plum",
    nameAr: "البرقوق",
    nameEn: "Plum",
    cssClass: "theme-plum",
    descriptionAr: "بنفسجي جريء — للتسويق والمنتجات الإبداعية.",
    preview: { primary: "#a855f7", accent: "#ec4899", background: "#ffffff" },
  },
];

export const DEFAULT_THEME: ThemeId = "titans";
