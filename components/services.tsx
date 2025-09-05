"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Building, Trash2, Package, Sofa, Car } from "lucide-react"

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Home,
      title: "Residential Junk Removal",
      description: "Complete home cleanouts, garage cleaning, basement clearing, and attic cleanouts.",
      features: ["Furniture removal", "Appliance disposal", "General household items", "Estate cleanouts"],
    },
    {
      icon: Building,
      title: "Commercial Cleanouts",
      description: "Office cleanouts, retail space clearing, and commercial property waste removal.",
      features: ["Office furniture", "Equipment disposal", "Retail fixtures", "Construction debris"],
    },
    {
      icon: Sofa,
      title: "Furniture Delivery & Removal",
      description: "Safe delivery or removal of sofas, mattresses, and large household furniture.",
      features: ["Sofas & chairs", "Mattresses & beds", "Tables & desks", "Cabinets & dressers"],
    },
    {
      icon: Package,
      title: "Appliance Disposal",
      description: "Eco-friendly disposal of old appliances with proper recycling and disposal methods.",
      features: ["Refrigerators", "Washers & dryers", "Stoves & ovens", "Small appliances"],
    },
    {
      icon: Car,
      title: "Garage Cleanouts",
      description: "Complete garage organization and junk removal to reclaim your space.",
      features: ["Old tools & equipment", "Seasonal items", "Sports equipment", "Storage boxes"],
    },
    {
      icon: Trash2,
      title: "Yard Waste Removal",
      description: "Eco-friendly disposal of yard debris, landscaping waste, and storm cleanup.",
      features: ["Branches & leaves", "Grass clippings", "Storm debris", "Outdoor junk"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-[#0A5C36]/5 to-[#14452f]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Our <span className="text-[#0A5C36]">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            From single-item pickup to complete property cleanouts, we handle junk removal, 
            furniture delivery, and yard waste disposal with professional care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="bg-[#0A5C36]/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-[#0A5C36]" />
                </div>
                <CardTitle className="text-xl font-bold text-[#14452f]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#0A5C36] rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-[#0A5C36] hover:bg-[#14452f] text-white rounded-full shadow-md"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#0A5C36]/10 rounded-2xl p-10 md:p-14 text-center shadow-inner">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#14452f]">
            Don’t See Your Item Listed?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We handle almost everything! Contact us for a free consultation about your specific junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#0A5C36] hover:bg-[#14452f] text-white rounded-full shadow-md"
            >
              Get Free Quote
            </Button>
            <a href="tel:7734301854">
              <Button
                variant="outline"
                size="lg"
                className="border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36] hover:text-white rounded-full shadow-md"
              >
                Call Now: (773) 430-1854
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
