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
    <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)] transition-shadow duration-300 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700">
            {track.range}
          </span>
          <h3 className="mt-4 text-2xl font-display font-semibold text-slate-900">{track.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{track.description}</p>
        </div>
        {track.badge ? (
          <span className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
            {track.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            <BookOpen className="h-4 w-4 text-rose-600" />
            Curriculum snapshot
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {track.curriculum.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-rose-600" />
            Learning outcomes
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
            {track.outcomes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-rose-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 rounded-full bg-amber-50 px-4 py-2.5 text-sm font-semibold text-rose-700">
          <Clock3 className="h-4 w-4 text-rose-600" />
          <span>{track.weeklyFlow}</span>
        </div>
        <Link
          to={track.ctaHref}
          className="btn-outline w-full text-center sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200 focus-visible:ring-offset-2"
        >
          {track.ctaLabel ?? 'Talk to admissions'}
        </Link>
      </div>
    </div>
  )
}
