'use client';

import { useRef, useEffect } from 'react';
import { GithubIcon, SquareArrowOutUpRightIcon } from '@/assets/icons';
import Image from 'next/image';
import { MajorProject } from '@/types/major-project';
import Link from 'next/link';
import { openProjectLink } from '@/lib/utils';

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
          entry.target.classList.add('animate-slide-in');
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
    <>
      {majorProject.id % 2 !== 0 ? (
        <div
          id='major-project-odd'
          className='w-full h-[380px] sm:h-[350px] flex justify-end items-center relative z-[2]'
          ref={majorProjectOddRef}
        >
          <div
            onClick={() =>
              openProjectLink({
                deployedLink: majorProject.deployedLink,
                githubLink: majorProject.githubLink,
              })
            }
            className={`group left-0 w-full max-md:pointer-events-none cursor-pointer rounded-sm overflow-hidden absolute z-[inherit] opacity-25 md:opacity-100 bg-primary hover:bg-transparent h-full md:w-[60%] shadow-[0_0px_30px_-15px_rgba(2,12,27,0.7)] transition-colors duration-500 ease-in-out
              before:content-[""] before:absolute before:z-[inherit] before:inset-0 before:bg-navy before:mix-blend-screen hover:before:bg-transparent hover:before:grayscale-0 hover:before:contrast-100 hover:before:brightness-100
            `}
          >
            <Image
              src={majorProject.image}
              alt={majorProject.title}
              className='size-full object-cover mix-blend-multiply filter grayscale contrast-100 brightness-50 md:brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-colors duration-500 ease-in-out'
            />
          </div>

          <div className='w-full p-5 flex flex-col justify-between md:items-end h-full items-start md:w-1/2 md:p-0 z-[inherit] relative'>
            <div className='md:text-right flex flex-col justify-center gap-[5px]'>
              <Link
                href={
                  majorProject.deployedLink || majorProject.githubLink || '#'
                }
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-xl md:text-[1.375rem] lg:text-2xl font-noto-sans font-semibold tracking-[1px] text-heading transition-colors duration-500 hover:text-primary'
              >
                {majorProject.title}
              </Link>

              {majorProject.tagLine && (
                <h4 className='text-xs text-primary font-open-sans'>
                  {majorProject.tagLine}
                </h4>
              )}
            </div>

            <p className='tracking-[0.6px] [word-spacing:0.8px] text-para text-sm sm:text-base text-justify md:text-right max-md:bg-transparent md:drop-shadow-lg bg-dark-navy md:p-5 rounded-sm'>
              {majorProject.description}
            </p>

            <ul className='flex items-center gap-x-5 flex-nowrap overflow-x-auto overflow-y-hidden max-w-full scrollbar-hide'>
              {majorProject.techStack.map((tech, index) => (
                <li
                  key={index}
                  className='font-open-sans text-para tracking-[1.6px] font-medium whitespace-nowrap text-xs'
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-x-2 sm:gap-x-3'>
              {majorProject.githubLink && (
                <Link
                  href={majorProject.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                    <GithubIcon className='size-5 sm:size-6' />
                  </div>
                </Link>
              )}

              {majorProject.deployedLink && (
                <Link
                  href={majorProject.deployedLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                    <SquareArrowOutUpRightIcon className='size-5 sm:size-6' />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          id='major-project-even'
          className='w-full h-[380px] sm:h-[350px] flex justify-start items-center relative z-[2]'
          ref={majorProjectEvenRef}
        >
          <div
            onClick={() =>
              openProjectLink({
                deployedLink: majorProject.deployedLink,
                githubLink: majorProject.githubLink,
              })
            }
            className={`group right-0 w-full max-md:pointer-events-none cursor-pointer rounded-sm overflow-hidden absolute z-[inherit] opacity-25 md:opacity-100 bg-primary hover:bg-transparent h-full md:w-[60%] shadow-[0_0px_30px_-15px_rgba(2,12,27,0.7)] transition-colors duration-500 ease-in-out
              before:content-[""] before:absolute before:z-[inherit] before:inset-0 before:bg-navy before:mix-blend-screen hover:before:bg-transparent hover:before:grayscale-0 hover:before:contrast-100 hover:before:brightness-100
            `}
          >
            <Image
              src={majorProject.image}
              alt={majorProject.title}
              className='size-full object-cover mix-blend-multiply filter grayscale contrast-100 brightness-50 md:brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-colors duration-500 ease-in-out'
            />
          </div>

          <div className='w-full p-5 flex flex-col justify-between md:items-start h-full items-start md:w-1/2 md:p-0 z-[inherit] relative'>
            <div className='flex flex-col justify-center gap-[5px]'>
              <Link
                href={
                  majorProject.deployedLink || majorProject.githubLink || '#'
                }
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg sm:text-xl md:text-[1.375rem] lg:text-2xl font-noto-sans font-semibold tracking-[1px] text-heading transition-colors duration-500 hover:text-primary'
              >
                {majorProject.title}
              </Link>

              {majorProject.tagLine && (
                <h4 className='text-xs text-primary font-open-sans'>
                  {majorProject.tagLine}
                </h4>
              )}
            </div>

            <p className='tracking-[0.6px] [word-spacing:0.8px] text-para text-sm sm:text-base text-justify md:text-left max-md:bg-transparent md:drop-shadow-lg bg-dark-navy md:p-5 rounded-sm'>
              {majorProject.description}
            </p>

            <ul className='flex items-center gap-x-5 flex-nowrap overflow-x-auto overflow-y-hidden max-w-full scrollbar-hide'>
              {majorProject.techStack.map((tech, index) => (
                <li
                  key={index}
                  className='font-open-sans text-para tracking-[1.6px] font-medium whitespace-nowrap text-xs'
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-x-2 sm:gap-x-3'>
              {majorProject.githubLink && (
                <Link
                  href={majorProject.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                    <GithubIcon className='size-5 sm:size-6' />
                  </div>
                </Link>
              )}

              {majorProject.deployedLink && (
                <Link
                  href={majorProject.deployedLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='p-1 text-para hover:text-primary transition-colors duration-500 ease-in-out'>
                    <SquareArrowOutUpRightIcon className='size-5 sm:size-6' />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
