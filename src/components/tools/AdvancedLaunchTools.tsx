import { Crosshair, ChevronDown, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FakeCTODialog } from "./FakeCTODialog";
import { BuyBackDialog } from "./BuyBackDialog";
import { RealVolumeBotDialog } from "./RealVolumeBotDialog";

const randomTickers = [
  "Random ticker 1",
  "Random ticker 2",
  "Random ticker 3",
  "Random ticker 4",
];

export function AdvancedLaunchTools() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Crosshair className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Advanced Launch Tools</h2>
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

      <div className="grid grid-cols-3 gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Zap className="w-4 h-4" />
              Fake CTO
            </Button>
          </DialogTrigger>
          <FakeCTODialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <TrendingUp className="w-4 h-4" />
              Buy Back
            </Button>
          </DialogTrigger>
          <BuyBackDialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <BarChart3 className="w-4 h-4" />
              Real Volume Bot
            </Button>
          </DialogTrigger>
          <RealVolumeBotDialog />
        </Dialog>
      </div>
    </div>
  );
}