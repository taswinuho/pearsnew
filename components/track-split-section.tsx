"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function TrackSplitSection() {
  return (
    <section id="track" className="relative min-h-screen bg-[#fef7ed]">
      <div className="grid md:grid-cols-2 min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden cursor-pointer"
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }} className="absolute inset-0">
            <Image src="/images/kids-pushbike-race-event-starting-line.jpg" alt="Race Events" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent z-10" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-12 md:p-16 z-20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase mb-8 leading-none"
            >
              RACE
              <br />
              <span className="text-[#ff5722]">EVENTS</span>
            </motion.h3>

            <motion.button
              whileHover={{ scale: 1.1, width: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group/btn bg-[#ff5722] hover:bg-[#ff5722]/90 text-white font-bold h-16 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <span className="font-black uppercase text-sm tracking-wider">EXPLORE</span>
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden cursor-pointer"
        >
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.7 }} className="absolute inset-0">
            <Image src="/images/kids-pushbike-trophy-ceremony-award.jpg" alt="Rankings" fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent z-10" />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-12 md:p-16 z-20">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase mb-8 leading-none"
            >
              VIEW
              <br />
              <span className="text-[#ff5722]">RANKINGS</span>
            </motion.h3>

            <motion.button
              whileHover={{ scale: 1.1, width: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group/btn bg-[#ff5722] hover:bg-[#ff5722]/90 text-white font-bold h-16 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <span className="font-black uppercase text-sm tracking-wider">EXPLORE</span>
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
