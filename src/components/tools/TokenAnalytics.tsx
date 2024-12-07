import { BarChart3, TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TokenAnalytics() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Token Analytics</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <Input 
            placeholder="Enter token address" 
            className="bg-white/[0.02] border-white/10"
          />
          <Button className="shrink-0">Analyze</Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Market Cap</span>
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-lg font-semibold text-white/90 mt-2">$0.00</p>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">24h Volume</span>
              <ArrowUpRight className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-lg font-semibold text-white/90 mt-2">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}