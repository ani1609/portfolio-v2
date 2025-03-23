'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navItems, resumeLink, websiteLink } from '@/data/header';
import { Section } from '@/types/nav';

export default function Navbar() {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [navbarShadow, setNavbarShadow] = useState<boolean>(false);
  const [hamMenu, setHamMenu] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionToScroll: Section, offset: number = 80) => {
    const section = document.getElementById(sectionToScroll);

    if (section) {
      const offsetTop = section.offsetTop;
      const scrollToPosition = offsetTop - offset;
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
      setHamMenu(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = hamMenu ? 'hidden' : 'auto';
  }, [hamMenu]);

  useEffect(() => {
    const handleScroll = () => setNavbarShadow(window.scrollY > 5);

    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setHamMenu(false);
        setIsNew(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleHamMenu = () => setHamMenu((prev) => !prev);

  const handleHamIconClick = () => {
    toggleHamMenu();
    setIsNew(false);
  };

  return (
    shouldRender && (
      <header
        className={`bg-[#0e192d] h-[70px] w-full z-10 fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out px-5 sm:px-8 md:px-12 flex items-center justify-between ${
          navbarShadow
            ? 'shadow-[0px_10px_30px_-10px_rgba(2,12,27,0.7)]'
            : 'shadow-none'
        }`}
      >
        <Link
          href={websiteLink}
          className='animate-fade-in text-[1.625rem] flex items-center gap-x-0.5 font-medium tracking-wide'
        >
          <span className='text-primary'>A</span>
          <span className='text-heading/90'>KC</span>
        </Link>

        <div className='hidden lg:flex gap-x-9 items-center'>
          <ol className='flex gap-x-16 list-[decimal-leading-zero] marker:text-xs marker:text-primary marker:tracking-wider'>
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.scrollTo)}
                style={{ animationDelay: `${index * 100}ms` }}
                className='animate-slide-in-nav-item cursor-pointer font-sf-mono text-heading py-2 pr-2 tracking-wider text-xs hover:text-primary transition-colors duration-500 ease-in-out'
              >
                {item.title}
              </li>
            ))}
          </ol>

          <Link
            href={resumeLink}
            target='_blank'
            rel='noopener noreferrer'
            style={{ animationDelay: `${navItems.length * 100}ms` }}
            className='animate-slide-in-nav-item text-xs text-primary font-open-sans py-3 px-6 font-medium tracking-[1px] border border-primary rounded-sm hover:bg-hover transition-all duration-500 ease-in-out'
          >
            Resume
          </Link>
        </div>

        <div
          className='relative z-[5] flex lg:hidden size-[45px] animate-fade-in flex-col justify-center items-center gap-[5px] cursor-pointer'
          onClick={handleHamIconClick}
        >
          <span
            className={`bg-primary relative h-[3px] w-[30px] rounded-[1px] transition-[0.5s_ease-in-out] ${
              hamMenu
                ? 'animate-rotate-down'
                : isNew
                  ? ''
                  : 'animate-remove-rotate-down'
            }`}
          ></span>
          <span
            className={`bg-primary relative h-[3px] w-[30px] rounded-[1px] transition-[0.5s_ease-in-out] ${
              hamMenu ? (isNew ? '' : 'opacity-0') : ''
            }`}
          ></span>
          <span
            className={`bg-primary relative h-[3px] w-[30px] rounded-[1px] transition-[0.5s_ease-in-out] ${
              hamMenu
                ? 'animate-rotate-up'
                : isNew
                  ? ''
                  : 'animate-remove-rotate-up'
            }`}
          ></span>
        </div>

        {hamMenu && (
          <div
            className='fixed z-[3] top-0 right-0 bottom-0 h-dvh w-screen [transition:0.5s_ease-in-out] backdrop-filter backdrop-blur-[2px]'
            onClick={toggleHamMenu}
          ></div>
        )}

        <div
          className={`z-[4] flex lg:hidden bg-navy h-dvh w-[75vw] max-w-[400px] fixed top-0 right-0 bottom-0 flex-col justify-center items-center gap-y-10 [transition:0.5s_ease-in-out] ${hamMenu ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <ol className='flex flex-col gap-y-8 list-[decimal-leading-zero] marker:text-xs marker:text-primary marker:tracking-wider'>
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => scrollToSection(item.scrollTo)}
                className='cursor-pointer font-sf-mono text-heading py-2 pr-2 tracking-wider text-center text-xs hover:text-primary transition-colors duration-500 ease-in-out'
              >
                {item.title}
              </li>
            ))}
          </ol>

          <Link
            href={resumeLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs text-primary font-open-sans py-3 px-6 font-medium tracking-[1px] border border-primary rounded-sm hover:bg-hover transition-all duration-500 ease-in-out'
          >
            Resume
          </Link>
        </div>
      </header>
    )
  );
}
