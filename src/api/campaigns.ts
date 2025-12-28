import { apiFetch } from "./client";
import {
  CampaignListResponse,
  CampaignDetailsResponse,
} from "@/types/campaign";
import {
  AggregateInsightsResponse,
  CampaignInsightsResponse,
} from "@/types/insights";

export const getCampaigns = () =>
  apiFetch<CampaignListResponse>("/campaigns");

export const getCampaignById = (id: string) =>
  apiFetch<CampaignDetailsResponse>(`/campaigns/${id}`);

export const getAggregateInsights = () =>
  apiFetch<AggregateInsightsResponse>("/campaigns/insights");

export const getCampaignInsights = (id: string) =>
  apiFetch<CampaignInsightsResponse>(`/campaigns/${id}/insights`);
