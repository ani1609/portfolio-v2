"use client";

import { useRef, useEffect } from "react";
import { FolderIcon, GithubIcon } from "@/assets/icons";
import Link from "next/link";
import "../styles/minor-project-item.css";
import { MinorProject } from "@/types/minor-project";

export default function MinorProjectItems({
  minorProject,
}: {
  minorProject: MinorProject;
}) {
  const minorProjectRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("showMinorProject");
      }
    }, options);

    const currentMinorProjectRef = minorProjectRef.current;

    if (currentMinorProjectRef) observer.observe(currentMinorProjectRef);

    return () => {
      if (currentMinorProjectRef) observer.unobserve(currentMinorProjectRef);
    };
  }, []);

  const handleGithubClick = () => {
    window.open(minorProject.github, "_blank");
  };

  return (
    <div
      // href={minorProject.link}
      className="minor_project"
      // target="_blank"
      ref={minorProjectRef}
      rel="noopener noreferrer"
    >
      <div className="icons">
        <div className="folder_icon">
          <FolderIcon className="size-full" />
        </div>
        <Link
          href={minorProject.github}
          className="github_icon"
          target="_blank"
          onClick={handleGithubClick}
          rel="noopener noreferrer"
        >
          <GithubIcon className="size-full" />
        </Link>
      </div>

      <div className="minor_title">
        <h2>{minorProject.title}</h2>
        {minorProject.tagLine && <h4>{minorProject.tagLine}</h4>}
      </div>

      <p>{minorProject.description}</p>

      <ul>
        {minorProject.techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
