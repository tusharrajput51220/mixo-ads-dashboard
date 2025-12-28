import { useRouter } from "next/router";
import { Campaign } from "@/types/campaign";
import { CampaignStatusBadge } from "./CampaignStatusBadge";
import { formatCurrency } from "@/utils/formatCurrency";

export function CampaignRow({ campaign }: { campaign: Campaign }) {
  const router = useRouter();

  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => router.push(`/campaigns/${campaign.id}`)}
    >
      <td>{campaign.name}</td>
      <td>
        <CampaignStatusBadge status={campaign.status} />
      </td>
      <td>{formatCurrency(campaign.budget)}</td>
      <td>{formatCurrency(campaign.daily_budget)}</td>
      <td>{campaign.platforms.join(", ")}</td>
    </tr>
  );
}
