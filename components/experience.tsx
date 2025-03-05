import { useRef, useEffect } from "react";
import ExperienceItems from "./experience-items";
import "../styles/experience.css";
import { Experience } from "@/types/experience";

export default function ExperienceSection() {
  const experienceHeadingRef = useRef(null);

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Einetic",
      jobTitle: "SDE Intern",
      companyLink: "https://www.einetic.com/",
      date: "Apr 2024 - Present",
      description: [
        'Developed <a href="https://uiastra.com/" target="_blank" rel="noopener noreferrer">UI Astra</a>, an in-house component library with reusable components and an icon library, reducing development speed by 40%',
        'Improved UI/UX of <a href="https://galadriel.com/" target="_blank" rel="noopener noreferrer">Galadriel</a>, leading to a 25% increase in user engagement, and integrated user authentication and dashboard APIs, boosting security and user data accessibility.',
        "Attended daily stand-up meetings to provide progress updates, discuss ongoing tasks, and collaborate with team members on project coordination and strategy.",
        'Currently enhancing UI/UX and optimizing logic for <a href="https://warped.games/" target="_blank" rel="noopener noreferrer">Warped Games</a>, targeting a 30% increase in user interaction.',
      ],
    },
    {
      id: 2,
      company: "KWoC 2023",
      jobTitle: "Mentor",
      companyLink: "https://kwoc.kossiitkgp.org/",
      date: "Nov 2023 - Jan 2024",
      description: [
        'Initiated and crafted the project <a href="https://spendwise-two.vercel.app/" target="_blank" rel="noopener noreferrer">Spendwise</a> with initial basic features.',
        "Mentored the project through Kharagpur Winter of Code, 2023, guiding over 30 contributors.",
        "Carefully reviewed and integrated contributions, ensuring project quality and coherence, which led to a 20% reduction in bugs and inconsistencies.",
        "Maintained project standards and managed updates, throughout the mentorship period, resulting in a 25% improvement in project stability and performance.",
      ],
    },
    {
      id: 3,
      company: "Freelancing",
      jobTitle: "Freelance Web Developer",
      companyLink: "",
      date: "Jul 2023 - Present",
      description: [
        "As a freelancer, I have successfully delivered a wide range of projects, including the creation of personal portfolios, blog websites, custom e-learning platforms for tutors, and various other tailored online solutions.",
      ],
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showExperienceHeading");
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
    <section className="experience_container">
      <h1 ref={experienceHeadingRef}>Where I&apos;ve Worked</h1>
      <ExperienceItems experiences={experiences} />
    </section>
  );
}
