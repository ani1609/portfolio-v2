'use client';

import { useRef, useEffect } from 'react';
import MyPhoto from '@/public/images/me.jpeg';
import Image from 'next/image';

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
    <section
      id='about-section'
      className='flex flex-col gap-y-10 mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <h1
        ref={aboutHeadingRef}
        className='font-noto text-heading text-[1.375rem] sm:text-2xl gap-x-2 sm:gap-x-4 md:text-[1.6255rem] lg:text-[1.75rem] flex items-center font-semibold before:content-["01."] before:text-base sm:before:text-lg md:before:text-xl lg:before:text-[1.375rem] before:font-mono before:text-primary before:font-light after:content-[""] after:h-px after:w-1/4 after:bg-light-navy'
      >
        About Me
      </h1>

      <div
        className='w-full flex flex-col justify-start md:flex-row md:justify-between gap-12'
        ref={aboutContentsRef}
      >
        <div className='w-full md:w-[60%] flex flex-col gap-y-4'>
          <p className={bodytextClassName}>
            Hey there, I&apos;m Ankit, a final-year B.Tech student in Computer
            Science and Engineering (CSE). Web development is my ultimate
            passion, and I thrive in creating captivating websites with seamless
            user experiences.
          </p>
          <p className={bodytextClassName}>
            Throughout my academic journey, coding has opened up endless
            possibilities, and I&apos;m always eager to learn more. While web
            development is my primary focus, I&apos;m also intrigued by Data
            Structures and Algorithms (DSA) for becoming a well-rounded coder.
          </p>
          <p className={bodytextClassName}>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className='flex gap-x-[3.75rem] '>
            <ul className='flex flex-col gap-y-1'>
              <li className={technologiesClassName}>Nextjs</li>
              <li className={technologiesClassName}>TypeScript</li>
              <li className={technologiesClassName}>Tailwind CSS</li>
            </ul>

            <ul className='flex flex-col gap-y-1'>
              <li className={technologiesClassName}>Go</li>
              <li className={technologiesClassName}>Expressjs</li>
              <li className={technologiesClassName}>PostgreSQL</li>
            </ul>
          </div>
          <p className={bodytextClassName}>
            As a final-year CSE student, I embrace challenges and seek growth.
            Collaborating with like-minded individuals and making an impact in
            computer science excites me.
          </p>
          <p className={bodytextClassName}>
            Innovation, curiosity, and a relentless pursuit of excellence define
            my journey as a web developer. I can&apos;t wait to see where this
            exciting path leads me next.
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
    </section>
  );
}
