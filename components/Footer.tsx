import Link from 'next/link'

const navigation = {
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
    { name: 'Digital Marketing', href: '/services' },
  ],
  company: [
    { name: 'About Us', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-xl font-bold">Digital Jedis</span>
            </Link>
            <p className="text-secondary-400 text-sm">
              Transforming businesses through innovative digital solutions since 2015.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-secondary-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-secondary-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-secondary-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm">
            © {new Date().getFullYear()} Digital Jedis. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}