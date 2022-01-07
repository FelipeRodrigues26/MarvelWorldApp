import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AutenticationServiceService } from '../services/autentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {email:"felipemrodrigues26@gmail.com", pass:"123456"} as User;

  constructor(private authService:AutenticationServiceService) {}

  ngOnInit(): void {
    
  }

  signIn() {
    console.log(this.user.email + this.user.pass);
    this.authService.signIn(this.user.email, this.user.pass);
  }

  signOut(){
    this.authService.signOut();
  }
  
}
