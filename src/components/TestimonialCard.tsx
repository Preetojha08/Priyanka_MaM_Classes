import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  grade: string
  text: string
  rating: number
  index: number
}

export function TestimonialCard({ name, grade, text, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="card group hover:scale-105"
    >
      <div className="space-y-4">
        {/* Rating */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? 'text-accent fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-gray-700 leading-relaxed">
          "{text}"
        </blockquote>
        
        {/* Author */}
        <div className="border-t border-gray-100 pt-4">
          <div className="font-semibold text-ink">{name}</div>
          <div className="text-sm text-gray-600">{grade}</div>
        </div>
      </div>
    </motion.div>
  )
}

