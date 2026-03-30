import FourInARowImage from '@/public/images/four-in-a-row.webp';
import BlueDartAlertsImage from '@/public/images/bluedart-alerts.webp';
import { MajorProject } from '@/types/major-project';

export const majorProjects: MajorProject[] = [
  {
    title: 'Four in a Row',
    tagLine: 'Real-time Multiplayer',
    description:
      'A real-time multiplayer 4-in-a-Row game where players are matched 1v1, with an automatic competitive bot fallback if no opponent joins. Supports live gameplay, player reconnection, match forfeits, and a global leaderboard.',
    image: FourInARowImage,
    techStack: [
      'CI/CD',
      'Docker',
      'Go',
      'Kafka',
      'Next.js',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'WebSockets',
    ],
    githubLink: 'https://github.com/ani1609/four-in-a-row/',
    deployedLink: 'https://ankit-four-in-a-row.vercel.app',
  },
  {
    title: 'Blue Dart Alerts',
    tagLine: 'Automated Delivery Alerts on Discord',
    description:
      'An automated shipment-tracking service that monitors delivery status updates and notifies users in real time via a Discord bot, ensuring timely alerts whenever tracking events change.',
    image: BlueDartAlertsImage,
    techStack: [
      'Cheerio',
      'Cron Jobs',
      'Discord Bot API',
      'MongoDB',
      'Next.js',
      'Node.js',
      'TypeScript',
    ],
    githubLink: 'https://github.com/ani1609/bluedart-alerts/',
    deployedLink: 'https://ankit-bluedart-alerts.vercel.app',
  },
];
