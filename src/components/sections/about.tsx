'use client'

import * as React from 'react'
import { Users, Target, Lightbulb } from 'lucide-react'

const values = [
  {
    title: 'Innovation',
    icon: Lightbulb,
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.'
  },
  {
    title: 'Excellence',
    icon: Target,
    description: 'We strive for excellence in every project we undertake.'
  },
  {
    title: 'Collaboration',
    icon: Users,
    description: 'We work closely with our clients to ensure their success.'
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">About Reimagine</h2>
          <p className="text-lg text-text/80">
            We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-text/70">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="prose prose-lg mx-auto text-text/80">
          <p className="text-center">
            With years of experience in digital transformation, we help businesses of all sizes embrace the future of technology.
            Our commitment to excellence and innovation drives us to deliver exceptional results for our clients.
          </p>
        </div>
      </div>
    </section>
  )
} 