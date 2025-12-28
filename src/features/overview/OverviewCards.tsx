import { MetricCard } from "./MetricCard";
import { useAggregateInsights } from "@/hooks/useAggregateInsights";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatNumber } from "@/utils/formatNumber";

export function OverviewCards() {
  const { insights, loading, error } = useAggregateInsights();

  if (loading) return <div>Loading overview...</div>;
  if (error || !insights) return <div>Failed to load overview</div>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      <MetricCard title="Total Campaigns" value={insights.total_campaigns} />
      <MetricCard title="Active Campaigns" value={insights.active_campaigns} />
      <MetricCard
        title="Total Spend"
        value={formatCurrency(insights.total_spend)}
      />
      <MetricCard
        title="Impressions"
        value={formatNumber(insights.total_impressions)}
      />
      <MetricCard title="Clicks" value={formatNumber(insights.total_clicks)} />
      <MetricCard title="Avg CTR" value={`${insights.avg_ctr}%`} />
    </div>
  );
}
