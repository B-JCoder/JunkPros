"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Recycle, Clock, Shield, Award, Users } from "lucide-react"

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-3 h-3 bg-[#0A5C36] rounded-full"></div>
        <div className="absolute top-32 right-24 w-2 h-2 bg-[#14452f] rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#0A5C36] rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#14452f] rounded-full"></div>
        <div className="absolute bottom-24 right-16 w-3 h-3 bg-[#0A5C36] rounded-full"></div>
        <div className="absolute top-24 left-1/2 w-1 h-1 bg-[#14452f] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#0A5C36]/10 rounded-full px-6 py-2 mb-6">
            <Award className="h-5 w-5 text-[#0A5C36]" />
            <span className="text-[#0A5C36] font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl text-[#14452f] md:text-5xl lg:text-6xl font-bold text-balance mb-8 leading-tight">
            Why Choose{" "}
            <span className="text-[#14452f] relative">
              Too Much Junk
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A5C36] to-[#14452f] rounded-full"></div>
            </span>
            ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-[#14452f] font-bold">Too Much Junk</span>, we make junk removal, furniture
            delivery, and yard waste disposal easy, affordable, and eco-friendly. Our team is committed to providing
            fast, reliable service you can trust.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Truck,
              title: "Reliable Service",
              description: "Professional junk removal and delivery done right, every time.",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: Recycle,
              title: "Eco-Friendly",
              description: "We recycle, donate, and dispose of items responsibly to protect the planet.",
              color: "from-green-500 to-green-600",
            },
            {
              icon: Clock,
              title: "Fast Response",
              description: "Same-day and next-day service available to fit your schedule.",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: Shield,
              title: "Peace of Mind",
              description: "Fully insured team ensuring safety, reliability, and satisfaction.",
              color: "from-purple-500 to-purple-600",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group bg-white"
            >
              <CardContent className="p-8">
                <div
                  className={`bg-gradient-to-br ${feature.color} rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#14452f]">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-[#0A5C36] to-[#14452f] rounded-3xl p-12 md:p-16 text-white mb-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-xl opacity-90">Happy Customers</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">5★</div>
              <div className="text-xl opacity-90">Average Rating</div>
            </div>
            <div className="group">
              <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-xl opacity-90">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-[#0A5C36]/10">
          <div className="max-w-3xl mx-auto">
            <Users className="h-16 w-16 text-[#0A5C36] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A5C36]">Serving Your Community with Care</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              From hauling away junk to delivering furniture and clearing yard waste,
              <span className="text-[#14452f] font-bold"> Too Much Junk </span>
              is your trusted partner for a cleaner, clutter-free space.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#0A5C36] to-[#14452f] hover:from-[#14452f] hover:to-[#0A5C36] text-white text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Schedule Your Service Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
