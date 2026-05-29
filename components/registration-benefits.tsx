"use client"

import { motion } from "framer-motion"
import { Trophy, Calendar, Users, Star, Shield, Gift } from "lucide-react"

const benefits = [
  {
    icon: Calendar,
    title: "Event Access",
    description: "Register for any PEARS event across Australia with priority booking.",
  },
  {
    icon: Trophy,
    title: "Rankings Tracking",
    description: "Track your rider's progress and see their position on the leaderboards.",
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Join our private community of PEARS families for tips and support.",
  },
  {
    icon: Star,
    title: "Rewards Program",
    description: "Earn points for participation that can be redeemed for gear and merchandise.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "All registered riders are covered by event insurance at PEARS races.",
  },
  {
    icon: Gift,
    title: "Welcome Kit",
    description: "New members receive a PEARS welcome kit with stickers and a race number.",
  },
]

export function RegistrationBenefits() {
  return (
    <section className="bg-[#ff5722] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">Member Benefits</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            When you register with PEARS, your family gets access to exclusive benefits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <benefit.icon className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-black uppercase text-white mb-2">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
