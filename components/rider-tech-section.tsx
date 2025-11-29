"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, Wind, Layers, Activity } from "lucide-react"

interface TechStat {
  label: string
  value: string
}

interface Hotspot {
  id: number
  x: number
  y: number
  label: string
  description: string
  category: "safety" | "performance" | "comfort" | "design"
  stats: TechStat[]
}

const hotspots: Hotspot[] = [
  {
    id: 1,
    x: 50,
    y: 15,
    label: "Junior Safety Helmet",
    description:
      "Lightweight certified helmet designed specifically for young riders with enhanced ventilation and impact protection.",
    category: "safety",
    stats: [
      { label: "Weight", value: "280g" },
      { label: "Certified", value: "CPSC" },
      { label: "Vents", value: "12" },
    ],
  },
  {
    id: 2,
    x: 30,
    y: 25,
    label: "Grip Gloves Pro",
    description: "Padded gloves with silicone grip patterns for confident handlebar control during intense racing.",
    category: "performance",
    stats: [
      { label: "Grip", value: "Silicone" },
      { label: "Padding", value: "3mm Foam" },
    ],
  },
  {
    id: 3,
    x: 55,
    y: 40,
    label: "Race Jersey",
    description: "Breathable moisture-wicking fabric keeps young riders cool and comfortable during competition.",
    category: "comfort",
    stats: [
      { label: "Material", value: "DryFit" },
      { label: "UV Protection", value: "UPF 50+" },
    ],
  },
  {
    id: 4,
    x: 60,
    y: 85,
    label: "Balance Bike Specs",
    description: "Adjustable seat height and lightweight aluminum frame perfect for ages 2-6 years.",
    category: "design",
    stats: [
      { label: "Frame", value: "Aluminum" },
      { label: "Weight", value: "3.2kg" },
      { label: "Ages", value: "2-6 yrs" },
    ],
  },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "safety":
      return <Shield className="w-4 h-4 text-[#ff5722]" />
    case "performance":
      return <Zap className="w-4 h-4 text-[#ff5722]" />
    case "comfort":
      return <Wind className="w-4 h-4 text-[#ff5722]" />
    case "design":
      return <Layers className="w-4 h-4 text-[#ff5722]" />
    default:
      return <Activity className="w-4 h-4 text-[#ff5722]" />
  }
}

interface HotspotPointProps {
  spot: Hotspot
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}

function HotspotPoint({ spot, isActive, onHover, onLeave }: HotspotPointProps) {
  return (
    <div
      style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onHover}
    >
      <div className="relative flex items-center justify-center w-12 h-12">
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
          className="absolute inset-0 bg-[#ff5722]/40 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 bg-[#ff5722]/30 rounded-full"
        />
        <div className="relative w-3 h-3 bg-[#ff5722] rounded-full shadow-[0_0_15px_rgba(255,87,34,1)] ring-2 ring-black/20" />
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50 w-[320px] md:w-[360px]"
          >
            <div className="absolute -top-4 left-1/2 w-px h-4 bg-gradient-to-b from-transparent to-[#ff5722]/50" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ff5722] rounded-full shadow-[0_0_10px_#ff5722]" />

            <div className="relative overflow-hidden rounded-lg bg-[#0a1628]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#ff5722]/50 to-transparent opacity-50" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#ff5722]/5 blur-[50px]" />

              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(spot.category)}
                  <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase opacity-80">
                    {spot.category}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-white/40">SPEC.{spot.id.toString().padStart(3, "0")}</div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-oswald)] uppercase tracking-wide">
                  {spot.label}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5 border-l-2 border-[#ff5722]/30 pl-3">
                  {spot.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {spot.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 rounded px-3 py-2 border border-white/5 hover:border-[#ff5722]/30 transition-colors group"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-brier group-hover:text-[#ff5722]/70 transition-colors">
                        {stat.label}
                      </div>
                      <div className="text-sm font-medium text-white font-mono">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-2 right-2 flex gap-0.5 opacity-30">
                <div className="w-1 h-1 bg-[#ff5722] rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function RiderTechSection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)

  return (
    <section id="tech-specs" className="relative min-h-screen bg-white px-6 md:px-12 overflow-visible py-0 mb-0 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-tight">
            <span className="block font-sans leading-[0.85] text-[#0a1628]">RIDER</span>
            <span className="block font-brier text-[#ff5722] text-9xl">GEAR</span>
          </h2>
          <p className="text-base mt-6 max-w-2xl text-[#0a1628] md:text-base">
            Explore the essential gear that keeps our young champions safe and competitive. Hover over the points to
            discover the technology behind each piece.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
            <Image
              src="/images/lorenzo-pose33.jpg"
              alt="Young Rider Gear Specs"
              fill
              className="object-contain"
              priority
            />

            {hotspots.map((spot) => (
              <HotspotPoint
                key={spot.id}
                spot={spot}
                isActive={activeHotspot === spot.id}
                onHover={() => setActiveHotspot(spot.id)}
                onLeave={() => setActiveHotspot(null)}
              />
            ))}
          </div>

          <div className="md:hidden text-center mt-8 text-gray-500 text-sm">
            Tap on the pulsating points to see gear information
          </div>
        </div>
      </div>
    </section>
  )
}
