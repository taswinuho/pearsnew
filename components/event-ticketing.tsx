"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Ticket, Check, AlertCircle, ChevronRight, Users, Clock } from "lucide-react"
import type { PearsEvent } from "@/lib/events-data"

interface EventTicketingProps {
  event: PearsEvent
}

type TicketType = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  available: boolean
  perks: string[]
}

export function EventTicketing({ event }: EventTicketingProps) {
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [step, setStep] = useState<"select" | "details" | "confirm">("select")
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    riderName: "",
    riderAge: "",
    category: "",
    emergencyContact: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)

  const tickets: TicketType[] = [
    {
      id: "early-bird",
      name: "Early Bird Entry",
      description: "Limited time offer - Register early and save!",
      price: event.earlyBirdPrice,
      originalPrice: event.ticketPrice,
      available: isEarlyBird,
      perks: ["Race entry for 1 rider", "Event t-shirt", "Participation medal", "Photo package"],
    },
    {
      id: "standard",
      name: "Standard Entry",
      description: "Regular registration for one young rider",
      price: event.ticketPrice,
      available: true,
      perks: ["Race entry for 1 rider", "Participation medal", "Digital photo access"],
    },
    {
      id: "family",
      name: "Family Pack",
      description: "Register multiple siblings - best value!",
      price: Math.round(event.ticketPrice * 1.7),
      available: true,
      perks: [
        "Race entry for up to 2 riders",
        "2 Event t-shirts",
        "2 Participation medals",
        "Family photo session",
        "Priority parking",
      ],
    },
  ]

  const selectedTicketData = tickets.find((t) => t.id === selectedTicket)
  const totalPrice = selectedTicketData ? selectedTicketData.price * quantity : 0

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 md:px-12 bg-[#0a1628]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-[#ff5722] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-4">Registration Complete!</h2>
          <p className="text-white/70 mb-6">
            Thank you for registering for {event.title}. A confirmation email has been sent to {formData.email}.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-bold text-white mb-4">Registration Details</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>
                <span className="text-white">Rider:</span> {formData.riderName}
              </p>
              <p>
                <span className="text-white">Category:</span> {formData.category}
              </p>
              <p>
                <span className="text-white">Event:</span> {event.title}
              </p>
              <p>
                <span className="text-white">Date:</span> {event.date}
              </p>
              <p>
                <span className="text-white">Ticket:</span> {selectedTicketData?.name} x{quantity}
              </p>
              <p>
                <span className="text-white">Total:</span> ${totalPrice} AUD
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] font-bold uppercase px-6 py-3 rounded-xl hover:bg-[#ff5722] hover:text-white transition-colors"
            >
              Browse More Events
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold uppercase px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Return Home
            </a>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 md:px-12 bg-[#0a1628]" id="tickets">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-4">
            Secure Your <span className="text-[#ff5722]">Spot</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Choose your ticket type and complete registration to join {event.title}.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-white/60">
              <Users className="w-4 h-4 text-[#ff5722]" />
              <span className="text-sm font-medium">{event.spotsLeft} spots remaining</span>
            </div>
            {isEarlyBird && (
              <div className="flex items-center gap-2 text-[#ff5722]">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Early bird ends {event.earlyBirdDeadline}</span>
              </div>
            )}
          </div>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-white/10 rounded-full p-1">
            {["select", "details", "confirm"].map((s, i) => (
              <div key={s} className="flex items-center">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-bold uppercase transition-colors ${
                    step === s ? "bg-[#ff5722] text-white" : "text-white/50"
                  }`}
                  disabled
                >
                  {i + 1}. {s}
                </button>
                {i < 2 && <ChevronRight className="w-4 h-4 text-white/30 mx-1" />}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  onClick={() => ticket.available && setSelectedTicket(ticket.id)}
                  className={`relative bg-white/5 rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                    !ticket.available
                      ? "opacity-50 cursor-not-allowed border-white/10"
                      : selectedTicket === ticket.id
                        ? "border-[#ff5722] bg-[#ff5722]/10"
                        : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {ticket.id === "early-bird" && ticket.available && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff5722] text-white text-xs font-black uppercase px-3 py-1 rounded-full">
                      Best Value
                    </div>
                  )}
                  <Ticket className="w-8 h-8 text-[#ff5722] mb-4" />
                  <h3 className="text-xl font-black uppercase text-white mb-2">{ticket.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{ticket.description}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-white">${ticket.price}</span>
                    {ticket.originalPrice && (
                      <span className="text-lg text-white/40 line-through">${ticket.originalPrice}</span>
                    )}
                    <span className="text-white/50 text-sm">AUD</span>
                  </div>
                  <ul className="space-y-2">
                    {ticket.perks.map((perk, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-[#ff5722]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  {!ticket.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1628]/80 rounded-2xl">
                      <span className="text-white/60 font-bold uppercase">Offer Expired</span>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}

          {step === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 border-2 border-white/10">
                <h3 className="text-xl font-black uppercase text-white mb-6">Registration Details</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm font-bold uppercase mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm font-bold uppercase mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm font-bold uppercase mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm font-bold uppercase mb-2">
                        Emergency Contact *
                      </label>
                      <input
                        type="text"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                        placeholder="Name & phone"
                      />
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <h4 className="text-white font-bold mb-4">Rider Information</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-white/60 text-sm font-bold uppercase mb-2">Rider Name *</label>
                        <input
                          type="text"
                          value={formData.riderName}
                          onChange={(e) => setFormData({ ...formData, riderName: e.target.value })}
                          className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                          placeholder="Child's name"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm font-bold uppercase mb-2">Age *</label>
                        <input
                          type="number"
                          min="2"
                          max="6"
                          value={formData.riderAge}
                          onChange={(e) => setFormData({ ...formData, riderAge: e.target.value })}
                          className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:border-[#ff5722] focus:outline-none"
                          placeholder="2-6"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm font-bold uppercase mb-2">Category *</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full bg-white/10 border-2 border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#ff5722] focus:outline-none"
                        >
                          <option value="" className="bg-[#0a1628]">
                            Select
                          </option>
                          {event.categories.map((cat) => (
                            <option key={cat} value={cat} className="bg-[#0a1628]">
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {selectedTicket === "family" && (
                    <div className="bg-[#ff5722]/10 border border-[#ff5722]/30 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-[#ff5722] mt-0.5" />
                        <p className="text-sm text-white/70">
                          Family Pack allows up to 2 riders. After registration, you can add a second rider by
                          contacting us at events@pears.com.au
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === "confirm" && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 border-2 border-white/10">
                <h3 className="text-xl font-black uppercase text-white mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Event</span>
                    <span className="text-white font-bold">{event.title}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Date</span>
                    <span className="text-white font-bold">{event.date}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Ticket Type</span>
                    <span className="text-white font-bold">{selectedTicketData?.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Quantity</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 bg-white/10 rounded-lg text-white hover:bg-white/20"
                      >
                        -
                      </button>
                      <span className="text-white font-bold w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(5, quantity + 1))}
                        className="w-8 h-8 bg-white/10 rounded-lg text-white hover:bg-white/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/70">Rider</span>
                    <span className="text-white font-bold">
                      {formData.riderName} ({formData.category})
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 bg-[#ff5722]/10 rounded-xl px-4">
                  <span className="text-white font-bold uppercase">Total</span>
                  <span className="text-2xl font-black text-[#ff5722]">${totalPrice} AUD</span>
                </div>
                <p className="text-white/40 text-xs mt-4 text-center">
                  By completing registration, you agree to PEARS Terms & Conditions and acknowledge our Safety
                  Guidelines.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center gap-4 mt-8">
          {step !== "select" && (
            <button
              onClick={() => setStep(step === "confirm" ? "details" : "select")}
              className="px-8 py-3 border-2 border-white/30 text-white font-bold uppercase rounded-xl hover:bg-white/10 transition-colors"
            >
              Back
            </button>
          )}
          {step === "select" && (
            <button
              onClick={() => selectedTicket && setStep("details")}
              disabled={!selectedTicket}
              className="px-8 py-3 bg-[#ff5722] text-white font-bold uppercase rounded-xl hover:bg-white hover:text-[#0a1628] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          )}
          {step === "details" && (
            <button
              onClick={() => {
                if (
                  formData.parentName &&
                  formData.email &&
                  formData.phone &&
                  formData.riderName &&
                  formData.riderAge &&
                  formData.category
                ) {
                  setStep("confirm")
                }
              }}
              className="px-8 py-3 bg-[#ff5722] text-white font-bold uppercase rounded-xl hover:bg-white hover:text-[#0a1628] transition-colors"
            >
              Review Order
            </button>
          )}
          {step === "confirm" && (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-[#ff5722] text-white font-bold uppercase rounded-xl hover:bg-white hover:text-[#0a1628] transition-colors"
            >
              Complete Registration
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
