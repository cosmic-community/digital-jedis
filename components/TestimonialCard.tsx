import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-secondary-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      {metadata.rating && (
        <div className="mb-4">
          <StarRating rating={metadata.rating} />
        </div>
      )}
      <blockquote className="text-secondary-700 mb-6 italic">
        &ldquo;{metadata.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-4">
        {metadata.photo ? (
          <img
            src={`${metadata.photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={metadata.client_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
            <span className="text-xl text-primary-600 font-semibold">
              {metadata.client_name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-secondary-900">{metadata.client_name}</p>
          {metadata.company && (
            <p className="text-secondary-500 text-sm">{metadata.company}</p>
          )}
        </div>
      </div>
    </div>
  )
}