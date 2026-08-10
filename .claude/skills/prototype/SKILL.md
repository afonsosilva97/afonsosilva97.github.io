---
name: prototype
description: Build visual prototypes of the website as shareable Artifact pages. Use whenever Afonso asks for a prototype, mockup, redesign options, or design variants.
---

# Website prototypes as Artifacts

When Afonso asks for a prototype or design options, build real, clickable HTML
pages and publish them as an Artifact so he can view them in the browser and
share them if he wants. Never describe design options in prose when he asked to
see them.

## Process

1. Load the `artifact-design` skill BEFORE writing any prototype HTML (required
   by the Artifact tool, and it calibrates design quality).
2. Use the real site content from `src/data/personalData.ts`. Never lorem ipsum,
   never invented copy. Prototypes exist to judge design against real content.
3. Build 2 to 4 genuinely distinct directions per round, not micro-variations
   of one idea. Label them clearly (Option A, B, C with a one-line intent each,
   e.g. "A: editorial, serif headings, warm paper background").
4. Put all options on ONE artifact page with a simple switcher or stacked
   sections, so comparison is side by side. One page per prototype round.
5. Publish with the Artifact tool. Keep the same file path when iterating on a
   round so the URL stays stable. New round = new file = new URL.
6. After Afonso picks a direction, translate it into the real Astro components
   through the normal review process (propose, review, apply, screenshot).
   The artifact is a sketch, not the implementation.

## Constraints the prototypes must respect

- The final site ships zero JS. Prototype styling must be achievable in plain
  HTML/CSS. The artifact page itself may use minimal JS for the option switcher
  only.
- Site copy rules apply inside prototypes: no em dashes, no AI-sounding text.
  Use the existing approved copy verbatim.
- Brand icons (in `public/images/`) stay unmodified, no recoloring.
- Every option must look right at both desktop and phone widths, and in light
  and dark viewer themes (artifact pages render in the viewer's theme).
- Respect DESIGN-PLAN.md if it exists: current stage, constraints, decisions
  already made.

## Notes

- Artifacts start private on claude.ai; sharing is Afonso's choice.
- Favicon: use "🎨" for prototype artifacts, keep it stable across redeploys.
