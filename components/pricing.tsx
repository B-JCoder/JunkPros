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
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            No hidden fees, no surprises. Our pricing is based on the volume of junk we remove, and we always provide a
            free estimate before starting any work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-lg transition-shadow ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">{plan.price}</div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                >
                  Get Estimate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Quote?</h3>
              <p className="text-muted-foreground mb-6">
                Every job is unique. We offer free, no-obligation estimates for all projects. Our pricing includes
                labor, disposal fees, and cleanup - no hidden costs.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Free on-site estimates
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  No hidden fees or charges
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Eco-friendly disposal included
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  Same-day service available
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-4xl font-bold text-primary mb-2">Free</div>
                <div className="text-muted-foreground">Estimates Always</div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <a href="tel:7734301854" className="flex-1">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (773) 430-1854
                  </Button>
                </a>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
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
