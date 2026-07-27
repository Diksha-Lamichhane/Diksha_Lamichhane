import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <div class="section section-alt">
      <div class="container">
        <div class="section-header centered" [appScrollReveal]="0">
          <span class="section-label">Milestones</span>
          <h2 class="section-title">Achievements</h2>
          <div class="section-divider"></div>
        </div>

        <div class="achievements-grid">
          @for (item of achievements; track item.id; let i = $index) {
            <div class="achievement-card card" [appScrollReveal]="i * 100">
              <div class="ach-icon-wrap">
                <span class="material-icons-round">{{ item.icon }}</span>
              </div>
              @if (item.value) {
                <span class="ach-value">{{ item.value }}</span>
              }
              <h3 class="ach-title">{{ item.title }}</h3>
              <p class="ach-desc">{{ item.description }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .achievements-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;

      @media (max-width: 768px) { grid-template-columns: 1fr; }
    }

    .achievement-card {
      padding: 2rem 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.625rem;
    }

    .ach-icon-wrap {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background: var(--color-accent-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.25rem;

      .material-icons-round { font-size: 1.625rem; color: var(--color-accent); }
    }

    .ach-value {
      font-size: 2.25rem;
      font-weight: 800;
      line-height: 1;
      color: var(--color-text-primary);
      letter-spacing: -0.03em;
    }

    .ach-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0;
    }

    .ach-desc {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--color-text-secondary);
      margin: 0;
    }
  `],
})
export class AchievementsComponent {
  readonly achievements = inject(DataService).getAchievements();
}
