import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";
import { ROLE_LABEL, type Role } from "@/auth/roles";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation() as any;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const role = String(fd.get("role") || "candidate") as Role;

    login(email, role);
    nav(loc?.state?.from || "/app");
  };

  return (
    <div className="mx-auto max-w-md">
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@email.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role (demo)</Label>
              <select
                id="role"
                name="role"
                className="h-10 w-full rounded-md border bg-background px-3 text-sm"
                defaultValue="candidate"
              >
                {Object.entries(ROLE_LABEL).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground">
                Demo chọn role để xem UI theo quyền. Sau này thay bằng API + token.
              </p>
            </div>

            <Button className="w-full" type="submit">Đăng nhập</Button>

            <div className="text-center text-sm text-muted-foreground">
              Chưa có tài khoản?{" "}
              <Link className="text-foreground underline" to="/register">Register</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
