import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { TrackCard, TrackCardData } from '../components/TrackCard'
import { StatStrip } from '../components/StatStrip'
import { PenTool, Presentation, Repeat, Sparkles, Layers, BarChart2, HeartHandshake, Users } from 'lucide-react'

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
    weeklyFlow: '5 sessions/week · 75 mins + Saturday review block',
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
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
            Programs
          </span>
          <h1 className="mt-6 max-w-3xl text-3xl font-display font-extrabold text-slate-900 md:text-4xl lg:text-5xl">
            Structured batches for every stage — with human-centered mentorship.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Every track pairs board-mapped rigour with warm mentors, so your child builds confidence, consistency, and
            visible progress week after week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featureChips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700"
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
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
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
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
            {learningRhythm.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-[0_10px_30px_rgba(16,24,40,0.06)] md:p-8"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-100 bg-rose-50 text-rose-600">
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
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
            {beyondTimetable.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)] md:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-amber-50 text-rose-600">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
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
            <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
              {mentorTeam.map((mentor) => (
                <div
                  key={mentor.name}
                  className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)] md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-rose-100 bg-rose-50 text-rose-600">
                      <mentor.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-slate-900">{mentor.name}</h3>
                      <p className="text-sm text-slate-500">{mentor.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{mentor.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-[#B45309]"
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
          <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-3">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)] md:p-8"
              >
                <p className="inline-flex w-fit rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
                  {item.year}
                </p>
                <h3 className="mt-4 text-lg font-display font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      {/* <section className="bg-gradient-to-r from-rose-500 via-rose-500 to-rose-600 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Next steps
          </span>
          <h2 className="text-3xl font-display font-extrabold sm:text-4xl">Ready to explore a batch?</h2>
          <ul className="flex w-full max-w-xl flex-col gap-2 text-sm text-white/85">
            {['Open slots released every Monday', 'In-centre and hybrid options available'].map((point) => (
              <li key={point} className="flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-white/80" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/plans#trial"
              className="btn-primary w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
            >
              Book a free demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
            >
              Talk to admissions
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}
 8
