import Link from 'next/link';
import { socialItems } from '@/data/socials';
import { Section } from './ui/section';

export default function Footer() {
  return (
    <Section
      id='footer-section'
      className='px-5 pt-0 pb-5 relative z-[2] flex flex-col gap-y-4 justify-center items-center'
    >
      <ul className='flex sm:hidden gap-x-5 justify-center items-center'>
        {socialItems.map((socialItem, index) => (
          <Link key={index} href={socialItem.link} target='_blank'>
            <li className='p-1 cursor-pointer text-para hover:text-primary transition-colors'>
              <socialItem.icon className='size-5' />
            </li>
          </Link>
        ))}
      </ul>

      <p className='text-center font-open-sans text-xs text-para font-medium tracking-[1.5px] [word-spacing:2.5px]'>
        Design Inspired by
        <Link
          href='https://github.com/bchiang7/v4'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary overflow-x-hidden relative after:content-[""] after:absolute after:left-1.5 after:bottom-0 after:right-0 after:h-[0.5px] after:w-[0%] after:bg-primary after:transition-all after:duration-200 after:ease-in-out hover:after:w-[90%]'
        >
          {' '}
          Brittany Chiang{' '}
        </Link>
        & Built by
        <Link
          href='https://github.com/ani1609/portfolio-v2'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary overflow-x-hidden relative after:content-[""] after:absolute after:left-1.5 after:bottom-0 after:right-0 after:h-[0.5px] after:w-[0%] after:bg-primary after:transition-all after:duration-200 after:ease-in-out hover:after:w-[96%]'
        >
          {' '}
          Ankit Kr. Chowdhury
        </Link>
      </p>
    </Section>
  );
}
