'use client';

import { useRef, useEffect, useState } from 'react';
import MinorProjectItem from './minor-project-item';
import { minorProjects } from '@/data/minor-projects';
import { Section } from './ui/section';
import { Heading, HeadingText, HeadingLine } from './ui/heading';

export default function MinorProjects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const minorProjectHeadingRef = useRef(null);

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

    const currentHeadingRef = minorProjectHeadingRef.current;

    if (currentHeadingRef) observer.observe(currentHeadingRef);

    return () => {
      if (currentHeadingRef) observer.unobserve(currentHeadingRef);
    };
  }, []);

  return (
    <Section
      id='minor-projects-section'
      className='mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%] relative z-[2] mt-[150px] flex flex-col justify-start gap-y-6 sm:gap-y-10'
    >
      <Heading ref={minorProjectHeadingRef} className='justify-center'>
        <HeadingLine />
        <HeadingText>Other Noteworthy Projects</HeadingText>
        <HeadingLine />
      </Heading>

      <div className='w-full gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {minorProjects
          .slice(0, showAllProjects ? minorProjects.length : 3)
          .map((minorProject, index) => (
            <MinorProjectItem key={index} minorProject={minorProject} />
          ))}
      </div>
      {minorProjects.length > 3 && (
        <button
          onClick={() => setShowAllProjects((prev) => !prev)}
          className='cursor-pointer font-mono text-primary text-sm font-light bg-transparent rounded-sm border border-primary py-3 px-6 mx-auto hover:bg-hover tracking-[1px] transition-colors'
        >
          {showAllProjects ? 'Show Less' : 'Show More'}
        </button>
      )}
    </Section>
  );
}
