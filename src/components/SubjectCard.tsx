import { motion } from 'framer-motion'
import { BookOpen, Calculator, Globe, Microscope, FileText } from 'lucide-react'

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className="card group hover:scale-105"
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-display font-semibold text-ink">
            {subject}
          </h3>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">Key Outcomes:</h4>
          <ul className="space-y-1">
            {outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

