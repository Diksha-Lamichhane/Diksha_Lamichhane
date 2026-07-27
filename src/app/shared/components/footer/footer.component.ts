import { Component, inject } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <p class="footer-copy">
          &copy; {{ year }} <strong>Diksha Lamichhane</strong>.
        </p>
        <div class="footer-links">
          <a [href]="contact.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            GitHub
          </a>
          <a [href]="contact.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 2rem 0;
      border-top: 1px solid var(--color-border);
      background: var(--color-bg-secondary);
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .footer-copy {
      font-size: 0.875rem;
      color: var(--color-text-muted);
      margin: 0;
      line-height: 1;

      strong {
        color: var(--color-text-secondary);
        font-weight: 600;
      }
    }

    .footer-links {
      display: flex;
      gap: 1.25rem;

      a {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--color-text-muted);
        text-decoration: none;
        transition: color 200ms ease;

        &:hover {
          color: var(--color-accent);
        }
      }
    }
  `],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly contact = inject(DataService).getContact();
}
