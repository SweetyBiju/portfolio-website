import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiGithub, SiLeetcode, SiHackerrank } from 'react-icons/si'
import { INFO } from '../data/info'
import RevealWrapper from '../components/animations/RevealWrapper'
import { HiFire, HiCalendar, HiTrendingUp, HiStar, HiLightningBolt } from 'react-icons/hi'

// ── Platform Card Base ────────────────────────────────────────────────────────
function PlatformCard({ icon: Icon, title, handle, link, children, footer, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8"
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center text-amber">
              <Icon size={24} />
            </div>
            <div>
              <div className="font-serif font-bold text-warm-white text-xl leading-none">
                {title}
              </div>
              <div className="font-mono text-xs text-white/40 mt-1.5">
                @{handle}
              </div>
            </div>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-amber/60 hover:text-amber transition-colors">
            Profile ↗
          </a>
        </div>

        <div className="mb-6">
          {children}
        </div>
      </div>

      {footer && (
        <div className="pt-5 border-t border-white/10 flex items-center justify-between font-mono text-xs sm:text-sm text-white/60">
          {footer}
        </div>
      )}
    </motion.div>
  )
}

// ── Helpers for Star Ratings ──────────────────────────────────────────────────
function StarRow({ skill, stars }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="font-sans text-base text-white/80">{skill}</span>
      <div className="flex gap-1 text-amber">
        {[...Array(5)].map((_, i) => (
          <HiStar key={i} size={18} className={i < stars ? "opacity-100" : "opacity-20"} />
        ))}
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Stats() {
  return (
    <section id="stats" className="py-12 lg:py-20 bg-forest relative overflow-hidden">
      {/* Container is wide to reduce margin, matching Certifications */}
      <div className="relative max-w-screen-2xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <RevealWrapper>
            <h2 className="font-serif font-bold text-warm-white text-4xl lg:text-5xl leading-tight">
              <em className="text-amber not-italic">.__</em>Coding Stats<em className="text-amber not-italic">__.</em>
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* GITHUB */}
          <PlatformCard icon={SiGithub} title="GitHub" handle={INFO.githubUsername} link={INFO.github} index={0}>
            <div className="flex justify-center gap-10 py-6">
              <div className="text-center">
                <div className="font-serif font-bold text-5xl text-amber mb-2">10+</div>
                <div className="font-sans text-xs tracking-widest uppercase text-white/40">Repositories</div>
              </div>
              <div className="text-center">
                <div className="font-serif font-bold text-5xl text-amber mb-2">100+</div>
                <div className="font-sans text-xs tracking-widest uppercase text-white/40">Commits</div>
              </div>
            </div>
          </PlatformCard>

          {/* LEETCODE */}
          <PlatformCard 
            icon={SiLeetcode} title="LeetCode" handle={INFO.leetcodeUsername} link={INFO.leetcode} index={1}
            footer={
              <>
                <div className="flex items-center gap-1.5"><HiFire className="text-orange-500" size={16}/> Streak <strong className="text-white">50</strong></div>
                <div className="flex items-center gap-1.5"><HiCalendar className="text-blue-400" size={16}/> Active <strong className="text-white">112</strong></div>
                <div className="flex items-center gap-1.5"><HiTrendingUp className="text-green-400" size={16}/> Rank <strong className="text-white">900K</strong></div>
              </>
            }
          >
            <div className="text-center mb-6">
              <div className="font-serif font-bold text-6xl text-amber mb-1">127</div>
              <div className="font-sans text-xs tracking-widest uppercase text-white/40">Problems Solved</div>
            </div>
            <div className="flex justify-center gap-3 font-sans text-sm font-medium">
              <div className="px-4 py-1.5 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">Easy 90</div>
              <div className="px-4 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Med 31</div>
              <div className="px-4 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">Hard 6</div>
            </div>
          </PlatformCard>

          {/* HACKERRANK */}
          <PlatformCard 
            icon={SiHackerrank} title="HackerRank" handle={INFO.hackerrankUsername} link={INFO.hackerrank} index={2}
            footer={
              <>
                <div className="flex items-center gap-2"><HiLightningBolt className="text-amber" size={16}/> 5★ Python Track</div>
                <div className="flex items-center gap-2"><HiLightningBolt className="text-amber" size={16}/> 3★ Problem Solving</div>
              </>
            }
          >
            <div className="flex flex-col gap-2 pt-2">
              <StarRow skill="Problem Solving" stars={3} />
              <StarRow skill="Python" stars={5} />
              <StarRow skill="C" stars={3} />
            </div>
          </PlatformCard>

        </div>
      </div>
    </section>
  )
}