"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, MapPin, Calendar, TrendingUp, TrendingDown, Minus, ArrowLeft, Star, Clock } from "lucide-react"
import Link from "next/link"
import type { Rider } from "@/lib/riders-data"

interface RiderProfileProps {
  rider: Rider
}

export function RiderProfile({ rider }: RiderProfileProps) {
  const rankChange = rider.previousRank - rider.rank

  const getRankChangeIcon = () => {
    if (rankChange > 0) return <TrendingUp className="w-5 h-5 text-green-500" />
    if (rankChange < 0) return <TrendingDown className="w-5 h-5 text-red-500" />
    return <Minus className="w-5 h-5 text-gray-400" />
  }

  const stats = [
    { label: "Total Points", value: rider.points.toLocaleString(), icon: Star },
    { label: "Races", value: rider.races, icon: Calendar },
    { label: "Wins", value: rider.wins, icon: Trophy },
    { label: "Podiums", value: rider.podiums, icon: Medal },
    { label: "Best Time", value: rider.bestTime, icon: Clock },
    { label: "Win Rate", value: `${Math.round((rider.wins / rider.races) * 100)}%`, icon: TrendingUp },
  ]

  return (
    <section className="pt-24 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 text-[#0a1628]/60 hover:text-[#ff5722] font-bold text-sm uppercase mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Rankings
          </Link>

          <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#0a1628]/10 mb-8">
            <div className="bg-[#0a1628] px-6 md:px-12 py-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#ff5722]">
                    <img
                      src={rider.avatar || "/placeholder.svg"}
                      alt={rider.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#ff5722] rounded-full flex items-center justify-center text-white font-black text-xl">
                    #{rider.rank}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white">{rider.name}</h1>
                    {getRankChangeIcon()}
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {rider.location}, {rider.state}
                    </span>
                    <span className="bg-[#ff5722] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                      {rider.category}
                    </span>
                    <span className="text-sm">Age {rider.age}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 md:p-8 bg-[#fef7ed]">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center border border-[#0a1628]/10"
                >
                  <stat.icon className="w-5 h-5 text-[#ff5722] mx-auto mb-2" />
                  <p className="text-2xl font-black text-[#0a1628]">{stat.value}</p>
                  <p className="text-xs text-[#0a1628]/50 uppercase font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-xl font-black uppercase text-[#0a1628] mb-4">About</h2>
              <p className="text-[#0a1628]/70 leading-relaxed mb-6">{rider.bio}</p>
              <div className="flex items-center gap-2 text-sm text-[#0a1628]/50">
                <Calendar className="w-4 h-4" />
                Racing with PEARS since {rider.joinedYear}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-[#0a1628]/10">
              <h3 className="text-lg font-black uppercase text-[#0a1628] mb-4">Season Highlights</h3>
              <div className="space-y-3">
                {rider.wins > 0 && (
                  <div className="flex items-center gap-3 text-[#0a1628]/70">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>
                      {rider.wins} race {rider.wins === 1 ? "win" : "wins"} this season
                    </span>
                  </div>
                )}
                {rider.podiums > 0 && (
                  <div className="flex items-center gap-3 text-[#0a1628]/70">
                    <Medal className="w-5 h-5 text-[#ff5722]" />
                    <span>
                      {rider.podiums} podium {rider.podiums === 1 ? "finish" : "finishes"}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-[#0a1628]/70">
                  <Clock className="w-5 h-5 text-[#0a1628]/40" />
                  <span>Personal best: {rider.bestTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-[#0a1628]/10">
              <h3 className="text-lg font-black uppercase text-[#0a1628] mb-4">Ranking Progress</h3>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-[#0a1628]/50">Previous Rank</p>
                  <p className="text-2xl font-black text-[#0a1628]">#{rider.previousRank}</p>
                </div>
                <div className="text-3xl text-[#0a1628]/20">→</div>
                <div>
                  <p className="text-sm text-[#0a1628]/50">Current Rank</p>
                  <p className="text-2xl font-black text-[#ff5722]">#{rider.rank}</p>
                </div>
              </div>
              <div
                className={`text-sm font-bold ${rankChange > 0 ? "text-green-500" : rankChange < 0 ? "text-red-500" : "text-gray-500"}`}
              >
                {rankChange > 0
                  ? `↑ Up ${rankChange} position${rankChange > 1 ? "s" : ""}`
                  : rankChange < 0
                    ? `↓ Down ${Math.abs(rankChange)} position${Math.abs(rankChange) > 1 ? "s" : ""}`
                    : "→ No change"}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
