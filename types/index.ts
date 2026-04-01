export interface WorkExperience {
  id: string
  company: string
  role: string
  type: 'full-time' | 'contract' | 'freelance'
  startDate: string
  endDate: string | null
  location: string
  remote: boolean
  highlights: string[]
  tags: string[]
}

export interface SkillCategory {
  label: string
  icon: string
  items: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
  honors?: string
}

export interface Certification {
  name: string
  issuer: string
  issued: string
  expires?: string | null
  credentialId?: string
  verifyUrl?: string
  tags: string[]
}

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  featured: boolean
  type: 'security' | 'devops' | 'fullstack' | 'automation' | 'research'
}
