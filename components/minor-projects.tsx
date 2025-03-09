'use client';

import { useRef, useEffect, useState } from 'react';
import MinorProjectItem from './minor-project-item';
import '../styles/minor-projects.css';
import { MinorProject } from '@/types/minor-project';

export default function MinorProjects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const minorProjectHeadingRef = useRef(null);
  const minorProjects: MinorProject[] = [
    {
      id: 1,
      title: 'NeoChat',
      description:
        "Initially known as 'BridgeTogether', this versatile chat web app offers customizable settings designed for individuals with diverse abilities, facilitating inclusive communication for individuals with varying disabilities like deafness, blindness, and colorblindness.",
      techStack: ['Assembly AI API', 'React', 'Tailwind CSS', ''],
      link: 'https://neo-chat-blush.vercel.app/',
      github: 'https://github.com/ani1609/NeoChat',
      tagLine: 'Won Synchronicity - S1, JU',
    },
    {
      id: 2,
      title: 'Spendwise',
      description:
        'A user-friendly expense tracker app empowering individuals to effortlessly manage and analyze their financial transactions, fostering effective budgeting and financial awareness.',
      techStack: ['ApexCharts', 'React', 'Firebase', 'Tailwind CSS'],
      link: 'https://spendwise-two.vercel.app/',
      github: 'https://github.com/ani1609/Spendwise',
      tagLine: 'KWoC 23, IIT KGP Triumph',
    },
    {
      id: 3,
      title: 'Edinix',
      description:
        'A React library which can be integrated to open-source websites for non-technicals to contribute.',
      techStack: ['React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      link: 'https://github.com/itsme-Subid/EdiNix',
      github: 'https://github.com/itsme-Subid/EdiNix',
      tagLine: 'HackNITR 5.0 Triumph',
    },
    {
      id: 4,
      title: 'Social Media Clone',
      description:
        'A prototype social media clone offering real-time post creation, likes, comments, and sharing features, complete with instantaneous notifications for a dynamic user experience.',
      techStack: ['React', 'Socket.io', 'Express.js', 'MongoDB'],
      link: 'https://github.com/ani1609/HealTetherAssessment',
      github: 'https://github.com/ani1609/HealTetherAssessment',
    },
    // {
    //   id: 3,
    //   title: 'Explorway',
    //   description:
    //     'Explore breathtaking destinations, send enquiries, and let our experienced team create personalized itineraries for an unforgettable journey.',
    //   techStack: ['React', 'Firebase', 'Express.js', 'MongoDB'],
    //   link: 'https://explorway.vercel.app/',
    //   github: 'https://github.com/ani1609/Explorway',
    // },
    // {
    //   id: 4,
    //   title: 'Prathamik',
    //   description:
    //     'Step into the future of online education with an all-inclusive platform that seamlessly combines video calls, Google OCR vision, an online IDE, an AI chatbot, and other cutting-edge features for a dynamic and immersive learning journey.',
    //   techStack: [
    //     'React',
    //     'ChatGPT API',
    //     'VideoSDK',
    //     'Google OCR Vision',
    //     'Firebse',
    //     'Express.js',
    //     'MongoDB',
    //   ],
    //   link: 'https://github.com/ani1609/Prathamik',
    //   github: 'https://github.com/ani1609/Prathamik',
    //   tagLine: 'Hack4Bengal 2.0 Sensation',
    // },
    // {
    //   id: 5,
    //   title: 'Venline',
    //   description:
    //     'Discover an innovative ecommerce marketplace, connecting vendors and customers. Explore farm-fresh fruits and vegetables, supporting local growers and promoting sustainability.',
    //   techStack: ['Ejs', 'CSS', 'Express.js', 'MongoDB'],
    //   link: 'https://github.com/ani1609/Venline',
    //   github: 'https://github.com/ani1609/Venline',
    //   tagLine: 'Diversion 2k23 Success',
    // },
    // {
    //   id: 6,
    //   title: 'Weather App',
    //   description:
    //     'This project seamlessly integrates OpenWeatherMap API to provide real-time weather data for a given locationand OpenCage APIs to deliver dynamic weather information based on user location, enhancing accuracy and user-friendliness.',
    //   techStack: ['OpenWeatherMap API', 'OpenCage API', '', ''],
    //   link: 'https://weather-sable-sigma.vercel.app/',
    //   github: 'https://github.com/ani1609/weather',
    // },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('showMinorProjectsHeading');
      }
    }, options);

    const currentHeadingRef = minorProjectHeadingRef.current;

    if (currentHeadingRef) observer.observe(currentHeadingRef);

    return () => {
      if (currentHeadingRef) observer.unobserve(currentHeadingRef);
    };
  }, []);

  return (
    <section className='minor_projects_parent'>
      <h1 ref={minorProjectHeadingRef}>Other Noteworthy Projects</h1>
      <div className='minor_projects_container'>
        {minorProjects
          .slice(0, showAllProjects ? minorProjects.length : 3)
          .map((minorProject, index) => (
            <MinorProjectItem key={index} minorProject={minorProject} />
          ))}
      </div>
      {minorProjects.length > 3 && (
        <button onClick={() => setShowAllProjects((prev) => !prev)}>
          {showAllProjects ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
}
