import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TradingCalculator() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Calculator className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Trading Calculator</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Input 
            placeholder="Entry price" 
            className="bg-white/[0.02] border-white/10"
          />
          <ArrowRight className="w-4 h-4 text-white/50" />
          <Input 
            placeholder="Exit price" 
            className="bg-white/[0.02] border-white/10"
          />
        </div>
        <Input 
          placeholder="Position size" 
          className="bg-white/[0.02] border-white/10"
        />
        <Button className="w-full">Calculate</Button>
      </div>
    </div>
  );
}