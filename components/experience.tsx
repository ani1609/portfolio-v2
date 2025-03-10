'use client';

import { useRef, useEffect } from 'react';
import ExperienceItems from './experience-items';
import '../styles/experience.css';
import { experiences } from '@/data/experience';

export default function Experience() {
  const experienceHeadingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showExperienceHeading');
        }
      });
    }, options);

    const currentExperienceHeadingRef = experienceHeadingRef.current;

    if (currentExperienceHeadingRef)
      observer.observe(currentExperienceHeadingRef);

    return () => {
      if (currentExperienceHeadingRef)
        observer.unobserve(currentExperienceHeadingRef);
    };
  }, []);

  return (
    <section className='experience_container'>
      <h1 ref={experienceHeadingRef}>Where I&apos;ve Worked</h1>
      <ExperienceItems experiences={experiences} />
    </section>
  );
}
