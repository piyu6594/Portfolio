import { useEffect, useRef } from 'react'

export default function Particles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const count = 18
    const particles = []

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 6 + 2
      const left = Math.random() * 100
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 10
      const colors = ['#a855f7', '#ec4899', '#f97316', '#06b6d4', '#10b981']
      const color = colors[Math.floor(Math.random() * colors.length)]

      p.className = 'particle'
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${left}%;
        background: ${color};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: 0.6;
        z-index: 0;
      `
      container.appendChild(p)
      particles.push(p)
    }

    return () => particles.forEach(p => p.remove())
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
}
