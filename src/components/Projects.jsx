import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import ImageCard from './ImageCard'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const projects = [
  
  {
    title: 'E-Commerce Store',
    description: 'Responsive e-commerce platform with cart management, product filtering, and smooth animations.',
    tags: ['React', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/',
    live: 'https://github.com/',
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    emoji: '🛒',
  },
 
  {
    title: 'Quiz Game',
    description: 'A quiz game is an interactive game where players answer questions to test their knowledge on various topics.',
    tags: ['React', 'Tailwind CSS', 'Context API'],
    github: 'https://github.com/piyu6594/Quize_Game.git',
    live: 'https://quize-game-two.vercel.app',
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://img.freepik.com/free-vector/vibrant-game-show-quiz-illustration_1308-181062.jpg?semt=ais_hybrid&w=740&q=80',
    emoji: '🛒',
  },
 
]

/* ── Single project card ── */
function ProjectCard({ project, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="glass rounded-2xl overflow-hidden group border border-white/10 hover:border-purple-500/40 transition-colors duration-500"
    >
      {/* Project image via ImageCard */}
      <ImageCard
        src={project.image}
        alt={project.title}
        title={project.title}
        subtitle={project.tags.join(' · ')}
        aspectRatio="aspect-video"
        rounded="rounded-none"
        overlayContent={
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold text-base">{project.title}</p>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm transition-colors"
              >
                <GithubIcon /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-purple-500/60 hover:bg-purple-500/80 text-white backdrop-blur-sm transition-colors"
              >
                <ExternalLink size={12} /> Live
              </a>
            </div>
          </div>
        }
      />

      {/* Card body */}
      <div className="p-5">
        <div className={`h-0.5 w-12 bg-gradient-to-r ${project.gradient} rounded-full mb-4 group-hover:w-full transition-all duration-500`} />

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full text-purple-300 font-medium"
              style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headRef    = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-0 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Things I've built with passion</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
