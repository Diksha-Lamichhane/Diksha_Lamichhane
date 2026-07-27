import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataService } from '../../core/services/data.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly contact = inject(DataService).getContact();

  form = { name: '', email: '', subject: '', message: '' };
  submitted = signal(false);

  readonly contactLinks = [
    { icon: 'mail_outline',  label: 'Email',    value: this.contact.email,    href: `mailto:${this.contact.email}` },
    { icon: 'work_outline',  label: 'LinkedIn', value: 'https://www.linkedin.com/in/diksha-lamichhane-6047b61a8/', href: this.contact.linkedin },
    { icon: 'code',          label: 'GitHub',   value: 'github.com/diksha-lamichhane',      href: this.contact.github },
    { icon: 'location_on',   label: 'Location', value: this.contact.location,  href: null },
  ];

  onSubmit(formRef: NgForm): void {
    if (!formRef.valid) return;
    const subject = encodeURIComponent(this.form.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
    );
    window.open(`mailto:${this.contact.email}?subject=${subject}&body=${body}`, '_blank');
    this.submitted.set(true);
    setTimeout(() => {
      this.form = { name: '', email: '', subject: '', message: '' };
      this.submitted.set(false);
    }, 4000);
  }
}
