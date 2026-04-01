<script setup lang="ts">
import { experience } from '~/data/experience'
</script>

<template>
  <section id="experience" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="01" label="Experience">Work History</UiSectionLabel>

      <!-- Section placeholder image -->
      <div
        class="img-placeholder mb-5"
        style="height: 160px; background: linear-gradient(90deg, #10151e 0%, #171d29 50%, #10151e 100%); position: relative; overflow: hidden;"
        aria-hidden="true"
      >
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 2rem; opacity: 0.35;">
          <i class="bi-building" style="font-size: 2rem; color: #00e5b0;" />
          <i class="bi-arrow-right" style="font-size: 1rem; color: #64748b;" />
          <i class="bi-shield-lock" style="font-size: 2rem; color: #00e5b0;" />
          <i class="bi-arrow-right" style="font-size: 1rem; color: #64748b;" />
          <i class="bi-cloud" style="font-size: 2rem; color: #00e5b0;" />
          <i class="bi-arrow-right" style="font-size: 1rem; color: #64748b;" />
          <i class="bi-diagram-3" style="font-size: 2rem; color: #00e5b0;" />
        </div>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, #0a0d12 100%);" />
      </div>

      <div class="timeline">
        <UiTimelineItem v-for="job in experience" :key="job.id" :item="job" />
      </div>
    </div>
  </section>
</template>
