'use client'

import { useLang } from '@/context/LangContext'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { PROCESS_STEPS } from '@/data'

export function Process() {
  const { t } = useLang()

  return (
    <section id="process" className="border-t border-gray-brand-200 py-[clamp(80px,12vh,160px)]">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)]">

        {/* Header */}
        <Reveal className="mb-[72px]">
          <SectionLabel className="mb-6">{t('How I work', 'Como trabalho')}</SectionLabel>
          <h2
            className="font-serif text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] max-w-[400px]"
            dangerouslySetInnerHTML={{
              __html: t('Design as a<br/>thinking tool', 'Design como<br/>ferramenta de pensar'),
            }}
          />
        </Reveal>

        {/* Steps grid */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-brand-200">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className={[
                  'p-10 transition-colors duration-300 hover:bg-gray-brand-100',
                  i < PROCESS_STEPS.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-brand-200' : '',
                  i === 1 ? 'sm:border-r-0 lg:border-r border-gray-brand-200' : '',
                ].join(' ')}
              >
                <span className="block text-[11px] text-accent font-medium tracking-[0.12em] mb-6">
                  {step.num}
                </span>
                <h3 className="text-[16px] font-medium tracking-[-0.01em] mb-3 text-ink">
                  {t(step.en.title, step.pt.title)}
                </h3>
                <p className="text-[13px] text-gray-brand-600 leading-[1.65] font-light">
                  {t(step.en.desc, step.pt.desc)}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
