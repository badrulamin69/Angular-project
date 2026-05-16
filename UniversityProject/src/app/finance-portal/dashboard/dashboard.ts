import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-6 animate-fade-in-up">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Treasury Analytics</h1>
          <p class="text-slate-500 mt-1">Real-time revenue monitoring, cash flow analysis, and financial health.</p>
        </div>
        <div class="flex gap-2">
          <select class="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-bold text-sm outline-none text-slate-700 dark:text-slate-300">
            <option>Fall Semester 2026</option>
            <option>Summer Semester 2026</option>
          </select>
          <button class="px-4 py-2.5 bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            Export CSV
          </button>
        </div>
      </div>

      <!-- KPI Widgets -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="glass-card p-6 border-b-4 border-b-emerald-500">
          <div class="flex justify-between items-start mb-2">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Revenue (Net)</p>
            <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold rounded">+12.5%</span>
          </div>
          <h3 class="text-3xl font-black text-slate-900 dark:text-white">$4.2M</h3>
          <p class="text-xs font-bold text-slate-400 mt-2">Collected this semester</p>
        </div>
        <div class="glass-card p-6 border-b-4 border-b-indigo-500">
          <div class="flex justify-between items-start mb-2">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Outstanding Receivables</p>
            <span class="px-2 py-0.5 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[10px] font-bold rounded">+4.2%</span>
          </div>
          <h3 class="text-3xl font-black text-slate-900 dark:text-white">$845K</h3>
          <p class="text-xs font-bold text-slate-400 mt-2">From 1,204 students</p>
        </div>
        <div class="glass-card p-6 border-b-4 border-b-amber-500">
          <div class="flex justify-between items-start mb-2">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Scholarships / Waivers</p>
          </div>
          <h3 class="text-3xl font-black text-slate-900 dark:text-white">$1.1M</h3>
          <p class="text-xs font-bold text-slate-400 mt-2">Awarded internally</p>
        </div>
        <div class="glass-card p-6 border-b-4 border-b-rose-500">
          <div class="flex justify-between items-start mb-2">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Payroll Expense</p>
          </div>
          <h3 class="text-3xl font-black text-slate-900 dark:text-white">$620K</h3>
          <p class="text-xs font-bold text-slate-400 mt-2">Monthly burn rate</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Revenue Chart Simulator -->
        <div class="lg:col-span-2 space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Cash Flow Analytics</h3>
          
          <div class="glass-panel p-6 h-80 flex flex-col justify-end relative">
            <div class="absolute top-6 right-6 flex items-center gap-4">
              <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-emerald-500"></div><span class="text-xs font-bold text-slate-500">Inflow</span></div>
              <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-rose-500"></div><span class="text-xs font-bold text-slate-500">Outflow</span></div>
            </div>

            <!-- Simulated Line/Bar Chart -->
            <div class="flex items-end justify-between h-48 gap-4 w-full border-b border-slate-200 dark:border-slate-800 pb-2 relative z-10">
              
              <div class="flex flex-col items-center gap-1 w-full relative">
                <div class="w-1/2 bg-emerald-500 rounded-t h-[80%] absolute bottom-0 -ml-2 hover:opacity-80 transition-opacity"></div>
                <div class="w-1/2 bg-rose-500 rounded-t h-[20%] absolute bottom-0 ml-2 hover:opacity-80 transition-opacity"></div>
              </div>
              <div class="flex flex-col items-center gap-1 w-full relative">
                <div class="w-1/2 bg-emerald-500 rounded-t h-[40%] absolute bottom-0 -ml-2 hover:opacity-80 transition-opacity"></div>
                <div class="w-1/2 bg-rose-500 rounded-t h-[25%] absolute bottom-0 ml-2 hover:opacity-80 transition-opacity"></div>
              </div>
              <div class="flex flex-col items-center gap-1 w-full relative">
                <div class="w-1/2 bg-emerald-500 rounded-t h-[95%] absolute bottom-0 -ml-2 hover:opacity-80 transition-opacity"></div>
                <div class="w-1/2 bg-rose-500 rounded-t h-[30%] absolute bottom-0 ml-2 hover:opacity-80 transition-opacity"></div>
              </div>
              <div class="flex flex-col items-center gap-1 w-full relative">
                <div class="w-1/2 bg-emerald-500 rounded-t h-[60%] absolute bottom-0 -ml-2 hover:opacity-80 transition-opacity"></div>
                <div class="w-1/2 bg-rose-500 rounded-t h-[20%] absolute bottom-0 ml-2 hover:opacity-80 transition-opacity"></div>
              </div>
              <div class="flex flex-col items-center gap-1 w-full relative">
                <div class="w-1/2 bg-emerald-500 rounded-t h-[30%] absolute bottom-0 -ml-2 hover:opacity-80 transition-opacity"></div>
                <div class="w-1/2 bg-rose-500 rounded-t h-[15%] absolute bottom-0 ml-2 hover:opacity-80 transition-opacity"></div>
              </div>

            </div>
            
            <div class="flex justify-between w-full mt-3 text-xs font-bold text-slate-400">
              <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
            </div>
          </div>
        </div>

        <!-- Recent Transactions -->
        <div class="space-y-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
          <div class="glass-panel overflow-hidden">
            <div class="divide-y divide-slate-100 dark:divide-slate-800">
              
              <div class="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
                    <p class="text-[10px] text-slate-500 font-mono">INV-2026-9042</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-black text-emerald-500">+$2,450.00</p>
                  <p class="text-[10px] text-slate-400 font-bold">Today, 10:42 AM</p>
                </div>
              </div>
              
              <div class="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white">AWS Infrastructure</p>
                    <p class="text-[10px] text-slate-500 font-mono">EXP-SRV-04</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-black text-slate-900 dark:text-white">-$8,120.50</p>
                  <p class="text-[10px] text-slate-400 font-bold">Yesterday</p>
                </div>
              </div>
              
              <div class="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-900 dark:text-white">Emily Davis</p>
                    <p class="text-[10px] text-slate-500 font-mono">INV-2026-9041</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-black text-emerald-500">+$1,850.00</p>
                  <p class="text-[10px] text-slate-400 font-bold">Yesterday</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FinanceDashboardComponent {}
