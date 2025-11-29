"use client"

import { useEffect, useRef, useState } from "react"
import { useScroll, useTransform, useInView } from "framer-motion"
import { Bike, Trophy, Users, Calendar } from "lucide-react"

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [signatureDrawn, setSignatureDrawn] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.2, 1, 0.2])
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0, -200])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0, 1, 1, 0])

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setSignatureDrawn(true), 800)
    }
  }, [isInView])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const sectionHeight = rect.height
        const scrolled = -rect.top
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getTextTransform = () => {
    if (scrollProgress < 0.2) {
      const progress = scrollProgress / 0.2
      return {
        opacity: progress,
        transform: `translateX(${(1 - progress) * -50}px)`,
      }
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
    }
  }

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative min-h-screen bg-[#0a1628] text-white py-24 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative h-32 flex items-center justify-center mt-16">
          <Bike className="h-16 w-16 text-[#ff5722]" strokeWidth={1.5} />
        </div>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1] xl:text-8xl">
            <span className="text-[#ff5722] font-brier leading-[1.1] text-8xl">EMPOWERING</span> YOUNG
            <br />
            RIDERS TO <span className="text-[#ff5722] font-brier leading-[1.1]">COMPETE</span>,
            <br />
            GROW AND SUCCEED
            <br />
            IN EVERY RACE.
            <br />
            BUILDING <span className="text-[#ff5722] font-brier leading-[1.1]">CHAMPIONS</span>
            <br />
            FROM THE
            <br />
            VERY FIRST PEDAL.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { icon: Users, value: "2,500+", label: "Young Riders" },
            { icon: Calendar, value: "150+", label: "Events/Year" },
            { icon: Trophy, value: "500+", label: "Champions Made" },
            { icon: Bike, value: "50+", label: "Partner Tracks" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#ff5722]" />
              <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
