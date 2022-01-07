import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async } from '@firebase/util';
import { User } from '../models/user';
import { AutenticationServiceService } from '../services/autentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {email:"felipemrodrigues26@gmail.com", pass:"123456"} as User;
  msgSucessError:string='';
  alertVisible:boolean = false;
  alertType:string='';

  constructor(private authService:AutenticationServiceService, private router:Router) {}

  ngOnInit(): void {
    
  }

  async signIn() {
    console.log(this.user.email + this.user.pass);
    
    this.authService.signIn(this.user.email, this.user.pass)
      .then(() => {
        this.alertVisible = true;
        this.msgSucessError = 'Autenticação realizada com sucesso';
        this.alertType = 'success';
        setTimeout(() => {
          this.router.navigate(['personagem/lista']);
        }, 2000)
        
        console.log("Usuario logout sucess")
      }
      ).catch(error => {
        this.alertVisible = true;
        this.alertType = 'danger';
        this.msgSucessError = 'Autenticação falhou: ';
        console.log("Erro ao deslogar" + error)
      })

  }

  signOut(){
    this.authService.signOut();
  }
  
}
