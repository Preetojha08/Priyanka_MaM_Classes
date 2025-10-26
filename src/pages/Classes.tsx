import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { BookOpen, Calculator, Globe, Microscope, FileText, Clock, Users, Target } from 'lucide-react'

const gradeClusters = [
  {
    id: 'k-2',
    title: 'Kindergarten to 2nd Grade',
    grades: ['KG', '1st', '2nd'],
    description: 'Building strong foundations through interactive learning and play-based activities.',
    subjects: ['English', 'Maths', 'Hindi'],
    outcomes: [
      'Basic reading and writing skills',
      'Number recognition and counting',
      'Social skills and confidence building',
      'Creative thinking and imagination'
    ],
    weeklyRhythm: '3-4 sessions per week, 45 minutes each',
    assessment: 'Continuous observation and informal assessments'
  },
  {
    id: '3-5',
    title: '3rd to 5th Grade',
    grades: ['3rd', '4th', '5th'],
    description: 'Developing core academic skills with emphasis on understanding and application.',
    subjects: ['Maths', 'English', 'Science', 'S.S.T', 'Hindi'],
    outcomes: [
      'Strong conceptual understanding',
      'Problem-solving abilities',
      'Reading comprehension skills',
      'Basic research and presentation skills'
    ],
    weeklyRhythm: '4-5 sessions per week, 60 minutes each',
    assessment: 'Monthly tests and project-based evaluations'
  },
  {
    id: '6-7',
    title: '6th to 7th Grade',
    grades: ['6th', '7th'],
    description: 'Preparing for higher classes with advanced concepts and critical thinking.',
    subjects: ['Maths', 'English', 'Science', 'S.S.T', 'Hindi'],
    outcomes: [
      'Advanced problem-solving techniques',
      'Scientific thinking and analysis',
      'Essay writing and communication',
      'Time management and study skills'
    ],
    weeklyRhythm: '5-6 sessions per week, 75 minutes each',
    assessment: 'Bi-weekly tests and comprehensive evaluations'
  },
  {
    id: '8-9',
    title: '8th to 9th Grade',
    grades: ['8th', '9th'],
    description: 'Board exam preparation with intensive practice and strategic planning.',
    subjects: ['Maths', 'English', 'Science', 'S.S.T', 'Hindi'],
    outcomes: [
      'Board exam readiness',
      'Advanced analytical skills',
      'Exam strategy and time management',
      'Confidence and stress management'
    ],
    weeklyRhythm: '6 sessions per week, 90 minutes each',
    assessment: 'Weekly mock tests and detailed feedback'
  }
]

const subjectIcons = {
  'Maths': Calculator,
  'English': BookOpen,
  'Science': Microscope,
  'S.S.T': Globe,
  'Hindi': FileText,
} as const

export function Classes() {
  const [activeTab, setActiveTab] = useState('k-2')

  const activeCluster = gradeClusters.find(cluster => cluster.id === activeTab)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Classes & Curriculum
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive academic support from Kindergarten to 9th grade, 
              covering all major subjects for CBSE and GSEB boards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                CBSE & GSEB Boards
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Small Batch Sizes
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Individual Attention
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Tabs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink text-center mb-8">
              Choose Your Grade Level
            </h2>
            
            {/* Tab Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {gradeClusters.map((cluster) => (
                <button
                  key={cluster.id}
                  onClick={() => setActiveTab(cluster.id)}
                  className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                    activeTab === cluster.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="font-semibold mb-1">{cluster.title}</div>
                  <div className="text-sm opacity-90">
                    {cluster.grades.join(', ')}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            {activeCluster && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">
                    {activeCluster.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {activeCluster.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Subjects */}
                  <div>
                    <h4 className="text-xl font-semibold text-ink mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Subjects Covered
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {activeCluster.subjects.map((subject) => {
                        const Icon = subjectIcons[subject as keyof typeof subjectIcons] || BookOpen
                        return (
                          <div
                            key={subject}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                          >
                            <Icon className="w-5 h-5 text-primary" />
                            <span className="font-medium text-gray-700">{subject}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div>
                    <h4 className="text-xl font-semibold text-ink mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {activeCluster.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold text-gray-800">Weekly Schedule</div>
                      <div className="text-sm text-gray-600">{activeCluster.weeklyRhythm}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold text-gray-800">Assessment Style</div>
                      <div className="text-sm text-gray-600">{activeCluster.assessment}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Teaching Methodology Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Teaching Methodology"
            subtitle="A proven approach that ensures effective learning and student success"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Concept Building</h3>
              <p className="text-gray-600">
                We focus on building strong conceptual understanding rather than rote learning, 
                ensuring students truly grasp the fundamentals.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Practice & Application</h3>
              <p className="text-gray-600">
                Regular practice sessions and real-world applications help students 
                internalize concepts and develop problem-solving skills.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-4">Individual Support</h3>
              <p className="text-gray-600">
                Small batch sizes allow us to provide personalized attention and 
                address each student's unique learning needs and pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free demo class to experience our teaching methods and see how we can help your child excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Free Demo
            </a>
            <a
              href="/fees"
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Fee Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

