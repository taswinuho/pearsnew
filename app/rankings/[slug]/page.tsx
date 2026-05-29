import { notFound } from "next/navigation"
import { getRiderBySlug, ridersData } from "@/lib/riders-data"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { RiderProfile } from "@/components/rider-profile"

export async function generateStaticParams() {
  return ridersData.map((rider) => ({
    slug: rider.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rider = getRiderBySlug(slug)
  if (!rider) return { title: "Rider Not Found" }

  return {
    title: `${rider.name} | PEARS Rankings`,
    description: `View ${rider.name}'s racing profile, stats and achievements in PEARS kids pushbike racing.`,
  }
}

export default async function RiderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const rider = getRiderBySlug(slug)

  if (!rider) {
    notFound()
  }

  return (
    <main className="relative bg-[#fef7ed]">
      <Header />
      <RiderProfile rider={rider} />
      <Footer />
    </main>
  )
}
