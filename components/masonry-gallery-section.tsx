"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const galleryImages = [
  { src: "/toddler-pushbike-race-action.jpg", alt: "Young rider racing", aspect: "aspect-[3/4]" },
  { src: "/kids-balance-bike-competition.jpg", alt: "Balance bike event", aspect: "aspect-[4/3]" },
  { src: "/child-pushbike-podium-winner.jpg", alt: "Podium celebration", aspect: "aspect-[3/4]" },
  { src: "/pushbike-race-starting-gate-kids.jpg", alt: "Starting gate", aspect: "aspect-[4/3]" },
  { src: "/young-champion-pushbike-medal.jpg", alt: "Medal ceremony", aspect: "aspect-[3/4]" },
  { src: "/placeholder.svg?height=450&width=600", alt: "Family event", aspect: "aspect-[4/3]" },
  { src: "/placeholder.svg?height=600&width=450", alt: "Finish line", aspect: "aspect-[3/4]" },
  { src: "/placeholder.svg?height=450&width=600", alt: "Race track", aspect: "aspect-[4/3]" },
  { src: "/placeholder.svg?height=600&width=450", alt: "Safety gear", aspect: "aspect-[3/4]" },
  { src: "/placeholder.svg?height=450&width=600", alt: "Preparation area", aspect: "aspect-[4/3]" },
  { src: "/placeholder.svg?height=600&width=450", alt: "Community", aspect: "aspect-[3/4]" },
  { src: "/placeholder.svg?height=450&width=600", alt: "Training session", aspect: "aspect-[4/3]" },
]

export default function MasonryGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.6, 0.9], ["#0a1628", "#0f2847", "#fef7ed"])

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-150vh"])

  const column1 = galleryImages.filter((_, i) => i % 3 === 0)
  const column2 = galleryImages.filter((_, i) => i % 3 === 1)
  const column3 = galleryImages.filter((_, i) => i % 3 === 2)

  return (
    <section ref={sectionRef} id="masonry-gallery" className="relative" style={{ height: "400vh" }}>
      <motion.div className="sticky top-0 h-screen w-full overflow-hidden" style={{ backgroundColor }}>
        <motion.div style={{ y }} className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20">
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column1.map((image, index) => (
                <MasonryCard key={`col1-${index}`} image={image} index={index * 3} />
              ))}
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column2.map((image, index) => (
                <MasonryCard key={`col2-${index}`} image={image} index={index * 3 + 1} />
              ))}
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/3">
              {column3.map((image, index) => (
                <MasonryCard key={`col3-${index}`} image={image} index={index * 3 + 2} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function MasonryCard({ image, index }: { image: { src: string; alt: string; aspect: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-[#0a1628]/20 border-2 border-[#ff5722]/20 hover:border-[#ff5722]/50 w-full ${image.aspect}`}
    >
      <Image
        src={image.src || "/placeholder.svg"}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={95}
      />
    </motion.div>
  )
}
