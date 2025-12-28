import { useState } from "react";
import { useCampaigns } from "@/hooks/useCampaigns";
import { CampaignRow } from "./CampaignRow";
import { CampaignFilters } from "./CampaignFilters";
import { filterCampaigns } from "./campaigns.utils";
import { CampaignStatus } from "@/types/campaign";

export function CampaignTable() {
  const { campaigns, loading, error } = useCampaigns();

  const [status, setStatus] = useState<CampaignStatus | "all">("all");
  const [search, setSearch] = useState("");

  if (loading) return <div>Loading campaigns...</div>;
  if (error) return <div>Error loading campaigns</div>;

  const filteredCampaigns = filterCampaigns(campaigns, status, search);

  if (!filteredCampaigns.length) {
    return <div>No campaigns match the filters</div>;
  }

  return (
    <div>
      <CampaignFilters
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      <div style={{ background: "#fff", borderRadius: 8, padding: 16 }}>
        <table width="100%" cellPadding={8}>
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th>Name</th>
              <th>Status</th>
              <th>Total Budget</th>
              <th>Daily Budget</th>
              <th>Platform</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.map((campaign) => (
              <CampaignRow key={campaign.id} campaign={campaign} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
