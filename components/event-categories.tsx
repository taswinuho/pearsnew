"use client"

import { motion } from "framer-motion"
import { Baby, Smile, Star, Zap } from "lucide-react"

const categories = [
  {
    icon: Baby,
    age: "2-3 Years",
    name: "Tiny Tots",
    description: "First steps into racing! Focus on balance, confidence, and fun in a safe environment.",
    color: "#ff5722",
  },
  {
    icon: Smile,
    age: "3-4 Years",
    name: "Mini Racers",
    description: "Building coordination and speed while developing a love for the sport.",
    color: "#ff7043",
  },
  {
    icon: Star,
    age: "4-5 Years",
    name: "Junior Stars",
    description: "Competitive racing with developing skills, technique, and sportsmanship.",
    color: "#ff5722",
  },
  {
    icon: Zap,
    age: "5-6 Years",
    name: "Speed Demons",
    description: "Advanced racing for experienced riders ready to compete at higher levels.",
    color: "#ff7043",
  },
]

export function EventCategories() {
  return (
    <section className="bg-[#0a1628] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Age <span className="text-[#ff5722] font-brier">Categories</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            PEARS events are organized by age to ensure fair competition and appropriate challenges for every rider.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.age}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#1a2744] rounded-2xl p-8 border border-white/10 hover:border-[#ff5722]/50 transition-all"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <category.icon className="w-8 h-8" style={{ color: category.color }} />
              </div>

              <p className="text-[#ff5722] font-bold text-sm uppercase tracking-wider mb-2">{category.age}</p>
              <h3 className="text-2xl font-black uppercase text-white mb-3">{category.name}</h3>
              <p className="text-white/60 leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
