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
        console.log("Login Succesfull")
      },error=>{
         alert('Invalid login credentials');
      }
    );
    }
  Ragister(){
    this.authService.Ragister(this.Email , this.Password).subscribe((res)=>{
        console.log("Ragistration Succesfull")
    })
  }
   
}
