<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
  <section id="skills" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="02" label="Skills">Technical Expertise</UiSectionLabel>

      <!-- Section placeholder image: skill radar visual -->
      <div
        class="img-placeholder mb-5"
        style="height: 140px; background: #10151e; position: relative; overflow: hidden;"
        aria-hidden="true"
      >
        <svg viewBox="0 0 800 140" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; opacity: 0.2;">
          <line x1="400" y1="10" x2="400" y2="130" stroke="#00e5b0" stroke-width="0.5" />
          <line x1="50" y1="70" x2="750" y2="70" stroke="#00e5b0" stroke-width="0.5" />
          <ellipse cx="400" cy="70" rx="320" ry="55" fill="none" stroke="#1e2535" stroke-width="1" />
          <ellipse cx="400" cy="70" rx="220" ry="38" fill="none" stroke="#1e2535" stroke-width="1" />
          <ellipse cx="400" cy="70" rx="120" ry="20" fill="none" stroke="#1e2535" stroke-width="1" />
          <polygon points="400,18 680,68 560,122 240,122 120,68" fill="rgba(0,229,176,0.07)" stroke="#00e5b0" stroke-width="1" />
          <circle cx="400" cy="18" r="4" fill="#00e5b0" />
          <circle cx="680" cy="68" r="4" fill="#00e5b0" />
          <circle cx="560" cy="122" r="4" fill="#00e5b0" />
          <circle cx="240" cy="122" r="4" fill="#00e5b0" />
          <circle cx="120" cy="68" r="4" fill="#00e5b0" />
        </svg>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, #0a0d12 100%);" />
      </div>

      <div class="row g-4">
        <div v-for="cat in skills" :key="cat.label" class="col-12 col-sm-6 col-lg-3">
          <div class="skill-category-card">
            <i :class="['skill-category-icon', cat.icon]" />
            <p class="skill-category-label">{{ cat.label }}</p>
            <div class="skill-tags">
              <UiSkillBadge v-for="item in cat.items" :key="item" :label="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
