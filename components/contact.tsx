'use client';

import { useRef, useEffect } from 'react';
import '../styles/contact.css';
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
        entry.target.classList.add('showContact');
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
      className='contact_container h-[calc(100dvh-169.98px)] sm:h-[calc(100dvh-109.99px)] px-5 sm:px-12 md:px-24 relative z-[2] mx-auto flex flex-col items-center justify-center'
    >
      <h4 className='font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-light text-primary'>
        05.
      </h4>

      <h1
        style={{ wordSpacing: '5px' }}
        className='mt-2 font-noto text-[clamp(30px,5vw,45px)] lg:text-[45px] text-heading font-semibold tracking-[1px]'
      >
        Get In Touch
      </h1>

      <p
        style={{ wordSpacing: '0.8px' }}
        className='max-w-[550px] mt-4 tracking-[0.4px] text-sm sm:text-base font-source text-center text-para'
      >
        Feel free to reach out to me through the contact button below. I&apos;m
        excited to connect and discuss any web development opportunities or
        projects you have in mind. Let&apos;s build something great together!
      </p>

      <Link
        href='mailto:ankitparallax@gmail.com'
        className='font-mono text-primary text-sm sm:text-base font-light bg-transparent rounded-sm border border-primary py-3 px-6 mt-9 mx-auto hover:bg-hover tracking-[1px] transition-colors'
      >
        Let&apos;s Connect
      </Link>
    </section>
  );
}
