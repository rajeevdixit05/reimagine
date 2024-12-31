'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 font-bold">
          Reimagine
        </Link>
        <nav className="flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            <Link href="/services" className="text-sm font-medium">
              Services
            </Link>
            <Link href="/industries" className="text-sm font-medium">
              Industries
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </div>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
} 