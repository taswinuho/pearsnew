"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    { icon: Mail, label: "Email", value: "hello@pears.com.au", href: "mailto:hello@pears.com.au" },
    { icon: Phone, label: "Phone", value: "1300 PEARS AU", href: "tel:1300732728" },
    { icon: MapPin, label: "Address", value: "Sydney, Australia", href: null },
    { icon: Clock, label: "Hours", value: "Mon-Fri 9AM-5PM AEST", href: null },
  ]

  const socials = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0a1628]/10">
        <h2 className="text-2xl font-black uppercase text-[#0a1628] mb-6">Contact Info</h2>
        <div className="space-y-5">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#ff5722]/10 rounded-xl flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#ff5722]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-[#0a1628]/50 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-bold text-[#0a1628] hover:text-[#ff5722] transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-bold text-[#0a1628]">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0a1628]/10">
        <h2 className="text-2xl font-black uppercase text-[#0a1628] mb-6">Follow Us</h2>
        <div className="flex gap-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-[#0a1628] rounded-xl flex items-center justify-center text-white hover:bg-[#ff5722] transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-[#0a1628]/50 mt-4">
          Stay updated with the latest events, results, and PEARS community news.
        </p>
      </div>

      <div className="bg-[#0a1628] rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-black uppercase text-white mb-3">Quick Response</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          For urgent event-day inquiries, please call our hotline. For general questions, email is preferred and we
          typically respond within 24 hours on business days.
        </p>
      </div>
    </motion.div>
  )
}
