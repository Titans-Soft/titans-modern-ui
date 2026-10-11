# برومبت: انشاء مكون جديد (new-component)

انشئ مكون shadcn جديد باسم ComponentName لمكتبة titans-modern-ui.

## المتطلبات
- نمط new-york، TypeScript مع forwardRef، ويقبل className عبر cn.
- المتغيرات عبر cva (على الاقل: default / secondary / outline / ghost).
- RTL-native: استخدم start/end و ps/pe و text-start و gap فقط.
  ممنوع: ml و mr و left و right و text-left/right و space-x.
- Server Component افتراضيا؛ اضف use client فقط للتفاعلية (Radix).
- JSDoc عربي يشرح ملاحظات RTL.
- اضف registry entry (name kebab-case, titleAr/En, files, usage, prompt).
- اضف معاينة في src/components/docs/demos.tsx وسجل الاسم في registry.json.
- شغل: npm run registry:build ثم registry:validate ثم typecheck.
