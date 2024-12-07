import { Trophy, ArrowUpRight } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  address: string;
  volume: number;
  earnings: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, address: "0x1234...5678", volume: 1234.56, earnings: 123.45 },
  { rank: 2, address: "0x8765...4321", volume: 987.65, earnings: 98.76 },
  { rank: 3, address: "0x9876...5432", volume: 876.54, earnings: 87.65 },
  { rank: 4, address: "0x4567...8901", volume: 765.43, earnings: 76.54 },
  { rank: 5, address: "0x3456...7890", volume: 654.32, earnings: 65.43 },
  { rank: 6, address: "0x2345...6789", volume: 543.21, earnings: 54.32 },
  { rank: 7, address: "0x1234...5678", volume: 432.10, earnings: 43.21 },
  { rank: 8, address: "0x0123...4567", volume: 321.09, earnings: 32.10 },
  { rank: 9, address: "0x9012...3456", volume: 210.98, earnings: 21.09 },
  { rank: 10, address: "0x8901...2345", volume: 109.87, earnings: 10.98 }
];

export function LeaderboardTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Trophy className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Top Performers</h2>
      </div>

      <div className="grid gap-4">
        {leaderboardData.map((entry) => (
          <div
            key={entry.rank}
            className="p-4 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white/60">#{entry.rank}</span>
              <div>
                <p className="font-mono text-sm text-white/90">{entry.address}</p>
                <p className="text-sm text-white/60">Volume: {entry.volume} SOL</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <ArrowUpRight className="w-4 h-4" />
              <span>{entry.earnings} SOL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}