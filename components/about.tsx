'use client';

import { useRef, useEffect } from 'react';
import MyPhoto from '@/public/images/me.jpeg';
import Image from 'next/image';
import '../styles/about.css';

export default function About() {
  const aboutHeadingRef = useRef(null);
  const aboutDescriptionRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showAbout');
        }
      });
    }, options);

    const aboutHeading = aboutHeadingRef.current;
    const aboutDescription = aboutDescriptionRef.current;
    const aboutImage = aboutImageRef.current;

    if (aboutHeading) observer.observe(aboutHeading);
    if (aboutDescription) observer.observe(aboutDescription);
    if (aboutImage) observer.observe(aboutImage);

    return () => {
      if (aboutHeading) observer.unobserve(aboutHeading);
      if (aboutDescription) observer.unobserve(aboutDescription);
      if (aboutImage) observer.unobserve(aboutImage);
    };
  }, []);

  return (
    <section className='about_container'>
      <h1 ref={aboutHeadingRef}>About Me</h1>
      <div className='about_contents'>
        <div ref={aboutDescriptionRef} className='about_description'>
          <p>
            Hey there, I&apos;m Ankit, a final-year B.Tech student in Computer
            Science and Engineering (CSE). Web development is my ultimate
            passion, and I thrive in creating captivating websites with seamless
            user experiences.
          </p>
          <p>
            Throughout my academic journey, coding has opened up endless
            possibilities, and I&apos;m always eager to learn more. While web
            development is my primary focus, I&apos;m also intrigued by Data
            Structures and Algorithms (DSA) for becoming a well-rounded coder.
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <div className='skills_list'>
            <ul>
              <li>Nextjs</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
            <ul>
              <li>Go</li>
              <li>Expressjs</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
          <p>
            As a 3rd-year CSE student, I embrace challenges and seek growth.
            Collaborating with like-minded individuals and making an impact in
            computer science excites me.
          </p>
          <p>
            Innovation, curiosity, and a relentless pursuit of excellence define
            my journey as a web developer. I can&apos;t wait to see where this
            exciting path leads me next.
          </p>
        </div>
        <div ref={aboutImageRef} className='about_photo'>
          <Image src={MyPhoto} alt='my_photo' />
        </div>
      </div>
    </section>
  );
}
