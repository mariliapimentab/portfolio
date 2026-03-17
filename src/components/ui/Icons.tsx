interface IconProps {
  className?: string
  size?: number
  strokeWidth?: number
}

export function ArrowIcon({ className = '', size = 14, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M2 12L12 2M12 2H4M12 2v8" stroke="#0F111B" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function CloseIcon({ className = '', size = 14, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M1 1l12 12M13 1L1 13" stroke="#0F111B" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function EmailIcon({ size = 14, strokeWidth = 1.3 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="3" width="12" height="8" rx="1" stroke="#0F111B" strokeWidth={strokeWidth} />
      <path d="M1 4l6 4 6-4" stroke="#0F111B" strokeWidth={strokeWidth} />
    </svg>
  )
}

export function LinkedInIcon({ size = 14, strokeWidth = 1.3 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="12" height="12" rx="2" stroke="#0F111B" strokeWidth={strokeWidth} />
      <circle cx="7" cy="7" r="2.5" stroke="#0F111B" strokeWidth={strokeWidth} />
      <circle cx="10.5" cy="3.5" r="0.7" fill="#0F111B" />
    </svg>
  )
}

export function FileIcon({ size = 14, strokeWidth = 1.3 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 12V3a1 1 0 011-1h6l3 3v7a1 1 0 01-1 1H3a1 1 0 01-1-1z" stroke="#0F111B" strokeWidth={strokeWidth} />
      <path d="M8 2v3h3M4 7h6M4 9.5h4" stroke="#0F111B" strokeWidth={strokeWidth} />
    </svg>
  )
}
