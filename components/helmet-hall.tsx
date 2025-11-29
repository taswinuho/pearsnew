"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const helmets = [
  { id: 1, name: "Speedster", year: "2025", image: "/images/helmets/helmet-collection1.png" },
  { id: 2, name: "Thunder", year: "2025", image: "/images/helmets/helmet-collection2.png" },
  { id: 3, name: "Lightning", year: "2025", image: "/images/helmets/helmet-collection3.png" },
  { id: 4, name: "Blaze", year: "2024", image: "/images/helmets/helmet-collection4.png" },
  { id: 5, name: "Storm", year: "2024", image: "/images/helmets/helmet-collection5.png" },
  { id: 6, name: "Rocket", year: "2024", image: "/images/helmets/helmet-collection6.png" },
  { id: 7, name: "Nitro", year: "2025", image: "/images/helmets/helmet-collection7.png" },
  { id: 8, name: "Turbo", year: "2025", image: "/images/helmets/helmet-collection8.png" },
  { id: 9, name: "Flash", year: "2025", image: "/images/helmets/helmet-collection9.png" },
  { id: 10, name: "Dash", year: "2024", image: "/images/helmets/helmet-collection10.png" },
  { id: 11, name: "Zoom", year: "2024", image: "/images/helmets/helmet-collection11.png" },
  { id: 12, name: "Bolt", year: "2024", image: "/images/helmets/helmet-collection12.png" },
  { id: 13, name: "Comet", year: "2024", image: "/images/helmets/helmet-collection13.png" },
  { id: 14, name: "Viper", year: "2023", image: "/images/helmets/helmet-collection14.png" },
  { id: 15, name: "Apex", year: "2023", image: "/images/helmets/helmet-collection15.png" },
  { id: 16, name: "Fury", year: "2023", image: "/images/helmets/helmet-collection16.png" },
  { id: 17, name: "Blitz", year: "2023", image: "/images/helmets/helmet-collection17.png" },
  { id: 18, name: "Striker", year: "2022", image: "/images/helmets/helmet-collection18.png" },
  { id: 19, name: "Pioneer", year: "2020", image: "/images/helmets/helmet-collection19.png" },
  { id: 20, name: "Classic", year: "2021", image: "/images/helmets/helmet-collection20.png" },
]

export default function HelmetHall() {
  const [hoveredHelmet, setHoveredHelmet] = useState<number | null>(null)

  return (
    <section id="helmets" className="relative min-h-screen text-white py-24 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <span className="text-white">HELMET</span>
            <br />
            <span className="text-[#ff5722] font-brier text-8xl">COLLECTION</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl">
            Safety meets style in our curated collection of junior racing helmets. Each design combines certified
            protection with bold aesthetics that young riders love.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {helmets.map((helmet, index) => (
            <motion.div
              key={helmet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredHelmet(helmet.id)}
              onMouseLeave={() => setHoveredHelmet(null)}
              style={{
                gridRow: index % 4 === 1 ? "span 1" : "auto",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-[#1a2744] 
                           border-2 border-[#1a2744] 
                           group-hover:border-[#ff5722] 
                           group-hover:shadow-2xl 
                           group-hover:shadow-[#ff5722]/20 
                           transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src={helmet.image || "/placeholder.svg"}
                    alt={helmet.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                    style={{ mixBlendMode: "normal" }}
                  />
                </div>

                <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-xs md:text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                    {helmet.name}
                  </p>
                  <p className="text-sm md:text-base font-black text-[#ff5722] group-hover:scale-110 group-hover:text-white transition-all duration-300 inline-block">
                    {helmet.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
