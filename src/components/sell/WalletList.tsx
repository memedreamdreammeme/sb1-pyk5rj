import { Wallet, ChevronDown, Copy, Check, Filter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface WalletData {
  address: string;
}

const wallets: WalletData[] = Array.from({ length: 100 }, (_, i) => ({
  address: `${Math.random().toString(36).substring(2, 15)}...${Math.random().toString(36).substring(2, 6)}`,
}));

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-white/50 hover:text-white/90"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? 'Copied!' : 'Copy address'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function SellOptionsDialog() {
  const [solAmount, setSolAmount] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sell options:", { solAmount, percentage });
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Sell Options</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="solAmount">SOL Amount to Sell</Label>
          <Input
            id="solAmount"
            type="number"
            step="0.000001"
            placeholder="Enter SOL amount"
            value={solAmount}
            onChange={(e) => setSolAmount(e.target.value)}
            className="bg-white/[0.02] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="percentage">Percentage of Holdings to Sell</Label>
          <Input
            id="percentage"
            type="number"
            min="0"
            max="100"
            step="0.01"
            placeholder="Enter percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="bg-white/[0.02] border-white/10"
          />
        </div>
        <Button type="submit" className="w-full">
          SELL
        </Button>
      </form>
    </DialogContent>
  );
}

function AirdropDialog() {
  const [supplyPercentage, setSupplyPercentage] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Airdrop:", { supplyPercentage, recipientAddress });
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Airdrop Tokens</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <Label htmlFor="recipientAddress">Recipient Address</Label>
          <div className="flex gap-2">
            <Input
              id="recipientAddress"
              placeholder="Enter wallet address"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              className="bg-white/[0.02] border-white/10 flex-1"
            />
            <Button type="submit" size="icon" className="h-10 w-10">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </DialogContent>
  );
}

export function WalletList() {
  const [privateKey, setPrivateKey] = useState("");
  const [filterType, setFilterType] = useState<'all' | 'with-sol' | 'with-tokens'>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Private key submitted:", privateKey);
    setPrivateKey("");
  };

  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Wallet className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Your Wallets</h2>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                <Filter className="w-3 h-3" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end"
              className="bg-white/[0.03] border-white/10 backdrop-blur-xl"
            >
              <DropdownMenuItem
                onClick={() => setFilterType('all')}
                className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
              >
                All Wallets
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilterType('with-sol')}
                className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
              >
                With SOL Balance
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setFilterType('with-tokens')}
                className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
              >
                With Tokens
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                Add Wallet
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-white/90">Add New Wallet</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="privateKey">Private Key</Label>
                  <Input
                    id="privateKey"
                    type="password"
                    placeholder="Enter wallet private key"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                    className="bg-white/[0.02] border-white/10"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
        {wallets.map((wallet, index) => (
          <div
            key={index}
            className="flex items-center h-[72px] p-4 rounded-lg bg-white/[0.02] border border-white/5
                     hover:bg-white/[0.04] transition-colors duration-200"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-mono text-sm text-white/90">{wallet.address}</p>
                <CopyButton text={wallet.address} />
              </div>
              <div className="flex gap-4 mt-1">
                <p className="text-xs text-white/60">Sol Balance: null</p>
                <p className="text-xs text-white/60">Token Balance: null</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="h-7 px-2 text-xs border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    Airdrop
                  </Button>
                </DialogTrigger>
                <AirdropDialog />
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="h-7 px-2 text-xs border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  >
                    Select
                  </Button>
                </DialogTrigger>
                <SellOptionsDialog />
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}