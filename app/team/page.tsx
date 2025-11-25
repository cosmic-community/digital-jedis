import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Our Team - Digital Jedis',
  description: 'Meet the talented team behind Digital Jedis. Our experts are dedicated to delivering exceptional digital solutions.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Team</h1>
            <p className="text-xl text-secondary-300">
              Meet the talented individuals who make the magic happen. Our diverse team brings 
              together expertise from various fields to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          {teamMembers.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} variant="detailed" />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-secondary-500 text-lg">No team members available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}