"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src="/images/twoguyslogo.jpg"
              alt="Junk Pros Logo"
              width={120}
              height={60}
              className="h-10 w-auto md:h-12 transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "gallery", "pricing", "testimonials"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:7734301854"
              className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>(773) 430-1854</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md rounded-full px-5"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background rounded-lg mt-2 shadow-lg">
            <nav className="flex flex-col space-y-4 text-center">
              {["home", "about", "services", "gallery", "pricing", "testimonials"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}

              <div className="pt-6 border-t border-border">
                <a
                  href="tel:7734301854"
                  className="flex justify-center items-center space-x-2 text-foreground/80 hover:text-primary transition-colors mb-4 font-medium"
                >
                  <Phone className="h-4 w-4" />
                  <span>(910) 664-6578</span>
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-md"
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
