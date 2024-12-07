import { History } from "lucide-react";

interface Transaction {
  hash: string;
  type: 'buy' | 'sell';
  amount: string;
  time: string;
}

const transactions: Transaction[] = [
  { hash: "HZaWei...4kL9", type: 'buy', amount: "12.5", time: "2 mins ago" },
  { hash: "9xKp2m...7nR4", type: 'sell', amount: "8.3", time: "5 mins ago" },
  { hash: "5vBn3k...1tY6", type: 'buy', amount: "15.7", time: "8 mins ago" },
  { hash: "2mJq7p...9sX8", type: 'sell', amount: "5.2", time: "12 mins ago" },
  { hash: "4rLw9c...3hF5", type: 'buy', amount: "20.1", time: "15 mins ago" },
];

export function LiveTxnLogs() {
  return (
    <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <History className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Live Txn Logs</h2>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5
                     hover:bg-white/[0.04] transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  tx.type === 'buy' ? 'bg-green-400' : 'bg-red-400'
                }`}
              />
              <span className="font-mono text-sm text-white/90">{tx.hash}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-sm ${
                tx.type === 'buy' ? 'text-green-400' : 'text-red-400'
              }`}>
                {tx.type === 'buy' ? '+' : '-'}{tx.amount} SOL
              </span>
              <span className="text-xs text-white/60">{tx.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}