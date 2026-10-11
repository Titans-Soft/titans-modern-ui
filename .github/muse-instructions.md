# Titans Modern UI — Copilot instructions

This repo is an internal Arabic-first shadcn/ui library (Next.js App Router).
Before generating UI code: read AGENTS.md, then registry.json.

- Default `<html lang="ar" dir="rtl">`. Logical CSS props only (start/end, ps/pe, gap).
- Never emit ml-/mr-/left-/right-/text-left/text-right/space-x- utilities.
- Directional icons (arrows/chevrons) get `flip-rtl`; others do not.
- Fonts via next/font/google from src/lib/fonts.ts (default font-cairo).
- Themes via useTitan().setThemeId() (titans/oasis/sand/midnight/plum) + next-themes.
- Copy-paste model: copy files listed in registry/[name].json to identical paths; always include src/lib/utils.ts.
- Numbers/KPIs: tnum class; JSDoc in Arabic where helpful.
