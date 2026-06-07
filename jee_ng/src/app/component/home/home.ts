import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {

  loading = true;
  errorMessage = '';
  messageSent = false;
  isSubmitting = false;
  homepage: any = null;
  programs: any[] = [];
  contactData = { firstName: '', lastName: '', email: '', phone: '', programId: '', message: '' };
  features: any[] = [];
  courses: any[] = [];
  teachers: any[] = [];
  stats: any[] = [];
  testimonials: any[] = [];
  contactItems: any[] = [];

  private fadeObserver!: IntersectionObserver;
  private statObserver!: IntersectionObserver;
  private statsAnimated = false;
  private homeService = inject(HomeService);

  ngOnInit(): void {
    forkJoin({
      homepage: this.homeService.getHomepage().pipe(catchError(() => of(null))),
      features: this.homeService.getFeatures().pipe(catchError(() => of([]))),
      courses: this.homeService.getCourses().pipe(catchError(() => of([]))),
      teachers: this.homeService.getTeachers().pipe(catchError(() => of([]))),
      stats: this.homeService.getStats().pipe(catchError(() => of([]))),
      testimonials: this.homeService.getTestimonials().pipe(catchError(() => of([]))),
      contactItems: this.homeService.getContactItems().pipe(catchError(() => of([]))),
      programs: this.homeService.getPrograms().pipe(catchError(() => of([]))),
    }).subscribe(({ homepage, features, courses, teachers, stats, testimonials, contactItems, programs }) => {
      this.homepage = homepage;
      this.features = features;
      this.courses = courses;
      this.teachers = teachers;
      this.stats = stats.map((stat: any) => ({ ...stat, displayValue: '0' }));
      this.testimonials = testimonials;
      this.contactItems = contactItems;
      this.programs = programs;
      this.loading = false;
      this.initializeObservers();
    }, (error) => {
      this.errorMessage = 'Unable to load homepage content. Please try again later.';
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.fadeObserver?.disconnect();
    this.statObserver?.disconnect();
  }

  private initializeObservers(): void {
    this.fadeObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => this.fadeObserver.observe(el));

    this.statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsSection = document.getElementById('stats');
    if (statsSection) this.statObserver.observe(statsSection);
  }

  private animateCounters(): void {
    this.stats.forEach((s: any) => {
      const duration = 2000;
      const step = s.target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= s.target) {
          current = s.target;
          clearInterval(timer);
        }
        s.displayValue = Math.floor(current).toLocaleString() + (s.suffix || '');
      }, 16);
    });
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  sendMessage(): void {
    if (!this.contactData.firstName || !this.contactData.email || !this.contactData.message) {
      this.errorMessage = 'Please fill in all required contact fields.';
      return;
    }

    this.errorMessage = '';
    this.isSubmitting = true;

    this.homeService.submitEnquiry(this.contactData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.messageSent = true;
        this.contactData = { firstName: '', lastName: '', email: '', phone: '', programId: '', message: '' };
        setTimeout(() => this.messageSent = false, 3000);
      },
      error: () => {
        this.isSubmitting = false;
        this.errorMessage = 'Failed to submit your message. Please try again later.';
      }
    });
  }
}
