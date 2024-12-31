import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function ServiceCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's discuss how we can help transform your business.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 