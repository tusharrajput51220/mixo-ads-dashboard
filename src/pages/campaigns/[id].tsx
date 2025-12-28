// src/pages/campaigns/[id].tsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AppLayout } from "@/layout/AppLayout";
import { Campaign } from "@/types/campaign";
import { apiFetch } from "@/api/client";

export default function CampaignDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    apiFetch<{ campaign: Campaign }>(`/campaigns/${id}`)
      .then((data) => {
        if (isMounted) setCampaign(data.campaign);
      })
      .catch((err) => {
        if (isMounted)
          setError(err.message || "Failed to fetch campaign");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <div>Loading campaign...</div>;
  if (error) return <div>{error}</div>;
  if (!campaign) return <div>Campaign not found</div>;

  return (
    <AppLayout>
      <h1>{campaign.name}</h1>

      <div style={{ marginTop: 16 }}>
        <p>
          <strong>Status:</strong> {campaign.status}
        </p>
        <p>
          <strong>Total Budget:</strong> ${campaign.budget}
        </p>
        <p>
          <strong>Daily Budget:</strong> ${campaign.daily_budget}
        </p>
        <p>
          <strong>Platforms:</strong> {campaign.platforms.join(", ")}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(campaign.created_at).toLocaleDateString()}
        </p>
      </div>
    </AppLayout>
  );
}
