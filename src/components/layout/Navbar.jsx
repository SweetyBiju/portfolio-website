import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { INFO } from '../../data/info'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  // Updated NavLinks to include Certifications
  const navLinks = [
    ...INFO.navLinks,
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (label) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto transition-all duration-500 ease-in-out px-6 py-2 rounded-full border flex items-center justify-between
            ${scrolled 
              ? 'w-[92%] md:w-[700px] bg-warm-white/70 backdrop-blur-xl border-forest/5 shadow-lg shadow-forest/5' 
              : 'w-full max-w-7xl bg-transparent border-transparent'
            }`}
        >
          {/* ── Logo ── */}
          <a
            href={INFO.github}
            className="flex items-center gap-2.5 group shrink-0"
            onClick={() => setActive('')}
            target='_blank'
            rel="noreferrer"
          >
            <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-amber font-serif font-bold text-sm leading-none">
                {INFO.initials.charAt(0)}
              </span>
            </div>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  /* Changed text-[10px] to text-xs */
                  className={`relative font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-200 group ${
                    active === link.label
                      ? 'text-forest'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {link.label}
                  <motion.span
                    layoutId="pill-underline"
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber rounded-full ${
                      active === link.label ? 'w-full' : 'w-0 group-hover:w-full'
                    } transition-all duration-300`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-forest/5 transition-colors"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-charcoal"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-4 h-0.5 bg-charcoal"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-4 h-0.5 bg-charcoal"
            />
          </button>
        </motion.nav>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 flex justify-center px-6 md:hidden"
          >
            <div className="w-full bg-warm-white/80 backdrop-blur-2xl border border-forest/10 rounded-3xl shadow-2xl p-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => handleNavClick(link.label)}
                      /* Changed text-[10px] to text-xs here as well */
                      className="flex items-center justify-between py-4 px-4 font-sans font-bold text-xs uppercase tracking-widest text-charcoal hover:bg-forest/5 rounded-2xl transition-all"
                    >
                      {link.label}
                      <span className="text-amber">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}