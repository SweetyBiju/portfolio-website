import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiGithub } from 'react-icons/si'
import { HiOutlineExternalLink } from 'react-icons/hi'

import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects'
import RevealWrapper from '../components/animations/RevealWrapper'
import { INFO } from '../data/info'

// Wrapped in forwardRef to fix the React warning
const ProjectCard = forwardRef(({ project, index }, ref) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  // Combine refs so both Framer Motion and react-intersection-observer work
  const setRefs = (node) => {
    inViewRef(node)
    if (typeof ref === 'function') ref(node)
    else if (ref) ref.current = node
  }

  return (
    <motion.article
      ref={setRefs}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card flex flex-col overflow-hidden"
    >
      {/* Thumbnail Banner */}
      <div className="relative h-48 bg-forest flex items-center justify-center overflow-hidden flex-shrink-0 group">
        
        {project.media ? (
          project.media.type === 'video' ? (
            <video
              src={project.media.url}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <img
              src={project.media.url}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
            />
          )
        ) : (
          <>
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-amber/10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />
            <span
              className="relative font-serif font-bold text-amber/70 select-none"
              style={{ fontSize: '5rem', lineHeight: 1 }}
            >
              {project.title.charAt(0)}
            </span>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none" />

        {project.featured && (
          <span className="absolute top-3 left-3 font-sans text-[10px] font-semibold text-charcoal bg-amber px-2.5 py-1 rounded-full z-10 shadow-sm">
            Featured
          </span>
        )}

        <span className="absolute top-3 right-3 font-mono text-[10px] text-white/90 bg-black/30 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full z-10">
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <span className="tag w-fit mb-2">{project.category}</span>

        <h3 className="font-serif font-bold text-charcoal text-2xl leading-snug mb-2">
          {project.title}
        </h3>
        <p className="font-sans text-sm font-medium text-charcoal-muted mb-3">
          {project.tagline}
        </p>
        <p className="font-sans text-base text-charcoal-muted leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="tag-amber">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-5 border-t border-warm-gray">
          {project.github && (
            <a href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm px-5 py-2 flex items-center gap-2"
            >
              <SiGithub size={16} />
              GitHub
            </a>
          )}
          {project.live && project.live !== '#' && (
            <a href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber text-sm px-5 py-2 flex items-center gap-2"
            >
              <HiOutlineExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
})

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 lg:py-36 bg-warm-cream">
      {/* CHANGED: max-w-7xl -> max-w-screen-2xl
        CHANGED: px-12 -> px-8
      */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">

        {/* Heading + filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <RevealWrapper>
              <div className="section-label mb-4">Selected Work</div>
            </RevealWrapper>
            <RevealWrapper delay={0.1}>
              <h2
                className="font-serif font-bold text-charcoal leading-tight"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
              >
                Projects I've{' '}
                <em className="text-forest not-italic">built</em>
              </h2>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={0.15}>
            <div className="flex flex-wrap gap-2.5">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-200 ${
                    active === cat
                      ? 'bg-forest text-warm-white border-forest'
                      : 'bg-transparent text-charcoal-muted border-warm-gray hover:border-forest hover:text-forest'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Grid: Added lg:gap-10 to give the wider cards more breathing room */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <RevealWrapper delay={0.2}>
          <div className="text-center mt-16">
            <a href={INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-6 py-3"
            >
              <SiGithub size={18} />
              View all on GitHub
            </a>
          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}