import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import { CheckCircle, Users, Clock, Star, MessageCircle } from 'lucide-react'
import config from '../site.config'

const feePlans = [
  {
    name: "Per Subject",
    description: "Pay only for the subjects your child needs help with",
    features: [
      "Individual subject focus",
      "Flexible scheduling",
      "Personalized attention",
      "Regular progress tracking"
    ],
    price: "Starting from ₹800/month",
    popular: false
  },
  {
    name: "Combo Package",
    description: "Best value for multiple subjects",
    features: [
      "2-3 subjects combined",
      "Integrated learning approach",
      "Better time management",
      "Discounted rates"
    ],
    price: "Starting from ₹1,500/month",
    popular: true
  },
  {
    name: "Full Package",
    description: "Complete academic support for all subjects",
    features: [
      "All 5 subjects included",
      "Comprehensive coverage",
      "Exam preparation",
      "Maximum savings"
    ],
    price: "Starting from ₹2,500/month",
    popular: false
  },
  {
    name: "Sibling Discount",
    description: "Special rates for families with multiple children",
    features: [
      "Up to 20% discount",
      "Flexible payment options",
      "Family-friendly scheduling",
      "Shared resources"
    ],
    price: "Up to 20% off",
    popular: false
  }
]

const benefits = [
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Maximum 6 students per batch ensures individual attention"
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Choose timings that work best for your family schedule"
  },
  {
    icon: Star,
    title: "Quality Teaching",
    description: "Experienced teachers with proven track record"
  },
  {
    icon: CheckCircle,
    title: "No Hidden Charges",
    description: "Transparent pricing with no surprise fees"
  }
]

export function Fees() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-paper via-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Flexible Fee Plans
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {config.feesNote} We believe quality education should be accessible to all families.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Flexible Payment Options
              </span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                Sibling Discounts Available
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                No Hidden Charges
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Plans Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Choose Your Plan"
            subtitle="Flexible options designed to meet your family's needs and budget"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {feePlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-bold text-ink mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {plan.price}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-outline text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Our Fee Structure"
            subtitle="Transparent, flexible, and designed with families in mind"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ink text-center mb-8">
              Flexible Payment Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Monthly Payment</h3>
                <p className="text-gray-600 text-sm">
                  Pay monthly for maximum flexibility and easy budgeting
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Quarterly Payment</h3>
                <p className="text-gray-600 text-sm">
                  Pay every 3 months and save 5% on your total fees
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-ink mb-2">Annual Payment</h3>
                <p className="text-gray-600 text-sm">
                  Pay for the full year and save 10% on your total fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sibling Discount Section */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-ink mb-6">
              Special Family Discounts
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We understand that education is a family investment. That's why we offer special discounts for families with multiple children.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">10%</div>
                <div className="text-gray-600">2nd Child</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">15%</div>
                <div className="text-gray-600">3rd Child</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <div className="text-gray-600">4th+ Child</div>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm">
              * Discounts apply to the lower-priced packages. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ink mb-6">
              Get Your Personalized Fee Quote
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tell us about your child's needs and we'll create a flexible fee plan that works for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={config.social.whatsapp}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Discuss on WhatsApp</span>
              </a>
              <a
                href={config.social.phone}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <span>Call for Quote</span>
              </a>
            </div>
          </div>
          
          <InquiryForm type="fee-quote" />
        </div>
      </section>
    </div>
  )
}

