'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'
import { useScrolled } from '@/hooks/useScrolled'
import { LangToggle } from '@/components/ui/LangToggle'
import { NAV_ITEMS } from '@/data'

export function Navbar() {
  const { t } = useLang()
  const scrolled = useScrolled()

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'px-[clamp(24px,5vw,80px)] py-7',
        'flex items-center justify-between',
        'bg-white/85 backdrop-blur-md',
        'border-b transition-colors duration-300',
        scrolled ? 'border-gray-brand-200' : 'border-transparent',
      ].join(' ')}
    >
      {/* Logo */}
      <Link
        href="#hero"
        className="font-serif text-[20px] tracking-[-0.01em] text-ink no-underline leading-none"
      >
        Marilia Pimenta<span className="text-accent">.</span>
      </Link>

      {/* Nav links */}
      <ul className="hidden sm:flex gap-9 list-none">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={[
                'text-[15px] font-normal text-gray-brand-600 no-underline',
                'tracking-[0.01em] transition-colors duration-200',
                'relative group hover:text-ink',
              ].join(' ')}
            >
              {t(item.en, item.pt)}
              <span
                className={[
                  'absolute -bottom-0.5 left-0 right-0 h-px bg-accent',
                  'scale-x-0 origin-left transition-transform duration-300',
                  'group-hover:scale-x-100',
                ].join(' ')}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Language toggle */}
      <LangToggle />
    </nav>
  )
}
