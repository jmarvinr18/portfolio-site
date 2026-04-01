# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

Personal portfolio site for a DevSecOps and Software Engineer. Single-page scroll with anchor sections: hero, experience, skills, education, certifications, projects, contact.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Nuxt.js 3 (Composition API) |
| Language | TypeScript (strict mode) |
| Styling | Bootstrap 5 + custom SCSS |
| State | Pinia |
| Deployment | Static generation (`nuxt generate`) |

## Development Commands

```bash
npm install           # install deps
npm run dev           # dev server
npx nuxi typecheck    # type check only
npm run generate      # build static site
npm run preview       # preview static output
```

**Pre-commit hook** (`.claude/hooks/pre-commit.sh`) runs before every Bash tool call and blocks on failure:
1. `npx tsc --noEmit` — type check
2. `eslint` on staged `.ts` files
3. `npm test`

**Lint-on-save hook** runs `npm run lint` automatically after every file edit.

## Architecture

All portfolio content lives in `data/*.ts` as typed arrays — no CMS, no API calls, no runtime data fetching. Components read from these files directly at build time.

```
data/           ← typed content arrays (experience, skills, education, certifications, projects)
types/          ← shared TypeScript interfaces (WorkExperience, SkillCategory, Education, Certification, Project)
components/
  layout/       ← SiteNav (sticky, anchor links), SiteFooter
  sections/     ← one Vue component per page section (Hero, Experience, Skills, Education, Certs, Projects, Contact)
  ui/           ← atomic display components (SkillBadge, CertCard, ProjectCard, TimelineItem, SectionLabel)
composables/
  useActiveSection.ts  ← IntersectionObserver that tracks scroll position for nav highlight state
assets/scss/
  _variables.scss      ← all color tokens, font stacks, spacing — edit here first
  _typography.scss
  _components.scss
  main.scss            ← imports: variables → bootstrap → typography → components
```

`useActiveSection` uses `rootMargin: '-40% 0px -55% 0px'` so the active section updates when it occupies the middle of the viewport.

Bootstrap SCSS is imported **after** `_variables.scss` so all `$variable` overrides take effect. Never import Bootstrap before variables.

## Design Rules

- **Dark palette only.** Background `#0a0d12`, surface `#10151e`, accent `#00e5b0`. All values come from `_variables.scss` — never hardcode hex in components.
- **Font discipline.** `JetBrains Mono` (`$font-display`) for labels, badges, dates, hero tagline, and code references only. `DM Sans` (`$font-body`) for all body text. Never use Inter, Roboto, or Arial.
- **Accent sparingly.** `#00e5b0` is for active nav state, underlines, icon highlights — not decorative fill.
- **No `any`.** All data files and component props must use the interfaces in `types/index.ts`.
- **Single-responsibility components.** One UI concept per component file.
- **Smooth scroll globally.** `html { scroll-behavior: smooth; }` in global styles.
- **Accessibility.** All interactive elements need `:focus-visible` styles; WCAG AA contrast required.
- **Images are optional.** Design must be readable with no images present (no broken placeholder states).

## CertCard Expiry Logic

Expiry badge color: green if valid, amber if expiring within 6 months, muted if expired. `expires: null` means no expiry — do not show a badge.
