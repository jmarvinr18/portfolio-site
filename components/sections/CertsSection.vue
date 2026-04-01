<script setup lang="ts">
import { certifications } from '~/data/certifications'
</script>

<template>
  <section id="certifications" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="04" label="Certifications">Professional Credentials</UiSectionLabel>

      <!-- Section placeholder image: certificate strip -->
      <div
        class="img-placeholder mb-5"
        style="height: 120px; background: #10151e; position: relative; overflow: hidden;"
        aria-hidden="true"
      >
        <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; gap: 1.5rem; padding: 0 2rem;">
          <div v-for="i in 6" :key="i" style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; opacity: 0.2; flex: 1; max-width: 80px;">
            <div style="width: 44px; height: 44px; border-radius: 6px; border: 1px solid #1e2535; background: #171d29; display: flex; align-items: center; justify-content: center;">
              <i class="bi-shield-fill" style="color: #00e5b0; font-size: 1.25rem;" />
            </div>
            <div style="width: 56px; height: 4px; background: #1e2535; border-radius: 2px;" />
          </div>
        </div>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, #0a0d12 100%);" />
      </div>

      <div class="row g-4">
        <div v-for="cert in certifications" :key="cert.name" class="col-12 col-sm-6 col-lg-4">
          <UiCertCard :cert="cert" />
        </div>
      </div>
    </div>
  </section>
</template>
