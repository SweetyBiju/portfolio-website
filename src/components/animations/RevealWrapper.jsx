import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Wrap any element with this to get a scroll-triggered fade-up reveal.
// Usage: <RevealWrapper delay={0.1}> <YourContent /> </RevealWrapper>

export default function RevealWrapper({
  children,
  delay = 0,
  duration = 0.6,
  y = 28,
  className = '',
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
