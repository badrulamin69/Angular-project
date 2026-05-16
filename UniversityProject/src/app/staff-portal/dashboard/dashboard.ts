import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8 animate-fade-in-up">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Campus Operations Overview</h1>
          <p class="text-slate-500 mt-1">Manage admissions, fee collections, and administrative tasks.</p>
        </div>
        <button class="px-5 py-2.5 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-0.5 transition-all font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Generate Report
        </button>
      </div>

      <!-- KPI Widgets -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="glass-card p-6 border-t-4 border-t-teal-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-teal-500 transition-colors">Pending Admissions</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">124</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-emerald-500 transition-colors">Fee Collection</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">$1.2M</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-amber-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-amber-500 transition-colors">Hostel Occupancy</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">88%</h3>
        </div>
        <div class="glass-card p-6 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform cursor-pointer group">
          <p class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 group-hover:text-blue-500 transition-colors">Library Issued</p>
          <h3 class="text-4xl font-black text-slate-900 dark:text-white">845</h3>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Recent Admissions -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Recent Admission Applications</h3>
          <div class="glass-panel overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Applicant</th>
                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Program</th>
                    <th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-700/50">
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">John Anderson</td>
                    <td class="px-6 py-4 text-slate-600 dark:text-slate-300">Computer Science</td>
                    <td class="px-6 py-4"><span class="px-2.5 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-md text-xs font-bold">In Review</span></td>
                  </tr>
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td class="px-6 py-4 font-bold text-slate-900 dark:text-white">Emma Wilson</td>
                    <td class="px-6 py-4 text-slate-600 dark:text-slate-300">Business Admin</td>
                    <td class="px-6 py-4"><span class="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md text-xs font-bold">Approved</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- System Alerts -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">System Alerts</h3>
          <div class="glass-panel p-5 space-y-4">
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
              <div>
                <p class="font-bold text-slate-900 dark:text-white text-sm">Server Maintenance</p>
                <p class="text-xs text-slate-500 mt-0.5">Scheduled for Saturday at 2:00 AM.</p>
              </div>
            </div>
            <div class="flex gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <div>
                <p class="font-bold text-slate-900 dark:text-white text-sm">New Policy Update</p>
                <p class="text-xs text-slate-500 mt-0.5">Please review the updated refund policy document.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StaffDashboardComponent {}
