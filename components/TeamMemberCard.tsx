import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
  variant?: 'compact' | 'detailed'
}

export default function TeamMemberCard({ member, variant = 'compact' }: TeamMemberCardProps) {
  const { metadata } = member

  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        {metadata.photo ? (
          <img
            src={`${metadata.photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={metadata.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full aspect-square bg-secondary-200 flex items-center justify-center">
            <span className="text-6xl text-secondary-400">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900">{metadata.name}</h3>
        <p className="text-primary-600 font-medium mb-3">{metadata.role}</p>
        {metadata.bio && (
          <p className={`text-secondary-600 text-sm ${variant === 'compact' ? 'line-clamp-3' : ''}`}>
            {metadata.bio}
          </p>
        )}
        {metadata.linkedin && (
          <a
            href={metadata.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-secondary-600 hover:text-primary-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  )
}