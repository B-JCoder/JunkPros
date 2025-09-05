"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Shield, Clock } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A5C36]/5 via-white to-[#14452f]/5 pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#0A5C36] rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#14452f] rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#0A5C36] rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#14452f] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#0A5C36] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-8 text-sm">
            <div className="flex items-center space-x-1 text-[#0A5C36]">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-1 text-[#0A5C36]">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Same Day Service</span>
            </div>
            <div className="flex items-center space-x-1 text-[#0A5C36]">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">5-Star Rated</span>
            </div>
          </div>

          {/* Business Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            <span className="text-[#0A5C36] relative">
              Too Much Junk
              <div className="absolute inset-0 text-[#14452f] opacity-20 blur-sm">Too Much Junk</div>
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-lg md:text-xl lg:text-2xl text-[#0A5C36] font-semibold mb-4 max-w-3xl mx-auto">
            Professional Junk Removal & Delivery Services
          </div>
          <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Fast, reliable, and eco-friendly solutions for all your junk removal, furniture delivery, and yard waste
            disposal needs. Serving your community with care and professionalism.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#0A5C36] hover:bg-[#14452f] text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group font-semibold border-0"
            >
              Get Free Estimate
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="tel:9106646578">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36] hover:text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white font-semibold"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (910) 664-6578
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Same Day", subtitle: "Service Available", icon: Clock },
              { title: "Furniture", subtitle: "Delivery & Removal", icon: Shield },
              { title: "Yard Waste", subtitle: "Eco-Friendly Disposal", icon: Star },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#0A5C36]/10 group"
              >
                <div className="bg-gradient-to-br from-[#0A5C36]/10 to-[#14452f]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon && <feature.icon className="h-8 w-8 text-[#0A5C36]" />}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#14452f] mb-2">{feature.title}</div>
                <div className="text-gray-600 font-medium">{feature.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
