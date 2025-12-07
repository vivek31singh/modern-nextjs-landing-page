import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BuildFlow - Enterprise Platform for Modern Teams",
  description:
    "BuildFlow empowers teams to build, deploy, and scale web applications with unprecedented speed and confidence.",
  keywords: ["SaaS", "platform", "web development", "deployment", "enterprise"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buildflow.dev",
    siteName: "BuildFlow",
    title: "BuildFlow - Enterprise Platform for Modern Teams",
    description:
      "BuildFlow empowers teams to build, deploy, and scale web applications with unprecedented speed and confidence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildFlow - Enterprise Platform for Modern Teams",
    description:
      "BuildFlow empowers teams to build, deploy, and scale web applications with unprecedented speed and confidence.",
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
