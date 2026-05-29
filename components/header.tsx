"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState<"white" | "dark">("dark")
  const pathname = usePathname()

  const isSubPage = pathname !== "/"

  useEffect(() => {
    if (isSubPage) {
      setLogoColor("white")
      return
    }

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll >= 300)

      let newColor: "white" | "dark" = "dark"

      if (currentScroll > 2) {
        newColor = "white"
      }

      const headerOffset = 100

      const masonry = document.getElementById("masonry-gallery")
      if (masonry) {
        const rect = masonry.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          const progress = (headerOffset - rect.top) / rect.height
          if (progress > 0.65) {
            newColor = "dark"
          }
        }
      }

      const helmets = document.getElementById("helmets")
      if (helmets) {
        const rect = helmets.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "white"
        }
      }

      const social = document.getElementById("social-section")
      if (social) {
        const rect = social.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      const techSpecs = document.getElementById("tech-specs")
      if (techSpecs) {
        const rect = techSpecs.getBoundingClientRect()
        if (rect.top <= headerOffset && rect.bottom > headerOffset) {
          newColor = "dark"
        }
      }

      setLogoColor(newColor)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isSubPage])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "EVENTS", href: "/events" },
    { name: "RANKINGS", href: "/rankings" },
    { name: "BLOG", href: "/blog" },
    { name: "FEATURES", href: "/features" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
    { name: "REGISTER", href: "/register" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isSubPage ? "backdrop-blur-md bg-[#0a1628]/80" : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center items-start"
          >
            <Link href="/">
              <h1
                className={`font-brier text-3xl leading-none mt-1 tracking-tight font-bold transition-colors duration-300 ${
                  logoColor === "white" || isSubPage ? "text-white" : "text-[#0a1628]"
                }`}
              >
                PEARS
              </h1>
            </Link>
          </motion.div>

          <nav className="hidden xl:flex items-center gap-6">
            {navItems.slice(0, 7).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-bold text-sm uppercase tracking-wider transition-colors hover:text-[#ff5722] ${
                  pathname === item.href
                    ? "text-[#ff5722]"
                    : logoColor === "white" || isSubPage
                      ? "text-white"
                      : "text-[#0a1628]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/register"
              className="bg-[#ff5722] hover:bg-white hover:text-[#0a1628] text-white font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors"
            >
              Register
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 xl:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 bg-[#0a1628]/80 border border-white/30 hover:bg-[#ff5722] rounded-lg transition-colors text-white px-3 py-2.5"
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a1628]/95 backdrop-blur-xl z-40 flex items-center justify-center xl:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-6 text-4xl md:text-5xl font-black uppercase text-white">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0, rotate: 0 },
                      closed: { opacity: 0, y: 20, rotate: -5 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`inline-block transition-colors duration-300 hover:scale-110 transform ${
                        item.name === "REGISTER"
                          ? "text-[#ff5722] hover:text-white"
                          : pathname === item.href
                            ? "text-[#ff5722]"
                            : "hover:text-[#ff5722]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-12 flex justify-center gap-6"
              >
                {["INSTAGRAM", "FACEBOOK", "YOUTUBE"].map((social) => (
                  <motion.a
                    key={social}
                    whileHover={{ scale: 1.1, color: "#ff5722" }}
                    href="#"
                    className="text-sm font-bold text-white/60 hover:text-[#ff5722] transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
