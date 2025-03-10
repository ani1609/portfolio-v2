import Link from 'next/link';
import '../styles/footer.css';
import { socialItems } from '@/data/social';

export default function Footer() {
  return (
    <section className='footer_container'>
      <ul>
        {socialItems.map((socialItem, index) => (
          <li key={index}>
            <Link href={socialItem.link} target='_blank'>
              <socialItem.icon className='size-5' />
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
