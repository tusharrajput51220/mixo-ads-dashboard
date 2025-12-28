import { ReactNode } from "react";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>Campaign Dashboard</h1>
      {children}
    </div>
  );
}
