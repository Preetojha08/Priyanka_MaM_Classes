import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { PlanCard, PlanCardData } from '../components/PlanCard'
import { FaqAccordion, FaqItem } from '../components/FaqAccordion'
import { InquiryForm } from '../components/InquiryForm'
import { ShieldCheck, PiggyBank, Gift, CreditCard, MessageCircle, Phone } from 'lucide-react'
import config from '../site.config'

const featureChips = ['No registration charges', 'Sibling advantage available', 'Free demo before enrollment']

const planTiers: PlanCardData[] = [
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
    featured: false,
    ctaHref: '/plans#trial',
    ctaLabel: 'Book free demo to confirm seat'
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
    featured: true,
    ctaHref: '/plans#trial',
    ctaLabel: 'Book free demo to confirm seat'
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
    featured: false,
    ctaHref: '/plans#trial',
    ctaLabel: 'Book free demo to confirm seat'
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
    featured: false,
    ctaHref: '/plans#trial',
    ctaLabel: 'Book free demo'
  }
]

const clarityCards = [
  {
    title: 'Transparent & tax-inclusive',
    description: 'No admission charges or hidden stationery fees — every rupee is listed upfront.',
    icon: ShieldCheck
  },
  {
    title: 'Pause without penalty',
    description: 'Travelling or exams around the corner? Pause for up to two weeks each term without losing your slot.',
    icon: PiggyBank
  },
  {
    title: 'Sibling advantage',
    description: 'Second enrolment enjoys 12% off, and subsequent siblings receive 20% off prevailing plans.',
    icon: Gift
  },
  {
    title: 'Simple payment windows',
    description: 'UPI, net banking, and standing instructions supported with instant receipts.',
    icon: CreditCard
  }
]

const faqs: FaqItem[] = [
  {
    question: 'Can we mix CBSE and GSEB subjects within the same plan?',
    answer:
      'Absolutely. Many learners study a mix of board patterns. Our mentors adapt the timetable and resources so the flow stays consistent across subjects.'
  },
  {
    question: 'What happens if my child misses a class?',
    answer:
      'Drop us a quick WhatsApp note. We log a recap and schedule a micro make-up session so your child rejoins the batch without anxiety.'
  },
  {
    question: 'Do you offer instalments for the annual plan?',
    answer:
      'Yes. Annual Confidence can be split into four equal instalments across the year with no additional cost or paperwork.'
  },
  {
    question: 'Is the trial amount adjusted if we continue?',
    answer: 'The full trial fee is credited towards whichever plan you select within ten calendar days of the trial completion.'
  }
]

export function Plans() {
  return (
    <div className="bg-bg text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.12),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Plans & Demo
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-slate-900 sm:text-5xl">
            Plans designed for momentum — not lock-in.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Flexible billing, weekly doubt resolution, and the freedom to preview every batch before you commit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {featureChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] shadow-[0_10px_25px_rgba(198,40,40,0.12)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Plans + help panel */}
      <Section background="white">
        <div className="section-spacing">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(320px,1fr)]">
            <div className="grid gap-6 md:grid-cols-2">
              {planTiers.map((tier) => (
                <PlanCard key={tier.name} plan={tier} />
              ))}
            </div>
            <InquiryForm
              type="fee-quote"
              title="Need help choosing?"
              description="Share current grade, subjects, and scheduling notes — we’ll recommend the best-fit plan."
              className="w-full h-full"
              headingAlign="left"
            />
          </div>
        </div>
      </Section>

      {/* Clarity block */}
      <Section background="paper">
        <div className="section-spacing">
          <SectionHeading
            title="Pricing with absolute clarity"
            subtitle="We publish every clause upfront so your family can focus on learning, not fine print."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {clarityCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/80 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#C62828]">
                  <card.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="section-spacing">
          <SectionHeading
            title="Plans, payments, and demos — answered"
            subtitle="If you still need clarity, drop us a message and we’ll respond within one business day."
          />
          <div className="mt-12">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </Section>

      {/* Trial */}
      <div id="trial">
        <Section background="paper" className="scroll-mt-24">
          <div className="section-spacing">
            <div className="rounded-3xl border border-white/80 bg-white/95 p-8 shadow-[0_24px_50px_rgba(15,23,42,0.1)]">
            <div className="flex flex-col gap-6 text-center">
              <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/30 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#C62828]">
                Demo / Trial
              </span>
              <h2 className="text-3xl font-display font-semibold text-slate-900">
                Experience a classroom before committing.
              </h2>
              <p className="text-sm text-slate-600">
                A 30-minute small-group demo mirrors the real batch flow. We end with a personalised action plan you can
                implement immediately.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={config.social.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#trial-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C62828] px-6 py-3 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C62828] hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Request trial slot
                </a>
              </div>
            </div>
              <div id="trial-form" className="mt-10">
                <InquiryForm
                  type="demo"
                  title="Request a trial slot"
                  description="Share the grade, priority subjects, and preferred timing. Our coordinator confirms within one business day."
                />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}
