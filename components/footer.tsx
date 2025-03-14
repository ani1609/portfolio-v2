import Link from 'next/link';
import { socialItems } from '@/data/social';

export default function Footer() {
  return (
    <section className='px-6 pt-0 pb-6 relative z-[2] flex flex-col gap-y-4 justify-center items-center '>
      <ul className='flex sm:hidden gap-x-5 justify-center items-center'>
        {socialItems.map((socialItem, index) => (
          <Link key={index} href={socialItem.link} target='_blank'>
            <li className='p-1 cursor-pointer text-para hover:text-primary transition-colors'>
              <socialItem.icon className='size-5' />
            </li>
          </Link>
        ))}
      </ul>

      <p className='text-center font-open text-xs text-para font-medium tracking-wider'>
        Designed by
        <Link
          href='https://github.com/bchiang7'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary'
        >
          {' '}
          Brittany Chiang{' '}
        </Link>
        & Developed by
        <Link
          href='https://github.com/ani1609/portfolio-v2'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary'
        >
          {' '}
          Ankit Kr. Chowdhury
        </Link>
      </p>
    </section>
  );
}
