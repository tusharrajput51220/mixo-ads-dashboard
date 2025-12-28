export type CampaignStatus = "active" | "paused" | "completed";

export interface Campaign {
  id: string;
  name: string;
  brand_id: string;
  status: CampaignStatus;
  budget: number;
  daily_budget: number;
  platforms: string[];
  created_at: string;
}

export interface CampaignListResponse {
  campaigns: Campaign[];
  total: number;
}

export interface CampaignDetailsResponse {
  campaign: Campaign;
}
