import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { CodeBlock } from "@/components/titans/code-block";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

const PROMPTS = [
  {
    id: "use-component",
    titleAr: "استخدام مكوّن موجود",
    body: `أنت تبني شاشة عربية (RTL) بمكتبة titans-modern-ui.\n\nالسياق:\n- اقرأ registry.json واختر المكوّنات المطلوبة.\n- انسخ ملفاتها من registry/<name>.json إلى نفس المسارات في src/.\n- حافظ على dir="rtl" lang="ar" وخط Cairo.\n\nالمهمة: <صف الشاشة هنا>\nالقواعد:\n- استخدم cn() لأي className إضافي.\n- الأيقونات الاتجاهية (أسهم) أضف flip-rtl.\n- الأرقام والمبالغ: tnum + أرقام عربية (١٢٬٤٥٠) أو لاتينية حسب السياق.\n- تحقق من تباين الوضع الداكن.`,
  },
  {
    id: "new-component",
    titleAr: "إنشاء مكوّن جديد بنفس المعايير",
    body: `أنشئ مكوّن shadcn جديد باسم <Name> لمكتبة titans-modern-ui.\n\nالمتطلبات:\n- new-york style، TypeScript + forwardRef، يدعم className عبر cn().\n- RTL-native: استخدم logical props (start/end, ps/pe, text-start) — ممنوع ml/mr و left/right.\n-serrat: cva variants (default/secondary/outline/ghost) + sizes.\n- وثّق عربيًا: JSDoc يشرح ملاحظات RTL.\n- أضف registry/<name>.json (name, titleAr/En, files, usage, prompt).\n- أضف معاينة في src/components/docs/demos.tsx وسجل الاسم في registry.json.`,
  },
  {
    id: "rtl-review",
    titleAr: "مراجعة RTL وجودة عربية",
    body: `راجع هذا الملف بحثًا عن مشاكل RTL/عربية:\n\n- ابحث عن ml-/mr- و left-/right- و text-left/text-right و space-x- — استبدلها بـ ms-/me- و start/end و gap.\n- تأكد أن الأيقونات الاتجاهية تحمل flip-rtl وغير الاتجاهية لا تحملها.\n- تأكد أن inputs العربية بدون dir="ltr" وأن الإيميلات/الأرقام اللاتينية تحمل dir="ltr".\n- تأكد أن الجداول تستخدم text-start وأن أول عمود يظهر يمينًا في RTL.\n- اقترح خطًا من ARABIC_FONTS حسب السياق (لوحة: plex-arabic، تسويق: kufi/alexandria).\n\nأخرج: قائمة المشاكل + الكود المصحح.`,
  },
  {
    id: "screen-builder",
    titleAr: "بناء شاشة كاملة (Auth/Dashboard/Table)",
    body: `ابنِ صفحة Next.js App Router كاملة (page.tsx) بمكتبة titans-modern-ui:\n\n- النوع: <auth | dashboard | table | settings>\n- استخدم DashboardShell + PageHeader + StatsCard + Table + EmptyState حسب الحاجة.\n- عربية كاملة، dir موروث من layout، لا تضف dir يدويًا إلا للحقول اللاتينية.\n- Server Component افتراضيًا؛ "use client" فقط للتفاعلية.\n- سلّم ملفًا واحدًا جاهزًا للصق + قائمة الملفات المنسوخة من registry.`,
  },
];

export default function PromptsPage() {
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-6">
        <div>
          <h1 className="flex items-center gap-2 text-3xl font-black"><Bot className="size-7 text-primary" /> مكتبة البرومبتات للوكلاء</h1>
          <p className="mt-2 text-muted-foreground">انسخ أي برومبت إلى Cursor / Copilot / Claude / v0 — كلها تفترض قراءة <code dir="ltr">registry.json</code> و <code dir="ltr">AGENTS.md</code> أولًا.</p>
        </div>
        {PROMPTS.map((p) => (
          <Card key={p.id}>
            <CardHeader><CardTitle id={p.id} className="scroll-mt-20">{p.titleAr} <span className="font-mono text-xs text-muted-foreground" dir="ltr">#{p.id}</span></CardTitle></CardHeader>
            <CardContent><CodeBlock code={p.body} lang="md" /></CardContent>
          </Card>
        ))}
      </article>
    </div>
  );
}
