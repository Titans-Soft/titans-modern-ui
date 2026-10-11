import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { AuthCard } from "@/components/titans/auth-card";
import { DashboardShell } from "@/components/titans/dashboard-shell";
import { StatsCard } from "@/components/titans/stats-card";
import { EmptyState } from "@/components/titans/empty-state";
import { ComponentPreview } from "@/components/titans/component-preview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Inbox, ShoppingBag, Users, Wallet } from "lucide-react";

const AUTH_CODE = `import { AuthCard } from "@/components/titans/auth-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<AuthCard title="تسجيل الدخول" description="مرحبًا بعودتك إلى لوحة تايتنز" logo="T">
  <div className="space-y-2">
    <Label htmlFor="email">البريد الإلكتروني</Label>
    <Input id="email" type="email" placeholder="name@titansoft.eg" dir="ltr" className="text-left" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">كلمة المرور</Label>
    <Input id="password" type="password" placeholder="••••••••" />
  </div>
  <Button className="w-full">دخول</Button>
</AuthCard>`;

const DASH_CODE = `import { DashboardShell } from "@/components/titans/dashboard-shell";
import { StatsCard } from "@/components/titans/stats-card";

<DashboardShell title="لوحة التحكم الرئيسية" description="نظرة عامة على نشاط اليوم">
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    <StatsCard title="إجمالي المستخدمين" value="١٢٬٤٥٠" change="+12%" trend="up" />
    <StatsCard title="الإيرادات" value="٤٥٬٢٠٠ ج.م" change="+8%" trend="up" />
    <StatsCard title="الطلبات النشطة" value="٣٢٠" change="-3%" trend="down" />
  </div>
</DashboardShell>`;

export default function ScreensPage() {
  return (
    <div className="flex gap-8">
      <DocsSidebar />
      <article className="max-w-4xl flex-1 space-y-10">
        <div>
          <h1 className="text-3xl font-black">الشاشات الجاهزة</h1>
          <p className="mt-2 text-muted-foreground">قوالب عربية كاملة — انسخها كصفحة <code dir="ltr">page.tsx</code> وعدّل النصوص.</p>
        </div>

        <section id="auth" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-extrabold">تسجيل الدخول — AuthCard</h2>
          <ComponentPreview
            code={AUTH_CODE}
            preview={
              <AuthCard title="تسجيل الدخول" description="مرحبًا بعودتك إلى لوحة تايتنز" logo="T">
                <div className="space-y-2">
                  <Label htmlFor="demo-email">البريد الإلكتروني</Label>
                  <Input id="demo-email" type="email" placeholder="name@titansoft.eg" dir="ltr" className="text-left" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-pass">كلمة المرور</Label>
                  <Input id="demo-pass" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full">دخول</Button>
              </AuthCard>
            }
          />
        </section>

        <section id="dashboard" className="scroll-mt-20 space-y-3">
          <h2 className="text-xl font-extrabold">لوحة التحكم — DashboardShell + StatsCard</h2>
          <ComponentPreview
            code={DASH_CODE}
            preview={
              <DashboardShell title="لوحة التحكم الرئيسية" description="نظرة عامة على نشاط اليوم">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <StatsCard title="إجمالي المستخدمين" value="١٢٬٤٥٠" change="+12%" trend="up" icon={<Users />} />
                  <StatsCard title="الإيرادات" value="٤٥٬٢٠٠ ج.م" change="+8%" trend="up" icon={<Wallet />} />
                  <StatsCard title="الطلبات النشطة" value="٣٢٠" change="-3%" trend="down" icon={<ShoppingBag />} />
                </div>
                <Table>
                  <TableHeader><TableRow><TableHead>العميل</TableHead><TableHead>الحالة</TableHead><TableHead>المبلغ</TableHead></TableRow></TableHeader>
                  <TableBody>
                    <TableRow><TableCell>أحمد محمود</TableCell><TableCell>مدفوع</TableCell><TableCell>١٬٢٥٠ ج.م</TableCell></TableRow>
                    <TableRow><TableCell>سارة علي</TableCell><TableCell>قيد المراجعة</TableCell><TableCell>٨٤٠ ج.م</TableCell></TableRow>
                  </TableBody>
                </Table>
              </DashboardShell>
            }
          />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-extrabold">الحالة الفارغة — EmptyState</h2>
          <EmptyState icon={<Inbox />} title="لا توجد بيانات بعد" description="ابدأ بإضافة أول عميل لتظهر البيانات هنا." action={<Button>إضافة عميل</Button>} />
        </section>
      </article>
    </div>
  );
}
