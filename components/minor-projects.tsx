'use client';

import { useRef, useEffect, useState } from 'react';
import MinorProjectItem from './minor-project-item';
import { minorProjects } from '@/data/minor-projects';

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
    <section
      id='minor-projects-section'
      className='mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%] relative z-[2] mt-[150px] flex flex-col justify-start gap-y-10'
    >
      <h1
        ref={minorProjectHeadingRef}
        // removing before for now
        className='font-noto text-heading text-[1.375rem] sm:text-2xl gap-x-2 sm:gap-x-4 md:text-[1.6255rem] lg:text-[1.75rem] flex items-center justify-center font-semibold before:content-[""] before:h-px before:w-[7%] before:bg-light-navy after:content-[""] after:h-px after:w-[7%] after:bg-light-navy'
      >
        Other Noteworthy Projects
      </h1>

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
    </section>
  );
}
