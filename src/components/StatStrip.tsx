export interface StatItem {
  value: string
  label: string
  caption?: string
}

interface StatStripProps {
  stats: StatItem[]
}

export function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 p-6 text-white shadow-[0_25px_60px_rgba(190,18,60,0.35)] md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="text-3xl font-display font-semibold leading-tight md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{stat.label}</p>
            {stat.caption ? <p className="mt-1 text-sm text-white/85">{stat.caption}</p> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
