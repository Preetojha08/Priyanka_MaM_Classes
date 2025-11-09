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
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8C1B1B] p-8 text-white shadow-[0_25px_60px_rgba(198,40,40,0.25)]">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-16 left-24 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-20 right-16 h-48 w-48 rounded-full bg-amber-200/40 blur-[100px]" />
      </div>
      <div className="relative grid gap-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-display font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
            {stat.caption ? <p className="mt-1 text-xs text-white/80">{stat.caption}</p> : null}
          </div>
        ))}
      </div>
    </section>
  )
}

