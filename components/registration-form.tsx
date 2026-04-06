"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, Calendar, MapPin, Bike, ChevronRight, CheckCircle } from "lucide-react"

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    riderName: "",
    riderDob: "",
    location: "",
    experience: "beginner",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-24 h-24 bg-[#ff5722] rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black uppercase text-[#0a1628] mb-4"
          >
            Registration <span className="text-[#ff5722]">Complete!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[#0a1628]/70 mb-8"
          >
            Welcome to the PEARS family! Check your email for confirmation and next steps. We can't wait to see your
            rider on the track!
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="/events"
            className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#0a1628] text-white font-bold uppercase px-8 py-4 rounded-xl transition-colors"
          >
            Browse Events
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#fef7ed] py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#0a1628] mb-4">
            Rider <span className="text-[#ff5722]">Registration</span>
          </h2>
          <p className="text-[#0a1628]/70">Fill out the form below to register your young rider for PEARS events.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-12 border-2 border-[#0a1628]/10"
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-black uppercase text-[#0a1628] mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-[#ff5722]" />
                Parent/Guardian Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1628]/30" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1628]/30" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                    placeholder="0400 000 000"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-[#0a1628]/10 pt-6">
              <h3 className="text-lg font-black uppercase text-[#0a1628] mb-4 flex items-center gap-2">
                <Bike className="w-5 h-5 text-[#ff5722]" />
                Rider Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Rider's Name</label>
                  <input
                    type="text"
                    name="riderName"
                    value={formData.riderName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                    placeholder="Child's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1628]/30" />
                    <input
                      type="date"
                      name="riderDob"
                      value={formData.riderDob}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1628]/30" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors"
                      placeholder="City, State"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0a1628]/70 mb-2">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#0a1628]/10 focus:border-[#ff5722] outline-none transition-colors bg-white"
                  >
                    <option value="beginner">Beginner - First time racing</option>
                    <option value="intermediate">Intermediate - Some race experience</option>
                    <option value="advanced">Advanced - Regular racer</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="border-t border-[#0a1628]/10 pt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-5 h-5 rounded border-2 border-[#0a1628]/20 text-[#ff5722] focus:ring-[#ff5722]"
                />
                <span className="text-sm text-[#0a1628]/70">
                  I agree to the PEARS Terms & Conditions and acknowledge that my child will participate at their own
                  risk. I confirm that my child will wear appropriate safety gear at all events.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5722] hover:bg-[#0a1628] text-white font-black uppercase py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              Complete Registration
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
