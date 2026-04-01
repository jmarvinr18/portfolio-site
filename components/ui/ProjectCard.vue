<script setup lang="ts">
import type { Project } from '~/types'

const props = defineProps<{ project: Project }>()

const typeConfig: Record<Project['type'], { icon: string; gradient: string }> = {
  security:   { icon: 'bi-shield-lock-fill', gradient: 'linear-gradient(135deg, #0f0a0a 0%, #120d0d 50%, #0a0d18 100%)' },
  devops:     { icon: 'bi-cloud-fill',        gradient: 'linear-gradient(135deg, #080d12 0%, #0a1218 50%, #080e14 100%)' },
  fullstack:  { icon: 'bi-layers-fill',       gradient: 'linear-gradient(135deg, #0a0812 0%, #0e0a18 50%, #080d12 100%)' },
  automation: { icon: 'bi-gear-fill',         gradient: 'linear-gradient(135deg, #0d0c08 0%, #121008 50%, #080d10 100%)' },
  research:   { icon: 'bi-search',            gradient: 'linear-gradient(135deg, #0d0d08 0%, #121408 50%, #080d10 100%)' },
}

const config = computed(() => typeConfig[props.project.type])
</script>

<template>
  <div class="project-card">
    <!-- Placeholder image -->
    <div class="project-img-wrapper" :style="{ background: config.gradient }">
      <div class="project-img-grid" />
      <div class="project-img-inner">
        <i :class="config.icon" />
      </div>
    </div>

    <div class="project-body">
      <p class="project-type-label">[ {{ project.type }} ]</p>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-summary">{{ project.summary }}</p>

      <div class="project-footer">
        <div class="d-flex flex-wrap gap-1">
          <UiSkillBadge v-for="tech in project.techStack.slice(0, 3)" :key="tech" :label="tech" />
          <span v-if="project.techStack.length > 3" class="skill-badge">+{{ project.techStack.length - 3 }}</span>
        </div>
        <div class="project-links">
          <a v-if="project.repoUrl" :href="project.repoUrl" title="View source" target="_blank" rel="noopener">
            <i class="bi-github" /> Repo
          </a>
          <a v-if="project.liveUrl" :href="project.liveUrl" title="Live demo" target="_blank" rel="noopener">
            <i class="bi-box-arrow-up-right" /> Live
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
