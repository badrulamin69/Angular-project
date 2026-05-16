import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8 animate-fade-in-up">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Welcome, Dr. Sarah</h1>
          <p class="text-slate-500 mt-1">Here is what's happening in your classes today.</p>
        </div>
        <button class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          New Assignment
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="glass-card p-6 border-t-4 border-t-indigo-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-indigo-500 transition-colors">Active Courses</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">{{ activeCourses() }}</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-purple-500 transition-colors">Total Students</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">{{ totalStudents() }}</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-emerald-500 transition-colors">Avg Attendance</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">92%</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-amber-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-amber-500 transition-colors">Pending Grading</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">45</h3>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Today's Schedule -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Today's Schedule
          </h3>
          <div class="glass-panel overflow-hidden">
            <div class="divide-y divide-slate-200 dark:divide-slate-800">
              <div class="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div class="w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex flex-col items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-800">
                  <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">10:00</span>
                  <span class="text-[10px] font-medium text-slate-500 uppercase">AM</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-slate-900 dark:text-white text-lg">CS-101: Intro to Algorithms</h4>
                  <p class="text-sm text-slate-500">Room 402, Block B &bull; 120 Students</p>
                </div>
                <button class="px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:scale-105 transition-transform">Start Class</button>
              </div>
              <div class="p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div class="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                  <span class="text-xs font-bold text-slate-600 dark:text-slate-400">01:30</span>
                  <span class="text-[10px] font-medium text-slate-500 uppercase">PM</span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-slate-900 dark:text-white text-lg">CS-205: Data Structures</h4>
                  <p class="text-sm text-slate-500">Lab 3, Computer Center &bull; 85 Students</p>
                </div>
                <button class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Details</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Needs Attention -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
            Needs Attention
          </h3>
          <div class="glass-panel p-5 space-y-4">
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0"></div>
              <div>
                <p class="font-bold text-slate-900 dark:text-white text-sm">Grade Midterms (CS-101)</p>
                <p class="text-xs text-slate-500 mt-0.5">45 pending submissions. Deadline in 2 days.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0"></div>
              <div>
                <p class="font-bold text-slate-900 dark:text-white text-sm">Student Advising Request</p>
                <p class="text-xs text-slate-500 mt-0.5">Alice Smith requested a meeting regarding course selection.</p>
              </div>
            </div>
            <button class="w-full mt-2 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">View All Tasks</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FacultyDashboardComponent implements OnInit {
  private http = inject(HttpClient);

  activeCourses = signal(0);
  totalStudents = signal(0);

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/courses').subscribe(courses => {
      this.activeCourses.set(courses.filter(c => c.status === 'Active').length);
    });
    this.http.get<any[]>('http://localhost:3000/students').subscribe(students => {
      this.totalStudents.set(students.length);
    });
  }
}
