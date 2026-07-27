import { Injectable } from '@angular/core';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly data = PORTFOLIO_DATA;

  getSkills() { return this.data.skills; }
  getExperience() { return this.data.experience; }
  getProjects() { return this.data.projects; }
  getEducation() { return this.data.education; }
  getCertifications() { return this.data.certifications; }
  getAchievements() { return this.data.achievements; }
  getStats() { return this.data.stats; }
  getContact() { return this.data.contact; }
  getMeta() { return this.data.meta; }
}
