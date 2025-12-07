"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32 lg:py-40">
      {/* Gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 md:space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm font-medium text-purple-300">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Introducing BuildFlow Pro
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Build, deploy, and scale with{" "}
              <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                unmatched speed
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Enterprise-grade platform that empowers your team to create high-quality web experiences faster than ever
              before.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 h-12 px-8"
            >
              Get Started Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border hover:bg-secondary/80 transition-colors h-12 px-8 bg-transparent"
            >
              <Play className="w-4 h-4 mr-2" /> Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-4 md:gap-8">
            {[
              { value: "20x", label: "Faster deployment" },
              { value: "99.99%", label: "Uptime SLA" },
              { value: "1M+", label: "Developer trust" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
