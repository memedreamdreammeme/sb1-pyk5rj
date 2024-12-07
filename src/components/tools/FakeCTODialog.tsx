import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, AlertCircle } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface TradeSet {
  sell: string;
  buy: string;
  tradeDelay: string;
}

const MAX_ADDITIONAL_SETS = 10;
const INITIAL_SETS = 3;

export function FakeCTODialog() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [sellSupply, setSellSupply] = useState("");
  const [buySupply, setBuySupply] = useState("");
  const [tradeSets, setTradeSets] = useState<TradeSet[]>(
    Array(INITIAL_SETS).fill({ sell: "", buy: "", tradeDelay: "" })
  );
  const [delays, setDelays] = useState<string[]>(Array(INITIAL_SETS - 1).fill(""));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Fake CTO:", { 
      isAdvanced, 
      simple: { sellSupply, buySupply },
      advanced: { tradeSets, delays }
    });
  };

  const handleTradeSetChange = (index: number, field: keyof TradeSet, value: string) => {
    const newTradeSets = [...tradeSets];
    newTradeSets[index] = {
      ...newTradeSets[index],
      [field]: value
    };
    setTradeSets(newTradeSets);
  };

  const handleDelayChange = (index: number, value: string) => {
    const newDelays = [...delays];
    newDelays[index] = value;
    setDelays(newDelays);
  };

  const addTradeSet = () => {
    if (tradeSets.length < INITIAL_SETS + MAX_ADDITIONAL_SETS) {
      setTradeSets([...tradeSets, { sell: "", buy: "", tradeDelay: "" }]);
      setDelays([...delays, ""]);
    }
  };

  const removeTradeSet = (index: number) => {
    const newTradeSets = tradeSets.filter((_, i) => i !== index);
    const newDelays = delays.filter((_, i) => i !== index - 1);
    setTradeSets(newTradeSets);
    setDelays(newDelays);
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-white/90">Fake CTO</DialogTitle>
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
              <Label htmlFor="sellSupply">Amount of supply to sell</Label>
              <Input
                id="sellSupply"
                type="number"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter supply percentage"
                value={sellSupply}
                onChange={(e) => setSellSupply(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="buySupply">Amount of supply to buy</Label>
              <Input
                id="buySupply"
                type="number"
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter supply percentage"
                value={buySupply}
                onChange={(e) => setBuySupply(e.target.value)}
                className="bg-white/[0.02] border-white/10"
              />
            </div>
          </>
        ) : (
          <div className="space-y-4">
            <div className="max-h-[400px] overflow-y-auto pr-2">
              {tradeSets.map((set, index) => (
                <div key={index}>
                  <div className="space-y-4 p-4 bg-white/[0.02] rounded-lg border border-white/10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-white/80">Trade Set {index + 1}</h3>
                      {index >= INITIAL_SETS && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeTradeSet(index)}
                          className="h-8 px-2 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="block mb-2">Sell Configuration</Label>
                        <div className="space-y-2">
                          <div>
                            <Label className="text-xs text-white/60">Amount</Label>
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              placeholder="Enter supply percentage"
                              value={set.sell}
                              onChange={(e) => handleTradeSetChange(index, 'sell', e.target.value)}
                              className="bg-white/[0.03] border-white/10"
                            />
                          </div>
                          <div>
                            <Label className="text-xs text-white/60">Input trade delay</Label>
                            <Input
                              type="number"
                              min="0"
                              step="1"
                              placeholder="Enter delay in seconds"
                              value={set.tradeDelay}
                              onChange={(e) => handleTradeSetChange(index, 'tradeDelay', e.target.value)}
                              className="bg-white/[0.03] border-white/10"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label className="block mb-2">Buy Configuration</Label>
                        <div>
                          <Label className="text-xs text-white/60">Amount</Label>
                          <Input
                            type="number"
                            min="0"
                            max="100"
                            step="0.01"
                            placeholder="Enter supply percentage"
                            value={set.buy}
                            onChange={(e) => handleTradeSetChange(index, 'buy', e.target.value)}
                            className="bg-white/[0.03] border-white/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < tradeSets.length - 1 && (
                    <div className="my-4 px-4">
                      <Label className="block mb-2 text-xs text-white/60">Input Trade Set Delay</Label>
                      <Input
                        type="number"
                        min="0"
                        step="1"
                        placeholder="Enter delay in seconds"
                        value={delays[index]}
                        onChange={(e) => handleDelayChange(index, e.target.value)}
                        className="bg-white/[0.02] border-white/10"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {tradeSets.length < INITIAL_SETS + MAX_ADDITIONAL_SETS && (
              <Button
                type="button"
                variant="outline"
                onClick={addTradeSet}
                className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
              >
                <Plus className="w-4 h-4" />
                Add Trade Set ({tradeSets.length}/{INITIAL_SETS + MAX_ADDITIONAL_SETS})
              </Button>
            )}

            {tradeSets.length >= INITIAL_SETS + MAX_ADDITIONAL_SETS && (
              <Alert variant="destructive" className="bg-red-500/10 border-red-500/20">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Maximum number of trade sets reached ({INITIAL_SETS + MAX_ADDITIONAL_SETS})
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
        <Button type="submit" className="w-full">Execute</Button>
      </form>
    </DialogContent>
  );
}