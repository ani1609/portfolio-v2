import { useRef, useEffect } from 'react';
import ExperienceItems from './experience-items';
import '../styles/experience.css';
import { Experience } from '@/types/experience';

export default function ExperienceSection() {
  const experienceHeadingRef = useRef(null);

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'UI Astra',
      jobTitle: 'Full Stack Developer',
      companyLink: 'https://www.uiastra.com/',
      date: 'Apr 2024 - Present',
      description: [
        'Integrated <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">CodeSandbox</a> using Sandpack Toolkit, providing users with interactive previews of components, resulting in a <b>25%</b> reduction in time spent on manual testing and component validation.',
        'Contributed to the development and integration of <a href="https://uiastra.com/icons" target="_blank" rel="noopener noreferrer">Astra Icons</a>, an icon library, enhancing visual consistency across projects and reducing design inconsistency issues by <b>20%</b>.',
        'Authored comprehensive documentation for setting up UI Astra in environments including Next.js, Vite, Remix, Astro, Laravel, Gatsby, and custom setups, after rigorous testing. Documentation also included guidelines for dark mode implementation across all frameworks, reducing onboarding time for developers by <b>50%</b>.',
      ],
    },
    {
      id: 2,
      company: 'Neuroute AI',
      jobTitle: 'Full Stack Developer',
      companyLink: 'https://www.neuroute.ai/',
      date: 'DEC 2024 - Present',
      description: [
        'Integrated <a href="https://clinicaltrials.gov/data-api/api" target="_blank" rel="noopener noreferrer">CTGOV APIs</a> to fetch extensive clinical trial data, reducing research time by <b>40%</b> and enabling researchers to analyze <b>529K+</b> past trials efficiently.',
        'Developed a clinical trial brainstorming feature leveraging historical data, helping researchers identify potential study sites and sponsors, reducing site selection time by <b>30%</b>.',
        'Integrated <a href="https://www.pinecone.io/" target="_blank" rel="noopener noreferrer">Pinecone Assistant</a>, enabling researchers to receive detailed insights with reference studies, improving research accuracy and efficiency by <b>45%</b>.',
        'Implemented interactive data visualizations using <a href="https://recharts.org/en-US/" target="_blank" rel="noopener noreferrer">Recharts</a>, increasing data accessibility by <b>60%</b> through intuitive charts and graphs.',
        'Redesigned and developed the entire UI/UX of the application, enhancing user engagement by <b>35%</b> and reducing navigation time by <b>25%</b> through an improved interface.',
      ],
    },
    {
      id: 3,
      company: 'Einetic',
      jobTitle: 'SDE Intern',
      companyLink: 'https://www.einetic.com/',
      date: 'Apr 2024 - Sep 2024',
      description: [
        'Improved UI/UX of <a href="https://galadriel.com/" target="_blank" rel="noopener noreferrer">Galadriel</a>, leading to a <b>25%</b> increase in user engagement, and integrated user authentication and dashboard APIs, boosting security and user data accessibility.',
        'Designed and developed the landing page for <a href="https://smallest.ai/" target="_blank" rel="noopener noreferrer">Smallest AI</a>, improving UI/UX for better user experience and engagement.',
        'Enhanced UI/UX and optimized logic for <a href="https://warped.games/" target="_blank" rel="noopener noreferrer">Warped Games</a>, targeting a <b>30%</b> increase in user interaction.',
        'Attended daily stand-up meetings to provide progress updates, discuss ongoing tasks, and collaborate with team members on project coordination and strategy.',
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showExperienceHeading');
        }
      });
    }, options);

    const currentExperienceHeadingRef = experienceHeadingRef.current;

    if (currentExperienceHeadingRef)
      observer.observe(currentExperienceHeadingRef);

    return () => {
      if (currentExperienceHeadingRef)
        observer.unobserve(currentExperienceHeadingRef);
    };
  }, []);

  return (
    <section className='experience_container'>
      <h1 ref={experienceHeadingRef}>Where I&apos;ve Worked</h1>
      <ExperienceItems experiences={experiences} />
    </section>
  );
}
