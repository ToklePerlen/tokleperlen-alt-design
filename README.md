# NO*Tokleperlen — alternative design testsite

A standalone, static visual testsite exploring an **alternative look** for the
NO\*Tokleperlen cattery site. It is a design/photography study, **not** the
production site — the live cattery site is the Hugo build in `../TokelePerlen`.
This site also hosts the Sibirposten magazine concept pages and draft PDFs.

## Identity

| | |
|---|---|
| Local folder | `Tokle/tokleperlen-alt-design` |
| GitHub repo | `ToklePerlen/tokleperlen-alt-design` (was `espensev/agytokle`, renamed + moved 2026-06-21) |
| Live URL | `https://tokleperlen.github.io/tokleperlen-alt-design/` (GitHub Pages, public) |
| Magazine surface | `https://tokleperlen.github.io/tokleperlen-alt-design/magazine/` |
| Role | Alt-design / photography study + Sibirposten concept preview |

## Source files

- `index.html`, `style.css`, `main.js`, `assets/` — the static testsite
- `magazine/`, `output/` — Sibirposten concept pages and generated drafts

## Org migration (done 2026-06-21)

Previously `espensev/agytokle`. Renamed to `tokleperlen-alt-design` and moved into
the `ToklePerlen` org as part of the family migration, so its live Pages URL changed
from `espensev.github.io/agytokle/` to `tokleperlen.github.io/tokleperlen-alt-design/`.
See `../TOKLE-FAMILY-EVAL-AND-EXPANSION-2026-06-21.md`.

⚠ This site is currently **indexable** (no `noindex`), while it shares
`NO*Tokleperlen` branding with the real site — a possible search-duplication risk.
Decide whether to `noindex` it or keep it as a public showcase.

## Relationship to the rest of the family

- Production cattery site → `../TokelePerlen` (Hugo, on `www.tokleperlen.com`).
- Backend Workers → `../tokleperlen-backend`.
- Design/typography comparison vs the Hugo site → the
  `alternative-testsite-review-2026-06-19.md` ops note (moved to
  `../../Sevnet/sevnet-siri/docs/ops/`).
