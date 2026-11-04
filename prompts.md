# Filo — Image Generation Style Guide & Prompts

One source of truth for every AI-generated image on the Filo site. If a generated
image doesn't look like it belongs on the page, it was made outside this guide.

---

## 1 · Brand style DNA

Extracted from `css/styles.css` and the site copy:

- **Aesthetic — "Warm tech":** sand + graphite. Friendly, tactile, approachable.
  Never cold, dark or industrial.
- **Backdrop:** seamless warm sand/beige `#E7DDCC`, soft off-white glow behind the
  subject, faint warm-taupe radial vignette.
- **Lighting:** soft diffused window light from the upper left; long, gentle warm-taupe
  shadows; no harsh highlights.
- **Materials:** matte plastic, matte filament, light wood, unglazed ceramic, soft
  rubber. No gloss, no neon.
- **Mood:** calm, cozy, minimal — a Singapore home-maker studio.
- **Composition:** one focal object, generous negative space, shallow depth of field,
  slightly elevated 3/4 angle, centered.
- **Typography (only for graphic/text assets):** Space Grotesk for headings, Inter for
  body, JetBrains Mono for small technical labels.

### Colour palette (exact)

| Role             | Colour          | Hex       |
| ---------------- | --------------- | --------- |
| Backdrop / paper | Warm sand       | `#E7DDCC` |
| Card surface     | Oat cream       | `#FFFDF9` |
| Text / graphite  | Warm ink        | `#1D1B18` |
| Accent           | Warm amber      | `#F0A33A` |
| Filament 1       | Desert Sand     | `#CFA57A` |
| Filament 2       | Oat Milk        | `#ECE2D0` |
| Filament 3       | Sage            | `#9CB39A` |
| Filament 4       | Terracotta Clay | `#C4734F` |
| Filament 5       | Ocean Blue      | `#2A6FB0` |
| Filament 6       | Lilac           | `#A48AD8` |
| Filament 7       | Charcoal Black  | `#2B2F2E` |
| Filament 8       | Silk Gold       | `#E8C27A` |

Dark theme (only if ever generating dark-backdrop assets): paper `#11100E`, card
`#221E1A`, ink `#EFE8DD`.

---

## 2 · MAIN styling prompt

```
Warm-tech product photography in a minimal Singapore home-maker style.
Single hero object centered on a seamless warm sand-beige studio backdrop
(hex #E7DDCC), with a large soft off-white circular glow behind the object
and a faint warm radial vignette. Soft diffused natural window light from
the upper left, gentle long shadows in warm taupe, no harsh highlights.
Materials are matte and tactile: matte plastic, matte filament, soft
rubber, light wood, unglazed ceramic. Exact color palette only — sand
#CFA57A, oat milk #ECE2D0, sage #9CB39A, terracotta #C4734F, ocean blue
#2A6FB0, lilac #A48AD8, charcoal graphite #2B2F2E, silk gold #E8C27A,
warm amber accent #F0A33A, deep warm ink #1D1B18, warm paper #E7DDCC.
Props: compact modern 3D printer with rounded corners and visible filament
spool, filament spools in the palette above, small friendly 3D-printed
objects (dino keychain, ribbed phone stand, fluted pen cup, small plant
planter). Composition: one focal object, generous negative space around
it, shallow depth of field, slightly elevated 3/4 angle, calm and
approachable mood, cozy warm-tech aesthetic, clean, minimal, high detail,
8k, professional studio photography.
```

**Short form:**

```
warm-tech studio product photo, sand-beige seamless backdrop #E7DDCC, matte tactile
materials, filament palette of sand/sage/terracotta/ocean-blue/lilac/charcoal/silk-gold,
soft diffused window light, warm taupe shadows, minimal composition, generous negative
space, shallow DOF, cozy Singapore maker aesthetic
```

---

## 3 · Negative prompt

```
cold blue lighting, neon, glossy plastic glare, harsh shadows, cluttered scene, dark
moody background, industrial warehouse, black backdrop, saturated colors, photorealistic
humans, text, watermark, logos, overexposed highlights
```

---

## 4 · Asset-specific variants

Append these to the MAIN prompt (section 2).

### 4.1 og:image social card — 1200×630 (all pages)

```
...widescreen banner composition, small printer and spool group arranged left, large
empty warm sand area on the right reserved for bold headline text, flat soft light,
no logo mark, graphic-design negative space, centered balance.
```

### 4.2 Home hero product shot — 1:1 (index.html)

```
...hero shot of a compact 3D printer mid-print with a single strand of sand-coloured
filament curving from the spool to the nozzle, small vase half-printed on the build
plate, front three-quarter view, soft amber glow behind.
```

### 4.3 Printer gallery — 1:1 or 4:5 (printer.html)

```
...same printer from straight-on, side, back, and close-up of the print bed and spool
holder, subtle layer lines visible, each frame one object on the sand backdrop.
```

### 4.4 Kit flat-lay — 4:3 (bundles.html)

```
...top-down flat-lay of an open kit box: printer, 2-6 filament spools in the palette,
a Refila bag, small printed objects, arranged with breathing room on the sand backdrop.
```

### 4.5 Spool colour shots — 1:1 (product.html)

```
...single matte filament spool on the sand backdrop in exactly one palette colour:
[colour name + hex], soft specular-free finish, front view, one spool per image.
```

### 4.6 Project thumbnails — 1:1 (projects.html, challenge.html)

```
...single small 3D-printed object, isometric floating studio shot on the sand backdrop:
[object name], matte filament texture, subtle layer lines, soft shadow beneath,
top-lit, palette colour [colour].
```

### 4.7 Refila bag / recycling — 4:3 (refila.html)

```
...open kraft-paper return bag spilling sage-coloured PLA scraps and empty spools onto
the sand backdrop, warm window light, honest and tidy, no dark eco-clichés.
```

### 4.8 Team avatars — 1:1 (team.html)

```
...minimal flat portrait illustration, warm sand background, matte colour-block shapes,
friendly neutral expression, palette colours only.
```

---

## 5 · Consistency rules

1. **One backdrop everywhere:** warm sand `#E7DDCC`. It is the strongest brand tie
   between photos and the site theme.
2. **Same tool + version.** Midjourney: `--v 6 --style raw`; stable quality across all
   generations.
3. **Lock a seed** once you find a result you like (Midjourney `--seed 1234`) so every
   image shares the same lighting and tone.
4. **Aspect ratios per asset:** `--ar 1:1` products/thumbnails, `--ar 21:10` og:image,
   `--ar 4:3` flat-lays.
5. **Stable Diffusion note:** hex codes are unreliable there — spell out colour names
   ("sage green", "terracotta", "warm sand") instead.
6. **Never add text/logos** to generated images; overlay text in HTML/CSS so it stays
   crisp and localised.

---

## 6 · Brand props vocabulary

compact 3D printer with rounded corners + visible filament spool · filament spools
(8 colours above) · dino keychain · ribbed phone stand · fluted pen cup · desk cable
tidy · HDB window planter · glow-star mobile · calibration cube · name tags · Refila
return bag · PLA scraps and supports
