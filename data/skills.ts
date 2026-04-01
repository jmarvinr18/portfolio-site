import type { SkillCategory } from '~/types'

export const skills: SkillCategory[] = [
  {
    label: 'Security',
    icon: 'bi-shield-lock-fill',
    items: ['SAST / DAST', 'Threat Modeling', 'OWASP Top 10', 'Penetration Testing', 'SIEM', 'IAM / Zero Trust', 'Secrets Management', 'Compliance Automation'],
  },
  {
    label: 'DevOps & Cloud',
    icon: 'bi-cloud-fill',
    items: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'GitLab CI', 'GitHub Actions'],
  },
  {
    label: 'Development',
    icon: 'bi-code-slash',
    items: ['TypeScript', 'Python', 'Go', 'Node.js', 'Vue / Nuxt', 'REST APIs', 'GraphQL', 'PostgreSQL'],
  },
  {
    label: 'Practices',
    icon: 'bi-diagram-3-fill',
    items: ['Shift-Left Security', 'GitOps', 'Agile / Scrum', 'Policy as Code', 'SRE Principles', 'Incident Response'],
  },
]
