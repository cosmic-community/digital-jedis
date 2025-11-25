import Link from 'next/link'
import type { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { metadata, slug } = caseStudy

  return (
    <Link href={`/case-studies/${slug}`} className="card overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        {metadata.featured_image ? (
          <img
            src={`${metadata.featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={metadata.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
            <span className="text-6xl text-white/20">📊</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-primary-300 text-sm font-medium mb-1">{metadata.client}</p>
          <h3 className="text-xl font-bold text-white">{metadata.title}</h3>
        </div>
      </div>
      <div className="p-6">
        {metadata.services_used && metadata.services_used.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {metadata.services_used.map((service) => (
              <span
                key={service.id}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
              >
                {service.metadata?.icon} {service.title}
              </span>
            ))}
          </div>
        )}
        {metadata.challenge && (
          <p className="text-secondary-600 text-sm line-clamp-2">
            {metadata.challenge.replace(/[#*\[\]]/g, '').substring(0, 150)}...
          </p>
        )}
        <span className="inline-flex items-center mt-4 text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
          Read Case Study
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}