export type Project = {
  title: string
  subtitle: string
  status: 'Existing project' | 'Active build' | 'Planned'
  description: string
  stack: string[]
  repo?: string
  featured?: boolean
  details: string[]
}

export const site = {
  name: 'Jaikumar Gaja',
  headline: 'Aspiring Cloud / DevOps Engineer',
  email: 'gajajaikumar1@gmail.com',
  github: 'https://github.com/JaikumarGaja',
  linkedin: 'https://www.linkedin.com/in/jaikumargaja/',
  resumePath: '',
  education: { degree: 'B.Sc. in Information Technology', date: 'Graduated March 2023' },
  experience: [
    { role: 'Customer Support', organization: 'Accenture', period: 'Jan 2024 — Jun 2024', description: 'Supported customers by following structured processes, investigating reported issues, documenting outcomes, and maintaining quality across interactions.' },
    { role: 'AI data evaluation & quality assurance', organization: 'Additional experience', period: 'Jul 2024 — Present', description: 'AI data evaluation and quality assurance work. Add verified organization and scope here when ready.' },
  ],
  skills: [
    { category: 'Cloud', items: ['AWS'] },
    { category: 'Infrastructure as Code', items: ['Terraform'] },
    { category: 'Containers & orchestration', items: ['Docker', 'Kubernetes'] },
    { category: 'CI / CD', items: ['GitHub Actions', 'Jenkins', 'Argo CD'] },
    { category: 'Programming & scripting', items: ['Python', 'Bash'] },
    { category: 'Systems & version control', items: ['Linux', 'Git', 'GitHub'] },
    { category: 'Web technologies', items: ['React', 'TypeScript', 'HTML', 'CSS'] },
    { category: 'AI-assisted development tools', items: ['OpenAI Codex', 'ChatGPT', 'Claude Code', 'Google Antigravity', 'Gemini'] },
  ],
  projects: [
    {
      title: 'Cloud-native 3-tier application', subtitle: 'DevOps portfolio project', status: 'Existing project', featured: true,
      description: 'A hands-on project evolving a small web application from containerized EC2 deployment toward Kubernetes on Amazon EKS, with Terraform and Argo CD in the current infrastructure path.',
      stack: ['AWS', 'Terraform', 'EKS', 'Kubernetes', 'Argo CD', 'Docker', 'GitHub Actions'],
      repo: 'https://github.com/JaikumarGaja/devops-portfolio-project',
      details: ['Repository includes Node.js / Express UI and a Python / Flask API, plus Kubernetes manifests.', 'Current Terraform defines a VPC, EKS cluster, S3 state backend, and Helm releases for Argo CD.', 'Repository notes identify this as a learning project; configuration is not evidence of a currently running cluster or healthy production workload.'],
    },
    {
      title: 'Personal developer portfolio', subtitle: 'This website', status: 'Active build',
      description: 'A responsive portfolio built to make my background, current DevOps project, and next steps easy to explore.',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
      details: ['Centralized content configuration and reusable project entries.', 'Designed with responsive layouts, semantic navigation, and reduced-motion support.'],
    },
    {
      title: 'Infrastructure delivery pipeline', subtitle: 'Project direction', status: 'Planned',
      description: 'A proposed small cloud environment managed as code and delivered through a repeatable CI/CD workflow.',
      stack: ['Terraform', 'AWS', 'Docker', 'GitHub Actions'],
      details: ['Potential scope: infrastructure validation, image build, and a controlled deployment flow.', 'This project has not been implemented; no live environment or deployment is claimed.'],
    },
  ] satisfies Project[],
  principles: [
    ['01', 'Understand the problem', 'Start with constraints and the actual need before reaching for a tool.'],
    ['02', 'Automate thoughtfully', 'Reduce repetitive work where automation makes the process clearer and safer.'],
    ['03', 'Make decisions legible', 'Capture the why alongside the configuration so future changes have context.'],
    ['04', 'Build in small steps', 'Change incrementally and check behavior as the system takes shape.'],
    ['05', 'Design for resilience', 'Keep reliability, security, and maintainability in view from the beginning.'],
  ],
}
