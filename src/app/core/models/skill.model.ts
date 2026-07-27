export type SkillLevel = 'expert' | 'advanced' | 'intermediate';

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

export type SkillCategory = 'backend' | 'frontend' | 'database' | 'tools' | 'architecture';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  icon: string;
  skills: Skill[];
}
