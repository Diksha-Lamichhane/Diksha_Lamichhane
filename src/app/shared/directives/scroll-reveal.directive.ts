import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: '[appScrollReveal]', standalone: true })
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input('appScrollReveal') delay = 0;
  private observer?: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.65s cubic-bezier(0.4,0,0.2,1) ${this.delay}ms, transform 0.65s cubic-bezier(0.4,0,0.2,1) ${this.delay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
