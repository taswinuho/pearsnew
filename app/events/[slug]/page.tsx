import { notFound } from "next/navigation"
import { getEventBySlug, eventsData } from "@/lib/events-data"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { EventDetail } from "@/components/event-detail"
import { EventTicketing } from "@/components/event-ticketing"

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: "Event Not Found" }

  return {
    title: `${event.title} | PEARS Events`,
    description: event.description,
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="relative bg-[#fef7ed]">
      <Header />
      <EventDetail event={event} />
      <EventTicketing event={event} />
      <Footer />
    </main>
  )
}
