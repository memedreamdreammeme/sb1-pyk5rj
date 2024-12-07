import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SellOrder {
  supplyAmount: string;
  targetPrice: string;
}

const MAX_ORDERS = 20;

export function SellOrdersDialog() {
  const [orders, setOrders] = useState<SellOrder[]>([{
    supplyAmount: "",
    targetPrice: ""
  }]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sell orders:", orders);
  };

  const handleOrderChange = (index: number, field: keyof SellOrder, value: string) => {
    const newOrders = [...orders];
    newOrders[index] = {
      ...newOrders[index],
      [field]: value
    };
    setOrders(newOrders);
  };

  const addOrder = () => {
    if (orders.length < MAX_ORDERS) {
      setOrders([...orders, { supplyAmount: "", targetPrice: "" }]);
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
        <DialogTitle className="text-white/90">Create Sell Orders</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="max-h-[400px] overflow-y-auto pr-2">
          {orders.map((order, index) => (
            <div 
              key={index}
              className="p-4 mb-4 bg-white/[0.02] rounded-lg border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-white/80">Order {index + 1}</h3>
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
                  <Label>Supply Amount to Sell (%)</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    placeholder="Enter percentage of supply"
                    value={order.supplyAmount}
                    onChange={(e) => handleOrderChange(index, 'supplyAmount', e.target.value)}
                    className="bg-white/[0.03] border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Market Cap Price Target ($)</Label>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter target market cap"
                    value={order.targetPrice}
                    onChange={(e) => handleOrderChange(index, 'targetPrice', e.target.value)}
                    className="bg-white/[0.03] border-white/10"
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
            Add Order ({orders.length}/{MAX_ORDERS})
          </Button>
        )}

        {orders.length >= MAX_ORDERS && (
          <Alert variant="destructive" className="bg-red-500/10 border-red-500/20">
            <AlertDescription>
              Maximum number of orders reached ({MAX_ORDERS})
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full">Create Orders</Button>
      </form>
    </DialogContent>
  );
}