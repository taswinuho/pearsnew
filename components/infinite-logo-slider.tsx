"use client"

const logos = [
  { name: "Strider Bikes", src: "/strider-bikes-logo.jpg" },
  { name: "Bell Helmets", src: "/bell-helmets-logo.jpg" },
  { name: "BMX Australia", src: "/bmx-australia-logo.jpg" },
  { name: "Cycling NSW", src: "/cycling-nsw-logo.jpg" },
  { name: "Giant Bikes", src: "/giant-bicycles-logo.jpg" },
]

export default function InfiniteLogoSlider() {
  const singleSequence = [...logos, ...logos, ...logos, ...logos]
  const sliderContent = [...singleSequence, ...singleSequence]

  return (
    <div className="w-full overflow-hidden py-10 relative mask-gradient bg-transparent">
      <style jsx>{`
        @keyframes infinite-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-slide {
          animation: infinite-slide 40s linear infinite;
        }
      `}</style>

      <div className="flex w-max animate-infinite-slide">
        {sliderContent.map((logo, index) => (
          <div
            key={index}
            className="relative h-[35px] w-[150px] flex items-center justify-center flex-shrink-0 mx-8 opacity-100 hover:grayscale hover:opacity-70 transition-all duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              className="h-full w-auto max-h-[30px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
