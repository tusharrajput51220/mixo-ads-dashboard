import { useEffect, useState } from "react";
import { getAggregateInsights } from "@/api/campaigns";
import { AggregateInsights } from "@/types/insights";

export function useAggregateInsights() {
  const [insights, setInsights] = useState<AggregateInsights | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    getAggregateInsights()
      .then((data) => {
        if (!mounted) return;
        setInsights(data.insights);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Failed to load insights");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { insights, loading, error };
}
