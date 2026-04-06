"use client"

import { motion } from "framer-motion"
import { Camera } from "lucide-react"

export function GalleryHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-[#ff5722] text-white text-xs font-black uppercase px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4" />
            Photo Gallery
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white mb-6 text-balance">
            Capturing <span className="text-[#ff5722]">Moments</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Relive the excitement, joy, and determination of our young riders. Browse through memories from PEARS events
            across Australia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
