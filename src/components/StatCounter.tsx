import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

interface StatCounterProps {
  label: string
  value: string
  index: number
}

export function StatCounter({ label, value, index }: StatCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^\d]/g, ''))
  const suffix = value.replace(/[\d]/g, '')

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const increment = numericValue / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  )
}

