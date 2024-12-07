import { BarChart3, ChevronDown, Send, Coins, Banknote } from "lucide-react";
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
import { AirdropDialog } from "./AirdropDialog";

const randomTickers = [
  "Random ticker 1",
  "Random ticker 2",
  "Random ticker 3",
  "Random ticker 4",
];

export function SimpleLaunchTools() {
  const handleDisperseTokens = () => {
    console.log("Disperse tokens clicked");
  };

  const handleDisperseSol = () => {
    console.log("Disperse SOL clicked");
  };

  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-3">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Simple Launch Tools</h2>
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
              <Send className="w-4 h-4" />
              Airdrop
            </Button>
          </DialogTrigger>
          <AirdropDialog />
        </Dialog>

        <Button 
          variant="outline"
          size="sm" 
          className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
          onClick={handleDisperseTokens}
        >
          <Coins className="w-4 h-4" />
          Disperse Tokens
        </Button>

        <Button 
          variant="outline"
          size="sm" 
          className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
          onClick={handleDisperseSol}
        >
          <Banknote className="w-4 h-4" />
          Disperse SOL
        </Button>
      </div>
    </div>
  );
}