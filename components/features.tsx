"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, BarChart3, Sliders, Layers, Code2 } from "lucide-react"

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: "performance",
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    title: "Lightning Fast",
    description:
      "Deploy production-ready applications in seconds with our optimized infrastructure and edge computing.",
  },
  {
    id: "security",
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, advanced DDoS protection, and compliance with SOC2, GDPR, and HIPAA standards.",
  },
  {
    id: "analytics",
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    title: "Real-time Analytics",
    description: "Monitor application performance, user behavior, and business metrics with comprehensive dashboards.",
  },
  {
    id: "customization",
    icon: <Sliders className="w-6 h-6 text-orange-500" />,
    title: "Fully Customizable",
    description: "Tailor every aspect of the platform to match your unique business requirements and branding.",
  },
  {
    id: "scalability",
    icon: <Layers className="w-6 h-6 text-green-500" />,
    title: "Auto-scaling",
    description: "Automatically scale resources based on demand to ensure optimal performance and cost efficiency.",
  },
  {
    id: "integration",
    icon: <Code2 className="w-6 h-6 text-cyan-500" />,
    title: "Seamless Integration",
    description: "Connect with 500+ third-party services and build custom integrations with our powerful APIs.",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-background" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <Badge variant="secondary">FEATURES</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Packed with powerful features designed for modern development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 p-6 md:p-8"
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
