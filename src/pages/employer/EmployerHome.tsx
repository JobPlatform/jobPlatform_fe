import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EmployerHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Đăng tin tuyển dụng</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) Tạo job, preview, publish, quản lý job.
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Ứng viên</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) Lọc ứng viên, xem hồ sơ, chat, hẹn lịch.
        </CardContent>
      </Card>
    </div>
  );
}
