import { MinorProject } from '@/types/minor-project';

export const minorProjects: MinorProject[] = [
  {
    title: 'NeoChat',
    description:
      "Originally 'BridgeTogether', this chat web app enables inclusive communication with customizable settings for users with disabilities like deafness, blindness, and colorblindness.",
    techStack: ['Assembly AI API', 'React', 'Tailwind CSS', ''],
    githubLink: 'https://github.com/ani1609/NeoChat',
    tagLine: 'Won Synchronicity - S1, JU',
  },
  {
    title: 'Spendwise',
    description:
      'Led and mentored the Spendwise open-source expense tracker during KWoC 2023 (IIT Kharagpur), coordinating 30+ contributors while maintaining code quality and community engagement. The project gained 50+ forks and 25+ stars.',
    techStack: [
      'Express',
      'Firebase',
      'MongoDB',
      'Node.js',
      'React',
      'Tailwind CSS',
    ],
    githubLink: 'https://github.com/ani1609/Spendwise',
    tagLine: 'KWoC 23, IIT KGP Triumph',
  },
  {
    title: 'Social Media Prototype',
    description:
      'A prototype social media clone offering real-time post creation, likes, comments, and sharing features, complete with instantaneous notifications for a dynamic user experience.',
    techStack: ['React', 'Socket.io', 'Express.js', 'MongoDB'],
    githubLink: 'https://github.com/ani1609/social-media-prototype',
  },
];
