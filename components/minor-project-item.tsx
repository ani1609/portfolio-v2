'use client';

import { useRef, useEffect } from 'react';
import { FolderIcon, GithubIcon } from '@/assets/icons';
import Link from 'next/link';
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
        entry.target.classList.add('animate-slide-in');
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
      id='minor-project'
      ref={minorProjectRef}
      rel='noopener noreferrer'
      className='group h-[300px] sm:h-[330px] w-full flex flex-col justify-between text-left p-5 bg-dark-navy transition-all duration-500 ease-in-out transform relative z-[2] rounded-sm overflow-hidden cursor-pointer shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:-translate-y-1.5'
    >
      <div className='w-full flex justify-between items-center'>
        <div className='size-[45px] text-primary'>
          <FolderIcon className='size-full' />
        </div>

        <Link
          href={minorProject.github}
          className='github_icon'
          target='_blank'
          onClick={(e) => e.stopPropagation()}
          rel='noopener noreferrer'
        >
          <div className='p-1 size-8 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
            <GithubIcon className='size-full transition-colors duration-500 ease-in-out' />
          </div>
        </Link>
      </div>

      <div className='flex flex-col gap-[5px]'>
        <h2 className='group-hover:text-primary font-noto text-heading font-semibold transition-colors duration-500 ease-in-out text-base sm:text-lg'>
          {minorProject.title}
        </h2>
        {minorProject.tagLine && (
          <h4 className='text-[0.688rem] text-primary font-sans tracking-[0.5px] text-justify'>
            {minorProject.tagLine}
          </h4>
        )}
      </div>

      <p className='text-para text-sm sm:text-base font-source'>
        {minorProject.description}
      </p>

      <ul className='flex justify-between gap-x-5 flex-nowrap overflow-x-auto pb-1 overflow-y-hidden scrollbar-thin scrollbar-thumb-primary scrollbar-track-dark-navy'>
        {minorProject.techStack.map((tech, index) => (
          <li
            key={index}
            className='font-open text-para tracking-[1.5px] font-semibold whitespace-nowrap text-[0.688rem] sm:text-sm'
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
