export interface NavItem {
  href: string;
  labelAr: string;
  labelEn: string;
}

export interface NavSection {
  titleAr: string;
  items: NavItem[];
}

export const DOCS_NAV: NavSection[] = [
  {
    titleAr: "البداية",
    items: [
      { href: "/", labelAr: "الرئيسية", labelEn: "Home" },
      { href: "/getting-started", labelAr: "التثبيت والإعداد", labelEn: "Getting started" },
      { href: "/fonts", labelAr: "الخطوط العربية", labelEn: "Fonts" },
      { href: "/themes", labelAr: "السمات", labelEn: "Themes" },
    ],
  },
  {
    titleAr: "مكوّنات shadcn",
    items: [
      { href: "/components/button", labelAr: "زر — Button", labelEn: "button" },
      { href: "/components/input", labelAr: "إدخال — Input", labelEn: "input" },
      { href: "/components/card", labelAr: "بطاقة — Card", labelEn: "card" },
      { href: "/components/badge", labelAr: "شارة — Badge", labelEn: "badge" },
      { href: "/components/dialog", labelAr: "نافذة — Dialog", labelEn: "dialog" },
      { href: "/components/table", labelAr: "جدول — Table", labelEn: "table" },
      { href: "/components/tabs", labelAr: "تبويبات — Tabs", labelEn: "tabs" },
      { href: "/components/alert", labelAr: "تنبيه — Alert", labelEn: "alert" },
    ],
  },
  {
    titleAr: "قوالب تايتنز",
    items: [
      { href: "/screens", labelAr: "الشاشات الجاهزة", labelEn: "Screens" },
      { href: "/screens#auth", labelAr: "تسجيل الدخول", labelEn: "Auth" },
      { href: "/screens#dashboard", labelAr: "لوحة التحكم", labelEn: "Dashboard" },
    ],
  },
  {
    titleAr: "للوكلاء (AI)",
    items: [
      { href: "/prompts", labelAr: "مكتبة البرومبتات", labelEn: "Prompts" },
      { href: "/components", labelAr: "فهرس الريجستري", labelEn: "Registry" },
    ],
  },
];
