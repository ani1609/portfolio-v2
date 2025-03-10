'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../styles/sidebars.css';
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
    <div>
      {shouldRender && (
        <ul className='left_bar'>
          {socialItems.map((socialItem, index) => (
            <li key={index} className='github hover_effect'>
              <Link
                href={socialItem.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <socialItem.icon className='size-5' />
              </Link>
            </li>
          ))}

          <li className='left_line'></li>
        </ul>
      )}

      {shouldRender && (
        <ul className='right_bar'>
          <li className='email hover_effect'>
            <Link href='mailto:ankitparallax@gmail.com'>
              ankitparallax@gmail.com
            </Link>
          </li>
          <li className='right_line'></li>
        </ul>
      )}
    </div>
  );
}
