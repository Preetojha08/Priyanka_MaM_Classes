import { useState } from 'react'
import {
  Blocks,
  BookOpen,
  Calculator,
  Beaker,
  Globe2,
  Sparkles,
  Clock3,
  Users,
  Target,
  PenTool,
  Award,
  Layers,
  ScanLine
} from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Link } from 'react-router-dom'

const gradeTracks = [
  {
    id: 'kg-2',
    label: 'KG – Grade 2',
    tagline: 'Playful foundations that make numbers and letters feel friendly.',
    curriculum: ['Phonics-based reading journeys', 'Number sense & hands-on math stations', 'Story-led EVS discovery'],
    outcomes: [
      'Reads simple sentences with expression',
      'Adds & subtracts using concrete strategies',
      'Shares ideas confidently during circle time'
    ],
    schedule: '3 sessions · 45 mins · Mon/Wed/Fri (choose morning or evening batch)',
    batchSize: '5 learners per pod · caregiver feedback call every fortnight',
    icon: Blocks,
    cta: { label: 'Talk to admissions', href: '/contact' }
  },
  {
    id: '3-5',
    label: 'Grade 3 – 5',
    tagline: 'Bridge core subjects with projects that spark curiosity.',
    curriculum: ['Concept-first Maths labs', 'Creative writing studio', 'Inquiry-led Science expeditions'],
    outcomes: [
      'Solves word problems with multi-step reasoning',
      'Writes organised paragraphs with voice',
      'Builds models & presentations that explain “why”'
    ],
    schedule: '4 sessions · 60 mins · Tue/Thu/Sat + optional Sunday challenge hour',
    batchSize: '6 learners max · monthly showcase & feedback deck',
    icon: Calculator,
    cta: { label: 'Preview timetable', href: '/demo' }
  },
  {
    id: '6-8',
    label: 'Grade 6 – 8',
    tagline: 'Critical thinking, lab practice, and study systems for senior school.',
    curriculum: ['Advanced problem-solving clinics', 'Lab simulations & journaling', 'Social science debates & mapping'],
    outcomes: [
      'Chooses the right strategy for algebra & geometry',
      'Summarises experiments with evidence-based conclusions',
      'Presents perspectives with data-backed arguments'
    ],
    schedule: '5 sessions · 75 mins · Weekday evenings + Saturday review bloc',
    batchSize: '6 learners · personalised study map every 6 weeks',
    icon: Beaker,
    cta: { label: 'Chat with mentor', href: '/contact' }
  },
  {
    id: '9-10',
    label: 'Grade 9 – 10',
    tagline: 'Board readiness paired with mindset coaching for milestone years.',
    curriculum: ['Board pattern mastery labs', 'Exam writing drills & review clinics', 'Stress management & goal sprints'],
    outcomes: [
      'Attempts full-length papers with time strategy',
      'Explains reasoning in long-answer formats',
      'Tracks progress through weekly analytics dashboard'
    ],
    schedule: '6 sessions · 90 mins · Hybrid support with Sunday mock test',
    batchSize: '6 learners · strategy huddle with parents every month',
    icon: Target,
    cta: { label: 'Book strategy call', href: '/demo' }
  }
]

const teachingPillars = [
  {
    title: 'Plan · Personalise',
    description: 'Diagnostic tasks inform micro-groups and “goal-of-the-week” trackers for each learner.',
    icon: PenTool
  },
  {
    title: 'Practice · Iterate',
    description: 'Concept sprints, reflective journaling, and flash revisions keep retention high without cramming.',
    icon: ScanLine
  },
  {
    title: 'Present · Celebrate',
    description: 'Monthly showcases & parent circles highlight growth beyond marks, encouraging student voice.',
    icon: Sparkles
  }
]

const supportHighlights = [
  {
    title: 'Tightly Curated Resources',
    description: 'Focus booklets, mnemonic cards, and board-aligned practice sets reduce overwhelm.',
    icon: Layers
  },
  {
    title: 'Transparent Progress',
    description: 'Bi-weekly tracker mails share strengths, gaps, and action plans families can follow at home.',
    icon: Award
  },
  {
    title: 'Mentor Check-ins',
    description: 'Coaches schedule five-minute micro calls whenever a learner misses momentum.',
    icon: Users
  }
]

export function Classes() {
  const [activeTrack, setActiveTrack] = useState(gradeTracks[0])

  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-bl from-[#C62828]/15 to-transparent blur-3xl" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-24 text-center lg:px-10">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Classes & Curriculum
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            Structured batches for every stage, with flexibility parents appreciate.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#4B5563]">
            Spark & Shine takes learners from phonics to board prep through carefully sequenced pods, hands-on labs, and
            mentor-led reflections.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['CBSE & GSEB mapped', '50-minute doubt hotline', 'Analytics-led feedback'].map((item) => (
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

      {/* Grade Bands */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Choose the Track that Fits"
            subtitle="Each journey adapts to developmental stages while honouring board expectations."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gradeTracks.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrack(track)}
                className={`flex flex-col rounded-3xl border transition-all duration-300 ${
                  activeTrack.id === track.id
                    ? 'border-[#C62828] bg-[#FFF2EF] shadow-[0_18px_36px_rgba(198,40,40,0.12)]'
                    : 'border-[#F3F4F6] bg-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(31,41,55,0.08)]'
                }`}
                aria-pressed={activeTrack.id === track.id}
              >
                <span className="flex items-center gap-3 px-5 py-4">
                  <track.icon className="h-6 w-6 text-[#C62828]" />
                  <span className="text-sm font-semibold text-[#1F2937]">{track.label}</span>
                </span>
                <p className="px-5 pb-5 text-xs text-[#4B5563]">{track.tagline}</p>
              </button>
            ))}
          </div>

          <div className="grid gap-10 rounded-3xl border border-[#F3F4F6] bg-white/90 p-8 shadow-[0_24px_50px_rgba(31,41,55,0.08)] lg:grid-cols-[3fr_2fr]">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-display font-semibold text-[#1F2937]">{activeTrack.label}</h2>
                <p className="text-sm leading-relaxed text-[#4B5563]">{activeTrack.tagline}</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-[#FFF9F2] p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C62828]">
                    <BookOpen className="h-4 w-4" />
                    Curriculum Snapshot
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
                    {activeTrack.curriculum.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C62828]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-[#F5F6FB] p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#1F2937]">
                    <Sparkles className="h-4 w-4" />
                    Learning Outcomes
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-[#4B5563]">
                    {activeTrack.outcomes.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1F2937]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="grid gap-4 rounded-2xl border border-dashed border-[#C62828]/30 bg-white/70 p-5 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 text-[#F59E0B]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">Weekly Flow</p>
                    <p className="text-xs text-[#4B5563]">{activeTrack.schedule}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-[#F59E0B]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">Batch DNA</p>
                    <p className="text-xs text-[#4B5563]">{activeTrack.batchSize}</p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="flex h-full flex-col justify-between rounded-3xl bg-[#FFF2EF] p-6">
              <div>
                <h3 className="text-lg font-semibold text-[#C62828]">Support Extras</h3>
                <p className="mt-2 text-sm text-[#B45309]">
                  Parents receive weekend review prompts, while learners log wins in our “Shine Journal”.
                </p>
              </div>
              <Link
                to={activeTrack.cta.href}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C62828] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF2EF]"
              >
                {activeTrack.cta.label}
              </Link>
            </aside>
          </div>
        </div>
      </Section>

      {/* Teaching Pillars */}
      <Section background="paper">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="How We Teach"
            subtitle="A three-step rhythm keeps motivation high and goals visible."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {teachingPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-white/70 bg-white p-6 text-center shadow-[0_18px_36px_rgba(31,41,55,0.06)]"
              >
                <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-[#1F2937]">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Support Highlights */}
      <Section background="white">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <SectionHeading
              title="Beyond the Timetable"
              subtitle="Families choose Spark & Shine because support continues outside class hours."
              centered={false}
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {supportHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#F3F4F6] bg-white/80 p-6 shadow-[0_16px_32px_rgba(31,41,55,0.06)]"
                >
                  <item.icon className="h-6 w-6 text-[#C62828]" />
                  <h3 className="mt-4 text-base font-semibold text-[#1F2937]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] p-8 text-white shadow-[0_24px_48px_rgba(198,40,40,0.22)]">
            <div>
              <h3 className="text-2xl font-display font-semibold">Ready to explore a batch?</h3>
              <p className="mt-3 text-sm text-white/80">
                Speak with our academic advisor to receive a personalised class roadmap and trial session plan.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Open slots released every Monday
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                In-centre and hybrid options available
              </span>
            </div>
            <Link
              to="/demo"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDF2F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
