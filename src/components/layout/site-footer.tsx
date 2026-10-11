export function SiteFooter() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:flex-row">
        <p>
          تايتنز UI — مكتبة داخلية لفريق <span className="font-bold text-foreground">Titansoft</span> · القاهرة، مصر
        </p>
        <p className="font-mono" dir="ltr">
          registry.json · llms.txt · AGENTS.md
        </p>
      </div>
    </footer>
  );
}
