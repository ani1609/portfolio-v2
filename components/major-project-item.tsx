'use client';

import { useRef, useEffect } from 'react';
import { GithubIcon } from '@/assets/icons';
import Image from 'next/image';
import '../styles/major-project-item.css';
import { MajorProject } from '@/types/major-project';
import Link from 'next/link';

export default function MajorProjectsItem({
  majorProject,
}: {
  majorProject: MajorProject;
}) {
  const majorProjectOddRef = useRef(null);
  const majorProjectEvenRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showMajorProjects');
        }
      });
    }, options);

    const currentMajorProjectOddRef = majorProjectOddRef.current;
    const currentMajorProjectEvenRef = majorProjectEvenRef.current;

    if (currentMajorProjectOddRef) observer.observe(currentMajorProjectOddRef);
    if (currentMajorProjectEvenRef)
      observer.observe(currentMajorProjectEvenRef);

    return () => {
      if (currentMajorProjectOddRef)
        observer.unobserve(currentMajorProjectOddRef);
      if (currentMajorProjectEvenRef)
        observer.unobserve(currentMajorProjectEvenRef);
    };
  }, []);

  return (
    <div>
      {majorProject.id % 2 !== 0 ? (
        <div className='major_project_odd' ref={majorProjectOddRef}>
          <Link
            href={majorProject.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={majorProject.image} alt='project_image' />
          </Link>
          <div className='project_details_odd'>
            <div>
              <Link
                href={majorProject.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {majorProject.title}
              </Link>
              {majorProject.tagLine && <h4>{majorProject.tagLine}</h4>}
            </div>
            <p>{majorProject.description}</p>
            <ul>
              {majorProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <Link
              href={majorProject.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      ) : (
        <div className='major_project_even' ref={majorProjectEvenRef}>
          <Link
            href={majorProject.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image src={majorProject.image} alt='project_image' />
          </Link>
          <div className='project_details_even'>
            <div>
              <Link
                href={majorProject.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {majorProject.title}
              </Link>
              {majorProject.tagLine && <h4>{majorProject.tagLine}</h4>}
            </div>
            <p>{majorProject.description}</p>
            <ul>
              {majorProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <Link
              href={majorProject.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
