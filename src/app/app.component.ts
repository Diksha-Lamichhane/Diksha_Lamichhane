import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `],
})
export class AppComponent implements OnInit {
  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    // ThemeService initializes theme via signal effect in constructor
  }
}
