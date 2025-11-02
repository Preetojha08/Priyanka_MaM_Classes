import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'bg' | 'paper'
}

export function Section({ children, className = '', background = 'bg' }: SectionProps) {
  const bgClass = {
    white: 'bg-white',
    bg: 'bg-bg',
    paper: 'bg-paper'
  }[background]

  return (
    <section className={`section-padding ${bgClass} ${className}`}>
      <div className="container-constrained">
        {children}
      </div>
    </section>
  )
}
