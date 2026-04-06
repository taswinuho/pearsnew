"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Total Riders", value: "547", suffix: "" },
  { label: "Races Completed", value: "1,284", suffix: "" },
  { label: "Events This Season", value: "24", suffix: "" },
  { label: "States Represented", value: "6", suffix: "" },
]

export function RankingsStats() {
  return (
    <section className="bg-[#ff5722] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-white/80 font-bold uppercase text-sm tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
