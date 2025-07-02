export type EmploymentType =
  | 'Full-time'
  | 'Part-time'
  | 'Internship'
  | 'Contract'
  | 'Freelance'
  | 'Entrepreneurial';

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
