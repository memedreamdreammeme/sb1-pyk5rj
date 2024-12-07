import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { SellOrdersDialog } from "./SellOrdersDialog";
import { AutoSellDialog } from "./AutoSellDialog";

const sellFormSchema = z.object({
  amount: z.string()
    .min(1, "Supply amount is required")
    .regex(/^\d*\.?\d*$/, "Must be a valid number"),
});

type SellFormValues = z.infer<typeof sellFormSchema>;

export function SellForm() {
  const [showSellOrders, setShowSellOrders] = useState(false);
  const [showAutoSell, setShowAutoSell] = useState(false);
  const [sellMethod, setSellMethod] = useState<'supply' | 'sol'>('supply');

  const form = useForm<SellFormValues>({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      amount: "",
    },
  });

  function onSubmit(data: SellFormValues) {
    console.log(data);
  }

  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <DollarSign className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Sell Configuration</h2>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              Selling Methods
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end"
            className="bg-white/[0.03] border-white/10 backdrop-blur-xl"
          >
            <DropdownMenuItem
              onClick={() => setSellMethod('supply')}
              className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
            >
              Sell Supply Amount
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSellMethod('sol')}
              className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
            >
              Sell SOL Amount
            </DropdownMenuItem>
            <Dialog open={showSellOrders} onOpenChange={setShowSellOrders}>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
                >
                  Sell Orders
                </DropdownMenuItem>
              </DialogTrigger>
              <SellOrdersDialog />
            </Dialog>
            <Dialog open={showAutoSell} onOpenChange={setShowAutoSell}>
              <DialogTrigger asChild>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]"
                >
                  Auto Sell on Buys
                </DropdownMenuItem>
              </DialogTrigger>
              <AutoSellDialog />
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="amount">
            {sellMethod === 'supply' ? 'Supply Amount' : 'SOL Amount'}
          </Label>
          <Input
            id="amount"
            placeholder={`Enter ${sellMethod === 'supply' ? 'supply' : 'SOL'} amount`}
            {...form.register("amount")}
            className="bg-white/[0.02] border-white/10"
          />
          {form.formState.errors.amount && (
            <p className="text-xs text-red-400">{form.formState.errors.amount.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Sell Token
        </Button>
      </form>
    </div>
  );
}