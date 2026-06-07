import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  // Generic endpoints (kept for backward compatibility)
  getStudents() { return this.http.get<any[]>(`${this.apiUrl}/students`); }
  getTeachers() { return this.http.get<any[]>(`${this.apiUrl}/teachers`); }
  getCourses() { return this.http.get<any[]>(`${this.apiUrl}/courses`); }

  // Generic CRUD helper
  list<T = any>(path: string) { return this.http.get<T[]>(`${this.apiUrl}/${path}`); }
  get<T = any>(path: string, id: string | number) { return this.http.get<T>(`${this.apiUrl}/${path}/${id}`); }
  create<T = any>(path: string, item: Partial<T>) { return this.http.post<T>(`${this.apiUrl}/${path}`, item); }
  update<T = any>(path: string, id: string | number, item: Partial<T>) { return this.http.put<T>(`${this.apiUrl}/${path}/${id}`, item); }
  patch<T = any>(path: string, id: string | number, item: Partial<T>) { return this.http.patch<T>(`${this.apiUrl}/${path}/${id}`, item); }
  delete(path: string, id: string | number) { return this.http.delete(`${this.apiUrl}/${path}/${id}`); }
}
