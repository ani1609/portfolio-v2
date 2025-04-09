'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { Section } from './ui/section';
import { Heading, HeadingMarker, HeadingText } from './ui/heading';
import { emailAddress } from '@/data/header';

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
    <Section
      ref={contactRef}
      id='contact-section'
      className='h-[calc(100dvh-164.98px)] sm:h-[calc(100dvh-105.99px)] relative z-[2] flex flex-col items-center justify-center mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <Heading className='flex-col gap-y-1'>
        <HeadingMarker>05.</HeadingMarker>
        <HeadingText>Get In Touch</HeadingText>
      </Heading>

      <p className='max-w-[560px] mt-4 tracking-[0.6px] [word-spacing:0.8px] text-sm sm:text-base font-source-sans text-center text-para'>
        Feel free to reach out through the contact button below! I&apos;d love
        to connect and chat about web development, new projects, or anything
        exciting you have in mind. Let&apos;s build something awesome together!
      </p>

      <Link
        href={`mailto:${emailAddress}`}
        className='font-sf-mono text-primary text-sm font-light bg-transparent rounded-sm border border-primary py-3 px-6 mt-9 mx-auto hover:bg-hover tracking-[1px] transition-colors'
      >
        Let&apos;s Connect
      </Link>
    </Section>
  );
}
