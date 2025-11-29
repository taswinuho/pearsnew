import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MissionSection from "@/components/mission-section"
import RiderTechSection from "@/components/rider-tech-section"
import BikeShowcase from "@/components/bike-showcase"
import HelmetHall from "@/components/helmet-hall"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MasonryGallerySection from "@/components/masonry-gallery-section"
import Image from "next/image"
import { RaceDayCountdown } from "@/components/race-day-countdown"
import { InteractiveSchedule } from "@/components/interactive-schedule"
import { HistoricalResultsAccordion } from "@/components/historical-results-accordion"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative z-10">
        <MissionSection />
        <MasonryGallerySection />
        <RiderTechSection />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-[#fef7ed]">
          <Image
            src="/images/trilha2.svg"
            alt="Track divider"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
        <HelmetHall />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-[#fef7ed]">
          <Image
            src="/images/splash.svg"
            alt="Track divider"
            fill
            className="object-cover object-center bg-[#0a1628]"
            priority={false}
          />
        </div>
        <BikeShowcase />

        <RaceDayCountdown />
        <div className="relative w-full h-[120px] md:h-[160px] lg:h-[200px] overflow-hidden bg-[#fef7ed]">
          <Image
            src="/images/trilhadiee.svg"
            alt="Track divider"
            fill
            className="object-cover object-center bg-[#0a1628]"
            priority={false}
          />
        </div>
        <InteractiveSchedule />
        <HistoricalResultsAccordion />

        <SocialSection />
        <Footer />
      </div>
    </main>
  )
}
