# afonsosilva.dev

Source code of my personal website: https://afonsosilva.dev

Built with [Astro](https://astro.build) - a static site generator. All content is rendered to plain HTML at build time; the only JavaScript shipped is a tiny inline scroll handler.

Originally built with React/Create React App; migrated to Astro in 2026 after CRA was deprecated.

## Structure

- `src/data/personalData.ts` - all site content (experience, skills, about, social links) as typed data
- `src/pages/index.astro` - the single page, composing the sections
- `src/layouts/Layout.astro` - HTML shell, meta tags, fonts, page grid
- `src/components/*.astro` - section components, each with scoped styles
- `cv/generate.ts` - renders a one-page PDF CV from the same data (see below)
- `public/` - images, icons, self-hosted fonts, manifest

## Commands

| Command        | Action                                              |
| -------------- | --------------------------------------------------- |
| `yarn install` | Install dependencies                                 |
| `yarn dev`     | Start dev server at http://localhost:4321            |
| `yarn build`   | Type-check (`astro check`) and build to `dist/`      |
| `yarn preview` | Serve the production build locally                   |
| `yarn cv`      | Generate `cv/cv.html` and print it to `public/cv.pdf` |

## CV

The CV at [afonsosilva.dev/cv.pdf](https://afonsosilva.dev/cv.pdf) is generated, not hand-made. `yarn cv` renders an HTML page from `personalData.ts` and prints it to PDF with headless Chromium, using the same fonts and accent color as the site. The generated files are gitignored; the deploy workflow rebuilds the PDF on every deploy, so site and CV never drift apart.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which regenerates the CV, builds the site and deploys `dist/` to GitHub Pages, served at the custom domain. A monthly scheduled run keeps build-time values (years of experience) current.
