import { useEffect, useMemo, useRef, useState } from 'react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { Camera, Users, GraduationCap, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react'

type Category = 'all' | 'classroom' | 'doubt-clinics' | 'celebrations' | 'resources'

const categories: Array<{ id: Category; label: string; description: string; icon: typeof Camera }> = [
  {
    id: 'all',
    label: 'All Moments',
    description: 'A curated mix of classroom snapshots, clinics, and community events.',
    icon: Sparkles
  },
  {
    id: 'classroom',
    label: 'Classroom Flow',
    description: 'Everyday glimpses of our small-batch learning studios.',
    icon: Users
  },
  {
    id: 'doubt-clinics',
    label: 'Doubt Clinics',
    description: 'Mentors guiding learners through personalised question hours.',
    icon: Camera
  },
  {
    id: 'celebrations',
    label: 'Celebrations',
    description: 'Milestone boards, festivals, and showcase evenings.',
    icon: GraduationCap
  },
  {
    id: 'resources',
    label: 'Learning Resources',
    description: 'Hands-on kits, reflection journals, and feedback corners.',
    icon: Sparkles
  }
]

const galleryItems = [
  {
    id: 1,
    category: 'classroom' as Category,
    title: 'Morning maths huddle',
    description: 'Grade 4 learners building fractions with fraction towers.',
    src: 'https://images.unsplash.com/photo-1610484826967-09c5720778e1?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1610484826967-09c5720778e1?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1610484826967-09c5720778e1?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1610484826967-09c5720778e1?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 2,
    category: 'doubt-clinics' as Category,
    title: 'Concept check-in',
    description: 'Mentor Priyanka guiding an algebra problem during our evening clinic.',
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 3,
    category: 'celebrations' as Category,
    title: 'Shine board of wins',
    description: 'Friday reflections where students pin their proudest breakthroughs.',
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 4,
    category: 'resources' as Category,
    title: 'Weekend lab kits',
    description: 'Take-home science experiments for our Grade 7 cohort.',
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 5,
    category: 'classroom' as Category,
    title: 'Anchor chart wall',
    description: 'Our grammar anchors created by students during peer coaching.',
    src: 'https://images.unsplash.com/photo-1524178232360-2b2e0a8a93fb?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1524178232360-2b2e0a8a93fb?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1524178232360-2b2e0a8a93fb?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1524178232360-2b2e0a8a93fb?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 6,
    category: 'doubt-clinics' as Category,
    title: 'Peer explanation zone',
    description: 'Learners explain geometry proofs using our glass board setup.',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 7,
    category: 'celebrations' as Category,
    title: 'Festival reading circle',
    description: 'Parents and students co-reading stories during our Diwali open house.',
    src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 8,
    category: 'resources' as Category,
    title: 'Reflection journal corner',
    description: 'Weekly journals ready for feedback before they head home.',
    src: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 9,
    category: 'classroom' as Category,
    title: 'Mindfulness minute',
    description: 'Students pause for breathing exercises before evening sessions.',
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 10,
    category: 'doubt-clinics' as Category,
    title: 'Weekend exam lab',
    description: 'Board batch revising with timed writing prompts.',
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 11,
    category: 'celebrations' as Category,
    title: 'Progress postcards',
    description: 'Learners gifting handwritten notes to mentors after milestone tests.',
    src: 'https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1523419409543-0c1df022bdd1?auto=format&fit=crop&w=1400&q=80 1400w'
  },
  {
    id: 12,
    category: 'resources' as Category,
    title: 'Teacher planning shelf',
    description: 'Weekly lesson decks and manipulatives queued for the next day.',
    src: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80 600w, https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=900&q=80 900w, https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1400&q=80 1400w'
  }
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryItems
    }
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null)
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) => {
          if (prev === null) return prev
          return (prev + 1) % filteredItems.length
        })
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) => {
          if (prev === null) return prev
          return (prev - 1 + filteredItems.length) % filteredItems.length
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, filteredItems.length])

  useEffect(() => {
    if (lightboxIndex !== null) {
      closeButtonRef.current?.focus()
    }
  }, [lightboxIndex])

  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,40,40,0.12),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-24 text-center lg:px-10">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-5 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Gallery
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            A peek into Spark & Shine moments
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#4B5563]">
            Each frame captures how we blend structure with warmth — from focused concept labs to celebration evenings
            with families.
          </p>
        </div>
      </section>

      {/* Filters */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Browse by theme"
            subtitle="Select a category to explore highlights of our learning community."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
                className={`flex flex-col items-start gap-3 rounded-3xl border p-6 text-left transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'border-[#C62828] bg-[#FFF2EF] shadow-[0_20px_44px_rgba(198,40,40,0.16)]'
                    : 'border-[#F3F4F6] bg-white hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(31,41,55,0.1)]'
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                  <category.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1F2937]">{category.label}</p>
                  <p className="mt-1 text-xs text-[#4B5563]">{category.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Grid */}
      <Section background="paper">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Snapshots from our studio"
            subtitle="Tap an image to open the lightbox and navigate with your keyboard."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white text-left shadow-[0_20px_44px_rgba(31,41,55,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={item.src}
                  srcSet={item.srcSet}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={`${item.title} — ${item.description}`}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="space-y-1 px-5 py-4">
                  <p className="text-sm font-semibold text-[#1F2937]">{item.title}</p>
                  <p className="text-xs text-[#4B5563]">{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            ref={closeButtonRef}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1F2937] transition hover:bg-white"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Close lightbox</span>
          </button>
          <button
            className="absolute left-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1F2937] transition hover:bg-white"
            onClick={() => setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + filteredItems.length) % filteredItems.length))}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Previous image</span>
          </button>
          <figure className="mx-6 max-w-4xl rounded-3xl bg-white/95 p-4 text-center shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <img
              src={filteredItems[lightboxIndex].src}
              srcSet={filteredItems[lightboxIndex].srcSet}
              alt={`${filteredItems[lightboxIndex].title} — ${filteredItems[lightboxIndex].description}`}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-4 space-y-1">
              <p className="text-sm font-semibold text-[#1F2937]">{filteredItems[lightboxIndex].title}</p>
              <p className="text-xs text-[#4B5563]">{filteredItems[lightboxIndex].description}</p>
            </figcaption>
          </figure>
          <button
            className="absolute right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#1F2937] transition hover:bg-white"
            onClick={() => setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % filteredItems.length))}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Next image</span>
          </button>
        </div>
      )}

      {/* Consent */}
      <Section background="white">
        <div className="rounded-3xl border border-[#F3F4F6] bg-white/90 p-8 text-center shadow-[0_20px_44px_rgba(31,41,55,0.08)]">
          <h2 className="text-2xl font-display font-semibold text-[#1F2937]">Image consent & privacy</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
            Every photograph shared here is published with explicit consent from families. Want an image taken down?
            Write to us at{' '}
            <a href="mailto:sparkandshine.classes@gmail.com" className="text-[#C62828] underline">
              sparkandshine.classes@gmail.com
            </a>{' '}
            and we’ll action it within 48 hours.
          </p>
        </div>
      </Section>
    </div>
  )
}
