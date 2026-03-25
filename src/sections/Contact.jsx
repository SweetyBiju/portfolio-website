import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { INFO } from '../data/info'
import RevealWrapper from '../components/animations/RevealWrapper'

const CONTACT_LINKS = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: INFO.email,
    href: `mailto:${INFO.email}`,
  },
  {
    icon: SiLinkedin,
    label: 'LinkedIn',
    value: INFO.linkedin.replace('https://', ''),
    href: INFO.linkedin,
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: INFO.github.replace('https://', ''),
    href: INFO.github,
  },
]

// ── Shared input class ────────────────────────────────────────────────────────
const inputClass =
  'w-full font-sans text-sm text-charcoal bg-warm-white border border-warm-gray rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-forest focus:ring-2 focus:ring-forest/10 placeholder:text-charcoal-muted/40'

// ── Section ───────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      // ── Replace this block with EmailJS or your backend call ──────────────
      // Example with EmailJS:
      // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
      //
      // Example with fetch to your backend:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
      //
      // For now simulating a delay:
      await new Promise((res) => setTimeout(res, 1200))
      // ─────────────────────────────────────────────────────────────────────
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-36 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT — info ── */}
          <div>
            <RevealWrapper>
              <div className="section-label mb-5">Get In Touch</div>
            </RevealWrapper>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold text-charcoal leading-tight mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
            >
              Let's build something{' '}
              <em className="text-forest not-italic">great together</em>
            </motion.h2>

            <RevealWrapper delay={0.1}>
              <p className="font-sans text-base text-charcoal-muted leading-relaxed mb-10">
                Whether you're looking for an intern, want to collaborate on a
                project, or just want to say hi — my inbox is always open. I'll
                get back to you within 24 hours.
              </p>
            </RevealWrapper>

            {/* Contact links */}
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }, i) => (
                <RevealWrapper key={label} delay={0.15 + i * 0.08}>
                  
                  <a  href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-warm-gray hover:border-forest hover:bg-warm-cream transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center text-forest text-lg transition-all duration-300 group-hover:bg-forest group-hover:text-amber flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-charcoal-muted uppercase tracking-widest">
                        {label}
                      </p>
                      <p className="font-sans font-medium text-sm text-charcoal">
                        {value}
                      </p>
                    </div>
                    <span className="ml-auto text-charcoal-muted group-hover:text-forest transition-colors text-sm">
                      ↗
                    </span>
                  </a>
                </RevealWrapper>
              ))}
            </div>
          </div>

          {/* ── RIGHT — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-warm-cream rounded-3xl border border-warm-gray p-8">
              <h3 className="font-serif font-semibold text-charcoal text-xl mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted mb-1.5 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted mb-1.5 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Internship / Collab / Just saying hi"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-charcoal-muted mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-amber justify-center mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                {/* Feedback */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-sans text-sm text-green-700 text-center bg-green-50 border border-green-200 px-4 py-3 rounded-xl"
                  >
                    ✓ Message sent! I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-sans text-sm text-red-700 text-center bg-red-50 border border-red-200 px-4 py-3 rounded-xl"
                  >
                    ✗ Something went wrong. Please email me directly.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}