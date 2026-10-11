import Link from "next/link";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { getRegistry } from "@/lib/registry";
import { Badge } from "@/components/ui/badge";

export default function ComponentsIndex() {
  const items = getRegistry();
  const cats: Record<string, typeof items> = {};
  for (const i of items) (cats[i.category] ??= []).push(i);
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-black">فهرس المكوّنات ({items.length})</h1>
          <p className="mt-2 text-muted-foreground">كل بطاقة تفتح صفحة المكوّن: معاينة حيّة + كود النسخ + برومبت AI + ملف <code dir="ltr">registry/*.json</code>.</p>
        </div>
        {Object.entries(cats).map(([cat, list]) => (
          <section key={cat} className="space-y-3">
            <h2 className="font-extrabold"><Badge variant="secondary">{cat}</Badge></h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {list.map((i) => (
                <Link key={i.name} href={`/components/${i.name}`} className="rounded-xl border p-4 transition-all hover:border-primary hover:shadow-md">
                  <p className="font-bold">{i.titleAr}</p>
                  <p className="font-mono text-[11px] text-muted-foreground" dir="ltr">{i.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{i.descriptionAr}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
