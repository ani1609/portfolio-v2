export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Contract'
  | 'Freelance'
  | 'Mentorship';

export type LocationType = 'Remote' | 'On-site' | 'Hybrid';

export interface Experience {
  id: number;
  companyName: string;
  companyNickName: string;
  jobTitle: string;
  location: LocationType;
  date: string;
  employmentType: EmploymentType;
  companyLink: string;
  description: string[];
}
