import { BarChart3, TrendingUp, DollarSign, Activity } from "lucide-react";
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { date: "Mar 10", profit: 234 },
  { date: "Mar 11", profit: 345 },
  { date: "Mar 12", profit: 289 },
  { date: "Mar 13", profit: 456 },
  { date: "Mar 14", profit: 378 },
  { date: "Mar 15", profit: 590 },
  { date: "Mar 16", profit: 423 }
];

export function PersonalStatsTab() {
  const stats = {
    totalVolume: "1,234.56",
    totalLaunches: "156",
    totalEarnings: "345.67",
    successRate: "94.2",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Your Statistics</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-white/60" />
            <h3 className="text-sm font-medium text-white/60">Total Volume</h3>
          </div>
          <p className="text-3xl font-bold text-white/90">{stats.totalVolume} SOL</p>
        </div>

        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-white/60" />
            <h3 className="text-sm font-medium text-white/60">Total Launches</h3>
          </div>
          <p className="text-3xl font-bold text-white/90">{stats.totalLaunches}</p>
        </div>

        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-5 h-5 text-white/60" />
            <h3 className="text-sm font-medium text-white/60">Total Earnings</h3>
          </div>
          <p className="text-3xl font-bold text-white/90">{stats.totalEarnings} SOL</p>
        </div>

        <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-white/60" />
            <h3 className="text-sm font-medium text-white/60">Success Rate</h3>
          </div>
          <p className="text-3xl font-bold text-white/90">{stats.successRate}%</p>
        </div>
      </div>

      <div className="p-6 bg-white/[0.02] border border-white/10 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-5 h-5 text-white/60" />
          <h3 className="text-sm font-medium text-white/60">Launch Profits</h3>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
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
                dataKey="profit" 
                stroke="#ffffff" 
                strokeWidth={2}
                dot={false}
                name="Profit"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}