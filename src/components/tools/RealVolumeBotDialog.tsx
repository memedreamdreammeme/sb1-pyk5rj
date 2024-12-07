import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, AlertCircle, Pause, Play, Trash2 } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { TradeSetPresets } from "./TradeSetPresets";

interface BuySellSet {
  buyAmount: string;
  sellAmount: string;
  delay: string;
}

interface TradeSet {
  buySellSets: BuySellSet[];
  isPaused?: boolean;
}

const MAX_TRADE_SETS = 20;
const MAX_BUY_SELL_SETS = 10;
const INITIAL_TRADE_SETS = 1;

const DEFAULT_BUY_SELL_SET: BuySellSet = {
  buyAmount: "",
  sellAmount: "",
  delay: "",
};

export function RealVolumeBotDialog() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  
  // Simple mode states
  const [budget, setBudget] = useState("");
  const [minSol, setMinSol] = useState("");
  const [maxSol, setMaxSol] = useState("");
  const [delay, setDelay] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  // Advanced mode states
  const [tradeSets, setTradeSets] = useState<TradeSet[]>(
    Array(INITIAL_TRADE_SETS).fill({
      buySellSets: [DEFAULT_BUY_SELL_SET],
      isPaused: false,
    })
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdvanced) {
      console.log("Advanced Real Volume Bot:", { tradeSets });
    } else {
      console.log("Simple Real Volume Bot:", { 
        budget, 
        minSol, 
        maxSol, 
        delay, 
        privateKey 
      });
    }
  };

  const handleBuySellSetChange = (
    tradeSetIndex: number,
    buySellSetIndex: number,
    field: keyof BuySellSet,
    value: string
  ) => {
    const newTradeSets = [...tradeSets];
    newTradeSets[tradeSetIndex] = {
      ...newTradeSets[tradeSetIndex],
      buySellSets: newTradeSets[tradeSetIndex].buySellSets.map((set, idx) =>
        idx === buySellSetIndex ? { ...set, [field]: value } : set
      ),
    };
    setTradeSets(newTradeSets);
  };

  const addBuySellSet = (tradeSetIndex: number) => {
    const newTradeSets = [...tradeSets];
    if (newTradeSets[tradeSetIndex].buySellSets.length < MAX_BUY_SELL_SETS) {
      newTradeSets[tradeSetIndex] = {
        ...newTradeSets[tradeSetIndex],
        buySellSets: [...newTradeSets[tradeSetIndex].buySellSets, DEFAULT_BUY_SELL_SET],
      };
      setTradeSets(newTradeSets);
    }
  };

  const removeBuySellSet = (tradeSetIndex: number, buySellSetIndex: number) => {
    const newTradeSets = [...tradeSets];
    newTradeSets[tradeSetIndex] = {
      ...newTradeSets[tradeSetIndex],
      buySellSets: newTradeSets[tradeSetIndex].buySellSets.filter(
        (_, idx) => idx !== buySellSetIndex
      ),
    };
    setTradeSets(newTradeSets);
  };

  const togglePause = (index: number) => {
    const newTradeSets = [...tradeSets];
    newTradeSets[index] = {
      ...newTradeSets[index],
      isPaused: !newTradeSets[index].isPaused,
    };
    setTradeSets(newTradeSets);
  };

  const addTradeSet = () => {
    if (tradeSets.length < MAX_TRADE_SETS) {
      setTradeSets([
        ...tradeSets,
        {
          buySellSets: [DEFAULT_BUY_SELL_SET],
          isPaused: false,
        },
      ]);
    }
  };

  const handlePresetSelect = (tradeSetIndex: number, preset: BuySellSet[]) => {
    const newTradeSets = [...tradeSets];
    newTradeSets[tradeSetIndex] = {
      ...newTradeSets[tradeSetIndex],
      buySellSets: preset,
    };
    setTradeSets(newTradeSets);
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-white/90">Real Volume Bot</DialogTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/60">Simple</span>
            <Switch
              checked={isAdvanced}
              onCheckedChange={setIsAdvanced}
            />
            <span className="text-xs text-white/60">Advanced</span>
          </div>
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isAdvanced ? (
          <>
            <div className="space-y-2">
              <Label htmlFor="budget">Spending Budget</Label>
              <Input
                id="budget"
                type="number"
                min="0"
                step="0.000001"
                placeholder="Enter budget in SOL"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="minSol">Minimum SOL Amount</Label>
              <Input
                id="minSol"
                type="number"
                min="0"
                step="0.000001"
                placeholder="Enter minimum SOL amount"
                value={minSol}
                onChange={(e) => setMinSol(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxSol">Maximum SOL Amount</Label>
              <Input
                id="maxSol"
                type="number"
                min="0"
                step="0.000001"
                placeholder="Enter maximum SOL amount"
                value={maxSol}
                onChange={(e) => setMaxSol(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="delay">Time Delay Between Transactions</Label>
              <Input
                id="delay"
                type="number"
                min="0"
                step="1"
                placeholder="Enter delay in seconds"
                value={delay}
                onChange={(e) => setDelay(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="privateKey">Wallet Private Key</Label>
              <Input
                id="privateKey"
                type="password"
                placeholder="Enter wallet private key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="space-y-4">
              <Label>Trade Sets</Label>
              <div className="max-h-[400px] overflow-y-auto pr-2">
                {tradeSets.map((tradeSet, tradeSetIndex) => (
                  <div key={tradeSetIndex} className="mb-4">
                    <div className="space-y-4 p-4 bg-white/[0.02] rounded-lg border border-white/10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-white/80">
                          Trade Set {tradeSetIndex + 1}
                        </h3>
                        <div className="flex items-center gap-2">
                          <TradeSetPresets 
                            onSelectPreset={(preset) => handlePresetSelect(tradeSetIndex, preset)} 
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => togglePause(tradeSetIndex)}
                            className="h-7 w-7 text-white/50 hover:text-white/90"
                          >
                            {tradeSet.isPaused ? (
                              <Play className="h-3 w-3" />
                            ) : (
                              <Pause className="h-3 w-3" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {tradeSet.buySellSets.map((buySellSet, buySellSetIndex) => (
                          <div key={buySellSetIndex} className="space-y-4 p-4 bg-white/[0.01] rounded border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm text-white/60">Buy/Sell Set {buySellSetIndex + 1}</h4>
                              {buySellSetIndex > 0 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeBuySellSet(tradeSetIndex, buySellSetIndex)}
                                  className="h-6 w-6 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label>Buy Amount</Label>
                                <Input
                                  type="number"
                                  min="0"
                                  step="0.000001"
                                  placeholder="Enter SOL amount"
                                  value={buySellSet.buyAmount}
                                  onChange={(e) => handleBuySellSetChange(
                                    tradeSetIndex,
                                    buySellSetIndex,
                                    'buyAmount',
                                    e.target.value
                                  )}
                                  className="bg-white/[0.03] border-white/10"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Delay (seconds)</Label>
                                <Input
                                  type="number"
                                  min="0"
                                  step="1"
                                  placeholder="Enter delay"
                                  value={buySellSet.delay}
                                  onChange={(e) => handleBuySellSetChange(
                                    tradeSetIndex,
                                    buySellSetIndex,
                                    'delay',
                                    e.target.value
                                  )}
                                  className="bg-white/[0.03] border-white/10"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label>Sell Amount</Label>
                                <Input
                                  type="number"
                                  min="0"
                                  step="0.000001"
                                  placeholder="Enter SOL amount"
                                  value={buySellSet.sellAmount}
                                  onChange={(e) => handleBuySellSetChange(
                                    tradeSetIndex,
                                    buySellSetIndex,
                                    'sellAmount',
                                    e.target.value
                                  )}
                                  className="bg-white/[0.03] border-white/10"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        {tradeSet.buySellSets.length < MAX_BUY_SELL_SETS && (
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => addBuySellSet(tradeSetIndex)}
                            className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                          >
                            <Plus className="w-4 h-4" />
                            Add Buy/Sell Set ({tradeSet.buySellSets.length}/{MAX_BUY_SELL_SETS})
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {tradeSets.length < MAX_TRADE_SETS && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTradeSet}
                  className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                >
                  <Plus className="w-4 h-4" />
                  Add Trade Set ({tradeSets.length}/{MAX_TRADE_SETS})
                </Button>
              )}

              {tradeSets.length >= MAX_TRADE_SETS && (
                <Alert variant="destructive" className="bg-red-500/10 border-red-500/20">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Maximum number of trade sets reached ({MAX_TRADE_SETS})
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        )}
        <Button type="submit" className="w-full">Execute Volume Bot</Button>
      </form>
    </DialogContent>
  );
}