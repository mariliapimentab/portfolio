'use client'

import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const dotRef  = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const dotPos  = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf     = useRef<number>(0)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // dot: lerp rápido
      dotPos.current.x  += (mouse.current.x - dotPos.current.x)  * 0.45
      dotPos.current.y  += (mouse.current.y - dotPos.current.y)  * 0.45
      // ring: lerp suave original
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.18
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.18

      dot.style.left  = `${dotPos.current.x}px`
      dot.style.top   = `${dotPos.current.y}px`
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top  = `${ringPos.current.y}px`

      raf.current = requestAnimationFrame(animate)
    }

    const expand = () => {
      dot.classList.add('cursor-expand')
      ring.classList.add('cursor-expand')
    }
    const shrink = () => {
      dot.classList.remove('cursor-expand')
      ring.classList.remove('cursor-expand')
    }
    const press   = () => { dot.classList.add('cursor-click');    ring.classList.add('cursor-click') }
    const release = () => { dot.classList.remove('cursor-click'); ring.classList.remove('cursor-click') }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', press)
    document.addEventListener('mouseup',   release)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', press)
      document.removeEventListener('mouseup',   release)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { dotRef, ringRef }
}
