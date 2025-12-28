import { CampaignStatus } from "@/types/campaign";

interface CampaignFiltersProps {
  status: CampaignStatus | "all";
  search: string;
  onStatusChange: (value: CampaignStatus | "all") => void;
  onSearchChange: (value: string) => void;
}

export function CampaignFilters({
  status,
  search,
  onStatusChange,
  onSearchChange,
}: CampaignFiltersProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "16px",
      }}
    >
      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value as CampaignStatus | "all")
        }
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="paused">Paused</option>
        <option value="completed">Completed</option>
      </select>

      <input
        type="text"
        placeholder="Search campaigns..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
