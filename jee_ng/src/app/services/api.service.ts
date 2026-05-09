import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000';

  getStudents() {
    return this.http.get<any[]>(`${this.apiUrl}/students`);
  }

  getTeachers() {
    return this.http.get<any[]>(`${this.apiUrl}/teachers`);
  }

  getCourses() {
    return this.http.get<any[]>(`${this.apiUrl}/courses`);
  }
}
