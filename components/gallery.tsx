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
      src: "https://i.pinimg.com/736x/03/c6/a5/03c6a5b1ad25adb09c027092955d92ee.jpg",
      alt: "Before and after garage cleanout",
      title: "Garage Cleanout",
    },
    {
      src: "https://i.pinimg.com/1200x/f8/9f/c2/f89fc2a1a25c1e26364b2f4a67886813.jpg",
      alt: "Professional junk removal service",
      title: "Furniture Removal",
    },
    {
      src: "https://i.pinimg.com/1200x/34/d5/aa/34d5aaed9aa4ec885f80c3c9476a910e.jpg",
      alt: "Commercial office cleanout",
      title: "Office Cleanout",
    },
    {
      src: "https://i.pinimg.com/1200x/75/82/93/75829322e2b12e207d348df570abf773.jpg",
      alt: "Appliance removal and recycling",
      title: "Appliance Disposal",
    },
    {
      src: "https://i.pinimg.com/1200x/d5/d7/30/d5d730602ff151a499733a92fd742414.jpg",
      alt: "Construction debris removal",
      title: "Construction Cleanup",
    },
    {
      src: "https://i.pinimg.com/736x/03/c6/a5/03c6a5b1ad25adb09c027092955d92ee.jpg",
      alt: "Estate cleanout service",
      title: "Estate Cleanout",
    },
  ]

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-28 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground"
    >
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            See Our Work in <span className="text-white">Action</span>
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Take a look at some of our recent junk removal projects. From small cleanouts to major property
            transformations, we deliver results that exceed expectations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you reclaim your space with our professional junk removal services. Contact us today for a free,
            no-obligation estimate.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule Your Cleanout
          </Button>
        </div>
      </div>
    </section>
  )
}
