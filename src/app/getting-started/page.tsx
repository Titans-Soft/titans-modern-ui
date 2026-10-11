import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { CodeBlock } from "@/components/titans/code-block";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const TAILWIND_SNIPPET = `// tailwind.config.ts — أضف عائلات الخطوط العربية
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: {
    cairo: ["var(--font-cairo)", "sans-serif"],
    tajawal: ["var(--font-tajawal)", "sans-serif"],
    plex: ["var(--font-plex-arabic)", "sans-serif"],
  } } },
};
export default config;`;

const LAYOUT_SNIPPET = `// app/layout.tsx — عربي RTL افتراضيًا
import { Cairo } from "next/font/google";
import { TitanProvider } from "@/components/providers";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-cairo bg-background text-foreground antialiased">
        <TitanProvider defaultDirection="rtl">{children}</TitanProvider>
      </body>
    </html>
  );
}`;

export default function GettingStarted() {
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-3xl flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-black">التثبيت والإعداد</h1>
          <p className="mt-2 text-muted-foreground">ثلاث خطوات فقط — المكتبة copy-paste، لا حاجة لنشر حزمة npm داخلية.</p>
        </div>
        <Alert variant="info">
          <AlertTitle>الفلسفة: انسخ، الصق، امتلك الكود</AlertTitle>
          <AlertDescription>على طريقة shadcn — كل مكوّن ملفاته في <code dir="ltr">src/components/ui</code> و <code dir="ltr">registry/*.json</code>. عدّل بحرية داخل مشروعك.</AlertDescription>
        </Alert>
        <section className="space-y-2">
          <h2 className="text-xl font-extrabold">١ — انسخ المكوّنات</h2>
          <p className="text-sm text-muted-foreground">من صفحة المكوّن (مثال <code dir="ltr">/components/button</code>) انسخ ملف <code dir="ltr">button.tsx</code> إلى <code dir="ltr">src/components/ui/</code> في مشروعك، وانسخ <code dir="ltr">src/lib/utils.ts</code> (دالة <code dir="ltr">cn</code>).</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-extrabold">٢ — متطلبات shadcn</h2>
          <CodeBlock lang="bash" code={`npm i clsx tailwind-merge class-variance-authority lucide-react next-themes\nnpm i -D tailwindcss-animate\n# Radix حسب الحاجة:\nnpm i @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-dropdown-menu`} />
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-extrabold">٣ — الخطوط والاتجاه</h2>
          <CodeBlock code={LAYOUT_SNIPPET} />
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-extrabold">٤ — إعداد Tailwind</h2>
          <CodeBlock code={TAILWIND_SNIPPET} />
        </section>
      </article>
    </div>
  );
}
