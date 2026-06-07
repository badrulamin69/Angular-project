import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class StudentsService {
  private api = inject(ApiService);
  list() { return this.api.list('students'); }
  get(id: number) { return this.api.get('students', id); }
  create(item: any) { return this.api.create('students', item); }
  update(id: number, item: any) { return this.api.update('students', id, item); }
  patch(id: number, item: any) { return this.api.patch('students', id, item); }
  delete(id: number) { return this.api.delete('students', id); }
}
