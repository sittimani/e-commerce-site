import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/user-management/services/auth.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this.handleError(error)
        return throwError(error)
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 401)
      this.authService.logout()
    alert(error.message)
  }
}
