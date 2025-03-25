import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Neuroute AI',
    jobTitle: 'Software Development Engineer',
    location: 'Remote',
    date: 'Dec 2024 - Present',
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
  {
    id: 2,
    company: 'UI Astra',
    jobTitle: 'Software Development Engineer',
    location: 'Remote',
    date: 'Apr 2024 - Present',
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
    company: 'Einetic',
    jobTitle: 'Former Software Development Engineer',
    location: 'Kolkata, India',
    date: 'Apr 2024 - Sep 2024',
    employmentType: 'Internship',
    companyLink: 'https://www.einetic.com/',
    description: [
      'Implemented authentication and dashboard APIs for <a href="https://galadriel.com/" target="_blank" rel="noopener noreferrer">Galadriel</a>, strengthening security and data accessibility. Redesigned UI/UX, increasing user engagement by <b>25%</b>.',
      'Developed the landing page for <a href="https://smallest.ai/" target="_blank" rel="noopener noreferrer">Smallest AI</a>, improving responsiveness and user experience, leading to better engagement.',
      'Enhanced UI/UX and optimized logic for <a href="https://warped.games/" target="_blank" rel="noopener noreferrer">Warped Games</a>, increasing user interaction by <b>30%</b> through refined game mechanics and navigation.',
      'Collaborated in daily stand-ups, discussing progress, blockers, and strategies to maintain smooth development workflows.',
    ],
  },
];
