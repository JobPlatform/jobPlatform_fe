import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-muted/20">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
