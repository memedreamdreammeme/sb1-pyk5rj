import { Share2, Twitter, Send, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { TwitterAccountsDialog } from "./TwitterAccounts";
import { TelegramAccountsDialog } from "./TelegramAccounts";
import { AddTokenDialog } from "./AddTokenDialog";

const dexOptions = [
  "Raydium",
  "Orca",
  "Jupiter",
  "Meteora"
];

function DexUpdateDialog() {
  const [showAddToken, setShowAddToken] = useState(false);

  return (
    <>
      <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-white/90">Dexscreener</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Dialog open={showAddToken} onOpenChange={setShowAddToken}>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="w-full border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                onClick={() => setShowAddToken(true)}
              >
                Add
              </Button>
            </DialogTrigger>
            <AddTokenDialog />
          </Dialog>
          <Button className="w-full">Submit</Button>
        </div>
      </DialogContent>
    </>
  );
}

export function SocialTools() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Social Tools</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Twitter className="w-4 h-4" />
              Twitter Accounts
            </Button>
          </DialogTrigger>
          <TwitterAccountsDialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Send className="w-4 h-4" />
              Telegram Accounts
            </Button>
          </DialogTrigger>
          <TelegramAccountsDialog />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline"
              size="sm" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Globe className="w-4 h-4" />
              Dex Update
            </Button>
          </DialogTrigger>
          <DexUpdateDialog />
        </Dialog>
      </div>
    </div>
  );
}