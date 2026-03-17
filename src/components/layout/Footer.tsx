'use client'

export function Footer() {
  return (
    <footer className="border-t border-gray-brand-200 py-8">
      <div className="max-w-container mx-auto px-[clamp(24px,5vw,80px)] flex items-center justify-between">
        <span className="text-[13px] text-gray-brand-400 font-normal tracking-[0.01em]">
          Marília Pimenta · Product Designer
        </span>
        <span className="text-[12px] text-gray-brand-400 tracking-[0.04em]">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
