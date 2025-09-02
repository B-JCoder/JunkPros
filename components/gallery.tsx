"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Gallery() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const galleryImages = [
    {
      src: "/images/junk-pros-logo.png",
      alt: "Before and after garage cleanout",
      title: "Garage Cleanout",
    },
    {
      src: "/images/junk-pros-logo.png",
      alt: "Professional junk removal service",
      title: "Furniture Removal",
    },
    {
      src: "/images/junk-pros-logo.png",
      alt: "Commercial office cleanout",
      title: "Office Cleanout",
    },
    {
      src: "/images/junk-pros-logo.png",
      alt: "Appliance removal and recycling",
      title: "Appliance Disposal",
    },
    {
      src: "/images/junk-pros-logo.png",
      alt: "Construction debris removal",
      title: "Construction Cleanup",
    },
    {
      src: "/images/junk-pros-logo.png",
      alt: "Estate cleanout service",
      title: "Estate Cleanout",
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            See Our Work in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-white text-pretty max-w-3xl mx-auto">
            Take a look at some of our recent junk removal projects. From small cleanouts to major property
            transformations, we deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you reclaim your space with our professional junk removal services. Contact us today for a free,
            no-obligation estimate.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Schedule Your Cleanout
          </Button>
        </div>
      </div>
    </section>
  )
}
