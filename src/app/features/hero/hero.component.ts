import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/services/data.service';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly dataService = inject(DataService);
  private readonly scrollService = inject(ScrollService);

  readonly meta = this.dataService.getMeta();

  displayText = signal('');
  showCursor = signal(true);

  private wordIdx = 0;
  private charIdx = 0;
  private isDeleting = false;
  private typingTimer?: ReturnType<typeof setTimeout>;
  private cursorTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startTyping();
    this.cursorTimer = setInterval(() => {
      this.showCursor.update(v => !v);
    }, 530);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
    if (this.cursorTimer) clearInterval(this.cursorTimer);
  }

  scrollTo(section: string): void {
    this.scrollService.scrollToSection(section);
  }

  private startTyping(): void {
    const words = this.meta.typingWords;
    const word = words[this.wordIdx];
    const speed = this.isDeleting ? 65 : 115;

    if (this.isDeleting) {
      this.charIdx = Math.max(0, this.charIdx - 1);
    } else {
      this.charIdx = Math.min(word.length, this.charIdx + 1);
    }

    this.displayText.set(word.slice(0, this.charIdx));

    if (!this.isDeleting && this.charIdx === word.length) {
      this.typingTimer = setTimeout(() => {
        this.isDeleting = true;
        this.startTyping();
      }, 2600);
      return;
    }

    if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.wordIdx = (this.wordIdx + 1) % words.length;
    }

    this.typingTimer = setTimeout(() => this.startTyping(), speed);
  }
}
