<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-copy">© {{ year }} Jose Marvin Ramoda — Built with Nuxt 3</p>
      <div class="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
          <i class="bi-github" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
          <i class="bi-linkedin" />
        </a>
        <a href="mailto:jmarvinr18@example.com" title="Email" aria-label="Send email">
          <i class="bi-envelope-fill" />
        </a>
      </div>
    </div>
  </footer>
</template>
