import Header from "@/components/header"
import Footer from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery | PEARS - Pushbike Events and Ranking System",
  description: "Relive the excitement! Browse photos and videos from PEARS pushbike racing events.",
}

export default function GalleryPage() {
  return (
    <main className="relative">
      <Header />
      <GalleryHero />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
