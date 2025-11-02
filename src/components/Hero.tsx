import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Sparkles } from 'lucide-react'
import config from '../site.config'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-paper via-white to-bg overflow-hidden section-padding">
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-constrained relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Badge with pulse animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <span>{config.admissionsNote}</span>
            </motion.div>

            {/* Headline with magic gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ink leading-tight"
            >
              Small Batches.{' '}
              <motion.span
                className="block mt-2 text-primary"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #D7263D, #F4B000, #D7263D)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Big Confidence.
              </motion.span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-muted leading-relaxed"
            >
              Kindergarten to 9th • CBSE & GSEB • Maths • English • Science • S.S.T • Hindi
            </motion.p>

            {/* Reassurance Chips with magical float */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {config.features.slice(0, 3).map((feature, i) => (
                <motion.span
                  key={feature.title}
                  className="bg-white border border-slate-200 text-muted px-4 py-2 rounded-full text-sm font-medium shadow-card"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#D7263D",
                    boxShadow: "0 4px 20px rgba(215,38,61,0.2)"
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {feature.title}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/demo" className="btn-primary flex items-center justify-center space-x-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4" />
                </motion.div>
                <span>Book Free Demo Class</span>
              </Link>
              <a
                href={config.social.whatsapp}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual - Classroom Mockup with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 md:mt-0"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-card p-6 sm:p-8"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-ink mb-2">
                    Our Learning Environment
                  </h3>
                  <p className="text-muted">
                    Small batches ensure individual attention
                  </p>
                </div>
                
                {/* Student Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 text-center"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-full mx-auto mb-2 shadow-cta"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-sm font-medium text-ink">Student {i}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Teacher Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-gradient-to-r from-primary to-primary-600 rounded-xl p-6 text-center text-white shadow-cta relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    style={{
                      backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
                      backgroundSize: "20px 20px"
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center border-2 border-white/30"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(255,255,255,0.3)",
                          "0 0 40px rgba(255,255,255,0.5)",
                          "0 0 20px rgba(255,255,255,0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-8 h-8" />
                    </motion.div>
                    <p className="font-semibold text-lg">Priyanka Pandey</p>
                    <p className="text-sm opacity-90">Lead Teacher</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

