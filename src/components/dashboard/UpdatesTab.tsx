import { Bell } from "lucide-react";

interface Update {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'feature' | 'maintenance' | 'announcement';
}

const updates: Update[] = [
  {
    id: 1,
    title: "New Trading Features",
    description: "We've added advanced trading features including stop-loss and take-profit options.",
    date: "2024-03-15",
    type: 'feature'
  },
  {
    id: 2,
    title: "Platform Maintenance",
    description: "Scheduled maintenance for performance improvements on March 20th.",
    date: "2024-03-14",
    type: 'maintenance'
  },
  {
    id: 3,
    title: "Trading Competition",
    description: "Join our weekly trading competition with a prize pool of 1000 SOL.",
    date: "2024-03-13",
    type: 'announcement'
  },
];

export function UpdatesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-white/90" />
        <h2 className="text-xl font-semibold text-white/90">Latest Updates</h2>
      </div>

      <div className="space-y-4">
        {updates.map((update) => (
          <div
            key={update.id}
            className="p-4 bg-white/[0.02] border border-white/10 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-white/90">{update.title}</h3>
              <span className="text-sm text-white/60">{update.date}</span>
            </div>
            <p className="text-sm text-white/80">{update.description}</p>
            <div className="mt-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                update.type === 'feature' ? 'bg-green-500/10 text-green-400' :
                update.type === 'maintenance' ? 'bg-yellow-500/10 text-yellow-400' :
                'bg-blue-500/10 text-blue-400'
              }`}>
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}