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
      title: "Furniture Removal",
      description: "Safe removal and disposal of old furniture, mattresses, and large household items.",
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
      title: "Construction Debris",
      description: "Safe removal of construction waste, renovation debris, and building materials.",
      features: ["Drywall & lumber", "Flooring materials", "Fixtures & fittings", "General debris"],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From single-item pickup to complete property cleanouts, we handle all types of junk removal with
            professional care and eco-friendly disposal methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't See Your Item Listed?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We handle almost everything! Contact us for a free consultation about your specific junk removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Free Quote
            </Button>
            <a href="tel:7734301854">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
