'use client'

import { useLang } from '@/context/LangContext'
import { Reveal } from '@/components/ui/Reveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EmailIcon, LinkedInIcon, FileIcon } from '@/components/ui/Icons'

export function Contact() {
  const { t } = useLang()

  const links = [
    {
      href: 'mailto:hello@mariliapimenta.com',
      label: 'hello@mariliapimenta.com',
      icon: <EmailIcon />,
      external: false,
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn Profile ↗',
      icon: <LinkedInIcon />,
      external: true,
    },
    {
      href: '/resume.pdf',
      label: t('Download Résumé', 'Baixar Currículo'),
      icon: <FileIcon />,
      external: true,
    },
  ]

  return (
    <section id="contact" className="border-t border-gray-brand-200 py-[clamp(80px,12vh,160px)]">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16">

          {/* Left */}
          <div className="flex-1">
            <Reveal className="mb-8">
              <SectionLabel>{t("Let's talk", 'Vamos conversar')}</SectionLabel>
            </Reveal>

            <Reveal>
              <h2
                className="font-serif text-[clamp(32px,4.5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] mb-7"
                dangerouslySetInnerHTML={{
                  __html: t(
                    'Open to<br/><em class="italic text-accent">thoughtful</em><br/>conversations.',
                    'Aberta a<br/><em class="italic text-accent">boas</em><br/>conversas.',
                  ),
                }}
              />
            </Reveal>

            <Reveal delay={1}>
              <p className="text-[14px] text-gray-brand-600 font-light leading-[1.65] max-w-[360px] mb-10">
                {t(
                  "Whether it's a full-time role, a strategic collaboration, or just a good design conversation — I'd love to hear from you.",
                  'Seja uma oportunidade full-time, uma colaboração estratégica ou simplesmente uma boa conversa sobre design — adoraria te ouvir.',
                )}
              </p>
            </Reveal>

            <Reveal delay={2}>
              <div className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 text-[14px] text-ink no-underline font-normal transition-colors duration-200 hover:text-accent w-fit"
                  >
                    <div className={[
                      'w-8 h-8 rounded-full border border-gray-brand-200',
                      'flex items-center justify-center flex-shrink-0',
                      'transition-colors duration-200',
                      'group-hover:border-accent group-hover:bg-accent',
                      'group-hover:[&_svg_*]:stroke-white group-hover:[&_circle]:fill-white',
                    ].join(' ')}>
                      {link.icon}
                    </div>
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Decorative circles — hidden on small screens */}
          <Reveal className="hidden md:flex items-center justify-center flex-shrink-0">
            <div className="relative w-[min(340px,35vw)] aspect-square border border-gray-brand-200 rounded-full flex items-center justify-center">
              <div className="absolute w-[70%] h-[70%] border border-gray-brand-200 rounded-full" />
              <div className="absolute w-[40%] h-[40%] border border-accent rounded-full opacity-30" />
              <div className="w-2 h-2 rounded-full bg-accent absolute" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
