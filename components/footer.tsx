"use client"

import { motion } from "framer-motion"
import InfiniteLogoSlider from "./infinite-logo-slider"

export default function Footer() {
  return (
    <footer className="bg-[#ff5722] pt-0 px-4 md:px-8 min-h-screen flex flex-col justify-end relative pb-5">
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-[#fef7ed] to-[#ff5722] z-0" />

      <div className="relative flex-1 flex flex-col w-full max-w-[1688px] mx-auto mt-12 z-10">
        <div
          className="absolute inset-0 w-full h-full z-0 bg-[#0a1628] overflow-hidden"
          style={{
            maskImage: 'url("/images/footer-mask.svg")',
            WebkitMaskImage: 'url("/images/footer-mask.svg")',
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full opacity-30"
            style={{
              backgroundImage: 'url("/images/curv.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col h-full px-8 md:px-24 py-12 md:py-20 md:pb-12 md:pl-0 md:pr-0">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-0">
            <div className="md:col-span-3 text-center order-2 md:order-1 md:pl-8 flex flex-col justify-center h-full">
              <h4 className="font-black text-xs uppercase mb-6 text-white/40 tracking-[0.2em]">NAVIGATE</h4>
              <ul className="space-y-2">
                {[
                  { name: "HOME", href: "/" },
                  { name: "EVENTS", href: "/events" },
                  { name: "RANKINGS", href: "/rankings" },
                  { name: "BLOG", href: "/blog" },
                  { name: "FEATURES", href: "/features" },
                  { name: "ABOUT", href: "/about" },
                  { name: "CONTACT", href: "/contact" },
                ].map((item) => (
                  <li className="leading-5" key={item.name}>
                    <a
                      href={item.href}
                      className="text-white font-bold text-xl md:text-2xl uppercase hover:text-[#ff5722] transition-colors inline-block leading-4"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/register"
                    className="text-[#ff5722] font-black text-xl md:text-2xl uppercase hover:text-white transition-colors inline-block"
                  >
                    REGISTER
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-6 flex flex-col items-center justify-center order-1 md:order-2 relative">
              <div className="absolute top-0 left-0 right-0 z-0 text-center transform -translate-y-1/4 md:-translate-y-0 mt-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mix-blend-overlay opacity-90"
                >
                  <span className="font-sans block">
                    WHERE
                    <span className="font-brier text-[#ff5722]"> CHAMPIONS</span>
                  </span>
                  <span className="font-sans block">
                    ARE <span className="font-brier text-[#ff5722]">BORN.</span>
                  </span>
                </motion.h2>
              </div>

              <div className="relative w-full h-[300px] md:h-[500px] z-10 mt-24 md:mt-24 flex items-center justify-center bg-gradient-to-b from-[#1a2535] to-[#0a1628] rounded-lg overflow-hidden">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">🏍️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">PEARS 3D Showcase</h3>
                  <p className="text-white/60">Premium Pushbike Racing Equipment</p>
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-12 z-20 bg-[#ff5722] text-white font-black uppercase px-8 py-4 rounded-[14px] text-sm tracking-wider hover:bg-white hover:text-[#0a1628] transition-colors flex items-center gap-2"
              >
                REGISTER YOUR RIDER
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </motion.button>
            </div>

            <div className="md:col-span-3 text-center order-3 md:order-2 md:pr-8 flex flex-col justify-center h-full">
              <h4 className="font-black text-xs uppercase mb-6 text-white/40 tracking-[0.2em]">FOLLOW US</h4>
              <ul className="space-y-2">
                {["FACEBOOK", "INSTAGRAM", "YOUTUBE", "TIKTOK"].map((platform) => (
                  <li className="leading-5" key={platform}>
                    <a
                      href="#"
                      className="text-white font-bold text-xl md:text-2xl uppercase hover:text-[#ff5722] transition-colors inline-block leading-4"
                    >
                      {platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-white/10 border-t-0 mb-0 mt-32 pt-0">
            <InfiniteLogoSlider />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs font-bold tracking-wider uppercase">
          <p>© 2025 PEARS. All rights reserved</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:opacity-60 transition-opacity">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:opacity-60 transition-opacity">
              TERMS
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1688px] mx-auto px-8 md:px-12 relative z-20 pt-0">
        <div className="flex flex-col md:flex-row justify-between items-center text-white text-xs font-bold tracking-wider uppercase">
          <p className="text-xs mt-7 opacity-40 font-medium leading-4 text-left">
            PEARS (Pushbike Events and Ranking System) is dedicated to providing safe, fun, and competitive racing
            experiences for young riders aged 2-6 years. We believe every child deserves the chance to discover their
            potential on two wheels.
          </p>
        </div>
      </div>
    </footer>
  )
}
