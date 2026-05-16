import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Department {
  id: string;
  name: string;
  headId: string;
  universityId: string;
}

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculties.html'
})
export class FacultiesComponent implements OnInit {
  private http = inject(HttpClient);
  
  departments = signal<Department[]>([]);
  searchQuery = signal('');
  
  // Computed signal for filtered results
  filteredDepartments = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.departments().filter(dept => 
      dept.name.toLowerCase().includes(query) || 
      dept.id.toLowerCase().includes(query)
    );
  });

  isModalOpen = signal(false);
  
  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.http.get<Department[]>('http://localhost:3000/departments').subscribe(data => {
      this.departments.set(data);
    });
  }

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
