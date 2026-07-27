import {
  Component,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/services/theme.service';
import { ScrollService } from '../../../core/services/scroll.service';

interface NavItem {
  label: string;
  id: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navItems: NavItem[] = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  private readonly themeService = inject(ThemeService);
  readonly scrollService = inject(ScrollService);

  readonly isDark = computed(() => this.themeService.theme() === 'dark');
  readonly activeSection = this.scrollService.activeSection;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  navigateTo(id: string): void {
    this.scrollService.scrollToSection(id);
    this.mobileMenuOpen.set(false);
  }

  goHome(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.mobileMenuOpen.set(false);
  }
}
