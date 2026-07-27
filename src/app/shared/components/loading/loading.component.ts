import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-screen" [class.fade-out]="fading()">
      <div class="loading-content">
        <div class="loading-logo">
          <div class="logo-ring"></div>
          <span class="logo-initials">DL</span>
        </div>
        <div class="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loading-screen {
      position: fixed;
      inset: 0;
      background: var(--color-bg-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      transition: opacity 0.6s ease, visibility 0.6s ease;

      &.fade-out {
        opacity: 0;
        visibility: hidden;
      }
    }

    .loading-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .loading-logo {
      position: relative;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: var(--color-accent);
      border-right-color: var(--color-accent);
      animation: spin 1s linear infinite;
    }

    .logo-initials {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-accent);
      letter-spacing: 0.05em;
    }

    .loading-dots {
      display: flex;
      gap: 0.5rem;

      span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--color-accent);
        opacity: 0.3;
        animation: dot-pulse 1.2s ease-in-out infinite;

        &:nth-child(2) { animation-delay: 0.2s; }
        &:nth-child(3) { animation-delay: 0.4s; }
      }
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes dot-pulse {
      0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
      40% { opacity: 1; transform: scale(1.3); }
    }
  `],
})
export class LoadingComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();
  fading = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.fading.set(true);
      setTimeout(() => this.loaded.emit(), 600);
    }, 1400);
  }
}
