# Ananya Kaul — Portfolio

Personal portfolio of **Ananya Kaul**, Mobile Developer (iOS · Flutter · AI/ML).

**🌐 Live site:** [brisinger23.github.io/portfolio_code](https://brisinger23.github.io/portfolio_code/)

Showcases 15+ production apps shipped to the App Store and Google Play — including Math AI, TEXT UP, PDF Editor, PDF Scanner, Meme Me, and more.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion for animations
- Hosted on GitHub Pages, deployed automatically with GitHub Actions

## Running Locally

```bash
npm ci        # install dependencies
npm run dev   # start dev server at http://localhost:3000
```

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the static site and publishes it to GitHub Pages. No manual steps needed.

## Project Structure

```
src/app/
├── layout.tsx              # SEO metadata, fonts, page shell
├── page.tsx                # Home page (assembles all sections)
├── components/
│   ├── Header.tsx          # Top navigation bar
│   ├── Footer.tsx          # Footer
│   └── home/               # One file per section
│       ├── Hero.tsx        # Intro, photo, social links
│       ├── Projects.tsx    # The Apps section (app cards, store links)
│       ├── Experience.tsx  # Work experience
│       ├── Skills.tsx      # Skills
│       └── ...
└── lib/basePath.ts         # Asset path helper for GitHub Pages
public/
├── images/apps/            # App Store icons for the app cards
├── images/hero/            # Profile photo
└── resume.pdf              # Downloadable resume
```
