<script setup lang="ts">
const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['hero', 'experience', 'skills', 'education', 'certifications', 'projects', 'contact']
const { activeSection } = useActiveSection(sectionIds)

const isScrolled = ref(false)
const isMobileOpen = ref(false)

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

function getAnchor(href: string) {
  return href.replace('#', '')
}
</script>

<template>
  <nav :class="['site-nav', { scrolled: isScrolled }]" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        JMR<span>.</span>dev
      </a>

      <ul class="nav-links" role="list">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            :class="['nav-link-item', { active: activeSection === getAnchor(link.href) }]"
          >{{ link.label }}</a>
        </li>
      </ul>

      <button
        class="nav-toggler"
        :aria-expanded="isMobileOpen"
        aria-controls="nav-mobile"
        aria-label="Toggle navigation"
        @click="isMobileOpen = !isMobileOpen"
      >
        <i :class="isMobileOpen ? 'bi-x-lg' : 'bi-list'" />
      </button>
    </div>

    <div id="nav-mobile" :class="['nav-mobile', { open: isMobileOpen }]">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        :class="['nav-link-item', { active: activeSection === getAnchor(link.href) }]"
        @click="isMobileOpen = false"
      >{{ link.label }}</a>
    </div>
  </nav>
</template>
