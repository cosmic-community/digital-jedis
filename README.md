# Digital Jedis - Digital Services Website

![Digital Jedis](https://imgix.cosmicjs.com/1d40c6e0-ca34-11f0-9c76-997eeae9b341-photo-1461749280684-dccba630e2f6-1764098562049.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional website for a digital services company built with Next.js 16 and Cosmic CMS. Showcase your services, team, testimonials, and case studies with a beautiful, responsive design.

## Features

- 🛠️ **Services Showcase** - Display your digital services with rich descriptions and images
- 👥 **Team Profiles** - Introduce your team with professional bios and social links
- ⭐ **Client Testimonials** - Build credibility with client reviews and star ratings
- 📊 **Case Studies** - Demonstrate expertise with detailed project narratives
- 📱 **Fully Responsive** - Looks great on desktop, tablet, and mobile
- 🚀 **Server-Side Rendering** - Fast loading and SEO optimized
- 🎨 **Modern UI** - Clean design with smooth animations and transitions

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6926019cc5646c2bd11091a8&clone_repository=692602e2c5646c2bd11091d5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital services company website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Based on the content model I created for a digital services company website with services, team members, testimonials, and case studies, now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React Markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the digital services content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digital-jedis
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies with Related Services

```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes related services data
```

## Cosmic CMS Integration

This application uses the following content types from your Cosmic bucket:

| Content Type | Description |
|-------------|-------------|
| **Services** | Digital service offerings with icons, descriptions, and images |
| **Team Members** | Staff profiles with photos, bios, and LinkedIn links |
| **Testimonials** | Client reviews with ratings and photos |
| **Case Studies** | Project showcases with challenge, solution, and results |

For more information on working with Cosmic, visit the [Cosmic Documentation](https://www.cosmicjs.com/docs).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## License

MIT License - feel free to use this project for your own digital services website.

<!-- README_END -->