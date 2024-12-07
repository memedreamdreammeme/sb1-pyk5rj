import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sparkles } from "lucide-react";

export interface BuySellSet {
  buyAmount: string;
  sellAmount: string;
  delay: string;
}

export interface TradeSet {
  buySellSets: BuySellSet[];
  isPaused?: boolean;
}

const presets: Record<string, BuySellSet[]> = {
  "Organic Growth": [
    { buyAmount: "0.5", sellAmount: "0.3", delay: "300" },
    { buyAmount: "0.8", sellAmount: "0.6", delay: "450" },
    { buyAmount: "1.2", sellAmount: "0.9", delay: "600" }
  ],
  "Quick Pump": [
    { buyAmount: "2.0", sellAmount: "1.5", delay: "120" },
    { buyAmount: "2.5", sellAmount: "2.0", delay: "180" }
  ],
  "Steady Volume": [
    { buyAmount: "0.3", sellAmount: "0.3", delay: "240" },
    { buyAmount: "0.3", sellAmount: "0.3", delay: "240" },
    { buyAmount: "0.3", sellAmount: "0.3", delay: "240" },
    { buyAmount: "0.3", sellAmount: "0.3", delay: "240" }
  ]
};

interface TradeSetPresetsProps {
  onSelectPreset: (buySellSets: BuySellSet[]) => void;
}

export function TradeSetPresets({ onSelectPreset }: TradeSetPresetsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 text-white/50 hover:text-white/90"
        >
          <Sparkles className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="w-[200px] bg-white/[0.03] border-white/10 backdrop-blur-xl"
      >
        {Object.entries(presets).map(([name, preset]) => (
          <DropdownMenuItem
            key={name}
            onClick={() => onSelectPreset(preset)}
            className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}