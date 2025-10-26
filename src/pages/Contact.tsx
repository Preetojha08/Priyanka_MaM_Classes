import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import config from '../site.config'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: config.phone,
    link: config.social.phone,
    description: 'Call us for immediate assistance'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: config.whatsapp,
    link: config.social.whatsapp,
    description: 'Quick response via WhatsApp'
  },
  {
    icon: Mail,
    title: 'Email',
    value: config.email,
    link: config.social.email,
    description: 'Send us an email anytime'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: config.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(config.address)}`,
    description: 'Visit us at our location'
  },
  {
    icon: Clock,
    title: 'Hours',
    value: config.hours,
    link: null,
    description: 'Our class timings'
  }
]

const quickActions = [
  {
    title: 'Book Demo Class',
    description: 'Experience our teaching methods',
    link: '/demo',
    icon: Send,
    color: 'primary'
  },
  {
    title: 'View Fee Plans',
    description: 'Flexible pricing options',
    link: '/fees',
    icon: MessageCircle,
    color: 'accent'
  },
  {
    title: 'Browse Classes',
    description: 'See our curriculum',
    link: '/classes',
    icon: Phone,
    color: 'primary'
  }
]

export function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Have questions about our classes? Want to know more about our teaching methods? 
              We're here to help and would love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Quick Response
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Free Consultation
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Flexible Timings
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Contact Information"
            subtitle="Multiple ways to reach us - choose what works best for you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">
                    {info.value}
                  </p>
                )}
                <p className="text-gray-600 text-sm mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Quick Actions"
            subtitle="Common requests and how to get started"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {quickActions.map((action, index) => (
              <a
                key={action.title}
                href={action.link}
                className={`group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  action.color === 'primary' ? 'hover:border-primary' : 'hover:border-accent'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  action.color === 'primary' 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <action.icon className={`w-6 h-6 ${
                    action.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2 text-center">
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {action.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink text-center mb-8">
              Find Us
            </h2>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {config.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <InquiryForm type="contact" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our classes and admission process"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">
                  What is the maximum number of students per batch?
                </h3>
                <p className="text-gray-600">
                  We maintain a maximum of 6 students per batch to ensure individual attention and personalized learning for each student.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">
                  Do you offer classes for both CBSE and GSEB boards?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive support for both CBSE and GSEB boards, covering all major subjects from Kindergarten to 9th grade.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">
                  How can I book a free demo class?
                </h3>
                <p className="text-gray-600">
                  You can book a free demo class by filling out the form above, calling us at {config.phone}, or messaging us on WhatsApp at {config.whatsapp}.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">
                  Are the fees flexible?
                </h3>
                <p className="text-gray-600">
                  Yes, our fees are flexible and depend on the subjects chosen and schedule preferences. We also offer sibling discounts and various payment options.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-ink mb-2">
                  What are your class timings?
                </h3>
                <p className="text-gray-600">
                  Our classes run from Monday to Saturday, 3:30 PM to 8:30 PM IST. We can work with you to find the most convenient timing for your child.
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait - book your free demo class today and see how we can help your child excel academically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-white text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Book Free Demo
            </a>
            <a
              href={config.social.whatsapp}
              className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

