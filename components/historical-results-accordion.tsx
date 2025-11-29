"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface RaceResult {
  round: string
  location: string
  flagImage: string
  date: string
  winner: string
  ageGroup: string
}

interface YearData {
  year: string
  totalEvents: string
  participants: string
  results: RaceResult[]
}

const historicalData: YearData[] = [
  {
    year: "2024",
    totalEvents: "48",
    participants: "1,250",
    results: [
      {
        round: "01",
        location: "SYDNEY",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "2 MAR 24",
        winner: "Alex T.",
        ageGroup: "3-4 YRS",
      },
      {
        round: "02",
        location: "MELBOURNE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "9 MAR 24",
        winner: "Emma L.",
        ageGroup: "5-6 YRS",
      },
      {
        round: "03",
        location: "BRISBANE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "24 MAR 24",
        winner: "Noah W.",
        ageGroup: "2-3 YRS",
      },
      {
        round: "04",
        location: "PERTH",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "7 APR 24",
        winner: "Mia K.",
        ageGroup: "4-5 YRS",
      },
      {
        round: "05",
        location: "ADELAIDE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "21 APR 24",
        winner: "Liam S.",
        ageGroup: "3-4 YRS",
      },
      {
        round: "06",
        location: "GOLD COAST",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "5 MAY 24",
        winner: "Olivia P.",
        ageGroup: "5-6 YRS",
      },
    ],
  },
  {
    year: "2023",
    totalEvents: "42",
    participants: "980",
    results: [
      {
        round: "01",
        location: "SYDNEY",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "19 MAR 23",
        winner: "Jack M.",
        ageGroup: "3-4 YRS",
      },
      {
        round: "02",
        location: "MELBOURNE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "2 APR 23",
        winner: "Sophie R.",
        ageGroup: "5-6 YRS",
      },
      {
        round: "03",
        location: "BRISBANE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "16 APR 23",
        winner: "Lucas H.",
        ageGroup: "2-3 YRS",
      },
      {
        round: "04",
        location: "PERTH",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "30 APR 23",
        winner: "Ava C.",
        ageGroup: "4-5 YRS",
      },
    ],
  },
  {
    year: "2022",
    totalEvents: "36",
    participants: "720",
    results: [
      {
        round: "01",
        location: "SYDNEY",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "28 MAR 22",
        winner: "Ethan B.",
        ageGroup: "3-4 YRS",
      },
      {
        round: "02",
        location: "MELBOURNE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "11 APR 22",
        winner: "Chloe D.",
        ageGroup: "5-6 YRS",
      },
      {
        round: "03",
        location: "BRISBANE",
        flagImage: "/images/flags/flag-Australia.svg",
        date: "25 APR 22",
        winner: "Mason F.",
        ageGroup: "2-3 YRS",
      },
    ],
  },
]

export function HistoricalResultsAccordion() {
  const [activeYear, setActiveYear] = useState<string | null>("2024")

  return (
    <div className="w-full bg-[#0a1628] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="flex flex-col">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl font-bold uppercase leading-none text-white tracking-tighter">
              PAST SEASONS
            </h2>
            <h1 className="font-brier text-5xl text-[#ff5722] leading-none md:-mt-2 md:text-7xl mt-2.5">Results</h1>
          </div>
          <p className="text-zinc-500 text-sm md:text-base max-w-xs md:text-right font-medium">
            Browse through our history of young champions and memorable race days.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {historicalData.map((data) => (
            <div key={data.year} className="border-b border-white/10 last:border-none">
              <button
                onClick={() => setActiveYear(activeYear === data.year ? null : data.year)}
                className={cn(
                  "w-full flex items-center justify-between p-4 md:p-6 transition-all duration-300 ease-out group",
                  activeYear === data.year ? "bg-[#ff5722] text-white" : "bg-transparent text-white hover:bg-white/5",
                )}
              >
                <div className="flex items-center gap-6">
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 md:w-8 md:h-8 transition-transform duration-300",
                      activeYear === data.year ? "rotate-180 text-white" : "text-white -rotate-90",
                    )}
                  />
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-5xl md:text-7xl tracking-tighter leading-none">
                    {data.year}
                  </span>
                </div>

                <div className="flex items-center gap-8 md:gap-16 pr-4">
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Events</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl leading-none">
                      {data.totalEvents}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-xs font-bold uppercase opacity-60 mb-1">Riders</div>
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-4xl leading-none">
                      {data.participants}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {activeYear === data.year && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#1a2744]/30"
                  >
                    <div className="grid grid-cols-12 gap-4 py-4 px-6 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-widest border-b border-white/10">
                      <div className="col-span-1">Round</div>
                      <div className="col-span-3">Location</div>
                      <div className="col-span-3 text-center">Date</div>
                      <div className="col-span-3 text-center">Winner</div>
                      <div className="col-span-2 text-right">Age Group</div>
                    </div>

                    <div className="p-0">
                      {data.results.map((result, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-12 gap-4 py-4 px-6 border-b border-white/5 text-white hover:bg-white/5 transition-colors items-center group"
                        >
                          <div className="col-span-1 relative">
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white/40 relative z-10">
                              {result.round}
                            </span>
                          </div>

                          <div className="col-span-3 flex items-center gap-3">
                            <Image
                              src={result.flagImage || "/placeholder.svg"}
                              alt={`${result.location} flag`}
                              width={32}
                              height={24}
                              className="w-7 h-5 md:w-8 md:h-6 object-cover rounded-sm"
                            />
                            <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                              {result.location}
                            </span>
                          </div>

                          <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-2xl text-white/70 uppercase">
                            {result.date}
                          </div>

                          <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-2xl text-[#ff5722]">
                            {result.winner}
                          </div>

                          <div className="col-span-2 text-right font-[family-name:var(--font-oswald)] font-bold text-lg text-white/60">
                            {result.ageGroup}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
