"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What age groups can participate in PEARS events?",
    answer:
      "PEARS events are designed for children aged 2-6 years. We have four age categories: Tiny Tots (2-3 years), Mini Racers (3-4 years), Junior Stars (4-5 years), and Speed Demons (5-6 years). Each category has age-appropriate courses and competition formats.",
  },
  {
    question: "What equipment does my child need?",
    answer:
      "Your child will need a balance bike (pushbike without pedals), a properly fitted helmet, closed-toe shoes, and comfortable clothing. We recommend long pants and sleeves for added protection. Some events may have specific requirements which will be communicated in advance.",
  },
  {
    question: "How do rankings work?",
    answer:
      "Riders earn points based on their performance at PEARS events. Points are awarded based on finishing position, with bonus points for participation. Rankings are updated weekly and are category-specific. The more events your child participates in, the more opportunities to climb the rankings!",
  },
  {
    question: "Are PEARS events safe for my child?",
    answer:
      "Safety is our top priority. All events have certified safety officers, first aid personnel on standby, and age-appropriate course designs. We conduct safety briefings before each race and ensure all equipment meets our safety standards. Parents are welcome to be trackside to support their riders.",
  },
  {
    question: "How do I register for an event?",
    answer:
      "You can register through our website by clicking the 'Register' button on any event page. Registration typically opens 4-6 weeks before each event. Early registration is recommended as popular events fill up quickly. You'll receive confirmation and event details via email.",
  },
  {
    question: "Can beginners participate?",
    answer:
      "PEARS welcomes riders of all skill levels. Our events are designed to be fun and encouraging for beginners while still offering competitive racing for more experienced riders. We have volunteer coaches at events who can provide tips and support for new riders.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1628] mb-4">
            Frequently Asked <span className="text-[#ff5722]">Questions</span>
          </h2>
          <p className="text-lg text-[#0a1628]/70">Everything you need to know about PEARS and our events.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border-2 border-[#0a1628]/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-[#0a1628] text-lg pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-[#0a1628]/70 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
