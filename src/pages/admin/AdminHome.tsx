import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Quản lý Users/Roles</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) Duyệt user, phân role, khóa tài khoản vi phạm.
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Moderation</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) Báo cáo nội dung, xử lý spam job, audit log.
        </CardContent>
      </Card>
    </div>
  );
}
