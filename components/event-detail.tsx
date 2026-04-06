"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users, Ruler, Layers, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { PearsEvent } from "@/lib/events-data"

interface EventDetailProps {
  event: PearsEvent
}

export function EventDetail({ event }: EventDetailProps) {
  return (
    <section className="pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[#0a1628]/60 hover:text-[#ff5722] font-bold text-sm uppercase mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              {event.featured && (
                <span className="inline-block bg-[#ff5722] text-white text-xs font-black uppercase px-3 py-1 rounded-full mb-4">
                  Featured Event
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1628] mb-4 text-balance">
                {event.title}
              </h1>
              <p className="text-lg text-[#0a1628]/70 mb-6 leading-relaxed">{event.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border-2 border-[#0a1628]/10">
                  <div className="flex items-center gap-2 text-[#ff5722] mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Date</span>
                  </div>
                  <p className="font-bold text-[#0a1628]">{event.date}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-[#0a1628]/10">
                  <div className="flex items-center gap-2 text-[#ff5722] mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Time</span>
                  </div>
                  <p className="font-bold text-[#0a1628]">{event.time}</p>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-[#0a1628]/10 col-span-2">
                  <div className="flex items-center gap-2 text-[#ff5722] mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Location</span>
                  </div>
                  <p className="font-bold text-[#0a1628]">{event.location}</p>
                  <p className="text-sm text-[#0a1628]/60">{event.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {event.categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-[#0a1628] text-white text-xs font-bold uppercase px-3 py-1.5 rounded-lg"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-full rounded-2xl overflow-hidden">
              <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <Users className="w-4 h-4 text-[#ff5722] inline mr-2" />
                    <span className="font-bold text-[#0a1628]">
                      {event.spotsLeft}/{event.spots} spots
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border-2 border-[#0a1628]/10">
              <Ruler className="w-8 h-8 text-[#ff5722] mb-3" />
              <h3 className="font-black uppercase text-[#0a1628] mb-1">Track Length</h3>
              <p className="text-2xl font-black text-[#ff5722]">{event.trackLength}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-[#0a1628]/10">
              <Layers className="w-8 h-8 text-[#ff5722] mb-3" />
              <h3 className="font-black uppercase text-[#0a1628] mb-1">Surface</h3>
              <p className="text-sm font-bold text-[#0a1628]/70">{event.surface}</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-[#0a1628]/10">
              <Calendar className="w-8 h-8 text-[#ff5722] mb-3" />
              <h3 className="font-black uppercase text-[#0a1628] mb-1">Registration Closes</h3>
              <p className="text-sm font-bold text-[#0a1628]/70">{event.registrationDeadline}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0a1628]/10">
              <h2 className="text-2xl font-black uppercase text-[#0a1628] mb-6">Event Schedule</h2>
              <div className="space-y-3">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-[#0a1628]/10 last:border-0">
                    <span className="text-sm font-bold text-[#ff5722] w-32 shrink-0">{item.time}</span>
                    <span className="font-medium text-[#0a1628]">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0a1628]/10">
              <h2 className="text-2xl font-black uppercase text-[#0a1628] mb-6">Facilities</h2>
              <div className="grid grid-cols-2 gap-3">
                {event.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[#fef7ed] rounded-lg px-4 py-3">
                    <div className="w-2 h-2 bg-[#ff5722] rounded-full" />
                    <span className="text-sm font-medium text-[#0a1628]">{facility}</span>
                  </div>
                ))}
              </div>
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-[#ff5722] hover:text-[#0a1628] font-bold text-sm uppercase transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
