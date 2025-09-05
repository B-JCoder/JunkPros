"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Phone } from "lucide-react"

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const pricingPlans = [
    {
      name: "Small Load",
      price: "$150-250",
      description: "Perfect for single rooms or small cleanouts",
      features: [
        "Up to 1/4 truck load",
        "Single room cleanout",
        "Few furniture pieces",
        "Small appliances",
        "Same-day service available",
        "Free estimate",
      ],
      popular: false,
    },
    {
      name: "Medium Load",
      price: "$300-450",
      description: "Ideal for garage or basement cleanouts",
      features: [
        "Up to 1/2 truck load",
        "Multiple rooms",
        "Large furniture items",
        "Major appliances",
        "Garage/basement cleanout",
        "Free estimate",
      ],
      popular: true,
    },
    {
      name: "Large Load",
      price: "$500-750",
      description: "Complete home or office cleanouts",
      features: [
        "Up to full truck load",
        "Whole house cleanout",
        "Estate cleanouts",
        "Commercial spaces",
        "Construction debris",
        "Free estimate",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gradient-to-br from-[#0A5C36]/5 to-[#14452f]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Transparent <span className="text-[#0A5C36]">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            No hidden fees, no surprises. Pricing is based on the volume of junk we remove — 
            and you’ll always get a free estimate before we start.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#0A5C36] bg-white"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0A5C36] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-[#14452f]">{plan.name}</CardTitle>
                <div className="text-3xl font-extrabold text-[#0A5C36] mt-2">{plan.price}</div>
                <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#0A5C36] mr-3" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full font-medium rounded-full shadow-md transition-all ${
                    plan.popular
                      ? "bg-[#0A5C36] hover:bg-[#14452f] text-white"
                      : "bg-transparent border border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36] hover:text-white"
                  }`}
                >
                  Get Estimate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-14 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#14452f]">
                Need a <span className="text-[#0A5C36]">Custom Quote?</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Every job is unique. We provide free, no-obligation estimates. 
                Pricing includes labor, disposal fees, and cleanup — no hidden costs.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Free on-site estimates",
                  "No hidden fees or charges",
                  "Eco-friendly disposal included",
                  "Same-day service available",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-[#0A5C36] mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-4xl font-extrabold text-[#0A5C36] mb-1">Free</div>
                <div className="text-gray-600">Estimates Always</div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <a href="tel:7734301854" className="flex-1">
                  <Button size="lg" className="w-full bg-[#0A5C36] hover:bg-[#14452f] text-white rounded-full shadow-md">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (773) 430-1854
                  </Button>
                </a>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="flex-1 border-[#0A5C36] text-[#0A5C36] hover:bg-[#0A5C36] hover:text-white rounded-full shadow-md"
                >
                  Request Quote Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
