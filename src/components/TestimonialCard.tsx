import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedCard } from './ui/Card'

interface TestimonialCardProps {
  name: string
  grade: string
  text: string
  rating: number
  index: number
}

export function TestimonialCard({ name, grade, text, rating, index }: TestimonialCardProps) {
  return (
    <AnimatedCard delay={index * 0.1} className="flex flex-col h-full group relative overflow-hidden">
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
        whileHover={{
          opacity: 1,
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      />
      
      <div className="space-y-4 flex-grow relative z-10">
        {/* Rating with animated stars */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.3 }
              }}
            >
              <Star
                className={`w-5 h-5 ${
                  i < rating
                    ? 'text-accent fill-current'
                    : 'text-slate-300'
                }`}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <motion.blockquote
          className="text-muted leading-relaxed"
          whileHover={{
            color: '#64748B'
          }}
        >
          "{text}"
        </motion.blockquote>
        
        {/* Author */}
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <motion.div
            className="font-semibold text-ink"
            whileHover={{ color: '#D7263D' }}
          >
            {name}
          </motion.div>
          <div className="text-sm text-slate-600">{grade}</div>
        </div>
      </div>
      
      {/* Decorative corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
      />
    </AnimatedCard>
  )
}

