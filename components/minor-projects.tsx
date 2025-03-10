'use client';

import { useRef, useEffect, useState } from 'react';
import MinorProjectItem from './minor-project-item';
import '../styles/minor-projects.css';
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
        entry.target.classList.add('showMinorProjectsHeading');
      }
    }, options);

    const currentHeadingRef = minorProjectHeadingRef.current;

    if (currentHeadingRef) observer.observe(currentHeadingRef);

    return () => {
      if (currentHeadingRef) observer.unobserve(currentHeadingRef);
    };
  }, []);

  return (
    <section className='minor_projects_parent'>
      <h1 ref={minorProjectHeadingRef}>Other Noteworthy Projects</h1>
      <div className='minor_projects_container'>
        {minorProjects
          .slice(0, showAllProjects ? minorProjects.length : 3)
          .map((minorProject, index) => (
            <MinorProjectItem key={index} minorProject={minorProject} />
          ))}
      </div>
      {minorProjects.length > 3 && (
        <button onClick={() => setShowAllProjects((prev) => !prev)}>
          {showAllProjects ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
}
