import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/assets/icons';
import Link from 'next/link';
import '../styles/footer.css';

interface FooterItem {
  name: string;
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const footerItems: FooterItem[] = [
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
    link: 'https://www.linkedin.com/in/ankit-kumar-chowdhury-1b1690218',
    icon: LinkedinIcon,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ankit.chdry/',
    icon: InstagramIcon,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/AnkitCh03046966',
    icon: TwitterIcon,
  },
];

export default function Footer() {
  return (
    <section className='footer_container'>
      <ul>
        {footerItems.map((footerLink, index) => (
          <li key={index}>
            <Link href={footerLink.link} target='_blank'>
              <footerLink.icon className='size-5' />
            </Link>
          </li>
        ))}
      </ul>

      <p>
        Designed by
        <Link
          href='https://github.com/bchiang7'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Brittany Chiang{' '}
        </Link>
        & Built by
        <Link
          href='https://github.com/ani1609/portfolio-v2'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          Ankit Kr. Chowdhury
        </Link>
      </p>
    </section>
  );
}
