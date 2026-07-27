import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { QrCode, X } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { EASE_SLAM } from '../site'
import type { PaymentItem } from '../payments'
import CopyChip from './CopyChip'

export default function WalletStrip({ wallet, index }: { wallet: PaymentItem; index: number }) {
  const reduced = useReducedMotion()
  const [showQr, setShowQr] = useState(false)
  const tilt = index % 2 === 0 ? -0.6 : 0.6
  const value =
    wallet.fields?.map((field) => `${field.label}: ${field.value}`).join('\n') ?? wallet.value ?? ''

  return (
    <motion.li
      className="list-none bg-paper text-ink shadow-[8px_10px_0_oklch(0.12_0.008_75)]"
      style={{ rotate: tilt }}
      initial={reduced ? false : { y: 22 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '0px 0px -5% 0px' }}
      transition={{ duration: 0.45, delay: reduced ? 0 : index * 0.05, ease: EASE_SLAM }}
    >
      <div className="flex flex-wrap items-stretch gap-x-2">
        <h3 className="flex basis-full items-center bg-ink px-4 py-3 font-display text-base uppercase tracking-wide text-paper sm:min-w-40 sm:basis-auto sm:text-lg">
          {wallet.label}
        </h3>

        <div className="flex min-w-0 flex-1 basis-52 flex-col justify-center gap-1 px-4 py-3">
          {wallet.fields ? (
            <dl className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {wallet.fields.map((field) => (
                <div key={field.label} className="min-w-0">
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                    {field.label}
                  </dt>
                  <dd className="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm font-semibold" title={field.value}>
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm font-semibold" title={value}>
              {value}
            </p>
          )}
          {wallet.note && (
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-red-deep">
              {wallet.note}
            </p>
          )}
        </div>

        <div className="flex basis-full items-center justify-end gap-3 border-t border-dashed border-ink-soft/50 px-4 py-3 sm:basis-auto sm:border-t-0 sm:pl-0">
          <button
            type="button"
            onClick={() => setShowQr((open) => !open)}
            aria-expanded={showQr}
            aria-label={showQr ? `Hide ${wallet.label} QR code` : `Show ${wallet.label} QR code`}
            className={`flex size-11 cursor-pointer items-center justify-center border-2 transition-colors duration-200 ${
              showQr
                ? 'border-ink bg-ink text-yellow-taxi'
                : 'border-ink text-ink hover:bg-yellow-taxi'
            }`}
          >
            {showQr ? <X className="size-5" strokeWidth={2.5} /> : <QrCode className="size-5" strokeWidth={2} />}
          </button>
          <CopyChip value={value} label={wallet.label} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {showQr && (
          <motion.div
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_SLAM }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap items-center justify-center gap-5 border-t-2 border-dashed border-ink-soft px-4 py-5 sm:justify-start sm:px-5">
              <div className="bg-white p-3 shadow-[4px_5px_0_oklch(0.12_0.008_75)]">
                <QRCodeSVG value={value} size={168} marginSize={2} fgColor="#171512" bgColor="#ffffff" />
              </div>
              <p className="max-w-56 text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-ink-soft">
                Scan to get the exact {wallet.label} {wallet.fields ? 'details' : wallet.unit ?? 'address'}
                {wallet.note ? ` — ${wallet.note}` : ''}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}
