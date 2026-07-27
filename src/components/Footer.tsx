import { FOOTER_LEFT, FOOTER_RIGHT, GITHUB_URL, OWNER_HANDLE, OWNER_NAME } from '../site'

export default function Footer() {
  return (
    <footer className="grain torn-top bg-kraft text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs font-bold uppercase tracking-[0.14em] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {FOOTER_LEFT}{' '}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="underline decoration-2 underline-offset-4 hover:text-red-deep">
            {OWNER_NAME} · {OWNER_HANDLE}
          </a>
        </p>
        <p>{FOOTER_RIGHT}</p>
      </div>
    </footer>
  )
}
