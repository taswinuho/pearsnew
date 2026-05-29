import Header from "@/components/header"
import Footer from "@/components/footer"
import { RankingsHero } from "@/components/rankings-hero"
import { LeaderboardTabs } from "@/components/leaderboard-tabs"
import { RankingsStats } from "@/components/rankings-stats"

export const metadata = {
  title: "Rankings | PEARS - Pushbike Events and Ranking System",
  description: "View live rankings and leaderboards for kids pushbike racing across all age categories.",
}

export default function RankingsPage() {
  return (
    <main className="relative">
      <Header />
      <RankingsHero />
      <div className="relative z-10">
        <RankingsStats />
        <LeaderboardTabs />
        <Footer />
      </div>
    </main>
  )
}
