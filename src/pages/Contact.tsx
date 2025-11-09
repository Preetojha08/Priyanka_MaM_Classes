import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, Compass } from 'lucide-react'
import { Section } from '../components/ui/Section'
import { SectionHeading } from '../components/SectionHeading'
import { InquiryForm } from '../components/InquiryForm'
import config from '../site.config'

const contactHighlights = [
  {
    title: 'Call the Studio',
    description: 'Reach our academic advisor between 3:30 PM – 8:30 PM IST, Monday to Saturday.',
    value: config.phone,
    href: config.social.phone,
    icon: Phone
  },
  {
    title: 'WhatsApp for Quick Replies',
    description: 'Share report cards or questions and we’ll respond within a few hours.',
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF9F2] via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,40,40,0.12),_transparent_55%)] pointer-events-none" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-24 text-center lg:px-10">
          <span className="mx-auto inline-flex items-center rounded-full border border-[#C62828]/20 bg-white/80 px-5 py-1 text-sm font-semibold uppercase tracking-[0.35em] text-[#C62828]">
            Contact Spark & Shine
          </span>
          <h1 className="mx-auto max-w-4xl text-4xl font-display font-semibold text-[#1F2937] sm:text-5xl">
            We’re here to listen, guide, and cheer for your child.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[#4B5563]">
            Whether you’d like to explore batches, book a demo, or understand how we personalise learning, our team is
            just a message away.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Connect your way"
            subtitle="Pick the channel that suits you best. We respond within one business day."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {contactHighlights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-[#F3F4F6] bg-white p-6 shadow-[0_20px_40px_rgba(31,41,55,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(31,41,55,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C62828]/10 text-[#C62828]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#1F2937]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4B5563]">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#C62828]">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Visit & Map */}
      <Section background="paper">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-[0_24px_48px_rgba(31,41,55,0.08)]">
            <SectionHeading
              title="Drop by the studio"
              subtitle="Book a short visit to observe a class or speak with a mentor."
              centered={false}
            />
            <div className="mt-8 space-y-6 text-sm text-[#4B5563]">
              {visitDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-3 rounded-2xl bg-[#FFF2EF] p-4">
                  <detail.icon className="mt-1 h-5 w-5 text-[#C62828]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">{detail.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#4B5563]">{detail.description}</p>
                  </div>
                </div>
              ))}
              <p className="rounded-2xl border border-dashed border-[#C62828]/30 bg-white p-4 text-xs leading-relaxed text-[#B45309]">
                Visits are by prior appointment so we can reserve a comfortable slot without disrupting ongoing batches.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl border border-white/70 bg-white/90 shadow-[0_24px_48px_rgba(31,41,55,0.08)]">
            <iframe
              title="Spark & Shine Tuition Classes on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.7222251533275!2d72.998!3d21.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDM4JzI2LjIiTiA3MsKwNTknNTIuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              className="h-80 w-full rounded-t-3xl"
              aria-label="Map showing Spark & Shine Tuition Classes location"
            />
            <div className="flex items-center justify-between gap-4 px-6 py-4 text-xs text-[#4B5563]">
              <span className="inline-flex items-center gap-2 text-[#1F2937]">
                <Compass className="h-4 w-4 text-[#C62828]" />
                Parking is available nearby
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(config.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C62828] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B71C1C]"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section background="white">
        <div className="flex flex-col gap-10">
          <SectionHeading
            title="Tell us about your child"
            subtitle="Share current grade, preferred subjects, and goalposts. We reply within one business day."
          />
          <InquiryForm type="contact" />
          <p className="mx-auto max-w-2xl text-xs text-[#6B7280]">
            By submitting this form you agree to receive communication about Spark & Shine programmes. We respect your
            inbox and only reach out with relevant updates. Read our privacy commitments in the welcome mail we send.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#C62828] via-[#B71C1C] to-[#8C1B1B] py-16 text-white">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-6 text-center lg:px-10">
          <Sparkles className="h-8 w-8 text-white/80" />
          <h2 className="text-3xl font-display font-semibold">Prefer a quick callback?</h2>
          <p className="max-w-2xl text-sm text-white/85">
            Drop a WhatsApp message with “CALLBACK” and your available timing. Our coordinator gets back within the same
            working day.
          </p>
          <a
            href={config.social.whatsapp}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDECEC]"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
