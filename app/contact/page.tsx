import Header from "@/components/header"
import Footer from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export const metadata = {
  title: "Contact | PEARS - Pushbike Events and Ranking System",
  description: "Get in touch with the PEARS team. We're here to help with event inquiries, registrations, and more.",
}

export default function ContactPage() {
  return (
    <main className="relative bg-[#fef7ed]">
      <Header />
      <ContactHero />
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  )
}
