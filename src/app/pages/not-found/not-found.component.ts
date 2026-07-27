import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:1.5rem;text-align:center;padding:2rem;">
      <span style="font-size:6rem;font-weight:800;color:var(--color-accent)">404</span>
      <h1 style="font-size:1.5rem;font-weight:700;color:var(--color-text-primary)">Page Not Found</h1>
      <p style="color:var(--color-text-secondary)">The page you're looking for doesn't exist.</p>
      <a routerLink="/" style="color:var(--color-accent);font-weight:500;">Go back home</a>
    </div>
  `,
})
export class NotFoundComponent {}
