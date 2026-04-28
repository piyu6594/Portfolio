import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'

const roles = ['Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'Web Designer']

/* ── Social SVG icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const socials = [
  { icon: GithubIcon,   href: 'https://github.com/',    label: 'GitHub',    color: 'hover:text-white' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/',  label: 'LinkedIn',  color: 'hover:text-blue-400' },
]

/* ── Animated avatar with 3D tilt ── */
function AvatarFrame() {
  const frameRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [imgLoaded, setImgLoaded] = useState(false)

  const onMove = (e) => {
    const el = frameRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width  - 0.5) * 20
    const y = ((e.clientY - top)  / height - 0.5) * -20
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={frameRef}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      style={{ transformStyle: 'preserve-3d', perspective: 900 }}
      className="relative w-44 h-44 md:w-56 md:h-56 mx-auto"
    >
      {/* Outer spinning gradient ring */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 animate-spin-slow opacity-70 blur-sm" />

      {/* Static gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[3px]">
        <div className="w-full h-full rounded-full bg-[#0f0f1a] overflow-hidden">
          {/* Skeleton */}
          {!imgLoaded && (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 animate-pulse flex items-center justify-center text-4xl font-bold gradient-text">
              PP
            </div>
          )}
          {/* Actual photo — place your image at public/profile.jpg */}
          <img
            src="/piyu_image.jpeg"
            alt="Priyanka Patel"
            loading="eager"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgLoaded(false)}
            className={`w-full h-full object-cover object-top rounded-full transition-opacity duration-500
              ${imgLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
          />
        </div>
      </div>

      {/* Glow pulse behind avatar */}
      <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse -z-10" />

      {/* Floating badge — available */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
          bg-gradient-to-r from-green-500 to-emerald-400 text-white text-xs font-semibold
          shadow-lg shadow-green-500/30 whitespace-nowrap"
      >
        ✦ Available for work
      </motion.div>
    </motion.div>
  )
}

/* ── Main Hero ── */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed]  = useState('')
  const [typing, setTyping]         = useState(true)

  // Parallax on hero section
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()
  const parallaxY   = useTransform(scrollY, [0, 600], [0, -80])

  // Typing effect
  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? 0 : current.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1)); i++
        if (i === current.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1500) }
      } else {
        setDisplayed(current.slice(0, i - 1)); i--
        if (i === 0) { clearInterval(interval); setRoleIndex(p => (p + 1) % roles.length); setTyping(true) }
      }
    }, typing ? 80 : 50)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  /* stagger variants */
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl" />

      <motion.div
        style={{ y: parallaxY }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto w-full"
      >
        {/* Avatar */}
        <motion.div variants={item} className="mb-10">
          <AvatarFrame />
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="gradient-text">Priyanka Patel</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div variants={item} className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
          <span className="text-purple-400 font-semibold">{displayed}</span>
          <span className="border-r-2 border-purple-400 ml-1 animate-pulse" />
        </motion.div>

        <motion.p variants={item} className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Passionate about crafting beautiful, responsive web experiences with modern technologies.
          Turning ideas into elegant digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30 transition-shadow duration-300 hover:shadow-purple-500/50"
          >
            View My Work
          </motion.a>
          <motion.a
            href="/Resume_Piyu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Priyanka_Patel_Resume.pdf"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full glass border border-purple-500/50 text-white font-semibold hover:border-purple-400 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} /> Download CV
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex justify-center gap-5 mb-16">
          {socials.map(({ icon: Icon, href, label, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 ${color} border border-white/10 hover:border-purple-400/50 transition-colors duration-300`}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          variants={item}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex flex-col items-center text-gray-500 hover:text-purple-400 transition-colors"
        >
          <span className="text-xs mb-1 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  )
}
