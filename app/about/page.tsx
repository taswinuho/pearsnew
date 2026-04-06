import Header from "@/components/header"
import Footer from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OurMission } from "@/components/our-mission"
import { TeamSection } from "@/components/team-section"
import { FaqSection } from "@/components/faq-section"

export const metadata = {
  title: "About | PEARS - Pushbike Events and Ranking System",
  description: "Learn about PEARS and our mission to inspire young riders through fun, safe pushbike racing events.",
}

export default function AboutPage() {
  return (
    <main className="relative">
      <Header />
      <AboutHero />
      <div className="relative z-10">
        <OurMission />
        <TeamSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
