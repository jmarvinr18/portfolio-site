<script setup lang="ts">
const links = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    value: 'jmarvinr18@example.com',
    href: 'mailto:jmarvinr18@example.com',
  },
  {
    icon: 'bi-github',
    label: 'GitHub',
    value: 'github.com/jmarvinr18',
    href: 'https://github.com',
  },
  {
    icon: 'bi-linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/jmarvinr18',
    href: 'https://linkedin.com',
  },
  {
    icon: 'bi-file-earmark-person-fill',
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
  },
]
</script>

<template>
  <section id="contact" class="portfolio-section">
    <div class="container" style="max-width: 1200px">
      <UiSectionLabel number="06" label="Contact">Get In Touch</UiSectionLabel>

      <div class="row align-items-center g-5">
        <div class="col-12 col-lg-5">
          <!-- Placeholder avatar / contact image -->
          <div
            class="img-placeholder"
            style="aspect-ratio: 1; max-width: 300px; background: linear-gradient(145deg, #10151e 0%, #171d29 100%); border-radius: 8px; position: relative; overflow: hidden;"
            aria-hidden="true"
          >
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 0.75rem; opacity: 0.3;">
              <div style="width: 80px; height: 80px; border-radius: 50%; border: 2px solid #00e5b0; display: flex; align-items: center; justify-content: center;">
                <i class="bi-person-fill" style="font-size: 2.5rem; color: #00e5b0;" />
              </div>
              <div style="width: 120px; height: 4px; background: #1e2535; border-radius: 2px;" />
              <div style="width: 80px; height: 4px; background: #1e2535; border-radius: 2px;" />
            </div>
            <div
              style="position: absolute; inset: 0; background-image: radial-gradient(rgba(0,229,176,0.08) 1px, transparent 1px); background-size: 20px 20px;"
            />
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <p
            class="mb-4"
            style="font-size: 1rem; color: rgba(226,232,240,0.65); line-height: 1.75; max-width: 480px;"
          >
            Open to new opportunities in DevSecOps, platform engineering, and security engineering roles.
            Whether you have a question, a project in mind, or just want to connect — my inbox is open.
          </p>

          <div class="d-flex flex-column gap-2">
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.href"
              class="contact-link"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener' : undefined"
            >
              <i :class="['contact-link-icon', link.icon]" />
              <span class="contact-link-label">{{ link.label }}</span>
              <span class="contact-link-value">{{ link.value }}</span>
              <i class="bi-arrow-right contact-link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
