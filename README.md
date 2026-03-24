# aegisgov.ai — Marketing Website

Clean, fast marketing site for **Aegis Gov DAO LLC**. Built with Next.js 14 (App Router), Tailwind CSS, TypeScript. Deploys to Vercel as a static export.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (static export)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, problem, solution, OpportunityWatch feature, CTA |
| `/services` | Services + pricing — Fractional AI Officer, Assessment, Proposal Automation |
| `/products` | Products — OpportunityWatch, coming soon |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### Option 1: CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts — framework will be auto-detected as Next.js
```

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Vercel auto-detects Next.js — click **Deploy**

That's it. No environment variables needed for the base site.

### Custom Domain

1. In Vercel Dashboard → your project → **Settings → Domains**
2. Add `aegisgov.ai` and `www.aegisgov.ai`
3. Update DNS at your registrar (Squarespace DNS) to point to Vercel:
   - A record: `76.76.21.21`
   - CNAME `www`: `cname.vercel-dns.com`

## Build

```bash
npm run build
```

Outputs static files to `/out/` directory. The `next.config.ts` sets `output: "export"` for full static generation.

## Customization

### Colors
Defined in `tailwind.config.ts`:
- Navy: `#0a1628` (primary background)
- Gold: `#c9a84c` (accent)

### Contact / CTA links
All CTAs link to `mailto:admin@aegisgov.ai`. To add a contact form, integrate [Resend](https://resend.com) with a Route Handler (convert from static export first).

### Adding Pages
Create `src/app/[page-name]/page.tsx` — Next.js App Router handles routing automatically.

## Structure

```
src/
  app/
    layout.tsx          # Root layout (Nav + Footer)
    page.tsx            # Homepage
    globals.css         # Global styles + Tailwind
    services/
      page.tsx          # Services page
    products/
      page.tsx          # Products page
  components/
    Nav.tsx             # Navigation (client component for mobile menu)
    Footer.tsx          # Footer
```
