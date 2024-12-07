import { Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function TokenSniper() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Crosshair className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Token Sniper</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          Start Sniping
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-buy">Auto Buy</Label>
          <Switch id="auto-buy" />
        </div>
        <Input 
          placeholder="Max buy amount (SOL)" 
          className="bg-white/[0.02] border-white/10"
        />
        <Input 
          placeholder="Min liquidity (SOL)" 
          className="bg-white/[0.02] border-white/10"
        />
      </div>
    </div>
  );
}