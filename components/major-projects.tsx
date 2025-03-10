'use client';

import { useRef, useEffect } from 'react';
import MajorProjectsItem from './major-project-item';
import '../styles/major-projects.css';
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
        entry.target.classList.add('showMajorProjectsHeading');
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
    <section className='major_projects_parent'>
      <h1 ref={MajorProjectHeadingRef}>Some Things I&apos;ve Built</h1>
      {majorProjects.map((majorProject, index) => {
        return <MajorProjectsItem key={index} majorProject={majorProject} />;
      })}
    </section>
  );
}
