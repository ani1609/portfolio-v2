import UiAstraImage from '@/public/images/ui-astra.webp';
import ConversifyImage from '@/public/images/conversify.webp';
import NeurouteAiImage from '@/public/images/neuroute-ai.webp';
import { MajorProject } from '@/types/major-project';

export const majorProjects: MajorProject[] = [
  {
    id: 1,
    title: 'UI Astra',
    tagLine: 'UI Library',
    description:
      'A versatile UI library featuring reusable, customizable components built on top of Radix Primitives, and an integrated icon library, Astra Icons, for streamlined and efficient web development.',
    image: UiAstraImage,
    techStack: ['GSAP', 'Next.js', 'RadixUI', 'Tailwind CSS', 'Typescript'],
    githubLink: 'https://github.com/uiastra',
    deployedLink: 'https://uiastra.com',
  },
  {
    id: 2,
    title: 'Neuroute AI',
    tagLine: 'AI based Clinical Research Platform',
    description:
      'A clinical research platform that leverages AI and data visualization to help researchers analyze past trials, identify study sites, and streamline the clinical trial process.',
    image: NeurouteAiImage,
    techStack: [
      'Firebase',
      'Framer Motion',
      'Next.js',
      'Pinecone',
      'PostgreSQL',
      'Recharts',
      'Tailwind CSS',
      'TypeScript',
    ],
    deployedLink: 'https://neuroute.ai',
  },
  {
    id: 3,
    title: 'Conversify',
    tagLine: 'End-to-End Encrypted Chat App',
    description:
      'Seamlessly integrating the OpenPGP library, this MERN-based application ensures secure and private messaging with real-time chat capabilities, prioritizing communication privacy and offering a seamless user experience.',
    image: ConversifyImage,
    techStack: [
      'Express',
      'MongoDB',
      'Multer',
      'OpenPGP',
      'React',
      'Socket.io',
    ],
    githubLink: 'https://github.com/ani1609/Conversify',
  },
];
