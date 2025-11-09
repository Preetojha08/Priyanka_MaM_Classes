import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-[#C62828] transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            {isOpen ? (
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.answer}</p>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

