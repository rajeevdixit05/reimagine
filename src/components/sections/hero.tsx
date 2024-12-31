'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
            Transform Your Digital Vision Into Reality
          </h1>
          <p className="text-xl text-text/80 mb-8 max-w-2xl mx-auto">
            We are a cutting-edge digital agency specializing in creating innovative solutions that help businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 