import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize, retry, catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class httpInterceptor implements HttpInterceptor {
    
    constructor(private router: Router) {   }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var loadingContainer: HTMLElement = document.getElementsByClassName('loader').item(0) as HTMLElement;
        loadingContainer.style.display = 'block';
        // const token: string = localStorage.getItem('activetUser');
        //  if (token) {
        //     let session_obj:any = JSON.parse(localStorage.getItem('activetUser'));
        //     req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + session_obj.token) });
        // }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(
            //delay(500),
            // retry(2),
            finalize(() => loadingContainer.style.display = 'none'),
            catchError((error: HttpErrorResponse) => {
                loadingContainer.style.display = 'none';
                if (error.status == 401) {
                  // 401 handled in auth.interceptor
                  //this.toastr.error(error.message);
                  localStorage.removeItem('activetUser');
                  this.router.navigate(['/logout']);      
                }
                return throwError(error);
              })
        );
    }
}