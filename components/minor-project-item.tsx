'use client';

import { useRef, useEffect } from 'react';
import {
  FolderIcon,
  GithubIcon,
  SquareArrowOutUpRightIcon,
} from '@/assets/icons';
import Link from 'next/link';
import { MinorProject } from '@/types/minor-project';
import { openProjectLink } from '@/lib/utils';

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
      onClick={() =>
        openProjectLink({
          deployedLink: minorProject.deployedLink,
          githubLink: minorProject.githubLink,
        })
      }
      id='minor-project'
      ref={minorProjectRef}
      rel='noopener noreferrer'
      className='group h-[380px] sm:h-[350px] w-full flex flex-col justify-start gap-y-4 text-left p-5 bg-dark-navy transition-all duration-500 ease-in-out transform relative z-[2] rounded-sm overflow-hidden cursor-pointer shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] hover:-translate-y-1.5'
    >
      <div className='w-full flex justify-between items-center'>
        <div className='size-[45px] text-primary'>
          <FolderIcon className='size-full' />
        </div>

        <div className='flex gap-x-2 sm:gap-x-3'>
          {minorProject.githubLink && (
            <Link
              href={minorProject.githubLink}
              className='github_icon'
              target='_blank'
              onClick={(e) => e.stopPropagation()}
              rel='noopener noreferrer'
            >
              <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                <GithubIcon className='size-5 sm:size-6' />
              </div>
            </Link>
          )}

          {minorProject.deployedLink && (
            <Link
              href={minorProject.deployedLink}
              className='github_icon'
              target='_blank'
              onClick={(e) => e.stopPropagation()}
              rel='noopener noreferrer'
            >
              <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                <SquareArrowOutUpRightIcon className='size-5 sm:size-6' />
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-y-[5px]'>
        <h2 className='group-hover:text-primary font-noto-sans text-heading font-semibold transition-colors duration-500 ease-in-out text-base sm:text-lg'>
          {minorProject.title}
        </h2>

        {minorProject.tagLine && (
          <h4 className='text-xs text-primary font-open-sans font-light'>
            {minorProject.tagLine}
          </h4>
        )}
      </div>

      <p className='tracking-[0.6px] [word-spacing:0.8px] text-para text-sm sm:text-base text-justify'>
        {minorProject.description}
      </p>

      <ul className='mt-auto flex justify-between gap-x-5 flex-nowrap overflow-x-auto scrollbar-hide'>
        {minorProject.techStack.map((tech, index) => (
          <li
            key={index}
            className='font-open-sans text-para tracking-[1.6px] font-medium whitespace-nowrap text-xs'
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
