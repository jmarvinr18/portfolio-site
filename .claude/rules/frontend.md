---
paths:
  - "components/**/*.vue"
  - "composables/**/*.ts"
  - "assets/scss/**/*.scss"
---

# Frontend Rules
- Nuxt 3 Composition API (`<script setup lang="ts">`) only — no Options API
- Bootstrap 5 utilities for layout; custom SCSS in `assets/scss/` for anything Bootstrap can't express
- Pinia for global state — no prop drilling past two levels
- No inline styles; use SCSS variables from `_variables.scss` for all color/spacing values
- All component props must be typed via interfaces from `~/types`
