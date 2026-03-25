import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import RevealWrapper from '../components/animations/RevealWrapper'
import { INFO } from '../data/info'

// ── Education timeline entry ───────────────────────────────────────────────
function TimelineEntry({ edu, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8"
    >
      {/* Vertical line (hidden on last item) */}
      {index < INFO.education.length - 1 && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-warm-gray" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center z-10 ${
          edu.current
            ? 'bg-amber border-amber-dark'
            : 'bg-warm-white border-forest'
        }`}
      >
        {edu.current && (
          <div className="w-2 h-2 rounded-full bg-forest animate-pulse-dot" />
        )}
      </div>

      {/* Card */}
      <div className="card p-5 mb-5">
        {/* Year + current badge */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="font-mono text-[10px] text-charcoal-muted bg-warm-cream border border-warm-gray px-2.5 py-1 rounded-full tracking-wider">
            {edu.year}
          </span>
          {edu.current && (
            <span className="flex items-center gap-1.5 font-sans text-[10px] font-semibold text-forest bg-forest/8 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-dot" />
              Current
            </span>
          )}
        </div>

        {/* Degree */}
        <h4 className="font-serif font-semibold text-charcoal text-base leading-snug mb-1">
          {edu.degree}
        </h4>

        {/* Institution */}
        <p className="font-sans font-semibold text-forest text-sm mb-0.5">
          {edu.institution}
        </p>
        <p className="font-sans text-xs text-charcoal-muted mb-3">
          {edu.location}
        </p>

        {/* Grade highlight */}
        <div className="flex items-center gap-2 bg-amber-muted border border-amber/25 rounded-xl px-3 py-2 w-fit">
          <span className="text-amber-dark text-sm">★</span>
          <span className="font-sans font-semibold text-sm text-charcoal">
            {edu.grade}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Main About section ─────────────────────────────────────────────────────
export default function About() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 lg:py-36 bg-warm-cream">
      {/* Container width and padding updated here */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT — Bio ── */}
          <div>
            <RevealWrapper>
              <div className="section-label mb-5">About Me</div>
            </RevealWrapper>

            <motion.h2
              ref={headingRef}
              initial={{ opacity: 0, y: 24 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-charcoal leading-tight mb-8"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
            >
              Build things. Break things{' '}
              <em className="text-forest not-italic">Figure things out.</em>{' '}
               Repeat.
            </motion.h2>

            {/* Bio paragraphs */}
            <div className="space-y-4 mb-10">
              {INFO.bio.map((para, i) => (
                <RevealWrapper key={i} delay={0.1 + i * 0.1}>
                  <p className="font-sans text-base text-charcoal-muted leading-relaxed">
                    {para}
                  </p>
                </RevealWrapper>
              ))}
            </div>

            {/* CTAs */}
            <RevealWrapper delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-amber">
                  See My Projects
                </a>
                <a href="#contact" className="btn-outline">
                  Get in Touch
                </a>
              </div>
            </RevealWrapper>

            {/* Horizontal rule with label */}
            <RevealWrapper delay={0.4}>
              <div className="flex items-center gap-4 mt-12">
                <div className="h-px flex-1 bg-warm-gray" />
                <span className="font-mono text-[10px] tracking-widest text-charcoal-muted uppercase">
                  what I work with
                </span>
                <div className="h-px flex-1 bg-warm-gray" />
              </div>
            </RevealWrapper>

            {/* Quick skill chips row */}
            <RevealWrapper delay={0.5}>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Python',, 'Django', 'React', 'Node.js', 'MongoDB', 'ML/AI'].map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </RevealWrapper>
          </div>

          {/* ── RIGHT — Education timeline ── */}
          <div>
            <RevealWrapper>
              <div className="section-label mb-8">Education</div>
            </RevealWrapper>

            <div className="relative">
              {INFO.education.map((edu, i) => (
                <TimelineEntry key={i} edu={edu} index={i} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}