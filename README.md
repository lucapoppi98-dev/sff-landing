# SFF — Solo Founder Fellowship

Coming-soon landing page for **Solo Founder Fellowship**, a London community for the most ambitious solo founders.

## Stack

Single-page static site. No build step. No framework. No dependencies installed locally.

- `index.html` — markup, inline SVGs (logos stay inline for animation control)
- `styles.css` — all styles, organized by section
- `script.js` — waitlist form handler
- `assets/logo.svg` — reusable standalone logo
- `favicon.svg` — browser tab icon

Fonts (JetBrains Mono 400/500/700) are loaded from jsdelivr/fontsource at runtime — no font files in repo.

## Quick start

```bash
npm run dev
```

Then open <http://localhost:3000>.

No Node available? Either of these also work:

```bash
python3 -m http.server 3000
# or
php -S localhost:3000
```

Or just open `index.html` directly in a browser. The form handler and fonts both work offline (fonts will fall back to system mono if jsdelivr is unreachable).

## Deploy

Drop the folder on any static host. No build step.

- **Cloudflare Pages** (recommended — free, fast, custom domains): connect the repo or drag-drop the folder
- **Vercel**: `vercel --prod`
- **Netlify**: drag-drop or `netlify deploy --prod`
- **GitHub Pages**: push to `gh-pages` branch or enable Pages on `main`

## Before going live

See `CLAUDE.md` for the full list. The big three:

1. **Wire the form.** Replace `https://formspree.io/f/YOUR_FORM_ID` in `index.html` with a real endpoint (Formspree, Tally, ConvertKit, Mailchimp, your own backend).
2. **Update or remove the counter.** It's hardcoded to `47` in `index.html`. Either bump it manually as signups arrive or remove the counter element until you have real numbers.
3. **Replace social links.** `X / TWITTER` and `LINKEDIN` in the footer go to `#`.

## Working with Claude Code

`CLAUDE.md` in the repo root contains the brand system, design principles, and things to avoid. Claude Code reads it automatically.
