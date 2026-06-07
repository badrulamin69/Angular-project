import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private homeService = inject(HomeService);

  // demo accounts loaded from API to avoid hardcoded credentials
  demoAccounts: any[] = [];

  fillDemo(email: string, pass: string) {
    this.email = email;
    this.password = pass;
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.message || 'Invalid credentials';
      }
    });
  }

  ngOnInit(): void {
    this.homeService.getDemoAccounts().subscribe(res => this.demoAccounts = res || []);
  }
}
