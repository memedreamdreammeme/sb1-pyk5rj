import { TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MarketStat {
  label: string;
  value: string;
}

const marketStats: MarketStat[] = [
  { label: "Amount of tokens sold", value: "null" },
  { label: "Amount of tokens still holding", value: "null" },
  { label: "Amount of sol sold", value: "null" },
];

const randomTickers = [
  "Random ticker 1",
  "Random ticker 2",
  "Random ticker 3",
  "Random ticker 4",
];

export function MarketStats() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Live Launch Statistics</h2>
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
        {marketStats.map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white/[0.02] border border-white/5"
          >
            <p className="text-sm text-white/60 mb-2">{stat.label}</p>
            <p className="text-lg font-semibold text-white/90">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}