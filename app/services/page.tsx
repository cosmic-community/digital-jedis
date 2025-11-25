import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services - Digital Jedis',
  description: 'Explore our comprehensive digital services including web development, mobile apps, UI/UX design, and digital marketing.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Services</h1>
            <p className="text-xl text-secondary-300">
              We offer a full suite of digital services to help your business thrive in the modern marketplace. 
              From web development to digital marketing, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} variant="detailed" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-secondary-500 text-lg">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}