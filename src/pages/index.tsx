import { AppLayout } from "@/layout/AppLayout";
import { OverviewCards } from "@/features/overview/OverviewCards";
import { CampaignTable } from "@/features/campaigns/CampaignTable";

export default function Home() {
  return (
    <AppLayout>
      <OverviewCards />
      <CampaignTable />
    </AppLayout>
  );
}
