'use client';

import { useRef, useEffect } from 'react';
import MajorProjectsItem from './major-project-item';
import { majorProjects } from '@/data/major-projects';

export default function MajorProjects() {
  const MajorProjectHeadingRef = useRef(null);

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

    const currentMajorProjectHeadingRef = MajorProjectHeadingRef.current;

    if (currentMajorProjectHeadingRef)
      observer.observe(currentMajorProjectHeadingRef);

    return () => {
      if (currentMajorProjectHeadingRef)
        observer.unobserve(currentMajorProjectHeadingRef);
    };
  }, []);

  return (
    <section
      id='major-projects-section'
      className='relative z-[2] mt-[150px] flex flex-col justify-start gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <h1
        ref={MajorProjectHeadingRef}
        className='font-noto text-heading text-[1.375rem] sm:text-2xl gap-x-2 sm:gap-x-4 md:text-[1.6255rem] lg:text-[1.75rem] flex items-center font-semibold before:content-["03."] before:text-base sm:before:text-lg md:before:text-xl lg:before:text-[1.375rem] before:font-mono before:text-primary before:font-light after:content-[""] after:h-px after:w-1/4 after:bg-light-navy'
      >
        Some Things I&apos;ve Built
      </h1>

      {majorProjects.map((majorProject, index) => {
        return <MajorProjectsItem key={index} majorProject={majorProject} />;
      })}
    </section>
  );
}
