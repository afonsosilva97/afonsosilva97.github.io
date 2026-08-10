---
name: commit
description: How to write git commits in this repo. Use whenever creating a commit message.
---

# Commit messages in this repo

## Formatting rules

- Subject line: imperative mood, no trailing period, aim for under 65 characters.
- Body: only when the why is not obvious from the subject.
- **Never hard-wrap body text.** Do not insert line breaks in the middle of a
  sentence to satisfy a column limit. A line break happens only where a real
  paragraph ends. One paragraph = one line, however long; let the terminal wrap it.
- No bullet lists of files changed (the diff already says that). Bullets are fine
  for genuinely separate points.
- Plain language, no filler, no em dashes.

## Process rules

- Never commit or push without the user's explicit approval for that specific
  commit (see CLAUDE.md). Present what will be committed first.
- Stage files by name, never `git add -A` (a lesson from an unreviewed
  `.yarnrc.yml` slipping into a commit).
