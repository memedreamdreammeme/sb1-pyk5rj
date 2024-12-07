import { Plus, List, LogIn, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

interface TelegramAccount {
  username: string;
  password: string;
  phone: string;
  email: string;
  twoFa: string;
}

const SAMPLE_ACCOUNTS: TelegramAccount[] = Array.from({ length: 10 }, (_, i) => ({
  username: `tg_user${i + 1}`,
  password: `pass${Math.random().toString(36).slice(2, 10)}`,
  phone: `+1${Math.floor(Math.random() * 9000000000 + 1000000000)}`,
  email: `tg_user${i + 1}@example.com`,
  twoFa: Math.random().toString().slice(2, 8),
}));

function AccountRow({ account }: { account: TelegramAccount }) {
  return (
    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div>
            <span className="text-white/60">Phone number:</span>
            <span className="ml-2 text-white/90 font-mono">{account.phone}</span>
          </div>
          <div>
            <span className="text-white/60">2FA:</span>
            <span className="ml-2 text-white/90 font-mono">{account.twoFa}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="ghost"
            className="h-7 w-7 px-0 text-xs border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-red-400 hover:text-red-300"
          >
            <Trash2 className="w-3 h-3" />
          </Button>
          <Button 
            size="sm" 
            variant="ghost"
            className="h-7 px-2 text-xs border border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
          >
            <LogIn className="w-3 h-3 mr-1" />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export function TelegramAccountsDialog() {
  const [activeTab, setActiveTab] = useState<'generate' | 'list'>('generate');
  const [accounts] = useState<TelegramAccount[]>(SAMPLE_ACCOUNTS);

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl max-w-5xl">
      <DialogHeader>
        <DialogTitle className="text-white/90">Telegram Accounts</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'generate' ? 'default' : 'outline'}
            onClick={() => setActiveTab('generate')}
            className="flex-1"
          >
            <Plus className="w-4 h-4 mr-2" />
            Generate New Account
          </Button>
          <Button
            variant={activeTab === 'list' ? 'default' : 'outline'}
            onClick={() => setActiveTab('list')}
            className="flex-1"
          >
            <List className="w-4 h-4 mr-2" />
            Account List
          </Button>
        </div>

        {activeTab === 'generate' && (
          <div className="space-y-4">
            <p className="text-sm text-white/60">
              Generate up to 10 new Telegram accounts. Current: {accounts.length}/10
            </p>
            <Button className="w-full">
              Generate Account
            </Button>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="space-y-2">
            <div className="max-h-[400px] overflow-y-auto pr-2 space-y-2">
              {accounts.map((account, index) => (
                <AccountRow key={index} account={account} />
              ))}
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  );
}