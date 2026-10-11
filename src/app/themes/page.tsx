import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { TITAN_THEMES } from "@/lib/themes";
import { ThemePresetSwitcher } from "@/components/titans/theme-preset-switcher";
import { ThemeSwitcher } from "@/components/titans/theme-switcher";
import { CodeBlock } from "@/components/titans/code-block";

export default function ThemesPage() {
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black">السمات (فاتح / داكن + ٥ هويات)</h1>
            <p className="mt-2 text-muted-foreground">كل سمة = كلاس <code dir="ltr">.theme-*</code> يبدّل متغيرات shadcn في <code dir="ltr">globals.css</code>. الوضع الليلي عبر <code dir="ltr">next-themes</code>.</p>
          </div>
          <ThemeSwitcher />
        </div>
        <ThemePresetSwitcher />
        <div className="grid gap-3 sm:grid-cols-2">
          {TITAN_THEMES.map((t) => (
            <div key={t.id} className="rounded-xl border p-4">
              <p className="font-bold">{t.nameAr} <span className="font-mono text-xs text-muted-foreground" dir="ltr">.{t.cssClass}</span></p>
              <p className="text-sm text-muted-foreground">{t.descriptionAr}</p>
            </div>
          ))}
        </div>
        <CodeBlock
          lang="tsx"
          code={`import { useTitan } from "@/components/providers";
const { themeId, setThemeId } = useTitan();
// setThemeId("oasis" | "sand" | "midnight" | "plum" | "titans");
// <html class="theme-oasis"> يبدّل --primary و --accent تلقائيًا`}
        />
      </article>
    </div>
  );
}
