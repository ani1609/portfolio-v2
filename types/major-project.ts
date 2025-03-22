import { StaticImageData } from 'next/image';

export interface MajorProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: StaticImageData;
  githubLink?: string;
  deployedLink?: string;
  tagLine?: string;
}
