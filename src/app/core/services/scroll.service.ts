import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  showScrollTop = signal(false);
  activeSection = signal<string>('hero');

  private scrollListener?: () => void;

  init(): void {
    this.scrollListener = () => {
      this.showScrollTop.set(window.scrollY > 400);
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  destroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const navbarHeight = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
