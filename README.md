# Fuel Me

A single-page donation site with the energy of a street poster — wood-type headlines, taxi-yellow bands and wheat-pasted payment strips. Built with Vite, React, TypeScript, Tailwind CSS v4 and Framer Motion, deployed to GitHub Pages.

- **One loud primary action** — a Buy Me a Coffee button front and center.
- **Dynamic payment walls** — any number of sections (mobile banking, bank, crypto, anything), each with any number of items, defined in one typed config file. Nested field lists (account no, routing no, branch…) are supported per item.
- **One-click copy** with a success state, plus a **scannable QR code** generated on the fly for every item — no image assets needed.
- **Show only what you provide** — the page renders exactly the sections and items in your config; nothing else exists on the page or in the compiled bundle.
- No backend, no env vars, no secrets, no trackers. Fork, edit two files, deploy.

## Quick start

```bash
npm install
npm run dev
```

## Make it yours

Two files to edit, both in `src/`:

### 1. Branding & copy — `src/site.ts`

All personal text lives in one constants file. Change the values, nothing else needs touching:

| Constant | What it is |
| --- | --- |
| `BRAND` | Site name in the header |
| `OWNER_NAME`, `OWNER_HANDLE` | Your name / handle in the footer |
| `GITHUB_URL`, `TELEGRAM_URL`, `BMC_URL` | Header links and the coffee button target |
| `HERO_LEAD`, `HERO_SUB` | The thank-you message in the hero |
| `HERO_CTA`, `HERO_CTA_HINT` | Button label and the small line under it |
| `FOOTER_LEFT`, `FOOTER_RIGHT` | Footer lines |
| `DEFAULT_TAGLINE` | Fallback subline for sections that omit `tagline` |

### 2. Payment methods — `src/payments.ts`

One typed array; the file ships with sample data to replace. Each section becomes a poster wall (alternating light/dark); each item becomes a strip with copy + QR.

```ts
export const PAYMENT_SECTIONS: PaymentSection[] = [
  {
    title: 'Mobile banking',
    headline: ['Taka works', 'too.'],
    tagline: 'Pick your lane.',
    items: [
      { label: 'bKash', value: '01700-000000', note: 'Send money — personal', unit: 'number' },
      {
        label: 'Bank',
        fields: [
          { label: 'Account name', value: 'Your Name' },
          { label: 'Account no', value: '1234567890' },
          { label: 'Routing no', value: '123456789' },
        ],
      },
    ],
  },
  {
    title: 'Crypto',
    headline: ['No coffee?', 'Send fuel.'],
    items: [
      { label: 'USDT', value: 'T...', note: 'TRC20 network only' },
      { label: 'ETH', value: '0x...' },
    ],
  },
]
```

Reference — section: `title` (required), `headline` two poster lines (second gets the accent color; falls back to `title`), `tagline` optional subline. Item: `label` plus either `value` or nested `fields`; `note` prints a red warning line; `unit` is the word in the QR caption ("number", "address", "Pay ID"…). Add or remove anything freely — only what you list here exists on the page or in the published JavaScript. Set the array to `[]` for a coffee-button-only page.

## Deploy to GitHub Pages

1. Push this repo to GitHub (default branch `main`). If your repository is **not** named `FuelMe`, update `base` in [vite.config.ts](vite.config.ts) to `'/<your-repo-name>/'`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and publishes automatically.

Everything on the page is public by definition, so committing your payment details to a public repo changes nothing — the site shows them anyway.

## Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with oxlint |

## License

MIT — do whatever keeps your own tank full.
