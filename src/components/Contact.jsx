import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

/* WhatsApp number */
const WA_NUMBER = '918460047358'

/* WhatsApp SVG icon */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'piyuptl6594@gmail.com', href: 'mailto:piyuptl6594@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8460047358', href: 'tel:+918460047358' },
  { icon: MapPin, label: 'Location', value: 'Gujarat, India', href: '#' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/', label: 'GitHub', color: 'hover:bg-gray-700' },
  { icon: LinkedinIcon, href: 'https://linkedin.com/', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: TwitterIcon, href: 'https://twitter.com/', label: 'Twitter', color: 'hover:bg-sky-500' },
  { icon: InstagramIcon, href: 'https://instagram.com/', label: 'Instagram', color: 'hover:bg-pink-600' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  /* Build WhatsApp URL and open it */
  const handleSubmit = (e) => {
    e.preventDefault()

    const text = [
      `👋 *New Message from Portfolio*`,
      ``,
      `*Name:* ${form.name}`,
      `*Email:* ${form.email}`,
      ``,
      `*Message:*`,
      form.message,
    ].join('\n')

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank')

    setForm({ name: '', email: '', message: '' })
  }

  const fadeLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
  const fadeRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } }
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Let's work together on something amazing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Left: contact info ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <div className="glass rounded-2xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3">Let's Talk</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Have a project in mind or just want to say hi? Fill in the form and hit{' '}
                <span className="text-green-400 font-semibold">Send on WhatsApp</span> — I'll receive it instantly.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                You can also{' '}
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-green-400 font-semibold hover:text-green-300 transition-colors duration-200"
                >
                  <WhatsAppIcon />
                  connect with me directly on WhatsApp
                </a>
                . I typically reply within a few hours — whether it's a quick question, a project idea, or just a hello, I'd love to hear from you! 🙌
              </p>

              {/* Contact info rows */}
              <div className="space-y-3 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors shrink-0">
                      <Icon size={18} className="text-purple-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                      <p className="text-white font-medium text-sm truncate">{value}</p>
                    </div>
                  </a>
                ))}
              </div>


              <div>

              </div>

            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit → WhatsApp */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-3
                  bg-gradient-to-r from-green-500 to-emerald-500
                  hover:from-green-400 hover:to-emerald-400
                  shadow-lg shadow-green-500/30 hover:shadow-green-500/50
                  transition-shadow duration-300"
              >
                <WhatsAppIcon />
                Send on WhatsApp
              </motion.button>

              <p className="text-center text-xs text-gray-500">
                Clicking will open WhatsApp with your message pre-filled
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
