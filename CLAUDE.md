# CLAUDE.md

Context for Claude Code working on this repo. Read this before making changes.

---

## What this is

The "coming soon" landing page for **Solo Founder Fellowship (SFF)** — a London community for the most ambitious solo founders at idea / MVP stage.

Audience: ambitious solo builders who would otherwise look at YC, OnDeck, EF, etc. but are not part of a co-founder pair. The page should feel like *their* community, not another generic accelerator.

## Brand system

### Colors (CSS variables in `styles.css`)

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#F2EEE5` | Warm cream background. **Not pure white.** Pure white reads as SaaS dashboard; cream reads as paper / printed manifesto. |
| `--fg` | `#0A0A0A` | Near-black for primary text. |
| `--accent` | `#FF4D00` | Signal orange. **Sparing use only.** |
| `--muted` | `#6B6B6B` | Secondary text. |
| `--line` | `rgba(10,10,10,0.12)` | Subtle dividers. |
| `--line-strong` | `rgba(10,10,10,0.85)` | Form border, button bg. |

### Typography

- **One typeface: JetBrains Mono.** Three weights (400, 500, 700). No second font.
- Loaded from jsdelivr/fontsource. No font files in repo.
- Why mono: matches the audience (builders, code, indie energy) and visually separates SFF from the sea of geometric-sans accelerator brands.

### The logo: constellation mark

- 8 outer black dots arranged on a circle = the fellowship / your peers
- 1 orange center dot = the solo founder / you
- The visual metaphor of the entire brand: **solo, but not alone**
- Reusable standalone version at `assets/logo.svg`
- Favicon at `favicon.svg` (slightly chunkier dots for legibility at 16×16)

### Voice

- Daring, optimistic, slightly unhinged ("for the daring and the optimists")
- Builder energy, not corporate or consultancy
- Short sentences. Declarative. Period-ended.
- The hero `SOLO. NOT ALONE.` captures the entire brand thesis in five syllables. Don't dilute it.

## Design principles (intentional choices — don't change without reason)

1. **Warm cream, not white.** This is the single most important brand call. Reverting to white kills the "manifesto" feel.
2. **One font, three weights.** Pairing a second font dilutes the mono aesthetic.
3. **Sparing accent color.** Orange appears in: center dot of the constellation, period punctuation in the hero, button-on-hover/success, blinking live indicator, counter number, focus border, link hover. That's the complete list. Adding more orange cheapens it.
4. **Subtle motion only.** Heartbeat on center dot (2.6s scale 1.0→1.06), staggered opacity orbit on outer dots (6s cycle), blinking live indicator. No carousels. No parallax. No scroll-triggered reveals beyond the initial page-load stagger.
5. **Inline SVG grain.** Paper noise overlay at 7% opacity. Data-URI so no asset file needed.
6. **Manifesto layout.** Two-column on desktop (text left, mark right). Stacks on mobile with mark above headline.
7. **Single screen.** The page should fit one viewport on desktop. No scrolling content below the footer.

## Things to AVOID

- ❌ Don't add Inter, Roboto, Poppins, or any other generic sans-serif
- ❌ Don't use purple, violet, or gradient backgrounds (over-used in AI startup branding)
- ❌ Don't add carousels, testimonial sliders, or "social proof walls"
- ❌ Don't increase the constellation mark beyond ~280px on desktop
- ❌ Don't add stock photos of founders / generic Unsplash imagery
- ❌ Don't add a "team" or "advisors" section yet — this is coming-soon, no team to show
- ❌ Don't add a chatbot / "AI assistant" widget — wrong audience, wrong vibe
- ❌ Don't add cookie banners unless you're collecting more than emails

## File structure

```
sff-landing/
├── index.html         # Markup + inline SVGs for the constellation
├── styles.css         # All styles, sectioned with /* === Section === */ headers
├── script.js          # Form handler + counter increment
├── assets/
│   └── logo.svg       # Standalone reusable SFF mark
├── favicon.svg        # Tab icon (chunkier dots for legibility)
├── package.json       # Just a dev-server script (npx serve)
├── README.md          # Public-facing setup/deploy
└── CLAUDE.md          # This file
```

## Local dev

```bash
npm run dev                 # uses npx serve via package.json
# or
python3 -m http.server 3000 # if node unavailable
```

## Deploy

Pure static. Drop the folder on Cloudflare Pages / Vercel / Netlify / GitHub Pages. No build step.

## TODOs before launch

- [ ] **Wire form to a real endpoint.** Currently `https://formspree.io/f/YOUR_FORM_ID` in `index.html`. Options: Formspree, Tally, ConvertKit, Mailchimp, or a custom backend (Cloudflare Worker / Vercel function). The JS in `script.js` already shows a fake success state — wire `fetch()` to the form action and gate success on a 2xx response (commented stub in `script.js`).
- [ ] **Update or remove the counter.** Hardcoded to `47` in `index.html`. Faking a counter is fine for week one but stops being fine the moment anyone you respect signs up and discovers it's fake. Either bump manually or rip the `.counter` div out until you have honest numbers.
- [ ] **Real social links** in the footer (currently `#`).
- [ ] **Open Graph image.** Add a 1200×630 PNG at `assets/og-image.png` and reference it in the `<meta property="og:image">` tag in `index.html`. The constellation mark + `SFF` wordmark on the cream background works.
- [ ] **Privacy policy / terms.** Required in the EU/UK (GDPR) when collecting emails. Add a single "By joining, you agree to our privacy policy" line near the form once you have a policy page to link to.
- [ ] **Test JetBrains Mono fallback.** If jsdelivr is blocked in any region you care about, the page falls back to `ui-monospace` / `Menlo`. Acceptable but check it looks ok.
- [ ] **Analytics.** Add Plausible / Fathom / Umami (privacy-friendly options) before launch. Skip Google Analytics — wrong audience signal.

## How to ask Claude Code for changes

Good prompts reference this file:

> "Following the design principles in CLAUDE.md, add a section..."

> "Per the brand system in CLAUDE.md, change the headline to..."

Bad prompts that will fight the design:

> "Make it more colorful." (Restraint is the point.)

> "Add a hero image." (The constellation IS the hero image.)

> "Use a more modern font." (JetBrains Mono is the brand.)

## Statistics in copy

Two stats may be cited in marketing copy (LinkedIn posts, etc.) — both from Carta:

- **"Solo founders now start over one-third of new companies"** — Carta's 2025 data shows 36.3% of new US startups in H1 2025 had solo founders, up from 23.7% in 2019. **US data**, no UK equivalent published. Flag this if it matters.
- **"Only 17% of VC-backed startups are solo-founded"** — also Carta. This is the bias SFF is implicitly fighting.

Don't invent statistics. If you can't verify, don't cite.
