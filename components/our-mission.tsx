"use client"

import { motion } from "framer-motion"
import { Target, Users, Trophy, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide safe, fun, and competitive pushbike racing events that inspire confidence and a love for cycling in children aged 2-6 years.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a supportive network of families who share the passion for seeing their children thrive through healthy competition and physical activity.",
  },
  {
    icon: Trophy,
    title: "Development",
    description:
      "Nurturing young talent through age-appropriate challenges that develop balance, coordination, and sportsmanship skills.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description:
      "Every child deserves the chance to experience the joy of racing. We welcome riders of all abilities and backgrounds.",
  },
]

export function OurMission() {
  return (
    <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1628] mb-6">
              Where <span className="text-[#ff5722]">Champions</span> Begin
            </h2>
            <p className="text-lg text-[#0a1628]/70 leading-relaxed mb-6">
              PEARS was founded by a group of passionate parents who wanted to create meaningful racing experiences for
              their young children. What started as informal weekend races has grown into Australia's premier pushbike
              racing organization.
            </p>
            <p className="text-lg text-[#0a1628]/70 leading-relaxed">
              We believe that every child has the potential to be a champion. Our events are designed to nurture that
              potential while ensuring safety, fun, and fair competition remain at the heart of everything we do.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-[#0a1628] rounded-3xl overflow-hidden">
              <img
                src="/images/happy-kids-on-balance-bikes-at-a-race-event-sunny-.jpg"
                alt="Kids at PEARS racing event"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white font-black text-2xl uppercase">Est. 2020</p>
                <p className="text-white/70">Inspiring young riders across Australia</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-[#0a1628]/10 hover:border-[#ff5722]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-[#ff5722]/10 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-[#ff5722]" />
              </div>
              <h3 className="text-xl font-black uppercase text-[#0a1628] mb-3">{value.title}</h3>
              <p className="text-[#0a1628]/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
