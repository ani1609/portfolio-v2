export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Contract'
  | 'Freelance'
  | 'Mentorship';
export interface Experience {
  id: number;
  companyName: string;
  companyNickName: string;
  jobTitle: string;
  location: string;
  date: string;
  employmentType: EmploymentType;
  companyLink: string;
  description: string[];
}
