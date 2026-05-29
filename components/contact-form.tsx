"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 border-2 border-[#0a1628]/10 text-center"
      >
        <div className="w-16 h-16 bg-[#ff5722] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-black uppercase text-[#0a1628] mb-3">Message Sent!</h3>
        <p className="text-[#0a1628]/60 mb-6">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", subject: "", message: "" })
          }}
          className="text-[#ff5722] font-bold uppercase text-sm hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 border-2 border-[#0a1628]/10"
    >
      <h2 className="text-2xl font-black uppercase text-[#0a1628] mb-6">Send a Message</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-[#0a1628]/60 text-sm font-bold uppercase mb-2">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#fef7ed] border-2 border-[#0a1628]/10 rounded-xl px-4 py-3 text-[#0a1628] placeholder-[#0a1628]/30 focus:border-[#ff5722] focus:outline-none"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-[#0a1628]/60 text-sm font-bold uppercase mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#fef7ed] border-2 border-[#0a1628]/10 rounded-xl px-4 py-3 text-[#0a1628] placeholder-[#0a1628]/30 focus:border-[#ff5722] focus:outline-none"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label className="block text-[#0a1628]/60 text-sm font-bold uppercase mb-2">Subject *</label>
          <select
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-[#fef7ed] border-2 border-[#0a1628]/10 rounded-xl px-4 py-3 text-[#0a1628] focus:border-[#ff5722] focus:outline-none"
          >
            <option value="">Select a topic</option>
            <option value="event-inquiry">Event Inquiry</option>
            <option value="registration">Registration Help</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="media">Media & Press</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[#0a1628]/60 text-sm font-bold uppercase mb-2">Message *</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#fef7ed] border-2 border-[#0a1628]/10 rounded-xl px-4 py-3 text-[#0a1628] placeholder-[#0a1628]/30 focus:border-[#ff5722] focus:outline-none resize-none"
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#ff5722] hover:bg-[#0a1628] text-white font-bold uppercase px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          Send Message
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.form>
  )
}
