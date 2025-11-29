"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Bike } from "lucide-react"

const socialImages = [
  "/toddler-pushbike-race-action-shot.jpg",
  "/kids-balance-bike-racing-competition.jpg",
  "/young-child-pushbike-podium-celebration.jpg",
  "/pushbike-race-starting-line-kids.jpg",
  "/balance-bike-racing-family-event.jpg",
  "/kids-pushbike-champion-medal-ceremony.jpg",
  "/toddler-racing-pushbike-track.jpg",
]

export default function SocialSection() {
  return (
    <section id="social-section" className="relative bg-[#fef7ed] text-[#0a1628] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 flex items-center justify-center mt-16">
          <Bike className="h-16 w-16 text-[#ff5722]" strokeWidth={1.5} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2.5"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none leading-[2.25] text-[#0a1628] lg:text-6xl">
            JOIN THE
          </h2>
          <h3 className="text-4xl md:text-6xl font-black mt-2 lg:text-6xl leading-10 text-[#ff5722]">PEARS FAMILY</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[600px] md:h-[700px] mb-16 flex items-center justify-center"
        >
          {socialImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                rotate: (i - 3) * 6,
                scale: 1 - Math.abs(i - 3) * 0.02,
                x: (i - 3) * 90,
                y: Math.abs(i - 3) * 35,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 60,
                damping: 12,
              }}
              viewport={{ once: true }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                zIndex: 20,
                y: -40,
                transition: { duration: 0.3 },
              }}
              className="absolute w-60 md:w-80 h-80 md:h-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer origin-bottom border-4 border-[#0a1628]/10"
              style={{ zIndex: 10 - Math.abs(i - 3) }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`PEARS community photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <p className="text-lg md:text-xl text-[#0a1628]/80 font-medium">
            Follow PEARS for event updates, race highlights, and champion stories
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {["FACEBOOK", "INSTAGRAM", "YOUTUBE", "TIKTOK"].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="font-black uppercase text-sm tracking-wider text-[#0a1628] hover:text-[#ff5722] transition-colors"
              >
                {platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
