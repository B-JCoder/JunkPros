"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Recycle, Clock, Shield } from "lucide-react"

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A5C36] mb-6">
            Why Choose <span className="text-[#0A5C36]">Too Much Junk</span>?
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            At <span className="text-[#14452f] font-semibold">Too Much Junk</span>, 
            we make junk removal, furniture delivery, and yard waste disposal easy, affordable, 
            and eco-friendly. Our team is committed to providing fast, reliable service you can trust.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-[#0A5C36]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p className="text-muted-foreground">
                Professional junk removal and delivery done right, every time.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-[#0A5C36]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Recycle className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                We recycle, donate, and dispose of items responsibly to protect the planet.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-[#0A5C36]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-muted-foreground">
                Same-day and next-day service available to fit your schedule.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-[#0A5C36]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-[#0A5C36]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-muted-foreground">
                Fully insured team ensuring safety, reliability, and satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0A5C36]">
            Serving Your Community with Care
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From hauling away junk to delivering furniture and clearing yard waste, 
            <span className="text-[#14452f] font-semibold"> Too Much Junk </span> 
            is your trusted partner for a cleaner, clutter-free space.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[#0A5C36] hover:bg-[#14452f] text-white"
          >
            Schedule Your Service Today
          </Button>
        </div>
      </div>
    </section>
  )
}
