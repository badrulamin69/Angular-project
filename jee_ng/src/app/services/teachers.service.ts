import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class TeachersService {
  private api = inject(ApiService);
  list() { return this.api.list('teachers'); }
  get(id: number) { return this.api.get('teachers', id); }
  create(item: any) { return this.api.create('teachers', item); }
  update(id: number, item: any) { return this.api.update('teachers', id, item); }
  delete(id: number) { return this.api.delete('teachers', id); }
}
