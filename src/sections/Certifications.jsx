import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineBadgeCheck, HiOutlineExternalLink, HiX } from 'react-icons/hi'
import { INFO } from '../data/info'
import RevealWrapper from '../components/animations/RevealWrapper'

// ── Light Mode Modal ──────────────────────────────────────────────────────────
function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <>
          <motion.div
            key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={onClose}
            className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm"
          />
          <motion.div
            key="modal" initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 24 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-warm-white border border-warm-gray rounded-3xl shadow-2xl w-full max-w-2xl pointer-events-auto overflow-hidden">
              <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-warm-gray">
                <div>
                  <h3 className="font-serif font-bold text-charcoal text-xl leading-snug">{cert.title}</h3>
                  <p className="font-sans text-sm font-medium text-forest mt-0.5">{cert.issuer}</p>
                  <p className="font-mono text-xs text-charcoal-muted mt-0.5">{cert.date}</p>
                </div>
                <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-warm-gray transition-colors flex-shrink-0 mt-0.5">
                  <HiX size={18} className="text-charcoal-muted hover:text-charcoal" />
                </button>
              </div>
              <div className="px-6 py-5 bg-warm-cream flex items-center justify-center min-h-64">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full max-h-80 object-contain rounded-xl" />
                ) : (
                  <div className="flex flex-col items-center gap-3 py-10">
                    <HiOutlineBadgeCheck size={64} className="text-forest/25" />
                    <p className="font-sans text-sm text-charcoal-muted">No preview available</p>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between px-6 py-5 border-t border-warm-gray">
                
                <a href={cert.driveLink} target="_blank" rel="noopener noreferrer" className="font-sans text-sm font-semibold flex items-center gap-2 bg-amber/10 hover:bg-amber/20 text-forest px-4 py-2 rounded-lg transition-colors">
                  <HiOutlineExternalLink size={15} /> Open in Drive
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ── Light Theme Card ──────────────────────────────────────────────────────────
function CertCard({ cert, index, onClick }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} onClick={() => onClick(cert)}
      className="rounded-3xl border border-warm-gray bg-warm-white shadow-sm hover:shadow-card-hover p-5 flex flex-col gap-4 cursor-pointer group transition-all h-full"
    >
      <div className="relative w-full h-40 rounded-xl overflow-hidden bg-warm-cream border border-warm-gray flex items-center justify-center flex-shrink-0">
        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover p-3 transition-transform duration-300 group-hover:scale-105" />
        ) : (
          <HiOutlineBadgeCheck size={48} className="text-forest/25" />
        )}
        <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/5 transition-all duration-300 rounded-xl flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-xs font-semibold text-warm-white bg-forest px-3 py-1.5 rounded-full shadow-lg">
            Click to preview
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-serif font-bold text-charcoal text-base leading-snug mb-1 group-hover:text-forest transition-colors duration-200">
          {cert.title}
        </h3>
        <p className="font-sans text-sm font-medium text-forest mb-0.5">{cert.issuer}</p>
        <p className="font-mono text-xs text-charcoal-muted">{cert.date}</p>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="py-12 lg:py-20 bg-warm-cream relative">
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-8">

        {/* Two-column layout for Desktop */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ── LEFT: CERTIFICATIONS BLOCK ── */}
          <div>
            <RevealWrapper>
              <h2 className="font-serif font-bold text-charcoal text-3xl lg:text-4xl mb-8">
                Courses &amp; <em className="text-forest not-italic">Certifications</em>
              </h2>
            </RevealWrapper>
            {/* Inner grid maxes out at 2 columns so cards stay readable */}
            <div className="grid sm:grid-cols-2 gap-6">
              {INFO.certifications.map((cert, i) => (
                <CertCard key={`cert-${i}`} cert={cert} index={i} onClick={setSelected} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: TRAINING BLOCK ── */}
          {INFO.training && INFO.training.length > 0 && (
            <div>
              <RevealWrapper>
                <h2 className="font-serif font-bold text-charcoal text-3xl lg:text-4xl mb-8">
                  Industrial <em className="text-forest not-italic">Training</em>
                </h2>
              </RevealWrapper>
              <div className="grid sm:grid-cols-2 gap-6">
                {INFO.training.map((train, i) => (
                  <CertCard key={`train-${i}`} cert={train} index={i} onClick={setSelected} />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}