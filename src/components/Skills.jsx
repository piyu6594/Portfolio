import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaReact, FaGithub, FaJava } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss, SiSpringboot } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'REST APIs', level: 70 },
      { name: 'Java', level: 80 },
    ],
  },
]

const techStack = [
  {
    name: 'React',
    icon: FaReact,
    color: 'text-sky-400',
    hoverColor: 'hover:text-sky-300',
    glowColor: 'hover:shadow-sky-400/50',
    borderColor: 'hover:border-sky-400/50',
    spin: true,
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
    hoverColor: 'hover:text-yellow-300',
    glowColor: 'hover:shadow-yellow-400/50',
    borderColor: 'hover:border-yellow-400/50',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-500',
    hoverColor: 'hover:text-blue-400',
    glowColor: 'hover:shadow-blue-500/50',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    hoverColor: 'hover:text-cyan-300',
    glowColor: 'hover:shadow-cyan-400/50',
    borderColor: 'hover:border-cyan-400/50',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    color: 'text-gray-300',
    hoverColor: 'hover:text-white',
    glowColor: 'hover:shadow-gray-400/50',
    borderColor: 'hover:border-gray-400/50',
  },
  {
    name: 'Java',
    icon: FaJava,
    color: 'text-red-500',
    hoverColor: 'hover:text-red-400',
    glowColor: 'hover:shadow-red-500/50',
    borderColor: 'hover:border-red-500/50',
  },
  {
    name: 'Spring Boot',
    icon: SiSpringboot,
    color: 'text-green-500',
    hoverColor: 'hover:text-green-400',
    glowColor: 'hover:shadow-green-500/50',
    borderColor: 'hover:border-green-500/50',
  },
  {
    name: 'VS Code',
    icon: TbBrandVscode,
    color: 'text-blue-400',
    hoverColor: 'hover:text-blue-300',
    glowColor: 'hover:shadow-blue-400/50',
    borderColor: 'hover:border-blue-400/50',
  },
]

function SkillBar({ name, level, color, visible }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} skill-bar`}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

  return (
    <section id="skills" ref={ref} className="py-16 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Technologies I work with</p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.title}
              </h3>
              {cat.skills.map(s => (
                <SkillBar key={s.name} {...s} color={cat.color} visible={inView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Stack with react-icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-center text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className={`
                    relative group
                    bg-slate-800/50 backdrop-blur-sm
                    rounded-xl p-5
                    border border-white/10
                    ${tech.borderColor}
                    shadow-lg ${tech.glowColor}
                    transition-all duration-300 ease-in-out
                    cursor-default
                  `}
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-cyan-500/20 transition-all duration-300 -z-10" />

                  <div className="flex items-center gap-3">
                    <Icon
                      className={`text-3xl ${tech.color} ${tech.hoverColor} transition-colors duration-300 ${
                        tech.spin ? 'spin-react' : ''
                      }`}
                    />
                    <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
