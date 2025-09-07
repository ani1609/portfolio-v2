import ConversifyImage from '@/public/images/conversify.webp';
import Spenwiseimage from '@/public/images/spendwise.webp';
import { MajorProject } from '@/types/major-project';

export const majorProjects: MajorProject[] = [
  {
    title: 'Spendwise',
    tagLine: 'KWoC 23, IIT KGP Triumph',
    description:
      'Led and mentored Spendwise, a full-stack expense tracker built during KWoC 2023 by IIT Kharagpur. Managed 30+ contributors, maintaining code quality and community engagement. The project garnered 50+ forks and 25+ stars, reflecting strong open-source traction.',
    image: Spenwiseimage,
    techStack: [
      'Express',
      'Firebase',
      'MongoDB',
      'Node.js',
      'React',
      'Tailwind CSS',
    ],
    githubLink: 'https://github.com/ani1609/Spendwise',
  },

  {
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
