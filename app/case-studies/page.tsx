import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies - Digital Jedis',
  description: 'Explore our portfolio of successful digital projects and see how we help businesses achieve remarkable results.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Case Studies</h1>
            <p className="text-xl text-secondary-300">
              Discover how we&apos;ve helped businesses transform their digital presence and achieve 
              remarkable results through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          {caseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-secondary-500 text-lg">No case studies available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}