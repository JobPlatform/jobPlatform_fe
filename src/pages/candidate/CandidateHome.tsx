import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CandidateHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Tìm việc</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) Search + filter + danh sách job + lưu job + ứng tuyển 1 chạm.
        </CardContent>
      </Card>
      <Card className="rounded-2xl">
        <CardHeader><CardTitle>Hồ sơ & Ứng tuyển</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          (Sắp làm) CV, kỹ năng, job đã apply, chat với nhà tuyển dụng.
        </CardContent>
      </Card>
    </div>
  );
}
