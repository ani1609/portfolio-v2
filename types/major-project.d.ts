import { StaticImageData } from 'next/image';

export interface MajorProject {
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  githubLink?: string;
  deployedLink?: string;
  tagLine?: string;
}
