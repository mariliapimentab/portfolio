'use client'

import { useLang } from '@/context/LangContext'
import type { Lang } from '@/types'

export function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="flex items-center border border-gray-brand-200 overflow-hidden flex-shrink-0"
      style={{ borderRadius: 0 }}
    >
      {(['en', 'pt'] as Lang[]).map((l, i) => (
        <div key={l} className="flex items-center">
          {i > 0 && (
            <div className="w-px h-5 bg-gray-brand-200 flex-shrink-0" />
          )}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={[
              'text-[11px] font-medium tracking-[0.08em] uppercase',
              'px-[10px] py-1 border-none cursor-pointer font-sans leading-none',
              'transition-colors duration-200',
              lang === l
                ? 'bg-ink text-white'
                : 'bg-transparent text-gray-brand-400 hover:text-ink hover:bg-gray-brand-100',
            ].join(' ')}
          >
            {l.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  )
}
