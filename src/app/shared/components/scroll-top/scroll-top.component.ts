import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../core/services/scroll.service';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (scrollService.showScrollTop()) {
      <button class="scroll-top-btn" (click)="scrollToTop()" aria-label="Scroll to top">
        <span class="material-icons-round">arrow_upward</span>
      </button>
    }
  `,
  styles: [`
    .scroll-top-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 50;
      width: 2.75rem;
      height: 2.75rem;
      border-radius: 50%;
      background: var(--color-accent);
      color: #fff;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(13, 148, 136, 0.35);
      transition: all 200ms ease;
      animation: fadeInUp 0.4s ease-out;

      .material-icons-round {
        font-size: 1.25rem;
      }

      &:hover {
        background: var(--color-accent-hover);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(13, 148, 136, 0.45);
      }

      &:active {
        transform: translateY(0);
      }

      @media (max-width: 768px) {
        bottom: 1.25rem;
        right: 1.25rem;
      }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `],
})
export class ScrollTopComponent {
  readonly scrollService = inject(ScrollService);

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
