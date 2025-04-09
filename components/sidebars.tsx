'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { socialItems } from '@/data/socials';
import { emailAddress } from '@/data/header';

export default function Sidebars() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {shouldRender && (
        <div className='hidden animate-slide-in-left-bar fixed left-[50px] bottom-0 z-[3] md:flex flex-col w-5 gap-y-6 items-center'>
          <ul className='flex flex-col w-5 gap-y-5 items-center'>
            {socialItems.map((socialItem, index) => (
              <Link
                key={index}
                href={socialItem.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <li
                  key={index}
                  className='text-para hover:text-primary p-[1px] hover:-translate-y-[3px] transition-transform duration-200'
                >
                  <socialItem.icon className='size-5' />
                </li>
              </Link>
            ))}
          </ul>

          <div className='w-px h-[90px] bg-para'></div>
        </div>
      )}

      {shouldRender && (
        <div className='hidden animate-slide-in-right-bar fixed right-[50px] bottom-0 z-[3] md:flex flex-col justify-end w-5 gap-y-6 items-center'>
          <ul className='flex flex-col w-5 gap-y-5 items-center'>
            <li className='text-xs tracking-[0.8425px] text-para [writing-mode:vertical-rl] origin-center'>
              <Link
                href={`mailto:${emailAddress}`}
                className='inline-block font-sf-mono text-para hover:text-primary hover:-translate-y-[3px] transition-transform duration-200'
              >
                {emailAddress}
              </Link>
            </li>
          </ul>

          <li className='w-px h-[90px] bg-para'></li>
        </div>
      )}
    </>
  );
}
