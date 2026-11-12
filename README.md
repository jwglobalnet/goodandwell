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

- Home (`/en/`, `/ja/`, `/ko/`) — hero, figures, products, factory & quality, OEM steps, news, contact
- Products list and detail (`/<lang>/products/`, `/<lang>/products/<id>/`)

Factory & Quality, OEM, News, Contact and About pages are next; for now the menu links to the matching Home sections.
