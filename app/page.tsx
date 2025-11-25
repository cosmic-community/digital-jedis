import Link from 'next/link'
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import TestimonialCard from '@/components/TestimonialCard'
import CaseStudyCard from '@/components/CaseStudyCard'

export default async function HomePage() {
  const [services, teamMembers, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="container-custom section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 mb-6">
              Transform Your Business with
              <span className="block text-primary-400">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 mb-10 max-w-2xl mx-auto">
              We help businesses thrive in the digital age with cutting-edge web development, 
              mobile apps, and design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/case-studies" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-secondary-50 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-secondary-900 mb-4">Our Services</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed in the modern marketplace.
            </p>
          </div>
          {services.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-500">No services available at the moment.</p>
          )}
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-secondary-900 mb-4">Case Studies</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              See how we&apos;ve helped businesses achieve remarkable results through digital transformation.
            </p>
          </div>
          {caseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-500">No case studies available at the moment.</p>
          )}
          <div className="text-center mt-10">
            <Link href="/case-studies" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <p className="text-center text-primary-100">No testimonials available at the moment.</p>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-secondary-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Our talented team of experts is dedicated to delivering exceptional results for every project.
            </p>
          </div>
          {teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="text-center text-secondary-500">No team members available at the moment.</p>
          )}
          <div className="text-center mt-10">
            <Link href="/team" className="btn-secondary">
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary-900 to-primary-900 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="heading-2 text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-secondary-300 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how we can help transform your business with our digital solutions.
            </p>
            <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}