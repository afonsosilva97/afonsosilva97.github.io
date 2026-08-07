# afonsosilva97.github.io

Source code of my personal website: https://afonsosilva97.github.io/

Built with [Astro](https://astro.build) — a static site generator. The site ships zero JavaScript: all content is rendered to plain HTML at build time.

Originally built with React/Create React App; migrated to Astro in 2026 after CRA was deprecated.

## Structure

- `src/data/personalData.ts` — all site content (experience, skills, about, social links) as typed data
- `src/pages/index.astro` — the single page, composing the sections
- `src/layouts/Layout.astro` — HTML shell, meta tags, fonts, navbar
- `src/components/*.astro` — section components, each with scoped styles
- `public/` — images, icons, manifest

## Commands

| Command        | Action                                              |
| -------------- | --------------------------------------------------- |
| `yarn install` | Install dependencies                                 |
| `yarn dev`     | Start dev server at http://localhost:4321            |
| `yarn build`   | Type-check (`astro check`) and build to `dist/`      |
| `yarn preview` | Serve the production build locally                   |

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys `dist/` to GitHub Pages.
