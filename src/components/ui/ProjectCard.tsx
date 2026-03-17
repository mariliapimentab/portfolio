'use client'

import { useLang } from '@/context/LangContext'
import { MockVisual } from '@/components/ui/MockVisual'
import { ArrowIcon } from '@/components/ui/Icons'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  onOpen: (id: string) => void
  delay?: 0 | 1 | 2 | 3
}

export function ProjectCard({ project, onOpen, delay = 0 }: ProjectCardProps) {
  const { lang } = useLang()
  const content = project[lang]

  const [nameLine1, nameLine2] = content.name.split('\n')

  return (
    <button
      onClick={() => onOpen(project.id)}
      className={[
        'group w-full text-left',
        'grid grid-cols-1 md:grid-cols-2',
        'bg-white border border-gray-brand-200 overflow-hidden',
        'cursor-pointer transition-colors duration-300 hover:border-ink',
        'focus-visible:outline-2 focus-visible:outline-accent',
      ].join(' ')}
      aria-label={`Open ${content.name} case study`}
    >
      {/* Info panel */}
      <div className="p-[clamp(32px,4vw,56px)] flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-brand-200 transition-colors duration-300 group-hover:border-ink">
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-7">
            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-brand-400 px-2.5 py-1 border border-gray-brand-200 rounded-sm">
              {project.tag}
            </span>
            <span className="text-[11px] text-gray-brand-400 tracking-[0.04em]">
              {project.year}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-serif text-[clamp(24px,2.8vw,36px)] font-normal leading-[1.15] tracking-[-0.015em] mb-4 transition-colors duration-200 group-hover:text-accent">
            {nameLine1}<br />{nameLine2}
          </h3>

          {/* Desc */}
          <p className="text-[14px] text-gray-brand-600 leading-[1.65] font-light max-w-[320px]">
            {content.desc}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-10">
          <span className="text-[12px] text-gray-brand-400 tracking-[0.04em]">
            {content.role}
          </span>
          <div className={[
            'w-9 h-9 rounded-full border border-gray-brand-200',
            'flex items-center justify-center',
            'transition-all duration-200',
            'group-hover:border-accent group-hover:bg-accent group-hover:rotate-45',
          ].join(' ')}>
            <ArrowIcon className="group-hover:[&_path]:stroke-white" />
          </div>
        </div>
      </div>

      {/* Visual panel */}
      <div className="relative overflow-hidden min-h-[220px] md:min-h-[340px]">
        <div className="absolute inset-0 transition-transform duration-[600ms] ease-spring group-hover:scale-[1.03]">
          <MockVisual type={project.visual} />
        </div>
      </div>
    </button>
  )
}
