import { Wallet, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WalletManager() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Wallet className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Wallet Manager</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs gap-2">
          <Plus className="w-3 h-3" />
          Add Wallet
        </Button>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4">
          <Input 
            placeholder="Enter private key" 
            type="password"
            className="bg-white/[0.02] border-white/10"
          />
          <Button variant="destructive" size="icon" className="shrink-0">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}