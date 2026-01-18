import React from "react";
import type { Role } from "./roles";

type User = { email: string; role: Role };

type AuthState = {
  user: User | null;
  login: (email: string, role: Role) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthState | null>(null);

const STORAGE_KEY = "jobseek_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  });

  const login = (email: string, role: Role) => {
    const u = { email, role };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
