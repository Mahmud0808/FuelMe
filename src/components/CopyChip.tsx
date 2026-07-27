import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import { EASE_SLAM } from '../site'

export default function CopyChip({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)
  const reduced = useReducedMotion()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    let ok = true
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const area = document.createElement('textarea')
      area.value = value
      area.readOnly = true
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      ok = document.execCommand('copy')
      area.remove()
    }
    if (!ok) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 px-4 py-3 font-display text-sm uppercase tracking-wide transition-colors duration-200 ${
        copied ? 'bg-ink text-yellow-taxi' : 'bg-red-deep text-paper hover:bg-red-poster'
      }`}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.2, ease: EASE_SLAM }}
    >
      {copied ? <Check className="size-4" strokeWidth={3} /> : <Copy className="size-4" strokeWidth={2.5} />}
      {copied ? 'Copied' : 'Copy'}
      <span aria-live="polite" className="sr-only">
        {copied ? `${label} copied to clipboard` : ''}
      </span>
    </motion.button>
  )
}
