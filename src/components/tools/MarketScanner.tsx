import { Scan, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MarketScanner() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Scan className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Market Scanner</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs gap-2">
          <RefreshCw className="w-3 h-3" />
          Scan Now
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Volume Range</Label>
          <div className="flex gap-4">
            <Input 
              placeholder="Min volume" 
              className="bg-white/[0.02] border-white/10"
            />
            <Input 
              placeholder="Max volume" 
              className="bg-white/[0.02] border-white/10"
            />
          </div>
        </div>
        <Button className="w-full">Start Scanning</Button>
      </div>
    </div>
  );
}