"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=600&width=800", alt: "Race start line", category: "Racing" },
  { id: 2, src: "/placeholder.svg?height=800&width=600", alt: "Safety first", category: "Preparation" },
  { id: 3, src: "/placeholder.svg?height=600&width=800", alt: "Podium celebration", category: "Awards" },
  { id: 4, src: "/placeholder.svg?height=600&width=800", alt: "Track action", category: "Racing" },
  { id: 5, src: "/placeholder.svg?height=800&width=600", alt: "Family fun", category: "Community" },
  { id: 6, src: "/placeholder.svg?height=600&width=800", alt: "Determination", category: "Racing" },
  { id: 7, src: "/placeholder.svg?height=600&width=800", alt: "Volunteers", category: "Community" },
  { id: 8, src: "/placeholder.svg?height=800&width=600", alt: "First place", category: "Awards" },
  { id: 9, src: "/placeholder.svg?height=600&width=800", alt: "Racing pack", category: "Racing" },
  { id: 10, src: "/placeholder.svg?height=600&width=800", alt: "Cheering crowd", category: "Community" },
  { id: 11, src: "/placeholder.svg?height=800&width=600", alt: "Finish line", category: "Racing" },
  { id: 12, src: "/placeholder.svg?height=600&width=800", alt: "Registration", category: "Preparation" },
]

const categories = ["All", "Racing", "Awards", "Community", "Preparation"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const currentIndex = lightboxImage !== null ? filteredImages.findIndex((img) => img.id === lightboxImage) : -1

  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentIndex === -1) return
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length
    setLightboxImage(filteredImages[newIndex].id)
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-[#fef7ed]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-bold uppercase text-sm transition-all ${
                selectedCategory === category
                  ? "bg-[#ff5722] text-white"
                  : "bg-white text-[#0a1628] hover:bg-[#0a1628] hover:text-white border-2 border-[#0a1628]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setLightboxImage(image.id)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#ff5722] text-white text-xs font-bold uppercase px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a1628]/95 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox("prev")
              }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox("next")
              }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightboxImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages.find((img) => img.id === lightboxImage)?.src}
              alt={filteredImages.find((img) => img.id === lightboxImage)?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
