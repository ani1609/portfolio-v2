'use client';

import { useRef, useEffect, useState } from 'react';
import { Experience } from '@/types/experience';
import Link from 'next/link';

export default function ExperienceItems({
  experiences,
}: {
  experiences: Experience[];
}) {
  const experienceContentRef = useRef<HTMLDivElement>(null);
  const experienceDescriptionRef = useRef<HTMLDivElement>(null);
  const veticalSliderRef = useRef<HTMLDivElement>(null);
  const horizontalSliderRef = useRef<HTMLDivElement>(null);
  const [screenLessThan640, setScreenLessThan640] = useState<boolean>();
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

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

    const currentExperienceContentRef = experienceContentRef.current;

    if (currentExperienceContentRef)
      observer.observe(currentExperienceContentRef);

    return () => {
      if (currentExperienceContentRef)
        observer.unobserve(currentExperienceContentRef);
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
    <div
      className='experience-content flex justify-start flex-col sm:flex-row gap-10'
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
            className={`cursor-pointer w-[140px] min-w-[140px] h-10 border-b-2 border-light-navy sm:border-0 sm:border-l font-semibold tracking-[2px] font-open text-xs transition-all duration-500 ease-in-out hover:bg-hover hover:text-primary ${
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
        <h2 className='font-noto text-heading tracking-[0.5px] font-semibold text-sm md:text-base lg:text-lg'>
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

        <p className='font-open text-para text-[11px] sm:text-xs font-semibold tracking-[2px] '>
          {selectedExperience.date}
        </p>

        <ul className='flex flex-col gap-y-4 mt-3 experience-item'>
          {selectedExperience.description.map((item, index) => (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item }}
              className='tracking-[0.6px] [word-spacing:0.8px] text-sm sm:text-base font-source text-justify text-para 
              before:content-["▹"] before:text-primary before:text-base before:pr-2
              [&>a]:text-primary [&>a]:relative [&>a]:after:content-[""] [&>a]:after:absolute [&>a]:after:left-0 [&>a]:after:bottom-0 [&>a]:after:right-0 [&>a]:after:h-[0.5px] [&>a]:after:w-[0%] [&>a]:after:bg-primary [&>a]:after:transition-all [&>a]:after:duration-200 [&>a]:after:ease-in-out [&>a]:hover:after:w-full
              '
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
