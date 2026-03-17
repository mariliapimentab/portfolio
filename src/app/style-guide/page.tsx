export default function StyleGuide() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(80px,12vh,120px)]">
        {/* Header */}
        <header className="mb-14">
          <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-gray-brand-400 mb-3">
            Style guide
          </p>
          <h1 className="font-serif text-[clamp(32px,4vw,44px)] font-normal leading-[1.2] tracking-[-0.02em]">
            Colors & Typography
          </h1>
          <p className="mt-4 text-[14px] text-gray-brand-600 max-w-[520px] leading-[1.7]">
            Visual reference of the core colors and type styles used in this portfolio.
            Use this page to check consistency before adjusting sizes or colors.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr] gap-[clamp(40px,6vw,80px)] items-start">
          {/* Colors */}
          <section>
            <h2 className="font-serif text-[22px] font-normal tracking-[-0.01em] mb-6">
              Color palette
            </h2>

            <div className="space-y-5">
              {/* Accent */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-accent shadow-[0_8px_30px_rgba(0,0,0,0.18)]" />
                <div>
                  <div className="text-[13px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-1">
                    Accent
                  </div>
                  <div className="text-[14px] text-ink font-normal">#4427ED</div>
                  <div className="text-[12px] text-gray-brand-600 mt-1">
                    Buttons, highlights, links and important accents.
                  </div>
                </div>
              </div>

              {/* Ink */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-sm bg-ink" />
                <div>
                  <div className="text-[13px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-1">
                    Ink
                  </div>
                  <div className="text-[14px] text-ink font-normal">#0F111B</div>
                  <div className="text-[12px] text-gray-brand-600 mt-1">
                    Primary text and strong headings.
                  </div>
                </div>
              </div>

              {/* Grays */}
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-gray-brand-100 border border-gray-brand-200" />
                  <div>
                    <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-0.5">
                      Gray 100
                    </div>
                    <div className="text-[13px] text-ink">#F8F9FA</div>
                    <div className="text-[11px] text-gray-brand-600 mt-0.5">
                      Soft backgrounds and cards.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-gray-brand-200" />
                  <div>
                    <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-0.5">
                      Gray 200
                    </div>
                    <div className="text-[13px] text-ink">#E1E3E8</div>
                    <div className="text-[11px] text-gray-brand-600 mt-0.5">
                      Dividers and subtle borders.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm" style={{ backgroundColor: '#939AA4' }} />
                  <div>
                    <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-0.5">
                      Gray 400
                    </div>
                    <div className="text-[13px] text-ink">#939AA4</div>
                    <div className="text-[11px] text-gray-brand-600 mt-0.5">
                      Eyebrows, labels and meta text.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm" style={{ backgroundColor: '#444D56' }} />
                  <div>
                    <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-0.5">
                      Gray 600
                    </div>
                    <div className="text-[13px] text-ink">#444D56</div>
                    <div className="text-[11px] text-gray-brand-600 mt-0.5">
                      Body text and long-form copy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="font-serif text-[22px] font-normal tracking-[-0.01em] mb-6">
              Typography
            </h2>

            <div className="space-y-8">
              {/* Display / Hero */}
              <div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-3">
                  Display / Hero
                </div>
                <div className="font-serif text-[clamp(32px,4.8vw,56px)] leading-[1.06] tracking-[-0.02em] text-ink mb-2">
                  Designing products that make <em className="italic text-accent">hard things</em> feel effortless.
                </div>
                <div className="text-[12px] text-gray-brand-600">
                  DM Serif Display · clamp(46px, 6.2vw, 86px) on homepage hero.
                </div>
              </div>

              {/* Section heading */}
              <div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-3">
                  Section heading
                </div>
                <div className="font-serif text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.01em] text-ink mb-1.5">
                  I believe good design is <span className="italic text-accent">invisible</span> — it just feels right.
                </div>
                <div className="text-[12px] text-gray-brand-600">
                  DM Serif Display · clamp(22px, 2.5vw, 30px).
                </div>
              </div>

              {/* Body text */}
              <div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-3">
                  Body text
                </div>
                <p className="text-[15px] text-gray-brand-600 leading-[1.75] font-light max-w-[520px] mb-1.5">
                  I help companies turn complexity into clarity — from discovery to shipped product.
                  This is the base paragraph size used across sections like Hero, About and case studies.
                </p>
                <div className="text-[12px] text-gray-brand-600">
                  DM Sans · 15px · line-height 1.75 · gray-brand-600.
                </div>
              </div>

              {/* Meta / labels */}
              <div>
                <div className="text-[12px] font-medium tracking-[0.08em] uppercase text-gray-brand-400 mb-3">
                  Meta & labels
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[11px] font-normal tracking-[0.14em] uppercase text-gray-brand-400">
                    Product Designer · Brasília, DF, Brazil
                  </p>
                  <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-gray-brand-400">
                    Sports / Endurance · 2026
                  </p>
                  <p className="text-[12px] text-gray-brand-400 tracking-[0.04em]">
                    Product Designer · AI Builder
                  </p>
                </div>
                <div className="mt-2 text-[12px] text-gray-brand-600">
                  DM Sans · 11–12px · uppercase / tracking for tags, years, roles and small labels.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

