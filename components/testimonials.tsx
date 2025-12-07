"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
    image: "SC",
    content:
      "BuildFlow transformed how our team deploys applications. We went from 2-hour deployments to 5 minutes. The productivity gains are incredible.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "Engineering Lead",
    company: "DataFlow Inc",
    image: "MR",
    content:
      "The developer experience is unmatched. Our team loves the intuitive interface and comprehensive documentation. Highly recommended!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Product Manager",
    company: "StartupXYZ",
    image: "EW",
    content:
      "What impressed us most is the reliability. 99.99% uptime guaranteed, and their support team is always there when we need them.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 md:mb-20">
          <Badge variant="secondary">TESTIMONIALS</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Loved by developers worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams that trust BuildFlow for their critical applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 p-6 md:p-8"
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed text-sm md:text-base">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={`/api/placeholder?width=40&height=40`} />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-600 text-white font-bold">
                      {testimonial.image}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
