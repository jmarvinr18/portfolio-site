<script setup lang="ts">
import type { WorkExperience } from '~/types'

const props = defineProps<{ item: WorkExperience }>()

function formatDate(d: string) {
  const [year, month] = d.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const dateRange = computed(() => {
  const start = formatDate(props.item.startDate)
  const end = props.item.endDate ? formatDate(props.item.endDate) : 'Present'
  return `${start} – ${end}`
})
</script>

<template>
  <div class="timeline-item">
    <p class="timeline-role">{{ item.role }}</p>
    <h3 class="timeline-company">{{ item.company }}</h3>
    <div class="timeline-meta">
      <span>{{ dateRange }}</span>
      <span>·</span>
      <span>{{ item.location }}</span>
      <span v-if="item.remote" class="timeline-badge">Remote</span>
      <span class="timeline-badge">{{ item.type }}</span>
    </div>
    <ul class="timeline-highlights">
      <li v-for="(h, i) in item.highlights" :key="i">{{ h }}</li>
    </ul>
    <div class="d-flex flex-wrap gap-2">
      <UiSkillBadge v-for="tag in item.tags" :key="tag" :label="tag" />
    </div>
  </div>
</template>
