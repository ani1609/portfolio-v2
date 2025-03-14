'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { socialItems } from '@/data/social';

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
        <div className='animate-slide-in-left-bar fixed left-[50px] bottom-0 z-[3] flex flex-col w-5 gap-y-6 items-center'>
          <ul className='flex flex-col w-5 gap-y-5 items-center'>
            {socialItems.map((socialItem, index) => (
              <li key={index} className=''>
                <Link
                  href={socialItem.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <socialItem.icon className='size-5 text-para hover:text-primary hover:-translate-y-[3px] transition-transform duration-200' />
                </Link>
              </li>
            ))}
          </ul>

          <div className='w-px h-[90px] bg-para'></div>
        </div>
      )}

      {shouldRender && (
        <div className='animate-slide-in-right-bar fixed right-[50px] bottom-0 z-[3] flex flex-col justify-end w-5 gap-y-6 items-center'>
          <ul className='flex flex-col w-5 gap-y-5 items-center'>
            <li className='font-mono text-sm tracking-[ 0.556px] text-para [writing-mode:vertical-rl] origin-center'>
              <Link
                href='mailto:ankitparallax@gmail.com'
                className='inline-block text-para hover:text-primary hover:-translate-y-[3px] transition-transform duration-200'
              >
                ankitparallax@gmail.com
              </Link>
            </li>
          </ul>

          <li className='w-px h-[90px] bg-para'></li>
        </div>
      )}
    </>
  );
}
