'use client';

import { useState, useEffect } from 'react';
// import '../styles/top-button.css';
import { ArrowupFromDotIcon } from '@/assets/icons';

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={handleClick}
        className='animate-slide-in bg-[#15223e] text-primary fixed z-[5] bottom-2.5 right-2.5 sm:bottom-[30px] sm:right-[30px] md:right-[50px] lg:right-[90px] rounded-full cursor-pointer p-2 opacity-0 shadow-[0_0px_13px_2px_rgba(2,_12,_27,_0.7)]'
      >
        <ArrowupFromDotIcon className='size-5' />
      </button>
    )
  );
}
