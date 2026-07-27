export interface ExperienceItem {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  current?: boolean;
}
