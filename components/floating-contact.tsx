"use client"

import { useState } from "react"
import { Phone, MessageCircle, Mail, Headphones, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: Phone,
      label: "Téléphone",
      href: "tel:+212123456789",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: "delay-75",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/212123456789",
      color: "bg-green-500 hover:bg-green-600",
      delay: "delay-150",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@wellbe.ma",
      color: "bg-red-500 hover:bg-red-600",
      delay: "delay-300",
    },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Contact Options */}
      <div
        className={cn(
          "flex flex-col space-y-3 mb-4 transition-all duration-300 transform",
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none",
        )}
      >
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon
          return (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith("http") ? "_blank" : "_self"}
              rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={cn(
                "group flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110",
                option.color,
                option.delay,
                isOpen ? "animate-in slide-in-from-bottom-2" : "",
              )}
              title={option.label}
            >
              <IconComponent className="w-5 h-5" />

              {/* Tooltip */}
              <span className="absolute left-16 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {option.label}
                <span className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></span>
              </span>
            </a>
          )
        })}
      </div>

      {/* Main Contact Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300",
          isOpen ? "rotate-45" : "",
        )}
        aria-label="Contact"
      >
        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-50"></div>

        {/* Icon */}
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <Headphones className="w-6 h-6 transition-transform duration-300" />
          )}
        </div>
      </button>

      {/* Background overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 -z-10 md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </div>
  )
}
