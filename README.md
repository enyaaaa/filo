# Filo Print: Group Project Website

A static website built with plain HTML and CSS (no JavaScript) for Filo Print, a concept 3D printing brand. Filo Print sells the Filo One printer with filament included, PLA+ refills, a free Refill Plan and a Weekly Print Challenge, with Refila as its (fictional) recycling partner.

**Business model:** the printer gets people started; the filament brings the repeat sales. Every kit ships with filament, the Weekly Challenge gives people a reason to print every week, the Refill Plan turns reorders into a monthly habit, and Refila returns earn points towards the next roll.

## Pages (11 content pages + support pages)

| #   | File           | Page                                          | Suggested owner    |
| --- | -------------- | --------------------------------------------- | ------------------ |
| 1   | index.html     | Home                                          | Project Manager    |
| 2   | printer.html   | Filo One printer (hero product, specs)        | Designer/Developer |
| 3   | bundles.html   | Printer kits, Refill Plan, filament packs     | Designer/Developer |
| 4   | product.html   | PLA+ filament refills (colour picker)         | Designer/Developer |
| 5   | guide.html     | Kit Finder, print settings, FAQ               | Designer/Developer |
| 6   | challenge.html | Weekly Print Challenge + stamp card           | Copywriter         |
| 7   | projects.html  | Projects & free models (filterable)           | Copywriter         |
| 8   | refila.html    | Refila recycling partnership                  | Copywriter         |
| 9   | rewards.html   | Filo Rewards                                  | Copywriter         |
| 10  | about.html     | Our story                                     | Project Manager    |
| 11  | join.html      | Sign-up form (CTA, Refill Plan, PDPA consent) | Project Manager    |
| –   | privacy.html   | Privacy Policy (PDPA)                         | –                  |
| –   | team.html      | Group number, names, emails                   | –                  |
| –   | thank-you.html | Form confirmation                             | –                  |

## Before submitting: things to edit

1. **sitemap.xml / robots.txt**: replace `YOUR-USERNAME` (and `filo` if your repo name differs).
1. **team.html**: replace `[XX]`, `[TG]`, teammate names and all emails (they must match your contribution matrix).
1. **join.html**: replace `YOUR-TEAM-EMAIL@example.com` in the form `action` with your team's email, and set `_next` to your live `thank-you.html` URL. The first submission triggers a FormSubmit activation email. Click the link in it to activate.
1. **Shopee links**: every Shopee button opens a Shopee Singapore search for
   "Filo One" with UTM tags (`utm_campaign` shows which button was clicked).
   If you get a real listing, find-and-replace `https://https://shopee.sg/product/881733363/52055703982??keyword=filo%20one%203d%20printer`
   with your product URL.
1. Update the page owners in team.html if you split pages differently.

## Interactivity (CSS-only)

- Product configurator (product.html): colour rail that recolours the spool, diameter and weight selectors (price updates), spec bars
- Two-question Kit Finder with six live recommendations (guide.html)
- Project gallery filter (projects.html)
- Tabs (refila.html), FAQ accordions, mobile hamburger menu, hover spin on spools, Weekly Challenge stamp card (challenge.html)
- Light and dark themes (warm sand + graphite): follows the visitor's system setting; the sun/moon button in the header switches theme. The choice applies to the current page only, because remembering it across pages would need JavaScript.

These use the CSS `:has()` selector, which is supported by current versions of Chrome, Edge, Safari and Firefox.

## Deploy to GitHub Pages

1. Create a public repo (e.g. `filo`) and upload everything in this folder. `index.html` must be at the root.
2. Go to Settings → Pages → Source: _Deploy from a branch_ → `main` / `root` → Save.
3. Your site will be live at `https://<username>.github.io/filo/` within a minute or two.
