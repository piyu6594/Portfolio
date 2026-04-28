import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Reusable ImageCard with:
 * - 3D tilt on mouse move
 * - Scale + brightness hover
 * - Gradient overlay with text on hover
 * - Glassmorphism border
 * - Blur-up skeleton loader
 */
export default function ImageCard({
  src,
  alt,
  title,
  subtitle,
  className = '',
  aspectRatio = 'aspect-square',
  overlayContent,
  rounded = 'rounded-2xl',
}) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const { left, top, width, height } = card.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 18
    const y = ((e.clientY - top) / height - 0.5) * -18
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={`relative overflow-hidden ${rounded} ${aspectRatio} ${className}
        border border-white/10 shadow-xl shadow-black/40
        hover:border-purple-500/50 hover:shadow-purple-500/20
        transition-shadow duration-500 cursor-pointer`}
    >
      {/* Skeleton loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out
          ${hovered ? 'scale-110 brightness-75' : 'scale-100 brightness-100'}
          ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Gradient overlay — always subtle, stronger on hover */}
      <div className={`absolute inset-0 transition-opacity duration-500
        bg-gradient-to-t from-black/80 via-black/20 to-transparent
        ${hovered ? 'opacity-100' : 'opacity-40'}`}
      />

      {/* Hover content */}
      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 16 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col justify-end p-5"
      >
        {overlayContent ?? (
          <>
            {title && <p className="text-white font-bold text-lg leading-tight">{title}</p>}
            {subtitle && <p className="text-purple-300 text-sm mt-1">{subtitle}</p>}
          </>
        )}
      </motion.div>

      {/* Glassmorphism shine edge */}
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10 pointer-events-none" />
    </motion.div>
  )
}
