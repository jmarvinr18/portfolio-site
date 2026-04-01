<script setup lang="ts">
defineProps<{ number: string; label: string }>()
</script>

<template>
  <div class="section-header">
    <p class="section-eyebrow">{{ number }} — {{ label }}</p>
    <h2 class="section-title">
      <slot />
    </h2>
    <div class="section-divider" />
  </div>
</template>
