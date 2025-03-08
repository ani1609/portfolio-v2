'use client';

import { useRef, useEffect, useState } from 'react';
import '../styles/experience-items.css';
import { Experience } from '@/types/experience';

export default function ExperienceItems({
  experiences,
}: {
  experiences: Experience[];
}) {
  const experienceContentRef = useRef<HTMLDivElement>(null);
  const experienceDescriptionRef = useRef<HTMLDivElement>(null);
  const veticalSliderRef = useRef<HTMLDivElement>(null);
  const horizontalSliderRef = useRef<HTMLDivElement>(null);
  const [screenLessThan650, setScreenLessThan650] = useState<boolean>();

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setScreenLessThan650(window.innerWidth < 650);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [selectedExperience, setSelectedExperience] = useState<Experience>(
    experiences[0]
  );
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showExperienceContent');
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
      experienceDescriptionRef.current.classList.remove('fade_in_description');
      experienceDescriptionRef.current.style.opacity = '0';

      setTimeout(() => {
        experienceDescriptionRef.current?.classList.add('fade_in_description');
      }, 1);
    }
  }, [selectedExperience]);

  const moveSlider = (index: number) => {
    if (screenLessThan650) {
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
    if (window.innerWidth < 650) {
      setScreenLessThan650(true);
    } else {
      setScreenLessThan650(false);
    }
  }, []);

  return (
    <div className='experience_content' ref={experienceContentRef}>
      <div className='experience_tabs'>
        {experiences.map((experience, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedExperience(experience);
              setSelectedExperienceIndex(index);
              moveSlider(index);
            }}
            className={
              selectedExperienceIndex === index ? 'selected_experience' : ''
            }
          >
            {experience.company}
          </button>
        ))}
        {screenLessThan650 ? (
          <div className='horizontal_slider' ref={horizontalSliderRef}></div>
        ) : (
          <div className='vertical_slider' ref={veticalSliderRef}></div>
        )}
      </div>
      <div className='experience_description' ref={experienceDescriptionRef}>
        <h2>
          {selectedExperience.jobTitle}{' '}
          <span>
            @{' '}
            <a
              href={selectedExperience.companyLink}
              target='_blank'
              rel='noopener noreferrer'
              onClick={(e) => {
                if (selectedExperience.id === 3) {
                  e.preventDefault();
                }
              }}
            >
              {selectedExperience.company}
            </a>
          </span>
        </h2>
        <p>{selectedExperience.date}</p>
        <ul>
          {selectedExperience.description.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
