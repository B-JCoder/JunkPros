"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsMenuOpen(false)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#0A5C36]/10 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div onClick={() => scrollToSection("home")} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              <Image
                src="/images/twoguyslogo.jpg"
                alt="Too Much Junk Logo"
                width={120}
                height={60}
                className="h-10 w-auto md:h-12 transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0A5C36]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
            </div>
            <div className="hidden lg:block">
              <div className="text-[#0A5C36] font-bold text-lg">Too Much Junk</div>
              <div className="text-[#14452f] text-xs font-medium tracking-wide">
                Professional • Reliable • Eco-Friendly
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 text-[#0A5C36] font-semibold">
            {["home", "about", "services", "gallery", "pricing", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="px-4 py-2 rounded-full hover:bg-[#0A5C36]/10 hover:text-[#14452f] transition-all duration-200 relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#14452f] group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:9106646578"
              className="flex items-center space-x-2 text-[#0A5C36] hover:text-[#14452f] transition-all duration-200 font-semibold group"
            >
              <div className="p-2 rounded-full bg-[#0A5C36]/10 group-hover:bg-[#0A5C36]/20 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <span>(910) 664-6578</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#14452f] to-[#0A5C36] hover:from-[#0A5C36] hover:to-[#14452f] text-white rounded-full shadow-lg hover:shadow-xl px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0A5C36] hover:bg-[#0A5C36]/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#0A5C36]/10 bg-white/95 backdrop-blur-xl rounded-lg mt-2 shadow-xl">
            <nav className="flex flex-col space-y-2 text-center text-[#0A5C36] font-semibold">
              {["home", "about", "services", "gallery", "pricing", "testimonials"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="py-3 px-4 hover:bg-[#0A5C36]/10 hover:text-[#14452f] transition-all duration-200 rounded-lg mx-2"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <div className="pt-6 border-t border-[#0A5C36]/10 space-y-4 mx-2">
                <a
                  href="tel:9106646578"
                  className="flex justify-center items-center space-x-2 text-[#0A5C36] hover:text-[#14452f] transition-colors font-semibold py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>(910) 664-6578</span>
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-[#14452f] to-[#0A5C36] hover:from-[#0A5C36] hover:to-[#14452f] text-white rounded-full shadow-lg px-6 py-2 font-semibold"
                >
                  Get Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
