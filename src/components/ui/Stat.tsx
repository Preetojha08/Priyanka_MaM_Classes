import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface StatProps {
  label: string
  value: string
  index: number
}

export function Stat({ label, value, index }: StatProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Extract numeric value and suffix
  const numMatch = value.match(/^(\d+)/)
  const numericValue = numMatch ? parseInt(numMatch[1]) : 0
  const suffix = value.replace(/^\d+/, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const duration = 2000 // 2 seconds
          const steps = 60
          const increment = numericValue / steps
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setCount(numericValue)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [numericValue, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="text-center relative"
      whileHover={{ scale: 1.05 }}
    >
      {/* Pulsing background circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        <motion.div
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 drop-shadow-lg"
          animate={{
            textShadow: [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {count}{suffix}
        </motion.div>
        <div className="text-lg text-white/90 font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  )
}
