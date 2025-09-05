"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    alert("Thank you for your message! We'll contact you soon.")
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#14452f]">
            Contact <span className="text-[#0A5C36]">Too Much Junk</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Need junk removal, furniture delivery, or yard waste cleanup?  
            Reach out today and get a free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#0A5C36]">Request Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#14452f]">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#14452f]">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="910-664-6578"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#14452f]">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jg1187728@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-[#14452f]">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#14452f]"
                  >
                    <option value="">Select a service</option>
                    <option value="junk">Junk Removal</option>
                    <option value="furniture">Furniture Delivery</option>
                    <option value="yard">Yard Waste Removal</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#14452f]">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what needs to be removed or delivered..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#14452f] hover:bg-[#0A5C36] text-white"
                >
                  Get Free Estimate
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#0A5C36]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#14452f] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:9106646578" className="text-muted-foreground hover:text-[#14452f] transition-colors">
                      910-664-6578
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#14452f] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:jg1187728@gmail.com"
                      className="text-muted-foreground hover:text-[#14452f] transition-colors"
                    >
                      jg1187728@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#14452f] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-muted-foreground">Local & Surrounding Areas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-[#14452f] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Saturday: 7:00 AM - 7:00 PM</p>
                      <p>Sunday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#14452f]">
              <CardContent className="p-6">
                <h3 className="text-xl text-white font-semibold mb-4">Emergency Service Available</h3>
                <p className="text-white/80 mb-4">
                  Need same-day junk removal or urgent delivery? We’re here to help right away.
                </p>
                <a href="tel:9106646578">
                  <Button size="lg" className="w-full bg-white text-[#14452f] hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Call for Emergency Service
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
