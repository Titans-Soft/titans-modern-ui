import Link from "next/link";
import { ArrowLeft, Bot, Copy, Languages, Palette, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/titans/code-block";
import { FontSwitcher } from "@/components/titans/font-switcher";
import { ThemePresetSwitcher } from "@/components/titans/theme-preset-switcher";
import { StatsCard } from "@/components/titans/stats-card";
import { Users, Wallet, ShoppingBag } from "lucide-react";
import { getRegistry } from "@/lib/registry";

const QUICK_INSTALL = `// 1) انسخ المكوّن من /components/<name> أو من registry/*.json
// 2) الصق في مشروعك تحت src/components/ui/
// 3) ثبّت المتطلبات:
npm i clsx tailwind-merge class-variance-authority lucide-react`;

const AGENT_PROMPT = `أنت تبني واجهة عربية (RTL) بمكتبة titans-modern-ui.
اقرأ registry.json ثم انسخ الملفات المطلوبة من registry/<name>.json.
القواعد: dir="rtl" lang="ar"، خط Cairo افتراضيًا، استخدم cn() للـ className،
أيقونات الأسهم أضف لها flip-rtl، والأرقام tnum.`;

export default function Home() {
  const items = getRegistry();
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-bl from-primary/15 via-background to-accent/10 p-8 md:p-12">
        <div className="max-w-2xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>داخلي — Titansoft</Badge>
            <Badge variant="secondary">Next.js + shadcn/ui</Badge>
            <Badge variant="success">RTL-first · عربي أولًا</Badge>
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            مكتبة واجهات عربية حديثة
            <br />
            <span className="text-primary">انسخ والصق — أو وجّه وكيل AI</span>
          </h1>
          <p className="text-muted-foreground">
            مكوّنات shadcn/ui معربة بالكامل، ٦ خطوط عربية، ٥ سمات، وقوالب جاهزة (دخول، لوحة تحكم، جداول).
            كل مكوّن له ملف <code className="font-mono text-xs" dir="ltr">registry/*.json</code> + برومبت جاهز للوكلاء.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="lg">
              <Link href="/components">تصفح المكوّنات <ArrowLeft className="flip-rtl size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/prompts"><Bot className="size-4" /> برومبتات الوكلاء</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/getting-started"><Copy className="size-4" /> التثبيت</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Live interactive strip */}
      <section className="grid gap-4 md:grid-cols-3">
        <StatsCard title="إجمالي المستخدمين" value="١٢٬٤٥٠" change="+12%" trend="up" icon={<Users />} hint="مقارنة بالشهر الماضي" />
        <StatsCard title="الإيرادات" value="٤٥٬٢٠٠ ج.م" change="+8%" trend="up" icon={<Wallet />} hint="بالجنيه المصري" />
        <StatsCard title="الطلبات النشطة" value="٣٢٠" change="-3%" trend="down" icon={<ShoppingBag />} hint="تحتاج مراجعة" />
      </section>

      {/* Fonts + themes live */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Type className="size-5 text-primary" /> جرّب الخطوط العربية</CardTitle>
            <CardDescription>التبديل فوري — يُطبق على الصفحة كلها عبر TitanProvider</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <FontSwitcher />
            <p className="rounded-lg bg-muted p-4 text-lg leading-9">
              صُممت هذه المكتبة لفريق تايتنز سوفت بالقاهرة — ادعم لغتك أولًا، ثم ابنِ عالميًا.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Palette className="size-5 text-primary" /> جرّب السمات</CardTitle>
            <CardDescription>٥ سمات فاتح/داكن — كلها RTL-safe</CardDescription>
          </CardHeader>
          <CardContent>
            <ThemePresetSwitcher />
          </CardContent>
        </Card>
      </section>

      {/* Agent-first */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Copy className="size-5 text-primary" /> للمطور: انسخ والصق</CardTitle>
            <CardDescription>بدون npm install للمكتبة — انسخ الملفات مباشرة</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock code={QUICK_INSTALL} lang="bash" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bot className="size-5 text-primary" /> للوكيل: برومبت واحد</CardTitle>
            <CardDescription>الصق هذا في Cursor / Copilot / Claude مع registry.json</CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock code={AGENT_PROMPT} lang="md" />
          </CardContent>
        </Card>
      </section>

      {/* Registry index preview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-extrabold"><Languages className="size-5 text-primary" /> فهرس الريجستري ({items.length})</h2>
          <Button variant="outline" size="sm" asChild><Link href="/components">عرض الكل</Link></Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.slice(0, 8).map((i) => (
            <Link key={i.name} href={`/components/${i.name}`} className="rounded-xl border p-4 transition-all hover:border-primary hover:shadow-md">
              <p className="font-bold">{i.titleAr}</p>
              <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">{i.name}</p>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{i.descriptionAr}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
