import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  user: any = null;

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(u => {
      this.user = u;
    });
  }

  logout() {
    this.authService.logout();
    this.closeMenu();
  }


isScrolled = false;
  menuOpen = false;
  activeSection = 'hero';

  private readonly sections = ['hero', 'about', 'features', 'courses', 'teachers', 'stats', 'testimonials', 'admission', 'contact'];

  

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 60;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    let current = 'hero';
    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) {
        current = id;
      }
    }
    this.activeSection = current;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
