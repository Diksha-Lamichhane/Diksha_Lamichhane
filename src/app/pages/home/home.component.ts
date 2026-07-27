import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { ScrollTopComponent } from '../../shared/components/scroll-top/scroll-top.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ExperienceComponent } from '../../features/experience/experience.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { EducationComponent } from '../../features/education/education.component';
import { AchievementsComponent } from '../../features/achievements/achievements.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    ScrollTopComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  showLoading = signal(true);

  private readonly scrollService = inject(ScrollService);
  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.scrollService.init();
    setTimeout(() => this.setupSectionObserver(), 300);
  }

  ngOnDestroy(): void {
    this.scrollService.destroy();
    this.sectionObserver?.disconnect();
  }

  onLoaded(): void {
    this.showLoading.set(false);
  }

  private setupSectionObserver(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.scrollService.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      this.sectionObserver!.observe(section);
    });
  }
}
