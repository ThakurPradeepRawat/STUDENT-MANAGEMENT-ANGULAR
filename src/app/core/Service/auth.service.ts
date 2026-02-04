import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError , throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiurl = "https://localhost:7140/students";
  constructor(private http : HttpClient){};
  Login(Email : any , Password : any) : Observable<any>
  {
    return this.http.post<any[]>(this.apiurl +"/auth/login" ,{Email , Password}).pipe(
      catchError(this.LoginErrorHandle)
    )
  };

LoginErrorHandle(error:HttpErrorResponse){
  return throwError(error)
}
 
}
