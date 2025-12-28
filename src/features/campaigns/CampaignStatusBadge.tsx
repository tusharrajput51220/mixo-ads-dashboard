import { CampaignStatus } from "@/types/campaign";

const COLORS: Record<CampaignStatus, string> = {
  active: "#16a34a",
  paused: "#f59e0b",
  completed: "#6b7280",
};

export function CampaignStatusBadge({ status }: { status: CampaignStatus }) {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        color: "#fff",
        backgroundColor: COLORS[status],
        textTransform: "capitalize",
      }}
    >
      {status}
    </span>
  );
}
