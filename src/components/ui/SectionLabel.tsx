import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={[
        'flex items-center gap-3',
        'text-[11px] font-medium tracking-[0.14em] uppercase text-gray-brand-400',
        className,
      ].join(' ')}
    >
      <span className="w-6 h-px bg-gray-brand-400 flex-shrink-0" />
      {children}
    </div>
  )
}
