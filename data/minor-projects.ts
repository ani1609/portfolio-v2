import { MinorProject } from '@/types/minor-project';

export const minorProjects: MinorProject[] = [
  {
    id: 1,
    title: 'NeoChat',
    description:
      "Originally 'BridgeTogether', this chat web app enables inclusive communication with customizable settings for users with disabilities like deafness, blindness, and colorblindness.",
    techStack: ['Assembly AI API', 'React', 'Tailwind CSS', ''],
    githubLink: 'https://github.com/ani1609/NeoChat',
    deployedLink: 'https://neo-chat-blush.vercel.app/',
    tagLine: 'Won Synchronicity - S1, JU',
  },
  {
    id: 2,
    title: 'Spendwise',
    description:
      'A user-friendly expense tracker app empowering individuals to effortlessly manage and analyze their financial transactions, fostering effective budgeting and financial awareness.',
    techStack: ['ApexCharts', 'React', 'Firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com/ani1609/Spendwise',
    deployedLink: 'https://spendwise-two.vercel.app/',
    tagLine: 'KWoC 23, IIT KGP Triumph',
  },
  {
    id: 3,
    title: 'Edinix',
    description:
      'A React library which can be integrated to open-source websites for non-technicals to contribute.',
    techStack: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/itsme-Subid/EdiNix',
    tagLine: 'HackNITR 5.0 Triumph',
  },
  {
    id: 4,
    title: 'Social Media Prototype',
    description:
      'A prototype social media clone offering real-time post creation, likes, comments, and sharing features, complete with instantaneous notifications for a dynamic user experience.',
    techStack: ['React', 'Socket.io', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/ani1609/social-media-prototype',
  },
];
