import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  variant?: 'compact' | 'detailed'
}

export default function ServiceCard({ service, variant = 'compact' }: ServiceCardProps) {
  const { metadata } = service
  
  if (variant === 'detailed') {
    return (
      <div className="card overflow-hidden">
        {metadata.featured_image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={`${metadata.featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            {metadata.icon && (
              <span className="absolute bottom-4 left-4 text-4xl">{metadata.icon}</span>
            )}
          </div>
        )}
        <div className="p-6">
          <h3 className="heading-3 text-secondary-900 mb-4">{metadata.title}</h3>
          {metadata.description && (
            <div className="prose prose-sm max-w-none text-secondary-600">
              <ReactMarkdown>{metadata.description}</ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
      {metadata.icon && (
        <span className="text-4xl mb-4 block">{metadata.icon}</span>
      )}
      <h3 className="text-xl font-semibold text-secondary-900 mb-2">{metadata.title}</h3>
      {metadata.description && (
        <p className="text-secondary-600 text-sm line-clamp-3">
          {metadata.description.replace(/[#*\[\]]/g, '').substring(0, 120)}...
        </p>
      )}
      <Link 
        href="/services" 
        className="inline-block mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  )
}