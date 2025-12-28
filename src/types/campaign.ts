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
  impressions: number;
  clicks: number;
  performance?: PerformanceData[];
}

export interface PerformanceData {
  date: string;
  clicks: number;
  impressions: number;
}

export interface CampaignListResponse {
  campaigns: Campaign[];
  total: number;
}

export interface CampaignDetailsResponse {
  campaign: Campaign;
}
