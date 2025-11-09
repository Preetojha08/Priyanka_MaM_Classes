import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TrackCard, TrackCardData } from '../components/TrackCard'
import { StatStrip } from '../components/StatStrip'
import { Link } from 'react-router-dom'
import {
  PenTool,
  Presentation,
  Repeat,
  Sparkles,
  Layers,
  BarChart2,
  HeartHandshake,
  Users,
  CheckCircle2
} from 'lucide-react'

const featureChips = ['CBSE & GSEB mapped', 'Doubt hotline', 'Analytics-led feedback']

const tracks: TrackCardData[] = [
  {
    id: 'kg-2',
    title: 'Playful Founders',
    range: 'KG - Grade 2',
    description: 'Story-led numeracy, phonics, and discovery blocks that keep curiosity high.',
    curriculum: [
      'Phonics-based reading journeys',
      'Number sense stations & math manipulatives',
      'Circle-time EVS stories'
    ],
    outcomes: [
      'Reads aloud with growing confidence',
      'Understands number stories without rote',
      'Shares ideas comfortably in class'
    ],
    weeklyFlow: '3 sessions/week · 45 mins each + Friday mini review',
    badge: 'Foundational',
    ctaHref: '/contact',
    ctaLabel: 'Talk to admissions'
  },
  {
    id: '3-5',
    title: 'Curiosity Builders',
    range: 'Grade 3 - 5',
    description: 'Concept-first Math, expressive writing, and inquiry science projects.',
    curriculum: [
      'Math labs with visual strategies',
      'Creative writing studio prompts',
      'Science expeditions & maker tasks'
    ],
    outcomes: [
      'Solves multi-step word problems',
      'Writes organised paragraphs with voice',
      'Presents findings with clarity'
    ],
    weeklyFlow: '4 sessions/week · 60 mins + optional Sunday challenge hour',
    badge: 'Parent Favourite',
    ctaHref: '/contact',
    ctaLabel: 'Talk to admissions'
  },
  {
    id: '6-8',
    title: 'Senior Prep Labs',
    range: 'Grade 6 - 8',
    description: 'Critical thinking drills, lab journaling, and study systems for senior school.',
    curriculum: [
      'Advanced problem-solving clinics',
      'Lab simulations & reflective logs',
      'Debates + map work for S.S.T'
    ],
    outcomes: [
      'Chooses the right strategy for algebra',
      'Summarises experiments with evidence',
      'Builds arguments backed by data'
    ],
    weeklyFlow: '5 sessions/week · 75 mins + Saturday review bloc',
    ctaHref: '/contact',
    ctaLabel: 'Talk to admissions'
  },
  {
    id: '9-10',
    title: 'Board Year Studio',
    range: 'Grade 9 - 10',
    description: 'Board-pattern mastery, exam labs, and mindset coaching for milestone years.',
    curriculum: [
      'Board paper decoding & mock drills',
      'Exam writing labs with timer support',
      'Stress management + goal sprints'
    ],
    outcomes: [
      'Attempts full-length papers with strategy',
      'Explains reasoning in long answers',
      'Tracks progress via weekly analytics'
    ],
    weeklyFlow: '6 sessions/week · 90 mins + Sunday mock test',
    badge: 'Most Structured',
    ctaHref: '/contact',
    ctaLabel: 'Talk to admissions'
  }
]

const learningRhythm = [
  {
    title: 'Plan',
    description: 'Diagnostics map strengths and attention rhythms, shaping micro-groups for each learner.',
    icon: PenTool
  },
  {
    title: 'Practice',
    description: 'Concept sprints, doubt clinics, and spaced reviews keep retention steady without cramming.',
    icon: Repeat
  },
  {
    title: 'Present',
    description: 'Monthly showcases and parent circles celebrate growth and build confident communicators.',
    icon: Presentation
  }
]

const beyondTimetable = [
  {
    title: 'Tightly curated resources',
    description: 'Focus booklets, mnemonic cards, and board-aligned practice sets cut the noise.',
    icon: Layers
  },
  {
    title: 'Transparent progress',
    description: 'Analytics-led trackers land in your inbox every fortnight with clear actions.',
    icon: BarChart2
  },
  {
    title: 'Mentor check-ins',
    description: 'Coaches schedule five-minute micro calls whenever a learner misses momentum.',
    icon: HeartHandshake
  }
]

const mentorTeam = [
  {
    name: 'Priyanka Pandey',
    role: 'Founder & Lead Mentor',
    bio: 'Former CBSE examiner with 12 years of experience. Builds concept bridges for Math and Science.',
    tags: ['Concept design', 'Parent coaching', 'Confidence labs'],
    icon: Sparkles
  },
  {
    name: 'Rahul Desai',
    role: 'Humanities Guide',
    bio: 'History nerd and debate coach helping learners connect timelines, mapwork, and civic awareness.',
    tags: ['Story-first humanities', 'Research projects', 'Critical questioning'],
    icon: Users
  }
]

const impactStats = [
  { value: '92%', label: 'Families recommend us', caption: 'Based on 2024 exit surveys' },
  { value: '+21%', label: 'Average score jump', caption: 'Six-month academic lift' },
  { value: '5/5', label: 'Mentor rating', caption: 'Parent review average' }
]

const timeline = [
  {
    year: '2016',
    title: 'Opened our studio',
    copy: 'Began with five curious learners and a promise of humane tutoring.'
  },
  {
    year: '2018',
    title: 'Methodology gains traction',
    copy: 'Rolled out small-batch timetable and family review meetings.'
  },
  {
    year: '2023',
    title: 'Community milestone',
    copy: 'Crossed 500 learners nurtured and launched confidence clubs.'
  }
]

export function Programs() {
  return (
    <div className="bg-bg text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#FCD9D4]/50 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 left-12 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-24 text-center sm:px-6 lg:px-8">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Programs
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-slate-900 sm:text-5xl">
            Structured batches for every stage — with human-centered mentorship.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            Every track pairs board-mapped rigor with warm mentors, so your child builds confidence, consistency, and
            visible progress week after week.
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

      {/* Tracks */}
      <Section background="white">
        <div className="section-spacing">
          <SectionHeading
            title="Tracks for every milestone"
            subtitle="Choose the batch that mirrors your child’s current grade, goals, and pace."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </Section>

      {/* How we teach */}
      <Section background="paper">
        <div className="section-spacing">
          <SectionHeading
            title="How we teach"
            subtitle="A simple rhythm keeps learners anchored while leaving room for curiosity."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {learningRhythm.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/70 bg-white p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#C62828]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-display font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Beyond */}
      <Section background="white">
        <div className="section-spacing">
          <SectionHeading
            title="Beyond the timetable"
            subtitle="Families stay in the loop with the same care we bring to class."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {beyondTimetable.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-[#C62828]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mentors + results */}
      <Section background="paper">
        <div className="section-spacing space-y-16">
          <div>
            <SectionHeading
              title="Mentors who stay invested"
              subtitle="Two people leading every cohort, blending academic rigor with pastoral care."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {mentorTeam.map((mentor) => (
                <div
                  key={mentor.name}
                  className="rounded-3xl border border-white/80 bg-white/95 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-[#C62828]">
                      <mentor.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-slate-900">{mentor.name}</h3>
                      <p className="text-sm text-slate-500">{mentor.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">{mentor.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-[#B45309]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <StatStrip stats={impactStats} />
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <div className="section-spacing">
          <SectionHeading
            title="Milestones that matter"
            subtitle="A quick view of how Spark & Shine evolved for today’s learners."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C62828]">{item.year}</p>
                <h3 className="mt-3 text-lg font-display font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] py-16 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-4 left-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-48 w-48 rounded-full bg-amber-200/30 blur-[120px]" />
        </div>
        <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto inline-flex items-center rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Next steps
          </span>
          <h2 className="text-3xl font-display font-semibold sm:text-4xl">Ready to explore a batch?</h2>
          <ul className="mx-auto flex max-w-xl flex-col gap-3 text-sm text-white/85">
            {['Open slots released every Monday', 'In-centre and hybrid options available'].map((point) => (
              <li key={point} className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/plans#trial"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a free demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Talk to admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
