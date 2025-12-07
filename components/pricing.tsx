"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface PricingTier {
  id: string
  name: string
  description: string
  price: string
  period: string
  cta: string
  highlighted?: boolean
  features: string[]
}

const tiers: PricingTier[] = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "/month",
    cta: "Get Started",
    features: ["Up to 3 projects", "5GB storage", "Basic analytics", "Community support", "Shared infrastructure"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams",
    price: "$99",
    period: "/month",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "Unlimited projects",
      "500GB storage",
      "Advanced analytics",
      "Priority support",
      "Dedicated infrastructure",
      "Custom domains",
      "API access",
      "Team collaboration",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    period: "pricing",
    cta: "Contact Sales",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Custom integrations",
      "24/7 dedicated support",
      "SLA guarantee",
      "Advanced security",
      "On-premise deployment",
      "Custom contract",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <Badge variant="secondary">PRICING</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                tier.highlighted
                  ? "ring-2 ring-purple-500 md:scale-105 shadow-2xl shadow-purple-500/20"
                  : "bg-card/50 backdrop-blur-sm border-border/50 hover:border-border"
              } p-8`}
            >
              {/* Gradient background */}
              {tier.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none"></div>
              )}

              {/* Most Popular Badge */}
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">Most Popular</Badge>
                </div>
              )}

              {/* Content */}
              <div className="relative space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground text-sm">{tier.period}</span>
                  </div>
                </div>

                <Button
                  className={`w-full h-11 transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/40"
                      : "border-border hover:bg-secondary/80"
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>

                <div className="space-y-3 pt-6 border-t border-border">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need something custom?{" "}
            <a href="#contact" className="text-purple-500 hover:text-purple-600 font-medium transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
