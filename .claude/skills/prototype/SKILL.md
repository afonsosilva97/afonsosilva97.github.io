---
name: prototype
description: Build visual prototypes of the website as local HTML pages. Use whenever Afonso asks for a prototype, mockup, redesign options, or design variants.
---

# Website prototypes, local only

When Afonso asks for a prototype or design options, build real HTML pages and
save them in the gitignored `prototypes/` folder at the repo root. Never
describe design options in prose when he asked to see them.

**Never publish prototypes to the cloud.** Do not use the Artifact tool in this
project; Afonso wants prototypes on his machine only. If a prototype was ever
published by mistake, tell him to delete it at claude.ai/code/artifacts.

## Process

1. Write a self-contained HTML file (inline CSS, no external requests) to
   `prototypes/<short-name>.html`. One file per prototype round; iterate on the
   same file within a round.
2. Use the real site content from `src/data/personalData.ts`. Never lorem ipsum,
   never invented copy. Prototypes exist to judge design against real content.
3. Build 2 to 4 genuinely distinct directions per round, not micro-variations
   of one idea. Label them clearly (Option A, B, C with a one-line intent each).
4. Put all options in ONE file, stacked or with a simple switcher, so
   comparison is side by side.
5. Tell Afonso the file path; he opens it in his browser. Optionally take a
   Playwright screenshot (chromium at /Applications/Chromium.app) and show it
   inline for a quick look.
6. After Afonso picks a direction, translate it into the real Astro components
   through the normal review process (propose, review, apply, screenshot).
   The prototype is a sketch, not the implementation.

## Constraints the prototypes must respect

- The final site ships zero JS. Prototype styling must be achievable in plain
  HTML/CSS. The prototype file may use minimal JS for an option switcher only.
- Site copy rules apply inside prototypes: no em dashes, no AI-sounding text.
  Use the existing approved copy verbatim.
- Brand icons (in `public/images/`) stay unmodified, no recoloring.
- Every option must look right at desktop and phone widths.
- Respect DESIGN-PLAN.md if it exists: current stage, constraints, decisions
  already made.
