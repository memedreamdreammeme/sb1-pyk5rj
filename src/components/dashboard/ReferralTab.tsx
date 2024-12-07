import { Users, Link, Copy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const earningsData = [
  { date: "Mar 10", earnings: 12.4 },
  { date: "Mar 11", earnings: 18.7 },
  { date: "Mar 12", earnings: 15.2 },
  { date: "Mar 13", earnings: 22.8 },
  { date: "Mar 14", earnings: 19.5 },
  { date: "Mar 15", earnings: 25.3 },
  { date: "Mar 16", earnings: 21.6 }
];

export function ReferralTab() {
  const referralLink = "https://pump.fun/ref/youraddress";
  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 234.56,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Users className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Referral Program</h2>
      </div>

      <div className="grid gap-4">
        <div className="p-4 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Link className="w-4 h-4 text-white/60" />
            <h3 className="text-sm font-medium text-white/90">Your Referral Link</h3>
          </div>
          <div className="flex gap-2">
            <Input
              readOnly
              value={referralLink}
              className="bg-white/[0.02] border-white/10 font-mono"
            />
            <Button variant="outline" size="icon" className="shrink-0">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-lg">
            <p className="text-sm text-white/60">Total Referrals</p>
            <p className="text-2xl font-bold text-white/90">{referralStats.totalReferrals}</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-lg">
            <p className="text-sm text-white/60">Active Referrals</p>
            <p className="text-2xl font-bold text-white/90">{referralStats.activeReferrals}</p>
          </div>
          <div className="p-4 bg-white/[0.02] border border-white/10 rounded-lg">
            <p className="text-sm text-white/60">Total Earnings</p>
            <p className="text-2xl font-bold text-white/90">{referralStats.totalEarnings} SOL</p>
          </div>
        </div>

        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-5 h-5 text-white/60" />
            <h3 className="text-sm font-medium text-white/60">Referral Earnings</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={earningsData}>
                <XAxis 
                  dataKey="date" 
                  stroke="#ffffff60"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis 
                  stroke="#ffffff60"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value} SOL`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)",
                  }}
                  labelStyle={{ color: "rgba(255, 255, 255, 0.6)" }}
                  itemStyle={{ color: "rgba(255, 255, 255, 0.9)" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="earnings" 
                  stroke="#ffffff" 
                  strokeWidth={2}
                  dot={false}
                  name="Earnings"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}