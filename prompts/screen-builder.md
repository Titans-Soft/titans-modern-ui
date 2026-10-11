# برومبت: بناء شاشة كاملة (screen-builder)

ابن صفحة Next.js App Router كاملة (page.tsx) بمكتبة titans-modern-ui.

## المدخلات
- النوع: auth او dashboard او table او settings.
- الكيانات والحقول: (اذكرها هنا).
- الاجراءات: (اضافة/تعديل/حذف/تصدير).

## القواعد
- استخدم DashboardShell مع PageHeader مع StatsCard مع Table مع EmptyState حسب الحاجة.
- عربية كاملة، والاتجاه موروث من layout — لا تضف dir يدويا الا للحقول اللاتينية.
- Server Component افتراضيا؛ use client فقط للتفاعلية.
- الارقام tnum والمبالغ بالجنيه (ج.م).

## المخرجات
1. ملف page.tsx واحد جاهز للصق.
2. قائمة الملفات المنسوخة من registry.
3. تعليمات الربط بالـ API الخاص بـ .NET ان وجد.
