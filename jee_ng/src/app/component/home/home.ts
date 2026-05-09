import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // ── Loader ──────────────────────────────────────────────
  loaderHidden = false;

  // ── Contact Form ─────────────────────────────────────────
  messageSent = false;
  contactData = { firstName: '', lastName: '', email: '', phone: '', program: '', message: '' };

  // ── Features ─────────────────────────────────────────────
  features = [
    { icon: 'fa-user-graduate',       title: 'Student Management',    desc: 'Complete student profiles, enrollment records, academic history, and performance tracking in one place.',       bg: '#e8f0fd', color: '#2557a7' },
    { icon: 'fa-chalkboard-teacher',  title: 'Teacher Management',    desc: 'Streamline teacher schedules, assignments, performance evaluations, and salary management effortlessly.',      bg: '#e1f5ee', color: '#0a7c5a' },
    { icon: 'fa-calendar-check',      title: 'Attendance Tracking',   desc: 'Real-time digital attendance with automated parent notifications and detailed monthly reports.',               bg: '#fff3d6', color: '#b06000' },
    { icon: 'fa-file-alt',            title: 'Online Results',         desc: 'Instant grade publishing, report card generation, and progress tracking with visual analytics.',               bg: '#fceaf0', color: '#a32d5c' },
    { icon: 'fa-dollar-sign',         title: 'Fee Management',         desc: 'Automated fee collection, payment reminders, digital receipts, and financial reporting dashboard.',           bg: '#ffe8e8', color: '#a32d2d' },
    { icon: 'fa-clock',               title: 'Class Scheduling',       desc: 'Smart timetable builder with conflict detection, room assignment, and substitute teacher management.',        bg: '#e8f8fc', color: '#0e7490' },
    { icon: 'fa-bullhorn',            title: 'Notice Board',           desc: 'Digital announcements, event calendars, and emergency alerts delivered instantly to all stakeholders.',       bg: '#f0eefd', color: '#5340b5' },
    { icon: 'fa-comments',            title: 'Parent Communication',   desc: 'Secure messaging, progress sharing, and parent-teacher meeting scheduling in a dedicated portal.',           bg: '#fff0e8', color: '#b05000' },
  ];

  // ── Courses ──────────────────────────────────────────────
  courses = [
    { emoji: '🔬', tag: 'Science',    tagBg: '#e8f0fd', tagColor: '#2557a7', gradient: 'linear-gradient(135deg,#1a3c6e,#2557a7)', title: 'Science (Biology, Chemistry, Physics)',  desc: 'Comprehensive science curriculum with state-of-the-art lab facilities and experienced faculty.', students: 420, duration: '3 Years', rating: '4.9' },
    { emoji: '📊', tag: 'Commerce',   tagBg: '#e1f5ee', tagColor: '#0a7c5a', gradient: 'linear-gradient(135deg,#0ea5a0,#2557a7)', title: 'Commerce (Accounting & Business)',       desc: 'Master business fundamentals, accounting principles, and economics for a thriving career.',     students: 380, duration: '3 Years', rating: '4.8' },
    { emoji: '🎨', tag: 'Arts',       tagBg: '#fceaf0', tagColor: '#a32d5c', gradient: 'linear-gradient(135deg,#e8504a,#f4a724)', title: 'Humanities & Fine Arts',                desc: 'Explore literature, history, philosophy, and visual arts in a creatively inspiring environment.', students: 290, duration: '3 Years', rating: '4.7' },
    { emoji: '💻', tag: 'Technology', tagBg: '#e8f8fc', tagColor: '#0e7490', gradient: 'linear-gradient(135deg,#1a2238,#0ea5a0)', title: 'Computer Science & IT Training',         desc: 'Full-stack development, AI fundamentals, networking, and software engineering mastery.',        students: 510, duration: '2 Years', rating: '4.9' },
    { emoji: '🌍', tag: 'Language',   tagBg: '#f0eefd', tagColor: '#5340b5', gradient: 'linear-gradient(135deg,#5340b5,#0ea5a0)', title: 'Language Courses (5 Languages)',         desc: 'English, Arabic, French, Spanish, and Mandarin — from beginner to advanced certification.',     students: 340, duration: '1 Year',  rating: '4.8' },
  ];

  // ── Teachers ─────────────────────────────────────────────
  teachers = [
    { initials: 'DR', name: 'Dr. Rahman Ahmed',  subject: 'Physics & Mathematics',  exp: 18, bg: '#e8f0fd', color: '#2557a7', borderColor: '#b5d4f4' },
    { initials: 'SK', name: 'Ms. Sarah Khan',    subject: 'Chemistry & Biology',    exp: 14, bg: '#e1f5ee', color: '#0a7c5a', borderColor: '#9fe1cb' },
    { initials: 'MH', name: 'Mr. Masud Hasan',   subject: 'Computer Science & AI',  exp: 11, bg: '#fff3d6', color: '#b06000', borderColor: '#fac775' },
    { initials: 'NI', name: 'Mrs. Nadia Islam',  subject: 'English Literature',     exp: 16, bg: '#fceaf0', color: '#a32d5c', borderColor: '#f4c0d1' },
    { initials: 'KR', name: 'Mr. Kamal Roy',     subject: 'Accounting & Business',  exp: 13, bg: '#f0eefd', color: '#5340b5', borderColor: '#afa9ec' },
    { initials: 'FA', name: 'Ms. Fariha Alam',   subject: 'French & Arabic',        exp:  9, bg: '#e8f8fc', color: '#0e7490', borderColor: '#85b7eb' },
  ];

  // ── Stats ────────────────────────────────────────────────
  stats = [
    { icon: 'fa-users',              label: 'Total Students Enrolled', target: 5200, suffix: '+', displayValue: '0' },
    { icon: 'fa-chalkboard-teacher', label: 'Expert Teaching Faculty', target: 120,  suffix: '+', displayValue: '0' },
    { icon: 'fa-book-open',          label: 'Active Courses Available',target: 48,   suffix: '',  displayValue: '0' },
    { icon: 'fa-trophy',             label: 'Annual Success Rate',     target: 98,   suffix: '%', displayValue: '0' },
  ];

  // ── Testimonials ─────────────────────────────────────────
  testimonials = [
    { initials: 'ZA', name: 'Zia Ahmed',     role: 'Parent — Grade 10 Student',   bg: '#e8f0fd', color: '#2557a7', text: 'Academy Management System completely transformed my son\'s academic trajectory. The teachers genuinely care about every student\'s success, and the digital management system keeps us informed in real time.' },
    { initials: 'RH', name: 'Riya Hossain',  role: 'Student — CS Batch 2024',     bg: '#e1f5ee', color: '#0a7c5a', text: 'The Computer Science program here is exceptional. I landed a software engineering internship before even graduating thanks to the industry-relevant curriculum and supportive mentors.' },
    { initials: 'SM', name: 'Selina Mahmud', role: 'Parent — Grade 8 Student',    bg: '#fff3d6', color: '#b06000', text: 'As a parent, the transparency this academy provides is unmatched. Attendance, grades, fees — everything is accessible from my phone. I always feel connected to my daughter\'s education.' },
    { initials: 'TK', name: 'Tanvir Khan',   role: 'Alumni — BUET Scholar 2023',  bg: '#f0eefd', color: '#5340b5', text: 'I scored a full scholarship to BUET after studying science here. The faculty\'s dedication and the disciplined academic environment gave me the foundation to achieve my dreams.' },
    { initials: 'NB', name: 'Nafisa Begum',  role: 'Student — French Advanced',   bg: '#fceaf0', color: '#a32d5c', text: 'The language courses at Academy Management System are phenomenal! In just 8 months I became conversational in French. The teachers are native-level speakers who make every class engaging and practical.' },
    { initials: 'KI', name: 'Kabir Islam',   role: 'Parent — Commerce Department',bg: '#e8f8fc', color: '#0e7490', text: 'The commerce program prepared my daughter with real-world business skills. She started her own small business at age 17! Academy Management System doesn\'t just teach — they inspire entrepreneurial thinking.' },
  ];

  // ── Contact Items ─────────────────────────────────────────
  contactItems = [
    { icon: 'fa-location-dot', label: 'Our Address',    bg: '#e8f0fd', color: '#2557a7', value: '123 Education Avenue, Gulshan-2<br>Dhaka-1212, Bangladesh' },
    { icon: 'fa-phone',        label: 'Phone Numbers',  bg: '#e1f5ee', color: '#0a7c5a', value: '+880 1711-234567 (Admissions)<br>+880 2-9871234 (Main Office)' },
    { icon: 'fa-envelope',     label: 'Email Address',  bg: '#fff3d6', color: '#b06000', value: 'admissions@edupeak.edu.bd<br>info@edupeak.edu.bd' },
    { icon: 'fa-clock',        label: 'Office Hours',   bg: '#f0eefd', color: '#5340b5', value: 'Sunday – Thursday: 8:00 AM – 5:00 PM<br>Saturday: 9:00 AM – 1:00 PM' },
  ];

  // ── Observers ────────────────────────────────────────────
  private fadeObserver!: IntersectionObserver;
  private statObserver!: IntersectionObserver;
  private statsAnimated = false;

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getStudents().subscribe(res => console.log('Students:', res));
    this.apiService.getTeachers().subscribe(res => console.log('Teachers:', res));
    this.apiService.getCourses().subscribe(res => console.log('Courses:', res));

    // Hide loader after 1.8s
    setTimeout(() => (this.loaderHidden = true), 1800);

    // Fade-in on scroll
    setTimeout(() => {
      this.fadeObserver = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.1 }
      );
      document.querySelectorAll('.fade-in').forEach(el => this.fadeObserver.observe(el));

      // Stats counter
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
    }, 100);
  }

  ngOnDestroy(): void {
    this.fadeObserver?.disconnect();
    this.statObserver?.disconnect();
  }

  private animateCounters(): void {
    this.stats.forEach(s => {
      const duration = 2000;
      const step = s.target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= s.target) {
          current = s.target;
          clearInterval(timer);
        }
        s.displayValue = Math.floor(current).toLocaleString() + s.suffix;
      }, 16);
    });
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  sendMessage(): void {
    this.messageSent = true;
    setTimeout(() => (this.messageSent = false), 3000);
  }
}
