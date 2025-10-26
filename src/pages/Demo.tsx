import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import { Clock, Users, Target, CheckCircle, Star, BookOpen } from 'lucide-react'
import config from '../site.config'

const demoFeatures = [
  {
    icon: Clock,
    title: "30 Minutes",
    description: "Free demo class to experience our teaching methods"
  },
  {
    icon: Users,
    title: "Meet the Teacher",
    description: "Get to know our experienced and caring teachers"
  },
  {
    icon: Target,
    title: "Level Assessment",
    description: "We'll assess your child's current academic level"
  },
  {
    icon: CheckCircle,
    title: "No Obligation",
    description: "No pressure to enroll - just a friendly introduction"
  }
]

const demoProcess = [
  {
    step: "1",
    title: "Book Your Slot",
    description: "Choose a convenient time for your free demo class"
  },
  {
    step: "2",
    title: "Meet & Greet",
    description: "Meet our teacher and discuss your child's needs"
  },
  {
    step: "3",
    title: "Experience Learning",
    description: "Your child participates in a 30-minute sample class"
  },
  {
    step: "4",
    title: "Get Feedback",
    description: "Receive detailed feedback and recommendations"
  }
]

const testimonials = [
  {
    name: "Priya Sharma",
    text: "The demo class was amazing! My daughter was so engaged and excited. The teacher was patient and made learning fun.",
    rating: 5
  },
  {
    name: "Rajesh Patel",
    text: "We could see the difference immediately. The small batch size and individual attention really made a difference.",
    rating: 5
  },
  {
    name: "Sunita Mehta",
    text: "The teacher took time to understand my son's learning style. The demo convinced us to enroll right away.",
    rating: 5
  }
]

export function Demo() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Book Your Free Demo Class
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {config.demoNote} Experience our teaching methods and see how we can help your child excel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Free 30-Minute Demo
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Meet Our Teachers
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                No Obligation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="What to Expect in Your Demo Class"
            subtitle="A comprehensive introduction to our teaching approach and learning environment"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {demoFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="How It Works"
            subtitle="Simple steps to book and attend your free demo class"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {demoProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Demo is Important Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink text-center mb-8">
              Why a Demo Class is Important
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">See Our Teaching Style</h4>
                    <p className="text-gray-600">Experience firsthand how we make learning engaging and effective.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Meet Our Teachers</h4>
                    <p className="text-gray-600">Get to know our experienced and caring teaching staff.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Assess Your Child's Needs</h4>
                    <p className="text-gray-600">We'll evaluate your child's current level and learning style.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="w-4 h-4 text-ink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Understand Our Curriculum</h4>
                    <p className="text-gray-600">Learn about our structured approach and teaching methodology.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-ink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Build Confidence</h4>
                    <p className="text-gray-600">Help your child feel comfortable in our learning environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-ink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Make Informed Decision</h4>
                    <p className="text-gray-600">Choose the best educational path for your child with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Parents Say About Our Demo Classes"
            subtitle="Hear from families who experienced our teaching approach firsthand"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.text}"
                </blockquote>
                <div className="font-semibold text-ink">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <InquiryForm type="demo" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your free demo class today and see how we can help your child achieve academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo-form"
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Demo Now
            </a>
            <a
              href={config.social.phone}
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call for Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

