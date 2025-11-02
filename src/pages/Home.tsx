import { Hero } from '../components/Hero'
import { FeatureCard } from '../components/FeatureCard'
import { SubjectCard } from '../components/SubjectCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { Stat } from '../components/ui/Stat'
import { Section } from '../components/ui/Section'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Heart, HelpCircle, Shield } from 'lucide-react'
import config from '../site.config'

const subjectOutcomes = {
  'Maths': [
    'Strong foundation in basic concepts',
    'Problem-solving techniques',
    'Exam preparation strategies',
    'Confidence building'
  ],
  'English': [
    'Grammar and vocabulary enhancement',
    'Reading comprehension skills',
    'Writing and communication',
    'Literature appreciation'
  ],
  'Science': [
    'Conceptual understanding',
    'Practical applications',
    'Scientific thinking',
    'Laboratory skills'
  ],
  'S.S.T': [
    'Historical knowledge',
    'Geographic understanding',
    'Civic awareness',
    'Critical thinking'
  ],
  'Hindi': [
    'Language proficiency',
    'Grammar and composition',
    'Literature appreciation',
    'Cultural understanding'
  ]
}

export function Home() {
  const featureIcons = [Users, Heart, HelpCircle, Shield]

  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <Section background="white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="section-spacing"
        >
          <motion.div
            className="text-center mb-10"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
              Why Choose Spark & Shine?
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              We believe every child deserves individual attention and a supportive learning environment to reach their full potential.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {config.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={featureIcons[index]}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Subjects & Grades Section */}
      <Section background="bg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="section-spacing"
        >
          <motion.div
            className="text-center mb-10"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
              Subjects We Teach
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Comprehensive coverage of all major subjects for CBSE and GSEB boards
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {config.subjects.map((subject, index) => (
              <SubjectCard
                key={subject}
                subject={subject}
                outcomes={subjectOutcomes[subject as keyof typeof subjectOutcomes]}
                index={index}
              />
            ))}
          </div>

          {/* Grades Section */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-ink mb-8">
              Grades We Cover
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {config.grades.map((grade, i) => (
                <motion.span
                  key={grade}
                  className="inline-flex items-center rounded-full px-4 py-2 bg-white shadow-card font-semibold text-ink"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 10px 25px rgba(215,38,61,0.2)"
                  }}
                >
                  {grade}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-white/20 blur-3xl"></div>
        </div>
        
        <div className="container-constrained relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.stats.map((stat, index) => (
              <Stat
                key={stat.label}
                label={stat.label}
                value={stat.value}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parents' Reviews Section */}
      <Section background="white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="section-spacing"
        >
          <motion.div
            className="text-center mb-10"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Hear from parents who have seen their children thrive with our support
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {config.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                grade={testimonial.grade}
                text={testimonial.text}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section background="bg">
        <motion.div
          className="text-center max-w-3xl mx-auto section-spacing"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-ink mb-4">
            Seats Fill Fast — Book a Free Demo Class This Week
          </h2>
          <p className="text-lg text-muted mb-8">
            Experience our teaching methods and see how we can help your child excel. 
            Limited slots available weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo" className="btn-primary">
              Book Free Demo Class
            </Link>
            <Link to="/fees" className="btn-outline">
              View Fee Plans
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

