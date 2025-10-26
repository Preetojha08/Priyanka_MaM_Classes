import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, MessageCircle, Star } from 'lucide-react'
import config from '../site.config'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-paper via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Star className="w-4 h-4" />
              <span>{config.admissionsNote}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-tight"
            >
              Small Batches.{' '}
              <span className="gradient-text">Big Confidence.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Kindergarten to 9th • CBSE & GSEB • Maths • English • Science • S.S.T • Hindi
            </motion.p>

            {/* Feature Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {config.features.slice(0, 3).map((feature, index) => (
                <span
                  key={feature.title}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {feature.title}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/demo" className="btn-primary text-center">
                Book Free Demo Class
              </Link>
              <a
                href={config.social.phone}
                className="btn-outline text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={config.social.whatsapp}
                className="btn-secondary text-center flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center space-x-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span>500+ Students Taught</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-accent fill-current" />
                <span>8+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              {/* Mock Classroom */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-ink mb-2">
                    Our Learning Environment
                  </h3>
                  <p className="text-gray-600">
                    Small batches ensure individual attention
                  </p>
                </div>
                
                {/* Student Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-gray-700">Student {i}</p>
                    </div>
                  ))}
                </div>
                
                {/* Teacher */}
                <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-4 text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2"></div>
                  <p className="font-semibold">Priyanka Pandey</p>
                  <p className="text-sm opacity-90">Lead Teacher</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

