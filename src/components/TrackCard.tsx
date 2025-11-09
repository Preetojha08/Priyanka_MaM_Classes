import { Link } from 'react-router-dom'
import { BookOpen, CheckCircle2, Clock3 } from 'lucide-react'

export interface TrackCardData {
  id: string
  title: string
  range: string
  description: string
  curriculum: string[]
  outcomes: string[]
  weeklyFlow: string
  badge?: string
  ctaHref: string
  ctaLabel?: string
}

interface TrackCardProps {
  track: TrackCardData
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C62828]">
            {track.range}
          </span>
          <h3 className="mt-4 text-2xl font-display font-semibold text-slate-900">{track.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{track.description}</p>
        </div>
        {track.badge ? (
          <span className="inline-flex items-center rounded-full border border-[#C62828]/20 bg-[#C62828]/10 px-3 py-1 text-xs font-semibold text-[#B71C1C]">
            {track.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            <BookOpen className="h-4 w-4 text-[#C62828]" />
            Curriculum snapshot
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {track.curriculum.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#C62828]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-[#C62828]" />
            Learning outcomes
          </div>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {track.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-[#C62828]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-slate-800">
          <Clock3 className="h-4 w-4 text-[#C62828]" />
          <span>{track.weeklyFlow}</span>
        </div>
        <Link
          to={track.ctaHref}
          className="inline-flex items-center justify-center rounded-full border border-[#C62828] px-5 py-2 text-sm font-semibold text-[#C62828] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C62828] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          {track.ctaLabel ?? 'Talk to admissions'}
        </Link>
      </div>
    </div>
  )
}

