"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ChevronRight, Trophy } from "lucide-react"
import Link from "next/link"
import { getUpcomingEvents } from "@/lib/events-data"

export function UpcomingEvents() {
  const events = getUpcomingEvents(6)

  return (
    <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1628] mb-4">
            Upcoming <span className="text-[#ff5722]">Events</span>
          </h2>
          <p className="text-lg text-[#0a1628]/70 max-w-2xl mx-auto">
            Secure your spot at the next PEARS racing event and give your young rider an unforgettable experience.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl overflow-hidden border-2 transition-all hover:shadow-xl ${
                event.featured ? "border-[#ff5722]" : "border-[#0a1628]/10 hover:border-[#ff5722]/50"
              }`}
            >
              {event.featured && (
                <div className="absolute top-0 right-0 bg-[#ff5722] text-white text-xs font-bold uppercase px-4 py-2 rounded-bl-xl flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  Featured
                </div>
              )}

              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black uppercase text-[#0a1628] mb-3">{event.title}</h3>

                    <div className="flex flex-wrap gap-4 text-sm text-[#0a1628]/70 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#ff5722]" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#ff5722]" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#ff5722]" />
                        {event.location}, {event.city}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {event.categories.map((cat) => (
                        <span
                          key={cat}
                          className="bg-[#0a1628]/5 text-[#0a1628] text-xs font-bold uppercase px-3 py-1 rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end gap-4">
                    <div className="text-right">
                      <p className="text-sm text-[#0a1628]/50 font-medium">Available Spots</p>
                      <p className="text-2xl font-black text-[#0a1628]">
                        <span className="text-[#ff5722]">{event.spotsLeft}</span> / {event.spots}
                      </p>
                    </div>

                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#0a1628] text-white font-bold uppercase px-6 py-3 rounded-xl transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 border-2 border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white font-bold uppercase px-8 py-4 rounded-xl transition-colors"
          >
            View All Events
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
