import React from "react";

interface CardProps {
  title: string;
  value: React.ReactNode;
}

export function Card({ title, value }: CardProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ fontSize: "12px", color: "#666" }}>{title}</div>
      <div style={{ fontSize: "20px", fontWeight: 600 }}>{value}</div>
    </div>
  );
}
