import { BRAND, GITHUB_URL, TELEGRAM_URL } from '../site'

export default function Header() {
  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between px-4 sm:px-8">
        <a
          href="#top"
          className="bg-yellow-taxi px-4 py-3 font-display text-lg uppercase leading-none text-ink"
        >
          {BRAND}
        </a>
        <nav aria-label="Links" className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.14em]">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="py-4 hover:text-yellow-taxi">
            GitHub
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="py-4 hover:text-yellow-taxi">
            Telegram
          </a>
        </nav>
      </div>
    </header>
  )
}
