import { motion } from 'framer-motion'
import { Lightbulb, Heart, Sparkles, GraduationCap, Compass, Target, BookOpenCheck, Award, TrendingUp } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'

const missionHighlights = [
  {
    title: 'Purposeful Learning',
    description:
      'Every concept is anchored in real-life examples so students connect theory with everyday decisions.',
    icon: Lightbulb
  },
  {
    title: 'Community of Care',
    description:
      'We keep batch sizes intimate, celebrate small wins, and partner closely with parents at every milestone.',
    icon: Heart
  },
  {
    title: 'Future-Ready Skills',
    description:
      'Growth mindsets, presentation skills, and curiosity sprints are baked into weekly routines.',
    icon: Sparkles
  }
]

const spotlightTeachers = [
  {
    name: 'Priyanka Pandey',
    role: 'Founder & Lead Mentor',
    bio:
      'Former CBSE examiner with 12 years of classroom experience. Priyanka specialises in building concept bridges for Maths and Science.',
    focus: ['Concept bridging', 'Confidence coaching', 'Parent advising']
  },
  {
    name: 'Rahul Desai',
    role: 'Humanities Guide',
    bio:
      'History nerd and debate coach who helps learners connect timelines, mapwork, and civic awareness with interactive simulations.',
    focus: ['Story-based S.S.T lessons', 'Research projects', 'Critical questioning']
  }
]

const methodologySteps = [
  {
    title: 'Discover',
    description:
      'Diagnostic check-ins map strengths, learning rhythms, and attention spans within the first week.',
    icon: Compass
  },
  {
    title: 'Design',
    description:
      'Micro-learning playlists blend board curriculum, application drills, and weekly “ask me anything” circles.',
    icon: Target
  },
  {
    title: 'Deepen',
    description:
      'Friday labs turn tricky topics into games, peer teaching, and reflective journaling for sticky understanding.',
    icon: BookOpenCheck
  },
  {
    title: 'Deliver',
    description:
      'Monthly showcases pair mock tests with learning celebrations so feedback feels empowering, not stressful.',
    icon: GraduationCap
  }
]

const successStats = [
  { label: 'Families recommending us', value: '92%' },
  { label: 'Average score jump in 6 months', value: '21%' },
  { label: 'Doubt sessions per learner each month', value: '08' },
  { label: 'Workshops conducted yearly', value: '34' }
]

const timeline = [
  {
    year: '2016',
    headline: 'Spark & Shine Opens Its Doors',
    copy:
      'We began with five curious learners and a mission to replace rote learning with nurturing guidance.'
  },
  {
    year: '2018',
    headline: 'Methodology Gains Traction',
    copy:
      'Introduced the small-batch timetable and family review meetings that still define our learning culture.'
  },
  {
    year: '2020',
    headline: 'Hybrid Learning Launch',
    copy:
      'Live digital workshops, recorded recap capsules, and offline activity kits kept progress steady through lockdowns.'
  },
  {
    year: '2023',
    headline: 'Community Milestone',
    copy:
      'Crossed 500 learners nurtured, launched confidence clubs, and formalised leadership tracks for senior students.'
  }
]

export function About() {
  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-tr from-[#C62828]/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#F59E0B]/20 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 py-24 text-center lg:px-10">
          <span className="inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-4 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            About Spark & Shine
          </span>
          <h1 className="max-w-3xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            Coaching made personal, purposeful, and full of possibility.
          </h1>
          <p className="max-w-2xl text-lg text-[#4B5563]">
            We are a boutique tuition studio in Ankleshwar that blends rigorous academics with human-centred mentorship.
            Our promise? Every learner leaves more confident than they arrived.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Small Batches (max 6)', 'Guided Doubt Clinics', 'Monthly Growth Reviews'].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#C62828] shadow-[0_6px_16px_rgba(198,40,40,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <Section background="paper">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="Mission & Approach"
            subtitle="A joyful balance of academic mastery, emotional wellbeing, and life skills."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {missionHighlights.map((item) => (
              <motion.div
                key={item.title}
                className="group rounded-3xl border border-white/60 bg-white p-6 shadow-[0_20px_40px_rgba(31,41,55,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(31,41,55,0.08)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-[#1F2937]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Teacher Spotlight */}
      <Section background="white">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="Meet the Mentors"
            subtitle="Dedicated coaches who treat every learner like family."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {spotlightTeachers.map((teacher) => (
              <div
                key={teacher.name}
                className="flex h-full flex-col rounded-3xl border border-[#F3F4F6] bg-white/80 p-8 shadow-[0_16px_32px_rgba(31,41,55,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-[#1F2937]">{teacher.name}</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#9CA3AF]">{teacher.role}</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full bg-[#C62828]/10 px-3 py-1 text-xs font-semibold text-[#C62828]">
                    1:6 mentor ratio
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">{teacher.bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {teacher.focus.map((focus) => (
                    <span
                      key={focus}
                      className="inline-flex items-center rounded-full border border-[#C62828]/15 bg-[#FFF9F2] px-3 py-1 text-xs font-semibold text-[#B71C1C]"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology */}
      <Section background="bg">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="How Our Methodology Works"
            subtitle="Designed to remove fear, foster curiosity, and build exam confidence."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white p-6 shadow-[0_18px_40px_rgba(31,41,55,0.07)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF2EF] text-[#C62828]">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#1F2937]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="relative mx-auto grid max-w-[1100px] gap-8 px-6 text-center sm:grid-cols-2 lg:px-10">
          <SectionHeading
            title="Results You Can Measure"
            subtitle="Progress dashboards make every improvement visible."
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {successStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_24px_50px_rgba(0,0,0,0.18)] backdrop-blur"
              >
                <div className="text-3xl font-display font-semibold">{stat.value}</div>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <Section background="white">
        <div className="flex flex-col gap-12">
          <SectionHeading
            title="The Spark & Shine Story"
            subtitle="A timeline of experiments, bold pivots, and learner-first decisions."
          />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#C62828] via-[#F59E0B] to-transparent sm:left-1/2" />
            <div className="flex flex-col gap-10">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-4 rounded-3xl border border-[#F3F4F6] bg-white/90 p-6 shadow-[0_16px_32px_rgba(31,41,55,0.07)] sm:max-w-[48%] ${
                    index % 2 === 0 ? 'sm:self-start sm:pl-10' : 'sm:self-end sm:pr-10'
                  }`}
                >
                  <span className="inline-flex w-max items-center rounded-full bg-[#FFF9F2] px-3 py-1 text-xs font-semibold text-[#B71C1C]">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-[#1F2937]">{item.headline}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{item.copy}</p>
                  <span
                    className={`absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full border border-white bg-[#C62828] text-white shadow-[0_10px_20px_rgba(198,40,40,0.2)] sm:left-auto sm:right-[-34px]`}
                  >
                    <Award className="h-3 w-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Closing Strip */}
      <Section background="paper">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-[#C62828]/10 bg-white/80 px-8 py-12 text-center shadow-[0_20px_60px_rgba(198,40,40,0.12)]">
          <TrendingUp className="h-10 w-10 text-[#C62828]" />
          <h2 className="max-w-2xl text-2xl font-display font-semibold text-[#1F2937] sm:text-3xl">
            Growth you can feel at home, in school, and in every report card.
          </h2>
          <p className="max-w-3xl text-sm text-[#4B5563]">
            Parents tell us they notice calmer study hours, focused revision, and children who ask to attend class. We
            would love to craft the same journey for your family.
          </p>
        </div>
      </Section>
    </div>
  )
}
