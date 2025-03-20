'use client';

import { useRef, useEffect, useState } from 'react';
import { experiences } from '@/data/experience';
import Link from 'next/link';
import { Experience as ExperienceType } from '@/types/experience';
import { Section } from './ui/section';

export default function Experience() {
  const experienceHeadingRef = useRef(null);
  const experienceContentRef = useRef<HTMLDivElement>(null);
  const experienceDescriptionRef = useRef<HTMLDivElement>(null);
  const veticalSliderRef = useRef<HTMLDivElement>(null);
  const horizontalSliderRef = useRef<HTMLDivElement>(null);
  const [screenLessThan640, setScreenLessThan640] = useState<boolean>();
  const [selectedExperience, setSelectedExperience] = useState<ExperienceType>(
    experiences[0]
  );
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

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

    const experienceHeading = experienceHeadingRef.current;
    const experienceContents = experienceContentRef.current;

    if (experienceHeading) observer.observe(experienceHeading);
    if (experienceContents) observer.observe(experienceContents);

    return () => {
      if (experienceHeading) observer.unobserve(experienceHeading);
      if (experienceContents) observer.unobserve(experienceContents);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenLessThan640(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (experienceDescriptionRef.current) {
      experienceDescriptionRef.current.classList.remove('animate-fade-in');
      experienceDescriptionRef.current.style.opacity = '0';

      setTimeout(() => {
        experienceDescriptionRef.current?.classList.add('animate-fade-in');
      }, 1);
    }
  }, [selectedExperience]);

  const moveSlider = (index: number) => {
    if (screenLessThan640) {
      if (horizontalSliderRef.current) {
        horizontalSliderRef.current.style.transform = `translateX(${
          140 * index
        }px)`;
      }
    } else {
      if (veticalSliderRef.current) {
        veticalSliderRef.current.style.transform = `translateY(${
          40 * index
        }px)`;
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth < 640) {
      setScreenLessThan640(true);
    } else {
      setScreenLessThan640(false);
    }
  }, []);

  return (
    <Section
      id='experience-section'
      className='flex flex-col mt-[150px] gap-y-6 sm:gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <h1
        ref={experienceHeadingRef}
        className='font-noto text-heading text-[1.375rem] sm:text-2xl gap-x-2 sm:gap-x-4 md:text-[1.6255rem] lg:text-[1.75rem] flex items-center font-semibold before:content-["02."] before:text-base sm:before:text-lg md:before:text-xl lg:before:text-[1.375rem] before:font-mono before:text-primary before:font-light after:content-[""] after:h-px after:w-1/4 after:bg-light-navy'
      >
        Where I&apos;ve Worked
      </h1>

      <div
        className='flex justify-start flex-col sm:flex-row gap-10'
        ref={experienceContentRef}
      >
        <div className='relative scrollbar-hide flex flex-row sm:flex-col max-sm:max-w-full max-sm:overflow-x-auto'>
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedExperience(experience);
                setSelectedExperienceIndex(index);
                moveSlider(index);
              }}
              className={`cursor-pointer w-[140px] min-w-[140px] h-10 border-b-2 border-light-navy sm:border-0 sm:border-l font-semibold tracking-[2px] font-open-sans text-xs transition-all duration-500 ease-in-out hover:bg-hover hover:text-primary ${
                selectedExperienceIndex === index
                  ? 'text-primary bg-hover'
                  : 'text-para bg-transparent'
              }`}
            >
              {experience.company}
            </button>
          ))}
          {screenLessThan640 ? (
            <div
              ref={horizontalSliderRef}
              className='absolute bottom-0 w-[140px] h-0.5 bg-primary transition-all duration-200 ease-in-out'
            ></div>
          ) : (
            <div
              ref={veticalSliderRef}
              className='absolute left-0 w-0.5 h-10 bg-primary transition-all duration-200 ease-in-out'
            ></div>
          )}
        </div>

        <div className='flex flex-col gap-y-2.5' ref={experienceDescriptionRef}>
          <h2 className='font-noto-sans text-heading tracking-[0.5px] font-semibold text-sm md:text-base lg:text-lg'>
            {selectedExperience.jobTitle}{' '}
            <span className='text-primary'>
              @{' '}
              <Link
                href={selectedExperience.companyLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:right-0 after:h-[0.5px] after:w-[0%] after:bg-primary after:transition-all after:duration-200 after:ease-in-out hover:after:w-full'
              >
                {selectedExperience.company}
              </Link>
            </span>
          </h2>

          <p className='font-open-sans text-para tracking-[1.6px] font-medium whitespace-nowrap text-xs'>
            {selectedExperience.date}
          </p>

          <ul className='flex flex-col gap-y-4 mt-3 experience-item'>
            {selectedExperience.description.map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                className='tracking-[0.6px] [word-spacing:0.8px] text-para text-sm sm:text-base
              before:content-["▹"] before:text-primary before:text-base before:pr-2
              [&>a]:text-primary [&>a]:relative [&>a]:after:content-[""] [&>a]:after:absolute [&>a]:after:left-0 [&>a]:after:bottom-0 [&>a]:after:right-0 [&>a]:after:h-[0.5px] [&>a]:after:w-[0%] [&>a]:after:bg-primary [&>a]:after:transition-all [&>a]:after:duration-200 [&>a]:after:ease-in-out [&>a]:hover:after:w-full
              '
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
