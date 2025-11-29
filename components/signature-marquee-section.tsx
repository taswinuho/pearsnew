"use client"

import { motion } from "framer-motion"

export default function SignatureMarqueeSection() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center z-0 overflow-hidden">
      <div className="w-full flex flex-col gap-4 md:gap-8 py-10 select-none pointer-events-none">
        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <h2
                key={i}
                className="font-[family-name:var(--font-brier)] text-[12vw] md:text-[8vw] text-[#ff5722] leading-[0.9] tracking-tight px-4"
              >
                RACE DAY READY RACE DAY READY RACE DAY READY RACE DAY READY
              </h2>
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...Array(4)].map((_, i) => (
              <h2
                key={i}
                className="font-[family-name:var(--font-oswald)] font-bold uppercase text-[12vw] md:text-[8vw] text-white leading-[0.9] tracking-tighter px-4"
              >
                YOUNG CHAMPIONS RISING YOUNG CHAMPIONS RISING YOUNG CHAMPIONS RISING
              </h2>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
