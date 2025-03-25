'use client';

import { useRef, useEffect } from 'react';
import MajorProjectsItem from './major-project-item';
import { majorProjects } from '@/data/major-projects';
import { Section } from './ui/section';
import { Heading, HeadingLine, HeadingMarker, HeadingText } from './ui/heading';

export default function MajorProjects() {
  const majorProjectHeadingRef = useRef(null);

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

    const currentMajorProjectHeadingRef = majorProjectHeadingRef.current;

    if (currentMajorProjectHeadingRef)
      observer.observe(currentMajorProjectHeadingRef);

    return () => {
      if (currentMajorProjectHeadingRef)
        observer.unobserve(currentMajorProjectHeadingRef);
    };
  }, []);

  return (
    <Section
      id='major-projects-section'
      className='relative z-[2] mt-[150px] flex flex-col justify-start gap-y-6 sm:gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <Heading id='major-projects-heading' ref={majorProjectHeadingRef}>
        <HeadingMarker>03.</HeadingMarker>
        <HeadingText>Some Things I&apos;ve Built</HeadingText>
        <HeadingLine />
      </Heading>

      <div className='flex flex-col gap-y-6 sm:gap-y-10'>
        {majorProjects.map((majorProject, index) => {
          return (
            <MajorProjectsItem
              key={index}
              majorProject={majorProject}
              index={index}
            />
          );
        })}
      </div>
    </Section>
  );
}
