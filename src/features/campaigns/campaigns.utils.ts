import { Campaign, CampaignStatus } from "@/types/campaign";

export function filterCampaigns(
  campaigns: Campaign[],
  status: CampaignStatus | "all",
  search: string
): Campaign[] {
  return campaigns.filter((campaign) => {
    const statusMatch =
      status === "all" ? true : campaign.status === status;

    const searchMatch = campaign.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return statusMatch && searchMatch;
  });
}
