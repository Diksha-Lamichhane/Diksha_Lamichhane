import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly dataService = inject(DataService);
  readonly meta = this.dataService.getMeta();
  readonly stats = this.dataService.getStats();
  readonly paragraphs = this.meta.about.split('\n\n').filter(Boolean);

  readonly practiceTags = [
    'Clean Architecture', 'SOLID Principles', 'API Design',
    'Database Design', 'Agile / Scrum', '3rd-party Integrations',
    'AI-Assisted Development',
  ];

  readonly infoItems = [
    { icon: 'location_on',  label: 'Location',  value: 'Kathmandu, Nepal' },
    { icon: 'school',       label: 'Education', value: 'BSc. CSIT' },
    { icon: 'work_outline', label: 'Status',    value: 'Open to Work', highlight: true },
    { icon: 'translate',    label: 'Languages', value: 'Nepali, English' },
  ];
}
