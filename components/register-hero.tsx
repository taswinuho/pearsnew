"use client"

import { motion } from "framer-motion"
import { UserPlus, CheckCircle, Bike } from "lucide-react"

export function RegisterHero() {
  return (
    <section className="relative min-h-[60vh] bg-[#0a1628] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff5722]/30 via-transparent to-[#1a2744]/50" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#ff5722]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#ff5722]/20 border border-[#ff5722]/30 rounded-full px-4 py-2 mb-6"
        >
          <UserPlus className="w-4 h-4 text-[#ff5722]" />
          <span className="text-[#ff5722] text-sm font-bold uppercase tracking-wider">Join PEARS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white mb-6 tracking-tight"
        >
          Register <span className="text-[#ff5722] font-brier">Today</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
        >
          Start your child's racing journey with PEARS. Registration is quick, easy, and opens the door to exciting
          events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 text-white/60"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Free Registration</span>
          </div>
          <div className="flex items-center gap-2">
            <Bike className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Instant Access</span>
          </div>
          <div className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#ff5722]" />
            <span className="font-medium">Family Friendly</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
