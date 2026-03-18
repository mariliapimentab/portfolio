'use client'

import { useEffect } from 'react'
import { useLang } from '@/context/LangContext'
import { CASE_STUDIES } from '@/data'
import { CloseIcon } from '@/components/ui/Icons'

interface CaseStudyModalProps {
  projectId: string | null
  onClose: () => void
}

export function CaseStudyModal({ projectId, onClose }: CaseStudyModalProps) {
  const { lang } = useLang()
  const isOpen = !!projectId

  // Keyboard close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const data = projectId ? CASE_STUDIES[projectId]?.[lang] : null

  return (
    <>
      {/* Overlay */}
      <div
        className={[
          'fixed inset-0 z-[200] bg-ink/70 backdrop-blur-sm',
          'transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={data?.title ?? 'Case study'}
        className={[
          'fixed top-0 right-0 bottom-0 z-[201]',
          'w-full max-w-[800px]',
          'bg-white overflow-y-auto',
          'px-[clamp(32px,5vw,64px)] py-[60px]',
          'transition-transform duration-500 ease-spring',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={[
            'absolute top-7 right-7 w-9 h-9',
            'rounded-full border border-gray-brand-200',
            'flex items-center justify-center',
            'cursor-pointer bg-transparent',
            'transition-colors duration-200',
            'hover:border-ink hover:bg-ink',
            'group',
          ].join(' ')}
          aria-label="Close case study"
        >
          <CloseIcon className="group-hover:[&_path]:stroke-white" />
        </button>

        {data && <CaseStudyContent data={data} />}
      </div>
    </>
  )
}

function CaseStudyContent({ data }: { data: (typeof CASE_STUDIES)[string]['en'] }) {
  // This won't actually be called with wrong types — just casting for clarity
  const content = data as (typeof CASE_STUDIES)[string]['en']

  return (
    <>
      {/* Eyebrow */}
      <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-5">
        <span className="w-4 h-px bg-accent" />
        {content.eyebrow}
      </div>

      {/* Title */}
      <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-6">
        {content.title}
      </h2>

      {/* Impact bar */}
      <div className="text-[15px] text-accent font-medium px-5 py-4 border-l-2 border-accent bg-accent/[0.04] rounded-r mb-10 leading-relaxed">
        {content.impact}
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 gap-5 py-7 border-t border-b border-gray-brand-200 mb-12">
        {content.meta.map((m) => (
          <div key={m.label}>
            <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-gray-brand-400 mb-1">
              {m.label}
            </div>
            <div className="text-[14px] text-ink font-normal">{m.value}</div>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-12">
        {content.sections.map((section) => (
          <div key={section.title}>
            <div className="text-[13px] font-medium tracking-[0.1em] uppercase text-gray-brand-400 pb-3 mb-4 border-b border-gray-brand-200">
              {section.title}
            </div>

            {/* Metrics */}
            {section.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {section.metrics.map((m) => (
                  <div key={m.desc} className="p-5 border border-gray-brand-200 rounded">
                    <div className="font-serif text-[28px] font-normal leading-none mb-1 text-ink">
                      {m.val}
                      <span className="text-accent italic">{m.sup}</span>
                    </div>
                    <div className="text-[11px] text-gray-brand-400 tracking-[0.04em] leading-[1.4]">
                      {m.desc}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Body */}
            {section.body && (
              <div className="flex flex-col gap-4">
                {section.body.split('\n\n').map((para, i) => {
                  if (para.startsWith('—')) {
                    // Render as bullet list
                    return (
                      <ul key={i} className="flex flex-col gap-3">
                        {para.split('\n').filter(Boolean).map((line, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-[14px] text-ink font-light leading-[1.65]">
                            <span className="text-accent font-normal mt-0.5 flex-shrink-0">—</span>
                            <span>{line.replace(/^— /, '')}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={i} className="text-[14px] text-ink font-light leading-[1.75]">
                      {para}
                    </p>
                  )
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
