import { useState } from "react";
import { Send, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const senderWallets = [
  "Wallet 1 (45.2% supply)",
  "Wallet 2 (28.7% supply)",
  "Wallet 3 (15.5% supply)",
];

export function AirdropDialog() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [supplyPercentage, setSupplyPercentage] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdvanced) {
      console.log("Advanced airdrop:", { selectedWallet, supplyPercentage, walletAddress });
    } else {
      console.log("Simple airdrop:", { supplyPercentage, walletAddress });
    }
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-white/90">Airdrop Tokens</DialogTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60">Simple</span>
            <Switch
              checked={isAdvanced}
              onCheckedChange={setIsAdvanced}
            />
            <span className="text-xs text-white/60">Advanced</span>
          </div>
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isAdvanced ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="supplyPercentage">Supply Percentage</Label>
              <Input
                id="supplyPercentage"
                type="number"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter supply percentage"
                value={supplyPercentage}
                onChange={(e) => setSupplyPercentage(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletAddress">Wallet Address</Label>
              <Input
                id="walletAddress"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-white/[0.02] border-white/10 font-mono"
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label>Sender Wallet</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-2">
                      <Wallet className="w-4 h-4" />
                      {selectedWallet || "Select Sender Wallet"}
                    </div>
                    <span className="opacity-50">▼</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end"
                  className="w-[200px] bg-white/[0.03] border-white/10 backdrop-blur-xl"
                >
                  {senderWallets.map((wallet) => (
                    <DropdownMenuItem
                      key={wallet}
                      onClick={() => setSelectedWallet(wallet)}
                      className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
                    >
                      {wallet}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="space-y-2">
              <Label htmlFor="advancedSupplyPercentage">Supply Percentage</Label>
              <Input
                id="advancedSupplyPercentage"
                type="number"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter supply percentage"
                value={supplyPercentage}
                onChange={(e) => setSupplyPercentage(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="advancedWalletAddress">Recipient Wallet Address</Label>
              <Input
                id="advancedWalletAddress"
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-white/[0.02] border-white/10 font-mono"
              />
            </div>
          </>
        )}
        <Button type="submit" className="w-full gap-2">
          <Send className="w-4 h-4" />
          Airdrop
        </Button>
      </form>
    </DialogContent>
  );
}