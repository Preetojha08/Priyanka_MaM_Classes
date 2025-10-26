import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import config from '../site.config'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Classes', path: '/classes' },
    { name: 'Fees', path: '/fees' },
    { name: 'Demo', path: '/demo' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S&S</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-ink">Spark & Shine</h1>
              <p className="text-sm text-gray-600">Tuition Classes</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={config.social.phone}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </a>
            <a
              href={config.social.whatsapp}
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
            <Link
              to="/demo"
              className="btn-primary text-sm"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href={config.social.phone}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a
                  href={config.social.whatsapp}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <Link
                  to="/demo"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Book Free Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

