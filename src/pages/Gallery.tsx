import { SectionHeading } from '../components/SectionHeading'
import { Camera, Users, BookOpen, Award, MapPin, Clock } from 'lucide-react'
import config from '../site.config'

const galleryCategories = [
  {
    id: 'classroom',
    title: 'Classroom Environment',
    description: 'Our well-equipped learning spaces designed for effective teaching',
    icon: BookOpen
  },
  {
    id: 'students',
    title: 'Students at Work',
    description: 'Students engaged in learning activities and group work',
    icon: Users
  },
  {
    id: 'achievements',
    title: 'Achievements & Awards',
    description: 'Celebrating student success and academic milestones',
    icon: Award
  },
  {
    id: 'activities',
    title: 'Learning Activities',
    description: 'Interactive learning sessions and educational activities',
    icon: Camera
  }
]

const placeholderImages = [
  {
    id: 1,
    category: 'classroom',
    title: 'Maths Classroom',
    description: 'Our dedicated maths classroom with interactive learning tools',
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    category: 'classroom',
    title: 'Science Lab Setup',
    description: 'Well-equipped science learning area for hands-on experiments',
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    category: 'students',
    title: 'Group Study Session',
    description: 'Students working together on problem-solving activities',
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    category: 'students',
    title: 'Individual Attention',
    description: 'One-on-one guidance and support for students',
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    category: 'achievements',
    title: 'Academic Excellence',
    description: 'Students celebrating their improved grades and progress',
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    category: 'achievements',
    title: 'Board Exam Success',
    description: 'Our students who excelled in CBSE and GSEB board exams',
    image: '/api/placeholder/400/300'
  },
  {
    id: 7,
    category: 'activities',
    title: 'Interactive Learning',
    description: 'Students engaged in hands-on learning activities',
    image: '/api/placeholder/400/300'
  },
  {
    id: 8,
    category: 'activities',
    title: 'Doubt-Solving Session',
    description: 'Regular doubt-clearing sessions for better understanding',
    image: '/api/placeholder/400/300'
  }
]

export function Gallery() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Our Learning Environment
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Take a glimpse into our classrooms, see our students in action, 
              and discover the supportive learning environment we've created.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Small Batch Sizes
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Interactive Learning
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Individual Attention
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Gallery Categories"
            subtitle="Explore different aspects of our learning environment and student life"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {galleryCategories.map((category, index) => (
              <div key={category.id} className="text-center group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {placeholderImages.map((image) => (
              <div key={image.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-400" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <Camera className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-ink mb-1">{image.title}</h4>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Environment Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Learning Environment Highlights"
            subtitle="Features that make our classrooms special and conducive to learning"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">Small Batch Sizes</h3>
              <p className="text-gray-600 text-sm">
                Maximum 6 students per batch ensures individual attention and personalized learning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">Well-Equipped Classrooms</h3>
              <p className="text-gray-600 text-sm">
                Modern learning tools and resources to support effective teaching and learning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">Motivational Environment</h3>
              <p className="text-gray-600 text-sm">
                Positive and encouraging atmosphere that motivates students to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink text-center mb-8">
              Our Location & Facilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-ink">Location</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {config.address}
                </p>
                <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-ink">Class Timings</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {config.hours}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">3:30 PM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">3:30 PM - 8:30 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consent Notice */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-ink mb-4">
                Photo Consent Notice
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All photos in our gallery are taken with proper consent from parents and students. 
                We respect privacy and only share images that have been approved for promotional purposes. 
                If you would like to request removal of any image, please contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Join Our Learning Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free demo class to experience our learning environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Free Demo
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

