'use client'

import * as React from 'react'
import { Building2, Stethoscope, ShoppingBag, GraduationCap, Plane, Factory } from 'lucide-react'

const industries = [
  {
    title: 'Real Estate',
    icon: Building2,
    description: 'Digital solutions for property management and real estate operations.'
  },
  {
    title: 'Healthcare',
    icon: Stethoscope,
    description: 'Modern healthcare systems and patient management solutions.'
  },
  {
    title: 'Retail',
    icon: ShoppingBag,
    description: 'E-commerce and retail management systems for modern businesses.'
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'Educational technology solutions for learning institutions.'
  },
  {
    title: 'Travel',
    icon: Plane,
    description: 'Travel and hospitality management systems.'
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    description: 'Industrial automation and manufacturing process solutions.'
  }
]

export function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Industries We Serve</h2>
          <p className="text-lg text-text/80">Specialized solutions for diverse sectors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.title} className="p-6 rounded-theme bg-surface hover:shadow-md transition-theme">
              <industry.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-text/70">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 