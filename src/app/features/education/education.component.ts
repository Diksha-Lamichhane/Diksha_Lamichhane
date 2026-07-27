import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <div class="section">
      <div class="container">
        <div class="section-header" [appScrollReveal]="0">
          <span class="section-label">Academic Background</span>
          <h2 class="section-title">Education</h2>
          <div class="section-divider"></div>
        </div>

        <div class="edu-list">
          @for (edu of education; track edu.id; let i = $index) {
            <div class="edu-card card" [appScrollReveal]="i * 100">
              <div class="edu-icon-col">
                <span class="material-icons-round edu-icon">school</span>
              </div>
              <div class="edu-body">
                <div class="edu-header">
                  <h3 class="edu-degree">{{ edu.degree }} in {{ edu.field }}</h3>
                  <span class="edu-year">{{ edu.startYear }} – {{ edu.endYear }}</span>
                </div>
                <p class="edu-institution">{{ edu.institution }}</p>
                @if (edu.description) {
                  <p class="edu-desc">{{ edu.description }}</p>
                }
              </div>
            </div>
          }
        </div>

        
      </div>
    </div>
  `,
  styles: [`
    .edu-list { display: flex; flex-direction: column; gap: 1rem; max-width: 680px; }

    .edu-card {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      padding: 1.5rem;
    }

    .edu-icon-col {
      flex-shrink: 0;
      width: 3rem;
      height: 3rem;
      border-radius: var(--radius-lg);
      background: var(--color-accent-bg);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .edu-icon { font-size: 1.375rem; color: var(--color-accent); }

    .edu-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 0.25rem;
    }

    .edu-degree {
      font-size: 1.0625rem;
      font-weight: 700;
      color: var(--color-text-primary);
      margin: 0;
    }

    .edu-year {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8125rem;
      font-weight: 500;
      color: var(--color-accent);
      white-space: nowrap;
    }

    .edu-institution {
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--color-text-secondary);
      margin: 0 0 0.5rem;
    }

    .edu-desc {
      font-size: 0.9rem;
      line-height: 1.65;
      color: var(--color-text-muted);
      margin: 0;
    }

    .cert-placeholder {
      display: flex;
      align-items: center;
      gap: 0.875rem;
      margin-top: 2rem;
      padding: 1.25rem 1.5rem;
      border-radius: var(--radius-lg);
      border: 1.5px dashed var(--color-border);
      max-width: 480px;

      .material-icons-round { font-size: 1.375rem; color: var(--color-text-muted); }
      p { font-size: 0.9375rem; color: var(--color-text-muted); margin: 0; font-style: italic; }
    }
  `],
})
export class EducationComponent {
  readonly education = inject(DataService).getEducation();
  readonly certifications = inject(DataService).getCertifications();
}
