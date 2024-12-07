import { BarChart3, ChevronDown, Send, Coins, Banknote } from "lucide-react";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const randomTickers = [
  "Random ticker 1",
  "Random ticker 2",
  "Random ticker 3",
  "Random ticker 4",
];

function AirdropDialog() {
  const [amount, setAmount] = useState("");
  const [addresses, setAddresses] = useState("");

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Airdrop Tokens</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Amount per Wallet</Label>
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-white/[0.02] border-white/10"
          />
        </div>
        <div className="space-y-2">
          <Label>Wallet Addresses</Label>
          <textarea
            placeholder="Enter addresses (one per line)"
            value={addresses}
            onChange={(e) => setAddresses(e.target.value)}
            className="w-full h-32 rounded-md bg-white/[0.02] border border-white/10 p-2 text-sm"
          />
        </div>
        <Button className="w-full">Airdrop</Button>
      </div>
    </DialogContent>
  );
}

function DisperseTokensDialog() {
  const [amounts, setAmounts] = useState("");

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Disperse Tokens</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Addresses and Amounts</Label>
          <textarea
            placeholder="Format: address,amount (one per line)"
            value={amounts}
            onChange={(e) => setAmounts(e.target.value)}
            className="w-full h-32 rounded-md bg-white/[0.02] border border-white/10 p-2 text-sm"
          />
        </div>
        <Button className="w-full">Disperse</Button>
      </div>
    </DialogContent>
  );
}

function DisperseSolDialog() {
  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Disperse SOL</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <Button className="w-full">Disperse</Button>
      </div>
    </DialogContent>
  );
}

export function MidLaunchTools() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Mid Launch Tools</h2>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              Select Token
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end"
            className="bg-white/[0.03] border-white/10 backdrop-blur-xl"
          >
            {randomTickers.map((ticker) => (
              <DropdownMenuItem
                key={ticker}
                className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
              >
                {ticker}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Send className="w-4 h-4" />
              Airdrop
            </Button>
          </DialogTrigger>
          <AirdropDialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Coins className="w-4 h-4" />
              Disperse Tokens
            </Button>
          </DialogTrigger>
          <DisperseTokensDialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Banknote className="w-4 h-4" />
              Disperse SOL
            </Button>
          </DialogTrigger>
          <DisperseSolDialog />
        </Dialog>
      </div>
    </div>
  );
}