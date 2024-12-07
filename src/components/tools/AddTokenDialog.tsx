import { ImageIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const randomTickers = [
  "Random ticker 1",
  "Random ticker 2",
  "Random ticker 3",
  "Random ticker 4",
];

interface TokenInfo {
  ca: string;
  name: string;
  symbol: string;
  description: string;
  pfp: File | null;
  banner: File | null;
  twitterLink: string;
  telegramLink: string;
  websiteLink: string;
}

export function AddTokenDialog() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>({
    ca: "",
    name: "",
    symbol: "",
    description: "",
    pfp: null,
    banner: null,
    twitterLink: "",
    telegramLink: "",
    websiteLink: "",
  });
  const [pfpPreview, setPfpPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [selectedToken, setSelectedToken] = useState("");

  const handleImageChange = (type: 'pfp' | 'banner', file: File) => {
    const url = URL.createObjectURL(file);
    if (type === 'pfp') {
      setPfpPreview(url);
      setTokenInfo(prev => ({ ...prev, pfp: file }));
    } else {
      setBannerPreview(url);
      setTokenInfo(prev => ({ ...prev, banner: file }));
    }
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl max-w-2xl">
      <DialogHeader className="flex flex-row items-center justify-between">
        <DialogTitle className="text-white/90">Add Token Information</DialogTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              {selectedToken || "Select Token"}
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
                onClick={() => setSelectedToken(ticker)}
                className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
              >
                {ticker}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Contract Address (CA)</Label>
          <Input
            placeholder="Enter contract address"
            value={tokenInfo.ca}
            onChange={(e) => setTokenInfo(prev => ({ ...prev, ca: e.target.value }))}
            className="bg-white/[0.02] border-white/10"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Token Name</Label>
            <Input
              placeholder="Enter token name"
              value={tokenInfo.name}
              onChange={(e) => setTokenInfo(prev => ({ ...prev, name: e.target.value }))}
              className="bg-white/[0.02] border-white/10"
            />
          </div>
          <div className="space-y-2">
            <Label>Token Symbol</Label>
            <Input
              placeholder="Enter token symbol"
              value={tokenInfo.symbol}
              onChange={(e) => setTokenInfo(prev => ({ ...prev, symbol: e.target.value }))}
              className="bg-white/[0.02] border-white/10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <textarea
            placeholder="Enter token description"
            value={tokenInfo.description}
            onChange={(e) => setTokenInfo(prev => ({ ...prev, description: e.target.value }))}
            className="w-full h-24 rounded-md bg-white/[0.02] border border-white/10 p-2 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Profile Picture</Label>
            <div className="flex items-center gap-4">
              <label 
                className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 
                         bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/70">Choose PFP...</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleImageChange('pfp', e.target.files[0])}
                />
              </label>
              {pfpPreview && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <img src={pfpPreview} alt="PFP preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Banner Image</Label>
            <div className="flex items-center gap-4">
              <label 
                className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 
                         bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer"
              >
                <ImageIcon className="w-4 h-4 text-white/70" />
                <span className="text-sm text-white/70">Choose banner...</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleImageChange('banner', e.target.files[0])}
                />
              </label>
              {bannerPreview && (
                <div className="w-16 h-10 rounded overflow-hidden border border-white/10">
                  <img src={bannerPreview} alt="Banner preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Social Links</Label>
          <div className="space-y-2">
            <Input
              placeholder="Twitter Link"
              value={tokenInfo.twitterLink}
              onChange={(e) => setTokenInfo(prev => ({ ...prev, twitterLink: e.target.value }))}
              className="bg-white/[0.02] border-white/10"
            />
            <Input
              placeholder="Telegram Link"
              value={tokenInfo.telegramLink}
              onChange={(e) => setTokenInfo(prev => ({ ...prev, telegramLink: e.target.value }))}
              className="bg-white/[0.02] border-white/10"
            />
            <Input
              placeholder="Website Link"
              value={tokenInfo.websiteLink}
              onChange={(e) => setTokenInfo(prev => ({ ...prev, websiteLink: e.target.value }))}
              className="bg-white/[0.02] border-white/10"
            />
          </div>
        </div>

        <Button className="w-full">Submit</Button>
      </div>
    </DialogContent>
  );
}