import { SiGithub, SiLinkedin, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { INFO } from '../../data/info'

const SOCIAL = [
  { icon: SiGithub,        label: 'GitHub',        href: INFO.github   },
  { icon: SiLinkedin,      label: 'LinkedIn',       href: INFO.linkedin },
  { icon: SiLeetcode,      label: 'LeetCode',       href: INFO.leetcode },
  { icon: SiGeeksforgeeks, label: 'GeeksForGeeks',  href: INFO.gfg      },
]

const QUICK_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Stats',    href: '#stats'    },
  { label: 'Contact',  href: '#contact'  },
]

export default function Footer() {
  return (
    <footer className="bg-forest text-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber flex items-center justify-center">
                <span className="font-serif font-bold text-charcoal text-lg leading-none">
                  {INFO.initials.charAt(0)}
                </span>
              </div>
              <span className="font-serif font-semibold text-xl text-warm-white">
                {INFO.name}
              </span>
            </div>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              An engineer building full-stack apps, integrating ML, and
              obsessing over clean code.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-amber/70 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  
                  <a  href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-amber transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-amber/70 mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                
                <a  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-white/50 hover:text-warm-white transition-colors duration-200 group"
                >
                  <Icon size={15} className="text-amber/50 group-hover:text-amber transition-colors" />
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            © {new Date().getFullYear()} {INFO.name}. Built with React &amp; Tailwind CSS.
          </p>
          <p className="font-mono text-xs text-white/20">
            MERN · Django · ML · Open to opportunities
          </p>
        </div>

      </div>
    </footer>
  )
}