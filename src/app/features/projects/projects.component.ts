import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly allProjects = inject(DataService).getProjects();

  activeFilter = signal('all');

  readonly filters = [
    { key: 'all',       label: 'All' },
    { key: 'backend',   label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend',  label: 'Frontend' },
    { key: 'api',       label: 'API' },
  ];

  readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.category.includes(f));
  });

  private readonly gradients = [
    'linear-gradient(135deg, #0d9488 0%, #38bdf8 100%)',
    'linear-gradient(135deg, #7c3aed 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #0369a1 0%, #0d9488 100%)',
    'linear-gradient(135deg, #b45309 0%, #ef4444 100%)',
  ];

  cardGradient(index: number): string {
    return this.gradients[index % this.gradients.length];
  }

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
