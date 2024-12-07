import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function LaunchInfo() {
  return (
    <div className="space-y-6">
      <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white/90 mb-4">Launch Preview</h3>
        <div className="space-y-4">
          <div className="bg-white/[0.02] rounded-lg p-4">
            <p className="text-sm text-white/60">Your token preview will appear here after filling out the token information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}