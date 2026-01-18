import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import AppShell from "@/components/layout/AppShell";

import Landing from "@/pages/Landing";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import CandidateHome from "@/pages/candidate/CandidateHome";
import EmployerHome from "@/pages/employer/EmployerHome";
import AdminHome from "@/pages/admin/AdminHome";

import { RequireAuth, RequireRole } from "@/auth/RequireRole";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/app",
    element: <RequireAuth />,
    children: [
      {
        element: <AppShell />,
        children: [
          { index: true, element: <CandidateHome /> }, // default entry
          {
            element: <RequireRole allow={["candidate"]} />,
            children: [{ path: "candidate", element: <CandidateHome /> }],
          },
          {
            element: <RequireRole allow={["employer"]} />,
            children: [{ path: "employer", element: <EmployerHome /> }],
          },
          {
            element: <RequireRole allow={["admin"]} />,
            children: [{ path: "admin", element: <AdminHome /> }],
          },
        ],
      },
    ],
  },
]);
