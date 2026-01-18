import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/auth/AuthContext";
import { ROLE_LABEL, type Role } from "@/auth/roles";

export default function TopNav() {
  const { user, logout, login } = useAuth();
  const nav = useNavigate();

  const switchRole = (role: Role) => {
    if (!user) return;
    login(user.email, role);
    nav("/app");
  };

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/app" className="font-semibold">JobSeek</Link>

        <div className="flex items-center gap-2">
          {user && (
            <>
              <Badge variant="secondary">{ROLE_LABEL[user.role]}</Badge>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">Switch role</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => switchRole("candidate")}>Candidate</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => switchRole("employer")}>Employer/Recruiter</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => switchRole("admin")}>Admin</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => switchRole("system")}>System/Worker</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => { logout(); nav("/"); }}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
