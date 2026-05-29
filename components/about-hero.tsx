"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Star } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] bg-[#0a1628] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5722]/30 via-transparent to-[#1a2744]/50" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#ff5722]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#ff5722]/20 border border-[#ff5722]/30 rounded-full px-4 py-2 mb-6"
        >
          <Heart className="w-4 h-4 text-[#ff5722]" />
          <span className="text-[#ff5722] text-sm font-bold uppercase tracking-wider">Our Story</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 tracking-tight"
        >
          About <span className="text-[#ff5722] font-brier">PEARS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
        >
          Pushbike Events and Ranking System - Where young champions begin their journey on two wheels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-white/60"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Passion for Kids</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Safety First</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Fun & Competitive</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
