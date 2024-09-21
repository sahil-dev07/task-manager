'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Calendar, User, CheckSquare } from 'lucide-react'

export default function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    { name: 'Tasks', href: '/', icon: CheckSquare },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            TaskMaster
          </Link>
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <link.icon
                    className={`w-5 h-5 mr-2 transform transition-transform duration-200 ${
                      hoveredLink === link.name ? 'scale-125' : ''
                    }`}
                  />
                  <span
                    className={`transition-all duration-200 ${
                      hoveredLink === link.name ? 'font-semibold' : ''
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}