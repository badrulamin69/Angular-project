import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private api = inject(ApiService);
  list() { return this.api.list('courses'); }
  get(id: number) { return this.api.get('courses', id); }
  create(item: any) { return this.api.create('courses', item); }
  update(id: number, item: any) { return this.api.update('courses', id, item); }
  delete(id: number) { return this.api.delete('courses', id); }
}
