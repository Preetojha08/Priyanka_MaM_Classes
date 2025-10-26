import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../site.config'

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp */}
      <a
        href={config.social.whatsapp}
        className="floating-action bg-green-500 hover:bg-green-600"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      
      {/* Phone */}
      <a
        href={config.social.phone}
        className="floating-action bg-primary hover:bg-primary/90"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
      
      {/* Demo Class */}
      <Link
        to="/demo"
        className="floating-action bg-accent hover:bg-accent/90 text-ink"
        title="Book Demo Class"
      >
        <Calendar className="w-6 h-6" />
      </Link>
    </div>
  )
}

