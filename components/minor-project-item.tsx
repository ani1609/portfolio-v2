'use client';

import { useRef, useEffect } from 'react';
import { FolderIcon, GithubIcon } from '@/assets/icons';
import Link from 'next/link';
import '../styles/minor-project-item.css';
import { MinorProject } from '@/types/minor-project';

export default function MinorProjectItem({
  minorProject,
}: {
  minorProject: MinorProject;
}) {
  const minorProjectRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showMinorProject');
      }
    }, options);

    const currentMinorProjectRef = minorProjectRef.current;

    if (currentMinorProjectRef) observer.observe(currentMinorProjectRef);

    return () => {
      if (currentMinorProjectRef) observer.unobserve(currentMinorProjectRef);
    };
  }, []);

  return (
    <div
      onClick={() => window.open(minorProject.link, '_blank')}
      className='minor_project'
      ref={minorProjectRef}
      rel='noopener noreferrer'
    >
      <div className='icons'>
        <div className='folder_icon'>
          <FolderIcon className='size-full' />
        </div>
        <Link
          href={minorProject.github}
          className='github_icon'
          target='_blank'
          onClick={(e) => e.stopPropagation()}
          rel='noopener noreferrer'
        >
          <GithubIcon className='size-full' />
        </Link>
      </div>

      <div className='minor_title'>
        <h2>{minorProject.title}</h2>
        {minorProject.tagLine && <h4>{minorProject.tagLine}</h4>}
      </div>

      <p>{minorProject.description}</p>

      <ul>
        {minorProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
