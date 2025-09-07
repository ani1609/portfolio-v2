'use client';

import { useRef, useEffect } from 'react';
import { Section } from './ui/section';
import MyPhoto from '@/public/images/me.webp';
import Image from 'next/image';
import { Heading, HeadingMarker, HeadingText, HeadingLine } from './ui/heading';

export default function About() {
  const aboutHeadingRef = useRef(null);
  const aboutContentsRef = useRef(null);
  const bodytextClassName = `tracking-[0.6px] [word-spacing:0.8px] text-para text-sm sm:text-base `;
  const technologiesClassName = `font-open-sans text-para tracking-[1.6px] font-medium whitespace-nowrap text-xs before:content-["▹"] before:text-primary before:text-sm before:pr-2`;

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

    const aboutHeading = aboutHeadingRef.current;
    const aboutContents = aboutContentsRef.current;

    if (aboutHeading) observer.observe(aboutHeading);
    if (aboutContents) observer.observe(aboutContents);

    return () => {
      if (aboutHeading) observer.unobserve(aboutHeading);
      if (aboutContents) observer.unobserve(aboutContents);
    };
  }, []);

  return (
    <Section
      id='about-section'
      className='flex flex-col gap-y-6 sm:gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <Heading id='about-heading' ref={aboutHeadingRef}>
        <HeadingMarker>01.</HeadingMarker>
        <HeadingText>About Me</HeadingText>
        <HeadingLine />
      </Heading>

      <div
        id='about-content'
        className='w-full flex flex-col justify-start md:flex-row md:justify-between gap-12'
        ref={aboutContentsRef}
      >
        <div className='w-full md:w-[60%] flex flex-col gap-y-4'>
          <p className={bodytextClassName}>
            I&apos;m a recent Computer Science graduate who loves building
            high-performance web apps that are as smooth to use as they are
            visually striking-efficient, scalable, and crafted for a seamless
            experience.
          </p>

          <div className='w-full flex flex-col gap-y-1'>
            <p className={bodytextClassName}>
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <div className='flex gap-x-[3.75rem]'>
              <ul className='flex flex-col gap-y-1'>
                <li className={technologiesClassName}>Next.js</li>
                <li className={technologiesClassName}>TypeScript</li>
                <li className={technologiesClassName}>Go</li>
                <li className={technologiesClassName}>Express.js</li>
                <li className={technologiesClassName}>PostgreSQL</li>
                <li className={technologiesClassName}>MongoDB</li>
              </ul>

              <ul className='flex flex-col gap-y-1'>
                <li className={technologiesClassName}>Docker</li>
                <li className={technologiesClassName}>Kubernetes</li>
                <li className={technologiesClassName}>
                  CI/CD (GitHub Actions)
                </li>
                <li className={technologiesClassName}>LLMs</li>
                <li className={technologiesClassName}>LangChain</li>
                <li className={technologiesClassName}>Vector DBs</li>
              </ul>
            </div>
          </div>

          {/* <p className={bodytextClassName}>
            I&apos;m always exploring DSA to sharpen my problem-solving skills
            and push my coding abilities further.
          </p> */}

          {/* <p className={bodytextClassName}>
            I love tech gadgets, capturing moments through the lens, staying
            active with fitness and sports, traveling to new places, and
            expressing myself through style and fashion.
          </p> */}

          <p className={bodytextClassName}>
            For me, it&apos;s all about enjoying the process-learning, building,
            and growing. The outcomes? I am sure they&apos;ll take care of
            themselves.
          </p>
        </div>

        <div
          className='group size-[260px] mx-auto md:size-[21vw] max-w-[300px] max-h-[300px] min-w-[200px] min-h-[200px] rounded-[4px] relative 
          before:content-[""] before:absolute before:inset-0 before:rounded-[4px] before:bg-[#182b3c] before:mix-blend-color before:transition-transform before:duration-500 before:ease-in-out
          after:content-[""] after:block after:absolute after:size-full after:inset-[9px] after:border-[2px] after:border-[#30476e] after:rounded-[4px] after:-z-[1] after:transition-transform after:duration-500 after:ease-in-out
          hover:before:-translate-x-[3px] hover:before:-translate-y-[3px]
          hover:after:translate-x-[3px] hover:after:translate-y-[3px]'
        >
          <Image
            src={MyPhoto}
            alt='my-photo'
            className='size-full object-cover rounded-[4px] bg-[rgb(221,221,221)] transition-transform duration-500 ease-in-out group-hover:-translate-x-[3px] group-hover:-translate-y-[3px]'
          />
        </div>
      </div>
    </Section>
  );
}
