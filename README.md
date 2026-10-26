# Filo: Group Project Website

A static website built with plain HTML and CSS (no JavaScript) for the Filo PLA+ filament concept brand, with Refila as its (fictional) recycling partner.

## Pages (9 content pages + support pages)

| # | File | Page | Suggested owner |
|---|------|------|-----------------|
| 1 | index.html | Home | Project Manager |
| 2 | product.html | PLA+ Filament (hero product, colour picker) | Designer/Developer |
| 3 | bundles.html | Bundles + comparison table | Designer/Developer |
| 4 | guide.html | Filament Finder, compatibility, FAQ | Designer/Developer |
| 5 | projects.html | Projects & free models (filterable) | Copywriter |
| 6 | refila.html | Refila recycling partnership | Copywriter |
| 7 | rewards.html | Filo Rewards | Copywriter |
| 8 | about.html | Our story | Project Manager |
| 9 | join.html | Sign-up form (CTA + PDPA consent) | Project Manager |
| – | privacy.html | Privacy Policy (PDPA) | – |
| – | team.html | Group number, names, emails | – |
| – | thank-you.html | Form confirmation | – |

## Before submitting: things to edit

1. **sitemap.xml / robots.txt**: replace `YOUR-USERNAME` (and `filo` if your repo name differs).
1. **team.html**: replace `[XX]`, `[TG]`, teammate names and all emails (they must match your contribution matrix).
2. **join.html**: replace `YOUR-TEAM-EMAIL@example.com` in the form `action` with your team's email, and set `_next` to your live `thank-you.html` URL. The first submission triggers a FormSubmit activation email. Click the link in it to activate.
3. **Shopee links**: every button points to `https://shopee.sg/` with UTM tags. If you have a real listing, find-and-replace `https://shopee.sg/?` with your product URL followed by `?`.
4. Update the page owners in team.html if you split pages differently.

## Interactivity (CSS-only)

- Product configurator (product.html): colour rail that recolours the spool, diameter and weight selectors (price updates), spec bars
- Two-question Filament Finder with live recommendation (guide.html)
- Project gallery filter (projects.html)
- Tabs (refila.html), FAQ accordions, mobile hamburger menu, hover spin on spools
- Light and dark themes (warm sand + graphite): follows the visitor's system setting; the sun/moon button in the header switches theme. The choice applies to the current page only, because remembering it across pages would need JavaScript.

These use the CSS `:has()` selector, which is supported by current versions of Chrome, Edge, Safari and Firefox.

## Deploy to GitHub Pages

1. Create a public repo (e.g. `filo`) and upload everything in this folder. `index.html` must be at the root.
2. Go to Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save.
3. Your site will be live at `https://<username>.github.io/filo/` within a minute or two.

