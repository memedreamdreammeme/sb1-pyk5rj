import { FileCode, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContractVerifier() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <FileCode className="w-5 h-5 text-white/90" />
          <h2 className="text-xl font-semibold text-white/90">Contract Verifier</h2>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs gap-2 border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
        >
          <Search className="w-3 h-3" />
          Verify
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Input 
          placeholder="Enter contract address" 
          className="bg-white/[0.02] border-white/10"
        />
        <Textarea 
          placeholder="Paste contract source code here..." 
          className="bg-white/[0.02] border-white/10 h-[120px] resize-none"
        />
      </div>
    </div>
  );
}