"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 pt-28 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            <span className="text-foreground">Professional</span>{" "}
            <span className="text-primary">Junk Removal</span>{" "}
            <span className="text-foreground">Made Easy</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Fast, reliable, and eco-friendly junk removal services in Carol Stream and surrounding areas. We handle
            everything from garage cleanouts to business waste removal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:7734301854">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (773) 430-1854
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Same Day</div>
              <div className="text-white">Service Available</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">20 Mile</div>
              <div className="text-white">Service Radius</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-white">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
