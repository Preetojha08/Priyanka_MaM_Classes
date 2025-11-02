import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { AnimatedCard } from './ui/Card'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export function FeatureCard({ title, description, icon: Icon, index }: FeatureCardProps) {
  return (
    <AnimatedCard delay={index * 0.1} className="text-center group">
      <div className="flex flex-col items-center space-y-4 relative">
        {/* Pulsing Ring Effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 w-16 h-16 bg-primary rounded-2xl"
        />
        
        {/* Icon Container with 3D effect */}
        <motion.div
          className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center shadow-cta z-10"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-ink group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
        
        {/* Decorative accent line on hover */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent"
          initial={false}
          whileHover={{
            width: "60px",
            transition: { duration: 0.3 }
          }}
        />
      </div>
    </AnimatedCard>
  )
}

