export type SkillGroup = { category: string; skills: string[] }
export type Experience = { company: string; role: string; period: string; location?: string; summary?: string; highlights: string[] }

export const resume = {
  name: 'Bryant Ricardo Serrano Sánchez',
  title: 'Software Engineer',
  summary:
    'Software Engineer with a networking background and 6+ years in tech, including 2+ years building backend services, AI applications, and user interfaces. Experienced with Python, FastAPI, Node.js, React, OpenAI, cloud services, the software development lifecycle, and communication with people.',
  location: 'Mexico',
  email: 'bryantser96@gmail.com',
  linkedin: '',
  github: 'https://github.com/bryantserrano',
  cvUrl: '/bryant_serrano_cv.pdf',
  skills: [
    { category: 'AI engineering & automation', skills: ['OpenAI API', 'AI Agents', 'MCP', 'Agent Skills', 'Make', 'n8n'] },
    { category: 'Backend & APIs', skills: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'JavaScript', 'Java', 'C', 'REST APIs', 'JWT', 'OAuth 2.0', 'LDAP'] },
    { category: 'Frontend', skills: ['React', 'TypeScript', 'SvelteKit', 'Skeleton UI', 'HTML5', 'CSS3'] },
    { category: 'Databases & search', skills: ['PostgreSQL', 'MongoDB', 'OpenSearch'] },
    { category: 'Cloud & DevOps', skills: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Ansible', 'CI/CD', 'Git', 'GitHub', 'Splunk'] },
    { category: 'Testing & QA', skills: ['pytest', 'Postman', 'Bruno'] },
    { category: 'Networking & infrastructure', skills: ['Cisco IOS XE', 'Enterprise routing', 'Network troubleshooting', 'NETCONF', 'RESTCONF', 'Ansible', 'Network telemetry'] },
    { category: 'Development tools', skills: ['Cursor', 'GitHub Copilot', 'OpenSpec'] },
  ] satisfies SkillGroup[],
  experience: [
    {
      company: 'Cisco', role: 'Software Engineer', period: 'March 2026 – Present', highlights: [
        'Develop internal integration dashboards with React and TypeScript, using TanStack Query, React Router, and Okta OIDC authentication.',
        'Build Node.js and Express.js services integrating MuleSoft, Splunk, and internal metadata APIs, with PostgreSQL and OpenSearch for ETL monitoring, event tracking, and platform health reporting.',
        'Create Splunk searches, dashboards, and alerts to monitor integration traffic, identify failures, and investigate transaction activity.',
        'Develop a Webex based AI assistant using Deep Agents for internal workflows.',
      ]
    },
    {
      company: 'Cisco', role: 'Escalation Engineer, Cisco TAC', period: 'January 2024 – March 2026', highlights: [
        'Developed internal applications and Webex bots for campaigns, events, and Customer Experience Center initiatives.',
        'Automated recurring workflows to reduce manual effort and support team productivity.',
        'Managed critical technical escalations and delivered technology training.',
      ]
    },
    {
      company: 'Cisco', role: 'Technical Consulting Engineer, Cisco TAC', period: 'October 2020 – December 2023', highlights: [
        'Troubleshot Enterprise routers (IOS-XE), debugged software using core files, and supported virtual router deployments across public and private cloud environments including NFVIS, VMware, AWS, Azure, and GCP.',
        'Worked with RESTCONF, NETCONF, telemetry, and Smart Licensing technologies.',
      ]
    },
    {
      company: 'Netcontroll', role: 'Help Desk', period: 'February 2020 – October 2020', highlights: [
        'Provided technical assistance, network traffic analysis, and customer support for Palo Alto Networks NGFW products.',
        'Coordinated complex issues with Palo Alto TAC and wrote Python scripts to automate reporting alerts.',
      ]
    },
    {
      company: 'Bank of Mexico', role: 'Intern, Information Security Office of Applications', period: 'June 2019 – December 2019', highlights: [
        'Contributed to application security by implementing a DLP system and wrote Python automation to improve operational efficiency.',
      ]
    },
  ] satisfies Experience[],
  education: [
    { institution: 'National Autonomous University of Mexico (UNAM)', degree: 'Computer Engineering', detail: 'GPA 9.11 / 10', period: 'August 2015 – June 2020' },
  ],
  certifications: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon', period: 'July 14, 2023 – January 14, 2029' },
    { name: 'Salesforce Certified Platform Foundations', issuer: 'Salesforce', period: 'Issued August 30, 2026' },
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Advanced' },
  ],
}
