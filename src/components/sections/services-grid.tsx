import { Code, Smartphone, Palette, Gamepad2, Cpu, Building2 } from 'lucide-react'

const services = [
  {
    name: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    icon: Code,
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    name: 'UI/UX Design',
    description: 'User-centered design solutions that enhance engagement and satisfaction.',
    icon: Palette,
  },
  {
    name: 'Game Development',
    description: 'Engaging gaming experiences across multiple platforms.',
    icon: Gamepad2,
  },
  {
    name: 'AI Solutions',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence.',
    icon: Cpu,
  },
  {
    name: 'Enterprise Solutions',
    description: 'Scalable enterprise applications to streamline your business operations.',
    icon: Building2,
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="p-6 rounded-lg border border-gray-200 hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 