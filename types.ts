// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

// File/Image type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    title: string;
    description?: string;
    icon?: string;
    featured_image?: CosmicFile;
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    role: string;
    bio?: string;
    photo?: CosmicFile;
    linkedin?: string;
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    company?: string;
    quote: string;
    rating?: number;
    photo?: CosmicFile;
  };
}

// Case Studies
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title: string;
    client: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: CosmicFile;
    services_used?: Service[];
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Helper type guard
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}