import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const saved = localStorage.getItem('edupeak_user');
    if (saved) {
      try {
        const user = JSON.parse(saved);
        if (user && user.token) {
          const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${user.token}` } });
          return next.handle(authReq);
        }
      } catch { }
    }
    return next.handle(req);
  }
}
