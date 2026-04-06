import Header from "@/components/header"
import Footer from "@/components/footer"
import { EventsHero } from "@/components/events-hero"
import { UpcomingEvents } from "@/components/upcoming-events"
import { EventCategories } from "@/components/event-categories"

export const metadata = {
  title: "Events | PEARS - Pushbike Events and Ranking System",
  description: "Discover upcoming pushbike racing events for kids aged 2-6 years across Australia.",
}

export default function EventsPage() {
  return (
    <main className="relative">
      <Header />
      <EventsHero />
      <div className="relative z-10">
        <UpcomingEvents />
        <EventCategories />
        <Footer />
      </div>
    </main>
  )
}
