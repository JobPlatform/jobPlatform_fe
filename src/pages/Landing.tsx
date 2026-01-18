import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Tìm việc nhanh. Đăng tuyển gọn. Trải nghiệm mượt.
          </h1>
          <p className="text-muted-foreground">
            JobSeek tối ưu thao tác: tìm kiếm, ứng tuyển, quản lý hồ sơ và đăng tin tuyển dụng.
          </p>
          <div className="flex gap-2">
            <Button asChild><Link to="/register">Bắt đầu</Link></Button>
            <Button variant="outline" asChild><Link to="/login">Tôi đã có tài khoản</Link></Button>
          </div>
        </div>

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Luồng chính</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div>• Candidate: tìm job → lưu → ứng tuyển → chat</div>
            <div>• Employer: đăng job → lọc ứng viên → chat → hẹn lịch</div>
            <div>• Admin: quản lý user/role, duyệt/khóa</div>
            <div>• System/Worker: tác vụ nền (match, notification)</div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Tìm kiếm mạnh", "Filter rõ ràng, kết quả nhanh."],
          ["Ứng tuyển 1 chạm", "Hạn chế form dài, ưu tiên thao tác ít."],
          ["Quản trị an toàn", "Role-based UI và route guard."],
        ].map(([t, d]) => (
          <Card key={t} className="rounded-2xl">
            <CardHeader><CardTitle className="text-base">{t}</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">{d}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
