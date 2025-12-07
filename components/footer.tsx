"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Linkedin, Github, Twitter } from "lucide-react"
import { useState } from "react"

interface SocialLink {
  name: string
  icon: React.ReactNode
  href: string
}

interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Security", href: "#" },
      { label: "Enterprise", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
]

const socialLinks: SocialLink[] = [
  { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
  { name: "Github", icon: <Github className="w-5 h-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "#" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setEmail("")
    setLoading(false)
  }

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Newsletter CTA */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Join our newsletter</h3>
            <p className="text-muted-foreground">Get the latest updates on new features and upcoming releases.</p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4 md:items-end">
            <p className="text-foreground font-medium">Follow us on social</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border hover:bg-secondary/80 transition-all bg-transparent"
                >
                  <a href={link.href} aria-label={link.name}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-12">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-bold text-foreground text-sm md:text-base">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 space-y-4 md:flex md:justify-between md:items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              BF
            </div>
            <span className="font-bold text-foreground">BuildFlow</span>
          </div>
          <div className="text-muted-foreground text-sm space-y-2 md:space-y-0 md:flex md:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <span>© 2025 BuildFlow. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
