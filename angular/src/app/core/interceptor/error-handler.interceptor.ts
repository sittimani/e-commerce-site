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
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this.handleError(error)
        return throwError(error)
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.authService.logout()
      this.router.navigate(['/login'])
    }
    if(error.status === 400) {
      this.router.navigate(['/not-found'])
    }
    this.toastr.error(error.message)
  }
}
