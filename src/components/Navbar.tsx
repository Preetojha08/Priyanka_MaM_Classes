import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Plans & Demo', path: '/plans' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        return
      }

      if (event.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) {
          return
        }
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        const active = document.activeElement as HTMLElement | null

        if (event.shiftKey) {
          if (active === first) {
            event.preventDefault()
            last.focus()
          }
        } else if (active === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement | null
      document.body.style.overflow = 'hidden'
      requestAnimationFrame(() => {
        const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        firstFocusable?.focus()
      })
    } else {
      document.body.style.overflow = ''
      previousFocus.current?.focus?.()
    }
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const headerClass = `sticky top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? 'bg-white/90 backdrop-blur-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-black/10'
      : 'bg-gradient-to-b from-orange-50/80 via-white/90 to-white/95 backdrop-blur-[2px] shadow-[0_6px_18px_rgba(0,0,0,0.06)] border-black/5'
  }`

  const linkBase =
    'group relative inline-flex items-center text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const overlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false)
    }
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C62828] to-[#B71C1C] text-lg font-semibold text-white shadow-[0_10px_24px_rgba(198,40,40,0.25)]">
          📖
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-display font-semibold text-slate-900">
              Spark & Shine
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
              Tuition Classes
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.name}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`${linkBase} ${
                  isActive ? 'text-[#C62828]' : 'text-slate-600 hover:text-[#B71C1C]'
                }`}
              >
                <span>{item.name}</span>
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-0 right-0 -bottom-[6px] h-[2px] rounded-full bg-[#C62828] transition-opacity duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/plans#trial"
            className="inline-flex items-center justify-center rounded-full bg-[#C62828] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Book Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-colors duration-200 hover:text-[#C62828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-slate-900/35 backdrop-blur-[2px] lg:hidden"
            onClick={overlayClick}
          />
          <div
            ref={menuRef}
            id="mobile-navigation"
            className="fixed top-[72px] left-0 right-0 z-50 origin-top border-b border-black/10 bg-white/95 backdrop-blur-lg shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-transform duration-200 ease-out lg:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive
                        ? 'bg-[#C62828]/10 text-[#C62828]'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-[#B71C1C]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                to="/plans#trial"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#C62828] px-5 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Book a Free Demo
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
