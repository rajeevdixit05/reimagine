'use client'

import * as React from 'react'
import { Code, Smartphone, Palette, Cpu, Cloud, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Web Development',
    icon: Code,
    description: 'Custom websites and web applications built with cutting-edge technologies.'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android.'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'User-centered design solutions that combine aesthetics with functionality.'
  },
  {
    title: 'AI Solutions',
    icon: Cpu,
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.'
  },
  {
    title: 'Cloud Services',
    icon: Cloud,
    description: 'Scalable cloud infrastructure and services for modern applications.'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions to protect your digital assets.'
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Services</h2>
          <p className="text-lg text-text/80">Comprehensive solutions for your digital needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 rounded-theme bg-background shadow-sm hover:shadow-md transition-theme">
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-text/70 mb-4">{service.description}</p>
              <Button asChild variant="outline">
                <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn More
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 