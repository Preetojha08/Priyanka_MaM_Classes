import { useState } from 'react'
import {
  Wallet,
  Crown,
  CalendarClock,
  Gift,
  Check,
  PiggyBank,
  ShieldCheck,
  CreditCard,
  MessageCircle
} from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import { Link } from 'react-router-dom'
import config from '../site.config'

const pricingTiers = [
  {
    name: 'Monthly Focus',
    headline: 'Ideal for subject-specific boosters and flexible schedules.',
    price: '₹2,200',
    unit: 'per subject · billed monthly',
    highlights: [
      '2 concept labs + 1 revision clinic every week',
      'Complimentary doubt hotline (2 calls/month)',
      'Upgrade any time with zero switching fee'
    ],
    badge: 'Most Flexible',
    icon: CalendarClock
  },
  {
    name: 'Quarterly Momentum',
    headline: 'Perfect for multi-subject continuity and measurable progress.',
    price: '₹18,900',
    unit: 'for any 3 subjects · billed quarterly',
    highlights: [
      'Learning roadmap & analytics dashboard access',
      'Mock test library + monthly parent strategy meet',
      'Saves 8% versus paying monthly'
    ],
    badge: 'Parent Favourite',
    icon: Wallet,
    featured: true
  },
  {
    name: 'Annual Confidence',
    headline: 'Board-year support with holistic mentoring and exam labs.',
    price: '₹68,000',
    unit: 'all core subjects · billed annually',
    highlights: [
      'Priority mentoring slots + weekend masterclasses',
      'Unlimited doubt-clearing pods and exam writing labs',
      'Saves 15% + sibling add-on at 20% discount'
    ],
    badge: 'Best Value',
    icon: Crown
  },
  {
    name: 'Trial Starter',
    headline: 'Experience our classroom culture before committing.',
    price: '₹1,200',
    unit: 'two 60-minute sessions',
    highlights: [
      'Diagnostic review + personalised action plan',
      'Parent debrief call with learning specialist',
      'Fees adjusted if you enrol within 10 days'
    ],
    icon: Gift
  }
]

const assurancePoints = [
  {
    title: 'Transparent & Tax-inclusive',
    description: 'No admission charges or material fees — everything is bundled within the plan you choose.',
    icon: ShieldCheck
  },
  {
    title: 'Pause Without Penalty',
    description: 'Travelling? Exams near? Pause classes for up to two weeks each term without losing your slot.',
    icon: PiggyBank
  },
  {
    title: 'Sibling Advantage',
    description: 'Second enrolment gets 12% off, and subsequent siblings enjoy 20% off prevailing plans.',
    icon: Gift
  },
  {
    title: 'Simple Payment Windows',
    description: 'UPI · net banking · standing instructions supported with receipts issued instantly.',
    icon: CreditCard
  }
]

const faqs = [
  {
    question: 'Can we mix CBSE and GSEB subjects within the same plan?',
    answer:
      'Absolutely. Many learners study a mix of board patterns. Our mentors adapt the timetable and resources so the flow stays consistent across subjects.'
  },
  {
    question: 'What happens if my child misses a class?',
    answer:
      'Drop us a quick WhatsApp note. We log an asynchronous recap and schedule a micro make-up session so your child rejoins the batch without anxiety.'
  },
  {
    question: 'Do you offer instalments for the annual plan?',
    answer:
      'Yes. Annual Confidence can be split into four equal instalments across the year with no additional cost or paperwork.'
  },
  {
    question: 'Is the trial amount adjusted if we continue?',
    answer:
      'The full trial fee is credited towards whichever plan you select within ten calendar days of the trial completion.'
  }
]

export function Fees() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.12),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-24 text-center lg:px-10">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-5 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Fee Structure
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            Plans designed for momentum — not lock-in.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#4B5563]">
            Choose the cadence that matches your family rhythm. Every plan includes flexible rescheduling, progress
            reports, and parent-expert connects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['No registration charges', 'Sibling advantage available', 'Free demo before enrolment'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#C62828] shadow-[0_6px_18px_rgba(198,40,40,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Choose a plan that fits your family"
            subtitle="Every tier includes weekly doubt resolution, mentor updates, and personalised resources."
          />
          <div className="grid gap-8 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex h-full flex-col rounded-3xl border ${
                  tier.featured
                    ? 'border-[#C62828] bg-[#FFF2EF] shadow-[0_26px_54px_rgba(198,40,40,0.18)]'
                    : 'border-[#F3F4F6] bg-white shadow-[0_20px_44px_rgba(31,41,55,0.08)]'
                } p-7`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#C62828] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_12px_28px_rgba(198,40,40,0.22)]">
                    {tier.badge}
                  </span>
                )}
                <div className="flex items-center gap-3 text-[#C62828]">
                  <tier.icon className="h-6 w-6" />
                  <h3 className="text-lg font-semibold text-[#1F2937]">{tier.name}</h3>
                </div>
                <p className="mt-3 text-sm text-[#4B5563]">{tier.headline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-display font-semibold text-[#C62828]">{tier.price}</span>
                  <span className="text-xs text-[#4B5563]">{tier.unit}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                  {tier.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <Check className="mt-1 h-4 w-4 flex-shrink-0 text-[#F59E0B]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/demo"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C62828] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Book free demo to confirm seat
                </Link>
                <p className="mt-3 text-xs text-[#6B7280]">Switch or upgrade any time — difference billed proportionately.</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Assurance */}
      <Section background="paper">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              title="Pricing with absolute clarity"
              subtitle="We publish every clause upfront so your family can focus on learning, not fine print."
              centered={false}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {assurancePoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_18px_40px_rgba(31,41,55,0.07)]"
                >
                  <item.icon className="h-6 w-6 text-[#C62828]" />
                  <h3 className="mt-4 text-base font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] p-8 text-white shadow-[0_28px_56px_rgba(198,40,40,0.22)]">
            <div>
              <h3 className="text-2xl font-display font-semibold">Need help choosing?</h3>
              <p className="mt-3 text-sm text-white/80">
                Share your child’s current grade, subjects, and goals. We’ll send a custom fee proposal within 24 hours.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <span>• Instalment reminders reach you 5 days in advance.</span>
              <span>• Auto-renewal is optional — we check in before every billing cycle.</span>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDECEC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Talk to our advisor
            </Link>
          </aside>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Fee FAQs"
            subtitle="Clear answers to help you decide faster."
          />
          <div className="mx-auto w-full max-w-3xl">
            <ul className="divide-y divide-[#E5E7EB] rounded-3xl border border-[#F3F4F6] bg-white shadow-[0_18px_40px_rgba(31,41,55,0.07)]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index
                return (
                  <li key={faq.question}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${index}`}
                    >
                      <span className="text-sm font-semibold text-[#1F2937]">{faq.question}</span>
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#C62828]/40 text-xs text-[#C62828] transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-${index}`}
                      role="region"
                      aria-hidden={!isOpen}
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-[#4B5563]">
                        {faq.answer}
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA + Form */}
      <Section background="paper">
        <div className="flex flex-col gap-12">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-8 text-center shadow-[0_24px_48px_rgba(31,41,55,0.08)]">
            <h2 className="text-2xl font-display font-semibold text-[#1F2937] sm:text-3xl">
              Ready for a personalised fee quote?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#4B5563]">
              We respond within a business day with the schedule, recommended plan, and introductory offers available for
              your child’s grade.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={config.social.whatsapp}
                className="inline-flex items-center justify-center rounded-full bg-[#C62828] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </a>
              <span className="text-xs text-[#6B7280]">or fill the form below</span>
            </div>
          </div>
          <InquiryForm type="fee-quote" />
        </div>
      </Section>
    </div>
  )
}
