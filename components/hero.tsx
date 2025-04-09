import { emailAddress } from '@/data/header';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id='hero-section'
      className='relative z-[2] h-dvh flex flex-col justify-center items-start mx-auto px-5 sm:px-10 md:px-20 w-full lg:px-0 lg:w-[75%]'
    >
      <h4 className='animate-slide-in-hero-item hero-delay-300 md:hero-delay-900 font-open-sans text-sm sm:text-base text-primary tracking-[1px] [word-spacing:5px]'>
        Hi, my name is
      </h4>

      <h1 className='animate-slide-in-hero-item hero-delay-400 md:hero-delay-1000 mt-1 sm:mt-2.5 font-noto-sans text-heading font-semibold text-[1.375rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem]'>
        Ankit Kr. Chowdhury.
      </h1>

      <h2 className='animate-slide-in-hero-item hero-delay-500 md:hero-delay-1100 mt-1 sm:mt-0 font-noto-sans text-para font-semibold text-[1.375rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem]'>
        I build things for the web.
      </h2>

      <p className='animate-slide-in-hero-item hero-delay-600 md:hero-delay-1200 mt-3 sm:mt-4 md:mt-5 leading-5 sm:leading-6 text-sm sm:text-base tracking-[0.6px] text-justify w-full sm:w-[550px] text-para'>
        Enthusiastic student web developer with a keen interest in learning and
        applying front-end and back-end technologies. Dedicated to honing skills
        creating web solutions that captivate users solve real-world challenges.
      </p>

      <Link
        href={`mailto:${emailAddress}`}
        className='animate-slide-in-hero-item hero-delay-700 md:hero-delay-1300 mt-7 sm:mt-10 md:12 text-xs text-primary font-open-sans py-3 px-6 font-medium tracking-[1px] border border-primary rounded-sm hover:bg-hover transition-colors duration-500 ease-in-out'
      >
        Hire me!
      </Link>
    </section>
  );
}
