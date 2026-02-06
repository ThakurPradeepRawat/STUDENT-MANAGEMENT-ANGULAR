import { HttpInterceptorFn } from '@angular/common/http';
import {  HttpErrorResponse} from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Service/auth.service';

import {
  catchError,
  switchMap,
  throwError
} from 'rxjs';
let isRefreshing = false;
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token  = localStorage.getItem('token');
  const auth = inject(AuthService)
  if (token){
    req=req.clone({
      setHeaders :{
        Authorization : `Bearer${token}`
      }
    });
  }
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

        if (error.status === 401 && !isRefreshing) {
        isRefreshing = true;
        return auth.Refresh()
        .pipe( switchMap(response => {
            isRefreshing = false;

            localStorage.setItem(
              'accessToken',
              response.accessToken
            );

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${response.accessToken}`
              }
            });

            return next(retryReq);
          }),

          catchError(refreshError => {
            isRefreshing = false;
            localStorage.clear();
            window.location.href = '/login';
            return throwError(() => refreshError);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
