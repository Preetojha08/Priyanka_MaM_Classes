import { SectionHeading } from '../components/SectionHeading'
import { FeatureCard } from '../components/FeatureCard'
import { Users, Heart, HelpCircle, Shield, Award, Target, BookOpen } from 'lucide-react'
import config from '../site.config'

const values = [
  {
    title: "Individual Attention",
    description: "We believe every child is unique and deserves personalized care and attention to reach their full potential.",
    icon: Users
  },
  {
    title: "Supportive Environment",
    description: "Creating a safe, encouraging space where students feel comfortable to ask questions and make mistakes.",
    icon: Heart
  },
  {
    title: "Academic Excellence",
    description: "Focusing on building strong foundations and developing critical thinking skills for lifelong learning.",
    icon: Award
  },
  {
    title: "Holistic Development",
    description: "Beyond academics, we nurture confidence, communication skills, and character development.",
    icon: Target
  }
]

const approach = [
  {
    step: "1",
    title: "Assessment",
    description: "Understanding each student's current level, strengths, and areas for improvement through comprehensive evaluation."
  },
  {
    step: "2", 
    title: "Personalized Learning",
    description: "Creating customized learning plans that match each student's pace and learning style for optimal understanding."
  },
  {
    step: "3",
    title: "Practice & Reinforcement",
    description: "Regular practice sessions and doubt-clearing to ensure concepts are thoroughly understood and retained."
  },
  {
    step: "4",
    title: "Exam Readiness",
    description: "Strategic preparation for board exams with mock tests, time management, and confidence-building techniques."
  }
]

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              About Spark & Shine
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are passionate educators dedicated to nurturing young minds and helping students 
              achieve their academic goals through personalized attention and innovative teaching methods.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                8+ Years Experience
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                500+ Students Taught
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                CBSE & GSEB Boards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Spark & Shine Tuition Classes was founded with a simple yet powerful vision: 
                  to provide quality education that goes beyond just academic success. We believe 
                  that every child has the potential to shine when given the right guidance and support.
                </p>
                <p>
                  Our journey began with the realization that traditional classroom settings often 
                  fail to address individual learning needs. This led us to create a unique learning 
                  environment where small batch sizes ensure personalized attention for every student.
                </p>
                <p>
                  Today, we are proud to have helped hundreds of students not just improve their 
                  grades, but also build confidence, develop critical thinking skills, and discover 
                  their true potential.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink mb-2">
                    Priyanka Pandey
                  </h3>
                  <p className="text-gray-600 mb-4">Founder & Lead Teacher</p>
                  <p className="text-sm text-gray-600">
                    "Every child deserves individual attention and a supportive environment to learn and grow."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do at Spark & Shine"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {values.map((value, index) => (
              <FeatureCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Teaching Approach"
            subtitle="A systematic method that ensures every student succeeds"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {approach.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-ink mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-8">
              Why We're Different
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Small Batches</h3>
                <p className="text-gray-600 text-sm">
                  Maximum 6 students per batch ensures individual attention and personalized care.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-ink" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Caring Environment</h3>
                <p className="text-gray-600 text-sm">
                  A supportive atmosphere where students feel safe to ask questions and learn.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Extra Support</h3>
                <p className="text-gray-600 text-sm">
                  Special attention and additional help for students who need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to See the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free demo class and experience our unique teaching approach firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Free Demo
            </a>
            <a
              href={config.social.phone}
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

