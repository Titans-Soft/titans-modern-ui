import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { ARABIC_FONTS } from "@/lib/fonts";
import { FontSwitcher } from "@/components/titans/font-switcher";
import { CodeBlock } from "@/components/titans/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function FontsPage() {
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-black">الخطوط العربية</h1>
          <p className="mt-2 text-muted-foreground">٦ خطوط عربية عبر <code dir="ltr">next/font/google</code> — جرّبها مباشرة (التبديل يطبّق على الصفحة):</p>
        </div>
        <FontSwitcher />
        <div className="grid gap-3 md:grid-cols-2">
          {ARABIC_FONTS.map((f) => (
            <Card key={f.id}>
              <CardHeader>
                <CardTitle className={cn("text-2xl", f.tailwind)}>{f.nameAr} — {f.nameEn}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className={cn("text-lg leading-9", f.tailwind)}>صُمم في القاهرة ليعمل بسرعة — ٤٥٬٢٠٠ جنيه، طلبات اليوم ٣٢٠.</p>
                <p className="text-sm text-muted-foreground">{f.descriptionAr}</p>
                <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">tailwind: {f.tailwind} · var: {f.variable}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <CodeBlock
          lang="tsx"
          code={`import { Cairo, Tajawal } from "next/font/google";
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });
// <html lang="ar" dir="rtl" className={cairo.variable}>
// <body className="font-cairo">…`}
        />
      </article>
    </div>
  );
}
