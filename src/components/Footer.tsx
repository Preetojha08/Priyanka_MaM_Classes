import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import config from '../site.config'

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S&S</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Spark & Shine</h3>
                <p className="text-sm text-gray-300">Tuition Classes</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Small batches, individual attention, and a supportive environment for students from Kindergarten to 9th grade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-white transition-colors">
                  Classes & Curriculum
                </Link>
              </li>
              <li>
                <Link to="/fees" className="text-gray-300 hover:text-white transition-colors">
                  Fees & Plans
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-white transition-colors">
                  Book Demo Class
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Subjects</h4>
            <div className="grid grid-cols-2 gap-2">
              {config.subjects.map((subject) => (
                <span key={subject} className="text-gray-300 text-sm">
                  {subject}
                </span>
              ))}
            </div>
            <div className="pt-2">
              <h5 className="font-semibold text-sm mb-2">Boards</h5>
              <div className="flex flex-wrap gap-2">
                {config.boards.map((board) => (
                  <span key={board} className="bg-primary/20 text-primary px-2 py-1 rounded text-xs">
                    {board}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={config.social.phone}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {config.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={config.social.email}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {config.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {config.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {config.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Spark & Shine Tuition Classes. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={config.social.whatsapp}
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

