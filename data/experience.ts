import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'LFX Mentorship',
    jobTitle: 'Mentee',
    location: 'Remote',
    date: 'Sep 2025 - Nov 2025',
    employmentType: 'Full-time',
    companyLink: 'https://lfx.linuxfoundation.org/tools/mentorship/',
    description: [
      'Contributed to <a href="https://kubeslice.io/" target="_blank" rel="noopener noreferrer">KubeSlice</a>, a framework that enables Kubernetes pods and services to communicate seamlessly across clusters, clouds, edges, and data centers by creating logical application boundaries called Slices, under the CNCF LFX Mentorship Program.',
      'Implemented <b>Dynamic IPAM</b> in the <a href="https://github.com/kubeslice/kubeslice-controller/" target="_blank" rel="noopener noreferrer">KubeSlice Controller</a> to dynamically allocate and reclaim IP subnets for slice overlay networks, improving IP utilization and scalability.',
      'Ensured conflict resolution and state synchronization across clusters using CRDs and distributed storage integration.',
      'Collaborated with maintainers and cloud-native networking experts to enhance multi-cluster networking capabilities.',
      'Documented system design, configuration options, and edge-case behaviors for maintainers and users.',
    ],
  },
  {
    id: 2,
    company: 'UI Astra',
    jobTitle: 'Software Development Engineer',
    location: 'Remote',
    date: 'Apr 2024 - Jun 2025',
    employmentType: 'Part-time',
    companyLink: 'https://www.uiastra.com/',
    description: [
      'Integrating <a href="https://ui.shadcn.com/docs/registry" target="_blank" rel="noopener noreferrer">ShadCN Registry</a> and <a href="https://ui.shadcn.com/docs/cli" target="_blank" rel="noopener noreferrer">CLI integration</a> to automate UI component setup, projected to reduce manual effort by <b>80%</b> and streamline onboarding by <b>65%</b>.',
      'Integrated <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">CodeSandbox</a> using <a href="https://sandpack.codesandbox.io/" target="_blank" rel="noopener noreferrer">Sandpack Toolkit</a>, enabling live component previews, reducing manual testing by <b>25%</b>.',
      'Contributed to the development of <a href="https://uiastra.com/icons" target="_blank" rel="noopener noreferrer">Astra Icons</a>, enhancing UI consistency across projects and reducing design inconsistencies by <b>20%</b>.',
    ],
  },
  {
    id: 3,
    company: 'Neuroute AI',
    jobTitle: 'Software Development Engineer',
    location: 'Remote',
    date: 'Dec 2024 - May 2025',
    employmentType: 'Internship',
    companyLink: 'https://www.neuroute.ai/',
    description: [
      'Building a real-time user management dashboard with role-based access control and real-time tracking, improving monitoring efficiency by <b>40%</b> and enhancing data visualization by <b>60%</b> using <a href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer">Recharts</a>.',
      'Integrated <a href="https://clinicaltrials.gov/data-api/api" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov APIs</a> to fetch <b>529K+</b> clinical trial records, cutting research time by <b>40%</b> and making historical data more accessible for researchers.',
      'Developed a clinical trial brainstorming tool leveraging historical data, reducing site selection time by <b>30%</b> and helping researchers identify study locations and sponsors efficiently.',
      'Integrated <a href="https://www.pinecone.io/" target="_blank" rel="noopener noreferrer">Pinecone Assistant</a> to deliver real-time insights with reference studies, increasing research accuracy and efficiency by <b>45%</b>.',
      'Redesigned and optimized UI/UX, improving engagement by <b>35%</b> and reducing navigation time by <b>25%</b>, leading to a more intuitive user experience.',
    ],
  },
];
