"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const scheduleData = [
  {
    id: 1,
    round: "01",
    location: "SYDNEY",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "16 MAR 25",
    ageGroup: "3-4 YRS",
    category: "Balance Bike",
    image: "/images/lorenzo-podio3.png",
  },
  {
    id: 2,
    round: "02",
    location: "MELBOURNE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "23 MAR 25",
    ageGroup: "5-6 YRS",
    category: "Strider Cup",
    image: "/images/lorenzo-podio5.png",
  },
  {
    id: 3,
    round: "03",
    location: "BRISBANE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "6 APR 25",
    ageGroup: "2-3 YRS",
    category: "Mini Race",
    image: "/images/lorenzo-podio4.png",
  },
  {
    id: 4,
    round: "04",
    location: "PERTH",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "13 APR 25",
    ageGroup: "4-5 YRS",
    category: "Sprint",
    image: "/images/lorenzo-podio7.png",
  },
  {
    id: 5,
    round: "05",
    location: "ADELAIDE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "20 APR 25",
    ageGroup: "3-4 YRS",
    category: "Balance Bike",
    image: "/images/lorenzo-podio2.png",
  },
  {
    id: 6,
    round: "06",
    location: "GOLD COAST",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "4 MAY 25",
    ageGroup: "5-6 YRS",
    category: "Championship",
    image: "/images/lorenzo-podio3.png",
  },
  {
    id: 7,
    round: "07",
    location: "CANBERRA",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "18 MAY 25",
    ageGroup: "2-3 YRS",
    category: "Mini Race",
    image: "/images/lorenzo-podio5.png",
  },
  {
    id: 8,
    round: "08",
    location: "NEWCASTLE",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "25 MAY 25",
    ageGroup: "4-5 YRS",
    category: "Sprint",
    image: "/images/lorenzo-podio4.png",
  },
  {
    id: 9,
    round: "09",
    location: "HOBART",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "1 JUN 25",
    ageGroup: "3-4 YRS",
    category: "Balance Bike",
    image: "/images/lorenzo-podio7.png",
  },
  {
    id: 10,
    round: "10",
    location: "DARWIN",
    flagImage: "/images/flags/flag-Australia.svg",
    date: "15 JUN 25",
    ageGroup: "5-6 YRS",
    category: "Finals",
    image: "/images/lorenzo-podio2.png",
  },
]

export function InteractiveSchedule() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full bg-[#1a2744] py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-6xl font-bold uppercase leading-none text-white tracking-tighter">
            UPCOMING
          </h2>
          <h3 className="font-brier text-5xl md:text-7xl text-[#ff5722] leading-none mt-2">Events</h3>
          <p className="text-white/60 mt-4 max-w-lg">
            Register your young rider for upcoming pushbike racing events across Australia.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-12 gap-4 mb-4 text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-widest px-4">
            <div className="col-span-1">Round</div>
            <div className="col-span-3">Location</div>
            <div className="col-span-3 text-center">Date</div>
            <div className="col-span-2 text-center">Age Group</div>
            <div className="col-span-3 text-right">Category</div>
          </div>

          {scheduleData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredEvent(item.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              className="group relative transition-all duration-300"
            >
              <div className="grid grid-cols-12 gap-4 py-4 md:py-6 px-4 items-center border-t border-white/10 group-hover:bg-[#ff5722] group-hover:border-transparent transition-colors duration-300">
                <div className="col-span-1 relative">
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-3xl md:text-5xl text-white/40 group-hover:text-white relative z-10 opacity-100">
                    {item.round}
                  </span>
                </div>

                <div className="col-span-3 flex items-center gap-3">
                  <Image
                    src={item.flagImage || "/placeholder.svg"}
                    alt={`${item.location} flag`}
                    width={40}
                    height={30}
                    className="w-8 h-6 md:w-10 md:h-8 object-cover rounded-sm shadow-sm"
                  />
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white uppercase tracking-tighter leading-none group-hover:text-white transition-colors md:text-4xl">
                    {item.location}
                  </span>
                </div>

                <div className="col-span-3 text-center font-[family-name:var(--font-oswald)] font-bold text-xl md:text-3xl text-white/80 group-hover:text-white transition-colors uppercase">
                  {item.date}
                </div>

                <div className="col-span-2 text-center">
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-lg md:text-2xl text-[#ff5722] group-hover:text-white transition-colors">
                    {item.ageGroup}
                  </span>
                </div>

                <div className="col-span-3 text-right font-[family-name:var(--font-oswald)] font-bold text-lg md:text-2xl text-white group-hover:text-white">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 w-[300px] md:w-[400px] aspect-[3/4] mix-blend-normal">
        <AnimatePresence mode="wait">
          {hoveredEvent && (
            <motion.div
              key={hoveredEvent}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={scheduleData.find((d) => d.id === hoveredEvent)?.image || ""}
                alt="Event preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#ff5722] font-bold uppercase tracking-widest text-sm">Event Preview</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
