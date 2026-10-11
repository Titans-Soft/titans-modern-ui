# تايتنز UI — Titans Modern UI 🏛️

> **مكتبة Titansoft الداخلية — عربية أولًا (Arabic-first)**، مبنية على **Next.js + shadcn/ui**، جاهزة للنسخ واللصق أو للتوجيه عبر وكيل AI.

## ✨ ما هذه المكتبة؟

مكتبة مكونات داخلية لفريق **Titansoft** (القاهرة — React / Next.js / .NET):
- **مكونات shadcn/ui معربة** (20 مكونًا: أزرار، حقول، بطاقات، جداول، نوافذ…).
- **6 خطوط عربية** (القاهرة، تجوال، IBM Plex، الإسكندرية، المراعي، نوتو كوفي).
- **5 سمات** (تايتنز، الواحة، الرمال، منتصف الليل، البرقوق) + وضع ليلي.
- **قوالب جاهزة**: تسجيل دخول، لوحة تحكم، جداول، حالة فارغة.
- **AI-agent جاهزة**: كل مكون له `registry/*.json` + برومبت + صفحة توثيق + `llms.txt`.

## 🚀 التشغيل محليًا

```bash
npm install
npm run registry:build
npm run dev
# افتح http://localhost:3000
```

## 📦 الاستهلاك (انسخ والصق)

```bash
# 1) اختر من registry.json
# 2) انسخ الملفات — مثال الزر:
#    registry/button.json → src/components/ui/button.tsx
# 3) المتطلبات المشتركة:
npm i clsx tailwind-merge class-variance-authority lucide-react next-themes
```

```tsx
// app/layout.tsx — عربي RTL افتراضيًا
import { Cairo } from "next/font/google";
import { TitanProvider } from "@/components/providers";
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-background text-foreground">
        <TitanProvider defaultDirection="rtl">{children}</TitanProvider>
      </body>
    </html>
  );
}
```

## 🤖 الاستخدام عبر وكيل AI

الصق هذا في Cursor / Copilot / Claude مع `registry.json`:

```
أنت تبني واجهة عربية (RTL) بمكتبة titans-modern-ui.
اقرأ registry.json ثم انسخ الملفات المطلوبة من registry/[name].json.
القواعد: dir=rtl lang=ar، خط Cairo، استخدم cn()، أيقونات الأسهم flip-rtl، والأرقام tnum.
```

- البرومبتات الكاملة: `/prompts` و `prompts/*.md`
- قواعد الوكلاء: `AGENTS.md` — ملخص الآلات: `llms.txt`
- فهرس الآلات: `/r/index.json` — المفرد: `/r/[name].json`

## 🗂️ هيكل المشروع

```text
titans-modern-ui/
├── src/app/                    # موقع التوثيق (عربي RTL): /, /components, /fonts, /themes, /screens, /prompts
├── src/components/ui/          # مكونات shadcn (انسخها لمشروعك)
├── src/components/titans/      # قوالب تايتنز (StatsCard, AuthCard, DashboardShell…)
├── src/components/docs/        # معاينات التوثيق
├── src/lib/                    # utils (cn) + fonts + themes + registry + nav
├── registry.json               # الفهرس الرئيسي (المصدر الوحيد)
├── registry/*.json             # ظروف المكونات (تُولّد آليًا — لا تحرر يدويًا)
├── public/r/*.json             # نسخ للتحميل (/r/[name].json)
├── prompts/*.md                # مكتبة البرومبتات
├── titan.config.ts             # الهوية والاتجاه والخطوط والسمات
├── AGENTS.md                   # قواعد الوكلاء  |  llms.txt  # ملخص الآلات
└── titan_ui_documentation.md   # وثيقة التصميم الأصلية
```

## ➕ إضافة مكون جديد

```bash
# 1) أنشئ src/components/ui/[name].tsx
# 2) أضف معاينة في src/components/docs/demos.tsx
# 3) أضف مدخلًا في registry.json
npm run registry:build
npm run registry:validate
npm run typecheck
npm run build
```

## ✅ قواعد صارمة

- `dir="rtl"` افتراضيًا. الخصائص المنطقية فقط (`start/end`, `ps/pe`, `gap`).
- ممنوع: `ml-*` `mr-*` `left-*` `right-*` `text-left/right` `space-x-*`.
- الأيقونات الاتجاهية: `flip-rtl`. الأرقام: `tnum`.
- الخطوط والسمات من `src/lib/fonts.ts` و `src/lib/themes.ts` فقط.

## 🏢 Titansoft

شركة مصرية متخصصة في React و Next.js و .NET — القاهرة، مصر.
المستودع: `https://github.com/Titans-Soft/titans-modern-ui` — استخدام داخلي (UNLICENSED).
