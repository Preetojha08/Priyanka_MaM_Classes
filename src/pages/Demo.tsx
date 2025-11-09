import { motion } from 'framer-motion'
import { CalendarCheck, Users, ClipboardCheck, Smile, Star, MessageCircle, Shield, Rocket } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import config from '../site.config'

const steps = [
  {
    title: 'Reserve',
    description: 'Pick a slot that suits your family. Our coordinator confirms within a business day.',
    icon: CalendarCheck
  },
  {
    title: 'Experience',
    description: 'Your child joins a 30-minute micro class tailored to their current grade.',
    icon: Users
  },
  {
    title: 'Review',
    description: 'We share a personalised feedback note and next steps you can act on immediately.',
    icon: ClipboardCheck
  }
]

const demoChecklist = [
  'Concept warm-up to understand comfort levels',
  'Interactive teaching piece (not a lecture!)',
  'Quick retention game or reflective question',
  'Parent debrief with clear action pointers',
  'Access to starter resource pack valid for 7 days'
]

const trustBadges = [
  {
    label: 'Zero Pressure',
    description: 'Demo is obligation-free with no follow-up spam.',
    icon: Shield
  },
  {
    label: 'Friendly Mentors',
    description: 'Every facilitator is trained in child-first communication.',
    icon: Smile
  },
  {
    label: 'Ready-to-Use Tips',
    description: 'Parents leave with practice ideas regardless of enrolment.',
    icon: Rocket
  }
]

const parentVoices = [
  {
    name: 'Nisha Vora',
    quote:
      'The mentor quickly spotted where my son hesitates and gave us two strategies we could try that very evening. The session felt personal and warm.',
    highlight: 'Grade 5 · Maths demo'
  },
  {
    name: 'Parag Chauhan',
    quote:
      'I loved that the demo mirrored an actual class with peers. The post-session note summarised strengths and focus areas beautifully.',
    highlight: 'Grade 8 · Science demo'
  }
]

export function Demo() {
  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.2),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 py-24 text-center lg:px-10">
          <span className="inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Free Demo Class
          </span>
          <h1 className="max-w-4xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            One session to understand our vibe, structure, and mentorship style.
          </h1>
          <p className="max-w-3xl text-lg text-[#4B5563]">
            Spark & Shine demos are intentionally small-group so children can experience the real classroom dynamic. The
            call ends with practical takeaways for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Tailored to your child', '30 minutes of interactive learning', 'Feedback loop within 12 hours'].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#C62828] shadow-[0_6px_18px_rgba(198,40,40,0.12)]"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Steps */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="How the demo unfolds"
            subtitle="Three simple steps that respect your family’s time."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-3xl border border-[#F3F4F6] bg-white p-6 text-left shadow-[0_20px_44px_rgba(31,41,55,0.08)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-[#1F2937]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Checklist */}
      <Section background="paper">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              title="During the demo you’ll see"
              subtitle="A condensed version of the Spark & Shine classroom, crafted for first impressions."
              centered={false}
            />
            <ul className="space-y-4 rounded-3xl border border-white/70 bg-white/90 p-6 text-sm text-[#4B5563] shadow-[0_20px_44px_rgba(31,41,55,0.07)]">
              {demoChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Star className="mt-1 h-4 w-4 flex-shrink-0 text-[#F59E0B]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-dashed border-[#C62828]/30 bg-[#FFF2EF] p-6 text-sm text-[#B71C1C]">
              Parents also receive a learning snapshot PDF summarising focus areas, suggested resources, and next steps
              after the demo.
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] p-8 text-white shadow-[0_26px_54px_rgba(198,40,40,0.22)]">
            <h3 className="text-2xl font-display font-semibold">Helpful to keep in mind</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li>• Encourage your child to join from a quiet space with a notebook.</li>
              <li>• Parents can stay on mute to observe or jump in during the last five minutes.</li>
              <li>• We’ll resend a recording if you opt for the digital demo format.</li>
            </ul>
            <a
              href={config.social.whatsapp}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDECEC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <MessageCircle className="h-4 w-4" />
              Ask for a reminder
            </a>
          </div>
        </div>
      </Section>

      {/* Trust badges */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Why families love our demos"
            subtitle="A preview that feels caring, actionable, and pressure-free."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-3xl border border-[#F3F4F6] bg-white/90 p-6 text-center shadow-[0_18px_40px_rgba(31,41,55,0.07)]"
              >
                <badge.icon className="mx-auto h-7 w-7 text-[#C62828]" />
                <h3 className="mt-4 text-base font-semibold text-[#1F2937]">{badge.label}</h3>
                <p className="mt-2 text-sm text-[#4B5563]">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Parent voices */}
      <Section background="paper">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title="Parents after the demo"
            subtitle="Two recent notes that capture the experience."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {parentVoices.map((voice) => (
              <blockquote
                key={voice.name}
                className="h-full rounded-3xl border border-white/70 bg-white p-6 shadow-[0_20px_44px_rgba(31,41,55,0.08)]"
              >
                <p className="text-sm leading-relaxed text-[#4B5563]">&ldquo;{voice.quote}&rdquo;</p>
                <footer className="mt-4">
                  <span className="block text-sm font-semibold text-[#1F2937]">{voice.name}</span>
                  <span className="text-xs text-[#6B7280]">{voice.highlight}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section background="white">
        <div className="flex flex-col gap-10" id="demo-form">
          <SectionHeading
            title="Secure your demo slot"
            subtitle="Let us know your preferred timing and academic goals. We’ll orchestrate the rest."
          />
          <InquiryForm type="demo" />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] py-16 text-white">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-6 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">Next steps</p>
          <h2 className="max-w-2xl text-3xl font-display font-semibold">
            Want a quick consult before booking?
          </h2>
          <p className="max-w-2xl text-sm text-white/85">
            Call us between 3:30 PM – 8:30 PM IST, Monday through Saturday. We can match you with the right mentor on the
            same call.
          </p>
          <a
            href={config.social.phone}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDECEC]"
          >
            Call the team
          </a>
        </div>
      </section>
    </div>
  )
}
