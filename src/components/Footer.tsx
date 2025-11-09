import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, MessageCircle, Sparkles } from 'lucide-react'
import config from '../site.config'

export function Footer() {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Classes & Curriculum', path: '/classes' },
    { name: 'Fees & Plans', path: '/fees' },
    { name: 'Book Demo Class', path: '/demo' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative overflow-hidden text-[#f8f9fa]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#b83a34] via-[#a02828] to-[#8c1b1b]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <div className="absolute -top-10 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-accent/30 blur-[120px]" />
      </div>

      <div className="relative">
        <div className="container-constrained px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          <div className="flex flex-col gap-14">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold tracking-wide text-white">
                      Spark & Shine
                    </h3>
                    <p className="text-sm font-medium tracking-wide text-white/80">
                      Tuition Classes
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-white/80">
                  We pair small-group learning with individualized support so every child gains
                  confidence and clarity in their studies from Kindergarten to 9th grade.
                </p>
                <div className="grid gap-4 rounded-2xl bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                    Visit Us
                  </h4>
                  <p className="text-sm leading-relaxed text-white/80">
                    {config.address}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid gap-8 sm:grid-cols-3">
                <div className="space-y-5">
                  <h4 className="text-lg font-display font-semibold tracking-wide text-white">
                    Quick Links
                  </h4>
                  <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="transition-colors duration-200 hover:text-white hover:underline underline-offset-4"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5">
                  <h4 className="text-lg font-display font-semibold tracking-wide text-white">
                    Subjects
                  </h4>
                  <div className="grid grid-cols-1 gap-3 text-sm leading-relaxed text-white/75 sm:grid-cols-2">
                    {config.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="transition-colors duration-200 hover:text-white"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3">
                    <h5 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                      Boards
                    </h5>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {config.boards.map((board) => (
                        <span
                          key={board}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/85 transition-colors duration-200 hover:border-white/30 hover:bg-white/15 hover:text-white"
                        >
                          {board}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h4 className="text-lg font-display font-semibold tracking-wide text-white">
                    Contact
                  </h4>
                  <div className="space-y-4 text-sm leading-relaxed text-white/75">
                    <a
                      href={config.social.phone}
                      className="flex items-start gap-3 transition-colors duration-200 hover:text-white"
                    >
                      <Phone className="mt-1 h-5 w-5 text-white/75" />
                      <span>{config.phone}</span>
                    </a>
                    <a
                      href={config.social.email}
                      className="flex items-start gap-3 break-all transition-colors duration-200 hover:text-white"
                    >
                      <Mail className="mt-1 h-5 w-5 text-white/75" />
                      <span>{config.email}</span>
                    </a>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-white/75" />
                      <span>{config.hours}</span>
                    </div>
                    <Link
                      to="/demo"
                      className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/20 hover:text-white"
                    >
                      Book a Free Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                Spark & Shine Tuition Classes - Est. 2016
              </p>
              <p className="text-sm leading-relaxed text-white/75">
                Copyright {new Date().getFullYear()} Spark & Shine Tuition Classes. All rights reserved.
              </p>
              <a
                href={config.social.whatsapp}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
