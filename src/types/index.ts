// ── Language ──────────────────────────────────────────────────────────────────
export type Lang = 'en' | 'pt'

// ── Nav ───────────────────────────────────────────────────────────────────────
export interface NavItem {
  href: string
  en: string
  pt: string
}

// ── Project card ──────────────────────────────────────────────────────────────
export interface Project {
  id: string
  tag: string
  year: string
  visual: 'viz1' | 'viz2' | 'viz3' | 'viz4'
  en: {
    name: string
    desc: string
    role: string
  }
  pt: {
    name: string
    desc: string
    role: string
  }
}

// ── Case study ────────────────────────────────────────────────────────────────
export interface CaseStudyMeta {
  label: string
  value: string
}

export interface CaseStudyMetric {
  val: string
  sup: string
  desc: string
}

export interface CaseStudySection {
  title: string
  body?: string
  metrics?: CaseStudyMetric[]
}

export interface CaseStudyContent {
  eyebrow: string
  title: string
  impact: string
  meta: CaseStudyMeta[]
  sections: CaseStudySection[]
}

export interface CaseStudy {
  en: CaseStudyContent
  pt: CaseStudyContent
}

// ── Process step ─────────────────────────────────────────────────────────────
export interface ProcessStep {
  num: string
  en: { title: string; desc: string }
  pt: { title: string; desc: string }
}

// ── About stat ────────────────────────────────────────────────────────────────
export interface AboutStat {
  number: string
  sup?: string
  en: string
  pt: string
}
