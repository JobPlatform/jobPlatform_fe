export type Role = "candidate" | "employer" | "admin" | "system";

export const ROLE_LABEL: Record<Role, string> = {
  candidate: "Candidate",
  employer: "Employer",
  admin: "Admin",
  system: "System/Worker",
};
