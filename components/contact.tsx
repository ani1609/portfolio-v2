'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
      }
    }, options);

    const currentContactRef = contactRef.current;

    if (currentContactRef) observer.observe(currentContactRef);

    return () => {
      if (currentContactRef) observer.unobserve(currentContactRef);
    };
  }, []);

  return (
    <section
      ref={contactRef}
      id='contact-section'
      className='h-[calc(100dvh-164.98px)] sm:h-[calc(100dvh-105.99px)] relative z-[2] flex flex-col items-center justify-center mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <h4 className='font-sf-mono text-base sm:text-lg md:text-xl lg:text-2xl font-light text-primary'>
        05.
      </h4>

      <h1
        style={{ wordSpacing: '5px' }}
        className='mt-2 font-noto-sans text-[clamp(30px,5vw,45px)] lg:text-[45px] text-heading font-semibold tracking-[1px]'
      >
        Get In Touch
      </h1>

      <p className='max-w-[550px] mt-4 tracking-[0.6px] [word-spacing:0.8px] text-sm sm:text-base font-source-sans text-center text-para'>
        Feel free to reach out to me through the contact button below. I&apos;m
        excited to connect and discuss any web development opportunities or
        projects you have in mind. Let&apos;s build something great together!
      </p>

      <Link
        href='mailto:ankitparallax@gmail.com'
        className='font-sf-mono text-primary text-sm font-light bg-transparent rounded-sm border border-primary py-3 px-6 mt-9 mx-auto hover:bg-hover tracking-[1px] transition-colors'
      >
        Let&apos;s Connect
      </Link>
    </section>
  );
}
