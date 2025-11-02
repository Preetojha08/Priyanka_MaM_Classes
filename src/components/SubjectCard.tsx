import { motion } from 'framer-motion'
import { BookOpen, Calculator, Globe, Microscope, FileText } from 'lucide-react'
import { AnimatedCard } from './ui/Card'

const subjectIcons = {
  'Maths': Calculator,
  'English': BookOpen,
  'Science': Microscope,
  'S.S.T': Globe,
  'Hindi': FileText,
} as const

interface SubjectCardProps {
  subject: string
  outcomes: string[]
  index: number
}

export function SubjectCard({ subject, outcomes, index }: SubjectCardProps) {
  const Icon = subjectIcons[subject as keyof typeof subjectIcons] || BookOpen

  return (
    <AnimatedCard delay={index * 0.1} className="group">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <motion.div
            className="relative w-12 h-12 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center shadow-cta"
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
          >
            <Icon className="w-6 h-6 text-white" />
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <h3 className="text-xl font-semibold text-ink group-hover:text-primary transition-colors duration-300">
            {subject}
          </h3>
        </div>
        
        <div className="space-y-3 pt-2">
          <h4 className="font-semibold text-ink">Key Outcomes:</h4>
          <ul className="space-y-2">
            {outcomes.map((outcome, i) => (
              <motion.li
                key={i}
                className="flex items-start space-x-2 text-sm text-slate-600"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
                whileHover={{ x: 4, color: "#D7263D" }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="transition-colors duration-200">{outcome}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedCard>
  )
}

