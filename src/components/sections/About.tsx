'use client'

import { useLang } from '@/context/LangContext'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ABOUT_STATS } from '@/data'

export function About() {
  const { t } = useLang()

  return (
    <section id="about" className="border-t border-gray-brand-200 py-[clamp(80px,12vh,160px)]">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)]">

        <Reveal className="mb-[60px]">
          <SectionLabel>{t('About', 'Sobre')}</SectionLabel>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[clamp(40px,6vw,120px)] items-start">

          {/* Portrait */}
          <Reveal>
            <div className="w-full md:max-w-none max-w-[240px] aspect-[3/4] md:aspect-[3/4] bg-gray-brand-100 rounded-sm overflow-hidden relative">
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, #EDE8FF 0%, #D4CCFF 60%, #C4BAFF 100%)' }}
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-[80%] rounded-t-full"
                style={{ background: 'rgba(68,39,237,0.12)' }}
              />
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <h2
                className="font-serif text-[clamp(22px,2.5vw,30px)] font-normal leading-[1.4] tracking-[-0.01em] text-ink mb-9"
                dangerouslySetInnerHTML={{
                  __html: t(
                    'I believe good design is<br/><em class="italic text-accent">invisible</em> — it just feels right.',
                    'Acredito que bom design é<br/><em class="italic text-accent">invisível</em> — simplesmente funciona.',
                  ),
                }}
              />
            </Reveal>

            <Reveal delay={1}>
              <p
                className="text-[15px] text-gray-brand-600 leading-[1.75] font-light max-w-[540px] mb-12"
                dangerouslySetInnerHTML={{
                  __html: t(
                    "I'm Marília, a product designer with 6+ years shaping digital experiences across fintech, SaaS, and e-commerce. I work at the intersection of user clarity and business outcomes — which means I care as much about conversion rates as I do about pixel alignment.<br/><br/>My approach is research-first, systems-minded, and outcome-driven. I've led design for products used by millions of people, and I'm at my best when collaborating closely with PMs, engineers, and stakeholders who care about getting it right.",
                    'Sou Marília, designer de produto com mais de 6 anos moldando experiências digitais em fintech, SaaS e e-commerce. Trabalho na interseção entre clareza para o usuário e resultados de negócio — o que significa que me importo tanto com taxas de conversão quanto com alinhamento de pixels.<br/><br/>Minha abordagem é baseada em pesquisa, orientada a sistemas e guiada por resultados. Já liderei o design de produtos usados por milhões de pessoas e me destaco quando colaboro com PMs, engenheiros e stakeholders.',
                  ),
                }}
              />
            </Reveal>

            {/* Stats */}
            <Reveal delay={2}>
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-brand-200">
                {ABOUT_STATS.map((stat) => (
                  <div key={stat.en}>
                    <div className="font-serif text-[36px] font-normal leading-none tracking-[-0.02em] text-ink mb-1.5">
                      {stat.number}
                      {stat.sup && <span className="text-accent italic">{stat.sup}</span>}
                    </div>
                    <div className="text-[12px] text-gray-brand-400 tracking-[0.04em] font-normal">
                      {t(stat.en, stat.pt)}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
