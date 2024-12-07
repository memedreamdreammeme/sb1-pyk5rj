import { Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Token {
  address: string;
  symbol: string;
  name: string;
  balance: string;
  value: number;
}

const tokens: Token[] = [
  { address: "7KVexj...2Uh9", symbol: "BONK", name: "Bonk", balance: "1,234,567.89", value: 1234.56 },
  { address: "9Nh4m...5Pq2", symbol: "WIF", name: "Wif", balance: "98,765.43", value: 987.65 },
  { address: "3Yx8k...7Jw4", symbol: "MYRO", name: "Myro", balance: "45,678.90", value: 456.78 },
  { address: "5Vb2p...1Rs9", symbol: "POPCAT", name: "PopCat", balance: "789,012.34", value: 789.01 },
  { address: "2Mn6t...8Hq5", symbol: "SAMO", name: "Samoyedcoin", balance: "23,456.78", value: 234.56 }
];

export function TokenList() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <Coins className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Your Tokens</h2>
        </div>
        <Button variant="outline" size="sm" className="text-xs">
          Refresh
        </Button>
      </div>

      <div className="space-y-3">
        {tokens.map((token) => (
          <div
            key={token.address}
            className="flex items-center h-[72px] p-4 rounded-lg bg-white/[0.02] border border-white/5
                     hover:bg-white/[0.04] transition-colors duration-200"
          >
            <div>
              <h3 className="text-sm font-bold text-white/90">${token.symbol}</h3>
              <p className="text-xs text-white/60">{token.name}</p>
              <p className="text-[10px] font-mono text-white/40 mt-0.5">{token.address}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm font-mono text-white/90">{token.balance}</p>
              <p className="text-xs text-white/60">${token.value.toLocaleString()}</p>
            </div>
            <Button 
              size="sm" 
              variant="ghost"
              className="ml-4 h-8 px-3 text-xs border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              Sell
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}