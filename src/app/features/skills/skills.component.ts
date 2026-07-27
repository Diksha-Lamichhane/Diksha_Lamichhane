import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkillLevel } from '../../core/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly skillGroups = inject(DataService).getSkills();

  levelDots(level: SkillLevel): boolean[] {
    return [true, level !== 'intermediate', level === 'expert'];
  }

  levelLabel(level: SkillLevel): string {
    const map: Record<SkillLevel, string> = { expert: 'Expert', advanced: 'Advanced', intermediate: 'Intermediate' };
    return map[level];
  }
}
