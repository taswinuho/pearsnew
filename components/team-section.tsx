"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Director",
    bio: "Former cycling coach with 15 years experience in youth sports development.",
    image: "/professional-woman-portrait-friendly-smile.jpg",
  },
  {
    name: "David Chen",
    role: "Head of Events",
    bio: "Event management specialist who ensures every race day runs smoothly and safely.",
    image: "/professional-asian-man-portrait-friendly.jpg",
  },
  {
    name: "Emma Roberts",
    role: "Community Manager",
    bio: "Passionate about building connections between PEARS families across Australia.",
    image: "/professional-woman-portrait-blonde-friendly.jpg",
  },
  {
    name: "Michael Torres",
    role: "Safety Officer",
    bio: "Certified safety professional ensuring all events meet the highest standards.",
    image: "/professional-man-portrait-safety-officer.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="bg-[#0a1628] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4">
            Meet The <span className="text-[#ff5722] font-brier">Team</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The passionate people behind PEARS who work tirelessly to create amazing experiences for young riders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-square bg-[#1a2744] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-1">{member.name}</h3>
              <p className="text-[#ff5722] font-bold text-sm uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
