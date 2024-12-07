import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function BuyBackDialog() {
  const [solAmount, setSolAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buy back:", { solAmount });
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Buy Back</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="solAmount">Amount of SOL to buy back in with</Label>
          <Input
            id="solAmount"
            type="number"
            min="0"
            step="0.000001"
            placeholder="Enter SOL amount"
            value={solAmount}
            onChange={(e) => setSolAmount(e.target.value)}
            className="bg-white/[0.02] border-white/10"
          />
        </div>
        <Button type="submit" className="w-full">Execute Buy Back</Button>
      </form>
    </DialogContent>
  );
}