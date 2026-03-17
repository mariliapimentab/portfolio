# Marília Pimenta — Portfolio

World-class product design portfolio built with Next.js 14, TailwindCSS, and TypeScript.

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework & routing |
| **TailwindCSS 3** | Utility-first styling |
| **TypeScript** | Type safety |
| **next/font** | Optimised Google Fonts (DM Sans + DM Serif Display) |
| **React Context** | Bilingual EN/PT state |
| **IntersectionObserver** | Scroll-triggered reveal animations |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, providers, metadata
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Tailwind directives + custom CSS
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav with scroll state + lang toggle
│   │   └── Footer.tsx      # Minimal footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Full-height hero with animated text
│   │   ├── Work.tsx        # Project grid + modal management
│   │   ├── Process.tsx     # 4-step process grid
│   │   ├── About.tsx       # Bio, portrait, stats
│   │   └── Contact.tsx     # Contact links + decorative element
│   │
│   └── ui/
│       ├── CustomCursor.tsx    # Magnetic accent dot cursor
│       ├── LangToggle.tsx      # EN/PT pill toggle
│       ├── ProjectCard.tsx     # Hover-interactive project card
│       ├── CaseStudyModal.tsx  # Slide-in case study drawer
│       ├── MockVisual.tsx      # CSS-only product UI mockups
│       ├── Reveal.tsx          # Scroll-triggered fade-up wrapper
│       ├── SectionLabel.tsx    # "— Label" section eyebrow
│       └── Icons.tsx           # Shared SVG icons
│
├── context/
│   └── LangContext.tsx     # Language provider + useLang hook
│
├── data/
│   └── index.ts            # All content: projects, case studies, steps
│
├── hooks/
│   ├── useScrolled.ts      # Detects scroll past threshold
│   ├── useReveal.ts        # IntersectionObserver for animations
│   └── useCustomCursor.ts  # Cursor position RAF loop
│
└── types/
    └── index.ts            # All TypeScript interfaces
```

---

## Getting Started

### Install dependencies

```bash
npm install
# or
pnpm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
npm start
```

---

## Customisation

### Replace placeholder content

All content lives in **`src/data/index.ts`** — edit projects, case studies, process steps, and stats there. No hunting through component files.

### Add your photo

Replace the CSS portrait placeholder in `About.tsx` with:

```tsx
import Image from 'next/image'
// ...
<Image src="/portrait.jpg" alt="Marília Pimenta" fill className="object-cover" />
```

Then add `portrait.jpg` to the `/public` folder.

### Update links

Search for `href="https://linkedin.com"` and `href="/resume.pdf"` in the components and update to your real URLs.

### Add project images

Replace `<MockVisual />` in `ProjectCard.tsx` with real screenshots:

```tsx
import Image from 'next/image'
<Image src={`/projects/${project.id}.png`} alt={content.name} fill className="object-cover" />
```

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — zero configuration needed.

### Other platforms

```bash
npm run build   # generates .next/ folder
npm start       # serves the production build
```

---

## Design Tokens

| Token | Value |
|-------|-------|
| Accent | `#4427ED` |
| Ink (Black) | `#0A0A0A` |
| Gray 100 | `#F5F5F5` |
| Gray 200 | `#E8E8E8` |
| Gray 400 | `#A0A0A0` |
| Gray 600 | `#6B6B6B` |
| Font Sans | DM Sans |
| Font Serif | DM Serif Display |
# portfolio
