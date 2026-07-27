export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  startYear: number;
  endYear: number | 'Present';
  description?: string;
  achievements?: string[];
}
