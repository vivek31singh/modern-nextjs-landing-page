"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = ["Enterprise", "Pricing", "Documentation", "Blog"]

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center text-white">
              BF
            </div>
            <span className="hidden sm:inline text-foreground">BuildFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            )}

            {/* Desktop CTA */}
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              Get Started
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in duration-200">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
