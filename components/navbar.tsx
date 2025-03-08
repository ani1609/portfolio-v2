'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '@/public/images/A.webp';
import '../styles/navbar.css';

export default function Navbar() {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [navbarShadow, setNavbarShadow] = useState<boolean>(false);
  const [hamMenu, setHamMenu] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(true);

  const resumeLink =
    'https://drive.google.com/file/d/1wF7-y_bC_rymmTKyVz2ZAosZuhBwao4_/view?usp=sharing';

  useEffect(() => {
    const timer = setTimeout(() => setShouldRender(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (selector: string, offset: number = 80) => {
    const section = document.querySelector(selector) as HTMLElement | null;
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
      if (window.innerWidth >= 769) {
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
    <div>
      {shouldRender && (
        <nav
          className={
            navbarShadow ? 'navbar_container navbar_shadow' : 'navbar_container'
          }
        >
          <a
            href='https://portfolio-ani1609.vercel.app'
            className='logo-container'
          >
            <Image src={Logo} alt='logo' />
          </a>
          <div className='nav_tabs'>
            <ol>
              <li onClick={() => scrollToSection('.about_container')}>About</li>
              <li onClick={() => scrollToSection('.experience_container')}>
                Experience
              </li>
              <li onClick={() => scrollToSection('.major_projects_parent')}>
                Work
              </li>
              <li onClick={() => scrollToSection('.contact_container', 0)}>
                Contact
              </li>
            </ol>
            <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </div>
          <div className='ham_icon' onClick={handleHamIconClick}>
            <span
              className={
                hamMenu ? 'rotateDown' : isNew ? '' : 'removeRotateDown'
              }
            ></span>
            <span className={hamMenu ? (isNew ? '' : 'remove') : ''}></span>
            <span
              className={hamMenu ? 'rotateUp' : isNew ? '' : 'removeRotateUp'}
            ></span>
          </div>
          {hamMenu && <div className='blur' onClick={toggleHamMenu}></div>}
          <div
            className={
              hamMenu ? 'ham_tabs ham_tabs_show' : 'ham_tabs ham_tabs_hide'
            }
          >
            <ol>
              <li onClick={() => scrollToSection('.about_container')}>About</li>
              <li onClick={() => scrollToSection('.experience_container')}>
                Experience
              </li>
              <li onClick={() => scrollToSection('.major_projects_parent')}>
                Work
              </li>
              <li onClick={() => scrollToSection('.contact_container', 0)}>
                Contact
              </li>
            </ol>
            <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
