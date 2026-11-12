# Good&Well website

Astro + Tailwind CSS static site for Jaewon Global Net (Good&Well). See `BRIEF.md` for the full brief.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/en/
npm run build    # outputs dist/
npm run check    # type check
```

## Cloudflare Pages

- Build command: `npm run build` · Output directory: `dist` · Node 22
- Environment variables (see `.env.example`):
  - `PUBLIC_WEB3FORMS_KEY` — contact form key. While empty, the form is disabled and shows a placeholder.
  - `PUBLIC_NOINDEX` — `true` during testing. At launch set `false` and delete `public/_headers`.

## Where things live

| What | File |
| --- | --- |
| Page copy (EN / JA / KO, written separately) | `src/i18n/ui.ts` |
| Products and spec tables | `content/products.json` (`status: "verify"` items are hidden) |
| News (`title`, `date`, `lang`, `summary`) | `content/news/<lang>/*.md` |
| Photos | `assets/` (optimised at build time) |
| Hero video / catalog PDF slots | `heroVideo`, `catalogPdf` in `src/pages/[lang]/index.astro` |
| Spec sheet PDF per product | `specSheet` in `content/products.json` (file in `public/`) |

Unknown values are written as `[확인 필요: ...]`; they render as yellow highlighted tags so nothing ships unnoticed.
Search the repo for `확인 필요` to see what is still open.

## Pages done

Languages: English (`/en/`), French (`/fr/`), Japanese (`/ja/`), Korean (`/ko/`), Simplified Chinese (`/zh/`), Traditional Chinese (`/zh-hant/`, generated from the Simplified copy at build time).

- Home — hero, figures, products, factory & quality, OEM steps, news, contact
- Products list and detail (`/<lang>/products/`, `/<lang>/products/<id>/`)
- Factory & Quality (`/<lang>/factory/`) — 11-step process, raw material, certifications
- About (`/<lang>/about/`) — company, history, brands

OEM, News and Contact live as Home sections for now. Plans for more languages: `docs/language-plan.md`.
