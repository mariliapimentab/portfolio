'use client'

import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { CaseStudyModal } from '@/components/ui/CaseStudyModal'
import { PROJECTS } from '@/data'

export function Work() {
  const { t } = useLang()
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <section id="work" className="border-t border-gray-brand-200 py-[clamp(80px,12vh,160px)]">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)]">

        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-[72px]">
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.02em]">
            <span>{t('Selected', 'Projetos')}</span>
            <br />
            <em className="italic text-gray-brand-400">{t('work', 'selecionados')}</em>
          </h2>
          <span className="text-[12px] text-gray-brand-400 tracking-[0.06em] font-normal pb-1">
            {t('02 projects', '02 projetos')}
          </span>
        </Reveal>

        {/* Projects — stacked with single dividing line */}
        <div className="flex flex-col" style={{ gap: '0px' }}>
          {PROJECTS.slice(0, 2).map((project, i) => (
            <Reveal key={project.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <ProjectCard
                project={project}
                onOpen={setActiveProject}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <CaseStudyModal
        projectId={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}
