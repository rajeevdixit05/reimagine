import { ServicesGrid } from '@/components/sections/services-grid'
import { ServiceHero } from '@/components/sections/service-hero'
import { ServiceCTA } from '@/components/sections/service-cta'

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServiceHero />
      <ServicesGrid />
      <ServiceCTA />
    </main>
  )
} 