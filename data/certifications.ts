import type { Certification } from '~/types'

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Security – Specialty',
    issuer: 'Amazon Web Services',
    issued: '2023-04',
    expires: '2026-04',
    tags: ['Cloud', 'Security', 'AWS'],
  },
  {
    name: 'Certified Kubernetes Security Specialist (CKS)',
    issuer: 'CNCF / Linux Foundation',
    issued: '2023-01',
    expires: '2025-01',
    tags: ['Kubernetes', 'Security', 'Container'],
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    issued: '2022-08',
    expires: '2025-08',
    tags: ['Security', 'Penetration Testing'],
  },
  {
    name: 'HashiCorp Certified: Vault Associate',
    issuer: 'HashiCorp',
    issued: '2022-03',
    expires: '2024-03',
    tags: ['DevOps', 'Security', 'Secrets Management'],
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    issued: '2021-08',
    expires: null,
    tags: ['Security', 'Baseline'],
  },
  {
    name: 'Certified Cloud Security Professional (CCSP)',
    issuer: 'ISC²',
    issued: '2021-05',
    expires: '2024-05',
    tags: ['Cloud', 'Security'],
  },
]
