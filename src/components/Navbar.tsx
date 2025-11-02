import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <nav className={`bg-gradient-to-b from-white/95 via-paper/95 to-white/90 backdrop-blur-md sticky top-0 z-40 border-b transition-all duration-200 ${
      scrolled ? 'shadow-lg border-white/50' : 'shadow-sm border-white/30'
    }`}>
      <div className="container-constrained">
        <div className="flex justify-between items-center py-4">
          {/* Logo with magical glow */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(215,38,61,0.4)",
                    "0 0 20px rgba(215,38,61,0.6)",
                    "0 0 0px rgba(215,38,61,0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="text-white font-bold text-xl relative z-10">S&S</span>
              </motion.div>
              <div>
                <motion.h1
                  className="text-xl font-display font-bold text-ink group-hover:text-primary transition-colors duration-300"
                  whileHover={{ x: 2 }}
                >
                  Spark & Shine
                </motion.h1>
                <p className="text-xs text-muted">Tuition Classes</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 focus-ring group ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-muted hover:text-primary'
                }`}
              >
                {item.name}
                {/* Underline animation on active/hover */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    layoutId="navbar-indicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover effect */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/demo"
              className="btn-primary"
            >
              Book Demo
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-ink hover:bg-slate-100 transition-colors focus-ring"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="lg:hidden border-t border-slate-200 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium py-2 px-4 rounded-xl transition-colors focus-ring ${
                      location.pathname === item.path
                        ? 'text-primary bg-primary/10'
                        : 'text-muted hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  to="/demo"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center mt-4 block"
                >
                  Book Free Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
