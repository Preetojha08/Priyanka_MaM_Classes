import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, Compass } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import config from '../site.config'

const contactHighlights = [
  {
    title: 'Call the Studio',
    description: 'Reach our academic advisor between 3:30 PM � 8:30 PM IST, Monday to Saturday.',
    value: config.phone,
    href: config.social.phone,
    icon: Phone
  },
  {
    title: 'WhatsApp for Quick Replies',
    description: 'Share report cards or questions and we�ll respond within a few hours.',
    value: config.whatsapp,
    href: config.social.whatsapp,
    icon: MessageCircle
  },
  {
    title: 'Write to Us',
    description: 'Send detailed concerns, learning goals, or feedback anytime.',
    value: config.email,
    href: config.social.email,
    icon: Mail
  }
]

const visitDetails = [
  {
    title: 'Studio Address',
    description: config.address,
    icon: MapPin
  },
  {
    title: 'Learning Hours',
    description: config.hours,
    icon: Clock
  }
]

export function Contact() {
  return (
    <div className="bg-bg text-[#1F2937]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.08),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
          <span className="inline-block rounded-full bg-rose-50 px-4 py-1 text-xs font-medium tracking-[0.35em] text-rose-700">
            CONTACT SPARK & SHINE
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-display font-semibold tracking-tight text-neutral-900 md:text-5xl">
            We’re here to listen, guide, and cheer for your child.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Whether you�d like to explore batches, book a demo, or understand how we personalise learning � our team is just a message away.
          </p>
        </div>
        <div className="border-t border-black/5" aria-hidden="true" />
      </section>

      {/* Highlights */}
      <Section background="white">
        <div className="flex flex-col gap-8">
          <SectionHeading
            title="Connect your way"
            subtitle="Pick the channel that suits you best. We respond within one business day."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contactHighlights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-rose-700">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Visit & Map */}
      <section className="bg-amber-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-neutral-900">Drop by the studio</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Book a short visit to observe a class or speak with a mentor.
            </p>
            <div className="mt-6 space-y-5">
              {visitDetails.map((detail) => (
                <div key={detail.title}>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">{detail.title}</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">{detail.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl border border-dashed border-rose-200 bg-rose-50/60 p-4 text-xs leading-relaxed text-rose-700">
              Visits are by prior appointment so we can reserve a comfortable slot without disrupting ongoing batches.
            </p>
          </div>
          <div className="space-y-4">
            <iframe
              title="Spark & Shine Tuition Classes on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.7222251533275!2d72.998!3d21.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM4JzI2LjIiTiA3MsKwNTknNTIuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              className="h-80 w-full rounded-2xl border border-black/5 shadow-sm"
              aria-label="Map showing Spark & Shine Tuition Classes location"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
              <span className="inline-flex items-center gap-2 text-neutral-800">
                <Compass className="h-4 w-4 text-rose-600" />
                Parking is available nearby
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section background="white">
        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h3 className="text-3xl font-display font-semibold text-neutral-900">Tell us about your child</h3>
            <p className="mt-3 text-sm text-neutral-600">
              Share current grade, preferred subjects, and goalposts. We reply within one business day.
            </p>
          </div>
          <InquiryForm
            type="contact"
            className="mx-auto w-full max-w-3xl"
            cardClassName="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8"
            headingAlign="left"
          />
          <p className="mx-auto max-w-2xl text-center text-xs text-[#6B7280]">
            By submitting this form you agree to receive communication about Spark & Shine programmes. We respect your inbox and only reach out with relevant updates. Read our privacy commitments in the welcome mail we send.
          </p>
        </div>
      </Section>

      {/* <section className="bg-amber-50 py-12 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Sparkles className="h-8 w-8 text-rose-600" />
          <h3 className="text-2xl font-semibold text-neutral-900">Prefer a quick callback?</h3>
          <p className="text-sm text-neutral-600">
            Drop a WhatsApp message with �CALLBACK� and your available timing. Our coordinator gets back within the same working day.
          </p>
          <a
            href={config.social.whatsapp}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
          >
            Message on WhatsApp
          </a>
        </div>
      </section> */}

      <div className="border-t border-black/5" aria-hidden="true" />
    </div>
  )
}
