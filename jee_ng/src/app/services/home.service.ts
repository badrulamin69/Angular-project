import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class HomeService {
  private api = inject(ApiService);

  getHomepage() { return this.api.get<any>('homepage', 1); }
  getFeatures() { return this.api.list('features'); }
  getCourses() { return this.api.list('courses'); }
  getTeachers() { return this.api.list('teachers'); }
  getStats() { return this.api.list('stats'); }
  getTestimonials() { return this.api.list('testimonials'); }
  getContactItems() { return this.api.list('contactItems'); }
  getPrograms() { return this.api.list('programs'); }
  getDemoAccounts() { return this.api.list('demoAccounts'); }
  submitEnquiry(enquiry: any) { return this.api.create('enquiries', enquiry); }
}
