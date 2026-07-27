import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BMC_URL, EASE_SLAM, HERO_CTA, HERO_CTA_HINT, HERO_LEAD, HERO_SUB } from '../site'

export default function Hero() {
  const reduced = useReducedMotion()

  const slam = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { y: '45%', opacity: 0 },
          animate: { y: '0%', opacity: 1 },
          transition: { duration: 0.55, delay, ease: EASE_SLAM },
        }

  return (
    <section className="grain relative flex flex-1 flex-col justify-center overflow-hidden bg-paper" aria-labelledby="hero-title">
      <motion.div
        aria-hidden="true"
        className="absolute left-[-20%] top-[8%] h-[58%] w-[150%] -rotate-6 bg-yellow-taxi sm:top-[10%] sm:h-[62%]"
        initial={reduced ? false : { clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.7, ease: EASE_SLAM }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:gap-6">
        <h1
          id="hero-title"
          className="font-display uppercase leading-[0.84] text-ink"
          style={{ fontSize: 'clamp(5.5rem, 17vw, 15rem)' }}
        >
          <motion.span className="block" {...slam(0)}>
            Fuel
          </motion.span>
          <motion.span className="-mr-8 block -rotate-3 pl-[0.5em] sm:-mr-16" {...slam(0.09)}>
            Me<span className="text-red-poster">.</span>
          </motion.span>
        </h1>

        <motion.div className="max-w-md self-end pb-2 lg:justify-self-end" {...slam(0.2)}>
          <p className="text-base font-bold uppercase leading-relaxed tracking-wide sm:text-lg">
            {HERO_LEAD}
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-ink-soft">
            {HERO_SUB}
          </p>

          <motion.a
            href={BMC_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-stretch bg-red-poster text-paper shadow-[6px_8px_0_var(--color-ink)]"
            whileHover={reduced ? undefined : { rotate: -2 }}
            transition={{ duration: 0.25, ease: EASE_SLAM }}
          >
            <span className="px-6 py-4 font-display text-xl uppercase leading-none sm:text-2xl">
              {HERO_CTA}
            </span>
            <span className="flex items-center bg-ink px-4" aria-hidden="true">
              <ArrowRight className="size-6 text-paper" strokeWidth={2.5} />
            </span>
          </motion.a>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {HERO_CTA_HINT}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
