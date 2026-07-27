import { motion, useReducedMotion } from 'framer-motion'
import { DEFAULT_TAGLINE, EASE_SLAM } from '../site'
import type { PaymentSection } from '../payments'
import WalletStrip from './WalletStrip'

const TONES = {
  worn: {
    section: 'bg-paper-worn text-ink',
    accent: 'text-red-deep',
    tagline: 'text-ink-soft',
  },
  ink: {
    section: 'bg-ink text-paper',
    accent: 'text-yellow-taxi',
    tagline: 'text-paper-dim',
  },
} as const

export default function Wall({ section, index }: { section: PaymentSection; index: number }) {
  const reduced = useReducedMotion()
  const tone = TONES[index % 2 === 0 ? 'worn' : 'ink']
  const titleId = `wall-${index}-title`
  const [lineOne, lineTwo] = section.headline ?? [section.title, '']

  return (
    <section className={`grain torn-top py-20 sm:py-24 ${tone.section}`} aria-labelledby={titleId}>
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.h2
          id={titleId}
          className="font-display uppercase leading-[0.86]"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
          initial={reduced ? false : { y: 32 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 0.55, ease: EASE_SLAM }}
        >
          {lineOne}
          {lineTwo && (
            <span className={`mt-1 block -rotate-2 pl-[0.4em] ${tone.accent}`}>
              {lineTwo}
            </span>
          )}
        </motion.h2>

        <p className={`mt-6 max-w-xl text-sm font-bold uppercase leading-relaxed tracking-wide ${tone.tagline}`}>
          {section.tagline ?? DEFAULT_TAGLINE}
        </p>

        <ul className="mt-12 flex flex-col gap-5">
          {section.items.map((item, itemIndex) => (
            <WalletStrip key={item.label} wallet={item} index={itemIndex} />
          ))}
        </ul>
      </div>
    </section>
  )
}
