"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Medal, TrendingUp, TrendingDown, Minus, ChevronRight } from "lucide-react"
import Link from "next/link"
import { getRidersByCategory } from "@/lib/riders-data"

const ageCategories = ["2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years"]

export function LeaderboardTabs() {
  const [activeCategory, setActiveCategory] = useState("2-3 Years")

  const riders = getRidersByCategory(activeCategory).slice(0, 8)

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
    return null
  }

  const getChangeIcon = (current: number, previous: number) => {
    const change = previous - current
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  return (
    <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0a1628] mb-4">
            Top <span className="text-[#ff5722]">Riders</span>
          </h2>
          <p className="text-[#0a1628]/70 max-w-xl mx-auto">
            Select an age category to view the current leaderboard standings.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-bold uppercase text-sm transition-all ${
                activeCategory === category
                  ? "bg-[#ff5722] text-white"
                  : "bg-white text-[#0a1628] hover:bg-[#0a1628] hover:text-white border-2 border-[#0a1628]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl overflow-hidden border-2 border-[#0a1628]/10"
          >
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-[#0a1628] text-white text-sm font-bold uppercase">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Rider</div>
              <div className="col-span-3">Location</div>
              <div className="col-span-2 text-center">Points</div>
              <div className="col-span-1 text-center">Races</div>
              <div className="col-span-1 text-center">Trend</div>
            </div>

            {riders.map((rider, index) => (
              <motion.div
                key={rider.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`grid grid-cols-12 gap-4 px-6 py-5 items-center ${
                  index !== riders.length - 1 ? "border-b border-[#0a1628]/10" : ""
                } ${rider.rank <= 3 ? "bg-[#ff5722]/5" : ""}`}
              >
                <div className="col-span-12 md:col-span-1 flex items-center gap-2">
                  <span className="md:hidden text-xs text-[#0a1628]/50 uppercase font-bold">Rank:</span>
                  <span className="flex items-center gap-2 text-2xl font-black text-[#0a1628]">
                    {getRankIcon(rider.rank)}
                    {rider.rank}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <Link
                    href={`/rankings/${rider.slug}`}
                    className="font-bold text-[#0a1628] hover:text-[#ff5722] transition-colors"
                  >
                    {rider.name}
                  </Link>
                </div>
                <div className="col-span-12 md:col-span-3 text-[#0a1628]/70">
                  {rider.location}, {rider.state}
                </div>
                <div className="col-span-6 md:col-span-2 text-center font-black text-[#ff5722]">
                  {rider.points.toLocaleString()}
                </div>
                <div className="col-span-3 md:col-span-1 text-center text-[#0a1628]/70">{rider.races}</div>
                <div className="col-span-3 md:col-span-1 flex justify-center">
                  {getChangeIcon(rider.rank, rider.previousRank)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/rankings"
            className="inline-flex items-center gap-2 text-[#ff5722] hover:text-[#0a1628] font-bold uppercase transition-colors"
          >
            View Full Rankings
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
