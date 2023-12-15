import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}` // Get the token from your auth service
      },
    });


    return next.handle(authRequest).pipe(
      tap(
        (event) => {
          // Handle successful responses if needed
          if (event instanceof HttpResponse) {
            console.log("event is ", typeof event.body)
            if (event.body) {
              this.authService.setToken(event.body);
           
            }
          }
        },
        (error) => {
          // Handle errors if needed
        }
      )
    );
  }
}
