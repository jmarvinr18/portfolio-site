<script setup lang="ts">
import { education } from '~/data/education'
</script>

<template>
  <section id="education" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="03" label="Education">Academic Background</UiSectionLabel>

      <!-- Section placeholder image -->
      <div
        class="img-placeholder mb-5"
        style="height: 130px; background: linear-gradient(135deg, #10151e 0%, #171d29 100%); position: relative; overflow: hidden;"
        aria-hidden="true"
      >
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 3rem; opacity: 0.25;">
          <i class="bi-mortarboard-fill" style="font-size: 3.5rem; color: #00e5b0;" />
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <div style="width: 180px; height: 4px; background: #1e2535; border-radius: 2px;" />
            <div style="width: 140px; height: 4px; background: #1e2535; border-radius: 2px;" />
            <div style="width: 100px; height: 4px; background: #1e2535; border-radius: 2px;" />
          </div>
        </div>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, #0a0d12 100%);" />
      </div>

      <div class="d-flex flex-column gap-3">
        <div v-for="edu in education" :key="edu.institution" class="edu-card">
          <div class="edu-placeholder">
            <i class="bi-mortarboard-fill" />
          </div>
          <div>
            <p class="edu-degree mb-0">{{ edu.degree }}</p>
            <p class="edu-field mb-1">{{ edu.field }}</p>
            <p class="edu-institution mb-0">{{ edu.institution }}</p>
            <p class="edu-years mb-0">
              {{ edu.startYear }} – {{ edu.endYear ?? 'Present' }}
            </p>
            <span v-if="edu.honors" class="edu-honors">{{ edu.honors }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
