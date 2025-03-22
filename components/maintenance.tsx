'use client';

import { useEffect, useRef } from 'react';
import { Section } from './ui/section';

export default function Maintenance() {
  const maintenanceRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
      }
    }, options);

    const currentmaintenanceRefRef = maintenanceRef.current;

    if (currentmaintenanceRefRef) observer.observe(currentmaintenanceRefRef);

    return () => {
      if (currentmaintenanceRefRef)
        observer.unobserve(currentmaintenanceRefRef);
    };
  }, []);

  return (
    <Section
      id='maintenance-section'
      ref={maintenanceRef}
      className='h-dvh flex flex-col justify-center items-center gap-y-3 sm:gap-y-6 px-5'
    >
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-heading font-noto font-semibold'>
        Under Maintenance
      </h1>

      <p className='text-para text-center text-sm sm:text-base'>
        Sorry for the inconvenience. I am currently updating my portfolio.
        Please check back later.
      </p>
    </Section>
  );
}
