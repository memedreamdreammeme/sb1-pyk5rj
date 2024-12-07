import { Wallet, ArrowRight, History, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WithdrawLog {
  id: string;
  amount: number;
  address: string;
  status: 'completed' | 'pending' | 'failed';
  timestamp: string;
}

const withdrawLogs: WithdrawLog[] = [
  {
    id: "1",
    amount: 45.5,
    address: "8Kw7...3Pj9",
    status: 'completed',
    timestamp: "2024-03-15 14:30"
  },
  {
    id: "2",
    amount: 12.8,
    address: "5Nh2...7Xt4",
    status: 'pending',
    timestamp: "2024-03-15 14:25"
  },
  {
    id: "3",
    amount: 89.2,
    address: "2Vb9...1Ks6",
    status: 'completed',
    timestamp: "2024-03-15 14:20"
  }
];

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

export function WithdrawTab() {
  const walletAddress = "7KVexj...2Uh9"; // Example wallet address

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Wallet className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Withdraw Funds</h2>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 rounded-lg">
          <div>
            <p className="text-sm text-white/60">Available Balance</p>
            <p className="text-3xl font-bold text-white/90">123.45 SOL</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p className="text-sm text-white/60">Your Wallet</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-mono text-white/90">{walletAddress}</span>
              <CopyButton text={walletAddress} />
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount to Withdraw</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount in SOL"
              className="bg-white/[0.02] border-white/10"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Withdrawal Address</Label>
            <Input
              id="address"
              placeholder="Enter Solana address"
              className="bg-white/[0.02] border-white/10 font-mono"
            />
          </div>

          <Button className="w-full gap-2">
            Withdraw Funds
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <History className="w-5 h-5 text-white/90" />
            <h3 className="text-lg font-semibold text-white/90">Withdraw Log Book</h3>
          </div>
          
          <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
            {withdrawLogs.map((log) => (
              <div
                key={log.id}
                className="p-3 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/90">{log.amount} SOL</span>
                    <span className="text-xs font-mono text-white/60">{log.address}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    log.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                    log.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' :
                    'bg-red-500/10 text-red-400'
                  }`}>
                    {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                  </span>
                  <span className="text-xs text-white/40 mt-1">{log.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}