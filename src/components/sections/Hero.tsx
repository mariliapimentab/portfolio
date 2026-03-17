'use client'

import Link from 'next/link'
import { useLang } from '@/context/LangContext'

export function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className={[
        'min-h-svh flex flex-col justify-end',
        'pt-[120px] pb-[clamp(64px,10vh,112px)]',
        'px-[clamp(24px,5vw,80px)]',
        'max-w-container mx-auto',
      ].join(' ')}
    >
      {/* Eyebrow */}
      <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-gray-brand-400 mb-6 opacity-0 animate-fade-up-slow">
        {t('Product Designer · Brasília, DF, Brazil', 'Product Designer · Brasília, DF, Brasil')}
      </p>

      {/* Headline — 2 linhas */}
      <h1 className="font-serif text-[clamp(46px,6.2vw,86px)] leading-[1.06] tracking-[-0.02em] font-normal text-ink max-w-[1000px] mb-8 opacity-0 animate-fade-up-mid">
        {t('Designing products that make', 'Criando produtos que tornam')}
        <em className="italic text-accent"> {t('hard things', 'o difícil')}</em><br />
        {t('feel effortless.', 'parecer simples.')}
      </h1>

      {/* Sub — 2 linhas */}
      <p className="text-[clamp(14px,1.6vw,16px)] text-gray-brand-600 max-w-[640px] leading-[1.75] font-light mb-12 opacity-0 animate-fade-up-late">
        {t(
          'I help companies turn complexity into clarity — from discovery to shipped product. Focused on outcomes, not aesthetics alone.',
          'Ajudo empresas a transformar complexidade em clareza — da pesquisa ao produto entregue. Foco em resultados, não apenas em estética.',
        )}
      </p>

      {/* CTA row */}
      <div className="flex flex-wrap items-center opacity-0 animate-fade-up-last" style={{ gap: 0 }}>
        <Link
          href="#work"
          className={[
            'bg-ink text-white px-6 py-[11px] rounded-sm',
            'text-[12px] font-medium tracking-[0.06em] uppercase no-underline',
            'transition-all duration-200 hover:bg-accent hover:-translate-y-px',
            'mr-7',
          ].join(' ')}
        >
          {t('View Work', 'Ver Projetos')}
        </Link>

        <Divider />

        {/* Email */}
        <a
          href="mailto:hello@mariliapimenta.com"
          className="flex items-center gap-[5px] text-[13px] font-normal text-gray-brand-600 no-underline hover:text-accent transition-colors duration-200"
        >
          <EmailIcon />
          hello@mariliapimenta.com
        </a>

        <Divider />

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[5px] text-[13px] font-normal text-gray-brand-600 no-underline hover:text-accent transition-colors duration-200 mr-5"
        >
          <LinkedInIcon />
          LinkedIn
        </a>

        {/* Résumé */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[5px] text-[13px] font-normal text-gray-brand-600 no-underline hover:text-accent transition-colors duration-200"
        >
          <ResumeIcon />
          {t('Résumé', 'Currículo')}
        </a>
      </div>
    </section>
  )
}

function Divider() {
  return <span className="w-px h-[16px] bg-gray-brand-200 hidden sm:block mx-5" />
}

function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="1" y="1" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 6.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="4" cy="4.5" r="0.75" fill="currentColor" />
      <path d="M7 6.5V11M7 8C7 7 8 6.5 9 6.5C10 6.5 11 7 11 8.5V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M3 2C3 1.44772 3.44772 1 4 1H9L12 4V13C12 13.5523 11.5523 14 11 14H4C3.44772 14 3 13.5523 3 13V2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 1V4H12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5.5 7H9.5M5.5 9.5H8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
