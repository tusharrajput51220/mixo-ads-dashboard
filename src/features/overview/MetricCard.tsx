interface MetricCardProps {
  title: string;
  value: string | number;
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
        {title}
      </div>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</div>
    </div>
  );
}
