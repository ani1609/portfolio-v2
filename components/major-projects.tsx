'use client';

import { useRef, useEffect } from 'react';
import MajorProjectsItem from './major-project-item';
import UiAstraImage from '@/public/images/ui-astra.webp';
import ConversifyImage from '@/public/images/conversify.webp';
import NeurouteAiImage from '@/public/images/neuroute-ai.webp';
import '../styles/major-projects.css';
import { MajorProject } from '@/types/major-project';

export default function MajorProjects() {
  const MajorProjects: MajorProject[] = [
    {
      id: 1,
      title: 'UI Astra',
      tagLine: 'UI Library',
      description:
        'A versatile UI library featuring reusable, customizable components built on top of Radix Primitives, and an integrated icon library, Astra Icons, for streamlined and efficient web development.',
      image: UiAstraImage,
      techStack: ['GSAP', 'Next.js', 'RadixUI', 'Tailwind CSS', 'Typescript'],
      github: 'https://github.com/uiastra',
      link: 'https://uiastra.com',
    },
    {
      id: 2,
      title: 'Neuroute AI',
      tagLine: 'AI based Clinical Research Platform',
      description:
        'A clinical research platform that leverages AI and data visualization to help researchers analyze past trials, identify study sites, and streamline the clinical trial process.',
      image: NeurouteAiImage,
      techStack: [
        'Firebase',
        'Framer Motion',
        'Next.js',
        'Pinecone',
        'PostgreSQL',
        'Recharts',
        'Tailwind CSS',
        'TypeScript',
      ],
      github: '',
      link: 'https://neuroute.ai',
    },
    {
      id: 3,
      title: 'Conversify',
      tagLine: 'End-to-End Encrypted Chat App',
      description:
        'Seamlessly integrating the OpenPGP library, this MERN-based application ensures secure and private messaging with real-time chat capabilities, prioritizing communication privacy and offering a seamless user experience.',
      image: ConversifyImage,
      techStack: [
        'Express',
        'MongoDB',
        'Multer',
        'OpenPGP',
        'React',
        'Socket.io',
      ],
      github: 'https://github.com/ani1609/Conversify',
      link: 'https://github.com/ani1609/Conversify',
    },
  ];

  const MajorProjectHeadingRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showMajorProjectsHeading');
      }
    }, options);

    const currentMajorProjectHeadingRef = MajorProjectHeadingRef.current;

    if (currentMajorProjectHeadingRef)
      observer.observe(currentMajorProjectHeadingRef);

    return () => {
      if (currentMajorProjectHeadingRef)
        observer.unobserve(currentMajorProjectHeadingRef);
    };
  }, []);

  return (
    <section className='major_projects_parent'>
      <h1 ref={MajorProjectHeadingRef}>Some Things I&apos;ve Built</h1>
      {MajorProjects.map((majorProject, index) => {
        return <MajorProjectsItem key={index} majorProject={majorProject} />;
      })}
    </section>
  );
}
