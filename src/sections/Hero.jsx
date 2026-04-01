import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { INFO } from '../data/info'
import { useRef } from 'react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-white selection:bg-forest/20"
    >
      {/* 1. GRAIN OVERLAY */}
      <div className="absolute inset-0 z-[1] opacity-[0.4] pointer-events-none mix-blend-multiply" 
           style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}></div>

      {/* ── Background decoration ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Massive Ambient Glows (Forest Top-Left, Amber Bottom-Right) */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] rounded-full bg-forest/20 blur-[150px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[900px] h-[900px] rounded-full bg-amber/20 blur-[150px]" 
        />
        
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(#2D4030 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT — text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-forest">Open to work</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-serif font-bold text-charcoal leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              Hi, I'm{' '}
              <span className="relative inline-block text-forest italic">
                {INFO.name}
                <motion.svg 
                  viewBox="0 0 300 20" 
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  <path d="M5 15 Q 150 5 295 15" fill="transparent" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.div
              variants={item}
              className="font-sans text-xl text-charcoal-muted mb-6 h-8 flex items-center"
            >
              <span className="mr-3 opacity-70">I specialize in</span>
              <TypeAnimation
                sequence={INFO.roles}
                wrapper="span"
                repeat={Infinity}
                className="text-forest font-bold border-b-2 border-amber/30"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="font-sans text-lg text-charcoal-muted/80 leading-relaxed max-w-md mb-10"
            >
              {INFO.tagline}
            </motion.p>

            {/* ── Restructured Button Group ── */}
            <motion.div variants={item} className="flex flex-col items-start gap-5">
              
              {/* Primary Buttons Row */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="btn-amber group shadow-lg shadow-amber/20 hover:shadow-amber/40 transition-all">
                  View My Projects 
                  <span className="inline-block ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                </a>
                <a href="#contact" className="px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-charcoal font-semibold hover:bg-white/70 transition-all flex items-center gap-2 group shadow-sm">
                  Let's Talk 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Secondary Download Resume Pill */}
              <a 
  href={INFO.resume} 
  download="My_Resume.pdf" // This forces the download
  className="w-fit flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-warm-white font-sans font-semibold text-sm hover:bg-forest/90 hover:shadow-lg hover:-translate-y-0.5 transition-all group mt-2"
>
  Download Resume 
  <span className="inline-block group-hover:translate-y-0.5 transition-transform">↓</span>
</a>

            </motion.div>
          </motion.div>

          {/* ── RIGHT — Image Container ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative">
              
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-40px] rounded-full border border-dashed border-amber/30"
              />

              {/* Profile Image Container */}
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-10">
                <div className="absolute inset-0 bg-forest rounded-[2rem] rotate-6" />
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-warm-white border-2 border-charcoal shadow-2xl transition-transform hover:rotate-0 duration-500 cursor-pointer -rotate-3">
                   <img 
                    src="/profile.png" 
                    alt={INFO.name} 
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-charcoal/50 to-transparent relative">
          <motion.div 
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-forest rounded-full"
          />
        </div>
        <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-charcoal-muted uppercase italic">
          Keep Exploring
        </span>
      </motion.div>
    </section>
  )
}