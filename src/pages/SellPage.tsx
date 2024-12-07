import { SpaceBackground } from "@/components/layout/SpaceBackground";
import { WalletList } from "@/components/sell/WalletList";
import { SellForm } from "@/components/sell/SellForm";
import { MarketStats } from "@/components/sell/MarketStats";
import { LiveTxnLogs } from "@/components/sell/LiveTxnLogs";

export function SellPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SpaceBackground className="absolute inset-0" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[128px] animate-pulse delay-500" />
      </div>

      <div className="relative p-8">
        <div className="grid grid-cols-1 gap-8">
          <MarketStats />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WalletList />
            <div className="space-y-8">
              <SellForm />
              <LiveTxnLogs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}