import { StaticImageData } from 'next/image';

export interface MajorProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  image: StaticImageData;
  link?: string;
  tagLine?: string;
}
