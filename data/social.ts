import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  DiscordIcon,
} from '@/assets/icons';
import { SocialItem } from '@/types/social';

export const socialItems: SocialItem[] = [
  {
    name: 'Github',
    link: 'https://github.com/ani1609',
    icon: GithubIcon,
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/754188469764358264',
    icon: DiscordIcon,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ankit-kr-chowdhury-1b1690218/',
    icon: LinkedinIcon,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ankit.chdry/',
    icon: InstagramIcon,
  },
  {
    name: 'Twitter',
    // link: 'https://twitter.com/AnkitCh03046966',
    link: '',
    icon: TwitterIcon,
  },
];
