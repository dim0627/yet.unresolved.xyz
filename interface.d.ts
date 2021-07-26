interface Project {
  id: string
  title: string
  description: string
  stacks: string[]
  href?: string
  repositoryUrl?: string
}

interface Profile {
  id: string
  title: string
  fullName: string
  description: string
  details: string
  twitterUrl: string
  gitHubUrl: string
  facebookUrl: string
  linkedInUrl: string
  emailAddress: string
}

interface Career {
  id: string
  companyName: string
  roles: string[]
  stacks: string[]
  joinedAt: Date
  leavedAt?: Date
  subcontracting: boolean
}
