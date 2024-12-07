import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeaderboardTab } from "./LeaderboardTab";
import { ReferralTab } from "./ReferralTab";
import { PersonalStatsTab } from "./PersonalStatsTab";
import { UpdatesTab } from "./UpdatesTab";
import { WithdrawTab } from "./WithdrawTab";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="stats" className="w-full">
      <TabsList className="grid w-full grid-cols-5 bg-white/[0.03] border border-white/10">
        <TabsTrigger value="stats">Personal Stats</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        <TabsTrigger value="referral">Referral</TabsTrigger>
        <TabsTrigger value="updates">Updates</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>
      <TabsContent value="stats">
        <PersonalStatsTab />
      </TabsContent>
      <TabsContent value="leaderboard">
        <LeaderboardTab />
      </TabsContent>
      <TabsContent value="referral">
        <ReferralTab />
      </TabsContent>
      <TabsContent value="updates">
        <UpdatesTab />
      </TabsContent>
      <TabsContent value="withdraw">
        <WithdrawTab />
      </TabsContent>
    </Tabs>
  );
}