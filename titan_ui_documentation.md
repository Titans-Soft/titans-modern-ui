# Titan UI 🏛️

> **Internal Design System & Component Library** tailored for modern React & Next.js applications, built on top of **shadcn/ui** with native **Arabic & RTL-first** support.

Titan UI serves as the unified design language and UI foundation across our internal products. It bridges the gap in standard component libraries by providing first-class right-to-left (RTL) ergonomics, curated Arabic typography presets, and production-ready prebuilt screen templates.

---

## ✨ Features

- ⚡ **Next.js & React Optimized** — Built for React 18/19 and Next.js App Router (Server & Client components).
- 🎨 **shadcn/ui Architecture** — Fully customizable, copy-pasteable, accessible Radix-based primitives styled with Tailwind CSS.
- 🌍 **Native RTL & Arabic Support** — Bi-directional mirroring, bidirectional icon adaptations, and layout utilities out of the box.
- 🔤 **Curated Arabic Typography** — Built-in support and configurations for top Arabic fonts:
  - *Cairo*
  - *IBM Plex Sans Arabic*
  - *Tajawal*
  - *Alexandria*
  - *Almarai*
- 📱 **Prebuilt Arabic Screen Templates** — Ready-to-use authentication, dashboard, table views, and settings layouts optimized for Arabic phrasing and reading direction.
- 🌓 **Dark & Light Mode** — Seamless theme transitions using `next-themes`.

---

## 📦 Installation

Since Titan UI is an internal library, install it from our private registry or via Git:

```bash
# Using pnpm (recommended)
pnpm add @titan/ui

# Using npm
npm install @titan/ui

# Using yarn
yarn add @titan/ui
```

### Peer Dependencies

Make sure your host project has the following installed:

```bash
pnpm add tailwindcss postcss autoprefixer clsx tailwind-merge lucide-react
```

---

## 🚀 Setup & Configuration

### 1. Tailwind CSS Configuration

Extend your `tailwind.config.ts` with the Titan UI preset and font family configurations:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import titanPreset from "@titan/ui/tailwind.preset";

const config: Config = {
  presets: [titanPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@titan/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        ibmArabic: ["var(--font-ibm-plex-arabic)", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 2. Configure Next.js Fonts (`layout.tsx`)

Titan UI pairs seamlessly with Next.js Google Fonts:

```tsx
// app/layout.tsx
import { Cairo, IBM_Plex_Sans_Arabic } from "next/font/google";
import { TitanProvider } from "@titan/ui";
import "@titan/ui/styles.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo antialiased bg-background text-foreground">
        <TitanProvider defaultDirection="rtl">
          {children}
        </TitanProvider>
      </body>
    </body>
  );
}
```

---

## 🛠️ Usage

### Using UI Primitives

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from "@titan/ui";

export default function ArabicLoginForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>تسجيل الدخول</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input 
          type="email" 
          placeholder="البريد الإلكتروني" 
        />
        <Input 
          type="password" 
          placeholder="كلمة المرور" 
        />
        <Button className="w-full">دخول</Button>
      </CardContent>
    </Card>
  );
}
```

### Using Prebuilt Screens & Templates

Titan UI exports full layouts and screens ready for internal dashboards:

```tsx
import { DashboardShell, StatsCard, ArabicDataTable } from "@titan/ui/screens";
import { Users, DollarSign, ShoppingBag } from "lucide-react";

export default function OverviewPage() {
  return (
    <DashboardShell title="لوحة التحكم الرئيسية">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard title="إجمالي المستخدمين" value="١٢,٤٥٠" icon={<Users />} change="+12%" />
        <StatsCard title="الإيرادات" value="٤٥,٢٠٠ ر.س" icon={<DollarSign />} change="+8%" />
        <StatsCard title="الطلبات النشطة" value="٣٢٠" icon={<ShoppingBag />} change="-3%" />
      </div>
    </DashboardShell>
  );
}
```

---

## 📂 Project Structure

```text
titan-ui/
├── packages/
│   ├── components/       # shadcn/ui components customized with RTL utilities
│   │   ├── button/
│   │   ├── dialog/
│   │   ├── form/
│   │   └── ...
│   ├── fonts/            # Font configs & CSS variables
│   ├── screens/          # Prebuilt full-screen templates (Auth, Dashboard, Settings)
│   ├── hooks/            # RTL-aware hooks (useDirection, useLocale)
│   └── theme/            # Tailwind theme presets & CSS variables
├── apps/
│   └── docs/             # Internal Storybook / Documentation site
```

---

## 🤝 Contributing

This is an internal repository. Please follow our development workflow:

1. Create a feature branch from `main`: `git checkout -b feature/new-arabic-component`
2. Follow the shadcn standard: all components must support `className` overrides via `cn()`.
3. Verify RTL symmetry and font rendering in Storybook: `pnpm storybook`
4. Submit a Pull Request and tag the Design System team.

---

## 📄 License

Proprietary — strictly for internal use.