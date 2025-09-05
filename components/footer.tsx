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
    <footer className="bg-[#0A5C36] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Too Much Junk Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              At <span className="font-semibold">Too Much Junk</span>, we make junk removal, furniture delivery, 
              and yard waste disposal simple, affordable, and eco-friendly. Serving your community with care.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#14452f]" />
                <a href="tel:9106646578" className="text-white/80 hover:text-white transition-colors">
                  (910) 664-6578
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#14452f]" />
                <a
                  href="mailto:jg1187728@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  jg1187728@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#14452f]" />
                <span className="text-white/80">Serving Your Local Area</span>
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
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Junk Removal</li>
              <li className="text-white/80">Furniture Delivery</li>
              <li className="text-white/80">Yard Waste Disposal</li>
              <li className="text-white/80">Residential & Commercial</li>
              <li className="text-white/80">Eco-Friendly Disposal</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © {new Date().getFullYear()} Too Much Junk. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                License & Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
