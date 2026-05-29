import { motion } from "framer-motion"
import { CheckCircle, Clock, Zap, Users, Trophy, BarChart3 } from "lucide-react"

interface Feature {
  id: string
  title: string
  description: string
  icon: any
  status: "available" | "coming-soon" | "roadmap"
  features: string[]
}

const features: Feature[] = [
  {
    id: "1",
    title: "Live Event Tracking",
    description: "Real-time race updates and live leaderboards during events",
    icon: Zap,
    status: "coming-soon",
    features: [
      "Live race positions",
      "Real-time standings update",
      "Instant replay highlights",
      "Push notifications",
    ],
  },
  {
    id: "2",
    title: "Advanced Analytics Dashboard",
    description: "Detailed performance metrics and training analytics for riders",
    icon: BarChart3,
    status: "roadmap",
    features: [
      "Race performance history",
      "Speed and acceleration metrics",
      "Training progress tracking",
      "Personalized recommendations",
    ],
  },
  {
    id: "3",
    title: "Mobile App",
    description: "Native iOS and Android apps for on-the-go access",
    icon: Clock,
    status: "roadmap",
    features: [
      "Event registration from phone",
      "Push notifications",
      "Offline race calendars",
      "Digital race badges",
    ],
  },
  {
    id: "4",
    title: "Coach & Mentor Network",
    description: "Connect with certified coaches and experienced riders",
    icon: Users,
    status: "roadmap",
    features: [
      "Find qualified coaches",
      "Mentorship programs",
      "Video training sessions",
      "One-on-one guidance",
    ],
  },
  {
    id: "5",
    title: "Achievement System",
    description: "Earn badges, certifications, and milestone rewards",
    icon: Trophy,
    status: "available",
    features: ["Digital badges", "Progress milestones", "Annual certifications", "Hall of fame"],
  },
  {
    id: "6",
    title: "Team Management",
    description: "Organize team participation and manage group registrations",
    icon: Users,
    status: "coming-soon",
    features: [
      "Team dashboards",
      "Bulk registration",
      "Team leaderboards",
      "Communication tools",
    ],
  },
]

const roadmapPhases = [
  {
    quarter: "Q2 2026",
    title: "Core Features Launch",
    items: [
      "Live event streaming integration",
      "Enhanced rider profiles",
      "Improved ranking algorithms",
      "Mobile web optimization",
    ],
  },
  {
    quarter: "Q3 2026",
    title: "Community Features",
    items: ["Social sharing", "Community forums", "Rider spotlights", "Team features"],
  },
  {
    quarter: "Q4 2026",
    title: "Advanced Tools",
    items: ["Mobile native app", "Analytics dashboard", "Coach network launch", "Video uploads"],
  },
  {
    quarter: "Q1 2027",
    title: "Global Expansion",
    items: ["International events", "Multi-language support", "Regional partnerships", "Live betting integration"],
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-[#1a2535] to-[#0a1628] border-b border-[#ff5722]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Platform <span className="text-[#ff5722]">Features</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Discover what PEARS offers today and what&apos;s coming next
          </p>
        </motion.div>
      </section>

      {/* Current Features */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Available <span className="text-[#ff5722]">Now</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((f) => f.status === "available")
                .map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-[#ff5722] to-[#ff7043] rounded-lg p-6 group hover:shadow-xl hover:shadow-[#ff5722]/20 transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-white/20 rounded-lg">
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle size={20} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Coming <span className="text-[#ff5722]">Soon</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features
                .filter((f) => f.status === "coming-soon")
                .map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 border border-white/20 rounded-lg p-6 hover:bg-white/10 hover:border-[#ff5722]/50 transition-all relative overflow-hidden group"
                    >
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-bold text-[#ff5722] bg-[#ff5722]/20 px-3 py-1 rounded-full">
                          Q2-Q3 2026
                        </span>
                      </div>

                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-[#ff5722]/20 rounded-lg">
                          <IconComponent size={24} className="text-[#ff5722]" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/60 text-sm mb-4">{feature.description}</p>

                      <ul className="space-y-2">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                            <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-4 md:px-8 bg-white/5 border-y border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-black text-white mb-12 text-center"
          >
            Development <span className="text-[#ff5722]">Roadmap</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#ff5722] to-transparent" />
                )}

                <div className="bg-gradient-to-br from-[#1a2535] to-[#0a1628] border border-[#ff5722]/20 rounded-lg p-6 h-full hover:border-[#ff5722] transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#ff5722] rounded-full" />
                    <h3 className="font-bold text-[#ff5722] text-sm uppercase tracking-wider">{phase.quarter}</h3>
                  </div>

                  <h4 className="text-lg font-black text-white mb-4">{phase.title}</h4>

                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#ff5722] rounded-full mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[800px] mx-auto text-center bg-gradient-to-r from-[#ff5722]/10 to-[#ff7043]/10 border border-[#ff5722]/20 rounded-lg p-8"
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Want to be the first to know about new features?
          </h2>
          <p className="text-white/60 mb-6">Join our community and stay updated on the latest PEARS developments</p>

          <button className="px-8 py-3 bg-[#ff5722] text-white font-bold rounded-lg hover:bg-[#ff7043] transition-all hover:scale-105">
            Get Updates
          </button>
        </motion.div>
      </section>
    </main>
  )
}
