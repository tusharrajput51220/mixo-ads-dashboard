import { useState, useEffect } from "react";
import { Campaign } from "@/types/campaign";
import { apiFetch } from "@/api/client";

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    apiFetch<{ campaigns: Campaign[] }>("/campaigns")
      .then((data) => {
        if (isMounted) setCampaigns(data.campaigns);
      })
      .catch((err) => {
        if (isMounted)
          setError(err.message || "Failed to fetch campaigns");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { campaigns, loading, error };
}
