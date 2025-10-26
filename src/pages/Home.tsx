import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { FeatureCard } from '../components/FeatureCard'
import { SubjectCard } from '../components/SubjectCard'
import { TestimonialCard } from '../components/TestimonialCard'
import { StatCounter } from '../components/StatCounter'
import { Link } from 'react-router-dom'
import { Users, Heart, HelpCircle, Shield, BookOpen, Calculator, Globe, Microscope, FileText } from 'lucide-react'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Spark & Shine?"
            subtitle="We believe every child deserves individual attention and a supportive learning environment to reach their full potential."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
        </div>
      </section>

      {/* Subjects & Grades Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Subjects We Teach"
            subtitle="Comprehensive coverage of all major subjects for CBSE and GSEB boards"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
          <div className="mt-16">
            <h3 className="text-2xl font-display font-bold text-ink text-center mb-8">
              Grades We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {config.grades.map((grade, index) => (
                <div
                  key={grade}
                  className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{grade}</div>
                  <div className="text-sm text-gray-600">Grade</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Small Batches & Care Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
                Small Batches, Big Results
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our small batch sizes ensure that every student gets the individual attention they need. 
                We focus on understanding each child's unique learning style and pace.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Individual Progress Tracking</h4>
                    <p className="text-gray-600">Regular assessments and personalized feedback for each student.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Doubt-Solving Sessions</h4>
                    <p className="text-gray-600">Dedicated time for clearing doubts and reinforcing concepts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Extra Care for Weak Students</h4>
                    <p className="text-gray-600">Special attention and additional support for students who need it most.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-4 text-center shadow-lg"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-2"></div>
                      <div className="text-sm font-semibold text-gray-700">Student {i}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <div className="text-2xl font-bold text-primary">Max 6 Students</div>
                  <div className="text-gray-600">per batch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parents' Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Parents Say"
            subtitle="Hear from parents who have seen their children thrive with our support"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            Seats Fill Fast — Book a Free Demo Class This Week
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
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
        </div>
      </section>
    </div>
  )
}

