export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Contract'
  | 'Freelance'
  | 'Mentorship';
export interface Experience {
  id: number;
  company: string;
  jobTitle: string;
  location: string;
  date: string;
  employmentType: EmploymentType;
  companyLink: string;
  description: string[];
}
