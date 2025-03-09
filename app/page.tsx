'use client';

import { useEffect } from 'react';
import Maintenance from '@/components/maintenance';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Sidebars from '@/components/sidebars';
import About from '@/components/about';
import ExperienceSection from '@/components/experience';
import MajorProjects from '@/components/major-projects';
import MinorProjects from '@/components/minor-projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import TopButton from '@/components/top-button';
import GithubFootprints from '@/components/github-footprints';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return (
      <main className='max-w-[1440px] mx-auto my-0'>
        <Maintenance />
      </main>
    );
  } else {
    return (
      <main className='max-w-[1440px] mx-auto my-0'>
        <Navbar />
        <Hero />
        <Sidebars />
        <About />
        <ExperienceSection />
        <MajorProjects />
        <MinorProjects />
        <GithubFootprints />
        <Contact />
        <Footer />
        <TopButton />
      </main>
    );
  }
}
