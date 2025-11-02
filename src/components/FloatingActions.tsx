import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import config from '../site.config'

export function FloatingActions() {
  return (
    <>
      {/* Mobile Only - Fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col space-y-3">
        {/* WhatsApp */}
        <motion.a
          href={config.social.whatsapp}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl flex items-center space-x-2 focus-ring group overflow-hidden"
          aria-label="Chat with us on WhatsApp"
          title="WhatsApp"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 4px 20px rgba(34, 197, 94, 0.4)",
              "0 6px 30px rgba(34, 197, 94, 0.6)",
              "0 4px 20px rgba(34, 197, 94, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle className="w-5 h-5 relative z-10" />
          </motion.div>
          <span className="text-sm font-medium relative z-10">WhatsApp</span>
        </motion.a>
        
        {/* Phone */}
        <motion.a
          href={config.social.phone}
          className="relative bg-primary hover:bg-primary-600 text-white p-4 rounded-full shadow-cta hover:shadow-xl flex items-center space-x-2 focus-ring group overflow-hidden"
          aria-label="Call us now"
          title="Call Now"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/50"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [1, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Phone className="w-5 h-5 relative z-10" />
          </motion.div>
          <span className="text-sm font-medium relative z-10">Call</span>
        </motion.a>
      </div>
    </>
  )
}

