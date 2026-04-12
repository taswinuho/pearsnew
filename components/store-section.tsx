"use client"

import { ArrowRight, Trophy, Users, Calendar, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function StoreSection() {
  return (
    <section id="store" className="relative min-h-screen bg-[#fef7ed] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-6">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#0a1628]/60">
              RANKINGS & EVENTS
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-[#0a1628] leading-[0.9]">
              PEARS <span className="text-[#ff5722]">HUB</span>
            </h2>
            <p className="text-base md:text-lg text-[#0a1628]/70 max-w-md leading-relaxed">
              Your one-stop destination for pushbike racing. Track rankings, register for events, and connect with the
              community of young champions and their families.
            </p>

            <Link
              href="#events"
              className="inline-flex items-center gap-3 bg-[#ff5722] text-white px-8 py-4 rounded-full text-sm font-black uppercase hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              VIEW RANKINGS
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-[#0a1628] rounded-2xl p-4 text-white">
                <Trophy className="w-8 h-8 text-[#ff5722] mb-2" />
                <p className="font-bold text-sm">Live Rankings</p>
                <p className="text-xs text-white/60">Updated after each event</p>
              </div>
              <div className="bg-[#0a1628] rounded-2xl p-4 text-white">
                <Users className="w-8 h-8 text-[#ff5722] mb-2" />
                <p className="font-bold text-sm">500+ Riders</p>
                <p className="text-xs text-white/60">Growing community</p>
              </div>
              <div className="bg-[#0a1628] rounded-2xl p-4 text-white">
                <Calendar className="w-8 h-8 text-[#ff5722] mb-2" />
                <p className="font-bold text-sm">20+ Events</p>
                <p className="text-xs text-white/60">Nationwide coverage</p>
              </div>
              <div className="bg-[#0a1628] rounded-2xl p-4 text-white">
                <Star className="w-8 h-8 text-[#ff5722] mb-2" />
                <p className="font-bold text-sm">Age Categories</p>
                <p className="text-xs text-white/60">2-6 years old</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <Image src="/images/kids-pushbike-racing-champion-celebration-podium.jpg" alt="PEARS Champions" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-black text-2xl">Future Champions</p>
              <p className="text-white/80 text-sm">Start your racing journey with PEARS</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
