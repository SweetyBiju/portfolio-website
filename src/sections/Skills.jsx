import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiDjango, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiPrisma,
  SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiGit, SiGithub, SiPostman, SiFigma,
} from 'react-icons/si'
import {
  TbApi, TbPlugConnected, TbBinaryTree, TbCube,
  TbServer, TbDatabase, TbNetwork, TbLayout,
} from 'react-icons/tb'
import {
  FaCode, FaServer, FaDatabase, FaBrain, FaTools, FaGraduationCap,
} from 'react-icons/fa'

import { SKILLS } from '../data/skills'
import RevealWrapper from '../components/animations/RevealWrapper'

const ICON_MAP = {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiDjango, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiFirebase, SiPrisma,
  SiPython, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter,
  SiGit, SiGithub, SiPostman, SiFigma,
  TbApi, TbPlugConnected, TbBinaryTree, TbCube,
  TbServer, TbDatabase, TbNetwork, TbLayout,
  FaCode, FaServer, FaDatabase, FaBrain, FaTools, FaGraduationCap,
}

function DynIcon({ name, size = 16 }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon size={size} />
}

function SkillCard({ skill, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card bg-warm-white p-6 group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-forest/8 flex items-center justify-center text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-amber">
          <DynIcon name={skill.iconName} size={18} />
        </div>
        <h3 className="font-serif font-semibold text-charcoal text-lg">
          {skill.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span key={item.label} className="skill-pill">
            <DynIcon name={item.icon} size={13} />
            {item.label}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-36 bg-warm-white">
      {/* Container width and padding updated here */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-14">
          <RevealWrapper>
            <div className="section-label mx-auto w-fit mb-5">Technical Skills</div>
          </RevealWrapper>

          <RevealWrapper delay={0.1}>
            <h2
              className="font-serif font-bold text-charcoal leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)' }}
            >
              The toolkit that fuels my {' '}
              <em className="text-forest not-italic">2am coding sprints.</em>
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={0.15}>
            <p className="font-sans text-base text-charcoal-muted mt-4 max-w-xl mx-auto leading-relaxed">
              A curated set of tech I've learnt, used, broken and relearnt along the way.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}