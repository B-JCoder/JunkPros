"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A5C36]/10 to-[#14452f]/10 pt-28 md:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Business Name */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            <span className="text-[#0A5C36]">Too Much Junk</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-[#0A5C36] font-medium mb-8 max-w-2xl mx-auto">
            Junk Removal • Furniture Delivery • Yard Waste Disposal  
            <br /> Fast, reliable, and affordable services you can trust.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#0A5C36] hover:bg-[#14452f] text-white text-lg px-8 py-6 group"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:9106646578">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0A5C36] text-[#0A5C36] hover:bg-[#14452f] hover:text-white text-lg px-8 py-6 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (910) 664-6578
              </Button>
            </a>

            <a href="mailto:jg1187728@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36] hover:text-white text-lg px-8 py-6 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-[#14452f] mb-2">Same Day</div>
              <div className="text-white">Service Available</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-[#14452f] mb-2">Furniture</div>
              <div className="text-white">Delivery & Removal</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl md:text-3xl font-bold text-[#14452f] mb-2">Yard Waste</div>
              <div className="text-white">Eco-Friendly Disposal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
