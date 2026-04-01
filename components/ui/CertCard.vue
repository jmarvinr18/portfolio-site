<script setup lang="ts">
import type { Certification } from '~/types'

const props = defineProps<{ cert: Certification }>()

const certIcon = computed(() => {
  const name = props.cert.name.toLowerCase()
  if (name.includes('aws')) return 'bi-cloud-fill'
  if (name.includes('kubernetes') || name.includes('cks') || name.includes('cka')) return 'bi-grid-3x3-gap-fill'
  if (name.includes('vault')) return 'bi-key-fill'
  if (name.includes('ethical') || name.includes('ceh') || name.includes('pentest')) return 'bi-bug-fill'
  if (name.includes('ccsp') || name.includes('cissp') || name.includes('isc')) return 'bi-patch-check-fill'
  return 'bi-shield-fill'
})

type ExpiryStatus = 'valid' | 'expiring-soon' | 'expired' | 'no-expiry'

const expiryStatus = computed((): ExpiryStatus => {
  if (!props.cert.expires) return 'no-expiry'
  const now = new Date()
  const exp = new Date(props.cert.expires + '-01')
  const diffMs = exp.getTime() - now.getTime()
  const diffDays = diffMs / (1000 * 60 * 60 * 24)
  if (diffDays < 0) return 'expired'
  if (diffDays < 180) return 'expiring-soon'
  return 'valid'
})

const expiryLabel = computed(() => {
  if (!props.cert.expires) return 'No expiry'
  const status = expiryStatus.value
  if (status === 'expired') return 'Expired'
  if (status === 'expiring-soon') return 'Expiring soon'
  return `Exp. ${props.cert.expires}`
})

function formatDate(d: string) {
  const [year, month] = d.split('-')
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <div class="cert-card">
    <div class="cert-badge-icon">
      <i :class="certIcon" />
    </div>
    <p class="cert-name">{{ cert.name }}</p>
    <p class="cert-issuer">{{ cert.issuer }}</p>
    <div class="cert-footer">
      <span class="cert-date">Issued {{ formatDate(cert.issued) }}</span>
      <span :class="['cert-expiry-badge', expiryStatus]">{{ expiryLabel }}</span>
    </div>
  </div>
</template>
