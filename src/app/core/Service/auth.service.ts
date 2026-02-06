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
    return this.http.post<any[]>(this.apiurl +"/auth/login" ,{Email , Password}, {withCredentials : true}).pipe(
      catchError(this.LoginErrorHandle)
    )
  };
  Register(Email : any , Password : any) : Observable<any>
  {
    return this.http.post<any[]>(this.apiurl +"/auth/Register" ,{Email , Password}).pipe(
      catchError(this.LoginErrorHandle)
    )
  };

  Refresh(): Observable<any>
  {
    return this.http.post<any[]>(this.apiurl+"/auth/Refresh" , {} , {withCredentials : true}).pipe(
      catchError(this.LoginErrorHandle)
    )
  };

LoginErrorHandle(error:HttpErrorResponse){
  return throwError(error)
}
 
}
