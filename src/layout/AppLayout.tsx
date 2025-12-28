import { ReactNode } from "react";
import { Header } from "./Header";
import { ErrorBoundary } from "./ErrorBoundary";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
        <Header />
        {children}
      </div>
    </ErrorBoundary>
  );
}
