'use client'

import { createContext, useContext, useState, useCallback, useTransition, type ReactNode } from 'react'
import type { Lang } from '@/types'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  isPending: boolean
  t: (en: string, pt: string) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [isPending, startTransition] = useTransition()

  const setLang = useCallback((next: Lang) => {
    startTransition(() => setLangState(next))
  }, [])

  const t = useCallback(
    (en: string, pt: string) => (lang === 'en' ? en : pt),
    [lang],
  )

  return (
    <LangContext.Provider value={{ lang, setLang, isPending, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
