"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/junk-pros-logo.png"
                alt="Junk Pros Logo"
                width={120}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Professional junk removal services in Carol Stream and surrounding areas. We make junk removal easy with
              fast, reliable, and eco-friendly solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:7734301854" className="text-background/80 hover:text-background transition-colors">
                  (773) 430-1854
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:info@junkpros.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  info@junkpros.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">Carol Stream, IL</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Residential Junk Removal</li>
              <li className="text-background/80">Commercial Cleanouts</li>
              <li className="text-background/80">Furniture Removal</li>
              <li className="text-background/80">Appliance Disposal</li>
              <li className="text-background/80">Garage Cleanouts</li>
              <li className="text-background/80">Construction Debris</li>
              <li className="text-background/80">Estate Cleanouts</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">© 2024 Junk Pros. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                License & Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
