"use client"

import { motion } from "framer-motion"

const partners = [
  "STRIDER BIKES",
  "BELL HELMETS",
  "BMX AUSTRALIA",
  "CYCLING NSW",
  "REBEL SPORT",
  "GIANT BIKES",
  "FOX RACING",
  "SHIMANO",
]

export default function PartnersSection() {
  return (
    <section className="relative min-h-screen bg-[#fef7ed] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
              <motion.path
                d="M50,200 Q80,100 150,180 Q200,240 250,150 Q280,100 320,170 Q340,210 360,180"
                fill="none"
                stroke="#ff5722"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
              <motion.path
                d="M80,250 Q120,300 180,260 Q240,220 280,280"
                fill="none"
                stroke="#ff5722"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-[#0a1628] mb-2">PARTNERS</h2>
              <h3 className="text-3xl md:text-5xl font-serif italic text-[#0a1628]/80">& Sponsors</h3>
            </div>

            <p className="text-base md:text-lg text-[#0a1628]/70 leading-relaxed max-w-xl">
              PEARS is proud to partner with leading brands in the cycling and children's sports industry who share our
              commitment to developing young athletes.
            </p>

            <div className="grid grid-cols-4 gap-6 pt-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="aspect-square bg-white/50 rounded-xl flex items-center justify-center p-4 cursor-pointer border border-[#0a1628]/5 hover:border-[#ff5722]/50 transition-all"
                >
                  <span className="text-xs md:text-sm font-bold text-[#0a1628]/60 text-center">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
