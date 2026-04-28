import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { User, MapPin, Mail, Phone, Calendar, Code2 } from 'lucide-react'

const info = [
  { icon: User,     label: 'Name',       value: 'Priyanka Patel' },
  { icon: MapPin,   label: 'Location',   value: 'Gujarat, India' },
  { icon: Mail,     label: 'Email',      value: 'piyuptl6594@gmail.com' },
  { icon: Phone,    label: 'Phone',      value: '+91 8460047358' },
  { icon: Calendar, label: 'Experience', value: '6+ Month' },
  { icon: Code2,    label: 'Status',     value: 'Open to Work' },
]

/* ── About photo with tilt + overlay ── */
function AboutPhoto() {
  const frameRef = useRef(null)
  const [tilt, setTilt]       = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [loaded, setLoaded]   = useState(false)

  const onMove = (e) => {
    const el = frameRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width  - 0.5) * 16
    const y = ((e.clientY - top)  / height - 0.5) * -16
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={frameRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 900 }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Decorative blurred blob behind */}
      <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl -z-10" />

      {/* Main image container */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl shadow-purple-900/40">
        {/* Skeleton */}
        {!loaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40 animate-pulse flex items-center justify-center">
            <span className="text-6xl font-bold gradient-text">PP</span>
          </div>
        )}

        {/* Photo */}
        <img
          src="/piyu_image.jpeg"
          alt="Priyanka Patel"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          className={`w-full h-full object-cover object-top transition-all duration-700
            ${hovered ? 'scale-105 brightness-75' : 'scale-100 brightness-100'}
            ${loaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
        />

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 " 
        >
          <p className="text-white font-bold text-xl ml-16 md:ml-42">Priyanka Patel</p>
          <p className="text-purple-300 text-sm mt-1 ml-16 md:ml-42">Frontend Developer</p>
          <div className="flex gap-2 mt-3 ml-16 md:ml-42">
            {['React', 'Tailwind', 'UI/UX'].map(t => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-purple-500/40 text-purple-200 border border-purple-500/30">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Glassmorphism ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
      </div>

      {/* Floating stat cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 shadow-lg border border-purple-500/30"
      >
        <p className="text-xs text-gray-400">Experience</p>
        <p className="text-white font-bold text-lg">6+ Month</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 shadow-lg border border-pink-500/30"
      >
        <p className="text-xs text-gray-400">Projects</p>
        <p className="text-white font-bold text-lg">1+ Done</p>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeLeft  = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
  const fadeRight = { hidden: { opacity: 0, x:  50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
  const fadeUp    = { hidden: { opacity: 0, y:  30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="about" ref={ref} className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Photo */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex justify-center"
          >
            <AboutPhoto />
          </motion.div>

          {/* Right — Text + info cards */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="glass rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">Priyanka</span> 👋
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate Frontend Developer with a love for creating beautiful,
                interactive web experiences. I specialize in React.js and modern CSS frameworks
                to build responsive, user-friendly applications.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                When I'm not coding, I enjoy exploring new design trends, contributing to
                open-source projects, and continuously learning new technologies to stay
                ahead in the ever-evolving web landscape.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                Let's Connect
              </motion.a>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3">
              {info.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(168,85,247,0.5)' }}
                  className="glass rounded-xl p-4 group border border-white/10 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                      <Icon size={16} className="text-purple-400" />
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                  </div>
                  <p className="text-white font-medium text-sm break-words">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
