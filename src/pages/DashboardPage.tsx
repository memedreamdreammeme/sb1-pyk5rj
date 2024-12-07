import { SpaceBackground } from "@/components/layout/SpaceBackground";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SpaceBackground className="absolute inset-0" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[128px] animate-pulse delay-500" />
      </div>

      <div className="relative p-8">
        <DashboardTabs />
      </div>
    </div>
  );
}