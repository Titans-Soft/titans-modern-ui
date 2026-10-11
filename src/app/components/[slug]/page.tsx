import { notFound } from "next/navigation";
import Link from "next/link";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { ComponentPreview } from "@/components/titans/component-preview";
import { CodeBlock } from "@/components/titans/code-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRegistryItem, getRegistryNames } from "@/lib/registry";
import { DemoPreview } from "@/components/docs/demos";
import { ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return getRegistryNames().map((name) => ({ slug: name }));
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const item = getRegistryItem(params.slug);
  if (!item) notFound();

  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-6">
        <Link href="/components" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowRight className="size-4" /> كل المكوّنات
        </Link>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-3xl font-black">{item.titleAr}</h1>
            <Badge variant="secondary" className="font-mono" dir="ltr">{item.name}</Badge>
            <Badge variant="outline">{item.category}</Badge>
          </div>
          <p className="mt-2 text-muted-foreground">{item.descriptionAr}</p>
          {item.dependencies.length > 0 && (
            <p className="mt-2 font-mono text-xs text-muted-foreground" dir="ltr">
              deps: {item.dependencies.join(" · ")}
            </p>
          )}
        </div>

        <ComponentPreview preview={<DemoPreview name={item.name} />} code={item.usage} prompt={item.prompt} />

        <section className="space-y-2">
          <h2 className="font-extrabold">الملفات (انسخها بهذه المسارات)</h2>
          <CodeBlock lang="bash" code={item.files.map((f) => `# ${f.type} → ${f.path}`).join("\n")} />
        </section>

        <section className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`/r/${item.name}.json`} download dir="ltr">⬇ registry/{item.name}.json</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/prompts">برومبتات جاهزة</Link>
          </Button>
        </section>
      </article>
    </div>
  );
}
