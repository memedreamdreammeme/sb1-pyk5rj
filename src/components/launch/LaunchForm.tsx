import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Rocket, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const launchFormSchema = z.object({
  devBuyAmount: z.string()
    .min(1, "Dev buy amount is required")
    .regex(/^\d*\.?\d*$/, "Must be a valid number"),
  bundleBuyAmount: z.string()
    .min(1, "Bundle buy amount is required")
    .regex(/^\d*\.?\d*$/, "Must be a valid number"),
});

type LaunchFormValues = z.infer<typeof launchFormSchema>;

export function LaunchForm() {
  const form = useForm<LaunchFormValues>({
    resolver: zodResolver(launchFormSchema),
    defaultValues: {
      devBuyAmount: "",
      bundleBuyAmount: "",
    },
  });

  function onSubmit(data: LaunchFormValues) {
    console.log(data);
  }

  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Launch Configuration</h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="devBuyAmount">Dev Buy Amount</Label>
            <Input
              id="devBuyAmount"
              placeholder="Enter amount in SOL"
              {...form.register("devBuyAmount")}
              className="bg-white/[0.02] border-white/10"
            />
            {form.formState.errors.devBuyAmount && (
              <p className="text-xs text-red-400">{form.formState.errors.devBuyAmount.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bundleBuyAmount">Bundle Buy Amount</Label>
            <Input
              id="bundleBuyAmount"
              placeholder="Enter amount in SOL"
              {...form.register("bundleBuyAmount")}
              className="bg-white/[0.02] border-white/10"
            />
            {form.formState.errors.bundleBuyAmount && (
              <p className="text-xs text-red-400">{form.formState.errors.bundleBuyAmount.message}</p>
            )}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              type="button"
              variant="outline" 
              className="w-full gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
            >
              Launch Methods
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="end"
            className="w-[200px] bg-white/[0.03] border-white/10 backdrop-blur-xl"
          >
            <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]">
              Instant
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white/80 hover:text-white focus:text-white hover:bg-white/[0.05] focus:bg-white/[0.05]">
              Organic
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button type="submit" className="w-full">
          Launch Token
        </Button>
      </form>
    </div>
  );
}