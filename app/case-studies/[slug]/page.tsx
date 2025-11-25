// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - Digital Jedis',
    }
  }

  return {
    title: `${caseStudy.metadata.title} - Digital Jedis`,
    description: `Case study for ${caseStudy.metadata.client}`,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const { metadata } = caseStudy

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
        {metadata.featured_image && (
          <div className="absolute inset-0">
            <img
              src={`${metadata.featured_image.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt={metadata.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-secondary-900/60"></div>
          </div>
        )}
        <div className="container-custom section-padding relative">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-primary-300 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </Link>
          <div className="max-w-4xl">
            <p className="text-primary-300 font-medium mb-2">Client: {metadata.client}</p>
            <h1 className="heading-1 mb-6">{metadata.title}</h1>
            {metadata.services_used && metadata.services_used.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {metadata.services_used.map((service) => (
                  <span
                    key={service.id}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
                  >
                    {service.metadata?.icon} {service.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            {metadata.challenge && (
              <div className="mb-12">
                <div className="prose max-w-none">
                  <ReactMarkdown>{metadata.challenge}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Solution */}
            {metadata.solution && (
              <div className="mb-12 bg-primary-50 rounded-2xl p-8">
                <div className="prose max-w-none">
                  <ReactMarkdown>{metadata.solution}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Results */}
            {metadata.results && (
              <div className="mb-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                <div className="prose max-w-none prose-invert">
                  <ReactMarkdown>{metadata.results}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center pt-8 border-t border-secondary-200">
              <h3 className="heading-3 text-secondary-900 mb-4">Ready to achieve similar results?</h3>
              <p className="text-secondary-600 mb-6">
                Let&apos;s discuss how we can help transform your business.
              </p>
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}