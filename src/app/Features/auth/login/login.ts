import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../core/Service/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    constructor(private authService : AuthService){}
    Email : string ="";
    Password : string = "";
    Login(){
      this.authService.Login( this.Email , this.Password).subscribe((res)=>{
        localStorage.setItem('token' , res.token);
      },error=>{
         alert('Invalid login credentials');
      }
    );
    }
}
