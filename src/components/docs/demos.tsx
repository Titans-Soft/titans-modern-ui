"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StatsCard } from "@/components/titans/stats-card";
import { AuthCard } from "@/components/titans/auth-card";
import { DashboardShell } from "@/components/titans/dashboard-shell";
import { EmptyState } from "@/components/titans/empty-state";
import { PageHeader } from "@/components/titans/page-header";
import { ArrowLeft, Inbox, Users } from "lucide-react";

/** Live preview per registry name. Keep small — docs only. */
export function DemoPreview({ name }: { name: string }) {
  switch (name) {
    case "button":
      return (
        <div className="flex flex-wrap items-center gap-2">
          <Button>حفظ التغييرات</Button>
          <Button variant="secondary">إلغاء</Button>
          <Button variant="outline">عرض <ArrowLeft className="flip-rtl size-4" /></Button>
          <Button variant="ghost">تجاهل</Button>
          <Button variant="destructive">حذف</Button>
        </div>
      );
    case "input":
      return (
        <div className="grid max-w-sm gap-3">
          <div className="space-y-1.5"><Label>الاسم الكامل</Label><Input placeholder="مثال: أحمد محمود" /></div>
          <div className="space-y-1.5"><Label>البريد الإلكتروني</Label><Input dir="ltr" className="text-left" placeholder="name@titansoft.eg" /></div>
        </div>
      );
    case "textarea":
      return <Textarea className="max-w-sm" placeholder="اكتب ملاحظاتك هنا…" />;
    case "label":
      return (
        <div className="flex items-center gap-2">
          <Checkbox id="d-terms" /><Label htmlFor="d-terms">أوافق على الشروط والأحكام</Label>
        </div>
      );
    case "card":
      return (
        <Card className="max-w-sm">
          <CardHeader><CardTitle>تسجيل الدخول</CardTitle><CardDescription>أدخل بياناتك للمتابعة</CardDescription></CardHeader>
          <CardContent className="space-y-3"><Input placeholder="البريد الإلكتروني" /><Button className="w-full">دخول</Button></CardContent>
        </Card>
      );
    case "badge":
      return (
        <div className="flex flex-wrap gap-2">
          <Badge>جديد</Badge><Badge variant="secondary">مسودة</Badge><Badge variant="outline">مؤرشف</Badge>
          <Badge variant="success">مدفوع</Badge><Badge variant="warning">قيد المراجعة</Badge><Badge variant="destructive">متأخر</Badge>
        </div>
      );
    case "alert":
      return (
        <div className="grid max-w-lg gap-2">
          <Alert variant="success"><AlertTitle>تم الحفظ بنجاح</AlertTitle><AlertDescription>تم تحديث بيانات العميل.</AlertDescription></Alert>
          <Alert variant="warning"><AlertTitle>تنبيه</AlertTitle><AlertDescription>الفواتير المتأخرة: ٣ فواتير.</AlertDescription></Alert>
        </div>
      );
    case "tabs":
      return (
        <Tabs defaultValue="overview" className="max-w-md">
          <TabsList><TabsTrigger value="overview">نظرة عامة</TabsTrigger><TabsTrigger value="orders">الطلبات</TabsTrigger><TabsTrigger value="settings">الإعدادات</TabsTrigger></TabsList>
          <TabsContent value="overview"><p className="rounded-lg border p-4 text-sm">محتوى النظرة العامة هنا.</p></TabsContent>
          <TabsContent value="orders"><p className="rounded-lg border p-4 text-sm">قائمة الطلبات هنا.</p></TabsContent>
          <TabsContent value="settings"><p className="rounded-lg border p-4 text-sm">الإعدادات هنا.</p></TabsContent>
        </Tabs>
      );
    case "table":
      return (
        <Table>
          <TableHeader><TableRow><TableHead>العميل</TableHead><TableHead>الحالة</TableHead><TableHead>المبلغ</TableHead></TableRow></TableHeader>
          <TableBody>
            <TableRow><TableCell>أحمد محمود</TableCell><TableCell><Badge variant="success">مدفوع</Badge></TableCell><TableCell>١٬٢٥٠ ج.م</TableCell></TableRow>
            <TableRow><TableCell>سارة علي</TableCell><TableCell><Badge variant="warning">قيد المراجعة</Badge></TableCell><TableCell>٨٤٠ ج.م</TableCell></TableRow>
          </TableBody>
        </Table>
      );
    case "avatar":
      return (
        <div className="flex items-center gap-3">
          <Avatar><AvatarFallback>أم</AvatarFallback></Avatar>
          <div><p className="text-sm font-bold">أحمد محمود</p><p className="text-xs text-muted-foreground">مهندس واجهات — Titansoft</p></div>
        </div>
      );
    case "separator":
      return (
        <div className="max-w-sm"><p className="text-sm font-bold">الملف الشخصي</p><Separator className="my-3" /><p className="text-sm text-muted-foreground">تفاصيل الحساب والإعدادات.</p></div>
      );
    case "switch":
      return (
        <div className="flex items-center gap-2"><Switch id="d-notif" defaultChecked /><Label htmlFor="d-notif">تفعيل الإشعارات</Label></div>
      );
    case "checkbox":
      return (
        <div className="flex items-center gap-2"><Checkbox id="d-agree" defaultChecked /><Label htmlFor="d-agree">أوافق على الشروط</Label></div>
      );
    case "dialog":
      return (
        <Dialog>
          <DialogTrigger asChild><Button variant="outline">فتح النافذة</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>تأكيد الحذف</DialogTitle><DialogDescription>هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء.</DialogDescription></DialogHeader>
            <div className="flex gap-2"><Button variant="destructive">حذف</Button><Button variant="outline">إلغاء</Button></div>
          </DialogContent>
        </Dialog>
      );
    case "stats-card":
      return (
        <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
          <StatsCard title="إجمالي المستخدمين" value="١٢٬٤٥٠" change="+12%" trend="up" icon={<Users />} />
          <StatsCard title="الإيرادات" value="٤٥٬٢٠٠ ج.م" change="+8%" trend="up" />
        </div>
      );
    case "auth-card":
      return (
        <AuthCard title="تسجيل الدخول" description="مرحبًا بعودتك" logo="T">
          <Input placeholder="البريد الإلكتروني" /><Input type="password" placeholder="كلمة المرور" /><Button className="w-full">دخول</Button>
        </AuthCard>
      );
    case "dashboard-shell":
      return (
        <DashboardShell title="لوحة التحكم" description="نظرة عامة">
          <div className="grid gap-3 sm:grid-cols-2"><StatsCard title="المستخدمون" value="١٢٬٤٥٠" change="+12%" trend="up" /><StatsCard title="الطلبات" value="٣٢٠" change="-3%" trend="down" /></div>
        </DashboardShell>
      );
    case "empty-state":
      return <EmptyState icon={<Inbox />} title="لا توجد بيانات" description="ابدأ بإضافة أول عنصر." action={<Button>إضافة جديد</Button>} />;
    case "page-header":
      return <PageHeader title="إدارة العملاء" description="٣٢٠ عميل نشط" actions={<Button>عميل جديد</Button>} />;
    default:
      return <p className="text-sm text-muted-foreground">لا توجد معاينة — انسخ الكود من تبويب الكود.</p>;
  }
}
