import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export interface PlanCardData {
  name: string
  badge?: string
  headline: string
  price: string
  unit: string
  highlights: string[]
  featured?: boolean
  ctaHref: string
  ctaLabel: string
}

interface PlanCardProps {
  plan: PlanCardData
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-8 shadow-[0_24px_50px_rgba(15,23,42,0.08)] ${
        plan.featured
          ? 'border-transparent bg-gradient-to-b from-[#FFF7F5] to-white ring-2 ring-[#C62828]/30'
          : 'border-slate-100 bg-white'
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Plan</p>
            <h3 className="mt-2 text-2xl font-display font-semibold text-slate-900">{plan.name}</h3>
          </div>
          {plan.badge ? (
            <span className="inline-flex items-center rounded-full bg-[#C62828]/10 px-3 py-1 text-xs font-semibold text-[#B71C1C]">
              {plan.badge}
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-600">{plan.headline}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-display font-semibold text-slate-900">{plan.price}</span>
          <span className="text-xs font-semibold text-slate-500">{plan.unit}</span>
        </div>
      </div>

      <ul className="mt-8 space-y-3 text-sm text-slate-600">
        {plan.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2">
            <Check className="mt-1 h-4 w-4 text-[#C62828]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-6">
        <Link
          to={plan.ctaHref}
          className={`block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(198,40,40,0.4)] focus-visible:ring-offset-2 ${
            plan.featured
              ? 'bg-[#C62828] text-white hover:-translate-y-0.5 hover:bg-[#B71C1C]'
              : 'border border-[#C62828] text-[#C62828] hover:-translate-y-0.5 hover:bg-[#C62828] hover:text-white'
          }`}
        >
          {plan.ctaLabel}
        </Link>
      </div>
    </div>
  )
}
