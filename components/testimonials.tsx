"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Carol Stream, IL",
      rating: 5,
      text: "Too Much Junk made our garage cleanout so easy! They were professional, fast, and reasonably priced. I would definitely use them again and recommend to friends.",
      service: "Garage Cleanout",
    },
    {
      name: "Mike Rodriguez",
      location: "Wheaton, IL",
      rating: 5,
      text: "Excellent service from start to finish. They removed all our old office furniture and equipment quickly and efficiently. Great communication throughout the process.",
      service: "Commercial Cleanout",
    },
    {
      name: "Jennifer Chen",
      location: "Glen Ellyn, IL",
      rating: 5,
      text: "After my father passed away, Too Much Junk helped us with the estate cleanout. They were respectful, understanding, and handled everything with care. Highly recommended.",
      service: "Estate Cleanout",
    },
    {
      name: "David Thompson",
      location: "Lombard, IL",
      rating: 5,
      text: "Same-day service when I needed my basement cleared for renovation. The team was punctual, professional, and left the space spotless. Worth every penny!",
      service: "Basement Cleanout",
    },
    {
      name: "Lisa Martinez",
      location: "Villa Park, IL",
      rating: 5,
      text: "Great experience! They removed our old appliances and furniture with no hassle. Fair pricing and excellent customer service. Will use again for sure.",
      service: "Furniture & Appliance Removal",
    },
    {
      name: "Robert Kim",
      location: "Addison, IL",
      rating: 5,
      text: "Professional team that arrived on time and worked efficiently. They handled our construction debris removal perfectly and cleaned up afterward. Highly satisfied!",
      service: "Construction Debris",
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 md:py-28 bg-[#14452f] text-white">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-[#0A5C36]">Customers Say</span>
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Don’t just take our word for it. Here’s what our satisfied customers throughout Carol Stream and surrounding
            areas have to say about <span className="font-semibold text-[#0A5C36]">Too Much Junk</span>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white text-[#0A5C36] border-none hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-[#0A5C36]/20 pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-[#0A5C36]/70">{testimonial.location}</div>
                  <div className="text-sm text-yellow-600 font-medium mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats + CTA */}
        <div className="text-center">
          <div className="bg-white text-[#0A5C36] rounded-lg p-8 md:p-12 mb-8 shadow-lg">
            <div className="flex items-center justify-center space-x-8 mb-6 flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the same professional service and satisfaction that{" "}
            <span className="font-semibold text-[#0A5C36]">Too Much Junk</span> customers rave about.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#0A5C36] text-white hover:bg-white hover:text-[#0A5C36] border border-[#0A5C36] rounded-full px-8 py-6 text-lg shadow-md transition"
          >
            Get Your Free Estimate
          </Button>
        </div>
      </div>
    </section>
  )
}
