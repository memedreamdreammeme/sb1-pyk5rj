import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AutoSellOrder {
  sellAmount: string;
  triggerAmount: string;
}

const MAX_ORDERS = 20;

export function AutoSellDialog() {
  const [enabled, setEnabled] = useState(false);
  const [orders, setOrders] = useState<AutoSellOrder[]>([{
    sellAmount: "",
    triggerAmount: ""
  }]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Auto sell settings:", { enabled, orders });
  };

  const handleOrderChange = (index: number, field: keyof AutoSellOrder, value: string) => {
    const newOrders = [...orders];
    newOrders[index] = {
      ...newOrders[index],
      [field]: value
    };
    setOrders(newOrders);
  };

  const addOrder = () => {
    if (orders.length < MAX_ORDERS) {
      setOrders([...orders, { sellAmount: "", triggerAmount: "" }]);
    }
  };

  const removeOrder = (index: number) => {
    if (orders.length > 1) {
      const newOrders = orders.filter((_, i) => i !== index);
      setOrders(newOrders);
    }
  };

  return (
    <DialogContent className="bg-white/[0.03] border-white/10 backdrop-blur-xl">
      <DialogHeader>
        <div className="flex items-center justify-between">
          <DialogTitle className="text-white/90">Auto Sell Settings</DialogTitle>
          <div className="flex items-center gap-2">
            <Label htmlFor="auto-sell" className="text-sm">Enable Auto Sell</Label>
            <Switch
              id="auto-sell"
              checked={enabled}
              onCheckedChange={setEnabled}
            />
          </div>
        </div>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="max-h-[400px] overflow-y-auto pr-2">
          {orders.map((order, index) => (
            <div 
              key={index}
              className="p-4 mb-4 bg-white/[0.02] rounded-lg border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-white/80">Auto Sell Order {index + 1}</h3>
                {index > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeOrder(index)}
                    className="h-6 w-6 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Amount of SOL to Sell</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.000001"
                    placeholder="Enter SOL amount to sell"
                    value={order.sellAmount}
                    onChange={(e) => handleOrderChange(index, 'sellAmount', e.target.value)}
                    className="bg-white/[0.02] border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Buy Amount Trigger</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.000001"
                    placeholder="Enter SOL amount to trigger sell"
                    value={order.triggerAmount}
                    onChange={(e) => handleOrderChange(index, 'triggerAmount', e.target.value)}
                    className="bg-white/[0.02] border-white/10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {orders.length < MAX_ORDERS && (
          <Button
            type="button"
            variant="outline"
            onClick={addOrder}
            className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
          >
            <Plus className="w-4 h-4" />
            Add Auto Sell Order ({orders.length}/{MAX_ORDERS})
          </Button>
        )}

        {orders.length >= MAX_ORDERS && (
          <Alert variant="destructive" className="bg-red-500/10 border-red-500/20">
            <AlertDescription>
              Maximum number of auto sell orders reached ({MAX_ORDERS})
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full">Save Settings</Button>
      </form>
    </DialogContent>
  );
}