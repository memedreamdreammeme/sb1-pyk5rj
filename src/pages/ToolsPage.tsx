import { SpaceBackground } from "@/components/layout/SpaceBackground";
import { SimpleLaunchTools } from "@/components/tools/SimpleLaunchTools";
import { SocialTools } from "@/components/tools/SocialTools";
import { AdvancedLaunchTools } from "@/components/tools/AdvancedLaunchTools";

export function ToolsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SpaceBackground className="absolute inset-0" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[128px] animate-pulse delay-500" />
      </div>

      <div className="relative p-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SimpleLaunchTools />
            <AdvancedLaunchTools />
          </div>
          <SocialTools />
        </div>
      </div>
    </div>
  );
}