"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 md:px-12 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[#ff5722] text-white text-xs font-black uppercase px-4 py-2 rounded-full mb-6">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4 text-balance">
            Contact <span className="text-[#ff5722]">PEARS</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Have questions about events, registration, or partnerships? We'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
