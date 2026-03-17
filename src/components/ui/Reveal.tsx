'use client'

import { useReveal } from '@/hooks/useReveal'
import type { ReactNode, ElementType } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
  as?: ElementType
}

const delayMap = {
  0: '',
  1: 'reveal-delay-1',
  2: 'reveal-delay-2',
  3: 'reveal-delay-3',
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: RevealProps) {
  const { ref, visible } = useReveal()

  return (
    <Tag
      ref={ref}
      className={['reveal', visible ? 'visible' : '', delayMap[delay], className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
