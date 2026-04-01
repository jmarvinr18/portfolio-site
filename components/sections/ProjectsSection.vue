<script setup lang="ts">
import { projects } from '~/data/projects'

const featured = computed(() => projects.filter(p => p.featured))
const rest = computed(() => projects.filter(p => !p.featured))
</script>

<template>
  <section id="projects" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="05" label="Projects">Featured Work</UiSectionLabel>

      <!-- Section placeholder banner -->
      <div
        class="img-placeholder mb-5"
        style="height: 120px; background: linear-gradient(135deg, #0a0d12 0%, #10151e 100%); position: relative; overflow: hidden;"
        aria-hidden="true"
      >
        <svg viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; opacity: 0.12;">
          <line v-for="i in 12" :key="i" :x1="i * 67" y1="0" :x2="i * 67" y2="120" stroke="#00e5b0" stroke-width="0.5" />
          <line v-for="j in 6" :key="j" x1="0" :y1="j * 20" x2="800" :y2="j * 20" stroke="#00e5b0" stroke-width="0.5" />
          <circle cx="200" cy="60" r="30" fill="rgba(0,229,176,0.08)" stroke="#00e5b0" stroke-width="1" />
          <circle cx="400" cy="60" r="30" fill="rgba(0,229,176,0.08)" stroke="#00e5b0" stroke-width="1" />
          <circle cx="600" cy="60" r="30" fill="rgba(0,229,176,0.08)" stroke="#00e5b0" stroke-width="1" />
        </svg>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, #0a0d12 100%);" />
      </div>

      <!-- Featured projects -->
      <div class="row g-4 mb-4">
        <div v-for="project in featured" :key="project.id" class="col-12 col-md-6 col-lg-4">
          <UiProjectCard :project="project" />
        </div>
      </div>

      <!-- Other projects -->
      <div class="row g-4">
        <div v-for="project in rest" :key="project.id" class="col-12 col-md-6 col-lg-4">
          <UiProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
</template>
